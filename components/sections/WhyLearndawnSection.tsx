'use client';

import React from 'react';
import { Check, X, Shield, Sparkles, GraduationCap, Users, BookOpen, Target, HeartHandshake, IndianRupee } from 'lucide-react';

export const WhyLearndawnSection: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'Faculty Pedigree',
      icon: <GraduationCap className="w-4 h-4 text-amber-500" />,
      learndawn: 'AIIMS Doctors, IITian Engineers & Senior Board Experts with proven selection records',
      others: 'Generic tutors or pre-recorded lecture recyclers',
    },
    {
      feature: 'Mentorship Access',
      icon: <Users className="w-4 h-4 text-red-500" />,
      learndawn: 'Dedicated 1:1 strategy & mental wellness calls scheduled on demand with real mentors',
      others: 'Automated chatbots or delayed generic ticket queues',
    },
    {
      feature: 'Curriculum Depth',
      icon: <BookOpen className="w-4 h-4 text-red-500" />,
      learndawn: 'NCERT line-by-line decoding with integrated exemplar and previous 15-year question links',
      others: 'Superficial slides with overwhelming text and shallow derivations',
    },
    {
      feature: 'Assessment Realism',
      icon: <Target className="w-4 h-4 text-rose-500" />,
      learndawn: 'Simulated NTA & AIIMS CBT test interface with real difficulty percentile calibration',
      others: 'Inflated mock scores designed to generate false confidence',
    },
    {
      feature: 'Student Experience',
      icon: <HeartHandshake className="w-4 h-4 text-red-500" />,
      learndawn: 'Distraction-free learning interface with zero popups, zero spam, and focused micro-modules',
      others: 'Cluttered feeds overloaded with marketing banners and promotional sales calls',
    },
    {
      feature: 'Pricing & Transparency',
      icon: <IndianRupee className="w-4 h-4 text-cyan-500" />,
      learndawn: 'Transparent, affordable annual access without predatory loans or hidden locking fees',
      others: 'High-cost multi-year EMIs with rigid debt lock-ins',
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-slate-50/50 dark:bg-slate-950/70 border-b border-slate-200/80 dark:border-slate-800">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest Evaluation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Aspirants Choose Learndawn
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
            A student-first approach designed for genuine rank outcomes and deep conceptual mastery.
          </p>
        </div>

        {/* MOBILE VIEW (Screens < 768px): Card-based responsive comparison */}
        <div className="block md:hidden space-y-4">
          {comparisonItems.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-4 shadow-sm space-y-3"
            >
              {/* Feature Title */}
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {item.feature}
                </h3>
              </div>

              {/* Learndawn Side (Highlighted Card) */}
              <div className="rounded-xl bg-gradient-to-r from-red-50/90 to-red-50/70 dark:from-red-950/40 dark:to-red-950/30 border border-red-200/80 dark:border-red-800/60 p-3 space-y-1">
                <div className="flex items-center gap-1.5 text-red-700 dark:text-red-300 font-semibold text-xs">
                  <div className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Learndawn Advantage</span>
                </div>
                <p className="text-xs leading-relaxed text-slate-800 dark:text-slate-200 font-medium pl-5">
                  {item.learndawn}
                </p>
              </div>

              {/* Traditional EdTech Side */}
              <div className="rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/60 dark:border-slate-800/60 p-3 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-semibold text-xs">
                  <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800 text-rose-500 flex items-center justify-center">
                    <X className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Traditional EdTech</span>
                </div>
                <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 pl-5">
                  {item.others}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP & TABLET VIEW (Screens >= 768px): Polished comparison table */}
        <div className="hidden md:block rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6 text-slate-500 w-1/4">Core Metric</th>
                  <th className="py-4 px-6 text-red-600 dark:text-red-400 bg-red-50/70 dark:bg-red-950/50 w-5/12 border-x border-red-100 dark:border-red-900/40">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" /> 
                      <span>Learndawn Academy</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-slate-400 w-1/3">
                    Traditional Coaching Platforms
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 font-semibold text-slate-800 dark:text-slate-200">
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.feature}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-900 dark:text-white bg-red-50/30 dark:bg-red-950/20 font-medium border-x border-red-100/60 dark:border-red-900/30">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-950/80 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{item.learndawn}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500 dark:text-slate-400">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{item.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
