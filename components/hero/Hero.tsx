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
  ShieldCheck,
  Stethoscope,
  Cpu,
  Award
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { openAuthModal, user } = useAuth();
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4.25rem)] lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-between py-6 sm:py-8 lg:py-8 xl:py-10 bg-gradient-to-b from-blue-950/20 via-slate-950 to-slate-950 text-slate-100">
      {/* Background Dawn Radiant Atmospheric Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-br from-blue-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[500px] bg-gradient-to-bl from-amber-500/10 via-blue-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Main Expansive Content Container */}
      <div className="w-full max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Bold Hero Headlines, CTAs & Accreditation */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-6 text-left">
            {/* National Accreditation Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Digital Learning Academy of India • Synchronized CBT Ecosystem</span>
            </div>

            {/* Main Grand Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] 2xl:text-[4.25rem] font-black text-white tracking-tight leading-[1.08]">
              Learn Today.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-amber-400 bg-clip-text text-transparent">
                Build Your Tomorrow.
              </span>
            </h1>

            {/* Supporting Descriptive Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              India&apos;s premier digital academy for competitive entrance exams, board academics, live masterclasses, and 1:1 mentorship from AIIMS & IITian faculty.
            </p>

            {/* Primary & Secondary Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  if (user) {
                    window.location.href = user.role === 'admin' ? '/dashboard/admin' : '/dashboard/student';
                  } else {
                    openAuthModal('/dashboard/student');
                  }
                }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>{user ? 'Open Student Portal' : 'Start Learning Free'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/exams"
                className="px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 font-bold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span>Explore Goal Exams</span>
              </Link>

              <Link
                href="/learning-system"
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition px-4 py-3 rounded-xl hover:bg-slate-900/60"
              >
                <PlayCircle className="w-4 h-4 text-amber-400" />
                <span>4-Layer Methodology</span>
              </Link>
            </div>

            {/* 3 Prominent Trust Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-800">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">NCERT Line-by-Line</div>
                  <div className="text-[10px] text-slate-400">Deep syllabus notes</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">1:1 Medical & IIT Mentors</div>
                  <div className="text-[10px] text-slate-400">Personalized guidance</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Simulated NTA CBT Tests</div>
                  <div className="text-[10px] text-slate-400">Real-time rank analytics</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Grand Glassmorphic Digital Academy Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              
              {/* Central Card */}
              <div className="relative z-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 sm:p-7 backdrop-blur-xl space-y-5">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Learndawn Studio
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Live Synchronized Classroom
                      </p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-500/15 text-rose-400 border border-rose-500/30 animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> Live Now
                  </span>
                </div>

                {/* Simulated Active Class Banner */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border border-slate-800 text-white space-y-3">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> High-Yield NEET Special
                  </div>
                  <h5 className="text-sm font-bold leading-snug">
                    Cell Cycle & Regulation Checkpoints in Prophase I
                  </h5>
                  <div className="flex items-center justify-between text-xs text-slate-300 pt-0.5">
                    <span>Dr. Aarav Sharma (AIIMS)</span>
                    <span className="text-emerald-400 font-medium">942 Learners Online</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-400 via-blue-400 to-emerald-400 h-1.5 rounded-full w-3/4" />
                  </div>
                </div>

                {/* Key Metrics Subcards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center gap-1.5 mb-1">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-bold text-white">98.4%</span>
                    </div>
                    <span className="text-[11px] text-slate-400 leading-tight block">
                      Target Accuracy Rate
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-sm font-bold text-white">1:1 Mentorship</span>
                    </div>
                    <span className="text-[11px] text-slate-400 leading-tight block">
                      Direct Guidance Access
                    </span>
                  </div>
                </div>

                {/* Join Classroom CTA */}
                <Link
                  href="/exams/neet-ug"
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-md"
                >
                  <span>Explore NEET UG Live Classroom</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Floating Decorative Pill */}
              <div className="absolute -top-3.5 -right-3.5 z-20 px-3 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700 shadow-xl hidden sm:flex items-center gap-2 text-xs text-amber-300 font-semibold backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>New 2025/2026 Batches Open</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Bottom Pathway Ribbon (fills bottom of viewport gracefully) */}
      <div className="w-full border-t border-slate-800/80 bg-slate-950/60 backdrop-blur-md py-3 px-5 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-[1536px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2 font-medium">
            <span className="text-slate-200 font-semibold">Active Pathways:</span>
            <div className="flex flex-wrap items-center gap-1.5">
              <Link href="/exams/neet-ug" className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500 text-slate-300 hover:text-white transition flex items-center gap-1">
                <Stethoscope className="w-3 h-3 text-emerald-400" /> NEET UG
              </Link>
              <Link href="/exams/jee-main" className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500 text-slate-300 hover:text-white transition flex items-center gap-1">
                <Cpu className="w-3 h-3 text-blue-400" /> JEE Main
              </Link>
              <Link href="/exams/cuet" className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500 text-slate-300 hover:text-white transition flex items-center gap-1">
                <Award className="w-3 h-3 text-purple-400" /> CUET (UG)
              </Link>
              <Link href="/academics" className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500 text-slate-300 hover:text-white transition flex items-center gap-1">
                <BookOpen className="w-3 h-3 text-amber-400" /> CBSE Class 9-12
              </Link>
            </div>
          </div>

          <a
            href="#select-goal"
            className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold transition cursor-pointer"
          >
            <span>Select Your Goal Exam Below</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
