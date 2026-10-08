'use client';

import React, { useState } from 'react';
import { useToast } from '@/components/ui/Toast';
import { Compass, CheckCircle2, Clock } from 'lucide-react';

export default function AdminCounsellingPage() {
  const { showToast } = useToast();
  const [requests, setRequests] = useState([
    { id: '1', student: 'Rohan Venkatesh', exam: 'JEE Main', category: 'JoSAA Choice Filling', date: 'Oct 04, 2026', status: 'Pending' },
    { id: '2', student: 'Sneha Patel', exam: 'AIIMS Nursing', category: 'Eligibility Verification', date: 'Oct 04, 2026', status: 'Pending' },
    { id: '3', student: 'Ananya Deshmukh', exam: 'NEET UG', category: 'State Quota Cutoffs', date: 'Oct 03, 2026', status: 'Assigned' },
    { id: '4', student: 'Devendra Meena', exam: 'CUET', category: 'Stream Selection', date: 'Oct 02, 2026', status: 'Completed' },
  ]);

  const handleAssign = (id: string) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'Assigned' } : r))
    );
    showToast('Counsellor assigned to student session.', 'success');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Student Counselling Requests</h1>
        <p className="text-xs text-slate-400">
          Review academic triage, assign admission counselors, and mark session resolutions.
        </p>
      </div>

      <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-400 font-semibold">
                <th className="py-3 px-4">Student</th>
                <th className="py-3 px-4">Target Exam</th>
                <th className="py-3 px-4">Request Topic</th>
                <th className="py-3 px-4">Received Date</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {requests.map((req) => (
                <tr key={req.id} className="hover:bg-slate-900/40 transition">
                  <td className="py-3 px-4 font-bold text-white">{req.student}</td>
                  <td className="py-3 px-4 font-medium">{req.exam}</td>
                  <td className="py-3 px-4 text-slate-400">{req.category}</td>
                  <td className="py-3 px-4 text-slate-400">{req.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                      req.status === 'Pending'
                        ? 'bg-amber-950/60 text-amber-400 border-amber-900'
                        : req.status === 'Assigned'
                        ? 'bg-red-950/60 text-red-400 border-red-900'
                        : 'bg-red-950/60 text-red-400 border-red-900'
                    }`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    {req.status === 'Pending' && (
                      <button
                        onClick={() => handleAssign(req.id)}
                        className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
                      >
                        Assign Lead
                      </button>
                    )}
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
