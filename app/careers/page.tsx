import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { CAREER_OPPORTUNITIES_INTRO, JOB_LISTINGS_DATA } from '@/lib/data/careersData';
import { 
  Briefcase, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Users, 
  BookOpen, 
  Stethoscope, 
  HeartHandshake, 
  HelpCircle, 
  FileText, 
  Headphones, 
  Video, 
  Cpu, 
  IndianRupee,
  Layers,
  ChevronRight
} from 'lucide-react';

export const metadata = {
  title: 'Careers & Job Opportunities | Build With LearnDawn',
  description: 'Join the team building India\'s accessible digital education ecosystem. Explore academic, mentorship, creative, and operational job openings.',
};

export default function CareersPage() {
  const categories = [
    'Academic & Education',
    'Mentorship & Counselling',
    'Media & Creative',
    'Operations & Student Support',
  ] as const;

  const categoryIcons: Record<string, React.ReactNode> = {
    'Faculty & Educators': <BookOpen className="w-5 h-5 text-red-500" />,
    'Doctors & Medical Professionals': <Stethoscope className="w-5 h-5 text-blue-500" />,
    'Mentors': <HeartHandshake className="w-5 h-5 text-emerald-500" />,
    'Counsellors': <HelpCircle className="w-5 h-5 text-purple-500" />,
    'Editors': <FileText className="w-5 h-5 text-amber-500" />,
    'Academic Content Team': <Layers className="w-5 h-5 text-red-500" />,
    'Student Support Team': <Headphones className="w-5 h-5 text-indigo-500" />,
    'Creative & Media Team': <Video className="w-5 h-5 text-rose-500" />,
    'Technology Team': <Cpu className="w-5 h-5 text-cyan-500" />,
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#07070a] text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      <main className="flex-1 pb-24">
        {/* ========================================================= */}
        {/* 1. HERO / BUILD WITH LEARNDAWN INTRO                      */}
        {/* ========================================================= */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden border-b border-slate-200/80 dark:border-zinc-800/80 bg-gradient-to-b from-red-50/40 via-white to-slate-50/50 dark:from-red-950/10 dark:via-[#09090d] dark:to-[#07070a]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 max-w-4xl h-48 bg-red-500/[0.08] blur-[120px] pointer-events-none" />

          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-800/60 text-red-700 dark:text-red-300 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Briefcase className="w-3.5 h-3.5 text-red-500" />
              <span>Career Opportunities</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight uppercase max-w-4xl mx-auto leading-tight">
              {CAREER_OPPORTUNITIES_INTRO.headline}
            </h1>

            <p className="text-base sm:text-xl font-semibold text-red-600 dark:text-red-400 max-w-2xl mx-auto">
              {CAREER_OPPORTUNITIES_INTRO.subheading}
            </p>

            <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
              {CAREER_OPPORTUNITIES_INTRO.content}
            </p>

            <div className="pt-2">
              <a
                href="#openings"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-red-600/20 active:scale-95 cursor-pointer"
              >
                <span>View Job Openings</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. OPPORTUNITIES AT LEARNDAWN CATEGORIES                  */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20">
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">Collaborative Ecosystem</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Opportunities At LearnDawn
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
                Explore the multidisciplinary teams driving education and mentorship forward.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CAREER_OPPORTUNITIES_INTRO.categories.map((cat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 hover:border-red-500/40 transition space-y-3"
                >
                  <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 w-fit">
                    {categoryIcons[cat.title] || <Sparkles className="w-5 h-5 text-red-500" />}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* WHO ARE WE LOOKING FOR */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-zinc-800 space-y-4 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">Our Culture</span>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                {CAREER_OPPORTUNITIES_INTRO.whoAreWeLookingFor.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line max-w-4xl">
                {CAREER_OPPORTUNITIES_INTRO.whoAreWeLookingFor.description}
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. JOB OPPORTUNITIES LISTINGS                             */}
        {/* ========================================================= */}
        <section id="openings" className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-t border-slate-200 dark:border-zinc-800/80">
          <div className="space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">Current Openings</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                JOB OPPORTUNITIES
              </h2>
              <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-zinc-300">
                Build your career. Build someone&apos;s future.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                At LearnDawn, every role contributes to the larger mission of making education more accessible, structured and direction-driven.
              </p>
            </div>

            {/* Grouped Jobs by Category */}
            <div className="space-y-16">
              {categories.map((catName) => {
                const categoryJobs = JOB_LISTINGS_DATA.filter(j => j.category === catName);
                if (categoryJobs.length === 0) return null;

                return (
                  <div key={catName} className="space-y-6">
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-zinc-800">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-slate-900 dark:text-white">
                        {catName}
                      </h3>
                      <span className="text-xs text-slate-400 font-semibold">
                        ({categoryJobs.length} {categoryJobs.length === 1 ? 'Role' : 'Roles'})
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryJobs.map((job) => (
                        <div
                          key={job.id}
                          className="flex flex-col justify-between p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 transition space-y-4"
                        >
                          <div className="space-y-3">
                            <div className="flex items-start justify-between gap-3">
                              <span className="text-xs font-mono font-bold text-slate-400 dark:text-zinc-500">
                                #{job.number}
                              </span>
                              
                              {/* Status Badge */}
                              {job.isAvailable ? (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold">
                                  <CheckCircle2 className="w-3 h-3" />
                                  <span>{job.status}</span>
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 text-[11px] font-medium">
                                  <XCircle className="w-3 h-3 text-slate-400" />
                                  <span>{job.status}</span>
                                </span>
                              )}
                            </div>

                            <h4 className="font-bold text-base text-slate-900 dark:text-white leading-snug">
                              {job.number}. {job.title}
                            </h4>

                            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                              {job.description}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-slate-200/80 dark:border-zinc-800/80 space-y-3">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-zinc-200">
                              <IndianRupee className="w-3.5 h-3.5 text-red-500" />
                              <span>{job.compensation}</span>
                            </div>

                            {job.isAvailable ? (
                              <Link
                                href={`/careers/apply?job=${encodeURIComponent(job.title)}`}
                                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-md shadow-red-600/20 active:scale-95 cursor-pointer"
                              >
                                <span>Apply Now</span>
                                <ChevronRight className="w-4 h-4" />
                              </Link>
                            ) : (
                              <button
                                disabled
                                className="w-full py-2 px-4 rounded-xl bg-slate-200/70 dark:bg-zinc-800/60 text-slate-400 dark:text-zinc-500 font-semibold text-xs cursor-not-allowed text-center"
                              >
                                No Current Vacancies
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. CLOSING BANNER                                         */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {CAREER_OPPORTUNITIES_INTRO.closing.headline}
              </h2>
              <p className="text-xs sm:text-sm text-red-100">
                {CAREER_OPPORTUNITIES_INTRO.closing.subtext}
              </p>
            </div>
            <a
              href="#openings"
              className="px-6 py-3.5 rounded-2xl bg-white text-red-600 hover:bg-red-50 font-bold text-sm transition shadow-lg shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>{CAREER_OPPORTUNITIES_INTRO.closing.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
