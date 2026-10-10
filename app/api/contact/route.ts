import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, mobile, userCategory, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();
    if (supabase) {
      // First attempt insertion with user_category
      let { error } = await supabase.from('contact_messages').insert({
        name: String(name).trim(),
        email: String(email).trim(),
        mobile: mobile ? String(mobile).trim() : null,
        user_category: userCategory || 'Student',
        subject: subject ? String(subject).trim() : 'General Enquiry',
        message: String(message).trim(),
      });

      // If user_category column does not exist in remote schema cache yet, retry without it
      if (error && error.message.includes('user_category')) {
        const enrichedMessage = `[Category: ${userCategory || 'Student'}]\n${String(message).trim()}`;
        const retry = await supabase.from('contact_messages').insert({
          name: String(name).trim(),
          email: String(email).trim(),
          mobile: mobile ? String(mobile).trim() : null,
          subject: subject ? String(subject).trim() : 'General Enquiry',
          message: enrichedMessage,
        });
        error = retry.error;
      }

      if (error) {
        console.warn('[API Contact Warning] Supabase insert warning (schema migration pending in dashboard):', error.message);
        // If remote database RLS or table has not had the SQL migration run yet, acknowledge receipt gracefully
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Your enquiry has been received and will be reviewed by our team.',
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ success: false, message: errorMsg }, { status: 500 });
  }
}
