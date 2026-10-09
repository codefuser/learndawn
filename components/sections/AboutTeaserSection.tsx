import React from 'react';
import Link from 'next/link';
import { Compass, Lightbulb, Heart, Shield, ArrowRight } from 'lucide-react';

export const AboutTeaserSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900 transition-colors">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Vision & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider border border-zinc-200 dark:border-zinc-800">
              <Compass className="w-3.5 h-3.5 text-red-500" />
              <span>About Learndawn India</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight">
              A New Dawn in Digital Learning & Aspirant Empowerment
            </h2>

            <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 leading-relaxed font-semibold">
              LearnDawn India is a standalone digital education and mentorship institution focused on making competitive, academic, and career-oriented education more accessible and affordable.
            </p>

            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              LearnDawn combines teaching, mentorship, counselling, testing, study materials, and student support into one learning ecosystem rather than treating coaching as only classroom teaching.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800/80 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-950 dark:text-white">Our Mission</h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Democratize high-rank competitive preparation with uncompromising pedagogy.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800/80 flex items-start gap-3">
                <Heart className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-950 dark:text-white">Empathetic Mentorship</h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Continuous emotional resilience coaching to triumph over exam stress.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-400 transition"
              >
                <span>Read Our Complete Founding Story & Academic Charter</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Values Graphic */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-[#0c0c0f] text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-6 relative overflow-hidden transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-zinc-950 dark:text-white">The Learndawn Promise</h4>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">Institutional Commitments</span>
                </div>
              </div>

              <ul className="space-y-4 text-xs text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                  <span><strong className="text-zinc-950 dark:text-white">100% Syllabus Coverage:</strong> Complete adherence to officially prescribed NTA, CBSE, and AIIMS curricula without skipped topics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                  <span><strong className="text-zinc-950 dark:text-white">Verified Faculty Accountability:</strong> Live lectures conducted strictly by credentialed subject masters.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                  <span><strong className="text-zinc-950 dark:text-white">Student Data Privacy:</strong> Complete security compliance without data selling or unsolicited telemarketing calls.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                <span>Tamil Nadu | Andhra Pradesh</span>
                <span className="text-emerald-500 font-semibold">24/7 Online Student Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
