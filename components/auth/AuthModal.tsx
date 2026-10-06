'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth/context';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { X, Mail, Phone, Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';

export const AuthModal: React.FC = () => {
  const router = useRouter();
  const { isAuthModalOpen, closeAuthModal, signIn, signUp, intendedDestination } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [authMethod, setAuthMethod] = useState<'email' | 'mobile'>('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [targetExam, setTargetExam] = useState('NEET UG');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { showToast } = useToast();

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      if (mode === 'signin') {
        const identifier = authMethod === 'email' ? email : `${mobile}@learner.learndawn.in`;
        const res = await signIn(identifier, password || 'studentPass123');
        if (res.success) {
          showToast('Welcome back to Learndawn India!', 'success');
        } else {
          setErrorMsg(res.error || 'Authentication failed. Please verify your details.');
        }
      } else {
        const res = await signUp({
          fullName,
          email: authMethod === 'email' ? email : `${mobile}@learner.learndawn.in`,
          mobile,
          targetExam,
          password: password || 'studentPass123',
        });
        if (res.success) {
          showToast('Account created successfully! Welcome aboard.', 'success');
        } else {
          setErrorMsg(res.error || 'Registration failed.');
        }
      }
    } catch {
      setErrorMsg('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          aria-label="Close authentication modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex justify-center mb-3">
            <BrandLogo variant="full" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Continue Your Learning Journey
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {intendedDestination ? (
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                Log in to unlock access to your requested learning module.
              </span>
            ) : (
              'Log in or register your student profile to access lessons, mock tests, and live classrooms.'
            )}
          </p>
        </div>

        {/* Tabs: Email vs Mobile */}
        <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl mb-5 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setAuthMethod('email')}
            className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition ${
              authMethod === 'email'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Mail className="w-3.5 h-3.5" /> Continue with Email
          </button>
          <button
            type="button"
            onClick={() => setAuthMethod('mobile')}
            className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition ${
              authMethod === 'mobile'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Phone className="w-3.5 h-3.5" /> Continue with Mobile
          </button>
        </div>

        {errorMsg && (
          <div className="p-3 mb-4 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/50 text-rose-600 dark:text-rose-300 text-xs">
            {errorMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
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
          )}

          {authMethod === 'email' ? (
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
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
          ) : (
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
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
          )}

          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Target Goal Exam
              </label>
              <select
                value={targetExam}
                onChange={(e) => setTargetExam(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="NEET UG">NEET UG (Medical)</option>
                <option value="JEE Main">JEE Main (Engineering)</option>
                <option value="CUET">CUET (UG)</option>
                <option value="AIIMS Nursing">AIIMS Nursing</option>
                <option value="AIIMS Paramedical">AIIMS Paramedical</option>
                <option value="CBSE Class 12">CBSE Class 12</option>
              </select>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                Password
              </label>
              {mode === 'signin' && (
                <button
                  type="button"
                  onClick={() => {
                    closeAuthModal();
                    router.push('/auth/forgot-password');
                  }}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Forgot password?
                </button>
              )}
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
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

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>{mode === 'signin' ? 'Sign In & Continue' : 'Create Free Student Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Toggle mode */}
        <div className="mt-5 text-center text-xs text-slate-500">
          {mode === 'signin' ? (
            <p>
              New to Learndawn?{' '}
              <button
                type="button"
                onClick={() => setMode('signup')}
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Create an account
              </button>
            </p>
          ) : (
            <p>
              Already registered?{' '}
              <button
                type="button"
                onClick={() => setMode('signin')}
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Sign in to your account
              </button>
            </p>
          )}
        </div>

        {/* Security badge */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>Encrypted Session • Supabase RLS Authorization Protocol</span>
        </div>
      </div>
    </div>
  );
};
