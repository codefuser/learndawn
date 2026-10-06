'use client';

import React from 'react';
import { Bell, CheckCircle2, Clock, Video, Award } from 'lucide-react';

export default function StudentNotificationsPage() {
  const notifications = [
    {
      id: '1',
      title: 'Live Class Starting in 30 Minutes',
      message: 'High-Yield Organic Reaction Mechanisms with Dr. Aarav Sharma begins at 6:00 PM IST.',
      time: '25m ago',
      unread: true,
      icon: <Video className="w-4 h-4 text-blue-500" />,
    },
    {
      id: '2',
      title: 'Mock Test 04 Score & AIR Published',
      message: 'Your predicted All-India rank is 1,180. Review weak topic diagnostic analytics.',
      time: '3 hours ago',
      unread: false,
      icon: <Award className="w-4 h-4 text-amber-500" />,
    },
    {
      id: '3',
      title: '1:1 Mentorship Session Confirmed',
      message: 'Dr. Siddharth Rao has accepted your strategy call request for tomorrow at 4:00 PM.',
      time: 'Yesterday',
      unread: false,
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />,
    },
  ];

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Notifications & Academic Alerts
        </h1>
        <p className="text-xs text-slate-500">
          Stay updated with class schedules, test deadlines, and counselor notes.
        </p>
      </div>

      <div className="space-y-3">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`p-4 rounded-2xl border transition flex items-start gap-4 ${
              n.unread
                ? 'bg-blue-50/50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/60'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
            }`}
          >
            <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0">
              {n.icon}
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{n.title}</h4>
                <span className="text-[11px] text-slate-400">{n.time}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {n.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
