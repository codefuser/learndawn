'use client';

import React from 'react';
import { QUESTIONS_DATA } from '@/lib/data/mockData';
import { Bookmark, Sparkles, CheckCircle2 } from 'lucide-react';

export default function StudentSavedPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Bookmarked Questions & Revision Vault
        </h1>
        <p className="text-xs text-slate-500">
          Review tricky problems, tricky options, and personal notes saved during practice sessions.
        </p>
      </div>

      <div className="space-y-4">
        {QUESTIONS_DATA.slice(0, 3).map((q, idx) => (
          <div
            key={q.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300">
                Saved Question #{idx + 1}
              </span>
              <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
            </div>

            <p className="text-sm font-medium text-slate-900 dark:text-white leading-relaxed">
              {q.question_text}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-600 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-white block mb-0.5">Explanation Note:</strong>
              {q.explanation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
