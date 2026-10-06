import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';
import { ContactFormValues } from '@/types';

export const ContactService = {
  async submitInquiry(payload: ContactFormValues): Promise<{ success: boolean; message: string }> {
    const supabase = getSupabaseClient();
    
    if (!supabase || !isSupabaseConfigured) {
      return { 
        success: false, 
        message: 'Database connection not configured. Please ensure Supabase keys are active.' 
      };
    }

    const { error } = await supabase.from('contact_messages').insert({
      name: payload.name.trim(),
      email: payload.email.trim(),
      mobile: payload.mobile?.trim() || null,
      subject: payload.subject?.trim() || 'General Admission & Goal Counselling',
      message: payload.message.trim(),
    });

    if (error) {
      console.error('[ContactService] Error inserting contact message:', error);
      return { success: false, message: error.message };
    }

    return { 
      success: true, 
      message: 'Your inquiry has been successfully recorded in the database. Our academic team will connect within 24 hours.' 
    };
  }
};
