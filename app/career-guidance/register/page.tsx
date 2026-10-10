'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { CounsellingService } from '@/services/counselling';
import { CareerCounsellingFormValues } from '@/types';
import { 
  Compass, 
  User, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Sparkles,
  HelpCircle,
  FileCheck2
} from 'lucide-react';

export default function CareerCounsellingRegistrationPage() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<CareerCounsellingFormValues>({
    fullName: '',
    dobOrAge: '',
    mobile: '',
    email: '',
    cityDistrictState: '',
    currentClass: '',
    schoolCollegeName: '',
    academicStream: '',
    recentAcademicPerformance: '',
    preferredCareerCourse: '',
    areasOfInterest: '',
    entranceExam: '',
    careerConcern: '',
    preferredMode: 'Online',
    preferredDate: minDateString,
    preferredTimeSlot: '4:00 PM – 5:00 PM IST',
    attendees: 'Student',
    guidanceTopics: '',
    declarationConfirmed: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.dobOrAge.trim() || !formData.mobile.trim() || 
        !formData.email.trim() || !formData.cityDistrictState.trim() || !formData.currentClass.trim() ||
        !formData.academicStream.trim() || !formData.preferredCareerCourse.trim() || 
        !formData.areasOfInterest.trim() || !formData.careerConcern.trim() || !formData.preferredDate) {
      setErrorMessage('Please fill in all mandatory fields marked with an asterisk (*).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.declarationConfirmed) {
      setErrorMessage('Please check the confirmation declaration to proceed.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const res = await CounsellingService.registerCareerCounselling(formData);
      if (res.success) {
        setSubmitted(true);
        setSuccessMessage(res.message);
      } else {
        setErrorMessage(res.message);
      }
    } catch {
      setErrorMessage('Failed to submit registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#07070a] text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      <main className="flex-1 py-20 sm:py-28">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Header Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 shadow-xl text-center space-y-6">
            <div className="flex justify-center">
              <BrandLogo size="lg" />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>1:1 Mentorship &amp; Direction</span>
              </span>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                CAREER COUNSELLING REGISTRATION
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 max-w-xl mx-auto">
                Register for a one-to-one career counselling session with a LearnDawn Career Counsellor.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="mt-8 p-6 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-3 max-w-md mx-auto">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Registration Submitted
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {successMessage}
                  </p>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950 text-xs text-slate-500 space-y-1 text-left">
                    <p className="font-semibold text-slate-800 dark:text-zinc-200">Next Steps:</p>
                    <p>1. Our academic counselling coordination desk will review your requirements.</p>
                    <p>2. You will receive an official session confirmation via email / WhatsApp with meeting coordinates.</p>
                  </div>
                </div>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/career-guidance"
                    className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 font-semibold text-xs transition"
                  >
                    Back to Career Guidance
                  </Link>
                  <Link
                    href="/"
                    className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs transition shadow-md shadow-red-600/20"
                  >
                    Return Home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 text-xs sm:text-sm">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* ========================================================= */}
                {/* SECTION A: Student Details                                */}
                {/* ========================================================= */}
                <div className="space-y-4">
                  <div className="border-b border-slate-200 dark:border-zinc-800 pb-2">
                    <h2 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                      <User className="w-4 h-4 text-red-500" />
                      <span>Student Details</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-zinc-300">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Student's full name"
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-zinc-300">
                        Date of Birth / Age <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="dobOrAge"
                        required
                        value={formData.dobOrAge}
                        onChange={handleInputChange}
                        placeholder="E.g., 17 Years or DD/MM/YYYY"
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-zinc-300">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-zinc-300">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="student@example.com"
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      />
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                      <label className="font-semibold text-slate-700 dark:text-zinc-300">
                        City / District / State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="cityDistrictState"
                        required
                        value={formData.cityDistrictState}
                        onChange={handleInputChange}
                        placeholder="E.g., Madurai, Tamil Nadu"
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      />
                    </div>
                  </div>
                </div>

                {/* ========================================================= */}
                {/* SECTION B: Academic Details                               */}
                {/* ========================================================= */}
                <div className="space-y-4">
                  <div className="border-b border-slate-200 dark:border-zinc-800 pb-2">
                    <h2 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-500" />
                      <span>Academic Details</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-zinc-300">
                        Current Class / Qualification <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="currentClass"
                        required
                        value={formData.currentClass}
                        onChange={handleInputChange}
                        placeholder="E.g., Class 11, Class 12, Dropper, 1st Year Degree"
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-zinc-300">
                        School / College Name <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="schoolCollegeName"
                        value={formData.schoolCollegeName}
                        onChange={handleInputChange}
                        placeholder="Name of your institution"
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-zinc-300">
                        Academic Stream <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="academicStream"
                        required
                        value={formData.academicStream}
                        onChange={handleInputChange}
                        placeholder="E.g., PCB (Biology), PCM (Maths), PCMB, Commerce, Arts"
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-zinc-300">
                        Recent Academic Performance <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="recentAcademicPerformance"
                        value={formData.recentAcademicPerformance}
                        onChange={handleInputChange}
                        placeholder="E.g., 88% in 10th Boards, 480 in NEET mock"
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      />
                    </div>
                  </div>
                </div>

                {/* ========================================================= */}
                {/* SECTION C: Career Interests                               */}
                {/* ========================================================= */}
                <div className="space-y-4">
                  <div className="border-b border-slate-200 dark:border-zinc-800 pb-2">
                    <h2 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-500" />
                      <span>Career Interests</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-zinc-300">
                        Preferred Career / Course <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="preferredCareerCourse"
                        required
                        value={formData.preferredCareerCourse}
                        onChange={handleInputChange}
                        placeholder="E.g., MBBS, AIIMS Nursing, B.Tech, BDS, Undecided"
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-zinc-300">
                        Areas of Interest <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="areasOfInterest"
                        required
                        value={formData.areasOfInterest}
                        onChange={handleInputChange}
                        placeholder="E.g., Clinical Healthcare, Research, Coding, Management"
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      />
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                      <label className="font-semibold text-slate-700 dark:text-zinc-300">
                        Entrance Examination, if any <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="entranceExam"
                        value={formData.entranceExam}
                        onChange={handleInputChange}
                        placeholder="E.g., NEET UG 2026, JEE Main, CUET, AIIMS Paramedical"
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      />
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                      <label className="font-semibold text-slate-700 dark:text-zinc-300">
                        Current Career Concern / Question <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="careerConcern"
                        required
                        rows={2}
                        value={formData.careerConcern}
                        onChange={handleInputChange}
                        placeholder="What is your biggest doubt or dilemma regarding this career choice?"
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* ========================================================= */}
                {/* SECTION D: Session Details                                */}
                {/* ========================================================= */}
                <div className="space-y-4">
                  <div className="border-b border-slate-200 dark:border-zinc-800 pb-2">
                    <h2 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      <span>SESSION DETAILS</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-zinc-300">
                        Preferred Counselling Mode <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="preferredMode"
                        value={formData.preferredMode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      >
                        <option value="Online">Online</option>
                        <option value="In-person">In-person, if available</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-zinc-300">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        min={minDateString}
                        required
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-zinc-300">
                        Preferred Time Slot <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="preferredTimeSlot"
                        value={formData.preferredTimeSlot}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      >
                        <option value="10:00 AM – 11:00 AM IST">10:00 AM – 11:00 AM IST</option>
                        <option value="11:30 AM – 12:30 PM IST">11:30 AM – 12:30 PM IST</option>
                        <option value="2:00 PM – 3:00 PM IST">2:00 PM – 3:00 PM IST</option>
                        <option value="4:00 PM – 5:00 PM IST">4:00 PM – 5:00 PM IST</option>
                        <option value="6:00 PM – 7:00 PM IST">6:00 PM – 7:00 PM IST</option>
                        <option value="7:30 PM – 8:30 PM IST">7:30 PM – 8:30 PM IST</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700 dark:text-zinc-300">
                        Who will attend the session? <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="attendees"
                        value={formData.attendees}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                      >
                        <option value="Student">Student</option>
                        <option value="Student + Parent/Guardian">Student + Parent/Guardian</option>
                        <option value="Parent/Guardian">Parent/Guardian</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* ========================================================= */}
                {/* SECTION E: Additional Information                         */}
                {/* ========================================================= */}
                <div className="space-y-3">
                  <div className="border-b border-slate-200 dark:border-zinc-800 pb-2">
                    <h2 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-amber-500" />
                      <span>ADDITIONAL INFORMATION</span>
                    </h2>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 dark:text-zinc-300">
                      Tell us briefly what you would like guidance on.
                    </label>
                    <textarea
                      name="guidanceTopics"
                      rows={3}
                      value={formData.guidanceTopics}
                      onChange={handleInputChange}
                      placeholder="E.g., syllabus planning, course comparisons, eligibility criteria, or time management"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition resize-none"
                    />
                  </div>
                </div>

                {/* ========================================================= */}
                {/* SECTION F: Declaration & Submission                       */}
                {/* ========================================================= */}
                <div className="space-y-4 pt-2">
                  <div className="border-b border-slate-200 dark:border-zinc-800 pb-2">
                    <h2 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                      <FileCheck2 className="w-4 h-4 text-emerald-500" />
                      <span>DECLARATION</span>
                    </h2>
                  </div>

                  <label className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 cursor-pointer">
                    <input
                      type="checkbox"
                      name="declarationConfirmed"
                      required
                      checked={formData.declarationConfirmed}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 rounded text-red-600 focus:ring-red-500 border-slate-300 dark:border-zinc-700 cursor-pointer"
                    />
                    <span className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed select-none">
                      I confirm that the information provided is accurate and may be used by LearnDawn for the purpose of arranging and providing career counselling.
                    </span>
                  </label>

                  <div className="p-4 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40 text-xs text-slate-600 dark:text-zinc-400">
                    After registration, LearnDawn will review the submitted details and contact you regarding session confirmation, available time slots and further instructions.
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center gap-2 px-8 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-red-600/30 active:scale-95 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Submitting Registration...</span>
                      ) : (
                        <>
                          <span>BOOK CAREER COUNSELLING</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
