import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';
import { ContactFormValues } from '@/types';

export const ContactService = {
  async submitInquiry(payload: ContactFormValues): Promise<{ success: boolean; message: string }> {
    const supabase = getSupabaseClient();
    
    if (!supabase || !isSupabaseConfigured) {
      // In local preview/demo mode, record the enquiry in memory/localStorage and return success
      try {
        const stored = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('learndawn_enquiries') || '[]') : [];
        stored.push({ ...payload, created_at: new Date().toISOString() });
        if (typeof window !== 'undefined') localStorage.setItem('learndawn_enquiries', JSON.stringify(stored));
      } catch {}
      return { 
        success: true, 
        message: 'Your enquiry has been received and logged. Our academic team will connect with you shortly.' 
      };
    }

    const { error } = await supabase.from('contact_messages').insert({
      name: payload.name.trim(),
      email: payload.email.trim(),
      mobile: payload.mobile?.trim() || null,
      user_category: payload.userCategory || 'Student',
      subject: payload.subject?.trim() || 'General Admission & Goal Counselling',
      message: payload.message.trim(),
    });

    if (error) {
      console.error('[ContactService] Error inserting contact message:', error);
      return { success: false, message: error.message };
    }

    return { 
      success: true, 
      message: 'Your enquiry has been successfully recorded. Our academic team will review and respond promptly.' 
    };
  }
};
