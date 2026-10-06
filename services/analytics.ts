import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';

export type AnalyticsEventType =
  | 'registration'
  | 'login'
  | 'exam_selection'
  | 'course_selection'
  | 'course_enrollment'
  | 'lesson_completion'
  | 'test_attempt'
  | 'search'
  | 'study_material_access'
  | 'cta_click';

export const AnalyticsService = {
  /**
   * Track high-level user engagement event
   */
  async track(event: AnalyticsEventType, properties: Record<string, unknown> = {}) {
    try {
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Analytics Event] ${event}:`, properties);
      }

      const supabase = getSupabaseClient();
      if (supabase && isSupabaseConfigured) {
        await supabase.from('analytics_events').insert({
          event_name: event,
          properties,
        });
      }
    } catch (err) {
      // Non-blocking telemetry
      console.warn('Analytics logging skipped:', err);
    }
  }
};
