'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/auth/context';
import { useToast } from '@/components/ui/Toast';
import { User, Mail, Phone, Lock, Save, Globe } from 'lucide-react';

export default function StudentSettingsPage() {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [fullName, setFullName] = useState(user?.full_name || 'Arjun Sharma');
  const [mobile, setMobile] = useState(user?.mobile || '+91 98765 43210');
  const [targetExam, setTargetExam] = useState(user?.target_goal_exam || 'NEET UG');
  const [language, setLanguage] = useState(user?.preferred_language || 'en');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Student profile settings updated successfully', 'success');
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Student Profile Settings
        </h1>
        <p className="text-xs text-slate-500">
          Manage your personal details, target exam, and communication preferences.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Registered Email (Immutable)
            </label>
            <input
              type="email"
              disabled
              value={user?.email || 'student@learndawn.in'}
              className="w-full px-3.5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Mobile Contact Number
            </label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Target Entrance Goal
              </label>
              <select
                value={targetExam}
                onChange={(e) => setTargetExam(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="NEET UG">NEET UG</option>
                <option value="JEE Main">JEE Main</option>
                <option value="CUET">CUET (UG)</option>
                <option value="AIIMS Nursing">AIIMS Nursing</option>
                <option value="AIIMS Paramedical">AIIMS Paramedical</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'hi' | 'ta')}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी (Hindi)</option>
                <option value="ta">தமிழ் (Tamil)</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md transition flex items-center gap-2 cursor-pointer"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Profile Settings</span>
          </button>
        </form>
      </div>
    </div>
  );
}
