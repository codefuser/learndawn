'use client';

import React, { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/Toast';
import { Users, Search, RefreshCw, GraduationCap } from 'lucide-react';

interface StudentItem {
  id: string;
  name: string;
  email: string;
  mobile?: string;
  exam: string;
  date: string;
  status: string;
}

export default function AdminStudentsPage() {
  const [search, setSearch] = useState('');
  const [studentList, setStudentList] = useState<StudentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/students', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        setStudentList(data.students || []);
      }
    } catch {
      showToast('Error loading registered students from database', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleToggleStatus = (id: string, current: string) => {
    const nextStatus = current.includes('Active') ? 'Suspended' : 'Active Scholar';
    setStudentList((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: nextStatus } : s))
    );
    showToast(`Student status updated to ${nextStatus}`, 'info');
  };

  const filtered = studentList.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.exam.toLowerCase().includes(search.toLowerCase()) ||
      (s.mobile && s.mobile.includes(search))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Users className="w-6 h-6 text-red-400" />
            <span>Student Roster Management</span>
          </h1>
          <p className="text-xs text-slate-400">
            Real registered student accounts from Supabase and database authentication records.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by name, email, mobile..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <button
            onClick={fetchStudents}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 transition"
            title="Refresh database records"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-xs text-slate-500">
            <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <span>Loading registered students from database...</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-xs text-slate-400 space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-500">
              <GraduationCap className="w-6 h-6" />
            </div>
            <p className="font-semibold text-white">No registered students found</p>
            <p className="text-[11px] text-slate-500 max-w-sm mx-auto">
              Real students who register on Learndawn will appear here dynamically. No dummy data is displayed.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-400 font-semibold">
                  <th className="py-3 px-4">Student Details</th>
                  <th className="py-3 px-4">Mobile</th>
                  <th className="py-3 px-4">Target Exam</th>
                  <th className="py-3 px-4">Registered Date</th>
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
                    <td className="py-3 px-4 text-slate-400 font-mono">
                      {st.mobile || '—'}
                    </td>
                    <td className="py-3 px-4 font-medium text-red-400">{st.exam}</td>
                    <td className="py-3 px-4 text-slate-400">{st.date}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                        st.status.includes('Active')
                          ? 'bg-red-950/60 text-red-400 border-red-900'
                          : 'bg-rose-950/60 text-rose-400 border-rose-900'
                      }`}>
                        {st.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => handleToggleStatus(st.id, st.status)}
                        className="px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 transition cursor-pointer"
                      >
                        {st.status.includes('Active') ? 'Suspend' : 'Reactivate'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
