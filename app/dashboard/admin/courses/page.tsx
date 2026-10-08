'use client';

import React from 'react';
import { COURSES_DATA } from '@/lib/data/mockData';
import { useToast } from '@/components/ui/Toast';
import { BookOpen, Plus, Edit, Eye, CheckCircle2 } from 'lucide-react';

export default function AdminCoursesPage() {
  const { showToast } = useToast();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Course & Batch Management</h1>
          <p className="text-xs text-slate-400">
            Publish batches, manage lecture outlines, and configure syllabus pricing.
          </p>
        </div>

        <button
          onClick={() => showToast('New Course Creation Modal ready for database insert', 'info')}
          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Batch</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COURSES_DATA.map((course) => (
          <div
            key={course.id}
            className="p-6 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {course.difficulty_level}
                </span>
                <span className="text-xs font-bold text-red-400">● Published</span>
              </div>
              <h3 className="text-base font-bold text-white line-clamp-1">{course.title}</h3>
              <p className="text-xs text-slate-400 line-clamp-2">{course.subtitle}</p>
              <div className="text-xs text-slate-500">
                Instructor: <strong className="text-slate-300">{course.instructor_name}</strong>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-sm font-black text-amber-400">
                ₹{course.price.toLocaleString('en-IN')}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => showToast(`Opening editor for ${course.title}`, 'info')}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs border border-slate-700"
                  aria-label="Edit course"
                >
                  <Edit className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
