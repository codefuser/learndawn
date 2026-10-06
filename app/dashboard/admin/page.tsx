'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AdminService, AdminMetrics } from '@/services/admin';
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  HelpCircle, 
  Video, 
  Compass, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight,
  Database
} from 'lucide-react';

interface RecentStudent {
  id: string;
  name: string;
  email: string;
  exam: string;
  date: string;
  status: string;
}

interface AuditLogItem {
  id: string;
  action: string;
  entity: string;
  user: string;
  timestamp: string;
}

export default function AdminOverviewPage() {
  const [metrics, setMetrics] = useState<AdminMetrics | null>(null);
  const [students, setStudents] = useState<RecentStudent[]>([]);
  const [logs, setLogs] = useState<AuditLogItem[]>([]);

  useEffect(() => {
    async function loadAdminData() {
      const m = await AdminService.getDashboardMetrics();
      const s = await AdminService.getRecentStudents();
      const l = await AdminService.getAuditLogs();
      setMetrics(m);
      setStudents(s);
      setLogs(l);
    }
    loadAdminData();
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Metrics Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
            Real-time Telemetry
          </span>
          <h1 className="text-2xl font-black text-white">
            Platform Operations & Governance
          </h1>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            <Database className="w-3.5 h-3.5 text-blue-400" />
            <span>RLS Active</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-900 text-emerald-400 font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Retention {metrics?.retentionRate || '96.4%'}</span>
          </div>
        </div>
      </div>

      {/* Primary KPI Grid (Section 22) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Students</span>
            <Users className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-black text-white">
            {metrics ? metrics.totalStudents.toLocaleString() : '...'}
          </div>
          <span className="text-[10px] text-emerald-400 font-semibold block">
            +{metrics?.newRegistrationsThisMonth} this month
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Courses</span>
            <BookOpen className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-white">
            {metrics ? metrics.activeCourses : '...'}
          </div>
          <span className="text-[10px] text-slate-400 block">Published batches</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Goal Exams</span>
            <GraduationCap className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl font-black text-white">
            {metrics ? metrics.totalExams : '...'}
          </div>
          <span className="text-[10px] text-slate-400 block">NEET, JEE, CUET, AIIMS</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Question Bank</span>
            <HelpCircle className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-black text-white">
            {metrics ? metrics.totalQuestions.toLocaleString() : '...'}
          </div>
          <span className="text-[10px] text-slate-400 block">Validated MCQs</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Live Classes</span>
            <Video className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-2xl font-black text-white">
            {metrics ? metrics.upcomingLiveClasses : '...'}
          </div>
          <span className="text-[10px] text-rose-400 font-semibold block">Scheduled next 24h</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Counselling</span>
            <Compass className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-black text-amber-400">
            {metrics ? metrics.pendingCounsellingRequests : '...'}
          </div>
          <span className="text-[10px] text-amber-300 font-semibold block">Pending review</span>
        </div>
      </div>

      {/* Data Tables Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Registrations Table */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>Recent Student Registrations</span>
            </h3>
            <Link href="/dashboard/admin/students" className="text-xs text-blue-400 hover:underline">
              View All Students →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-semibold">
                  <th className="py-2.5 px-3">Student Name</th>
                  <th className="py-2.5 px-3">Target Exam</th>
                  <th className="py-2.5 px-3">Registered Date</th>
                  <th className="py-2.5 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {students.map((st) => (
                  <tr key={st.id} className="hover:bg-slate-900/60">
                    <td className="py-3 px-3 font-semibold text-white">
                      {st.name}
                      <span className="block text-[10px] text-slate-500 font-normal">{st.email}</span>
                    </td>
                    <td className="py-3 px-3">{st.exam}</td>
                    <td className="py-3 px-3 text-slate-400">{st.date}</td>
                    <td className="py-3 px-3">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-900">
                        {st.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Audit Logs */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Institutional Audit Log</span>
            </h3>
            <Link href="/dashboard/admin/audit-logs" className="text-xs text-blue-400 hover:underline">
              Full Logs →
            </Link>
          </div>

          <div className="space-y-3">
            {logs.map((log) => (
              <div
                key={log.id}
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-amber-400">
                    {log.action}
                  </span>
                  <span className="text-[10px] text-slate-500">{log.timestamp}</span>
                </div>
                <div className="font-medium text-white">{log.entity}</div>
                <div className="text-[10px] text-slate-400">Initiated by: {log.user}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
