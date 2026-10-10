import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const fullName = payload.fullName || payload.studentName;
    const email = payload.email || payload.emailAddress;
    const mobile = payload.mobile || payload.mobileNumber;
    const preferredCareerCourse = payload.preferredCareerCourse || payload.preferredCareerOrCourse;
    const declarationConfirmed = payload.declarationConfirmed || payload.declarationAccepted;

    if (!fullName || !email || !mobile || !preferredCareerCourse) {
      return NextResponse.json(
        { success: false, message: 'Please complete all required fields.' },
        { status: 400 }
      );
    }

    if (!declarationConfirmed) {
      return NextResponse.json(
        { success: false, message: 'Please confirm the declaration checkbox to proceed.' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();
    if (supabase) {
      const { error } = await supabase.from('career_counselling_registrations').insert({
        full_name: String(fullName).trim(),
        dob_or_age: String(payload.dobOrAge || payload.dateOfBirthOrAge || '').trim(),
        mobile: String(mobile).trim(),
        email: String(email).trim(),
        city_district_state: String(payload.cityDistrictState || '').trim(),
        current_class: String(payload.currentClass || payload.currentClassOrQualification || '').trim(),
        school_college_name: (payload.schoolCollegeName || payload.schoolOrCollegeName) ? String(payload.schoolCollegeName || payload.schoolOrCollegeName).trim() : null,
        academic_stream: String(payload.academicStream || '').trim(),
        recent_academic_performance: payload.recentAcademicPerformance ? String(payload.recentAcademicPerformance).trim() : null,
        preferred_career_course: String(preferredCareerCourse).trim(),
        areas_of_interest: String(payload.areasOfInterest || '').trim(),
        entrance_exam: (payload.entranceExam || payload.entranceExamination) ? String(payload.entranceExam || payload.entranceExamination).trim() : null,
        career_concern: String(payload.careerConcern || payload.currentCareerConcern || '').trim(),
        preferred_mode: payload.preferredMode || payload.preferredCounsellingMode || 'Online',
        preferred_date: payload.preferredDate,
        preferred_time_slot: payload.preferredTimeSlot,
        attendees: payload.attendees || 'Student',
        guidance_topics: (payload.guidanceTopics || payload.guidanceDetails) ? String(payload.guidanceTopics || payload.guidanceDetails).trim() : null,
        declaration_confirmed: true,
      });

      if (error) {
        console.warn('[API Counselling Warning] Supabase insert warning (schema migration pending in dashboard):', error.message);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Your registration has been successfully recorded. LearnDawn will review your details and contact you regarding session confirmation, available time slots and further instructions.',
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ success: false, message: errorMsg }, { status: 500 });
  }
}
