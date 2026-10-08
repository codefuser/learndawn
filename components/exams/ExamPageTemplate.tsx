'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Exam, Subject, Course, StudyMaterial, Question } from '@/types';
import { useAuth } from '@/lib/auth/context';
import { PracticeEngine } from '@/components/practice/PracticeEngine';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  Layers, 
  Target, 
  FileText, 
  HeartHandshake, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  Video,
  Download,
  Sparkles
} from 'lucide-react';

interface ExamPageTemplateProps {
  exam: Exam;
  subjects: Subject[];
  courses: Course[];
  materials: StudyMaterial[];
  sampleQuestions: Question[];
}

export const ExamPageTemplate: React.FC<ExamPageTemplateProps> = ({
  exam,
  subjects,
  courses,
  materials,
  sampleQuestions,
}) => {
  const [activeSection, setActiveSection] = useState<'overview' | 'courses' | 'subjects' | 'practice' | 'materials' | 'faqs'>('overview');
  const { openAuthModal } = useAuth();

  const faqs = [
    {
      q: `What is the eligibility criteria for ${exam.title}?`,
      a: exam.eligibility,
    },
    {
      q: `What is the exam structure & marking pattern?`,
      a: exam.exam_pattern,
    },
    {
      q: `How does Learndawn help in cracking ${exam.title}?`,
      a: 'We provide structured chapter milestones, NCERT line-by-line decoding, full simulated NTA CBT mock tests, and 1:1 strategy calls with top rankers.',
    },
    {
      q: `Are live classes recorded for revision?`,
      a: 'Yes, every live interactive lecture is processed within 60 minutes and made available in high-definition video archives with chapter bookmarks and lecture PDFs.',
    },
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner for this specific Exam */}
      <section className="relative overflow-hidden pt-12 pb-16 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 text-white">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
            <Link href="/" className="text-slate-400 hover:text-white transition">Home</Link>
            <span className="text-slate-600">/</span>
            <Link href="/exams" className="text-slate-400 hover:text-white transition">Exams</Link>
            <span className="text-slate-600">/</span>
            <span className="text-blue-400 font-semibold">{exam.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-400 border border-white/15">
                <Sparkles className="w-3.5 h-3.5" />
                {exam.badge_label}
              </span>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                {exam.title} Comprehensive Academy
              </h1>
              <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
                {exam.tagline}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{exam.subjects_count} Disciplines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{exam.mock_tests_count} CBT Mock Tests</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{exam.students_enrolled} Active Learners</span>
                </div>
              </div>
            </div>

            {/* Quick Enrollment Card */}
            <div className="lg:col-span-4 p-6 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md space-y-4">
              <h3 className="text-base font-bold text-white">Join 2025/2026 Batch</h3>
              <p className="text-xs text-slate-300">
                Unlock complete video archives, live daily classes, test series, and 1:1 doctor/engineer mentorship.
              </p>
              <button
                onClick={() => openAuthModal(`/exams/${exam.slug}`)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xs shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enroll in {exam.short_code} Target Batch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Sub-bar */}
      <div className="sticky top-[60px] z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center gap-2 overflow-x-auto py-2.5 text-xs font-semibold">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'courses', label: 'Batches & Courses' },
            { id: 'subjects', label: 'Subjects & Syllabus' },
            { id: 'practice', label: 'Interactive Practice' },
            { id: 'materials', label: 'Study Materials' },
            { id: 'faqs', label: 'Eligibility & FAQs' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as typeof activeSection)}
              className={`px-4 py-2 rounded-xl transition whitespace-nowrap ${
                activeSection === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-12">
        {/* SECTION: Overview */}
        {activeSection === 'overview' && (
          <div className="space-y-8 animate-in fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  <span>Exam Architecture & Syllabus</span>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exam.description}
                </p>
                <div className="pt-2 p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300 space-y-2">
                  <div className="font-bold text-slate-900 dark:text-white">Pattern & Scoring:</div>
                  <p>{exam.exam_pattern}</p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-500" />
                  <span>Eligibility & Criteria</span>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exam.eligibility}
                </p>
                <div className="pt-2 p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300 space-y-2">
                  <div className="font-bold text-slate-900 dark:text-white">Syllabus Scope:</div>
                  <p>{exam.syllabus_summary}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION: Courses */}
        {(activeSection === 'courses' || activeSection === 'overview') && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Target Batches for {exam.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Comprehensive live courses with complete syllabus coverage and test series.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                      {course.difficulty_level}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1">
                      {course.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {course.subtitle}
                    </p>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      Instructor: <strong>{course.instructor_name}</strong>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-slate-900 dark:text-white">
                        ₹{course.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION: Subjects */}
        {(activeSection === 'subjects' || activeSection === 'overview') && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Core Disciplines Covered
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Detailed breakdowns mapped directly to NCERT and national test blueprints.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((sub) => (
                <div
                  key={sub.id}
                  className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3"
                >
                  <div className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm font-bold">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {sub.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {sub.description}
                  </p>
                  <div className="pt-2 text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                    {sub.chapters_count || 24} High-Yield Chapters
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION: Interactive Practice Module */}
        {(activeSection === 'practice' || activeSection === 'overview') && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Live Interactive Question Bank
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Try questions curated for {exam.title}. Get instant answer validation and explanations.
              </p>
            </div>

            <PracticeEngine
              initialQuestions={sampleQuestions}
              title={`${exam.short_code} Diagnostic Questions`}
            />
          </div>
        )}

        {/* SECTION: Study Materials */}
        {(activeSection === 'materials' || activeSection === 'overview') && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Study Materials & Formula Compendiums
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Download high-yield NCERT summaries, formulas, and previous years&apos; question papers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((mat) => (
                <div
                  key={mat.id}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
                      {mat.material_type.replace('_', ' ')}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2">
                      {mat.title}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {mat.subject_name} • {mat.page_count} Pages • {mat.file_size}
                    </p>
                  </div>

                  <button
                    onClick={() => openAuthModal(`/resources/${mat.slug}`)}
                    className="mt-4 w-full py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Resource</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION: FAQs */}
        {(activeSection === 'faqs' || activeSection === 'overview') && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Clarifications regarding {exam.title} timeline, preparation strategy, and syllabus.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2"
                >
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
