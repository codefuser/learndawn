'use client';

import React, { useState } from 'react';
import { useToast } from '@/components/ui/Toast';
import { Users, Search, UserCheck, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function AdminStudentsPage() {
  const [search, setSearch] = useState('');
  const { showToast } = useToast();

  const [studentList, setStudentList] = useState([
    { id: '1', name: 'Ananya Deshmukh', email: 'ananya.d@example.com', exam: 'NEET UG', date: '2026-10-03', status: 'Active', progress: '72%' },
    { id: '2', name: 'Rohan Venkatesh', email: 'rohan.v@example.com', exam: 'JEE Main', date: '2026-10-02', status: 'Active', progress: '58%' },
    { id: '3', name: 'Sneha Patel', email: 'sneha.p@example.com', exam: 'AIIMS Nursing', date: '2026-10-02', status: 'Active', progress: '84%' },
    { id: '4', name: 'Devendra Meena', email: 'devendra.m@example.com', exam: 'CUET', date: '2026-10-01', status: 'Pending Verification', progress: '12%' },
    { id: '5', name: 'Kavya Subramanian', email: 'kavya.s@example.com', exam: 'AIIMS Paramedical', date: '2026-09-30', status: 'Active', progress: '64%' },
    { id: '6', name: 'Aditya Raj', email: 'aditya.r@example.com', exam: 'NEET UG', date: '2026-09-29', status: 'Active', progress: '45%' },
  ]);

  const handleToggleStatus = (id: string, current: string) => {
    const nextStatus = current === 'Active' ? 'Suspended' : 'Active';
    setStudentList((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: nextStatus } : s))
    );
    showToast(`Student status updated to ${nextStatus}`, 'info');
  };

  const filtered = studentList.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.exam.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Student Roster Management</h1>
          <p className="text-xs text-slate-400">
            View student enrollments, syllabus benchmarks, and account statuses.
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-400 font-semibold">
                <th className="py-3 px-4">Student Details</th>
                <th className="py-3 px-4">Target Exam</th>
                <th className="py-3 px-4">Registered Date</th>
                <th className="py-3 px-4">Syllabus Completion</th>
                <th className="py-3 px-4">Account Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filtered.map((st) => (
                <tr key={st.id} className="hover:bg-slate-900/40 transition">
                  <td className="py-3 px-4">
                    <span className="font-semibold text-white block">{st.name}</span>
                    <span className="text-[11px] text-slate-500 font-mono">{st.email}</span>
                  </td>
                  <td className="py-3 px-4 font-medium">{st.exam}</td>
                  <td className="py-3 px-4 text-slate-400">{st.date}</td>
                  <td className="py-3 px-4 font-semibold text-emerald-400">{st.progress}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                      st.status === 'Active'
                        ? 'bg-emerald-950/60 text-emerald-400 border-emerald-900'
                        : 'bg-rose-950/60 text-rose-400 border-rose-900'
                    }`}>
                      {st.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleToggleStatus(st.id, st.status)}
                      className="px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 transition"
                    >
                      {st.status === 'Active' ? 'Suspend' : 'Reactivate'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
