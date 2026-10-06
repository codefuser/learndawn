'use client';

import React from 'react';
import { MENTORS_DATA } from '@/lib/data/mockData';
import { useToast } from '@/components/ui/Toast';
import { HeartHandshake, Plus, Star, CheckCircle2 } from 'lucide-react';

export default function AdminMentorsPage() {
  const { showToast } = useToast();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Mentors & Guidance Faculty</h1>
          <p className="text-xs text-slate-400">
            Verify academic credentials, assign student caseloads, and monitor session reviews.
          </p>
        </div>

        <button
          onClick={() => showToast('Onboard new mentor modal opened', 'info')}
          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Onboard New Mentor</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MENTORS_DATA.map((mentor) => (
          <div
            key={mentor.id}
            className="p-6 rounded-3xl bg-slate-950 border border-slate-800 shadow-md space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-lg">
                {mentor.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{mentor.name}</h3>
                <span className="text-xs text-amber-400">★ {mentor.rating} Rating ({mentor.total_sessions} completed)</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">{mentor.headline}</p>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span className="text-emerald-400 font-semibold">● Verified Faculty</span>
              <button
                onClick={() => showToast(`Opening schedule manager for ${mentor.name}`, 'info')}
                className="hover:underline text-blue-400"
              >
                Manage Slots
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
