import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { 
  HeartHandshake, 
  Sparkles, 
  Target, 
  CheckCircle2, 
  LineChart, 
  BookOpen, 
  Clock, 
  ShieldCheck, 
  Stethoscope, 
  Cpu, 
  GraduationCap, 
  Activity, 
  ArrowRight,
  UserCheck,
  RotateCcw,
  Compass,
  AlertTriangle,
  Lightbulb,
  Users
} from 'lucide-react';

export const metadata = {
  title: '1:1 Mentorship | Personal Guidance. Individual Attention. Clear Direction. | LearnDawn India',
  description: 'Personalized academic guidance, consistent mentorship, career direction, and structured support throughout your preparation journey.',
};

export default function MentorshipPage() {
  const diagnosticAreas = [
    'Current academic level',
    'Preparation status',
    'Strengths and weak areas',
    'Study habits and consistency',
    'Examination performance',
    'Revision requirements',
    'Time-management difficulties',
    'Career interests',
    'Entrance-examination goals',
    'Academic and personal challenges affecting preparation',
  ];

  const studyPlanningItems = [
    'Daily study schedules',
    'Weekly targets',
    'Lecture completion',
    'Revision cycles',
    'Question-practice sessions',
    'Test schedules',
    'Error correction',
    'PYQ analysis',
    'Conceptual practice',
    'Final revision strategy',
  ];

  const progressMonitoringItems = [
    'Syllabus completion',
    'Test performance',
    'Revision consistency',
    'Question-solving progress',
    'Repeated mistakes',
    'Weak concepts',
    'Backlogs',
    'Study consistency',
  ];

  const errorAnalysisItems = [
    'Conceptual mistakes',
    'Memory-based mistakes',
    'Misreading questions',
    'Calculation errors',
    'Time-management problems',
    'Careless mistakes',
    'Incorrect application of concepts',
    'Questions repeatedly answered incorrectly',
  ];

  const examinationStrategyItems = [
    'Question-selection strategy',
    'Time-management techniques',
    'Test-taking discipline',
    'Revision prioritization',
    'Mock-test analysis',
    'Exam-day planning',
    'Performance improvement strategies',
  ];

  const careerPathways = [
    { title: 'Medicine', icon: <Stethoscope className="w-4 h-4 text-red-500" /> },
    { title: 'Dentistry', icon: <Stethoscope className="w-4 h-4 text-blue-500" /> },
    { title: 'AYUSH', icon: <Sparkles className="w-4 h-4 text-emerald-500" /> },
    { title: 'Nursing', icon: <Activity className="w-4 h-4 text-purple-500" /> },
    { title: 'Allied Health Sciences', icon: <Activity className="w-4 h-4 text-amber-500" /> },
    { title: 'Paramedical Sciences', icon: <Activity className="w-4 h-4 text-rose-500" /> },
    { title: 'Engineering', icon: <Cpu className="w-4 h-4 text-sky-500" /> },
    { title: 'Computing', icon: <Cpu className="w-4 h-4 text-cyan-500" /> },
    { title: 'Higher Education', icon: <GraduationCap className="w-4 h-4 text-indigo-500" /> },
    { title: 'Other Entrance Pathways', icon: <Compass className="w-4 h-4 text-orange-500" /> },
  ];

  const whoCanBenefit = [
    'Are unsure how to begin their preparation',
    'Have difficulty maintaining consistency',
    'Have accumulated academic backlogs',
    'Are unable to identify their weak areas',
    'Perform inconsistently in examinations',
    'Need help analysing mistakes',
    'Are confused about career pathways',
    'Need individual academic attention',
    'Are preparing for competitive entrance examinations',
    'Want structured guidance alongside their regular classes',
  ];

  const mentorshipSessionFocus = [
    'Academic review',
    'Study-plan preparation',
    'Progress assessment',
    'Test analysis',
    'Error analysis',
    'Revision planning',
    'Backlog management',
    'Examination strategy',
    'Career counselling',
    'Academic decision-making',
    'Goal setting',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#07070a] text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      <main className="flex-1 pb-24">
        {/* ========================================================= */}
        {/* 1. HERO                                                   */}
        {/* ========================================================= */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden border-b border-slate-200/80 dark:border-zinc-800/80 bg-gradient-to-b from-red-50/40 via-white to-slate-50/50 dark:from-red-950/10 dark:via-[#09090d] dark:to-[#07070a]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 max-w-4xl h-48 bg-red-500/[0.08] blur-[120px] pointer-events-none" />

          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-800/60 text-red-700 dark:text-red-300 text-xs font-bold uppercase tracking-wider shadow-xs">
              <HeartHandshake className="w-3.5 h-3.5 text-red-500" />
              <span>One-To-One Academic Model</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight uppercase max-w-4xl mx-auto leading-tight">
              1:1 Mentorship
            </h1>

            <p className="text-base sm:text-2xl font-black text-red-600 dark:text-red-400 max-w-3xl mx-auto tracking-wide">
              Personal Guidance. Individual Attention. Clear Direction.
            </p>

            <div className="max-w-3xl mx-auto space-y-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed pt-2">
              <p>
                At LearnDawn India, 1:1 Mentorship is designed to provide students with personalised academic guidance, consistent mentorship, career direction, and structured support throughout their preparation journey.
              </p>
              <p>
                Every student has different academic strengths, challenges, learning speeds, career interests, and personal circumstances. Our 1:1 mentorship model focuses on understanding the individual student first and then building a practical pathway around their needs.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/career-guidance/register"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-red-600/30 active:scale-95 cursor-pointer"
              >
                <span>Register For Mentorship / Counselling</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. WHAT IS 1:1 MENTORSHIP?                                */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20">
          <div className="space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">Individual Diagnostic</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                What is 1:1 Mentorship?
              </h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-medium">
                1:1 Mentorship is a personalized guidance system where a student is connected with a dedicated mentor for individual academic and career support.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
                The mentor works with the student to understand:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {diagnosticAreas.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-2"
                >
                  <div className="w-6 h-6 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </div>
                  <p className="font-semibold text-xs text-slate-800 dark:text-zinc-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-medium italic">
              Based on this understanding, the mentor helps the student create a structured and achievable preparation pathway.
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. WHAT DOES A MENTOR DO? (5 PILLARS)                     */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-t border-slate-200 dark:border-zinc-800/80">
          <div className="space-y-14">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">Mentor Responsibilities</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                What Does a Mentor Do?
              </h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 font-semibold">
                A LearnDawn mentor is not simply someone who gives a timetable.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                The mentor acts as a guide, academic companion, accountability partner, and career-support person throughout the student&apos;s preparation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 1. Personalized Study Planning */}
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-xs">1</span>
                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                    Personalized Study Planning
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  Students receive guidance to structure their preparation according to their current level. The mentor can help organize:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {studyPlanningItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-zinc-800 text-xs font-bold text-red-600 dark:text-red-400">
                  The objective is to convert a large syllabus into smaller, achievable targets.
                </div>
              </div>

              {/* 2. Academic Progress Monitoring */}
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">2</span>
                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                    Academic Progress Monitoring
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  Preparation is regularly reviewed rather than leaving students to study without direction. Mentors can monitor:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {progressMonitoringItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-zinc-800 text-xs font-bold text-blue-600 dark:text-blue-400">
                  This allows the student to identify problems early and make corrections before they become major gaps.
                </div>
              </div>

              {/* 3. Test & Error Analysis */}
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">3</span>
                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                    Test &amp; Error Analysis
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  Marks alone do not explain why a student is struggling. LearnDawn mentorship focuses on analysing the reason behind mistakes:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {errorAnalysisItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-zinc-800 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  The goal is not simply to increase marks in one test, but to reduce repeated errors across future examinations.
                </div>
              </div>

              {/* 5. Examination Strategy */}
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs">5</span>
                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                    Examination Strategy
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  Students preparing for competitive examinations often know the syllabus but struggle with execution. Mentorship develops:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {examinationStrategyItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-zinc-800 text-xs font-bold text-purple-600 dark:text-purple-400">
                  The emphasis is on developing a reliable examination approach rather than depending only on motivation.
                </div>
              </div>
            </div>

            {/* 4. Revision Strategy Banner (Continuous Cycle) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-zinc-800 space-y-6 shadow-xl">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <RotateCcw className="w-4 h-4" />
                  <span>4. Systematic Revision Strategy</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Continuous Preparation Cycle</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-3xl">
                  Mentors help students build systematic revision cycles instead of depending on last-minute preparation. This creates a continuous preparation cycle in which learning is repeatedly tested and strengthened:
                </p>
              </div>

              {/* Cycle Flow */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-bold text-white pt-2">
                {[
                  'Lecture',
                  'Revision',
                  'Foundation Check',
                  'Error Check',
                  'Conceptual Check',
                  'PYQ Analysis',
                  'Advanced Practice',
                  'Consistency'
                ].map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="px-3 py-1.5 rounded-xl bg-zinc-800 border border-zinc-700">
                      {step}
                    </div>
                    {idx < 7 && <span className="text-red-500 font-mono">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. CAREER GUIDANCE & PHILOSOPHY PROGRESSION               */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-t border-slate-200 dark:border-zinc-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Career Guidance in Mentorship */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-red-500">Beyond Examinations</span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  Career Guidance
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  LearnDawn India&apos;s mentorship system also supports students beyond immediate examination preparation. Students receive guidance regarding possible academic pathways, entrance examinations, eligibility requirements, course selection, and future career directions:
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {careerPathways.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 text-xs font-semibold text-slate-800 dark:text-zinc-200">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-500 italic">
                Career guidance is intended to help students understand their options before making important academic decisions.
              </p>
            </div>

            {/* One Student. One Mentor. One Structured Journey. */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-red-500">Core Philosophy</span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  One Student. One Mentor. One Structured Journey.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  LearnDawn&apos;s mentorship philosophy is based on the understanding that students should not have to navigate a competitive examination journey completely alone.
                </p>
                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">A mentor helps the student:</span>
                  <p className="font-bold text-sm text-red-600 dark:text-red-400">
                    Understand → Plan → Execute → Analyse → Correct → Improve → Progress
                  </p>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  The mentor does not replace the student&apos;s effort. Instead, the mentor provides direction, accountability, and structured support so that the student&apos;s effort is used effectively.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-600/10 border border-red-500/20 text-xs text-red-700 dark:text-red-300 font-semibold">
                Mentorship + Group Learning: Learn Together. Grow Individually. Progress with Direction.
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. WHO CAN BENEFIT & MENTORSHIP SESSIONS                  */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-t border-slate-200 dark:border-zinc-800/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Who Can Benefit */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Who Can Benefit?
              </h3>
              <p className="text-xs text-slate-500">1:1 Mentorship can be useful for students who:</p>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-zinc-300">
                {whoCanBenefit.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mentorship Sessions */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Mentorship Sessions
              </h3>
              <p className="text-xs text-slate-500">Depending on requirements, mentorship sessions may focus on:</p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 dark:text-zinc-300">
                {mentorshipSessionFocus.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs font-semibold text-slate-600 dark:text-zinc-400 pt-2 border-t border-slate-200 dark:border-zinc-800">
                Each session should have a clear purpose and actionable outcome.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. OUR CORE PRINCIPLE & CTA BANNER                        */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-2xl space-y-6">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-red-200">Our Core Principle</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Mentorship is not about telling a student what to do.
              </h2>
              <p className="text-sm sm:text-base text-red-100 font-medium">
                It is about helping the student understand what to do, why to do it, and how to do it consistently.
              </p>
              <p className="text-xs sm:text-sm text-red-200 leading-relaxed">
                At LearnDawn India, we aim to provide every student with proper direction, meaningful accountability, and a pathway suited to their individual academic journey.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/career-guidance/register"
                className="px-6 py-3 rounded-xl bg-white text-red-600 hover:bg-red-50 font-bold text-xs uppercase tracking-wider transition shadow-lg shrink-0 flex items-center gap-2"
              >
                <span>Register for 1:1 Mentorship</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/academic-counselling"
                className="px-6 py-3 rounded-xl bg-red-800/80 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider transition border border-red-400/40 shrink-0 flex items-center gap-2"
              >
                <span>Academic Counselling</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
