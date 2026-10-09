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
    <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-900 transition-colors">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="rounded-3xl bg-zinc-50 dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left info banner - Ultra sleek Obsidian card */}
          <div className="lg:col-span-5 bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-white p-8 sm:p-10 flex flex-col justify-between space-y-8 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800/80">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Academic Helpline
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Reach Out to Us
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Have questions about exam eligibility, batch schedules, faculty, or 1:1 counselling? Speak directly with our academic guidance counselors.
              </p>
            </div>

            <div className="space-y-4 text-xs text-zinc-600 dark:text-zinc-300">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-red-500 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-zinc-400 dark:text-zinc-500 text-[10px] uppercase font-bold">Toll Free Student Desk</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">+91 1800-LEARN-DAWN</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-red-500 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-zinc-400 dark:text-zinc-500 text-[10px] uppercase font-bold">Email Admissions</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">counselling@learndawn.in</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-red-500 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-zinc-400 dark:text-zinc-500 text-[10px] uppercase font-bold">Headquarters</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">Learndawn Tower, New Delhi, India</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-900 text-[11px] text-zinc-500 dark:text-zinc-400">
              Operating Hours: Monday – Saturday (8:00 AM – 9:00 PM IST)
            </div>
          </div>

          {/* Right form container */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-white dark:bg-[#0c0c0f]">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto border border-red-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-zinc-950 dark:text-white">
                  Inquiry Successfully Received
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
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
                  className="mt-4 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arjun Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      Topic of Interest
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
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
                  <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    Your Question / Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your current academic class, your goal exam, or any specific guidance you need..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-600/25 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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
