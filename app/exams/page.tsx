import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { ExamService } from '@/services/exams';
import { GraduationCap, ArrowRight, CheckCircle2, Sparkles, BookOpen, Layers } from 'lucide-react';

export const metadata = {
  title: 'Competitive Exams | NEET UG, JEE Main, CUET, AIIMS',
  description: 'Explore comprehensive entrance exam programs for NEET UG, JEE Main, CUET, AIIMS Nursing, and Paramedical exams with verified faculty and mock test series.',
};

export default async function ExamsPage() {
  const exams = await ExamService.getAllExams();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Header */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>National Examination Pathways</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Target Competitive Examinations
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Curated entrance programs engineered with NCERT line-by-line decoding, full simulated NTA CBT mock test series, and 1:1 strategy calls with top rankers.
            </p>
          </div>
        </section>

        {/* Exams Grid */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exams.map((exam) => (
              <div
                key={exam.id}
                className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-2xl hover:-translate-y-1 transition duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {exam.badge_label}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {exam.short_code}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {exam.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exam.tagline}
                  </p>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-500" />
                      <span>{exam.subjects_count} Core Subjects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-emerald-500" />
                      <span>{exam.mock_tests_count} CBT Mock Tests</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    {exam.students_enrolled} Learners
                  </span>
                  <Link
                    href={`/exams/${exam.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md transition"
                  >
                    <span>View Curriculum</span>
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
