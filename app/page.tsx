import { Navbar } from '@/components/navbar/Navbar';
import { Hero } from '@/components/hero/Hero';
import { WelcomeSection } from '@/components/sections/WelcomeSection';
import { GoalSelectionSection } from '@/components/sections/GoalSelectionSection';
import { SearchBannerSection } from '@/components/sections/SearchBannerSection';
import { SpecialtiesSection } from '@/components/sections/SpecialtiesSection';
import { FeaturedCoursesSection } from '@/components/sections/FeaturedCoursesSection';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { StudentOutcomesSection } from '@/components/sections/StudentOutcomesSection';
import { LearningEcosystemSection } from '@/components/sections/LearningEcosystemSection';
import { WhyLearndawnSection } from '@/components/sections/WhyLearndawnSection';
import { AboutTeaserSection } from '@/components/sections/AboutTeaserSection';
import { ContactTeaserSection } from '@/components/sections/ContactTeaserSection';
import { Footer } from '@/components/footer/Footer';

export const metadata = {
  title: 'Learndawn India | Premier Digital Learning Academy',
  description: 'A standalone digital learning institution for competitive exams (NEET UG, JEE Main, CUET, AIIMS), academics, mentorship, and career guidance.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 selection:bg-red-500/30 selection:text-white w-full">
      <Navbar />
      <main className="flex-1 w-full overflow-x-clip">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Institutional Welcome */}
        <WelcomeSection />

        {/* 3. Select Your Goal Exam */}
        <GoalSelectionSection />

        {/* 4. Universal Search */}
        <SearchBannerSection />

        {/* 5. Specialties of Learndawn (All 16 client pillars) */}
        <SpecialtiesSection />

        {/* 6. Start Learning / Featured Batches */}
        <FeaturedCoursesSection />

        {/* 7. Institutional Milestones (9 exact metrics) */}
        <StatisticsSection />

        {/* 8. Student Achievements & Educational Outcomes */}
        <StudentOutcomesSection />

        {/* 9. Learning Ecosystem */}
        <LearningEcosystemSection />

        {/* 10. Why Learndawn */}
        <WhyLearndawnSection />

        {/* 11. About Learndawn */}
        <AboutTeaserSection />

        {/* 12. Contact / Reach Out */}
        <ContactTeaserSection />
      </main>
      <Footer />
    </div>
  );
}
