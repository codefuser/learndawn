import React from 'react';
import { Check, X, Shield, Award, Sparkles } from 'lucide-react';

export const WhyLearndawnSection: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'Faculty Pedigree',
      learndawn: 'AIIMS Doctors, IITian Engineers & Senior Board Experts with proven selection records',
      others: 'Generic tutors or pre-recorded lecture recyclers',
    },
    {
      feature: 'Mentorship Access',
      learndawn: 'Dedicated 1:1 strategy & mental wellness calls scheduled on demand',
      others: 'Automated chatbots or delayed ticket queues',
    },
    {
      feature: 'Curriculum Depth',
      learndawn: 'NCERT line-by-line decoding with integrated exemplar and previous 15-year question links',
      others: 'Superficial slides with overwhelming text',
    },
    {
      feature: 'Assessment Realism',
      learndawn: 'Simulated NTA & AIIMS CBT test interface with real difficulty percentile calibration',
      others: 'Inflated mock scores designed to generate false confidence',
    },
    {
      feature: 'Student Experience',
      learndawn: 'Distraction-free learning interface with zero popups, zero spam, and focused micro-modules',
      others: 'Cluttered feeds overloaded with marketing banners and promotional notifications',
    },
    {
      feature: 'Pricing & Transparency',
      learndawn: 'Transparent, affordable annual access without predatory loans or hidden locking fees',
      others: 'High-cost multi-year EMIs with rigid lock-ins',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-950/70 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest Evaluation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Aspirants Choose Learndawn
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            A student-first approach designed for genuine rank outcomes and conceptual mastery.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6 text-slate-500">Core Feature</th>
                  <th className="py-4 px-6 text-blue-600 dark:text-blue-400 bg-blue-50/60 dark:bg-blue-950/40 w-1/2">
                    <div className="flex items-center gap-1.5">
                      <Shield className="w-4 h-4" /> Learndawn Academy
                    </div>
                  </th>
                  <th className="py-4 px-6 text-slate-400">Traditional EdTech</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                    <td className="py-4 px-6 font-semibold text-slate-800 dark:text-slate-200">
                      {item.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-900 dark:text-white bg-blue-50/30 dark:bg-blue-950/20 font-medium">
                      <div className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item.learndawn}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500 dark:text-slate-400">
                      <div className="flex items-start gap-2.5">
                        <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{item.others}</span>
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
