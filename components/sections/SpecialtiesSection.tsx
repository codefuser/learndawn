import React from 'react';
import Link from 'next/link';
import { 
  UserCheck, 
  Compass, 
  Layers, 
  Users, 
  Sliders, 
  Languages, 
  BookOpen, 
  CheckCircle2, 
  Lightbulb, 
  Award, 
  GraduationCap, 
  HeartHandshake, 
  Wallet, 
  Stethoscope, 
  MessageSquare, 
  LineChart,
  Flame,
  ArrowRight
} from 'lucide-react';

export const SpecialtiesSection: React.FC = () => {
  const specialties = [
    {
      id: '01',
      icon: <UserCheck className="w-5 h-5 text-indigo-500" />,
      title: 'Personalised 1:1 Mentorship',
      badge: 'Individual Care',
      description: 'Individual academic guidance, preparation planning, progress monitoring and continuous mentor support.',
      link: '/mentorship',
    },
    {
      id: '02',
      icon: <Compass className="w-5 h-5 text-purple-500" />,
      title: 'Academic Counselling',
      badge: 'Direction',
      description: 'Helping students understand their academic strengths, challenges, career options and appropriate preparation pathway.',
      link: '/academic-counselling',
    },
    {
      id: '03',
      icon: <Layers className="w-5 h-5 text-blue-500" />,
      title: 'Multi-Level Preparation System',
      badge: 'Pedagogy',
      description: 'Lecture → Revision → Foundation Check → Error Check → Conceptual Check → PYQ Analysis → DMM → Consistency.',
      link: '/learning-system',
    },
    {
      id: '04',
      icon: <Users className="w-5 h-5 text-emerald-500" />,
      title: 'Mentorship + Group Learning',
      badge: 'Dual Model',
      description: 'Combining personal mentorship with collaborative live classes, discussions and peer learning rather than depending on only one teaching model.',
      link: '/about#onepod',
    },
    {
      id: '05',
      icon: <Sliders className="w-5 h-5 text-amber-500" />,
      title: 'Student-Centred Learning',
      badge: 'Adaptive',
      description: 'The preparation system can be adapted according to the student\'s level, language ability, academic background and learning needs.',
    },
    {
      id: '06',
      icon: <Languages className="w-5 h-5 text-sky-500" />,
      title: 'Tamil + English Academic Support',
      badge: 'Bilingual',
      description: 'Particularly useful for students who understand concepts better in Tamil but need to gradually develop English-based competitive-exam comprehension.',
    },
    {
      id: '07',
      icon: <BookOpen className="w-5 h-5 text-red-500" />,
      title: 'NCERT-Centred Preparation',
      badge: 'Exam Focused',
      description: 'Strong emphasis on NCERT concepts, line-by-line understanding, application and NEET-oriented question practice.',
      link: '/courses',
    },
    {
      id: '08',
      icon: <CheckCircle2 className="w-5 h-5 text-rose-500" />,
      title: 'Error Identification & Correction',
      badge: 'Diagnostics',
      description: 'LearnDawn doesn\'t stop at giving marks. The assessment system identifies why a student lost marks and directs the next stage of preparation.',
    },
    {
      id: '09',
      icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
      title: 'Conceptual Learning Over Rote Learning',
      badge: 'Deep Mastery',
      description: 'Focus on understanding the reason behind a concept and applying it to unfamiliar questions.',
    },
    {
      id: '10',
      icon: <Award className="w-5 h-5 text-teal-500" />,
      title: 'Dedicated Test & Assessment Ecosystem',
      badge: 'Evaluation',
      description: 'Foundation checks, error checks, conceptual evaluations, PYQs, OMR practice and advanced modules provide multiple checkpoints.',
      link: '/practice',
    },
    {
      id: '11',
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
      title: 'Career Guidance Beyond NEET',
      badge: 'Broad Pathways',
      description: 'Supporting students in understanding medical, dental, AYUSH, veterinary, nursing, allied-health and other higher-education pathways.',
      link: '/career-guidance',
    },
    {
      id: '12',
      icon: <HeartHandshake className="w-5 h-5 text-pink-500" />,
      title: 'Student Welfare & Support',
      badge: 'Well-being',
      description: 'Academic support is combined with counselling, student assistance and a structured support desk.',
      link: '/student-desk',
    },
    {
      id: '13',
      icon: <Wallet className="w-5 h-5 text-emerald-600" />,
      title: 'Affordable & Accessible Education',
      badge: 'Inclusion',
      description: 'A digital-first model allows students to access structured academic support without depending entirely on expensive physical coaching infrastructure.',
    },
    {
      id: '14',
      icon: <Stethoscope className="w-5 h-5 text-red-600" />,
      title: 'Medical-Student & Doctor-Led Ecosystem',
      badge: 'Expert Network',
      description: 'Connecting aspirants with medical students, doctors, house surgeons, nurses and allied-health professionals for academic and career guidance.',
    },
    {
      id: '15',
      icon: <MessageSquare className="w-5 h-5 text-violet-500" />,
      title: 'Language-Sensitive Education',
      badge: 'State Board Friendly',
      description: 'Especially designed to reduce the barrier faced by students transitioning from Tamil-medium/state-board education into English-heavy competitive preparation.',
    },
    {
      id: '16',
      icon: <LineChart className="w-5 h-5 text-teal-600" />,
      title: 'Continuous Progress Tracking',
      badge: 'Accountability',
      description: 'Preparation is treated as a journey of repeated assessment, correction, improvement and consistency rather than simply completing lectures.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-zinc-50 dark:bg-[#070709] border-b border-zinc-200 dark:border-zinc-900 transition-colors">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider mb-3 border border-zinc-200 dark:border-zinc-800 shadow-xs">
            <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>Institutional Strengths</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Specialties of LearnDawn
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-xl mx-auto">
            16 foundational pillars defining our personalized, student-centered digital education approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {specialties.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800/80 shadow-xs hover:shadow-xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-red-500 tracking-wider">
                      {item.id}
                    </span>
                    <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-zinc-950 dark:text-white group-hover:text-red-500 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <div className="pt-4 mt-3 border-t border-zinc-100 dark:border-zinc-900">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 dark:text-red-400 hover:underline"
                  >
                    <span>Explore Program</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

