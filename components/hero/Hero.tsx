'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth/context';
import { useLanguage } from '@/lib/i18n/context';
import { 
  ArrowRight, 
  Sparkles, 
  GraduationCap, 
  TrendingUp, 
  CheckCircle2, 
  Users, 
  BookOpen, 
  PlayCircle, 
  ChevronDown, 
  Stethoscope, 
  Cpu, 
  Award, 
  Search 
} from 'lucide-react';
import { useSearch } from '@/components/search/SearchContext';

export const Hero: React.FC = () => {
  const { openAuthModal, user } = useAuth();
  const { t } = useLanguage();
  const { openSearch } = useSearch();

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4.25rem)] lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-between py-8 sm:py-10 lg:py-10 xl:py-12 bg-white dark:bg-black text-slate-900 dark:text-zinc-100 transition-colors duration-200">
      {/* Precision Ambient Red Aura (High-End Dark Mode Atmosphere) */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[450px] bg-red-600/[0.08] dark:bg-red-600/[0.12] blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[550px] h-[450px] bg-red-500/[0.04] dark:bg-red-500/[0.08] blur-[150px] pointer-events-none" />

      {/* Main Expansive Content Container */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 my-auto">
        {/* Top Header Row: Accreditation Badge & Integrated Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 sm:mb-10 pt-1">
          {/* Accreditation Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold shadow-sm self-start">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Digital Learning Academy of India • Synchronized CBT Ecosystem</span>
          </div>

          {/* Search Trigger */}
          <button
            type="button"
            onClick={openSearch}
            className="group flex items-center justify-between gap-3 px-4 py-2 sm:py-2.5 rounded-2xl bg-white dark:bg-zinc-900/90 hover:bg-zinc-50 dark:hover:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/50 dark:hover:border-red-500/50 shadow-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-all cursor-pointer w-full sm:w-auto sm:min-w-[320px] md:min-w-[360px] backdrop-blur-md"
            aria-label="Open search engine"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-red-500 group-hover:scale-105 transition-transform">
                <Search className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition">
                Search exams, courses, notes...
              </span>
            </div>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 group-hover:text-red-400 transition">
              Ctrl+K
            </kbd>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Bold Hero Headlines, CTAs & Highlights */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Main Grand Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-black text-zinc-950 dark:text-white tracking-tight leading-[1.06]">
              Learn Today.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600">
                Build Your Tomorrow.
              </span>
            </h1>

            {/* Supporting Descriptive Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl font-normal leading-relaxed">
              India&apos;s premier digital academy for competitive entrance exams, board academics, live masterclasses, and 1:1 mentorship from AIIMS & IITian faculty.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  if (user) {
                    window.location.href = user.role === 'admin' ? '/dashboard/admin' : '/dashboard/student';
                  } else {
                    openAuthModal('/dashboard/student');
                  }
                }}
                className="px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-red-600/30 ring-1 ring-red-400/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>{user ? 'Open Student Portal' : 'Start Learning Free'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/exams"
                className="px-7 py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900/90 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 font-bold text-sm sm:text-base transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-red-500" />
                <span>Explore Goal Exams</span>
              </Link>

              <Link
                href="/learning-system"
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900/60"
              >
                <PlayCircle className="w-4 h-4 text-red-500" />
                <span>4-Layer Methodology</span>
              </Link>
            </div>

            {/* 3 Trust Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-zinc-200 dark:border-zinc-900">
              <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 shadow-sm flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-red-500/10 text-red-500 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white">NCERT Line-by-Line</div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Deep syllabus notes</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 shadow-sm flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-red-500/10 text-red-500 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white">1:1 Medical & IIT Mentors</div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Personalized guidance</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 shadow-sm flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-red-500/10 text-red-500 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white">Simulated NTA CBT Tests</div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Real-time rank analytics</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Grand Obsidian Academy Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              
              {/* Central Card */}
              <div className="relative z-10 rounded-3xl bg-zinc-50 dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800/80 shadow-2xl p-6 sm:p-7 backdrop-blur-xl space-y-5 text-zinc-900 dark:text-white">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-850 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md shadow-red-600/30">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-950 dark:text-white">
                        Learndawn Studio
                      </h4>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                        Live Synchronized Classroom
                      </p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-500/15 text-red-500 dark:text-red-400 border border-red-500/30 animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Live Now
                  </span>
                </div>

                {/* Simulated Active Class Banner */}
                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white space-y-3 shadow-inner">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-red-500 dark:text-red-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> High-Yield NEET Special
                  </div>
                  <h5 className="text-sm font-bold leading-snug">
                    Cell Cycle & Regulation Checkpoints in Prophase I
                  </h5>
                  <div className="flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-300 pt-0.5">
                    <span>Dr. Aarav Sharma (AIIMS)</span>
                    <span className="text-red-500 dark:text-red-400 font-semibold">942 Learners Online</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-red-600 h-1.5 rounded-full w-3/4" />
                  </div>
                </div>

                {/* Key Metrics Subcards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-1.5 mb-1">
                      <TrendingUp className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-bold text-zinc-900 dark:text-white">98.4%</span>
                    </div>
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight block">
                      Target Accuracy Rate
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Users className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-bold text-zinc-900 dark:text-white">1:1 Mentorship</span>
                    </div>
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight block">
                      Direct Guidance Access
                    </span>
                  </div>
                </div>

                {/* Join Classroom CTA */}
                <Link
                  href="/exams/neet-ug"
                  className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition border border-zinc-800 dark:border-zinc-700"
                >
                  <span>Explore NEET UG Live Classroom</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Floating Decorative Pill */}
              <div className="absolute -top-3.5 -right-3.5 z-20 px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl hidden sm:flex items-center gap-2 text-xs text-zinc-800 dark:text-zinc-200 font-semibold backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>New 2025/2026 Batches Open</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Bottom Pathway Ribbon */}
      <div className="w-full border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50/80 dark:bg-black/80 backdrop-blur-md py-3 px-5 sm:px-8 lg:px-12 xl:px-16 relative z-10 transition-colors">
        <div className="max-w-[1536px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2 font-medium">
            <span className="text-zinc-900 dark:text-zinc-200 font-semibold">Active Pathways:</span>
            <div className="flex flex-wrap items-center gap-1.5">
              <Link href="/exams/neet-ug" className="px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/50 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition flex items-center gap-1 shadow-sm">
                <Stethoscope className="w-3 h-3 text-red-500" /> NEET UG
              </Link>
              <Link href="/exams/jee-main" className="px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/50 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition flex items-center gap-1 shadow-sm">
                <Cpu className="w-3 h-3 text-red-500" /> JEE Main
              </Link>
              <Link href="/exams/cuet" className="px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/50 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition flex items-center gap-1 shadow-sm">
                <Award className="w-3 h-3 text-red-500" /> CUET (UG)
              </Link>
              <Link href="/academics" className="px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/50 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition flex items-center gap-1 shadow-sm">
                <BookOpen className="w-3 h-3 text-red-500" /> CBSE Class 9-12
              </Link>
            </div>
          </div>

          <a
            href="#select-goal"
            className="inline-flex items-center gap-1.5 text-red-500 hover:text-red-400 font-semibold transition cursor-pointer"
          >
            <span>Select Your Goal Exam Below</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
