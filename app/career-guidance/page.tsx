import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { 
  Compass, 
  Sparkles, 
  BookOpen, 
  ArrowRight, 
  GraduationCap, 
  MapPin, 
  Route, 
  Lightbulb, 
  CalendarCheck,
  CheckCircle2,
  Users,
  Target
} from 'lucide-react';

export const metadata = {
  title: 'Career Guidance | Your Career. Your Direction. Your Next Step. | LearnDawn India',
  description: 'LearnDawn Career Guidance is designed to help students understand their options and make more informed educational and career decisions.',
};

export default function CareerGuidancePage() {
  const guidancePillars = [
    {
      title: 'Career Exploration',
      desc: 'Understand different career fields and the opportunities available within them.',
      icon: <Compass className="w-5 h-5 text-red-500" />
    },
    {
      title: 'Course & College Guidance',
      desc: 'Explore suitable courses, educational pathways and possible institutions based on your goals.',
      icon: <GraduationCap className="w-5 h-5 text-blue-500" />
    },
    {
      title: 'Competitive Examination Guidance',
      desc: 'Understand relevant entrance examinations, preparation requirements and possible pathways.',
      icon: <Target className="w-5 h-5 text-emerald-500" />
    },
    {
      title: 'Academic Pathway Planning',
      desc: 'Build a practical roadmap from your current stage towards your desired higher education or career destination.',
      icon: <Route className="w-5 h-5 text-purple-500" />
    },
    {
      title: 'Career Clarification',
      desc: 'Discuss your interests, strengths, academic background and aspirations to identify suitable directions.',
      icon: <Lightbulb className="w-5 h-5 text-amber-500" />
    },
    {
      title: 'Future Planning',
      desc: 'Understand possible next steps and create a structured plan for your educational journey.',
      icon: <CalendarCheck className="w-5 h-5 text-rose-500" />
    }
  ];

  const registrationSteps = [
    {
      num: 1,
      title: 'Register Your Details',
      desc: 'Submit your basic information and counselling requirements.'
    },
    {
      num: 2,
      title: 'Share Your Academic Background',
      desc: 'Provide details about your current class, qualification, academic interests and intended career direction.'
    },
    {
      num: 3,
      title: 'Select Your Preferred Session',
      desc: 'Choose an available counselling date and time.'
    },
    {
      num: 4,
      title: 'Counselling Session',
      desc: 'Meet with a LearnDawn Career Counsellor for a structured discussion.'
    },
    {
      num: 5,
      title: 'Receive Direction',
      desc: 'Based on the discussion, receive guidance on possible pathways and your next steps.'
    }
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
              <Compass className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>Guidance &amp; Mentorship</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight uppercase max-w-4xl mx-auto leading-tight">
              CAREER GUIDANCE
            </h1>

            <p className="text-base sm:text-2xl font-black text-red-600 dark:text-red-400 max-w-3xl mx-auto uppercase tracking-wide">
              YOUR CAREER. YOUR DIRECTION. YOUR NEXT STEP.
            </p>

            <div className="max-w-3xl mx-auto space-y-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed pt-2">
              <p>
                Choosing a career is more than selecting a course or preparing for an examination.
              </p>
              <p>
                Students often have questions about which career suits them, which course to choose, what entrance examination to prepare for, what opportunities are available, and how to plan their next steps.
              </p>
              <p className="font-semibold text-slate-900 dark:text-white">
                LearnDawn Career Guidance is designed to help students understand their options and make more informed educational and career decisions.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/career-guidance/register"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-red-600/30 active:scale-95 cursor-pointer"
              >
                <span>Book a Counselling Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. WHAT WE HELP WITH                                      */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20">
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">Structured Pathways</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
                WHAT WE HELP WITH
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
                Explore the key pillars through which LearnDawn counsellors provide clarity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {guidancePillars.map((item, i) => (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 hover:border-red-500/40 transition space-y-3"
                >
                  <div className="p-3 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 w-fit">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. BOOK A CAREER COUNSELLING SESSION & PROCESS            */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-t border-slate-200 dark:border-zinc-800/80">
          <div className="p-8 sm:p-14 rounded-3xl bg-slate-900 text-white border border-zinc-800 shadow-2xl space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">One-to-One Sessions</span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase">
                BOOK A CAREER COUNSELLING SESSION
              </h2>
              <p className="text-base sm:text-lg font-semibold text-red-400">
                Don&apos;t choose your future with confusion. Start with a conversation.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Students and parents can register for a one-to-one career counselling session with a LearnDawn Career Counsellor.
              </p>
            </div>

            {/* 5-Step Registration Process */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-zinc-800 pb-3">
                REGISTRATION PROCESS
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {registrationSteps.map((step) => (
                  <div key={step.num} className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3">
                    <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs">
                      {step.num}
                    </div>
                    <h4 className="font-bold text-sm text-white">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-zinc-800">
              <p className="text-xs text-slate-400 text-center sm:text-left">
                Sessions are conducted online or in-person subject to advisor availability.
              </p>
              <Link
                href="/career-guidance/register"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-red-600/30 text-center shrink-0"
              >
                Start Registration →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
