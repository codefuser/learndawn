export type UserRole = 'student' | 'admin' | 'educator' | 'mentor';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  mobile: string | null;
  avatar_url?: string | null;
  preferred_language: 'en' | 'hi' | 'ta';
  target_goal_exam: string | null;
  academic_class?: string | null;
  city?: string | null;
  state?: string | null;
  bio?: string | null;
  role: UserRole;
  is_active: boolean;
  created_at: string;
  updated_at?: string;
}

export interface Exam {
  id: string;
  slug: string;
  title: string;
  short_code: string;
  category: 'competitive' | 'academic' | 'paramedical';
  tagline: string;
  description: string;
  eligibility: string;
  exam_pattern: string;
  syllabus_summary: string;
  badge_label: string;
  accent_color: string;
  display_order: number;
  subjects_count?: number;
  mock_tests_count?: number;
  students_enrolled?: string;
}

export interface AcademicProgram {
  id: string;
  slug: string;
  title: string;
  board: 'CBSE' | 'State Board' | 'ICSE';
  class_level: string;
  description: string;
  badge_label: string;
  display_order: number;
}

export interface Subject {
  id: string;
  slug: string;
  exam_id?: string;
  program_id?: string;
  name: string;
  icon_name: string;
  accent_color: string;
  description: string;
  display_order: number;
  chapters_count?: number;
}

export interface Chapter {
  id: string;
  subject_id: string;
  chapter_number: number;
  title: string;
  description?: string;
  weightage_percent: number;
}

export interface Lesson {
  id: string;
  section_id: string;
  title: string;
  lesson_order: number;
  duration_seconds: number;
  video_provider: 'custom_stream' | 'hls' | 'vimeo' | 'youtube';
  video_storage_path?: string;
  notes_content?: string;
  is_preview_allowed: boolean;
  is_completed?: boolean;
}

export interface CourseSection {
  id: string;
  course_id: string;
  title: string;
  section_order: number;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  exam_id?: string;
  title: string;
  subtitle: string;
  description: string;
  instructor_name: string;
  instructor_bio?: string;
  instructor_avatar?: string;
  thumbnail_url: string;
  duration_hours: number;
  total_lectures: number;
  language: string;
  difficulty_level: 'Foundation' | 'Comprehensive' | 'Advanced' | 'Revision';
  price: number;
  original_price?: number;
  is_featured: boolean;
  is_published: boolean;
  display_order: number;
  sections?: CourseSection[];
  rating?: number;
  review_count?: number;
}

export interface QuestionOption {
  id: string;
  question_id?: string;
  option_key: 'A' | 'B' | 'C' | 'D';
  option_text: string;
  is_correct: boolean;
}

export interface Question {
  id: string;
  subject_id: string;
  chapter_id?: string;
  exam_id?: string;
  question_text: string;
  question_image_url?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  explanation: string;
  year_asked?: number;
  is_pyq: boolean;
  options: QuestionOption[];
}

export interface QuestionAttempt {
  id: string;
  question_id: string;
  selected_option_id: string;
  is_correct: boolean;
  time_taken_seconds: number;
  attempted_at: string;
}

export interface LiveClass {
  id: string;
  course_id?: string;
  exam_id?: string;
  title: string;
  educator_name: string;
  scheduled_start: string;
  scheduled_end: string;
  status: 'upcoming' | 'live' | 'completed' | 'cancelled';
  stream_room_id?: string;
  subject_name?: string;
  provider: string;
}

export interface Mentor {
  id: string;
  name: string;
  headline: string;
  expertise_tags: string[];
  rating: number;
  total_sessions: number;
  avatar_url?: string;
  bio: string;
  is_available: boolean;
  available_slots?: string[];
}

export interface CounsellingSession {
  id: string;
  user_id: string;
  category: 'career_guidance' | 'exam_strategy' | 'stream_selection' | 'college_choice';
  target_exam: string;
  preferred_slot?: string;
  status: 'requested' | 'scheduled' | 'completed';
  counsellor_notes?: string;
  created_at: string;
}

export interface StudyMaterial {
  id: string;
  title: string;
  slug: string;
  exam_slug?: string;
  subject_name: string;
  material_type: 'formula_sheet' | 'revision_notes' | 'pyq' | 'mind_map';
  file_size: string;
  page_count: number;
  is_gated: boolean;
  download_count: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  link_url?: string;
  is_read: boolean;
  created_at: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  mobile: string;
  userCategory?: 'Student' | 'Parent' | 'Educator' | 'Professional' | 'Institution' | 'Other';
  subject: string;
  message: string;
}

export interface JobListing {
  id: string;
  number: number;
  title: string;
  category: 'Academic & Education' | 'Mentorship & Counselling' | 'Media & Creative' | 'Operations & Student Support';
  description: string;
  compensation: string;
  status: 'Available' | 'Apply now' | 'No Current Vacancies';
  isAvailable: boolean;
}

export interface JobApplicationFormValues {
  // A. Personal Details
  fullName: string;
  email: string;
  mobile: string;
  location: string;
  age?: string;

  // B. Position Details
  positionAppliedFor: string;
  preferredWorkMode: 'Online / Remote' | 'Hybrid' | 'On-site';
  availability: 'Full-time' | 'Part-time' | 'Contract' | 'Flexible';

  // C. Education & Experience
  highestQualification: string;
  currentStatus: 'Student' | 'Graduate' | 'Working Professional' | 'Freelancer' | 'Other';
  relevantExperience?: string;
  keySkills: string;

  // D. Portfolio & Documents
  resumeUrl?: string;
  resumeFileName?: string;
  portfolioUrl?: string;
  linkedInUrl?: string;

  // E. Your Interest in LearnDawn
  whyJoin: string;
  whyConsider: string;
  additionalInfo?: string;
}

export interface CareerCounsellingFormValues {
  // A. Student Details
  fullName: string;
  dobOrAge: string;
  mobile: string;
  email: string;
  cityDistrictState: string;

  // B. Academic Details
  currentClass: string;
  schoolCollegeName?: string;
  academicStream: string;
  recentAcademicPerformance?: string;

  // C. Career Interests
  preferredCareerCourse: string;
  areasOfInterest: string;
  entranceExam?: string;
  careerConcern: string;

  // D. Session Details
  preferredMode: 'Online' | 'In-person';
  preferredDate: string;
  preferredTimeSlot: string;
  attendees: 'Student' | 'Student + Parent/Guardian' | 'Parent/Guardian';

  // E. Additional Information
  guidanceTopics?: string;

  // F. Declaration
  declarationConfirmed: boolean;
}

export interface SearchResultItem {
  id: string;
  title: string;
  category: 'Exams' | 'Courses' | 'Subjects' | 'Study Materials' | 'Mentors';
  subtitle: string;
  href: string;
  badge?: string;
}
