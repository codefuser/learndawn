import React from 'react';
import { 
  Users, 
  ShoppingBag, 
  GraduationCap, 
  Layers, 
  BookOpen, 
  UserCheck, 
  Globe, 
  CheckCircle2, 
  Sparkles,
  Award
} from 'lucide-react';

export const StatisticsSection: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-5 h-5 text-blue-500" />,
      value: '700+',
      label: 'Students',
      sublabel: 'Enrolled learners across active academic programs',
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-emerald-500" />,
      value: '3591+',
      label: 'Materials Buyers',
      sublabel: 'Aspirants utilizing verified study resources',
    },
    {
      icon: <Award className="w-5 h-5 text-purple-500" />,
      value: '8+',
      label: 'Competitive Examinations',
      sublabel: 'NEET UG, JEE Main, CUET, AIIMS, Paramedical & more',
    },
    {
      icon: <Layers className="w-5 h-5 text-amber-500" />,
      value: '16+',
      label: 'Batches',
      sublabel: 'Structured cohorts for Freshers, Repeaters & Droppers',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-red-500" />,
      value: '14',
      label: 'Faculties',
      sublabel: 'Subject educators across Physics, Chem, Bio & Math',
    },
    {
      icon: <UserCheck className="w-5 h-5 text-indigo-500" />,
      value: '17',
      label: 'Mentors',
      sublabel: 'Dedicated personal guides for accountability',
    },
    {
      icon: <Globe className="w-5 h-5 text-sky-500" />,
      value: '4',
      label: 'Languages',
      sublabel: 'Multilingual academic support & concept delivery',
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-teal-500" />,
      value: 'ISBN Verified',
      label: 'Publication Standard',
      sublabel: 'Standardized and verified educational publications',
      isBadge: true,
    },
    {
      icon: <Sparkles className="w-5 h-5 text-rose-500" />,
      value: 'ONE Pod Learning',
      label: 'Learning Model',
      sublabel: 'Personalised mentorship-based learning framework',
      isBadge: true,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-zinc-50 dark:bg-[#07070a] text-zinc-900 dark:text-white border-y border-zinc-200 dark:border-zinc-800/80 relative overflow-hidden transition-colors">
      {/* Background glow elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/[0.04] dark:bg-red-600/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/[0.04] dark:bg-blue-600/[0.08] rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-zinc-200 dark:border-zinc-800 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>Institutional Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            LearnDawn by the Numbers
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2">
            Client-provided institutional records across education, mentorship, and publications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800/80 shadow-xs hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/5 hover:-translate-y-1 transition-all duration-300 group flex items-start gap-4"
            >
              <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className={`font-black tracking-tight text-zinc-950 dark:text-white mb-0.5 ${
                  item.isBadge ? 'text-xl sm:text-2xl text-blue-600 dark:text-blue-400' : 'text-2xl sm:text-3xl'
                }`}>
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 truncate">
                  {item.label}
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug">
                  {item.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

