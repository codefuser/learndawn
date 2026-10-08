'use client';

import React from 'react';
import { BarChart3, TrendingUp, Users, BookOpen, Clock } from 'lucide-react';

export default function AdminAnalyticsPage() {
  const channelData = [
    { source: 'Direct & Organic Search', percentage: '48%', students: '24,000+' },
    { source: 'School Board Partnerships', percentage: '26%', students: '13,000+' },
    { source: 'Student Referrals', percentage: '18%', students: '9,000+' },
    { source: 'Academic Webinars', percentage: '8%', students: '4,000+' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Platform Growth & Learning Analytics</h1>
        <p className="text-xs text-slate-400">
          Telemetry aggregated from question attempts, live class attendance, and test accuracy curves.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-2">
          <span className="text-xs text-slate-400">Monthly Active Students</span>
          <div className="text-3xl font-black text-white">38,420</div>
          <span className="text-xs text-red-400 font-semibold">↑ +14.8% Month-over-Month</span>
        </div>

        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-2">
          <span className="text-xs text-slate-400">Average Daily Study Time</span>
          <div className="text-3xl font-black text-white">2h 18m</div>
          <span className="text-xs text-slate-400">Measured across video & practice drills</span>
        </div>

        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-2">
          <span className="text-xs text-slate-400">Total Practice Attempts Logged</span>
          <div className="text-3xl font-black text-red-400">1,480,000+</div>
          <span className="text-xs text-slate-400">Stored in public.question_attempts</span>
        </div>
      </div>

      {/* Acquisition Sources */}
      <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white">Student Enrollment Channels</h3>
        <div className="space-y-3">
          {channelData.map((item) => (
            <div key={item.source} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-medium">{item.source}</span>
                <span className="font-bold text-white">{item.students} ({item.percentage})</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: item.percentage }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
