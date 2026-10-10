-- ==============================================================================
-- LEARNDAWN INDIA - PRODUCTION SUPABASE DATABASE SCHEMA
-- Version: 1.0.0
-- Architecture: Role-Based Access Control (RBAC), Row-Level Security (RLS)
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ==============================================================================
-- 1. ROLES & PERMISSIONS
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Seed baseline system roles
INSERT INTO public.roles (name, description) VALUES
    ('admin', 'Super administrator with platform-wide governance permissions'),
    ('educator', 'Faculty member capable of hosting live classes and managing course materials'),
    ('mentor', 'Senior guide providing 1:1 counselling and academic mentorship'),
    ('student', 'Standard learning subscriber enrolled in courses and exams')
ON CONFLICT (name) DO NOTHING;

-- ==============================================================================
-- 2. USER PROFILES
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(150),
    mobile VARCHAR(20),
    avatar_url TEXT,
    preferred_language VARCHAR(10) DEFAULT 'en', -- en, hi, ta
    target_goal_exam VARCHAR(100), -- NEET UG, JEE Main, CUET, AIIMS, etc.
    academic_class VARCHAR(50), -- Class 10, 11, 12, Dropper
    city VARCHAR(100),
    state VARCHAR(100),
    bio TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    role_id UUID NOT NULL REFERENCES public.roles(id) ON DELETE CASCADE,
    assigned_by UUID REFERENCES public.profiles(id),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id, role_id)
);

-- Index user roles for high-frequency permission lookups
CREATE INDEX IF NOT EXISTS idx_user_roles_user_id ON public.user_roles(user_id);

