import { NextRequest, NextResponse } from 'next/server';
import { UsersDatabase } from '@/lib/db/usersDb';

export async function GET(req: NextRequest) {
  try {
    const sessionCookie = req.cookies.get('learndawn_session')?.value;
    if (sessionCookie) {
      try {
        const parsed = JSON.parse(sessionCookie);
        // Basic role check
        if (parsed.role && parsed.role !== 'admin') {
          return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
        }
      } catch {
        // ignore
      }
    }

    const allUsers = UsersDatabase.getAllUsers();
    const students = allUsers
      .filter((u) => u.role === 'student')
      .map((u) => ({
        id: u.id,
        name: u.fullName,
        email: u.email,
        mobile: u.mobile,
        exam: u.targetGoalExam,
        date: new Date(u.createdAt).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        status: u.isActive ? 'Active Scholar' : 'Inactive',
      }));

    return NextResponse.json({ students, total: students.length });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
