import React from 'react';
import Link from 'next/link';
import { 
  Compass, 
  BookOpen, 
  Layers, 
  Target, 
  BarChart3, 
  HeartHandshake, 
  Briefcase, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const LearningEcosystemSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: <Compass className="w-5 h-5 text-blue-500" />,
      title: 'Goal Discovery',
      description: 'Pinpoint target competitive exam (NEET, JEE, CUET, AIIMS) or academic board with diagnostic baseline.',
      href: '/exams',
    },
    {
      num: '02',
      icon: <BookOpen className="w-5 h-5 text-indigo-500" />,
      title: 'Interactive Studio',
      description: 'Live interactive classrooms, curated NCERT notes, and high-definition concept lectures.',
      href: '/learning-system',
    },
    {
      num: '03',
      icon: <Layers className="w-5 h-5 text-emerald-500" />,
      title: 'Daily Practice Vault',
      description: 'Over 20,000+ chapter-wise questions with instant step-by-step video & text solutions.',
      href: '/resources#question-bank',
    },
    {
      num: '04',
      icon: <Target className="w-5 h-5 text-amber-500" />,
      title: 'Simulated CBT Tests',
      description: 'Real-time test environment mirroring official NTA & AIIMS interfaces and scoring schemas.',
      href: '/learning-system#tests',
    },
    {
      num: '05',
      icon: <BarChart3 className="w-5 h-5 text-purple-500" />,
      title: 'Cognitive Analytics',
      description: 'Pinpoint weak topics, time-allocation flaws, and accuracy patterns with intelligent insights.',
      href: '/dashboard/student',
    },
    {
      num: '06',
      icon: <HeartHandshake className="w-5 h-5 text-rose-500" />,
      title: '1:1 Ranker Mentorship',
      description: 'Direct 1:1 strategy calls with AIIMS doctors and IITians to optimize revisions and overcome anxiety.',
      href: '/mentorship',
    },
    {
      num: '07',
      icon: <Briefcase className="w-5 h-5 text-sky-500" />,
      title: 'Career & College Pathway',
      description: 'End-to-end guidance through counseling rounds, branch selection, and professional career mapping.',
      href: '/mentorship#career',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Structured Pedagogy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Learndawn Learning Ecosystem
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            A cohesive cycle engineered to take students from foundational comprehension to rank-producing mastery.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {steps.map((step) => (
            <Link
              key={step.num}
              href={step.href}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black text-slate-400 tracking-wider font-mono">
                    PHASE {step.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                <span>Explore Phase</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
