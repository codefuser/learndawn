'use client';

import React from 'react';
import Link from 'next/link';
import { COURSES_DATA } from '@/lib/data/mockData';
import { useAuth } from '@/lib/auth/context';
import { 
  BookOpen, 
  Clock, 
  Star, 
  Sparkles, 
  ArrowRight, 
  CheckCircle,
  GraduationCap
} from 'lucide-react';

export const FeaturedCoursesSection: React.FC = () => {
  const { openAuthModal } = useAuth();

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Start Learning Today
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Flagship Batches
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
              Comprehensive 360° batches designed with structured weekly milestones, live sessions, doubt support, and continuous evaluation.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-xs font-bold text-red-600 dark:text-red-400 hover:underline"
          >
            <span>View All Courses & Batches</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className="rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-red-500/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Course Banner Accent */}
                <div className="h-36 bg-gradient-to-br from-slate-900 via-red-950 to-red-900 p-5 relative flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
                      {course.difficulty_level}
                    </span>
                    {course.rating && (
                      <span className="flex items-center gap-1 text-xs font-bold text-amber-300">
                        <Star className="w-3.5 h-3.5 fill-amber-300" />
                        <span>{course.rating}</span>
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="text-xs text-red-300 font-medium">{course.language}</span>
                    <h4 className="text-base font-bold text-white line-clamp-1 group-hover:text-amber-300 transition-colors">
                      {course.title}
                    </h4>
                  </div>
                </div>

                {/* Course Details Body */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {course.subtitle}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <GraduationCap className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Faculty: <strong className="text-slate-700 dark:text-slate-200">{course.instructor_name}</strong></span>
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 dark:border-slate-700/60 grid grid-cols-2 gap-2 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.duration_hours} Hours Live</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.total_lectures} Lectures</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with Price & Actions */}
              <div className="p-6 pt-0 space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">
                    ₹{course.price.toLocaleString('en-IN')}
                  </span>
                  {course.original_price && (
                    <span className="text-xs text-slate-400 line-through">
                      ₹{course.original_price.toLocaleString('en-IN')}
                    </span>
                  )}
                  <span className="text-[10px] font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-1.5 py-0.5 rounded">
                    Save {Math.round(((course.original_price! - course.price) / course.original_price!) * 100)}%
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="py-2.5 px-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-center transition"
                  >
                    Curriculum
                  </Link>
                  <button
                    onClick={() => openAuthModal(`/courses/${course.slug}`)}
                    className="py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-md transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
