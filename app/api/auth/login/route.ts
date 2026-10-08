import { NextRequest, NextResponse } from 'next/server';
import { UsersDatabase } from '@/lib/db/usersDb';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { identifier, email, mobile, password } = body;

    const userIdentifier = identifier || email || mobile;

    if (!userIdentifier || !userIdentifier.trim()) {
      return NextResponse.json(
        { success: false, error: 'Email or Mobile number is required.' },
        { status: 400 }
      );
    }

    if (!password) {
      return NextResponse.json(
        { success: false, error: 'Password is required to sign in.' },
        { status: 400 }
      );
    }

    const { user, error } = UsersDatabase.verifyCredentials(userIdentifier, password);

    if (error || !user) {
      return NextResponse.json(
        { success: false, error: error || 'Invalid email/mobile or password.' },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ success: true, user });
    response.cookies.set('learndawn_session', JSON.stringify({
      id: user.id,
      email: user.email,
      fullName: user.full_name,
      role: user.role,
    }), {
      path: '/',
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sameSite: 'lax',
    });

    return response;
  } catch (err: any) {
    console.error('[API Login Error]', err);
    return NextResponse.json(
      { success: false, error: err?.message || 'Internal server sign-in error' },
      { status: 500 }
    );
  }
}
