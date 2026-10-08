import React from 'react';
import Link from 'next/link';
import { Compass, Lightbulb, Heart, Shield, ArrowRight } from 'lucide-react';

export const AboutTeaserSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Vision & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-blue-500" />
              <span>About Learndawn India</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              A New Dawn in Digital Learning & Aspirant Empowerment
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Learndawn was founded with an unyielding conviction: every Indian student, regardless of geographic location or economic background, deserves access to top-tier medical and engineering guidance without compromise.
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We reject predatory EdTech models that treat education as transactional commerce. Instead, we cultivate an authentic digital academy grounded in scientific pedagogy, active recall, empathetic faculty mentorship, and transparent evaluation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Our Mission</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Democratize high-rank competitive preparation with uncompromising pedagogy.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-3">
                <Heart className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Empathetic Mentorship</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Continuous emotional resilience coaching to triumph over exam stress.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition"
              >
                <span>Read Our Complete Founding Story & Academic Charter</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Values Graphic */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50/90 via-indigo-50/70 to-slate-100/90 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-950 text-slate-900 dark:text-white border border-blue-200/70 dark:border-slate-800 shadow-xl space-y-6 relative overflow-hidden transition-colors">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">The Learndawn Promise</h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Institutional Commitments</span>
                </div>
              </div>

              <ul className="space-y-4 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 shrink-0 mt-1.5" />
                  <span><strong className="text-slate-900 dark:text-white">100% Syllabus Coverage:</strong> Complete adherence to officially prescribed NTA, CBSE, and AIIMS curricula without skipped topics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 shrink-0 mt-1.5" />
                  <span><strong className="text-slate-900 dark:text-white">Verified Faculty Accountability:</strong> Live lectures conducted strictly by credentialed subject masters.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 shrink-0 mt-1.5" />
                  <span><strong className="text-slate-900 dark:text-white">Student Data Privacy:</strong> Complete security compliance without data selling or unsolicited telemarketing calls.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Pan-India Digital Academy</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">ISO 9001 Certified Pedagogy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
