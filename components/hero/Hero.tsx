'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Stethoscope, 
  Cpu, 
  Award, 
  BookOpen, 
  ChevronDown, 
  Search 
} from 'lucide-react';
import { useSearch } from '@/components/search/SearchContext';
import { HeroSlider } from './HeroSlider';

export const Hero: React.FC = () => {
  const { openSearch } = useSearch();

  return (
    <section className="relative overflow-hidden w-full flex flex-col justify-between bg-[#050505] text-zinc-100 transition-colors">
      
      {/* Precision Ambient Red Glow */}
      <div 
        className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[450px] bg-red-600/[0.08] blur-[160px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-0 w-[550px] h-[450px] bg-red-500/[0.05] blur-[150px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Top Header Utility Row: Accreditation Badge & Integrated Search Bar */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-20 pt-4 sm:pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-zinc-900/60">
          
          {/* Accreditation Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-200 text-xs font-semibold shadow-sm self-start max-w-full">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Digital Learning Academy of India • Synchronized CBT Ecosystem</span>
          </div>

          {/* Quick Search Trigger */}
          <button
            type="button"
            onClick={openSearch}
            className="group flex items-center justify-between gap-3 px-4 py-2 sm:py-2.5 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-red-500/50 shadow-sm text-zinc-300 hover:text-white transition-all cursor-pointer w-full sm:w-auto sm:min-w-[320px] md:min-w-[360px] backdrop-blur-md"
            aria-label="Open search engine"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-zinc-800 text-red-500 group-hover:scale-105 transition-transform">
                <Search className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-200 transition">
                Search exams, courses, notes...
              </span>
            </div>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-400 group-hover:text-red-400 transition">
              Ctrl+K
            </kbd>
          </button>
        </div>
      </div>

      {/* Main Four-Slide Cinematic Automatic Hero Carousel */}
      <div className="w-full relative z-10 flex-1 flex flex-col justify-center">
        <HeroSlider />
      </div>

      {/* Integrated Bottom Pathway Ribbon */}
      <div className="w-full border-t border-zinc-900 bg-black/80 backdrop-blur-md py-3 px-5 sm:px-8 lg:px-12 xl:px-16 relative z-20">
        <div className="max-w-[1536px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex flex-wrap items-center gap-2 font-medium">
            <span className="text-zinc-200 font-semibold">Active Pathways:</span>
            <div className="flex flex-wrap items-center gap-1.5">
              <Link 
                href="/exams/neet-ug" 
                className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-500/50 text-zinc-300 hover:text-white transition flex items-center gap-1 shadow-sm"
              >
                <Stethoscope className="w-3 h-3 text-red-500" /> NEET UG
              </Link>
              <Link 
                href="/exams/jee-main" 
                className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-500/50 text-zinc-300 hover:text-white transition flex items-center gap-1 shadow-sm"
              >
                <Cpu className="w-3 h-3 text-red-500" /> JEE Main
              </Link>
              <Link 
                href="/exams/cuet" 
                className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-500/50 text-zinc-300 hover:text-white transition flex items-center gap-1 shadow-sm"
              >
                <Award className="w-3 h-3 text-red-500" /> CUET (UG)
              </Link>
              <Link 
                href="/academics" 
                className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-500/50 text-zinc-300 hover:text-white transition flex items-center gap-1 shadow-sm"
              >
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
