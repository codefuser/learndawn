'use client';

import React from 'react';
import { Check, X, Shield, Sparkles, GraduationCap, Users, BookOpen, Target, HeartHandshake, IndianRupee } from 'lucide-react';

export const WhyLearndawnSection: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'Faculty Pedigree',
      icon: <GraduationCap className="w-4 h-4 text-red-500" />,
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
      icon: <Target className="w-4 h-4 text-red-500" />,
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
      icon: <IndianRupee className="w-4 h-4 text-red-500" />,
      learndawn: 'Transparent, affordable annual access without predatory loans or hidden locking fees',
      others: 'High-cost multi-year EMIs with rigid debt lock-ins',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900 transition-colors">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider mb-3 border border-zinc-200 dark:border-zinc-800">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span>Honest Evaluation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Why Aspirants Choose Learndawn
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
            A student-first approach designed for genuine rank outcomes and deep conceptual mastery.
          </p>
        </div>

        {/* MOBILE VIEW (Screens < 768px) */}
        <div className="block md:hidden space-y-4">
          {comparisonItems.map((item, idx) => (
            <div 
              key={idx}
              className="bg-zinc-50 dark:bg-[#0c0c0f] rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 shadow-sm space-y-3"
            >
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                <div className="p-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-zinc-950 dark:text-white">
                  {item.feature}
                </h3>
              </div>

              {/* Learndawn Side */}
              <div className="rounded-xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-750 p-3 space-y-1">
                <div className="flex items-center gap-1.5 text-red-500 font-semibold text-xs">
                  <div className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Learndawn Advantage</span>
                </div>
                <p className="text-xs leading-relaxed text-zinc-800 dark:text-zinc-200 font-medium pl-5">
                  {item.learndawn}
                </p>
              </div>

              {/* Traditional EdTech Side */}
              <div className="rounded-xl bg-zinc-100/60 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-850 p-3 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 font-semibold text-xs">
                  <div className="w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-500 flex items-center justify-center">
                    <X className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Traditional EdTech</span>
                </div>
                <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 pl-5">
                  {item.others}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP & TABLET VIEW (Screens >= 768px): Polished comparison table */}
        <div className="hidden md:block rounded-3xl bg-zinc-50 dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6 text-zinc-500 dark:text-zinc-400 w-1/4">Core Metric</th>
                  <th className="py-4 px-6 text-zinc-950 dark:text-white bg-white dark:bg-zinc-850 w-5/12 border-x border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-red-500" /> 
                      <span>Learndawn Academy</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-zinc-400 dark:text-zinc-500 w-1/3">
                    Traditional Coaching Platforms
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-850 text-xs sm:text-sm">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-zinc-100/60 dark:hover:bg-zinc-900/40 transition">
                    <td className="py-4 px-6 font-semibold text-zinc-800 dark:text-zinc-200">
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.feature}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-zinc-950 dark:text-white bg-white/60 dark:bg-zinc-900/60 font-medium border-x border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 mt-0.5 border border-red-500/20">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{item.learndawn}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-zinc-500 dark:text-zinc-400">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-400 flex items-center justify-center shrink-0 mt-0.5">
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
