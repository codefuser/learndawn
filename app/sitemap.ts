import { MetadataRoute } from 'next';
import { EXAMS_DATA, ACADEMIC_PROGRAMS_DATA, COURSES_DATA, STUDY_MATERIALS_DATA } from '@/lib/data/mockData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://learndawn.in';

  const staticRoutes = [
    '',
    '/exams',
    '/academics',
    '/courses',
    '/learning-system',
    '/mentorship',
    '/career-guidance',
    '/career-guidance/register',
    '/academic-counselling',
    '/careers',
    '/careers/apply',
    '/student-desk',
    '/mental-health',
    '/resources',
    '/about',
    '/contact',
    '/auth/sign-in',
    '/auth/sign-up',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const examRoutes = EXAMS_DATA.map((exam) => ({
    url: `${baseUrl}/exams/${exam.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const academicRoutes = ACADEMIC_PROGRAMS_DATA.map((prog) => ({
    url: `${baseUrl}/academics/${prog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const courseRoutes = COURSES_DATA.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const resourceRoutes = STUDY_MATERIALS_DATA.map((mat) => ({
    url: `${baseUrl}/resources/${mat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...examRoutes,
    ...academicRoutes,
    ...courseRoutes,
    ...resourceRoutes,
  ];
}
