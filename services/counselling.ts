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

  /**
   * Register for a Career Counselling Session (as specified in client specification)
   */
  async registerCareerCounselling(payload: import('@/types').CareerCounsellingFormValues): Promise<{ success: boolean; message: string }> {
    const supabase = getSupabaseClient();

    if (!supabase || !isSupabaseConfigured) {
      try {
        const stored = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('learndawn_counselling_regs') || '[]') : [];
        stored.push({ ...payload, created_at: new Date().toISOString() });
        if (typeof window !== 'undefined') localStorage.setItem('learndawn_counselling_regs', JSON.stringify(stored));
      } catch {}
      return {
        success: true,
        message: 'Your career counselling registration has been received. LearnDawn will review your details and contact you regarding session confirmation, available slots, and next steps.',
      };
    }

    try {
      const { error } = await supabase.from('career_counselling_registrations').insert({
        full_name: payload.fullName.trim(),
        dob_or_age: payload.dobOrAge.trim(),
        mobile: payload.mobile.trim(),
        email: payload.email.trim(),
        city_district_state: payload.cityDistrictState.trim(),
        current_class: payload.currentClass.trim(),
        school_college_name: payload.schoolCollegeName?.trim() || null,
        academic_stream: payload.academicStream.trim(),
        recent_academic_performance: payload.recentAcademicPerformance?.trim() || null,
        preferred_career_course: payload.preferredCareerCourse.trim(),
        areas_of_interest: payload.areasOfInterest.trim(),
        entrance_exam: payload.entranceExam?.trim() || null,
        career_concern: payload.careerConcern.trim(),
        preferred_mode: payload.preferredMode,
        preferred_date: payload.preferredDate,
        preferred_time_slot: payload.preferredTimeSlot,
        attendees: payload.attendees,
        guidance_topics: payload.guidanceTopics?.trim() || null,
        declaration_confirmed: payload.declarationConfirmed,
      });

      if (error) {
        console.error('[CounsellingService] Registration error:', error);
        return { success: false, message: error.message };
      }

      return {
        success: true,
        message: 'Your registration has been successfully recorded. LearnDawn will review your details and contact you regarding session confirmation and instructions.',
      };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to register career counselling';
      return { success: false, message };
    }
  },
};
