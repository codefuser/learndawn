import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export const WelcomeSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-blue-50/50 via-white to-slate-50/40 dark:from-blue-950/20 dark:via-black dark:to-[#07070a] border-b border-slate-200/80 dark:border-zinc-800/80 transition-colors">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            <span>HEARTILY WELCOME</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-tight">
            WELCOME TO LEARNDAWN INDIA
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed max-w-3xl mx-auto">
            <p className="font-semibold text-slate-900 dark:text-white text-base sm:text-lg">
              LearnDawn India is a standalone online digital institution providing affordable, competitive and academic education, along with counselling and mentorship.
            </p>
            <p>
              For the past three years, LearnDawn has focused on making quality education accessible while guiding students with the right direction, support and opportunities to move confidently towards their goals.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
              Our mission is to make structured learning, academic guidance, mentorship and educational opportunities more accessible to students. The institution brings together personalised mentorship, collaborative learning, assessments, study materials, academic support and career guidance in one learning ecosystem.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/about"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition flex items-center gap-2 cursor-pointer"
            >
              <span>Explore LearnDawn Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/learning-system"
              className="px-5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800 font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 cursor-pointer"
            >
              <span>Learning Systems</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
