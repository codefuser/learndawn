'use client';

import React from 'react';
import Link from 'next/link';
import { Award, Clock, CheckCircle2, Play, BarChart2 } from 'lucide-react';

export default function StudentTestsPage() {
  const tests = [
    {
      id: 't-1',
      title: 'NEET All-India Major Mock Test 04',
      pattern: '720 Marks • 180 Questions • 200 Minutes',
      status: 'Live',
      deadline: 'Ends Tonight at 11:59 PM',
      syllabus: 'Full Class 11 Physics & Chemistry + Human Physiology',
    },
    {
      id: 't-2',
      title: 'NEET Sectional Speed Drill: Mechanics & Optics',
      pattern: '180 Marks • 45 Questions • 50 Minutes',
      status: 'Available',
      deadline: 'Self-paced',
      syllabus: 'Kinematics, Newton Laws, Wave Optics, Ray Optics',
    },
    {
      id: 't-3',
      title: 'Previous Mock Test 03 (Completed)',
      pattern: 'Score: 618 / 720 (98.4% Percentile)',
      status: 'Reviewed',
      deadline: 'Attempted on Oct 01, 2026',
      syllabus: 'Complete Syllabus Diagnostic 03',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Simulated NTA CBT Mock Tests
        </h1>
        <p className="text-xs text-slate-500">
          Experience exact exam-day interfaces with negative marking calculations and national rank predictions.
        </p>
      </div>

      <div className="space-y-4">
        {tests.map((test) => (
          <div
            key={test.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  test.status === 'Live'
                    ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 font-bold'
                    : test.status === 'Reviewed'
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400'
                    : 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400'
                }`}>
                  {test.status}
                </span>
                <span className="text-xs text-slate-500">{test.deadline}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {test.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                {test.pattern}
              </p>
              <p className="text-xs text-slate-400">
                Syllabus: {test.syllabus}
              </p>
            </div>

            <div className="flex items-center gap-2 self-end md:self-auto">
              {test.status === 'Reviewed' ? (
                <Link
                  href="/dashboard/student/progress"
                  className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5"
                >
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>View Analysis</span>
                </Link>
              ) : (
                <Link
                  href="/dashboard/student/practice"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md transition flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Start Test Engine</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
