import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { CourseService } from '@/services/courses';
import { VideoPlayer } from '@/components/learning/VideoPlayer';
import { 
  GraduationCap, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Star,
  Layers,
  ArrowRight
} from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = await CourseService.getCourseBySlug(slug);
  if (!course) return { title: 'Course Not Found | Learndawn India' };

  return {
    title: `${course.title} | Learndawn India`,
    description: course.subtitle,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await CourseService.getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Course Header Banner */}
        <section className="py-12 bg-slate-900 text-white border-b border-slate-800">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/courses" className="hover:text-white">Courses</Link>
              <span>/</span>
              <span className="text-blue-400 font-semibold">{course.difficulty_level}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
                {course.difficulty_level} Batch
              </span>
              <span className="text-xs text-slate-400 font-medium">{course.language}</span>
              {course.rating && (
                <span className="flex items-center gap-1 text-xs text-amber-300 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <span>{course.rating} ({course.review_count} ratings)</span>
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              {course.title}
            </h1>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              {course.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span>Lead Faculty: <strong>{course.instructor_name}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>{course.duration_hours} Total Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>{course.total_lectures} Lessons & Exercises</span>
              </div>
            </div>
          </div>
        </section>

        {/* Video Lesson & Curriculum Preview */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-10 space-y-10">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              Sample Lesson Preview & Player
            </h2>
            <p className="text-xs text-slate-500 mb-4">
              Explore the student lecture interface, DRM secure video shell, synchronized notes, and downloadable material.
            </p>
            <VideoPlayer courseTitle={course.title} sections={course.sections} />
          </div>

          {/* Instructor Bio & Course Scope */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Course Comprehensive Overview
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {course.description}
              </p>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  What You Will Master in This Batch
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Complete NCERT statement annotations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Previous 15-year entrance paper drills</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Weekly timed CBT full-length test series</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Personalized 1:1 strategy & doubt clearing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructor Profile Card */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 h-fit">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Lead Educator
              </h4>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-lg">
                  {course.instructor_name.charAt(0)}
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                    {course.instructor_name}
                  </h5>
                  <span className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
                    Master Faculty
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {course.instructor_bio || 'Distinguished academic leader with over a decade of experience guiding competitive aspirants to AIR top ranks.'}
              </p>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Verified Learndawn Instructor</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
