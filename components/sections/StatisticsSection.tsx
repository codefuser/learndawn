import React from 'react';
import { Users, BookCheck, ShieldCheck, Trophy, Sparkles } from 'lucide-react';

export const StatisticsSection: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-red-500" />,
      value: '50,000+',
      label: 'Registered Aspirants',
      sublabel: 'Active Pan-India community across 28 states',
    },
    {
      icon: <BookCheck className="w-6 h-6 text-red-500" />,
      value: '2,500+',
      label: 'Verified Video Modules',
      sublabel: 'Structured NCERT and entrance aligned lectures',
    },
    {
      icon: <Trophy className="w-6 h-6 text-red-500" />,
      value: '98.4%',
      label: 'Syllabus Completion',
      sublabel: 'Measured across daily practice & revision milestones',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
      value: '100+',
      label: 'Senior Doctor & IIT Mentors',
      sublabel: 'Verified academic faculty & ranker counselors',
    },
  ];

  return (
    <section className="py-16 bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white border-y border-zinc-200 dark:border-zinc-900 relative overflow-hidden transition-colors">
      {/* Background glow elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span>Platform Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Learndawn by the Numbers
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2">
            Verified academic engagement and digital academy footprint.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800/80 shadow-sm hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/5 hover:-translate-y-1 transition-all duration-300 group text-center flex flex-col items-center justify-center"
            >
              <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 dark:text-white mb-1">
                {item.value}
              </div>
              <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{item.label}</div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 max-w-[200px] leading-tight">
                {item.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
