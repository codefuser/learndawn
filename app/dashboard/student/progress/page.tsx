'use client';

import React from 'react';
import { BarChart2, TrendingUp, Award, CheckCircle, AlertTriangle } from 'lucide-react';

export default function StudentProgressPage() {
  const subjectProgress = [
    { subject: 'Biology (Botany & Zoology)', score: '91%', progress: 91, status: 'Strong', color: 'bg-emerald-500' },
    { subject: 'Chemistry (Physical & Organic)', score: '78%', progress: 78, status: 'On Track', color: 'bg-blue-500' },
    { subject: 'Physics (Mechanics & Electrodynamics)', score: '62%', progress: 62, status: 'Needs Practice', color: 'bg-amber-500' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Cognitive Learning Analytics & Progress
        </h1>
        <p className="text-xs text-slate-500">
          Continuous evaluation across 28 syllabus milestones and 18 full-length simulated test papers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <span className="text-xs text-slate-500">All-India Predicted Percentile</span>
          <div className="text-3xl font-black text-blue-600">98.42 %ile</div>
          <span className="text-xs text-emerald-600 font-semibold">↑ +2.1% from last month</span>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <span className="text-xs text-slate-500">Average Question Speed</span>
          <div className="text-3xl font-black text-slate-900 dark:text-white">48 sec</div>
          <span className="text-xs text-slate-400">Target: &lt; 55 sec per question</span>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <span className="text-xs text-slate-500">Negative Marks Eliminated</span>
          <div className="text-3xl font-black text-emerald-600">-64 Marks</div>
          <span className="text-xs text-slate-400">Avoided through guess-work caution</span>
        </div>
      </div>

      {/* Subject-wise breakdown */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          Discipline Mastery Breakdown
        </h3>

        <div className="space-y-4">
          {subjectProgress.map((item) => (
            <div key={item.subject} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{item.subject}</span>
                <span className="font-bold text-slate-900 dark:text-white">{item.score} ({item.status})</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div className={`${item.color} h-2.5 rounded-full`} style={{ width: `${item.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
