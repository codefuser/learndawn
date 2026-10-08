'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { STUDY_MATERIALS_DATA, QUESTIONS_DATA } from '@/lib/data/mockData';
import { useAuth } from '@/lib/auth/context';
import { PracticeEngine } from '@/components/practice/PracticeEngine';
import { 
  FileText, 
  Sparkles, 
  Download, 
  BookOpen, 
  Layers, 
  Award, 
  CheckCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'materials' | 'practice' | 'revision'>('all');
  const { openAuthModal } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1 pb-20">
        <section className="py-14 sm:py-20 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Free & Premium Learning Assets</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Resources & Dawn Mastery Vault
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Access high-yield revision flashcards, NCERT line-by-line mind maps, solved 10-year question compendiums, and diagnostic practice questions.
            </p>

            {/* Filter categories */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
              {[
                { id: 'all', label: 'All Resources' },
                { id: 'materials', label: 'Study Materials & Handbooks' },
                { id: 'practice', label: 'Interactive Question Bank' },
                { id: 'revision', label: 'Revision Roadmaps' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as typeof activeCategory)}
                  className={`px-4 py-2 rounded-xl transition ${
                    activeCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-12 space-y-16">
          {/* Section: Study Materials */}
          {(activeCategory === 'all' || activeCategory === 'materials') && (
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Study Materials & Notes
                  </h2>
                  <p className="text-xs text-slate-500">
                    High-yield summaries and formulas for rapid last-month revision.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {STUDY_MATERIALS_DATA.map((mat) => (
                  <div
                    key={mat.id}
                    className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-purple-500/40 transition group"
                  >
                    <div className="space-y-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
                        {mat.material_type.replace('_', ' ')}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                        {mat.title}
                      </h3>
                      <div className="text-xs text-slate-500 space-y-1">
                        <div>Subject: <strong>{mat.subject_name}</strong></div>
                        <div>Pages: <strong>{mat.page_count}</strong> • Size: <strong>{mat.file_size}</strong></div>
                        <div className="text-emerald-600 font-semibold">{mat.download_count.toLocaleString()} Downloads</div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                      <Link
                        href={`/resources/${mat.slug}`}
                        className="w-full py-2 rounded-xl text-center block text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Read Overview
                      </Link>
                      <button
                        onClick={() => openAuthModal(`/resources/${mat.slug}`)}
                        className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Question Bank / Practice Module */}
          {(activeCategory === 'all' || activeCategory === 'practice') && (
            <section id="question-bank" className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Interactive Question Bank
                </h2>
                <p className="text-xs text-slate-500">
                  Select and practice actual previous-year entrance questions with instant validation.
                </p>
              </div>

              <PracticeEngine
                initialQuestions={QUESTIONS_DATA}
                title="Universal High-Yield Question Bank"
              />
            </section>
          )}

          {/* Section: Dawn Mastery Program */}
          {(activeCategory === 'all' || activeCategory === 'revision') && (
            <section id="revision" className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white shadow-xl space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Flagship Revision
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Dawn Mastery: 60-Day Final Sprint
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                The structured revision protocol used by over 500+ top rankers. Daily chapter checklists, morning formula recall drills, and evening timed 45-minute sprint tests.
              </p>
              <div className="pt-2">
                <Link
                  href="/auth/sign-up"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg transition"
                >
                  <span>Join Dawn Mastery Sprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
