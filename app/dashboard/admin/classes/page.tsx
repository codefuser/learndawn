'use client';

import React from 'react';
import { LIVE_CLASSES_DATA } from '@/lib/data/mockData';
import { useToast } from '@/components/ui/Toast';
import { Video, Plus, Calendar, Clock } from 'lucide-react';

export default function AdminClassesPage() {
  const { showToast } = useToast();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Live Classroom Sessions</h1>
          <p className="text-xs text-slate-400">
            Schedule live video lectures, manage stream keys, and review attendee logs.
          </p>
        </div>

        <button
          onClick={() => showToast('New live session scheduling form opened', 'info')}
          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Schedule Live Class</span>
        </button>
      </div>

      <div className="space-y-4">
        {LIVE_CLASSES_DATA.map((cls) => (
          <div
            key={cls.id}
            className="p-6 rounded-3xl bg-slate-950 border border-slate-800 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  cls.status === 'live' ? 'bg-rose-950 text-rose-400 border border-rose-900 animate-pulse' : 'bg-slate-900 text-slate-300'
                }`}>
                  {cls.status.toUpperCase()}
                </span>
                <span className="text-xs text-slate-400">{cls.subject_name}</span>
              </div>
              <h3 className="text-base font-bold text-white">{cls.title}</h3>
              <p className="text-xs text-slate-400">
                Lead Educator: <strong className="text-white">{cls.educator_name}</strong> • Provider: {cls.provider}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-400">Room: {cls.stream_room_id}</span>
              <button
                onClick={() => showToast(`Entering room moderator console for ${cls.title}`, 'info')}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 transition"
              >
                Moderate Room
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
