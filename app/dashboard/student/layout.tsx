'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { useAuth } from '@/lib/auth/context';
import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap, 
  Video, 
  Target, 
  Award, 
  FileText, 
  HeartHandshake, 
  Compass, 
  BarChart2, 
  Bookmark, 
  Bell, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Flame, 
  Search,
  UserCheck
} from 'lucide-react';

export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { user, isLoading, signOut, switchDemoRole, openAuthModal } = useAuth();

  const navItems = [
    { label: 'Overview', href: '/dashboard/student', icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: 'My Courses', href: '/dashboard/student/courses', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'My Exams', href: '/dashboard/student/exams', icon: <GraduationCap className="w-4 h-4" /> },
    { label: 'Classroom Player', href: '/dashboard/student/learning', icon: <Video className="w-4 h-4" /> },
    { label: 'Practice Tests', href: '/dashboard/student/practice', icon: <Target className="w-4 h-4" /> },
    { label: 'Mock Test Series', href: '/dashboard/student/tests', icon: <Award className="w-4 h-4" /> },
    { label: 'Study Materials', href: '/dashboard/student/materials', icon: <FileText className="w-4 h-4" /> },
    { label: 'Mentorship', href: '/dashboard/student/mentorship', icon: <HeartHandshake className="w-4 h-4" /> },
    { label: 'Counselling', href: '/dashboard/student/counselling', icon: <Compass className="w-4 h-4" /> },
    { label: 'My Progress', href: '/dashboard/student/progress', icon: <BarChart2 className="w-4 h-4" /> },
    { label: 'Saved Questions', href: '/dashboard/student/saved', icon: <Bookmark className="w-4 h-4" /> },
    { label: 'Notifications', href: '/dashboard/student/notifications', icon: <Bell className="w-4 h-4" /> },
    { label: 'Account Settings', href: '/dashboard/student/settings', icon: <Settings className="w-4 h-4" /> },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-semibold text-slate-500">Loading student dashboard...</p>
        </div>
      </div>
    );
  }

  // RBAC Access Gate: Only registered users with valid records can access
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-950 text-white">
        <div className="max-w-md w-full p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto">
            <GraduationCap className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
              Authentication Required
            </span>
            <h1 className="text-2xl font-black tracking-tight text-white">
              Student Portal Access
            </h1>
            <p className="text-xs text-slate-400 leading-relaxed">
              Please sign in with your registered student credentials or create a new student profile to access your lessons, mock tests, and live classrooms.
            </p>
          </div>

          <div className="pt-2 space-y-3">
            <button
              onClick={() => openAuthModal('/dashboard/student')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <UserCheck className="w-4 h-4" />
              <span>Sign In with Registered Account</span>
            </button>

            <Link
              href="/auth/sign-up"
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-xs transition flex items-center justify-center gap-2"
            >
              <span>Register New Student Account</span>
            </Link>

            <Link
              href="/"
              className="block text-xs text-slate-500 hover:text-slate-300 transition pt-1"
            >
              ← Return to Academy Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col lg:flex-row text-slate-900 dark:text-slate-100">
      {/* Mobile Top Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40">
        <BrandLogo variant="mobile" />
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle student menu"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between p-4 transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2 pt-2">
            <BrandLogo variant="full" />
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Student Profile Card */}
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center shrink-0 shadow-md">
              {user?.full_name?.charAt(0) || 'S'}
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                {user?.full_name || 'Arjun Sharma'}
              </h4>
              <p className="text-[11px] text-blue-600 dark:text-blue-400 font-medium truncate">
                Goal: {user?.target_goal_exam || 'NEET UG 2025'}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-0.5 overflow-y-auto max-h-[50vh] pr-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
          {/* Quick Reviewer Switch to Admin */}
          <button
            onClick={() => switchDemoRole('admin')}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs font-semibold hover:bg-amber-100 transition"
          >
            <span className="flex items-center gap-2">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Switch to Admin View</span>
            </span>
          </button>

          <button
            onClick={signOut}
            className="w-full flex items-center gap-2 px-3.5 py-2 rounded-xl text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-semibold transition"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="lg:pl-64 flex-1 flex flex-col min-w-0">
        {/* Desktop Top Bar */}
        <header className="hidden lg:flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
          <div>
            <span className="text-xs text-slate-500">Student Portal</span>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Learndawn Scholar Academy
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Learning Streak Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-bold">
              <Flame className="w-4 h-4 fill-amber-500" />
              <span>14-Day Learning Streak</span>
            </div>

            {/* Notification Bell */}
            <Link
              href="/dashboard/student/notifications"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 relative"
            >
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-rose-500 absolute top-1.5 right-1.5" />
            </Link>

            <Link
              href="/"
              className="text-xs font-semibold text-slate-500 hover:text-blue-600 transition"
            >
              Public Website ↗
            </Link>
          </div>
        </header>

        {/* Subpage Contents */}
        <main className="p-4 sm:p-6 lg:p-8 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
