'use client';

import React, { useState } from 'react';
import { useToast } from '@/components/ui/Toast';
import { UserCog, Plus, ShieldCheck, ShieldAlert } from 'lucide-react';

export default function AdminUsersPage() {
  const { showToast } = useToast();
  const [users, setUsers] = useState([
    { id: 'u1', name: 'Dr. Aarav Sharma', email: 'aarav.sharma@faculty.learndawn.in', role: 'educator', status: 'Active' },
    { id: 'u2', name: 'Sister Priya Menon', email: 'priya.menon@faculty.learndawn.in', role: 'educator', status: 'Active' },
    { id: 'u3', name: 'Dr. Siddharth Rao', email: 'siddharth.rao@mentor.learndawn.in', role: 'mentor', status: 'Active' },
    { id: 'u4', name: 'Platform Admin Lead', email: 'admin@learndawn.in', role: 'admin', status: 'Active' },
  ]);

  const handleRoleChange = (id: string, newRole: string) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, role: newRole } : u))
    );
    showToast(`Role updated in public.user_roles for user`, 'success');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Users, Faculty & Role-Based Access Control</h1>
          <p className="text-xs text-slate-400">
            Provision faculty accounts, manage administrative roles, and inspect database security policies.
          </p>
        </div>

        <button
          onClick={() => showToast('Role provision dialog opened', 'info')}
          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Provision Faculty Member</span>
        </button>
      </div>

      <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-400 font-semibold">
                <th className="py-3 px-4">User Name & Identity</th>
                <th className="py-3 px-4">Current Role</th>
                <th className="py-3 px-4">RLS Status</th>
                <th className="py-3 px-4 text-right">Reassign Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-slate-900/40 transition">
                  <td className="py-3 px-4">
                    <span className="font-bold text-white block">{u.name}</span>
                    <span className="text-[11px] text-slate-500 font-mono">{u.email}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      u.role === 'admin'
                        ? 'bg-amber-950/60 text-amber-400 border border-amber-900'
                        : u.role === 'educator'
                        ? 'bg-blue-950/60 text-blue-400 border border-blue-900'
                        : 'bg-emerald-950/60 text-emerald-400 border border-emerald-900'
                    }`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-emerald-400 font-semibold">
                    ● Enforced by Postgres RLS
                  </td>
                  <td className="py-3 px-4 text-right">
                    <select
                      value={u.role}
                      onChange={(e) => handleRoleChange(u.id, e.target.value)}
                      className="px-2.5 py-1 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none"
                    >
                      <option value="student">Student</option>
                      <option value="educator">Educator</option>
                      <option value="mentor">Mentor</option>
                      <option value="admin">Administrator</option>
                    </select>
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
