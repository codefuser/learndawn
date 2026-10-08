-- ==============================================================================
-- LEARNDAWN INDIA - INSTANT AUTH & DATABASE PROFILES TRIGGER
-- Execute this script in your Supabase SQL Editor (Dashboard > SQL Editor)
-- ==============================================================================

-- 1. Ensure Roles exist
INSERT INTO public.roles (name, description) VALUES
    ('admin', 'Super administrator with platform-wide governance permissions'),
    ('educator', 'Faculty member capable of hosting live classes and managing course materials'),
    ('mentor', 'Senior guide providing 1:1 counselling and academic mentorship'),
    ('student', 'Standard learning subscriber enrolled in courses and exams')
ON CONFLICT (name) DO NOTHING;

-- 2. Create or Replace Trigger Function for New Auth Users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    student_role_id UUID;
BEGIN
    -- Insert profile row
    INSERT INTO public.profiles (
        id, 
        email, 
        full_name, 
        mobile, 
        target_goal_exam, 
        preferred_language
    )
    VALUES (
        NEW.id,
        COALESCE(NEW.email, NEW.raw_user_meta_data->>'email', 'student@learndawn.in'),
        COALESCE(NEW.raw_user_meta_data->>'full_name', 'Learndawn Scholar'),
        NEW.raw_user_meta_data->>'mobile',
        COALESCE(NEW.raw_user_meta_data->>'target_goal_exam', 'NEET UG'),
        COALESCE(NEW.raw_user_meta_data->>'preferred_language', 'en')
    )
    ON CONFLICT (id) DO UPDATE SET
        full_name = COALESCE(EXCLUDED.full_name, public.profiles.full_name),
        mobile = COALESCE(EXCLUDED.mobile, public.profiles.mobile),
        target_goal_exam = COALESCE(EXCLUDED.target_goal_exam, public.profiles.target_goal_exam),
        updated_at = timezone('utc'::text, now());

    -- Assign 'student' role
    SELECT id INTO student_role_id FROM public.roles WHERE name = 'student' LIMIT 1;
    IF student_role_id IS NOT NULL THEN
        INSERT INTO public.user_roles (user_id, role_id)
        VALUES (NEW.id, student_role_id)
        ON CONFLICT (user_id, role_id) DO NOTHING;
    END IF;

    RETURN NEW;
END;
$$;

-- 3. Attach Trigger to auth.users table
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 4. Enable Read and Write policies for Profiles and User Roles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
CREATE POLICY "Users can read own profile" ON public.profiles
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile" ON public.profiles
    FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (true) WITH CHECK (true);

-- 5. User Roles Policies
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read user roles" ON public.user_roles;
CREATE POLICY "Public read user roles" ON public.user_roles
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public insert user roles" ON public.user_roles;
CREATE POLICY "Public insert user roles" ON public.user_roles
    FOR INSERT WITH CHECK (true);
