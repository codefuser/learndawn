'use client';

import React from 'react';
import { MENTORS_DATA } from '@/lib/data/mockData';
import { useToast } from '@/components/ui/Toast';
import { HeartHandshake, Calendar, Star, Clock, Video } from 'lucide-react';

export default function StudentMentorshipPage() {
  const { showToast } = useToast();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          My Mentorship & 1:1 Bookings
        </h1>
        <p className="text-xs text-slate-500">
          Connect directly with medical rankers and IITian guides for personalized strategy and doubt resolution.
        </p>
      </div>

      {/* Active Upcoming Session Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-red-900 to-red-950 text-white shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
            Confirmed Upcoming Session
          </span>
          <span className="text-xs text-red-200">Tomorrow at 4:00 PM IST</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center font-bold text-lg">
            S
          </div>
          <div>
            <h3 className="text-lg font-bold">1:1 Strategy Review with Dr. Siddharth Rao (AIIMS)</h3>
            <p className="text-xs text-slate-300">Agenda: Time management during NEET Physics and negative marking elimination.</p>
          </div>
        </div>

        <button
          onClick={() => showToast('Connecting to secure encrypted meeting room...', 'info')}
          className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs shadow-md transition flex items-center gap-2"
        >
          <Video className="w-3.5 h-3.5" />
          <span>Join Meeting Room (Opens 10m Prior)</span>
        </button>
      </div>

      {/* Available Mentors */}
      <div className="pt-4 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Book Another 1:1 Strategy Call
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENTORS_DATA.map((mentor) => (
            <div
              key={mentor.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-600 font-bold flex items-center justify-center">
                    {mentor.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{mentor.name}</h4>
                    <span className="text-[11px] text-amber-500 font-semibold">★ {mentor.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 line-clamp-2">{mentor.headline}</p>
              </div>

              <button
                onClick={() => showToast(`Requested 1:1 call with ${mentor.name}.`, 'success')}
                className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-red-600 hover:text-white text-slate-800 dark:text-slate-200 font-semibold text-xs transition"
              >
                Request 45-Min Session
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
