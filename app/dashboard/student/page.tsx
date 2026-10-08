'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth/context';
import { COURSES_DATA } from '@/lib/data/mockData';
import { 
  BookOpen, 
  GraduationCap, 
  Play, 
  Video, 
  Target, 
  Award, 
  ArrowRight, 
  Clock, 
  CheckCircle2,
  Sparkles,
  Phone,
  Mail
} from 'lucide-react';

export default function StudentDashboardPage() {
  const { user } = useAuth();
  const studentName = user?.full_name?.split(' ')[0] || 'Scholar';
  const targetExam = user?.target_goal_exam || 'NEET UG';

  // Filter recommended courses for student's goal
  const relevantCourses = COURSES_DATA.filter((c) => 
    c.title.toLowerCase().includes(targetExam.toLowerCase().split(' ')[0]) || c.is_featured
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Welcome Banner with Real Student Identity */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 text-white relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Target Goal: {targetExam}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Welcome back, {studentName}!
          </h1>

          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            Your student account is active. Access your structured NCERT annotations, chapter notes, and mock tests below.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/dashboard/student/practice"
              className="px-5 py-2.5 rounded-xl bg-white text-blue-700 font-bold text-xs shadow-md hover:bg-blue-50 transition flex items-center gap-2"
            >
              <Target className="w-3.5 h-3.5" />
              <span>Launch Diagnostic Practice</span>
            </Link>

            <Link
              href="/courses"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs transition flex items-center gap-2"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Explore Masterclass Batches</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Real Account Profile & Status Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
          <span className="text-xs text-slate-500">Target Pathway</span>
          <div className="text-xl font-bold text-slate-900 dark:text-white truncate">{targetExam}</div>
          <span className="text-[11px] text-blue-600 dark:text-blue-400 font-medium block">Active Entrance Goal</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
          <span className="text-xs text-slate-500">Enrolled Batches</span>
          <div className="text-xl font-bold text-slate-900 dark:text-white">0 Batches</div>
          <span className="text-[11px] text-slate-400 block">Awaiting course enrollment</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
          <span className="text-xs text-slate-500">Mock Tests Attempted</span>
          <div className="text-xl font-bold text-slate-900 dark:text-white">0 Solved</div>
          <span className="text-[11px] text-slate-400 block">Take first CBT simulation</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1">
          <span className="text-xs text-slate-500">Account Status</span>
          <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">Verified</div>
          <span className="text-[11px] text-slate-400 block">Database Profile Synced</span>
        </div>
      </div>

      {/* Real Student Profile Details Card */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>Registered Student Profile (Database Record)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-slate-500 block mb-0.5">Full Name</span>
            <span className="font-semibold text-slate-900 dark:text-white text-sm">{user?.full_name || 'Student'}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-slate-500 block mb-0.5 flex items-center gap-1">
              <Mail className="w-3 h-3 text-slate-400" /> Registered Email
            </span>
            <span className="font-semibold text-slate-900 dark:text-white font-mono">{user?.email || '—'}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-slate-500 block mb-0.5 flex items-center gap-1">
              <Phone className="w-3 h-3 text-slate-400" /> Contact Mobile
            </span>
            <span className="font-semibold text-slate-900 dark:text-white font-mono">{user?.mobile || '—'}</span>
          </div>
        </div>
      </div>

      {/* Recommended Masterclass Batches for Student's Target */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Recommended Masterclasses for {targetExam}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Select an official syllabus track to unlock live synchronized classroom lectures and study notes.
            </p>
          </div>
          <Link href="/courses" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
            View All Courses →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relevantCourses.slice(0, 2).map((course) => (
            <div
              key={course.id}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex flex-col justify-between space-y-4 hover:border-blue-500 transition"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                  {course.language} • {course.difficulty_level}
                </span>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  {course.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  {course.subtitle}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {course.duration_hours}h
                  </span>
                  <span className="flex items-center gap-1">
                    <Video className="w-3.5 h-3.5" /> {course.total_lectures} Lectures
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="text-xs line-through text-slate-400">₹{course.original_price}</span>
                  <span className="text-base font-black text-slate-900 dark:text-white ml-1.5">₹{course.price}</span>
                </div>
                <Link
                  href={`/courses/${course.slug}`}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-1.5 transition"
                >
                  <span>View Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
