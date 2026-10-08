'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EXAMS_DATA, ACADEMIC_PROGRAMS_DATA } from '@/lib/data/mockData';
import { 
  GraduationCap, 
  ArrowRight, 
  Stethoscope, 
  Cpu, 
  Building2, 
  HeartPulse, 
  Activity, 
  BookOpen,
  Award
} from 'lucide-react';

export const GoalSelectionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'competitive' | 'academic'>('competitive');

  const getExamIcon = (shortCode: string) => {
    switch (shortCode) {
      case 'NEET':
        return <Stethoscope className="w-5 h-5 text-sky-500" />;
      case 'JEE':
        return <Cpu className="w-5 h-5 text-blue-500" />;
      case 'CUET':
        return <Building2 className="w-5 h-5 text-purple-500" />;
      case 'AIIMS-N':
        return <HeartPulse className="w-5 h-5 text-emerald-500" />;
      case 'AIIMS-P':
        return <Activity className="w-5 h-5 text-amber-500" />;
      default:
        return <GraduationCap className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="select-goal" className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-t border-b border-slate-200/70 dark:border-slate-800">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" /> Target Pathway
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Select Your Goal Exam
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
              Choose your target entrance exam or school board syllabus. Learndawn provides structured syllabus pacing, live interactive lectures, and dedicated 1:1 guidance.
            </p>
          </div>

          {/* Toggle Tab Filter */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 self-start md:self-auto text-xs font-semibold">
            <button
              onClick={() => setActiveTab('competitive')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'competitive'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Competitive Entrance ({EXAMS_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab('academic')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'academic'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Academic Programs ({ACADEMIC_PROGRAMS_DATA.length})
            </button>
          </div>
        </div>

        {/* Tab Content: Competitive Exams */}
        {activeTab === 'competitive' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {EXAMS_DATA.map((exam) => (
              <Link
                key={exam.id}
                href={`/exams/${exam.slug}`}
                className="group relative p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200/80 dark:border-slate-700/80 group-hover:scale-105 transition-transform">
                      {getExamIcon(exam.short_code)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                      {exam.badge_label}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {exam.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {exam.tagline}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-700/60 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Subjects</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">
                        {exam.subjects_count} Core Disciplines
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Mock Test Series</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">
                        {exam.mock_tests_count} CBT Tests
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                  <span>Explore Syllabus & Batches</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Tab Content: Academic Programs */}
        {activeTab === 'academic' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {ACADEMIC_PROGRAMS_DATA.map((prog) => (
              <Link
                key={prog.id}
                href={`/academics/${prog.slug}`}
                className="group relative p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200/80 dark:border-slate-700/80 group-hover:scale-105 transition-transform">
                      <BookOpen className="w-5 h-5 text-indigo-500" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {prog.board}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {prog.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400 pt-4 border-t border-slate-200/80 dark:border-slate-700/60">
                  <span>View Board Accelerator Plan</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
