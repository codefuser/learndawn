import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';
import { EXAMS_DATA, ACADEMIC_PROGRAMS_DATA, SUBJECTS_DATA } from '@/lib/data/mockData';
import { Exam, AcademicProgram, Subject } from '@/types';

export const ExamService = {
  async getAllExams(): Promise<Exam[]> {
    const supabase = getSupabaseClient();
    if (supabase && isSupabaseConfigured) {
      const { data, error } = await supabase
        .from('exams')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });
      if (!error && data && data.length > 0) return data as Exam[];
    }
    return EXAMS_DATA;
  },

  async getExamBySlug(slug: string): Promise<Exam | null> {
    const supabase = getSupabaseClient();
    if (supabase && isSupabaseConfigured) {
      const { data, error } = await supabase
        .from('exams')
        .select('*')
        .eq('slug', slug)
        .single();
      if (!error && data) return data as Exam;
    }
    return EXAMS_DATA.find((e) => e.slug === slug) || null;
  },

  async getAllAcademicPrograms(): Promise<AcademicProgram[]> {
    const supabase = getSupabaseClient();
    if (supabase && isSupabaseConfigured) {
      const { data, error } = await supabase
        .from('academic_programs')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });
      if (!error && data && data.length > 0) return data as AcademicProgram[];
    }
    return ACADEMIC_PROGRAMS_DATA;
  },

  async getAcademicProgramBySlug(slug: string): Promise<AcademicProgram | null> {
    const supabase = getSupabaseClient();
    if (supabase && isSupabaseConfigured) {
      const { data, error } = await supabase
        .from('academic_programs')
        .select('*')
        .eq('slug', slug)
        .single();
      if (!error && data) return data as AcademicProgram;
    }
    return ACADEMIC_PROGRAMS_DATA.find((p) => p.slug === slug) || null;
  },

  async getSubjectsForExam(examSlug: string): Promise<Subject[]> {
    // Returns subjects curated for the given exam
    if (examSlug.includes('jee')) {
      return SUBJECTS_DATA.filter((s) => ['physics', 'chemistry', 'mathematics'].includes(s.slug));
    }
    if (examSlug.includes('nursing')) {
      return SUBJECTS_DATA.filter((s) => ['biology', 'chemistry', 'physics', 'general-aptitude'].includes(s.slug));
    }
    // Default medical/academic
    return SUBJECTS_DATA;
  }
};
