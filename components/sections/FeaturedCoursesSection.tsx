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
  GraduationCap
} from 'lucide-react';

export const FeaturedCoursesSection: React.FC = () => {
  const { openAuthModal } = useAuth();

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900 transition-colors">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-2 border border-zinc-200 dark:border-zinc-800">
              <Sparkles className="w-3.5 h-3.5 text-red-500" /> Start Learning Today
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Featured Flagship Batches
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-xl">
              Comprehensive 360° batches designed with structured weekly milestones, live sessions, doubt support, and continuous evaluation.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-xs font-bold text-red-500 hover:text-red-400 transition"
          >
            <span>View All Courses & Batches</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className="rounded-3xl bg-zinc-50 dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800/90 overflow-hidden hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Subtle top red glow bar on hover */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/0 to-transparent group-hover:via-red-500 transition-all duration-300" />

              <div>
                {/* Clean Obsidian Course Banner */}
                <div className="h-32 bg-zinc-100 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-zinc-800/80 p-5 relative flex flex-col justify-between text-zinc-900 dark:text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 shadow-sm">
                      {course.difficulty_level}
                    </span>
                    {course.rating && (
                      <span className="flex items-center gap-1 text-xs font-bold text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        <span>{course.rating}</span>
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="text-xs text-red-500 dark:text-red-400 font-semibold">{course.language}</span>
                    <h4 className="text-base font-bold text-zinc-950 dark:text-white line-clamp-1 group-hover:text-red-500 transition-colors">
                      {course.title}
                    </h4>
                  </div>
                </div>

                {/* Course Details Body */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 line-clamp-2 leading-relaxed">
                    {course.subtitle}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <GraduationCap className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Faculty: <strong className="text-zinc-800 dark:text-zinc-200">{course.instructor_name}</strong></span>
                  </div>

                  <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-2 gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{course.duration_hours} Hours Live</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{course.total_lectures} Lectures</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with Price & Actions */}
              <div className="p-6 pt-0 space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-zinc-950 dark:text-white">
                    ₹{course.price.toLocaleString('en-IN')}
                  </span>
                  {course.original_price && (
                    <span className="text-xs text-zinc-400 line-through">
                      ₹{course.original_price.toLocaleString('en-IN')}
                    </span>
                  )}
                  <span className="text-[10px] font-bold text-red-500 bg-red-500/10 border border-red-500/20 px-1.5 py-0.5 rounded">
                    Save {Math.round(((course.original_price! - course.price) / course.original_price!) * 100)}%
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="py-2.5 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-semibold text-center transition"
                  >
                    Curriculum
                  </Link>
                  <button
                    onClick={() => openAuthModal(`/courses/${course.slug}`)}
                    className="py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-md shadow-red-600/25 transition flex items-center justify-center gap-1 cursor-pointer"
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
