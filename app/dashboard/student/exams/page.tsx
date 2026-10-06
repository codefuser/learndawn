'use client';

import React from 'react';
import Link from 'next/link';
import { EXAMS_DATA } from '@/lib/data/mockData';
import { GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function StudentExamsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          My Target Entrance Exams
        </h1>
        <p className="text-xs text-slate-500">
          Monitor your syllabus completion benchmarks, mock test percentiles, and exam milestones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXAMS_DATA.slice(0, 2).map((exam) => (
          <div
            key={exam.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                Primary Goal
              </span>
              <span className="text-xs font-mono font-bold text-slate-400">{exam.short_code}</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {exam.title}
            </h3>

            <p className="text-xs text-slate-500 leading-relaxed">
              {exam.description}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <span className="text-slate-400 block text-[10px]">Mock Tests Solved</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">18 / 45 Tests</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <span className="text-slate-400 block text-[10px]">Current Predicted AIR</span>
                <span className="font-bold text-emerald-600">Top 1,200</span>
              </div>
            </div>

            <Link
              href={`/exams/${exam.slug}`}
              className="w-full py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-center block text-xs font-semibold text-slate-700 dark:text-slate-300 transition"
            >
              View Full Exam Roadmap & Syllabus
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
