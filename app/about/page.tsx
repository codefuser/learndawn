import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { StudentOutcomesSection } from '@/components/sections/StudentOutcomesSection';
import { 
  Compass, 
  Lightbulb, 
  Heart, 
  ShieldCheck, 
  Users, 
  BookOpen, 
  Award, 
  ArrowRight, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  UserCheck, 
  LineChart, 
  GraduationCap, 
  HeartHandshake, 
  MessagesSquare, 
  Building2, 
  Share2,
  FolderGit2,
  FileCheck2
} from 'lucide-react';

export const metadata = {
  title: 'About Us | Welcome to LearnDawn India | Reaching The Unreached',
  description: 'LearnDawn India is a standalone online digital institution providing affordable, competitive and academic education, along with counselling and mentorship.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#07070a] text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      <main className="flex-1 pb-24">
        {/* ========================================================= */}
        {/* 1A. INSTITUTIONAL INTRODUCTION / WELCOME                  */}
        {/* ========================================================= */}
        <section className="relative pt-24 sm:pt-32 pb-12 overflow-hidden border-b border-slate-200/80 dark:border-zinc-800/80 bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50 dark:from-blue-950/20 dark:via-[#09090d] dark:to-[#07070a]">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
              <span>HEARTILY WELCOME</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight uppercase max-w-4xl mx-auto leading-tight">
              WELCOME TO LEARNDAWN INDIA
            </h1>

            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed pt-2">
              LearnDawn India is a standalone online digital institution providing affordable, competitive and academic education, along with counselling and mentorship.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed font-medium">
              For the past three years, LearnDawn has focused on making quality education accessible while guiding students with the right direction, support and opportunities to move confidently towards their goals.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Our mission is to make structured learning, academic guidance, mentorship and educational opportunities more accessible to students. The institution brings together personalised mentorship, collaborative learning, assessments, study materials, academic support and career guidance in one learning ecosystem.
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 1B. HERO / REACHING THE UNREACHED                         */}
        {/* ========================================================= */}
        <section className="relative py-14 sm:py-20 overflow-hidden border-b border-slate-200/80 dark:border-zinc-800/80 bg-gradient-to-b from-red-50/30 via-white to-slate-50/50 dark:from-red-950/10 dark:via-[#09090d] dark:to-[#07070a]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 max-w-4xl h-48 bg-red-500/[0.08] blur-[120px] pointer-events-none" />

          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-800/60 text-red-700 dark:text-red-300 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Compass className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>Foundation Vision</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase max-w-4xl mx-auto leading-tight">
              REACHING THE UNREACHED
            </h2>

            <p className="text-base sm:text-xl font-semibold text-red-600 dark:text-red-400 max-w-2xl mx-auto">
              Education should not be limited by where a student comes from.
            </p>

            <div className="max-w-3xl mx-auto space-y-4 text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed text-left sm:text-center pt-2">
              <p>
                LearnDawn India is a digital education, mentorship and counselling institution built with a purpose — to take meaningful education, guidance and opportunity beyond the boundaries of conventional learning.
              </p>
              <p className="font-semibold text-slate-900 dark:text-white">
                We believe that talent exists everywhere, but access to the right guidance does not.
              </p>
              <p>
                LearnDawn brings together academic education, competitive-exam preparation, mentorship, counselling, assessments, learning resources and student support through an integrated digital ecosystem.
              </p>
              <p>
                From students preparing for competitive examinations to those seeking direction for higher education and career decisions, we aim to create a learning environment where every student can learn with clarity, prepare with purpose and progress with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. PURPOSE & BELIEF                                       */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* OUR PURPOSE */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-red-500/40 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center border border-red-500/20">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
                  OUR PURPOSE
                </h2>
                <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-medium">
                  To reach students who need direction, empower them with the right learning opportunities, and help them move closer to their destination.
                </p>
                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800/80 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 space-y-2 italic">
                  <p>&ldquo;Because sometimes, a student does not need more potential.</p>
                  <p className="font-semibold text-slate-900 dark:text-white not-italic">
                    They simply need someone to recognise it, guide it and give it direction.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* OUR BELIEF */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-red-500/40 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
                  OUR BELIEF
                </h2>
                <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-medium">
                  Learning should reach the student, not wait for the student to reach it.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  From cities to smaller communities, from first-generation learners to ambitious competitive-exam aspirants, LearnDawn strives to make quality education and mentorship more accessible.
                </p>
                <div className="p-4 rounded-2xl bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 text-xs sm:text-sm text-red-700 dark:text-red-300 space-y-1">
                  <p className="font-bold">We are not building just another coaching platform.</p>
                  <p className="text-base font-extrabold uppercase tracking-wide">We are building a direction.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. TWO LEARNING SYSTEMS OVERVIEW                          */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 border-t border-slate-200 dark:border-zinc-800/80">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">Structured Pedagogy</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Two Complementary Learning Systems
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
              At LearnDawn, we understand that every student learns differently. Some students need close, personalised guidance, while others grow better through interaction, competition and collaborative learning.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
              Both systems follow the same academic standards, structured preparation and evaluation framework, while providing students with different learning environments based on their needs.
            </p>
          </div>

          <div className="space-y-16">
            {/* 3A. ONEPOD LEARNING SYSTEM */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-red-50/30 dark:from-zinc-900/90 dark:via-[#0c0c10] dark:to-zinc-900/90 border border-slate-200 dark:border-zinc-800 shadow-xl space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-zinc-800">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Personalised Model</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    ONEPOD LEARNING SYSTEM
                  </h3>
                  <p className="text-sm font-semibold text-red-600 dark:text-red-400 mt-1">
                    Personalised Learning. Continuous Mentorship.
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 max-w-md">
                  Each student becomes part of a focused learning pod supported by a dedicated mentor, creating a closer connection between the student, mentor and academic team.
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  How OnePod Works
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    {
                      icon: <UserCheck className="w-5 h-5 text-red-500" />,
                      title: 'Dedicated Mentorship',
                      desc: 'Continuous guidance from an assigned mentor who understands their preparation, progress and academic needs.'
                    },
                    {
                      icon: <LineChart className="w-5 h-5 text-blue-500" />,
                      title: 'Personalised Progress',
                      desc: 'Performance, assessments, preparation levels and areas requiring improvement can be monitored systematically.'
                    },
                    {
                      icon: <GraduationCap className="w-5 h-5 text-emerald-500" />,
                      title: 'Academic Guidance',
                      desc: 'Direction on revision, practice, test preparation, time management and improving weak areas.'
                    },
                    {
                      icon: <HeartHandshake className="w-5 h-5 text-purple-500" />,
                      title: 'Continuous Support',
                      desc: 'A consistent support structure instead of depending only on classroom sessions.'
                    },
                    {
                      icon: <MessagesSquare className="w-5 h-5 text-amber-500" />,
                      title: 'Family Connection',
                      desc: 'Better communication between student, mentor and family, helping everyone understand progress.'
                    }
                  ].map((feat, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-zinc-950/70 border border-slate-200 dark:border-zinc-800/80 space-y-2.5">
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-900 w-fit">
                        {feat.icon}
                      </div>
                      <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                        {feat.title}
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-zinc-800">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">Why OnePod?</span>
                  <p className="text-sm text-slate-300 mt-0.5">
                    Designed for students who value individual attention, structured mentorship and continuous academic direction.
                  </p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-red-600/20 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0">
                  One student. One mentor. One structured journey.
                </div>
              </div>
            </div>

            {/* 3B. GROUP LEARNING SYSTEM */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-zinc-900/90 dark:via-[#0c0c10] dark:to-zinc-900/90 border border-slate-200 dark:border-zinc-800 shadow-xl space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-zinc-800">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <Users className="w-3.5 h-3.5" />
                    <span>Collaborative Model</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    GROUP LEARNING SYSTEM
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                    Learn Together. Practice Together. Grow Together.
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 max-w-md">
                  LearnDawn&apos;s collaborative learning model for students who benefit from learning alongside a community of fellow aspirants in live interactive classrooms.
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  How Group Learning Works
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      icon: <BookOpen className="w-5 h-5 text-blue-500" />,
                      title: 'Live Learning',
                      desc: 'Students learn through structured online classes conducted by LearnDawn faculty and subject experts.'
                    },
                    {
                      icon: <Share2 className="w-5 h-5 text-emerald-500" />,
                      title: 'Peer Learning',
                      desc: 'Students learn from discussions, questions, different approaches and shared experiences.'
                    },
                    {
                      icon: <CheckCircle2 className="w-5 h-5 text-purple-500" />,
                      title: 'Collaborative Practice',
                      desc: 'Regular practice and academic activities help apply concepts rather than simply listen to lectures.'
                    },
                    {
                      icon: <Award className="w-5 h-5 text-amber-500" />,
                      title: 'Healthy Competition',
                      desc: 'A shared learning environment encourages students to evaluate their preparation and improve.'
                    },
                    {
                      icon: <Compass className="w-5 h-5 text-red-500" />,
                      title: 'Common Resources',
                      desc: 'Access structured study materials, assessments, and practice resources aligned to batches.'
                    },
                    {
                      icon: <Users className="w-5 h-5 text-indigo-500" />,
                      title: 'Community Support',
                      desc: 'Part of a wider learning community where preparation becomes a shared journey rather than isolation.'
                    }
                  ].map((feat, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-zinc-950/70 border border-slate-200 dark:border-zinc-800/80 space-y-2.5">
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-900 w-fit">
                        {feat.icon}
                      </div>
                      <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                        {feat.title}
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-zinc-800">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">Why Group Learning?</span>
                  <p className="text-sm text-slate-300 mt-0.5">
                    Designed for students who enjoy interaction, classroom energy, peer engagement and collaborative preparation.
                  </p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0 text-center sm:text-right">
                  Learn Together. Practice Together. Grow Together.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. STUDENT ACHIEVEMENTS & EDUCATIONAL OUTCOMES            */}
        {/* ========================================================= */}
        <StudentOutcomesSection />

        {/* ========================================================= */}
        {/* 5. ASSOCIATIONS OF LEARNDAWN                              */}
        {/* ========================================================= */}
        <section id="collaborators" className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-t border-slate-200 dark:border-zinc-800/80">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-8">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">Official Partnerships</span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
                  ASSOCIATIONS OF LEARNDAWN
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* MSAI */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-800/80 flex flex-col justify-between hover:border-blue-500/40 transition-all shadow-xs">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2.5 py-1 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      2024
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Mentor Support</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Medical Student Association of India (MSAI)
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                    LearnDawn India is officially collaborating with the Medical Student Association of India (MSAI) to strengthen its Mentor Support System, providing students with structured guidance, academic mentorship, career counselling and continuous support from medical student mentors.
                  </p>
                </div>
              </div>

              {/* Med Prep Makers Association */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-800/80 flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-xs">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      2024
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Medical Initiative</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Med Prep Makers Association (MPMA)
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                    LearnDawn India&apos;s Med Prep Makers Association (MPMA) is an exclusive initiative dedicated to medical student support, mentorship, academic guidance and peer learning.
                  </p>
                </div>
              </div>

              {/* NEET Flies */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-800/80 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xs">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                      2025
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Notes & Coordination</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    NEET Flies
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                    LearnDawn India is collaborating with NEET Flies for academic notes development and student coordination, strengthening accessible and student-focused learning support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. OUR PROJECTS                                           */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-t border-slate-200 dark:border-zinc-800/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3 border border-indigo-200 dark:border-indigo-900/40">
              <FolderGit2 className="w-3.5 h-3.5 text-indigo-500" />
              <span>Higher Education &amp; Student Affairs</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              OUR PROJECTS
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
              LearnDawn&apos;s Higher Education and Student Affairs initiatives bring together different educational projects designed to support learners across relevant academic and learning contexts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Project 1: Learndawn Tamil */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 space-y-4 hover:border-red-500/40 hover:-translate-y-1 transition-all shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-950 p-2 border border-slate-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logos/LearnDawn Tamil Education Logo.png"
                    alt="Learndawn Tamil Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Learndawn Tamil
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  Regional bilingual learning initiative providing Tamil-language concept explanations, NCERT translation support, and state-board bridge programmes.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 dark:border-zinc-800 text-[11px] font-semibold text-slate-500">
                Language-Sensitive Education
              </div>
            </div>

            {/* Project 2: Learndawn CBSE */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 space-y-4 hover:border-blue-500/40 hover:-translate-y-1 transition-all shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 p-2 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 font-black text-xl">
                  CBSE
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Learndawn CBSE
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  Dedicated school academics initiative covering Class 9–12 foundation curriculum, exemplar solutions, and board examination excellence.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 dark:border-zinc-800 text-[11px] font-semibold text-slate-500">
                School Academics Project
              </div>
            </div>

            {/* Project 3: Learndawn Telugu */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 space-y-4 hover:border-emerald-500/40 hover:-translate-y-1 transition-all shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 p-2 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-black text-xl">
                  తెలుగు
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Learndawn Telugu
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  Regional outreach project supporting Andhra Pradesh &amp; Telangana state aspirants with bilingual resources and examination guidance.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 dark:border-zinc-800 text-[11px] font-semibold text-slate-500">
                Regional Outreach Project
              </div>
            </div>

            {/* Project 4: Dawn Med */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 space-y-4 hover:border-purple-500/40 hover:-translate-y-1 transition-all shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-950/60 p-2 border border-purple-200 dark:border-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 font-black text-xl">
                  MED
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Dawn Med
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  Specialized healthcare mentorship division connecting NEET medical aspirants with medical students, doctors, and clinical faculty.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 dark:border-zinc-800 text-[11px] font-semibold text-slate-500">
                Medical Mentorship Division
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. CTA TO BUILD WITH LEARNDAWN                            */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Don&apos;t Just Build A Career. Build An Impact.
              </h2>
              <p className="text-xs sm:text-sm text-red-100">
                Join the people working to make education more accessible, meaningful and direction-driven.
              </p>
            </div>
            <Link
              href="/careers"
              className="px-6 py-3.5 rounded-2xl bg-white text-red-600 hover:bg-red-50 font-bold text-sm transition shadow-lg shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Build with LearnDawn</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
