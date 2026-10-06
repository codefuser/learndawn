import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';
import { UserProfile, UserRole } from '@/types';

// Mock session key for demo/offline preview mode
const DEMO_AUTH_STORAGE_KEY = 'learndawn_demo_user';

export const AuthService = {
  /**
   * Get current session or active demo profile
   */
  async getCurrentProfile(): Promise<UserProfile | null> {
    const supabase = getSupabaseClient();

    if (supabase && isSupabaseConfigured) {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error || !session) return null;

        // Fetch profile
        const { data: profile } = await supabase
          .from('profiles')
          .select(`*, user_roles(roles(name))`)
          .eq('id', session.user.id)
          .single();

        if (profile) {
          const userRole = (profile.user_roles?.[0]?.roles?.name as UserRole) || 'student';
          return {
            id: profile.id,
            email: profile.email,
            full_name: profile.full_name,
            mobile: profile.mobile,
            avatar_url: profile.avatar_url,
            preferred_language: profile.preferred_language || 'en',
            target_goal_exam: profile.target_goal_exam,
            role: userRole,
            is_active: profile.is_active ?? true,
            created_at: profile.created_at,
          };
        }
      } catch (err) {
        console.error('Error fetching Supabase profile:', err);
      }
    }

    // Fallback: Check local storage demo profile
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(DEMO_AUTH_STORAGE_KEY);
      if (stored) {
        try {
          return JSON.parse(stored) as UserProfile;
        } catch {
          return null;
        }
      }
    }

    return null;
  },

  /**
   * Sign In with Email & Password
   */
  async signIn(email: string, password?: string): Promise<{ user: UserProfile | null; error: string | null }> {
    const supabase = getSupabaseClient();

    if (supabase && isSupabaseConfigured && password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { user: null, error: error.message };
      }

      if (data.user) {
        const profile = await this.getCurrentProfile();
        return { user: profile, error: null };
      }
    }

    // Demo / preview mode behavior
    // If logging in as an admin demo or student demo
    const isAdminEmail = email.toLowerCase().includes('admin');
    const demoUser: UserProfile = {
      id: isAdminEmail ? 'usr-demo-admin-01' : 'usr-demo-student-01',
      email,
      full_name: isAdminEmail ? 'Administrator (Preview)' : 'Arjun Sharma',
      mobile: '+91 98765 43210',
      preferred_language: 'en',
      target_goal_exam: 'NEET UG',
      academic_class: 'Class 12',
      role: isAdminEmail ? 'admin' : 'student',
      is_active: true,
      created_at: new Date().toISOString(),
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem(DEMO_AUTH_STORAGE_KEY, JSON.stringify(demoUser));
    }

    return { user: demoUser, error: null };
  },

  /**
   * Sign Up
   */
  async signUp(payload: {
    fullName: string;
    email: string;
    mobile: string;
    targetExam: string;
    password?: string;
    language?: 'en' | 'hi' | 'ta';
  }): Promise<{ user: UserProfile | null; error: string | null }> {
    const supabase = getSupabaseClient();

    if (supabase && isSupabaseConfigured && payload.password) {
      const { data, error } = await supabase.auth.signUp({
        email: payload.email,
        password: payload.password,
        options: {
          data: {
            full_name: payload.fullName,
            mobile: payload.mobile,
            target_goal_exam: payload.targetExam,
            preferred_language: payload.language || 'en',
          },
        },
      });

      if (error) {
        return { user: null, error: error.message };
      }

      if (data.user) {
        // Explicitly guarantee user profile row in public.profiles table
        try {
          await supabase.from('profiles').upsert({
            id: data.user.id,
            email: payload.email,
            full_name: payload.fullName,
            mobile: payload.mobile,
            target_goal_exam: payload.targetExam,
            preferred_language: payload.language || 'en',
            academic_class: 'Class 12',
            is_active: true,
            updated_at: new Date().toISOString(),
          });
        } catch (profileErr) {
          console.warn('[AuthService] Profile table upsert note:', profileErr);
        }

        const profile = await this.getCurrentProfile();
        if (profile) {
          return { user: profile, error: null };
        }

        // Return newly registered user profile
        const registeredUser: UserProfile = {
          id: data.user.id,
          email: payload.email,
          full_name: payload.fullName,
          mobile: payload.mobile,
          preferred_language: payload.language || 'en',
          target_goal_exam: payload.targetExam,
          academic_class: 'Class 12',
          role: 'student',
          is_active: true,
          created_at: new Date().toISOString(),
        };
        return { user: registeredUser, error: null };
      }
    }

    // Preview / demo mode sign up
    const newStudent: UserProfile = {
      id: `usr-${Date.now()}`,
      email: payload.email,
      full_name: payload.fullName,
      mobile: payload.mobile,
      preferred_language: payload.language || 'en',
      target_goal_exam: payload.targetExam,
      academic_class: 'Class 12',
      role: 'student', // ALWAYS student on signup as per Section 53
      is_active: true,
      created_at: new Date().toISOString(),
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem(DEMO_AUTH_STORAGE_KEY, JSON.stringify(newStudent));
    }

    return { user: newStudent, error: null };
  },

  /**
   * Sign Out
   */
  async signOut(): Promise<void> {
    const supabase = getSupabaseClient();
    if (supabase && isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    if (typeof window !== 'undefined') {
      localStorage.removeItem(DEMO_AUTH_STORAGE_KEY);
    }
  },

  /**
   * Set Demo Role (for client testing between student and admin views)
   */
  setDemoRole(role: UserRole) {
    if (typeof window !== 'undefined') {
      const current = localStorage.getItem(DEMO_AUTH_STORAGE_KEY);
      let user: UserProfile;
      if (current) {
        user = JSON.parse(current);
        user.role = role;
        if (role === 'admin') {
          user.full_name = 'Learndawn Admin (Executive)';
        } else {
          user.full_name = 'Arjun Sharma';
        }
      } else {
        user = {
          id: role === 'admin' ? 'usr-demo-admin-01' : 'usr-demo-student-01',
          email: role === 'admin' ? 'admin@learndawn.in' : 'student@learndawn.in',
          full_name: role === 'admin' ? 'Learndawn Admin (Executive)' : 'Arjun Sharma',
          mobile: '+91 98765 43210',
          preferred_language: 'en',
          target_goal_exam: 'NEET UG',
          role,
          is_active: true,
          created_at: new Date().toISOString(),
        };
      }
      localStorage.setItem(DEMO_AUTH_STORAGE_KEY, JSON.stringify(user));
      return user;
    }
    return null;
  }
};
