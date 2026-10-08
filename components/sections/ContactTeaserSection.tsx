'use client';

import React, { useState } from 'react';
import { ContactService } from '@/services/contact';
import { useToast } from '@/components/ui/Toast';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactTeaserSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: 'General Admission & Goal Counselling',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await ContactService.submitInquiry(formData);
      if (res.success) {
        setSubmitted(true);
        showToast(res.message, 'success');
      } else {
        showToast(res.message, 'error');
      }
    } catch {
      showToast('Unable to submit inquiry at this moment.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-950">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left info banner */}
          <div className="lg:col-span-5 bg-gradient-to-br from-red-700 via-red-800 to-slate-900 text-white p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/20 border border-white/20">
                Academic Helpline
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Reach Out to Us
              </h3>
              <p className="text-xs sm:text-sm text-red-100 leading-relaxed">
                Have questions about exam eligibility, batch schedules, faculty, or 1:1 counselling? Speak directly with our academic guidance counselors.
              </p>
            </div>

            <div className="space-y-4 text-xs text-red-100">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/10 shrink-0">
                  <Phone className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <span className="block text-slate-300 text-[10px] uppercase font-bold">Toll Free Student Desk</span>
                  <span className="font-semibold text-white">+91 1800-LEARN-DAWN</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/10 shrink-0">
                  <Mail className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <span className="block text-slate-300 text-[10px] uppercase font-bold">Email Admissions</span>
                  <span className="font-semibold text-white">counselling@learndawn.in</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/10 shrink-0">
                  <MapPin className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <span className="block text-slate-300 text-[10px] uppercase font-bold">Headquarters</span>
                  <span className="font-semibold text-white">Learndawn Tower, New Delhi, India</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/15 text-[11px] text-red-200">
              Operating Hours: Monday – Saturday (8:00 AM – 9:00 PM IST)
            </div>
          </div>

          {/* Right form container */}
          <div className="lg:col-span-7 p-8 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  Inquiry Successfully Received
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Thank you for connecting. An academic advisor has been assigned to your query and will contact you via mobile and email within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      mobile: '',
                      subject: 'General Admission & Goal Counselling',
                      message: '',
                    });
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arjun Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Topic of Interest
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="NEET UG Medical Admissions">NEET UG Medical Admissions</option>
                      <option value="JEE Main Engineering Prep">JEE Main Engineering Prep</option>
                      <option value="AIIMS Nursing & Paramedical">AIIMS Nursing & Paramedical</option>
                      <option value="CUET Central Universities">CUET Central Universities</option>
                      <option value="CBSE Class 10 & 12 Board Prep">CBSE Class 10 & 12 Board Prep</option>
                      <option value="1:1 Academic Mentorship Inquiry">1:1 Academic Mentorship Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Your Question / Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your current academic class, your goal exam, or any specific guidance you need..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Submitting...' : 'Submit Admission Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
