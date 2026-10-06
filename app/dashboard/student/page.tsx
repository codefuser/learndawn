'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth/context';
import { COURSES_DATA, LIVE_CLASSES_DATA } from '@/lib/data/mockData';
import { 
  BookOpen, 
  GraduationCap, 
  Play, 
  Video, 
  Target, 
  Award, 
  FileText, 
  HeartHandshake, 
  Compass, 
  BarChart2, 
  Bookmark, 
  Bell, 
  Flame, 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

export default function StudentDashboardPage() {
  const { user } = useAuth();
  const studentName = user?.full_name?.split(' ')[0] || 'Arjun';

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Welcome Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 text-white relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/20">
            <Flame className="w-3.5 h-3.5 fill-amber-400" />
            <span>Target: {user?.target_goal_exam || 'NEET UG 2025'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Welcome back, {studentName}!
          </h1>

          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            You are on a 14-day study streak. You have 1 upcoming live class this evening and 2 diagnostic revision modules pending.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/dashboard/student/learning"
              className="px-5 py-2.5 rounded-xl bg-white text-blue-700 font-bold text-xs shadow-md hover:bg-blue-50 transition flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-blue-700" />
              <span>Resume Active Lesson</span>
            </Link>

            <Link
              href="/dashboard/student/practice"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs transition"
            >
              Start Practice Test
            </Link>
          </div>
        </div>
      </div>

      {/* Primary KPI Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-xs text-slate-500">Course Syllabus</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white">68%</div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mt-2">
            <div className="bg-blue-600 h-1.5 rounded-full w-[68%]" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-xs text-slate-500">Test Accuracy</span>
          <div className="text-2xl font-black text-emerald-600">84.2%</div>
          <span className="text-[11px] text-slate-400">Top 5% in Peer Batch</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-xs text-slate-500">Practice Solved</span>
          <div className="text-2xl font-black text-indigo-600">840</div>
          <span className="text-[11px] text-slate-400">Questions attempted</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <span className="text-xs text-slate-500">Learning Streak</span>
          <div className="text-2xl font-black text-amber-500">14 Days</div>
          <span className="text-[11px] text-slate-400">Consistency multiplier</span>
        </div>
      </div>

      {/* Main Grid: Live Classes & Weak Topics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Live Classes & Continue Learning */}
        <div className="lg:col-span-8 space-y-6">
          {/* Upcoming Live Classes Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-blue-500" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Today&apos;s Live Classroom Schedule
                </h3>
              </div>
              <span className="text-xs text-blue-600 font-semibold">2 Sessions</span>
            </div>

            <div className="space-y-3">
              {LIVE_CLASSES_DATA.slice(0, 2).map((cls) => (
                <div
                  key={cls.id}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        cls.status === 'live'
                          ? 'bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400 animate-pulse'
                          : 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                      }`}>
                        {cls.status === 'live' ? '● Live Now' : 'Scheduled 6:00 PM'}
                      </span>
                      <span className="text-xs text-slate-500">{cls.subject_name}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {cls.title}
                    </h4>
                    <p className="text-xs text-slate-500">
                      Instructor: <strong className="text-slate-700 dark:text-slate-300">{cls.educator_name}</strong>
                    </p>
                  </div>

                  <Link
                    href="/dashboard/student/learning"
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition whitespace-nowrap self-end sm:self-auto"
                  >
                    {cls.status === 'live' ? 'Join Live Room' : 'Set Reminder'}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Continue Learning Course Progress */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-500" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Continue Learning
                </h3>
              </div>
              <Link href="/dashboard/student/courses" className="text-xs text-blue-600 font-semibold hover:underline">
                View All Courses
              </Link>
            </div>

            <div className="space-y-3">
              {COURSES_DATA.slice(0, 2).map((course) => (
                <div
                  key={course.id}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {course.difficulty_level}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
                      {course.title}
                    </h4>
                    <div className="w-48 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-1.5 rounded-full w-2/3" />
                    </div>
                  </div>

                  <Link
                    href="/dashboard/student/learning"
                    className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition"
                  >
                    <Play className="w-4 h-4 fill-blue-600 dark:fill-blue-400" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Weak Topics & Quick Action Hub */}
        <div className="lg:col-span-4 space-y-6">
          {/* Weak Topics Identification Engine */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Target Weak Topics</span>
            </div>
            <p className="text-xs text-slate-500">
              Based on your latest 5 mock tests, prioritize these areas to boost your percentile:
            </p>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-900/40 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-rose-900 dark:text-rose-200">Rotational Inertia</div>
                  <div className="text-[10px] text-rose-600">Physics • 42% Accuracy</div>
                </div>
                <Link
                  href="/dashboard/student/practice"
                  className="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-[11px] font-semibold"
                >
                  Drill
                </Link>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/40 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-amber-900 dark:text-amber-200">Aldehydes & Ketones</div>
                  <div className="text-[10px] text-amber-600">Chemistry • 55% Accuracy</div>
                </div>
                <Link
                  href="/dashboard/student/practice"
                  className="px-2.5 py-1 rounded-lg bg-amber-600 text-white text-[11px] font-semibold"
                >
                  Drill
                </Link>
              </div>

              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-blue-900 dark:text-blue-200">Recombinase in Meiosis</div>
                  <div className="text-[10px] text-blue-600">Biology • 62% Accuracy</div>
                </div>
                <Link
                  href="/dashboard/student/practice"
                  className="px-2.5 py-1 rounded-lg bg-blue-600 text-white text-[11px] font-semibold"
                >
                  Drill
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Hub Navigation Cards */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Student Resource Hub
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link
                href="/dashboard/student/saved"
                className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition flex items-center gap-2 font-medium"
              >
                <Bookmark className="w-3.5 h-3.5 text-blue-500" />
                <span>Saved (18)</span>
              </Link>

              <Link
                href="/dashboard/student/materials"
                className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition flex items-center gap-2 font-medium"
              >
                <FileText className="w-3.5 h-3.5 text-purple-500" />
                <span>Handbooks</span>
              </Link>

              <Link
                href="/dashboard/student/mentorship"
                className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition flex items-center gap-2 font-medium"
              >
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-500" />
                <span>Mentorship</span>
              </Link>

              <Link
                href="/dashboard/student/counselling"
                className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition flex items-center gap-2 font-medium"
              >
                <Compass className="w-3.5 h-3.5 text-amber-500" />
                <span>Counselling</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
