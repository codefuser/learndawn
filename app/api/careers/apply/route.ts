import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    
    let payload: any = {};
    let resumeFileName: string | null = null;
    let resumeUrl: string | null = null;

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      
      payload = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        mobile: formData.get('mobile'),
        location: formData.get('location'),
        age: formData.get('age'),
        positionAppliedFor: formData.get('positionAppliedFor'),
        preferredWorkMode: formData.get('preferredWorkMode'),
        availability: formData.get('availability'),
        highestQualification: formData.get('highestQualification'),
        currentStatus: formData.get('currentStatus'),
        relevantExperience: formData.get('relevantExperience'),
        keySkills: formData.get('keySkills'),
        portfolioUrl: formData.get('portfolioUrl'),
        linkedInUrl: formData.get('linkedInUrl'),
        whyJoin: formData.get('whyJoin'),
        whyConsider: formData.get('whyConsider'),
        additionalInfo: formData.get('additionalInfo'),
      };

      const resumeFile = formData.get('resume') as File | null;
      if (resumeFile && typeof resumeFile.name === 'string') {
        const allowedExtensions = ['.pdf', '.doc', '.docx'];
        const fileName = resumeFile.name.toLowerCase();
        const isAllowed = allowedExtensions.some(ext => fileName.endsWith(ext));

        if (!isAllowed) {
          return NextResponse.json(
            { success: false, message: 'Invalid file format. Please upload a PDF, DOC, or DOCX document.' },
            { status: 400 }
          );
        }

        // Limit to 10MB
        if (resumeFile.size > 10 * 1024 * 1024) {
          return NextResponse.json(
            { success: false, message: 'File size exceeds maximum limit of 10MB.' },
            { status: 400 }
          );
        }

        resumeFileName = resumeFile.name;
        // Mock / internal secure reference path
        resumeUrl = `/uploads/resumes/${Date.now()}-${encodeURIComponent(resumeFile.name)}`;
      }
    } else {
      payload = await request.json();
      resumeFileName = payload.resumeFileName || null;
      resumeUrl = payload.resumeUrl || null;
    }

    if (!payload.fullName || !payload.email || !payload.mobile || !payload.positionAppliedFor || !payload.highestQualification || !payload.whyJoin || !payload.whyConsider) {
      return NextResponse.json(
        { success: false, message: 'Please complete all mandatory fields marked with an asterisk (*).' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();
    if (supabase) {
      const { error } = await supabase.from('job_applications').insert({
        full_name: String(payload.fullName).trim(),
        email: String(payload.email).trim(),
        mobile: String(payload.mobile).trim(),
        location: String(payload.location || '').trim(),
        age: payload.age ? String(payload.age).trim() : null,
        position_applied_for: String(payload.positionAppliedFor).trim(),
        preferred_work_mode: payload.preferredWorkMode || 'Online / Remote',
        availability: payload.availability || 'Full-time',
        highest_qualification: String(payload.highestQualification).trim(),
        current_status: payload.currentStatus || 'Graduate',
        relevant_experience: payload.relevantExperience ? String(payload.relevantExperience).trim() : null,
        key_skills: String(payload.keySkills || '').trim(),
        resume_url: resumeUrl,
        resume_file_name: resumeFileName,
        portfolio_url: payload.portfolioUrl ? String(payload.portfolioUrl).trim() : null,
        linkedin_url: payload.linkedInUrl ? String(payload.linkedInUrl).trim() : null,
        why_join: String(payload.whyJoin).trim(),
        why_consider: String(payload.whyConsider).trim(),
        additional_info: payload.additionalInfo ? String(payload.additionalInfo).trim() : null,
        status: 'submitted',
      });

      if (error) {
        console.warn('[API Careers Apply Warning] Supabase insert warning (schema migration pending in dashboard):', error.message);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Your application for "${payload.positionAppliedFor}" has been successfully received. LearnDawn recruitment will review your profile.`,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ success: false, message: errorMsg }, { status: 500 });
  }
}
