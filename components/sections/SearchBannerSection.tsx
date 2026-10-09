'use client';

import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import { GlobalSearchModal } from '@/components/search/GlobalSearchModal';

export const SearchBannerSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-14 bg-zinc-50 dark:bg-[#070709] text-zinc-900 dark:text-white border-y border-zinc-200 dark:border-zinc-900 relative overflow-hidden transition-colors">
      {/* Delicate ambient red aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-red-600/[0.05] blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-semibold mb-3 border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-red-500" />
          <span>Universal Knowledge Discovery</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          What would you like to master today?
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto mt-2">
          Search across 100+ chapters, verified educators, mock tests, revision notes, and video modules.
        </p>

        {/* Big Search Input Trigger */}
        <div className="mt-6 max-w-2xl mx-auto">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-zinc-900/90 hover:bg-zinc-100/80 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/40 dark:hover:border-red-500/40 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-2xl transition-all group text-left cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-zinc-400 dark:text-zinc-400">
                Search exams, subjects, formulas or courses...
              </span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="hidden sm:inline-block px-2 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 font-mono">
                Ctrl + K
              </kbd>
              <div className="p-1.5 rounded-lg bg-red-600 text-white group-hover:bg-red-500 transition">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <span>Popular searches:</span>
          {['NEET 2025 PYQ', 'Organic Chemistry', 'AIIMS Nursing Mock', 'Physics Mechanics', 'CUET Syllabus'].map((tag) => (
            <button
              key={tag}
              onClick={() => setModalOpen(true)}
              className="px-2.5 py-1 rounded-full bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/40 shadow-sm transition cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <GlobalSearchModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};
