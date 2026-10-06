import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';

export interface CounsellingRequestPayload {
  userId?: string;
  category: string;
  targetExam: string;
  preferredSlot?: string;
  notes?: string;
}

export interface MentorBookingPayload {
  userId?: string;
  mentorId?: string;
  mentorName: string;
  scheduledFor: string;
  notes?: string;
}

export const CounsellingService = {
  /**
   * Submit an academic / career counselling request to Supabase
   */
  async requestCounselling(payload: CounsellingRequestPayload): Promise<{ success: boolean; message: string }> {
    const supabase = getSupabaseClient();

    if (!supabase || !isSupabaseConfigured) {
      return {
        success: false,
        message: 'Database connection not configured. Please ensure Supabase keys are active.',
      };
    }

    try {
      const { error } = await supabase.from('counselling_sessions').insert({
        user_id: payload.userId || null,
        category: payload.category,
        target_exam: payload.targetExam,
        counsellor_notes: payload.notes || 'Online counselling booking requested via Learndawn portal',
        status: 'requested',
      });

      if (error) {
        console.error('[CounsellingService] Supabase error:', error);
        return { success: false, message: error.message };
      }

      return {
        success: true,
        message: 'Your counselling request has been recorded in the database. An academic advisor will reach out shortly.',
      };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to record counselling request';
      return { success: false, message };
    }
  },

  /**
   * Book a 1:1 mentor session in Supabase
   */
  async bookMentorSession(payload: MentorBookingPayload): Promise<{ success: boolean; message: string }> {
    const supabase = getSupabaseClient();

    if (!supabase || !isSupabaseConfigured) {
      return {
        success: false,
        message: 'Database connection not configured. Please ensure Supabase keys are active.',
      };
    }

    try {
      const { error } = await supabase.from('mentor_bookings').insert({
        user_id: payload.userId || null,
        scheduled_for: payload.scheduledFor,
        student_notes: `Mentor: ${payload.mentorName}. Notes: ${payload.notes || 'None'}`,
        status: 'confirmed',
      });

      if (error) {
        console.error('[CounsellingService] Mentor booking error:', error);
        return { success: false, message: error.message };
      }

      return {
        success: true,
        message: `1:1 Session with ${payload.mentorName} successfully booked and recorded in the database.`,
      };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to book mentor session';
      return { success: false, message };
    }
  },
};
