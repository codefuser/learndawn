import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';
import { COURSES_DATA } from '@/lib/data/mockData';
import { Course } from '@/types';

export const CourseService = {
  async getAllCourses(): Promise<Course[]> {
    const supabase = getSupabaseClient();
    if (supabase && isSupabaseConfigured) {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('is_published', true)
        .order('display_order', { ascending: true });
      if (!error && data && data.length > 0) return data as Course[];
    }
    return COURSES_DATA;
  },

  async getCourseBySlug(slug: string): Promise<Course | null> {
    const supabase = getSupabaseClient();
    if (supabase && isSupabaseConfigured) {
      const { data, error } = await supabase
        .from('courses')
        .select('*, course_sections(*, lessons(*))')
        .eq('slug', slug)
        .single();
      if (!error && data) return data as Course;
    }
    return COURSES_DATA.find((c) => c.slug === slug) || null;
  },

  async getFeaturedCourses(): Promise<Course[]> {
    const courses = await this.getAllCourses();
    return courses.filter((c) => c.is_featured);
  }
};
