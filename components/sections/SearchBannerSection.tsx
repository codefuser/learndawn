'use client';

import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import { GlobalSearchModal } from '@/components/search/GlobalSearchModal';

export const SearchBannerSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accent wave */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-slate-950 pointer-events-none" />
      <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-3 border border-blue-500/30">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Universal Knowledge Discovery</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          What would you like to master today?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-2">
          Search across 100+ chapters, verified educators, mock tests, revision notes, and video modules.
        </p>

        {/* Big Search Input Trigger */}
        <div className="mt-6 max-w-2xl mx-auto">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md shadow-2xl transition group text-left cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-slate-300">
                Search exams, subjects, formulas or courses...
              </span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="hidden sm:inline-block px-2 py-1 text-xs rounded bg-white/10 text-slate-300 border border-white/15">
                Ctrl + K
              </kbd>
              <div className="p-1.5 rounded-lg bg-blue-600 text-white group-hover:bg-blue-500 transition">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
          <span>Popular searches:</span>
          {['NEET 2025 PYQ', 'Organic Chemistry', 'AIIMS Nursing Mock', 'Physics Mechanics', 'CUET Syllabus'].map((tag) => (
            <button
              key={tag}
              onClick={() => setModalOpen(true)}
              className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition"
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
