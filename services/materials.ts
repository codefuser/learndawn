import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';
import { STUDY_MATERIALS_DATA } from '@/lib/data/mockData';
import { StudyMaterial } from '@/types';

export const MaterialService = {
  async getAllMaterials(): Promise<StudyMaterial[]> {
    const supabase = getSupabaseClient();
    if (supabase && isSupabaseConfigured) {
      const { data, error } = await supabase
        .from('study_materials')
        .select('*')
        .eq('is_active', true);
      if (!error && data && data.length > 0) return data as StudyMaterial[];
    }
    return STUDY_MATERIALS_DATA;
  },

  async getMaterialsByExam(examSlug: string): Promise<StudyMaterial[]> {
    const materials = await this.getAllMaterials();
    return materials.filter((m) => !m.exam_slug || m.exam_slug === examSlug);
  },

  /**
   * Generates secure signed URL for private study materials
   */
  async getSecureDownloadUrl(storagePath: string): Promise<string> {
    const supabase = getSupabaseClient();
    if (supabase && isSupabaseConfigured) {
      const { data, error } = await supabase.storage
        .from('study-materials')
        .createSignedUrl(storagePath, 3600); // 1-hour expiry
      if (!error && data?.signedUrl) return data.signedUrl;
    }
    // Return sample direct blob or simulated URL
    return `#download-simulated-${encodeURIComponent(storagePath)}`;
  }
};
