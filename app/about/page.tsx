import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { 
  Compass, 
  Lightbulb, 
  Heart, 
  ShieldCheck, 
  Users, 
  BookOpen, 
  Award, 
  MapPin,
  CheckCircle2
} from 'lucide-react';

export const metadata = {
  title: 'About Us | Learndawn India Digital Learning Academy',
  description: 'Learn about the vision, mission, academic council, and scientific pedagogy driving Learndawn India.',
};

export default function AboutPage() {
  const pillars = [
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
      title: 'Conceptual Depth First',
      desc: 'We discard superficial tricks and rote memorization in favor of deep conceptual mastery that survives exam day stress.',
    },
    {
      icon: <Users className="w-6 h-6 text-red-500" />,
      title: 'Top Ranker Mentorship',
      desc: 'Our academic guidance council consists of AIIMS doctors and IITians who understand the psychological journey of aspirants.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
      title: 'Student-First Integrity',
      desc: 'Transparent pricing, zero spam telemarketing, and complete data privacy protection under Indian data governance standards.',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-purple-500" />,
      title: 'Rigorous Curriculum Pacing',
      desc: 'Structured syllabus pacing synchronized with school boards to prevent learner burnout.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Header */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-red-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-red-500" />
              <span>Our Academic Charter</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              About LearnDawn India
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              LearnDawn India is a standalone digital education and mentorship institution focused on making competitive, academic, and career-oriented education more accessible and affordable.
            </p>
          </div>
        </section>

        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-12 space-y-16">
          {/* Section: Vision and Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Our Founding Vision
              </h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-semibold">
                LearnDawn India is a standalone digital education and mentorship institution focused on making competitive, academic, and career-oriented education more accessible and affordable.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                LearnDawn combines teaching, mentorship, counselling, testing, study materials, and student support into one learning ecosystem rather than treating coaching as only classroom teaching.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                India is home to the most aspirational student body in the world. Learndawn was engineered as a transformative digital sanctuary where world-class education is accessible at a fraction of the cost, delivered directly into the hands of ambitious students through modern web and mobile technology.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl border border-slate-800">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Academic Manifesto</span>
              </div>
              <h3 className="text-xl font-bold">Uncompromising Quality Over Gimmicks</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We believe that clearing examinations like NEET UG, JEE Main, or AIIMS Nursing requires authentic problem-solving grit. We don&apos;t offer shortcuts; we provide unyielding academic support, precise conceptual breakdowns, and continuous accountability until rank day.
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Tamil Nadu | Andhra Pradesh</span>
                <span className="text-emerald-400 font-semibold">24/7 Online Student Support</span>
              </div>
            </div>
          </div>

          {/* Pillars of Pedagogy */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Our Educational Philosophy
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                Scientific learning design built upon spaced repetition, active recall, and continuous diagnostic evaluation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3"
                >
                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-fit">
                    {p.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Policies & Institutional Governance */}
          <section id="guidelines" className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Institutional Governance & Integrity Policies
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Learndawn operates strictly in accordance with ethical education guidelines. All faculty qualifications, past selections, and study notes undergo internal peer review. We maintain a zero-tolerance policy towards fraudulent test promises, pirated materials, and deceptive marketing.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
