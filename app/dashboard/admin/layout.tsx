'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { useAuth } from '@/lib/auth/context';
import { 
  ShieldAlert, 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  GraduationCap, 
  HelpCircle, 
  FileText, 
  Video, 
  HeartHandshake, 
  Compass, 
  Layers, 
  UserCog, 
  BarChart3, 
  ScrollText, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Lock,
  ArrowRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { user, signOut, switchDemoRole, openAuthModal } = useAuth();

  // STRICT RBAC CHECK (Section 41)
  const isAuthorizedAdmin = user && user.role === 'admin';

  if (!isAuthorizedAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-950 text-white">
        <div className="max-w-md w-full p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-500 flex items-center justify-center mx-auto">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
              HTTP 403 • Access Forbidden
            </span>
            <h1 className="text-2xl font-black tracking-tight text-white">
              Administrator Privileges Required
            </h1>
            <p className="text-xs text-slate-400 leading-relaxed">
              This route contains institutional governance, student data, and role assignments. You must be authenticated with verified administrative credentials.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 space-y-2 text-left">
            <div className="font-bold text-white flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Client Review Testing Option:</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Click below to simulate verified Executive Administrator permissions for testing all admin subpages.
            </p>
            <button
              onClick={() => switchDemoRole('admin')}
              className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <UserCheck className="w-4 h-4" />
              <span>Simulate Admin Access (Review Mode)</span>
            </button>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
            <Link href="/" className="hover:text-white transition">
              ← Return Home
            </Link>
            <Link href="/dashboard/student" className="text-red-400 hover:underline">
              Student Dashboard →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const adminNavItems = [
    { label: 'Overview', href: '/dashboard/admin', icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: 'Students', href: '/dashboard/admin/students', icon: <Users className="w-4 h-4" /> },
    { label: 'Courses', href: '/dashboard/admin/courses', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'Exams', href: '/dashboard/admin/exams', icon: <GraduationCap className="w-4 h-4" /> },
    { label: 'Question Bank', href: '/dashboard/admin/questions', icon: <HelpCircle className="w-4 h-4" /> },
    { label: 'Study Materials', href: '/dashboard/admin/materials', icon: <FileText className="w-4 h-4" /> },
    { label: 'Live Classes', href: '/dashboard/admin/classes', icon: <Video className="w-4 h-4" /> },
    { label: 'Mentors', href: '/dashboard/admin/mentors', icon: <HeartHandshake className="w-4 h-4" /> },
    { label: 'Counselling', href: '/dashboard/admin/counselling', icon: <Compass className="w-4 h-4" /> },
    { label: 'Resources', href: '/dashboard/admin/resources', icon: <Layers className="w-4 h-4" /> },
    { label: 'Users & Roles', href: '/dashboard/admin/users', icon: <UserCog className="w-4 h-4" /> },
    { label: 'Analytics', href: '/dashboard/admin/analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { label: 'Audit Logs', href: '/dashboard/admin/audit-logs', icon: <ScrollText className="w-4 h-4" /> },
    { label: 'Settings', href: '/dashboard/admin/settings', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col lg:flex-row text-slate-100">
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800 sticky top-0 z-40">
        <BrandLogo variant="mobile" theme="dark" />
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
            ADMIN
          </span>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-xl text-slate-300 hover:bg-slate-800"
            aria-label="Toggle admin navigation"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Admin Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-950 border-r border-slate-800 flex flex-col justify-between p-4 transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2 pt-2">
            <BrandLogo variant="full" theme="dark" />
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-xs font-bold text-white truncate">Institutional Console</h4>
              <p className="text-[11px] text-amber-400 font-semibold truncate">Role: Super Admin</p>
            </div>
          </div>

          <nav className="space-y-0.5 overflow-y-auto max-h-[52vh] pr-1">
            {adminNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                      : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-4 border-t border-slate-800 space-y-2">
          {/* Quick Switch to Student for Review */}
          <button
            onClick={() => switchDemoRole('student')}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-red-950/60 border border-red-900/60 text-red-300 text-xs font-semibold hover:bg-red-900/80 transition"
          >
            <span>Switch to Student View</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={signOut}
            className="w-full flex items-center gap-2 px-3.5 py-2 rounded-xl text-rose-400 hover:bg-rose-950/30 text-xs font-semibold transition"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Admin Content Area */}
      <div className="lg:pl-64 flex-1 flex flex-col min-w-0">
        <header className="hidden lg:flex items-center justify-between px-8 py-4 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-30">
          <div>
            <span className="text-xs text-slate-400">Institutional Governance</span>
            <h2 className="text-lg font-bold text-white">Administrator Headquarters</h2>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 font-mono">
              ● Supabase PostgreSQL Online
            </span>
            <Link href="/" className="text-slate-400 hover:text-white transition">
              Public Site ↗
            </Link>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