-- ==============================================================================
-- 3. GOAL EXAMS & ACADEMIC PROGRAMS
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.exams (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(150) NOT NULL,
    short_code VARCHAR(20) NOT NULL, -- NEET, JEE, CUET, AIIMS-N, AIIMS-P
    category VARCHAR(50) NOT NULL DEFAULT 'competitive', -- competitive, academic, paramedical
    tagline TEXT,
    description TEXT,
    eligibility TEXT,
    exam_pattern TEXT,
    syllabus_summary TEXT,
    badge_label VARCHAR(50),
    accent_color VARCHAR(30) DEFAULT '#2563EB',
    is_active BOOLEAN DEFAULT true,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.academic_programs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(150) NOT NULL,
    board VARCHAR(50) NOT NULL, -- CBSE, ICSE, State Board
    class_level VARCHAR(20) NOT NULL, -- Class 9, 10, 11, 12
    description TEXT,
    badge_label VARCHAR(50),
    is_active BOOLEAN DEFAULT true,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 4. SUBJECTS & CHAPTERS
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.subjects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    exam_id UUID REFERENCES public.exams(id) ON DELETE SET NULL,
    program_id UUID REFERENCES public.academic_programs(id) ON DELETE SET NULL,
    name VARCHAR(100) NOT NULL, -- Physics, Chemistry, Biology, Mathematics
    icon_name VARCHAR(50),
    accent_color VARCHAR(30) DEFAULT '#0F172A',
    description TEXT,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.chapters (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subject_id UUID NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
    chapter_number INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    weightage_percent INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 5. COURSES & LESSONS (LMS)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(150) UNIQUE NOT NULL,
    exam_id UUID REFERENCES public.exams(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    subtitle TEXT,
    description TEXT,
    instructor_name VARCHAR(150),
    instructor_bio TEXT,
    instructor_avatar TEXT,
    thumbnail_url TEXT,
    duration_hours INT DEFAULT 0,
    total_lectures INT DEFAULT 0,
    language VARCHAR(20) DEFAULT 'English / Hinglish',
    difficulty_level VARCHAR(30) DEFAULT 'Comprehensive', -- Foundation, Advanced, Crash, Revision
    price NUMERIC(10, 2) DEFAULT 0.00,
    original_price NUMERIC(10, 2),
    is_featured BOOLEAN DEFAULT false,
    is_published BOOLEAN DEFAULT true,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.course_sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    section_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.lessons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    section_id UUID NOT NULL REFERENCES public.course_sections(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    lesson_order INT DEFAULT 0,
    duration_seconds INT DEFAULT 0,
    video_provider VARCHAR(50) DEFAULT 'custom_stream', -- custom_stream, vimeo, hls, youtube
    video_storage_path TEXT, -- Secure internal storage reference, NOT public raw video URL
    notes_content TEXT,
    is_preview_allowed BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.enrollments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    status VARCHAR(30) DEFAULT 'active', -- active, completed, paused, expired
    progress_percentage INT DEFAULT 0,
    enrolled_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    completed_at TIMESTAMPTZ,
    UNIQUE(user_id, course_id)
);

-- ==============================================================================
-- 6. STUDY MATERIALS (SECURE PRIVATE STORAGE)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.study_materials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(150) UNIQUE NOT NULL,
    exam_id UUID REFERENCES public.exams(id) ON DELETE SET NULL,
    subject_id UUID REFERENCES public.subjects(id) ON DELETE SET NULL,
    material_type VARCHAR(50) DEFAULT 'formula_sheet', -- formula_sheet, revision_notes, pyq, mind_map
    storage_path TEXT NOT NULL, -- Private Supabase Storage object key
    file_size_bytes BIGINT DEFAULT 0,
    page_count INT DEFAULT 0,
    is_gated BOOLEAN DEFAULT true, -- Requires authentication
    download_count INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 7. QUESTION BANK & PRACTICE ATTEMPTS
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subject_id UUID REFERENCES public.subjects(id) ON DELETE SET NULL,
    chapter_id UUID REFERENCES public.chapters(id) ON DELETE SET NULL,
    exam_id UUID REFERENCES public.exams(id) ON DELETE SET NULL,
    question_text TEXT NOT NULL,
    question_image_url TEXT,
    difficulty VARCHAR(20) DEFAULT 'medium', -- easy, medium, hard
    explanation TEXT,
    year_asked INT, -- e.g. 2023 for PYQ
    is_pyq BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.question_options (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
    option_key VARCHAR(5) NOT NULL, -- A, B, C, D
    option_text TEXT NOT NULL,
    option_image_url TEXT,
    is_correct BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE IF NOT EXISTS public.question_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
    selected_option_id UUID REFERENCES public.question_options(id),
    is_correct BOOLEAN NOT NULL,
    time_taken_seconds INT DEFAULT 0,
    attempted_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.question_bookmarks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id, question_id)
);

-- ==============================================================================
-- 8. LIVE CLASSES & RECORDINGS
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.live_classes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID REFERENCES public.courses(id) ON DELETE SET NULL,
    exam_id UUID REFERENCES public.exams(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    educator_name VARCHAR(150) NOT NULL,
    scheduled_start TIMESTAMPTZ NOT NULL,
    scheduled_end TIMESTAMPTZ NOT NULL,
    status VARCHAR(30) DEFAULT 'upcoming', -- upcoming, live, completed, cancelled
    stream_room_id VARCHAR(150),
    provider VARCHAR(50) DEFAULT 'liveclass_secure_room',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.class_recordings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    live_class_id UUID NOT NULL REFERENCES public.live_classes(id) ON DELETE CASCADE,
    recording_url TEXT NOT NULL,
    duration_seconds INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 9. MENTORSHIP & COUNSELLING
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.mentors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    name VARCHAR(150) NOT NULL,
    headline VARCHAR(200),
    expertise_tags TEXT[], -- Medical, JEE Ranker, Strategy, Nursing
    rating NUMERIC(3, 2) DEFAULT 4.9,
    total_sessions INT DEFAULT 0,
    avatar_url TEXT,
    bio TEXT,
    is_available BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.mentor_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mentor_id UUID NOT NULL REFERENCES public.mentors(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    duration_minutes INT DEFAULT 45,
    price NUMERIC(10, 2) DEFAULT 0.00,
    is_active BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS public.mentor_bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    mentor_id UUID NOT NULL REFERENCES public.mentors(id) ON DELETE CASCADE,
    session_id UUID REFERENCES public.mentor_sessions(id),
    scheduled_for TIMESTAMPTZ NOT NULL,
    meeting_link TEXT,
    status VARCHAR(30) DEFAULT 'confirmed', -- pending, confirmed, completed, cancelled
    student_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.counselling_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    category VARCHAR(50) NOT NULL, -- career_guidance, exam_strategy, stream_selection, college_choice
    target_exam VARCHAR(100),
    preferred_slot TIMESTAMPTZ,
    status VARCHAR(30) DEFAULT 'requested', -- requested, scheduled, completed
    counsellor_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 10. NOTIFICATIONS, CONTACT, ANALYTICS, AUDIT LOGS, SITE CONTENT
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    link_url TEXT,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile VARCHAR(20),
    user_category VARCHAR(50), -- Student, Parent, Educator, Professional, Institution, Other
    subject VARCHAR(200),
    message TEXT NOT NULL,
    status VARCHAR(30) DEFAULT 'new', -- new, in_progress, resolved
    admin_notes TEXT,
    ip_address VARCHAR(45),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 10B. JOB APPLICATIONS & CAREER COUNSELLING REGISTRATIONS
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.job_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile VARCHAR(25) NOT NULL,
    location VARCHAR(150) NOT NULL,
    age VARCHAR(20),
    position_applied_for VARCHAR(150) NOT NULL,
    preferred_work_mode VARCHAR(50) NOT NULL, -- Online / Remote, Hybrid, On-site
    availability VARCHAR(50) NOT NULL, -- Full-time, Part-time, Contract, Flexible
    highest_qualification VARCHAR(255) NOT NULL,
    current_status VARCHAR(50) NOT NULL, -- Student, Graduate, Working Professional, Freelancer, Other
    relevant_experience TEXT,
    key_skills TEXT NOT NULL,
    resume_url TEXT,
    resume_file_name VARCHAR(255),
    portfolio_url TEXT,
    linkedin_url TEXT,
    why_join TEXT NOT NULL,
    why_consider TEXT NOT NULL,
    additional_info TEXT,
    status VARCHAR(30) DEFAULT 'submitted', -- submitted, reviewing, shortlisted, rejected
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.career_counselling_registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(150) NOT NULL,
    dob_or_age VARCHAR(50) NOT NULL,
    mobile VARCHAR(25) NOT NULL,
    email VARCHAR(255) NOT NULL,
    city_district_state VARCHAR(200) NOT NULL,
    current_class VARCHAR(100) NOT NULL,
    school_college_name VARCHAR(200),
    academic_stream VARCHAR(100) NOT NULL,
    recent_academic_performance VARCHAR(100),
    preferred_career_course VARCHAR(150) NOT NULL,
    areas_of_interest TEXT NOT NULL,
    entrance_exam VARCHAR(100),
    career_concern TEXT NOT NULL,
    preferred_mode VARCHAR(50) NOT NULL, -- Online, In-person
    preferred_date DATE NOT NULL,
    preferred_time_slot VARCHAR(50) NOT NULL,
    attendees VARCHAR(100) NOT NULL, -- Student, Student + Parent/Guardian, Parent/Guardian
    guidance_topics TEXT,
    declaration_confirmed BOOLEAN DEFAULT true,
    status VARCHAR(30) DEFAULT 'pending_review', -- pending_review, confirmed, completed, cancelled
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.analytics_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    event_name VARCHAR(100) NOT NULL,
    properties JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    performed_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    entity_id VARCHAR(100),
    details JSONB DEFAULT '{}'::jsonb,
    ip_address VARCHAR(45),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.site_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    key VARCHAR(100) UNIQUE NOT NULL,
    section VARCHAR(100) NOT NULL,
    content JSONB NOT NULL,
    updated_by UUID REFERENCES public.profiles(id),
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.banners (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(200) NOT NULL,
    subtitle TEXT,
    action_text VARCHAR(100),
    action_url TEXT,
    image_url TEXT,
    is_active BOOLEAN DEFAULT true,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(150) UNIQUE NOT NULL,
    category VARCHAR(50) NOT NULL, -- study_material, question_bank, revision, assessments, articles, dawn_mastery
    description TEXT,
    content_body TEXT,
    download_url TEXT,
    is_featured BOOLEAN DEFAULT false,
    view_count INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 11. HELPER SECURITY FUNCTIONS (SERVER-SIDE AUTHORIZATION)
-- ==============================================================================

-- Check if currently authenticated user has admin role
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM public.user_roles ur
        JOIN public.roles r ON ur.role_id = r.id
        WHERE ur.user_id = auth.uid()
          AND r.name = 'admin'
    );
$$;

-- Check if user has specific role
CREATE OR REPLACE FUNCTION public.has_role(target_role VARCHAR)
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM public.user_roles ur
        JOIN public.roles r ON ur.role_id = r.id
        WHERE ur.user_id = auth.uid()
          AND r.name = target_role
    );
$$;

-- Automatic profile creation on auth.users sign-up with default 'student' role
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    student_role_id UUID;
BEGIN
    -- 1. Create Profile
    INSERT INTO public.profiles (id, email, full_name, mobile, target_goal_exam, preferred_language)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', 'Learndawn Scholar'),
        NEW.raw_user_meta_data->>'mobile',
        NEW.raw_user_meta_data->>'target_goal_exam',
        COALESCE(NEW.raw_user_meta_data->>'preferred_language', 'en')
    )
    ON CONFLICT (id) DO UPDATE SET
        full_name = COALESCE(EXCLUDED.full_name, public.profiles.full_name),
        mobile = COALESCE(EXCLUDED.mobile, public.profiles.mobile),
        target_goal_exam = COALESCE(EXCLUDED.target_goal_exam, public.profiles.target_goal_exam);

    -- 2. Fetch student role id
    SELECT id INTO student_role_id FROM public.roles WHERE name = 'student' LIMIT 1;

    -- 3. Assign student role (NEVER admin from signup)
    IF student_role_id IS NOT NULL THEN
        INSERT INTO public.user_roles (user_id, role_id)
        VALUES (NEW.id, student_role_id)
        ON CONFLICT (user_id, role_id) DO NOTHING;
    END IF;

    RETURN NEW;
END;
$$;

-- Attach trigger to auth.users (if not already attached)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- ==============================================================================
-- 12. ROW-LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.academic_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.question_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.question_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.question_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.live_classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.class_recordings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentor_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentor_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.counselling_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;

-- PROFILES
DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
CREATE POLICY "Users can read own profile" ON public.profiles FOR SELECT USING (auth.uid() = id OR public.is_admin());

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

-- ROLES & USER_ROLES
DROP POLICY IF EXISTS "Anyone can view roles" ON public.roles;
CREATE POLICY "Anyone can view roles" ON public.roles FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can view own roles" ON public.user_roles;
CREATE POLICY "Users can view own roles" ON public.user_roles FOR SELECT USING (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Only admins manage roles" ON public.user_roles;
CREATE POLICY "Only admins manage roles" ON public.user_roles FOR ALL USING (public.is_admin());

-- PUBLIC READ CATALOGS
DROP POLICY IF EXISTS "Public read active exams" ON public.exams;
CREATE POLICY "Public read active exams" ON public.exams FOR SELECT USING (is_active = true OR public.is_admin());

DROP POLICY IF EXISTS "Public read active academic programs" ON public.academic_programs;
CREATE POLICY "Public read active academic programs" ON public.academic_programs FOR SELECT USING (is_active = true OR public.is_admin());

DROP POLICY IF EXISTS "Public read active subjects" ON public.subjects;
CREATE POLICY "Public read active subjects" ON public.subjects FOR SELECT USING (is_active = true OR public.is_admin());

DROP POLICY IF EXISTS "Public read active chapters" ON public.chapters;
CREATE POLICY "Public read active chapters" ON public.chapters FOR SELECT USING (is_active = true OR public.is_admin());

DROP POLICY IF EXISTS "Public read published courses" ON public.courses;
CREATE POLICY "Public read published courses" ON public.courses FOR SELECT USING (is_published = true OR public.is_admin());

DROP POLICY IF EXISTS "Public read course sections" ON public.course_sections;
CREATE POLICY "Public read course sections" ON public.course_sections FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public read lessons preview or enrolled" ON public.lessons;
CREATE POLICY "Public read lessons preview or enrolled" ON public.lessons FOR SELECT USING (
    is_preview_allowed = true 
    OR public.is_admin()
    OR EXISTS (
        SELECT 1 FROM public.enrollments e
        JOIN public.course_sections cs ON cs.course_id = e.course_id
        WHERE cs.id = section_id AND e.user_id = auth.uid()
    )
);

-- ENROLLMENTS
DROP POLICY IF EXISTS "Users read own enrollments" ON public.enrollments;
CREATE POLICY "Users read own enrollments" ON public.enrollments FOR SELECT USING (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Users can enroll themselves" ON public.enrollments;
CREATE POLICY "Users can enroll themselves" ON public.enrollments FOR INSERT WITH CHECK (auth.uid() = user_id);

-- QUESTIONS & ATTEMPTS
DROP POLICY IF EXISTS "Authenticated users view questions" ON public.questions;
CREATE POLICY "Authenticated users view questions" ON public.questions FOR SELECT USING (auth.role() = 'authenticated' OR public.is_admin());

DROP POLICY IF EXISTS "Authenticated users view question options" ON public.question_options;
CREATE POLICY "Authenticated users view question options" ON public.question_options FOR SELECT USING (auth.role() = 'authenticated' OR public.is_admin());

DROP POLICY IF EXISTS "Users manage own question attempts" ON public.question_attempts;
CREATE POLICY "Users manage own question attempts" ON public.question_attempts FOR ALL USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users manage own question bookmarks" ON public.question_bookmarks;
CREATE POLICY "Users manage own question bookmarks" ON public.question_bookmarks FOR ALL USING (auth.uid() = user_id);

-- MENTORS & BOOKINGS
DROP POLICY IF EXISTS "Public read active mentors" ON public.mentors;
CREATE POLICY "Public read active mentors" ON public.mentors FOR SELECT USING (is_available = true OR public.is_admin());

DROP POLICY IF EXISTS "Public read mentor sessions" ON public.mentor_sessions;
CREATE POLICY "Public read mentor sessions" ON public.mentor_sessions FOR SELECT USING (is_active = true OR public.is_admin());

DROP POLICY IF EXISTS "Anyone can insert mentor bookings" ON public.mentor_bookings;
CREATE POLICY "Anyone can insert mentor bookings" ON public.mentor_bookings FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Users view own mentor bookings" ON public.mentor_bookings;
CREATE POLICY "Users view own mentor bookings" ON public.mentor_bookings FOR SELECT USING (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Users update own mentor bookings" ON public.mentor_bookings;
CREATE POLICY "Users update own mentor bookings" ON public.mentor_bookings FOR UPDATE USING (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Anyone can insert counselling requests" ON public.counselling_sessions;
CREATE POLICY "Anyone can insert counselling requests" ON public.counselling_sessions FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Users view own counselling requests" ON public.counselling_sessions;
CREATE POLICY "Users view own counselling requests" ON public.counselling_sessions FOR SELECT USING (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Users update own counselling requests" ON public.counselling_sessions;
CREATE POLICY "Users update own counselling requests" ON public.counselling_sessions FOR UPDATE USING (auth.uid() = user_id OR public.is_admin());

-- NOTIFICATIONS & CONTACT
DROP POLICY IF EXISTS "Users read own notifications" ON public.notifications;
CREATE POLICY "Users read own notifications" ON public.notifications FOR ALL USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Public can insert contact message" ON public.contact_messages;
CREATE POLICY "Public can insert contact message" ON public.contact_messages FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Admins read contact messages" ON public.contact_messages;
CREATE POLICY "Admins read contact messages" ON public.contact_messages FOR SELECT USING (public.is_admin());

-- AUDIT LOGS & ANALYTICS
DROP POLICY IF EXISTS "Admins read audit logs" ON public.audit_logs;
CREATE POLICY "Admins read audit logs" ON public.audit_logs FOR SELECT USING (public.is_admin());

DROP POLICY IF EXISTS "System inserts analytics events" ON public.analytics_events;
CREATE POLICY "System inserts analytics events" ON public.analytics_events FOR INSERT WITH CHECK (true);

-- BANNERS & RESOURCES
DROP POLICY IF EXISTS "Public read active banners" ON public.banners;
CREATE POLICY "Public read active banners" ON public.banners FOR SELECT USING (is_active = true OR public.is_admin());

DROP POLICY IF EXISTS "Public read resources" ON public.resources;
CREATE POLICY "Public read resources" ON public.resources FOR SELECT USING (true);

-- JOB APPLICATIONS & CAREER COUNSELLING (STRICT PRIVACY)
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can submit job application" ON public.job_applications;
CREATE POLICY "Public can submit job application" ON public.job_applications FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Admins read job applications" ON public.job_applications;
CREATE POLICY "Admins read job applications" ON public.job_applications FOR SELECT USING (public.is_admin());

ALTER TABLE public.career_counselling_registrations ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can submit career counselling registration" ON public.career_counselling_registrations;
CREATE POLICY "Public can submit career counselling registration" ON public.career_counselling_registrations FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Admins read career counselling registrations" ON public.career_counselling_registrations;
CREATE POLICY "Admins read career counselling registrations" ON public.career_counselling_registrations FOR SELECT USING (public.is_admin());


-- ==============================================================================
-- 13. SEED INITIAL CURRICULUM DATA (IDEMPOTENT)
-- ==============================================================================

-- Exams
INSERT INTO public.exams (slug, title, short_code, category, tagline, description, eligibility, exam_pattern, syllabus_summary, badge_label, accent_color, display_order, is_active)
VALUES
('neet-ug', 'NEET UG', 'NEET', 'competitive', 'India''s premier entrance test for MBBS, BDS, and allied medical admissions.', 'Master Physics, Chemistry, Botany, and Zoology with structured NCERT deep-dives, simulated NTA test series, and mentorship from AIIMS rankers.', '10+2 with Physics, Chemistry, Biology/Biotechnology and English with 50% minimum aggregate.', '720 Total Marks, 200 Questions (180 to be attempted) across 4 subjects in pen-and-paper mode.', 'Complete NCERT Class 11 & 12 syllabus covering 97 high-weightage chapters.', 'Flagship Medical', '#0284C7', 1, true),
('jee-main', 'JEE Main', 'JEE', 'competitive', 'Gateway to NITs, IIITs, CFTIs and eligibility for JEE Advanced.', 'Elevate mathematical rigor and conceptual physics intuition with problem-solving architecture designed by top IITian faculty.', '10+2 with Physics and Mathematics as compulsory subjects alongside Chemistry/Biotechnology.', '300 Total Marks, Computer Based Test (CBT) with single-choice and numerical value questions.', 'Rigorous engineering syllabus across Mechanics, Calculus, Organic Chemistry and Coordinate Geometry.', 'Top Engineering', '#2563EB', 2, true),
('cuet', 'CUET (UG)', 'CUET', 'competitive', 'Standardized national admission test for Central and State Universities.', 'Comprehensive domain subject preparation combined with Section 1 Language mastery and Section 3 General Aptitude modules.', '10+2 or equivalent examination recognized by central/state education boards.', 'Hybrid Computer-Based MCQ examination segmented by Domain Subjects, Languages, and General Aptitude.', 'Class 12 core curriculum combined with quantitative reasoning, current affairs, and vocabulary.', 'University Access', '#7C3AED', 3, true),
('aiims-nursing', 'AIIMS Nursing Entrance', 'AIIMS-N', 'paramedical', 'Premier national entrance test for B.Sc (Hons) Nursing across all AIIMS institutes.', 'Specialized medical nursing curriculum with dedicated focus on Biology, General Knowledge, Physics, Chemistry, and Clinical aptitude.', 'Female candidates passing 10+2 with Physics, Chemistry, Biology and English with min 55% marks.', '100 Marks CBT covering Biology (30), Chemistry (30), Physics (30), and General Knowledge (10).', 'Targeted medical foundation tailored specifically to the AIIMS nursing standard.', 'Healthcare Elite', '#059669', 4, true),
('aiims-paramedical', 'AIIMS Paramedical Entrance', 'AIIMS-P', 'paramedical', 'Direct admission to Medical Technology, Radiography, OT, and Lab Sciences at AIIMS.', 'Build clinical and diagnostic technical foundations for high-demand paramedical career pathways in government healthcare systems.', '10+2 with PCB/PCM with minimum 50% aggregate.', '90 MCQs (90 minutes) across Physics, Chemistry, and Biology/Maths.', 'Applied medical science foundations and core Class 11-12 natural science concepts.', 'Clinical Sciences', '#D97706', 5, true)
ON CONFLICT (slug) DO UPDATE SET 
    title = EXCLUDED.title,
    tagline = EXCLUDED.tagline,
    description = EXCLUDED.description;

-- Academic Programs
INSERT INTO public.academic_programs (slug, title, board, class_level, description, badge_label, display_order, is_active)
VALUES
('cbse-class-9', 'CBSE Class 9 Foundation', 'CBSE', 'Class 9', 'Critical bridging year strengthening algebraic fundamentals, atomics, and cellular biology.', 'Early Starter', 1, true),
('cbse-class-10', 'CBSE Class 10 Board Excellence', 'CBSE', 'Class 10', 'Board examination perfection combined with diagnostic foundation assessment for medical/engineering stream selection.', 'Board Special', 2, true),
('cbse-class-11', 'CBSE Class 11 Science Stream', 'CBSE', 'Class 11', 'Bridging high-school basics with rigorous senior secondary Physics, Chemistry, Math, and Biology.', 'Bridge & Core', 3, true),
('cbse-class-12', 'CBSE Class 12 Science Stream', 'CBSE', 'Class 12', 'Dual-target strategy: 95%+ Board exam mastery coupled with NEET/JEE entrance baseline synchronization.', 'Dual Target', 4, true),
('state-board-class-11', 'State Board Class 11', 'State Board', 'Class 11', 'Bilingual delivery aligning State Board textbooks with national competitive entrance standards.', 'State Core', 5, true),
('state-board-class-12', 'State Board Class 12', 'State Board', 'Class 12', 'Extensive textbook derivation mastery, blue-print question models, and previous decade paper drills.', 'State Finals', 6, true)
ON CONFLICT (slug) DO UPDATE SET 
    title = EXCLUDED.title,
    description = EXCLUDED.description;

-- Subjects
INSERT INTO public.subjects (slug, name, icon_name, accent_color, description, display_order, is_active)
VALUES
('physics', 'Physics', 'Atom', '#2563EB', 'Mechanics, Electrodynamics, Optics, Thermodynamics, and Modern Physics.', 1, true),
('chemistry', 'Chemistry', 'FlaskConical', '#059669', 'Physical Chemistry, Inorganic Coordination, and Organic Reaction Mechanisms.', 2, true),
('biology', 'Biology (Botany & Zoology)', 'Dna', '#0284C7', 'Human Physiology, Genetics, Cell Biology, Ecology, and Plant Morphology.', 3, true),
('mathematics', 'Mathematics', 'Calculator', '#7C3AED', 'Calculus, Vectors & 3D, Algebra, Trigonometry, and Probability.', 4, true),
('general-aptitude', 'General & Nursing Aptitude', 'Compass', '#EA580C', 'Logical reasoning, quantitative aptitude, medical ethics, and general awareness.', 5, true)
ON CONFLICT (slug) DO UPDATE SET 
    name = EXCLUDED.name,
    description = EXCLUDED.description;

-- Courses
INSERT INTO public.courses (slug, title, subtitle, description, instructor_name, instructor_bio, thumbnail_url, duration_hours, total_lectures, language, difficulty_level, price, original_price, is_featured, is_published, display_order)
VALUES
('neet-conqueror-2025', 'NEET Conqueror 360° Comprehensive Batch', 'Complete 2-year integrated syllabus mastery with daily live interactive sessions.', 'An all-inclusive program covering Botany, Zoology, Physics, and Chemistry. Includes 600+ hours of live classes, NCERT line-by-line annotations, 40 full-length simulated mock tests, and 1:1 mentorship from AIIMS doctors.', 'Dr. Aarav Sharma & Team', 'AIIMS New Delhi Gold Medalist and seasoned medical educator with 12+ years mentoring top 100 AIR rankers.', '/images/courses/neet-course.jpg', 480, 320, 'English & Hinglish', 'Comprehensive', 4999.00, 12999.00, true, true, 1),
('jee-pinnacle-rankers', 'JEE Main Pinnacle: Concept to Advanced Problem Solving', 'Engineered for aspirants aiming for 99+ percentile in JEE Main.', 'Deep problem-solving sessions focusing on high-frequency questions, shortcut calculus techniques, coordinate geometry visualizations, and physical chemistry numerical speed tricks.', 'Prof. Rajesh K. Varma', 'IIT Bombay (B.Tech Mechanical), 14 years teaching JEE physics with 80+ selections in top 500 AIR.', '/images/courses/jee-course.jpg', 520, 350, 'English', 'Advanced', 5499.00, 14999.00, true, true, 2),
('aiims-nursing-accelerator', 'AIIMS Nursing & Clinical Aptitude Accelerator', 'Dedicated batch targeting AIIMS B.Sc (Hons) Nursing admission.', 'Exhaustive preparation across NCERT Biology, core Chemistry, numerical physics shortcuts, general knowledge, and healthcare aptitude.', 'Dr. Meenakshi Sundaram & Faculty Team', 'MMC Chennai alumnus, seasoned medical training counselor with 9+ years healthcare exam mentorship.', '/images/courses/nursing-course.jpg', 320, 210, 'English & Bilingual', 'Targeted', 3999.00, 9999.00, true, true, 3),
('cuet-domain-booster', 'CUET UG General Test & Domain Subjects Booster', 'Crack high percentiles across Section 1, Section 2 & General Test.', 'Complete subject mastery for science and commerce domain tests paired with quantitative tricks, logical reasoning, and language accuracy modules.', 'Prof. Vikram Malhotra & Senior Council', 'Former Delhi University visiting faculty, test prep veteran with 15+ years experience.', '/images/courses/cuet-course.jpg', 280, 190, 'English', 'Foundation', 3499.00, 7999.00, false, true, 4)
ON CONFLICT (slug) DO UPDATE SET 
    title = EXCLUDED.title,
    price = EXCLUDED.price;

-- Mentors
INSERT INTO public.mentors (name, headline, expertise_tags, rating, total_sessions, bio, is_available)
VALUES
('Dr. Aarav Sharma', 'AIIMS New Delhi Rank 14 • MBBS Resident', ARRAY['Medical', 'NEET Ranker', 'Biology', 'Exam Psychology'], 4.98, 480, 'Mentored 3,200+ NEET aspirants. Specialist in NCERT biology retention techniques and stress management.', true),
('Er. Pranav Rastogi', 'IIT Madras B.Tech CSE • AIR 112 JEE Advanced', ARRAY['JEE Advanced', 'Calculus', 'Physics', 'Revision Frameworks'], 4.95, 390, 'Guided 120+ students into IITs and NITs. Expert in problem decomposition and exam speed calibration.', true),
('Dr. Meenakshi Sundaram', 'Senior Pediatrician & Clinical Guide • MMC Chennai', ARRAY['Clinical Aptitude', 'Nursing', 'AIIMS Strategy', 'Career Choice'], 4.96, 520, 'Dedicated advisor for medical and nursing entrance pathways with an emphasis on clinical fundamentals.', true),
('Er. Shweta Nair', 'NIT Trichy • Senior Physics Master Faculty', ARRAY['Mechanics', 'Electrostatics', 'Problem Solving Speed'], 4.92, 310, 'Passionate physics educator known for converting weak students into confident numerical solvers.', true)
ON CONFLICT DO NOTHING;
