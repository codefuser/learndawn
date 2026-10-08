'use client';

import React from 'react';
import { QUESTIONS_DATA } from '@/lib/data/mockData';
import { useToast } from '@/components/ui/Toast';
import { HelpCircle, Plus, Upload, Filter } from 'lucide-react';

export default function AdminQuestionsPage() {
  const { showToast } = useToast();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Question Bank Governance</h1>
          <p className="text-xs text-slate-400">
            Author, bulk upload, and tag practice questions with NCERT citations.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => showToast('CSV / JSON bulk importer ready for Supabase ingestion', 'info')}
            className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 font-semibold text-xs flex items-center gap-1.5 transition"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Bulk Import (CSV)</span>
          </button>

          <button
            onClick={() => showToast('New Question authoring modal opened', 'info')}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Create Question</span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {QUESTIONS_DATA.map((q, idx) => (
          <div
            key={q.id}
            className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-3 shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                Item #{idx + 1} • {q.difficulty}
              </span>
              <span className="text-xs font-semibold text-red-400">
                {q.is_pyq ? `PYQ ${q.year_asked}` : 'Practice Model'}
              </span>
            </div>

            <p className="text-sm text-slate-200">{q.question_text}</p>

            <div className="grid grid-cols-2 gap-2 text-xs pt-2">
              {q.options.map((opt) => (
                <div
                  key={opt.id}
                  className={`p-2.5 rounded-xl border ${
                    opt.is_correct
                      ? 'border-red-700 bg-red-950/40 text-red-300 font-semibold'
                      : 'border-slate-800 bg-slate-900 text-slate-400'
                  }`}
                >
                  <span className="font-bold mr-2">{opt.option_key}.</span>
                  <span>{opt.option_text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
