'use client';

import React from 'react';
import Link from 'next/link';
import { COURSES_DATA } from '@/lib/data/mockData';
import { BookOpen, Play, Clock, Star, ArrowRight } from 'lucide-react';

export default function StudentCoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            My Enrolled Courses & Batches
          </h1>
          <p className="text-xs text-slate-500">
            Track syllabus progress, watch missed lecture recordings, and review notes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COURSES_DATA.map((course) => (
          <div
            key={course.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                {course.difficulty_level}
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1">
                {course.title}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2">
                {course.subtitle}
              </p>

              <div className="space-y-1 pt-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Progress</span>
                  <span className="font-semibold text-blue-600">65% Complete</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-[65%]" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">{course.total_lectures} Lessons</span>
              <Link
                href="/dashboard/student/learning"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Go to Class</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
