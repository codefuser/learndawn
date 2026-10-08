import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { ExamService } from '@/services/exams';
import { BookOpen, Sparkles, ArrowRight, Award, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Academic Programs | CBSE & State Board Classes 9 to 12',
  description: 'Structured school curriculum programs for CBSE Class 9, 10, 11, 12 and State Board Class 11 and 12 with dual board and entrance alignment.',
};

export default async function AcademicsPage() {
  const programs = await ExamService.getAllAcademicPrograms();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1 pb-20">
        <section className="py-14 sm:py-20 bg-gradient-to-b from-indigo-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Foundation & Senior Secondary</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Academic School Programs
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Dual-target mastery: Secure 95%+ in Board examinations while building seamless foundational aptitude for national competitive exams.
            </p>
          </div>
        </section>

        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog) => (
              <div
                key={prog.id}
                className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 flex flex-col justify-between hover:border-indigo-500/50 hover:shadow-2xl hover:-translate-y-1 transition duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">
                      {prog.badge_label}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {prog.board}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>Exemplar & NCERT Question Drills</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>Blue-print Board Model Papers</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    {prog.class_level}
                  </span>
                  <Link
                    href={`/academics/${prog.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-md transition"
                  >
                    <span>View Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
