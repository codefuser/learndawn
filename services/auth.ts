import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';
import { UserProfile, UserRole } from '@/types';

export const AuthService = {
  /**
   * Get currently authenticated user profile directly from Supabase
   */
  async getCurrentProfile(): Promise<UserProfile | null> {
    const supabase = getSupabaseClient();

    if (supabase && isSupabaseConfigured) {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error || !session) return null;

        // Fetch user profile from database
        const { data: profile } = await supabase
          .from('profiles')
          .select(`*, user_roles(roles(name))`)
          .eq('id', session.user.id)
          .maybeSingle();

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
            academic_class: profile.academic_class,
            role: userRole,
            is_active: profile.is_active ?? true,
            created_at: profile.created_at,
          };
        }

        // If profile row doesn't exist yet, construct from session user metadata
        const userMeta = session.user.user_metadata || {};
        const fallbackProfile: UserProfile = {
          id: session.user.id,
          email: session.user.email || '',
          full_name: userMeta.full_name || 'Student',
          mobile: userMeta.mobile || '',
          preferred_language: userMeta.preferred_language || 'en',
          target_goal_exam: userMeta.target_goal_exam || 'NEET UG',
          academic_class: 'Class 12',
          role: 'student',
          is_active: true,
          created_at: session.user.created_at || new Date().toISOString(),
        };

        // Self-heal: upsert row into public.profiles
        try {
          await supabase.from('profiles').upsert({
            id: fallbackProfile.id,
            email: fallbackProfile.email,
            full_name: fallbackProfile.full_name,
            mobile: fallbackProfile.mobile,
            target_goal_exam: fallbackProfile.target_goal_exam,
            preferred_language: fallbackProfile.preferred_language,
            is_active: true,
            updated_at: new Date().toISOString(),
          });
        } catch {
          // ignore
        }

        return fallbackProfile;
      } catch (err) {
        console.error('[AuthService] Error fetching Supabase profile:', err);
      }
    }

    return null;
  },

  /**
   * Sign In with Email & Password via Supabase Auth
   */
  async signIn(email: string, password?: string): Promise<{ user: UserProfile | null; error: string | null }> {
    const supabase = getSupabaseClient();

    if (!supabase || !isSupabaseConfigured) {
      return { 
        user: null, 
        error: 'Supabase database is not configured. Please verify your environment keys in Vercel or .env.local.' 
      };
    }

    if (!password) {
      return { user: null, error: 'Password is required to authenticate.' };
    }

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

    return { user: null, error: 'Authentication failed. Please verify your credentials.' };
  },

  /**
   * Sign Up student in Supabase Auth and database tables
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

    if (!supabase || !isSupabaseConfigured) {
      return { 
        user: null, 
        error: 'Supabase database is not configured. Please verify your environment keys in Vercel or .env.local.' 
      };
    }

    if (!payload.password || payload.password.length < 6) {
      return { user: null, error: 'Password must be at least 6 characters long.' };
    }

    // 1. Create User in Supabase Auth
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
      // 2. Immediately upsert the student profile into public.profiles table
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

        // 3. Ensure student role is assigned
        const { data: roleData } = await supabase
          .from('roles')
          .select('id')
          .eq('name', 'student')
          .maybeSingle();

        if (roleData) {
          await supabase.from('user_roles').upsert({
            user_id: data.user.id,
            role_id: roleData.id,
          });
        }
      } catch (insertErr) {
        console.warn('[AuthService] Profile database save note:', insertErr);
      }

      const profile = await this.getCurrentProfile();
      if (profile) {
        return { user: profile, error: null };
      }

      // If email confirmation is pending on Supabase, return authenticated profile representation
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

    return { user: null, error: 'Failed to create student account.' };
  },

  /**
   * Sign Out
   */
  async signOut(): Promise<void> {
    const supabase = getSupabaseClient();
    if (supabase && isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
  },

  /**
   * Demo role switcher (deprecated, kept for interface compatibility)
   */
  setDemoRole(role: UserRole) {
    return null;
  }
};
