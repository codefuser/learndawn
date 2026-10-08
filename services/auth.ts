import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';
import { UserProfile, UserRole } from '@/types';

export const AuthService = {
  /**
   * Get currently authenticated user profile from persistent database session
   */
  async getCurrentProfile(): Promise<UserProfile | null> {
    try {
      // 1. Check server database session via /api/auth/me
      const res = await fetch('/api/auth/me', {
        method: 'GET',
        cache: 'no-store',
      });
      if (res.ok) {
        const data = await res.json();
        if (data.user) {
          return data.user as UserProfile;
        }
      }
    } catch (e) {
      console.warn('[AuthService] /api/auth/me check note:', e);
    }

    // 2. Fallback to Supabase client session if available
    const supabase = getSupabaseClient();
    if (supabase && isSupabaseConfigured) {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error || !session) return null;

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
      } catch (err) {
        console.warn('[AuthService] Supabase fallback profile error:', err);
      }
    }

    return null;
  },

  /**
   * Sign In with Email/Mobile & Password via Database
   */
  async signIn(identifier: string, password?: string): Promise<{ user: UserProfile | null; error: string | null }> {
    if (!identifier || !identifier.trim()) {
      return { user: null, error: 'Email or mobile number is required.' };
    }

    if (!password) {
      return { user: null, error: 'Password is required to authenticate.' };
    }

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        return {
          user: null,
          error: data.error || 'Authentication failed. Please check your credentials.',
        };
      }

      // If Supabase is configured and email is provided, trigger background sign in
      const supabase = getSupabaseClient();
      if (supabase && isSupabaseConfigured && identifier.includes('@')) {
        supabase.auth.signInWithPassword({ email: identifier, password }).catch(() => {
          // ignore unconfirmed email errors in background
        });
      }

      return { user: data.user, error: null };
    } catch (err: any) {
      return { user: null, error: err?.message || 'Network error during sign in.' };
    }
  },

  /**
   * Sign Up student in Database and Supabase
   */
  async signUp(payload: {
    fullName: string;
    email: string;
    mobile: string;
    targetExam: string;
    password?: string;
    language?: 'en' | 'hi' | 'ta';
    role?: UserRole;
  }): Promise<{ user: UserProfile | null; error: string | null }> {
    if (!payload.fullName || !payload.fullName.trim()) {
      return { user: null, error: 'Full name is required.' };
    }

    if (!payload.email || !payload.email.includes('@')) {
      return { user: null, error: 'Valid email address is required.' };
    }

    if (!payload.password || payload.password.length < 6) {
      return { user: null, error: 'Password must be at least 6 characters long.' };
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: payload.fullName,
          email: payload.email,
          mobile: payload.mobile,
          targetExam: payload.targetExam,
          password: payload.password,
          language: payload.language || 'en',
          role: payload.role || 'student',
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        return {
          user: null,
          error: data.error || 'Registration failed.',
        };
      }

      // Also trigger Supabase signup in background if configured
      const supabase = getSupabaseClient();
      if (supabase && isSupabaseConfigured) {
        supabase.auth
          .signUp({
            email: payload.email,
            password: payload.password,
            options: {
              data: {
                full_name: payload.fullName,
                mobile: payload.mobile,
                target_goal_exam: payload.targetExam,
              },
            },
          })
          .catch(() => {});
      }

      return { user: data.user, error: null };
    } catch (err: any) {
      return { user: null, error: err?.message || 'Network error during registration.' };
    }
  },

  /**
   * Sign Out
   */
  async signOut(): Promise<void> {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (e) {
      // ignore
    }

    const supabase = getSupabaseClient();
    if (supabase && isSupabaseConfigured) {
      await supabase.auth.signOut().catch(() => {});
    }
  },

  /**
   * Demo role switcher
   */
  setDemoRole(role: UserRole) {
    return null;
  },
};
