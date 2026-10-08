import { NextRequest, NextResponse } from 'next/server';
import { UsersDatabase } from '@/lib/db/usersDb';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, mobile, targetExam, password, role, language } = body;

    if (!fullName || !fullName.trim()) {
      return NextResponse.json({ success: false, error: 'Full name is required.' }, { status: 400 });
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json({ success: false, error: 'A valid email address is required.' }, { status: 400 });
    }

    if (!password || password.length < 6) {
      return NextResponse.json(
        { success: false, error: 'Password must be at least 6 characters long.' },
        { status: 400 }
      );
    }

    const { user, error } = UsersDatabase.createUser({
      fullName,
      email,
      mobile: mobile || '',
      targetExam: targetExam || 'NEET UG',
      password,
      role: role || 'student',
      language: language || 'en',
    });

    if (error || !user) {
      return NextResponse.json({ success: false, error: error || 'Failed to register account.' }, { status: 400 });
    }

    // Set signed/readable session cookie
    const response = NextResponse.json({ success: true, user });
    response.cookies.set('learndawn_session', JSON.stringify({
      id: user.id,
      email: user.email,
      fullName: user.full_name,
      role: user.role,
    }), {
      path: '/',
      httpOnly: false, // Accessible to client-side hydration as well
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sameSite: 'lax',
    });

    return response;
  } catch (err: any) {
    console.error('[API Register Error]', err);
    return NextResponse.json(
      { success: false, error: err?.message || 'Internal server registration error' },
      { status: 500 }
    );
  }
}
