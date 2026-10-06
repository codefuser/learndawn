import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';
import { ContactFormValues } from '@/types';

export const ContactService = {
  async submitInquiry(payload: ContactFormValues): Promise<{ success: boolean; message: string }> {
    const supabase = getSupabaseClient();
    if (supabase && isSupabaseConfigured) {
      const { error } = await supabase.from('contact_messages').insert({
        name: payload.name,
        email: payload.email,
        mobile: payload.mobile,
        subject: payload.subject,
        message: payload.message,
      });

      if (error) {
        return { success: false, message: error.message };
      }
      return { success: true, message: 'Your message has been received. Our academic team will connect with you within 24 hours.' };
    }

    // In demo/preview mode: simulate realistic submission
    return {
      success: true,
      message: 'Thank you! Your query has been logged and our admissions counsellors will contact you shortly.',
    };
  }
};
