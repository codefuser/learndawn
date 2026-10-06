import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('your-project-ref') &&
  !supabaseAnonKey.includes('your-anon-key')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

/**
 * Safe accessor for client-side Supabase interactions
 */
export function getSupabaseClient() {
  if (!isSupabaseConfigured || !supabase) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '[Learndawn] Supabase environment variables not configured. Operating in preview/demo mock mode.'
      );
    }
    return null;
  }
  return supabase;
}
