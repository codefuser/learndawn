import { notFound } from 'next/navigation';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { ExamService } from '@/services/exams';
import { CourseService } from '@/services/courses';
import { MaterialService } from '@/services/materials';
import { QuestionService } from '@/services/questions';
import { ExamPageTemplate } from '@/components/exams/ExamPageTemplate';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exam = await ExamService.getExamBySlug(slug);
  if (!exam) return { title: 'Exam Not Found | Learndawn India' };

  return {
    title: `${exam.title} Preparation Academy | Learndawn India`,
    description: exam.tagline,
  };
}

export default async function DynamicExamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exam = await ExamService.getExamBySlug(slug);

  if (!exam) {
    notFound();
  }

  const [subjects, allCourses, materials, questions] = await Promise.all([
    ExamService.getSubjectsForExam(slug),
    CourseService.getAllCourses(),
    MaterialService.getMaterialsByExam(slug),
    QuestionService.getQuestions(),
  ]);

  // Filter courses relevant to this exam
  const relevantCourses = allCourses.filter(
    (c) => !c.exam_id || c.exam_id === exam.id || c.title.toLowerCase().includes(exam.short_code.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="flex-1">
        <ExamPageTemplate
          exam={exam}
          subjects={subjects}
          courses={relevantCourses.length > 0 ? relevantCourses : allCourses.slice(0, 2)}
          materials={materials}
          sampleQuestions={questions}
        />
      </main>
      <Footer />
    </div>
  );
}
