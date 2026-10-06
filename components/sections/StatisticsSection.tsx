import React from 'react';
import { Users, BookCheck, ShieldCheck, Trophy, Sparkles } from 'lucide-react';

export const StatisticsSection: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      value: '50,000+',
      label: 'Registered Aspirants',
      sublabel: 'Active Pan-India community across 28 states',
    },
    {
      icon: <BookCheck className="w-6 h-6 text-emerald-500" />,
      value: '2,500+',
      label: 'Verified Video Modules',
      sublabel: 'Structured NCERT and entrance aligned lectures',
    },
    {
      icon: <Trophy className="w-6 h-6 text-amber-500" />,
      value: '98.4%',
      label: 'Syllabus Completion',
      sublabel: 'Measured across daily practice & revision milestones',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
      value: '100+',
      label: 'Senior Doctor & IIT Mentors',
      sublabel: 'Verified academic faculty & ranker counselors',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2 border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Platform Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Learndawn by the Numbers
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Verified academic engagement and digital academy footprint.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group text-center flex flex-col items-center justify-center"
            >
              <div className="p-3 rounded-2xl bg-white/10 text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-1">
                {item.value}
              </div>
              <div className="text-sm font-bold text-slate-200">{item.label}</div>
              <div className="text-[11px] text-slate-400 mt-1 max-w-[200px] leading-tight">
                {item.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
