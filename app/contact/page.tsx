'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { ContactService } from '@/services/contact';
import { useToast } from '@/components/ui/Toast';
import { 
  Phone, 
  Mail, 
  Clock, 
  HelpCircle, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  GraduationCap,
  BookOpen,
  HeartHandshake,
  Cpu,
  Compass,
  Building2,
  Info
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    userCategory: 'Student' as 'Student' | 'Parent' | 'Educator' | 'Professional' | 'Institution' | 'Other',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { showToast } = useToast();

  const userCategories = ['Student', 'Parent', 'Educator', 'Professional', 'Institution', 'Other'] as const;

  const helpCategories = [
    {
      title: 'Admissions & Enrolment',
      description: 'Get information about programmes, batches, eligibility, fees and registration.',
      icon: <GraduationCap className="w-5 h-5 text-red-500" />
    },
    {
      title: 'Academic Support',
      description: 'Connect with us regarding classes, learning resources, assessments and academic concerns.',
      icon: <BookOpen className="w-5 h-5 text-blue-500" />
    },
    {
      title: 'Mentorship Support',
      description: 'Get assistance regarding mentors, OnePod Learning and student guidance.',
      icon: <HeartHandshake className="w-5 h-5 text-emerald-500" />
    },
    {
      title: 'Technical Support',
      description: 'Report issues related to online classes, digital resources or learning platforms.',
      icon: <Cpu className="w-5 h-5 text-purple-500" />
    },
    {
      title: 'Career & Counselling',
      description: 'Seek guidance regarding competitive examinations, higher education and career pathways.',
      icon: <Compass className="w-5 h-5 text-amber-500" />
    },
    {
      title: 'Collaboration & Partnerships',
      description: 'Connect with LearnDawn for institutional, academic and professional collaborations.',
      icon: <Building2 className="w-5 h-5 text-rose-500" />
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.mobile.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all mandatory fields marked with an asterisk (*).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const res = await ContactService.submitInquiry(formData);
      if (res.success) {
        setSubmitted(true);
        showToast(res.message, 'success');
      } else {
        setErrorMessage(res.message);
        showToast(res.message, 'error');
      }
    } catch {
      setErrorMessage('Unable to submit enquiry at this moment. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#07070a] text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      <main className="flex-1 pb-24">
        {/* ========================================================= */}
        {/* 1. HERO / MAIN HEADING                                    */}
        {/* ========================================================= */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden border-b border-slate-200/80 dark:border-zinc-800/80 bg-gradient-to-b from-red-50/40 via-white to-slate-50/50 dark:from-red-950/10 dark:via-[#09090d] dark:to-[#07070a]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 max-w-4xl h-48 bg-red-500/[0.08] blur-[120px] pointer-events-none" />

          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-800/60 text-red-700 dark:text-red-300 text-xs font-bold uppercase tracking-wider shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-red-500" />
              <span>Contact &amp; Student Desk</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight uppercase max-w-4xl mx-auto leading-tight">
              YOUR QUESTIONS. OUR DIRECTION.
            </h1>

            <div className="max-w-3xl mx-auto space-y-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
              <p>
                Whether you are a student, parent, aspirant, mentor or collaborator, the LearnDawn Student Desk is here to help you find the right information and the right direction.
              </p>
              <p>
                From course enquiries and admissions to academic support and technical assistance, you can reach our team through the channels below.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. CONTACT DETAILS & TIME SCHEDULES                       */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* 2A. STUDENT DESK PHONE */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-4 hover:border-red-500/40 transition">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center border border-red-500/20">
                <Phone className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Student Desk
              </h2>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Toll-Free Student Desk
                </span>
                <a
                  href="tel:+919025362645"
                  className="text-2xl font-black text-red-600 dark:text-red-400 hover:underline block tracking-wide"
                >
                  +91 90253 62645
                </a>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                For admissions, course information, batch details, mentorship enquiries and general student support.
              </p>
            </div>

            {/* 2B. EMAIL SUPPORT */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-4 hover:border-red-500/40 transition">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center border border-blue-500/20">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Email Support
              </h2>
              <div className="space-y-3 text-xs">
                <div>
                  <a
                    href="mailto:learndawn24@gmail.com"
                    className="font-bold text-sm text-slate-900 dark:text-white hover:text-red-500 block truncate"
                  >
                    learndawn24@gmail.com
                  </a>
                  <span className="text-slate-500">General enquiries, admissions and institutional communication.</span>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-zinc-800">
                  <a
                    href="mailto:entprepmakers3@gmail.com"
                    className="font-bold text-sm text-slate-900 dark:text-white hover:text-red-500 block truncate"
                  >
                    entprepmakers3@gmail.com
                  </a>
                  <span className="text-slate-500">Academic and educational resource-related enquiries.</span>
                </div>
              </div>
            </div>

            {/* 2C. OPERATING HOURS & AVAILABILITY */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-4 hover:border-red-500/40 transition">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Hours &amp; Availability
              </h2>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
                    Operating Hours
                  </span>
                  <p className="text-slate-600 dark:text-zinc-300 font-medium">Monday – Saturday: 8:00 AM – 9:00 PM IST</p>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-zinc-800">
                  <span className="font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
                    Online Availability
                  </span>
                  <p className="text-slate-600 dark:text-zinc-300 font-medium">4:00 AM – 8:00 PM IST</p>
                  <span className="text-[11px] text-slate-500">Available for online student support and academic communication.</span>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  <Info className="w-3.5 h-3.5 shrink-0" />
                  <span>24/7 digital query ticketing and messaging intake</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. WHAT CAN WE HELP YOU WITH?                             */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 border-t border-slate-200 dark:border-zinc-800/80">
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">Support Pillars</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
                WHAT CAN WE HELP YOU WITH?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
                Direct your query to the appropriate team for expedited assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpCategories.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 space-y-2.5"
                >
                  <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 w-fit">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. SEND US A MESSAGE FORM                                 */}
        {/* ========================================================= */}
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-12">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800 shadow-xl space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">Get In Touch</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
                SEND US A MESSAGE
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
                Our team will review your enquiry and respond through the contact details provided.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Enquiry Submitted Successfully
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 max-w-md mx-auto">
                  Our team will review your enquiry and respond through the contact details provided.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      mobile: '',
                      userCategory: 'Student',
                      subject: '',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-200 dark:bg-zinc-800 text-xs font-bold text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-zinc-700 transition cursor-pointer"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-700 dark:text-zinc-300">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-700 dark:text-zinc-300">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                    />
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="font-semibold text-slate-700 dark:text-zinc-300">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                    />
                  </div>
                </div>

                {/* I am a: category selection */}
                <div className="space-y-2">
                  <label className="font-semibold text-slate-700 dark:text-zinc-300 block">
                    I am a <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                    {userCategories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFormData({ ...formData, userCategory: cat })}
                        className={`py-2 px-3 rounded-xl border text-xs font-semibold transition cursor-pointer text-center ${
                          formData.userCategory === cat
                            ? 'bg-red-600 border-red-600 text-white shadow-xs'
                            : 'bg-white dark:bg-zinc-950 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-slate-300'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-700 dark:text-zinc-300">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="E.g., NEET UG 2026 Batch Enquiry, 1:1 Mentorship Admission"
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-700 dark:text-zinc-300">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please describe your enquiry in detail so our team can provide specific guidance"
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 px-8 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-red-600/30 active:scale-95 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <span>SUBMIT ENQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
