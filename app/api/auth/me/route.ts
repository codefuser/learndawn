import { NextRequest, NextResponse } from 'next/server';
import { UsersDatabase } from '@/lib/db/usersDb';
import { UserProfile } from '@/types';

export async function GET(req: NextRequest) {
  try {
    const sessionCookie = req.cookies.get('learndawn_session')?.value;
    if (!sessionCookie) {
      return NextResponse.json({ user: null });
    }

    let parsed: { id?: string; email?: string } = {};
    try {
      parsed = JSON.parse(sessionCookie);
    } catch {
      return NextResponse.json({ user: null });
    }

    if (!parsed.id && !parsed.email) {
      return NextResponse.json({ user: null });
    }

    const record = parsed.id
      ? UsersDatabase.findById(parsed.id)
      : UsersDatabase.findByIdentifier(parsed.email || '');

    if (!record || !record.isActive) {
      return NextResponse.json({ user: null });
    }

    const profile: UserProfile = {
      id: record.id,
      email: record.email,
      full_name: record.fullName,
      mobile: record.mobile,
      preferred_language: record.preferredLanguage,
      target_goal_exam: record.targetGoalExam,
      academic_class: record.academicClass,
      role: record.role,
      is_active: record.isActive,
      created_at: record.createdAt,
    };

    return NextResponse.json({ user: profile });
  } catch (err: any) {
    console.error('[API Me Error]', err);
    return NextResponse.json({ user: null }, { status: 500 });
  }
}
