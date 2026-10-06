'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { MENTORS_DATA } from '@/lib/data/mockData';
import { useAuth } from '@/lib/auth/context';
import { useToast } from '@/components/ui/Toast';
import { 
  HeartHandshake, 
  Sparkles, 
  Star, 
  Calendar, 
  CheckCircle, 
  Compass, 
  Clock, 
  ShieldCheck, 
  Stethoscope, 
  Cpu, 
  Building2, 
  Activity, 
  HeartPulse,
  ArrowRight
} from 'lucide-react';

import { CounsellingService } from '@/services/counselling';

export default function MentorshipPage() {
  const { user, openAuthModal } = useAuth();
  const { showToast } = useToast();
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null);
  const [bookingSlot, setBookingSlot] = useState<string>('');
  const [counsellingCategory, setCounsellingCategory] = useState('career_guidance');
  const [targetEntrance, setTargetEntrance] = useState('NEET UG 2025');
  const [counsellingSubmitted, setCounsellingSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookSession = async (mentorName: string) => {
    if (!user) {
      openAuthModal('/mentorship');
      return;
    }

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const res = await CounsellingService.bookMentorSession({
      userId: user.id,
      mentorName,
      scheduledFor: bookingSlot || tomorrow.toISOString(),
    });

    showToast(res.message, 'success');
    setSelectedMentor(null);
  };

  const handleCounsellingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      openAuthModal('/mentorship');
      return;
    }

    setIsSubmitting(true);
    const res = await CounsellingService.requestCounselling({
      userId: user.id,
      category: counsellingCategory,
      targetExam: targetEntrance,
    });
    setIsSubmitting(false);

    setCounsellingSubmitted(true);
    showToast(res.message, 'success');
  };

  const careerCategories = [
    {
      title: 'Medical Sciences (MBBS, BDS, AYUSH)',
      exam: 'NEET UG',
      pathway: '10+2 (PCB) → NEET UG → All India / State Quota Counselling → 5.5 Years Clinical Training',
      icon: <Stethoscope className="w-5 h-5 text-sky-500" />,
    },
    {
      title: 'Engineering & Computing (IIT, NIT, IIIT)',
      exam: 'JEE Main & Advanced',
      pathway: '10+2 (PCM) → JEE Main → JoSAA Counselling / JEE Advanced → 4 Years B.Tech / Dual Degree',
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
    },
    {
      title: 'Premier Nursing Care (AIIMS, JIPMER)',
      exam: 'AIIMS B.Sc Nursing',
      pathway: '10+2 (PCB Female) → AIIMS Entrance → 4 Years B.Sc (Hons) Nursing + Clinical Internship',
      icon: <HeartPulse className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: 'Clinical Paramedical & Diagnostic Sciences',
      exam: 'AIIMS Paramedical Entrance',
      pathway: '10+2 (PCB/PCM) → AIIMS Entrance → Medical Lab Tech, Radiography, Operation Theatre Tech',
      icon: <Activity className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Central & State University Programs',
      exam: 'CUET (UG)',
      pathway: '10+2 → CUET (Domain + Aptitude) → CSAS / DU / BHU / JNU Single-Window Allotment',
      icon: <Building2 className="w-5 h-5 text-purple-500" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Hero Section */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5 text-blue-500" />
              <span>Personalized Guidance</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              1:1 Mentorship & Career Counselling
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Connect one-on-one with AIIMS doctors, IIT Bombay rankers, and seasoned academic advisors to refine your timetable, conquer test anxiety, and plan your career pathway.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
          {/* Section 1: Mentors Roster */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Meet Our Verified Ranker Mentors
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Every mentor on Learndawn is personally verified with top percentile scores and proven teaching empathy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MENTORS_DATA.map((mentor) => (
                <div
                  key={mentor.id}
                  id={mentor.id}
                  className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-500/40 transition group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xl flex items-center justify-center shadow-md">
                        {mentor.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                          {mentor.name}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold mt-0.5">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span>{mentor.rating} ({mentor.total_sessions}+ sessions)</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs font-medium text-blue-600 dark:text-blue-400 line-clamp-1">
                      {mentor.headline}
                    </p>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {mentor.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {mentor.expertise_tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Next Slot: <strong>{mentor.available_slots?.[0] || 'Available tomorrow'}</strong></span>
                    </div>

                    <button
                      onClick={() => handleBookSession(mentor.name)}
                      className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book 1:1 Strategy Call</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Book Counselling Session */}
          <section id="counselling" className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl space-y-6 relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Institutional Guidance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Book an Academic Counselling Session
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Confused about stream selection after Class 10? Unsure whether to take a drop year for NEET or explore AIIMS Paramedical courses? Our professional career counsellors provide unbiased guidance.
              </p>

              {counsellingSubmitted ? (
                <div className="p-6 rounded-2xl bg-white/10 border border-white/20 text-center space-y-2">
                  <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Counselling Session Scheduled</h4>
                  <p className="text-xs text-slate-300">
                    Our lead counselor will connect with your registered contact within 24 hours to conduct your personalized assessment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCounsellingSubmit} className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Counselling Category
                      </label>
                      <select
                        value={counsellingCategory}
                        onChange={(e) => setCounsellingCategory(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="career_guidance" className="bg-slate-900">Career Pathway & Stream Guidance</option>
                        <option value="exam_strategy" className="bg-slate-900">Entrance Strategy & Score Booster</option>
                        <option value="college_choice" className="bg-slate-900">College & Quota Choice Filling</option>
                        <option value="mental_wellness" className="bg-slate-900">Exam Anxiety & Motivation Support</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Target Entrance or Board
                      </label>
                      <input
                        type="text"
                        required
                        value={targetEntrance}
                        onChange={(e) => setTargetEntrance(e.target.value)}
                        placeholder="e.g. NEET UG 2025 or Class 12 Boards"
                        className="w-full px-3 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg transition flex items-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    <span>{isSubmitting ? 'Recording Request...' : 'Request Academic Counselling'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </section>

          {/* Section 3: Career Guidance Pathways */}
          <section id="career" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Career Guidance Pathways
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Explore eligibility, required entrance tests, and progression pathways across high-impact professions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerCategories.map((career, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-fit">
                      {career.icon}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {career.title}
                    </h3>
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      Gateway Exam: {career.exam}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {career.pathway}
                    </p>
                  </div>

                  <button
                    onClick={() => handleBookSession('Career Guidance Counselor')}
                    className="pt-3 border-t border-slate-200 dark:border-slate-800 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-between"
                  >
                    <span>Discuss Pathway with Expert</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
