import { Navbar } from '@/components/navbar/Navbar';
import { Hero } from '@/components/hero/Hero';
import { GoalSelectionSection } from '@/components/sections/GoalSelectionSection';
import { SearchBannerSection } from '@/components/sections/SearchBannerSection';
import { SpecialtiesSection } from '@/components/sections/SpecialtiesSection';
import { FeaturedCoursesSection } from '@/components/sections/FeaturedCoursesSection';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { LearningEcosystemSection } from '@/components/sections/LearningEcosystemSection';
import { WhyLearndawnSection } from '@/components/sections/WhyLearndawnSection';
import { AboutTeaserSection } from '@/components/sections/AboutTeaserSection';
import { ContactTeaserSection } from '@/components/sections/ContactTeaserSection';
import { Footer } from '@/components/footer/Footer';

export const metadata = {
  title: 'Learndawn India | Premier Digital Learning Academy',
  description: 'A digital learning academy for competitive exams (NEET UG, JEE Main, CUET, AIIMS), academics, skills, mentorship, and career guidance.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 selection:bg-red-500/30 selection:text-white w-full">
      <Navbar />
      <main className="flex-1 w-full overflow-x-clip">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Select Your Goal Exam */}
        <GoalSelectionSection />

        {/* 3. Universal Search */}
        <SearchBannerSection />

        {/* 4. Specialties of Learndawn */}
        <SpecialtiesSection />

        {/* 5. Start Learning / Featured Batches */}
        <FeaturedCoursesSection />

        {/* 6. Platform Statistics */}
        <StatisticsSection />

        {/* 7. Learning Ecosystem */}
        <LearningEcosystemSection />

        {/* 8. Why Learndawn */}
        <WhyLearndawnSection />

        {/* 9. About Learndawn */}
        <AboutTeaserSection />

        {/* 10. Contact / Reach Out */}
        <ContactTeaserSection />
      </main>
      <Footer />
    </div>
  );
}
