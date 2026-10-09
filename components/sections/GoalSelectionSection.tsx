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
        return <Stethoscope className="w-5 h-5 text-red-500" />;
      case 'JEE':
        return <Cpu className="w-5 h-5 text-red-500" />;
      case 'CUET':
        return <Building2 className="w-5 h-5 text-red-500" />;
      case 'AIIMS-N':
        return <HeartPulse className="w-5 h-5 text-red-500" />;
      case 'AIIMS-P':
        return <Activity className="w-5 h-5 text-red-500" />;
      default:
        return <GraduationCap className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section id="select-goal" className="py-16 sm:py-20 bg-white dark:bg-black border-t border-b border-zinc-200 dark:border-zinc-900 transition-colors">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider mb-2 border border-zinc-200 dark:border-zinc-800">
              <Award className="w-3.5 h-3.5 text-red-500" /> Target Pathway
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Select Your Goal Exam
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-xl">
              Choose your target entrance exam or school board syllabus. Learndawn provides structured syllabus pacing, live interactive lectures, and dedicated 1:1 guidance.
            </p>
          </div>

          {/* Toggle Tab Filter */}
          <div className="inline-flex p-1 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 self-start md:self-auto text-xs font-semibold">
            <button
              onClick={() => setActiveTab('competitive')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'competitive'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-sm font-bold'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              Competitive Entrance ({EXAMS_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab('academic')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'academic'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-sm font-bold'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
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
                className="group relative p-6 rounded-3xl bg-zinc-50 dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800/80 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800 group-hover:scale-105 transition-transform">
                      {getExamIcon(exam.short_code)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
                      {exam.badge_label}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-red-500 transition-colors">
                    {exam.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {exam.tagline}
                  </p>

                  <div className="mt-5 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-zinc-400 dark:text-zinc-500 block text-[11px]">Subjects</span>
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                        {exam.subjects_count} Core Disciplines
                      </span>
                    </div>
                    <div>
                      <span className="text-zinc-400 dark:text-zinc-500 block text-[11px]">Mock Test Series</span>
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                        {exam.mock_tests_count} CBT Tests
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-xs font-semibold text-red-500 group-hover:text-red-400">
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
                className="group relative p-6 rounded-3xl bg-zinc-50 dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800/80 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800 group-hover:scale-105 transition-transform">
                      <BookOpen className="w-5 h-5 text-red-500" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
                      {prog.board}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-red-500 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {prog.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between text-xs font-semibold text-red-500 group-hover:text-red-400 pt-4 border-t border-zinc-200 dark:border-zinc-800/80">
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
