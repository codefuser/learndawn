'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { useAuth } from '@/lib/auth/context';
import { useToast } from '@/components/ui/Toast';
import { Mail, Lock, ArrowRight, ShieldCheck, UserCheck, AlertCircle } from 'lucide-react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { signIn, switchDemoRole } = useAuth();
  const { showToast } = useToast();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const res = await signIn(email, password);
      if (res.success) {
        showToast('Signed in successfully! Welcome to Learndawn.', 'success');
      } else {
        setErrorMsg(res.error || 'Invalid credentials. Please verify your email and password.');
      }
    } catch {
      setErrorMsg('An unexpected authentication error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemo = (role: 'student' | 'admin') => {
    switchDemoRole(role);
    showToast(`Switched to ${role.toUpperCase()} preview session`, 'info');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
        <div className="inline-flex justify-center">
          <BrandLogo variant="full" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Sign In to Learndawn
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Enter your student or faculty credentials to access your dashboard.
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

          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address
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
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Password
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-xs text-slate-600 dark:text-slate-400">
                Remember my session on this device
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <span>Verifying credentials...</span>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Client Demo Switcher Buttons */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center">
              Client & Reviewer One-Click Access
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleQuickDemo('student')}
                className="py-2 px-3 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-blue-100 transition"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Demo Student</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemo('admin')}
                className="py-2 px-3 rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-amber-100 transition"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Demo Admin</span>
              </button>
            </div>
          </div>

          <div className="text-center text-xs text-slate-500">
            Don&apos;t have a student account yet?{' '}
            <Link href="/auth/sign-up" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              Create an account
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
