import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { 
  GraduationCap, 
  Sparkles, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  BookOpen, 
  Stethoscope, 
  Layers, 
  HelpCircle,
  ShieldCheck,
  Scale,
  BrainCircuit,
  HeartHandshake
} from 'lucide-react';

export const metadata = {
  title: 'Academic Counselling | Understand Your Options | LearnDawn India',
  description: 'At LearnDawn India, Academic Counselling helps students make informed academic decisions at important stages of their educational journey.',
};

export default function AcademicCounsellingPage() {
  const whoCanSeek = [
    'School students',
    'Higher-secondary students',
    'Competitive-examination aspirants',
    'NEET aspirants',
    'Repeaters and partial droppers',
    'College students',
    'Students considering a course change',
    'Students exploring higher education',
    'Students who are uncertain about their career direction',
    'Parents seeking academic guidance for their children',
  ];

  const counsellingAreas = [
    {
      num: '1',
      title: 'Subject & Stream Guidance',
      desc: 'Guidance while choosing or evaluating academic streams such as Biology, Mathematics, Computer Science, Commerce, Humanities, Pure Science, or custom combinations based on interests, academic performance, and future opportunities.',
      icon: <BookOpen className="w-5 h-5 text-red-500" />
    },
    {
      num: '2',
      title: 'Competitive Examination Guidance',
      desc: 'Guidance regarding examination selection, eligibility, preparation requirements, syllabus planning, attempt strategy, timelines, revision planning, mock-test strategy, and alternative options before committing significant time and resources.',
      icon: <Compass className="w-5 h-5 text-blue-500" />
    },
    {
      num: '3',
      title: 'Course Selection',
      desc: 'Help students compare different educational pathways, factor in course duration, academic requirements, entrance exams, scope of further education, career pathways, workload, and alternatives rather than making choices based on social pressure.',
      icon: <Scale className="w-5 h-5 text-emerald-500" />
    },
    {
      num: '4',
      title: 'Medical & Allied Health Pathways',
      desc: 'Comprehensive coverage of MBBS, BDS, AYUSH programmes, Nursing, Allied Health Sciences, Paramedical programmes, Veterinary pathways, and other healthcare options tailored to student academic profiles.',
      icon: <Stethoscope className="w-5 h-5 text-purple-500" />
    },
    {
      num: '5',
      title: 'Higher Education Guidance',
      desc: 'Strategic guidance for students planning their next stage after school or undergraduate education: undergraduate & postgraduate pathways, professional courses, specializations, further study, and research-oriented pathways.',
      icon: <GraduationCap className="w-5 h-5 text-amber-500" />
    }
  ];

  const sixStages = [
    { step: '01', title: 'Understand', desc: 'We first understand the student\'s academic background, present situation, interests, and goals.' },
    { step: '02', title: 'Analyse', desc: 'The student\'s academic position and available pathways are considered.' },
    { step: '03', title: 'Explore', desc: 'Relevant educational and career options are discussed.' },
    { step: '04', title: 'Compare', desc: 'Students are encouraged to understand advantages, requirements, challenges, and commitments.' },
    { step: '05', title: 'Decide', desc: 'The student can make a more informed academic decision.' },
    { step: '06', title: 'Plan', desc: 'Where appropriate, the next steps and preparation pathway are structured.' },
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
              <GraduationCap className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>Academic Counselling Services</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight uppercase max-w-4xl mx-auto leading-tight">
              Academic Counselling
            </h1>

            <p className="text-base sm:text-2xl font-black text-red-600 dark:text-red-400 max-w-3xl mx-auto tracking-wide">
              Understand Your Options. Make Informed Decisions. Move Forward with Direction.
            </p>

            <div className="max-w-3xl mx-auto space-y-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed pt-2">
              <p>
                At LearnDawn India, Academic Counselling is designed to help students make informed academic decisions at important stages of their educational journey.
              </p>
              <p>
                Students and parents often face confusion about subjects, courses, entrance examinations, career pathways, preparation strategies, higher education, and the next step after school or college.
              </p>
              <p className="font-semibold text-slate-900 dark:text-white">
                Our counselling approach focuses on understanding the student&apos;s academic background, interests, strengths, goals, and available opportunities before providing structured guidance.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/career-guidance/register"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-red-600/30 active:scale-95 cursor-pointer"
              >
                <span>Book an Academic Counselling Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. WHAT IS ACADEMIC COUNSELLING & WHO CAN SEEK IT         */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* What is Academic Counselling? */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-red-500">Methodology</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  What is Academic Counselling?
                </h2>
                <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                  Academic Counselling is a personalized guidance process that helps students understand their educational options and make suitable academic decisions.
                </p>
                <p className="text-xs text-slate-500 dark:text-zinc-400">
                  Instead of giving a one-size-fits-all answer, LearnDawn counsellors assess the student&apos;s situation and help them understand:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Where they are currently',
                  'Where they want to go',
                  'What options are available',
                  'What requirements each pathway has',
                  'What preparation is necessary',
                  'What challenges they may encounter',
                  'What alternative pathways are available',
                ].map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 text-xs font-semibold text-slate-800 dark:text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-xs sm:text-sm font-bold text-red-600 dark:text-red-400">
                The objective is to replace confusion with clarity.
              </div>
            </div>

            {/* Who Can Seek Academic Counselling? */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">Beneficiaries</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Who Can Seek Academic Counselling?
              </h3>
              <p className="text-xs text-slate-500">LearnDawn Academic Counselling can support:</p>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-zinc-300">
                {whoCanSeek.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. AREAS OF COUNSELLING                                   */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-t border-slate-200 dark:border-zinc-800/80">
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">Comprehensive Scope</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
                AREAS OF COUNSELLING
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
                Targeted guidance across critical decision points in secondary and higher education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {counsellingAreas.map((area) => (
                <div
                  key={area.num}
                  className="p-7 rounded-3xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 hover:border-red-500/40 transition space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800">
                        {area.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">0{area.num}</span>
                    </div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {area.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. COUNSELLING FOR STUDENTS WHO ARE UNSURE & PARENTS       */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-t border-slate-200 dark:border-zinc-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* For Students Who Are Unsure */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-zinc-800 space-y-6 shadow-xl">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Empathetic Guidance</span>
                <h3 className="text-2xl font-extrabold tracking-tight">
                  Counselling for Students Who Are Unsure
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Not every student has a clear career goal. Some students know they want a successful career but are unsure which course or pathway is right for them.
                </p>
                <p className="text-sm font-bold text-white">
                  That is completely different from being without potential.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  LearnDawn counselling helps such students explore their options systematically instead of making rushed decisions.
                </p>
              </div>

              {/* Progression */}
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">We help students move from:</span>
                <p className="text-sm font-black text-red-400 tracking-wide">
                  Confusion → Exploration → Understanding → Decision → Direction
                </p>
              </div>
            </div>

            {/* Parent-Student Academic Guidance */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-red-500">Collaborative Dialogue</span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Parent–Student Academic Guidance
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  Academic decisions often affect both students and families. Where appropriate, counselling can help establish a constructive discussion between the student and parent regarding:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 dark:text-zinc-300 pt-1">
                  {[
                    'Academic expectations',
                    'Preparation requirements',
                    'Career interests',
                    'Course choices',
                    'Competitive examinations',
                    'Available alternatives',
                    'Long-term educational planning'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-xs text-slate-600 dark:text-zinc-400 font-medium">
                The aim is to ensure that academic decisions are based on understanding rather than fear, comparison, or external pressure.
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. OUR COUNSELLING APPROACH (6 STAGES)                    */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-t border-slate-200 dark:border-zinc-800/80">
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">Structured Process</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
                OUR COUNSELLING APPROACH
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
                LearnDawn follows a disciplined 6-stage roadmap to arrive at sound academic decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sixStages.map((s) => (
                <div key={s.step} className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-3">
                  <span className="text-xs font-mono font-bold text-red-500">{s.step} — {s.title}</span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{s.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Counselling Is Not Forced Decision-Making */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white border border-zinc-800 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Ethical Boundaries</span>
              </div>
              <h3 className="text-xl font-bold">Counselling Is Not Forced Decision-Making</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                LearnDawn Academic Counselling does not aim to make decisions on behalf of students. Our role is to provide:
              </p>
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-center font-bold text-xs sm:text-sm text-red-400 uppercase tracking-wider">
                Information + Perspective + Guidance + Direction
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                The final academic decision should be made by the student and their family after considering their individual circumstances and, where necessary, appropriate professional or institutional advice.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. WHY IT MATTERS & CTA                                   */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                The goal is not simply to choose a career.
              </h2>
              <p className="text-sm font-semibold text-red-100">
                The goal is to understand the pathway before choosing it.
              </p>
              <p className="text-xs text-red-200">
                A wrong academic decision can cost a student significant time, money, and emotional energy.
              </p>
            </div>
            <Link
              href="/career-guidance/register"
              className="px-8 py-3.5 rounded-2xl bg-white text-red-600 hover:bg-red-50 font-bold text-xs uppercase tracking-wider transition shadow-lg shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Book a Counselling Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
