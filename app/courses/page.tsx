'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { COURSES_DATA } from '@/lib/data/mockData';
import { useAuth } from '@/lib/auth/context';
import { 
  BookOpen, 
  Clock, 
  Star, 
  ArrowRight, 
  GraduationCap, 
  Filter, 
  Sparkles 
} from 'lucide-react';

export default function CoursesPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const { openAuthModal } = useAuth();

  const filteredCourses = COURSES_DATA.filter((course) => {
    return selectedDifficulty === 'All' || course.difficulty_level === selectedDifficulty;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1 pb-20">
        <section className="py-14 sm:py-20 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Comprehensive Batches</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              All Courses & Flagship Batches
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Explore 360° syllabus programs taught by AIIMS doctors, IIT Bombay alumni, and senior national faculty.
            </p>

            {/* Filter buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
              {(['All', 'Foundation', 'Comprehensive', 'Advanced'] as const).map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-4 py-2 rounded-xl transition ${
                    selectedDifficulty === diff
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {diff} {diff !== 'All' ? 'Batches' : 'Levels'}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Course Cards Grid */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-40 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 p-6 relative flex flex-col justify-between text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
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
                      <span className="text-xs text-blue-300 font-medium">{course.language}</span>
                      <h3 className="text-lg font-bold text-white line-clamp-1 group-hover:text-amber-300 transition">
                        {course.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {course.subtitle}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <GraduationCap className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>By <strong className="text-slate-700 dark:text-slate-200">{course.instructor_name}</strong></span>
                    </div>

                    <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.duration_hours}h Live</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.total_lectures} Lessons</span>
                      </div>
                    </div>
                  </div>
                </div>

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
                      className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md transition flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Enroll</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
