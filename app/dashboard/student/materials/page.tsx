'use client';

import React from 'react';
import { STUDY_MATERIALS_DATA } from '@/lib/data/mockData';
import { useToast } from '@/components/ui/Toast';
import { FileText, Download, CheckCircle } from 'lucide-react';

export default function StudentMaterialsPage() {
  const { showToast } = useToast();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Study Materials & Handbooks
        </h1>
        <p className="text-xs text-slate-500">
          Download PDF formula handbooks, NCERT extracts, and annotated previous year questions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {STUDY_MATERIALS_DATA.map((mat) => (
          <div
            key={mat.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
                {mat.material_type.replace('_', ' ')}
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {mat.title}
              </h3>
              <p className="text-xs text-slate-500">
                {mat.subject_name} • {mat.page_count} Pages • {mat.file_size}
              </p>
            </div>

            <button
              onClick={() => showToast(`Initiating secure download of ${mat.title}`, 'success')}
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
