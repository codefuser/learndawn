'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { useAuth } from '@/lib/auth/context';
import { useToast } from '@/components/ui/Toast';
import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle,
  GraduationCap
} from 'lucide-react';

export default function SignUpPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [targetExam, setTargetExam] = useState('NEET UG');
  const [language, setLanguage] = useState<'en' | 'hi' | 'ta'>('en');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { signUp } = useAuth();
  const { showToast } = useToast();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      setErrorMsg('Please accept the Terms of Service and Academic Guidelines to proceed.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Password should be at least 6 characters long.');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    try {
      const res = await signUp({
        fullName,
        email,
        mobile,
        targetExam,
        password,
        language,
      });

      if (res.success) {
        showToast('Registration successful! Welcome to your student dashboard.', 'success');
      } else {
        setErrorMsg(res.error || 'Failed to register account.');
      }
    } catch {
      setErrorMsg('An unexpected error occurred during account creation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
        <div className="inline-flex justify-center">
          <BrandLogo variant="full" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Create Your Student Account
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Begin your structured entrance and academic preparation journey.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-slate-900 py-8 px-6 sm:px-10 shadow-xl border border-slate-200 dark:border-slate-800 rounded-3xl space-y-6">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Arjun Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="student@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Goal Exam *
                </label>
                <select
                  value={targetExam}
                  onChange={(e) => setTargetExam(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="NEET UG">NEET UG</option>
                  <option value="JEE Main">JEE Main</option>
                  <option value="CUET">CUET (UG)</option>
                  <option value="AIIMS Nursing">AIIMS Nursing</option>
                  <option value="AIIMS Paramedical">AIIMS Paramedical</option>
                  <option value="CBSE Class 12">CBSE Class 12</option>
                  <option value="CBSE Class 10">CBSE Class 10</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Preferred Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'en' | 'hi' | 'ta')}
                  className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="en">English</option>
                  <option value="hi">हिन्दी (Hindi)</option>
                  <option value="ta">தமிழ் (Tamil)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Password *
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="password"
                  required
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 mt-0.5 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="ml-2 block text-xs text-slate-600 dark:text-slate-400 leading-tight">
                I agree to the Learndawn{' '}
                <Link href="/about#terms" className="text-blue-600 underline">Terms of Service</Link>{' '}
                and{' '}
                <Link href="/about#privacy" className="text-blue-600 underline">Privacy Policy</Link>.
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <span>Setting up student profile...</span>
              ) : (
                <>
                  <span>Create Student Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="text-center text-xs text-slate-500">
            Already have an account?{' '}
            <Link href="/auth/sign-in" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              Sign in here
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-400">
          <Link href="/" className="hover:underline">← Return to Learndawn Home</Link>
        </div>
      </div>
    </div>
  );
}
