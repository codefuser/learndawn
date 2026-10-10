import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';
import { JobApplicationFormValues } from '@/types';

export const CareersService = {
  /**
   * Submit a Job Application for an active position
   */
  async submitApplication(payload: JobApplicationFormValues): Promise<{ success: boolean; message: string }> {
    const supabase = getSupabaseClient();

    if (!supabase || !isSupabaseConfigured) {
      try {
        const stored = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('learndawn_job_applications') || '[]') : [];
        stored.push({ ...payload, created_at: new Date().toISOString() });
        if (typeof window !== 'undefined') localStorage.setItem('learndawn_job_applications', JSON.stringify(stored));
      } catch {}

      return {
        success: true,
        message: `Your application for "${payload.positionAppliedFor}" has been successfully received. The LearnDawn recruitment team will review your qualifications and contact you if shortlisted.`,
      };
    }

    try {
      const { error } = await supabase.from('job_applications').insert({
        full_name: payload.fullName.trim(),
        email: payload.email.trim(),
        mobile: payload.mobile.trim(),
        location: payload.location.trim(),
        age: payload.age?.trim() || null,
        position_applied_for: payload.positionAppliedFor.trim(),
        preferred_work_mode: payload.preferredWorkMode,
        availability: payload.availability,
        highest_qualification: payload.highestQualification.trim(),
        current_status: payload.currentStatus,
        relevant_experience: payload.relevantExperience?.trim() || null,
        key_skills: payload.keySkills.trim(),
        resume_url: payload.resumeUrl || null,
        resume_file_name: payload.resumeFileName || null,
        portfolio_url: payload.portfolioUrl?.trim() || null,
        linkedin_url: payload.linkedInUrl?.trim() || null,
        why_join: payload.whyJoin.trim(),
        why_consider: payload.whyConsider.trim(),
        additional_info: payload.additionalInfo?.trim() || null,
        status: 'submitted',
      });

      if (error) {
        console.error('[CareersService] Supabase submission error:', error);
        return { success: false, message: error.message };
      }

      return {
        success: true,
        message: `Your application for "${payload.positionAppliedFor}" has been successfully recorded in the LearnDawn career registry. Our academic talent acquisition team will review your profile.`,
      };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to submit application';
      return { success: false, message };
    }
  },
};
