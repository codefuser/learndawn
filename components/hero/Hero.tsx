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
  PlayCircle 
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { openAuthModal } = useAuth();
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-blue-50/40 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background Dawn Radiant Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* National Accreditation / Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/70 border border-blue-300/60 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{t('hero.badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Learn Today.{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
                Build Your Tomorrow.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t('hero.subheading')}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => openAuthModal('/dashboard/student')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{t('hero.primaryCta')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/exams"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-blue-500" />
                <span>{t('hero.secondaryCta')}</span>
              </Link>

              <Link
                href="/learning-system"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition sm:ml-2 py-2"
              >
                <PlayCircle className="w-4 h-4 text-amber-500" />
                <span>See How It Works</span>
              </Link>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200/70 dark:border-slate-800/80">
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>NCERT Line-by-Line</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>1:1 Medical & IIT Mentors</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Simulated NTA CBT Test Series</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Interactive Learning Ecosystem Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glassmorphic Central Card: Digital Academy Showcase */}
              <div className="relative z-10 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xl p-6 backdrop-blur-xl space-y-5">
                {/* Header of Card */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        Learndawn Studio
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Live Synchronized Classroom
                      </p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-500/10 text-rose-500 border border-rose-500/20 animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Live Now
                  </span>
                </div>

                {/* Simulated Active Class Banner */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white relative overflow-hidden space-y-3">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> High-Yield NEET Special
                  </div>
                  <h5 className="text-sm font-bold leading-snug">
                    Cell Cycle & Regulation Checkpoints in Prophase I
                  </h5>
                  <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                    <span>Dr. Aarav Sharma (AIIMS)</span>
                    <span className="text-emerald-400 font-medium">942 Learners Online</span>
                  </div>

                  {/* Interactive Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-400 to-emerald-400 h-1.5 rounded-full w-3/4" />
                  </div>
                </div>

                {/* Sub-cards Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white">98.4%</span>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight block">
                      Target Accuracy Rate
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white">1:1 Mentorship</span>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight block">
                      Direct Guidance Access
                    </span>
                  </div>
                </div>

                {/* Quick Join CTA inside card */}
                <Link
                  href="/exams/neet-ug"
                  className="w-full py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 hover:bg-blue-100 font-semibold text-xs flex items-center justify-center gap-1.5 transition"
                >
                  <span>Explore NEET UG Classroom</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Decorative Floating Badges */}
              <div className="absolute -bottom-6 -left-6 z-20 p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">NTA Format Tests</div>
                  <div className="text-[10px] text-slate-500">Real-time Rank Prediction</div>
                </div>
              </div>

              <div className="absolute -top-5 -right-5 z-20 p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl hidden sm:flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  New 2025/2026 Batches Open
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
