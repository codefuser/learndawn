import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { ExamService } from '@/services/exams';
import { BookOpen, CheckCircle, ArrowRight, Award, ShieldCheck } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = await ExamService.getAcademicProgramBySlug(slug);
  if (!program) return { title: 'Program Not Found | Learndawn India' };

  return {
    title: `${program.title} | Learndawn Academic Foundation`,
    description: program.description,
  };
}

export default async function AcademicProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = await ExamService.getAcademicProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1 pb-20">
        <section className="py-14 sm:py-20 bg-gradient-to-b from-red-900 via-slate-900 to-slate-950 text-white">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/academics" className="hover:text-white">Academics</Link>
              <span>/</span>
              <span className="text-red-400 font-semibold">{program.board}</span>
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider border border-red-500/30">
              {program.badge_label}
            </span>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              {program.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              {program.description}
            </p>
          </div>
        </section>

        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <BookOpen className="w-6 h-6 text-red-500" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Textbook Line-by-Line
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Complete coverage of every textbook exercise, in-text concept check, and official board exemplar question.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <Award className="w-6 h-6 text-red-500" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Answer Writing Clinics
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Learn step-marking optimization to guarantee maximum scores on subjective board questions and lab records.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <ShieldCheck className="w-6 h-6 text-amber-500" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Competitive Bridge
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Seamless transition into NEET and JEE problem formats without causing academic overload during school terms.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-red-600 to-red-600 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-2xl font-bold">Enroll in {program.title}</h3>
              <p className="text-xs text-red-100 mt-1 max-w-lg">
                Includes all live classes, lecture recordings, weekly board model assessments, and 1:1 doubts.
              </p>
            </div>
            <Link
              href="/auth/sign-up"
              className="px-6 py-3 rounded-xl bg-white text-red-600 font-bold text-xs shadow-md hover:bg-slate-100 transition whitespace-nowrap"
            >
              Get Started for Free
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
