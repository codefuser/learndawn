import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';
import { QUESTIONS_DATA } from '@/lib/data/mockData';
import { Question } from '@/types';

export const QuestionService = {
  async getQuestions(filters?: { examId?: string; subjectId?: string; difficulty?: string }): Promise<Question[]> {
    const supabase = getSupabaseClient();
    if (supabase && isSupabaseConfigured) {
      let query = supabase.from('questions').select('*, question_options(*)');
      if (filters?.examId) query = query.eq('exam_id', filters.examId);
      if (filters?.subjectId) query = query.eq('subject_id', filters.subjectId);
      if (filters?.difficulty) query = query.eq('difficulty', filters.difficulty);

      const { data, error } = await query;
      if (!error && data && data.length > 0) return data as unknown as Question[];
    }

    let questions = [...QUESTIONS_DATA];
    if (filters?.difficulty) {
      questions = questions.filter((q) => q.difficulty === filters.difficulty);
    }
    return questions;
  },

  async recordAttempt(payload: {
    questionId: string;
    selectedOptionId: string;
    isCorrect: boolean;
    timeTakenSeconds: number;
  }) {
    const supabase = getSupabaseClient();
    if (supabase && isSupabaseConfigured) {
      await supabase.from('question_attempts').insert({
        question_id: payload.questionId,
        selected_option_id: payload.selectedOptionId,
        is_correct: payload.isCorrect,
        time_taken_seconds: payload.timeTakenSeconds,
      });
    }
    // Saved in local storage for preview/demo
    if (typeof window !== 'undefined') {
      const history = JSON.parse(localStorage.getItem('learndawn_attempts') || '[]');
      history.push({ ...payload, attempted_at: new Date().toISOString() });
      localStorage.setItem('learndawn_attempts', JSON.stringify(history));
    }
  },

  async toggleBookmark(questionId: string) {
    if (typeof window !== 'undefined') {
      const bookmarks = new Set(JSON.parse(localStorage.getItem('learndawn_bookmarks') || '[]'));
      if (bookmarks.has(questionId)) {
        bookmarks.delete(questionId);
      } else {
        bookmarks.add(questionId);
      }
      localStorage.setItem('learndawn_bookmarks', JSON.stringify(Array.from(bookmarks)));
      return bookmarks.has(questionId);
    }
    return false;
  }
};
