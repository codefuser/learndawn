import React from 'react';
import { 
  Flame, 
  Video, 
  Target, 
  Compass, 
  HeartHandshake, 
  BookMarked, 
  Layers, 
  Award 
} from 'lucide-react';

export const SpecialtiesSection: React.FC = () => {
  const specialties = [
    {
      icon: <Video className="w-6 h-6 text-blue-500" />,
      title: 'Interactive Live Studio',
      description: 'Engage in two-way interactive live lectures with instant doubt clearance and real-time polling.',
      badge: 'Interactive',
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-500" />,
      title: 'Simulated NTA CBT Tests',
      description: 'Experience accurate computer-based test engines with national percentile benchmarking.',
      badge: 'Assessment',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-amber-500" />,
      title: '1:1 Doctor & IITian Mentorship',
      description: 'Personalized guidance from top rankers who have navigated and conquered India\'s toughest exams.',
      badge: 'Mentorship',
    },
    {
      icon: <BookMarked className="w-6 h-6 text-purple-500" />,
      title: 'NCERT Line-by-Line Decoded',
      description: 'Every statement, diagram, and exemplar breakdown crafted for high-retention recall.',
      badge: 'Curriculum',
    },
    {
      icon: <Compass className="w-6 h-6 text-rose-500" />,
      title: 'Holistic Career Counselling',
      description: 'Guidance beyond exams: Medical, Engineering, Paramedical, Nursing, and central universities.',
      badge: 'Guidance',
    },
    {
      icon: <Layers className="w-6 h-6 text-sky-500" />,
      title: 'Curated Question Vault',
      description: 'Over 20,000+ chapter-wise questions with step-by-step video & text explanations.',
      badge: 'Practice',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>The Learndawn Edge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Specialties of Learndawn
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Engineered from ground up to deliver true conceptual clarity, continuous accountability, and high-rank outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
