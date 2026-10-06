'use client';

import React, { useState } from 'react';
import { useToast } from '@/components/ui/Toast';
import { useAuth } from '@/lib/auth/context';
import { CounsellingService } from '@/services/counselling';
import { Compass, CheckCircle2, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';

export default function StudentCounsellingPage() {
  const { user } = useAuth();
  const [targetExam, setTargetExam] = useState('NEET UG');
  const [category, setCategory] = useState('College & Quota Guidance');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await CounsellingService.requestCounselling({
        userId: user?.id,
        category,
        targetExam,
        notes,
      });

      if (res.success) {
        setSubmitted(true);
        showToast(res.message, 'success');
      } else {
        showToast(res.message, 'error');
      }
    } catch {
      showToast('Unable to log counselling request. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Academic & Career Counselling Desk
        </h1>
        <p className="text-xs text-slate-500">
          Book tailored 1:1 guidance regarding college choice filling, state vs all-India quota counseling, and backup pathways.
        </p>
      </div>

      <div className="max-w-2xl bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Counselling Request Logged
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              A certified admissions counselor has been assigned to your profile. Your request is securely recorded in the database.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setNotes('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold cursor-pointer"
            >
              Book Another Session
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Primary Goal / Examination
              </label>
              <select
                value={targetExam}
                onChange={(e) => setTargetExam(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="NEET UG">NEET UG (Medical Admissions)</option>
                <option value="JEE Main">JEE Main / JoSAA Choice Filling</option>
                <option value="AIIMS Nursing">AIIMS B.Sc Nursing Allotment</option>
                <option value="AIIMS Paramedical">AIIMS Paramedical Courses</option>
                <option value="CUET">CUET Central University Portals</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Guidance Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="College & Quota Guidance">College & Quota Guidance (State vs AIQ)</option>
                <option value="Preparation Strategy & Drop Year Planning">Preparation Strategy & Drop Year Planning</option>
                <option value="Stream Selection Post Class 10">Stream Selection Post Class 10</option>
                <option value="Stress & Performance Anxiety Clearance">Stress & Performance Anxiety Clearance</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Specific Questions / Current Score Status
              </label>
              <textarea
                required
                rows={4}
                placeholder="Share your current score range, state domicile, or queries you wish to discuss..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md transition flex items-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Recording Request...</span>
                </>
              ) : (
                <>
                  <span>Submit Counselling Request</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
