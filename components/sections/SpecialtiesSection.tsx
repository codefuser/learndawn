import React from 'react';
import { 
  Flame, 
  Video, 
  Target, 
  Compass, 
  HeartHandshake, 
  BookMarked, 
  Layers
} from 'lucide-react';

export const SpecialtiesSection: React.FC = () => {
  const specialties = [
    {
      icon: <Video className="w-6 h-6 text-red-500" />,
      title: 'Interactive Live Studio',
      description: 'Engage in two-way interactive live lectures with instant doubt clearance and real-time polling.',
      badge: 'Interactive',
    },
    {
      icon: <Target className="w-6 h-6 text-red-500" />,
      title: 'Simulated NTA CBT Tests',
      description: 'Experience accurate computer-based test engines with national percentile benchmarking.',
      badge: 'Assessment',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-red-500" />,
      title: '1:1 Doctor & IITian Mentorship',
      description: 'Personalized guidance from top rankers who have navigated and conquered India\'s toughest exams.',
      badge: 'Mentorship',
    },
    {
      icon: <BookMarked className="w-6 h-6 text-red-500" />,
      title: 'NCERT Line-by-Line Decoded',
      description: 'Every statement, diagram, and exemplar breakdown crafted for high-retention recall.',
      badge: 'Curriculum',
    },
    {
      icon: <Compass className="w-6 h-6 text-red-500" />,
      title: 'Holistic Career Counselling',
      description: 'Guidance beyond exams: Medical, Engineering, Paramedical, Nursing, and central universities.',
      badge: 'Guidance',
    },
    {
      icon: <Layers className="w-6 h-6 text-red-500" />,
      title: 'Curated Question Vault',
      description: 'Over 20,000+ chapter-wise questions with step-by-step video & text explanations.',
      badge: 'Practice',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-zinc-50 dark:bg-[#070709] border-b border-zinc-200 dark:border-zinc-900 transition-colors">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider mb-3 border border-zinc-200 dark:border-zinc-800">
            <Flame className="w-3.5 h-3.5 text-red-500" />
            <span>The Learndawn Edge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Specialties of Learndawn
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
            Engineered from ground up to deliver true conceptual clarity, continuous accountability, and high-rank outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800/80 shadow-sm hover:shadow-2xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-red-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
