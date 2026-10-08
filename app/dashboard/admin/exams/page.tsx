'use client';

import React from 'react';
import { EXAMS_DATA } from '@/lib/data/mockData';
import { useToast } from '@/components/ui/Toast';
import { GraduationCap, Plus, Edit } from 'lucide-react';

export default function AdminExamsPage() {
  const { showToast } = useToast();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Goal Exams Configuration</h1>
          <p className="text-xs text-slate-400">
            Define eligibility parameters, exam redprints, and syllabus scopes.
          </p>
        </div>

        <button
          onClick={() => showToast('New Exam configuration form opened', 'info')}
          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Entrance Exam</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXAMS_DATA.map((exam) => (
          <div
            key={exam.id}
            className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-950 text-red-400 border border-red-900">
                {exam.short_code}
              </span>
              <span className="text-xs text-red-400 font-semibold">Active Catalog</span>
            </div>

            <h3 className="text-lg font-bold text-white">{exam.title}</h3>
            <p className="text-xs text-slate-400 line-clamp-2">{exam.tagline}</p>

            <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <div>Subjects: <strong className="text-slate-200">{exam.subjects_count}</strong></div>
              <div>CBT Mock Papers: <strong className="text-slate-200">{exam.mock_tests_count}</strong></div>
            </div>

            <button
              onClick={() => showToast(`Editing exam parameters for ${exam.title}`, 'info')}
              className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-xs border border-slate-700 transition"
            >
              Configure Parameters
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
