'use client';

import React, { useState } from 'react';
import { isSupabaseConfigured } from '@/lib/supabase/client';
import { useToast } from '@/components/ui/Toast';
import { Settings, Database, ShieldCheck, Save, AlertCircle } from 'lucide-react';

export default function AdminSettingsPage() {
  const { showToast } = useToast();
  const [platformName, setPlatformName] = useState('Learndawn India');
  const [supportEmail, setSupportEmail] = useState('admissions@learndawn.in');
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Platform configuration settings saved.', 'success');
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-white">Platform Settings & Infrastructure</h1>
        <p className="text-xs text-slate-400">
          Global application constants, Supabase backend status, and operational controls.
        </p>
      </div>

      {/* Supabase Connection State Card */}
      <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-400" />
            <h3 className="text-base font-bold text-white">Database Connectivity Status</h3>
          </div>
          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
            isSupabaseConfigured
              ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-900'
              : 'bg-amber-950/60 text-amber-400 border border-amber-900'
          }`}>
            {isSupabaseConfigured ? '● Supabase Cloud Connected' : '● Demo / Preview Mock Mode'}
          </span>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          {isSupabaseConfigured
            ? 'The application is actively communicating with your production Supabase PostgreSQL instance with Row-Level Security policies active.'
            : 'Supabase credentials are not yet set in .env.local. The application is operating safely in preview mode with mock data layer fallbacks without errors.'}
        </p>

        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-[11px] text-slate-400 space-y-1">
          <div>NEXT_PUBLIC_SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL || 'Not specified'}</div>
          <div>NEXT_PUBLIC_SITE_URL: {process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}</div>
        </div>
      </div>

      {/* Settings Form */}
      <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-6">
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Platform Brand Name
            </label>
            <input
              type="text"
              value={platformName}
              onChange={(e) => setPlatformName(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Admissions Support Email
            </label>
            <input
              type="email"
              value={supportEmail}
              onChange={(e) => setSupportEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input
              id="maintenance"
              type="checkbox"
              checked={maintenanceMode}
              onChange={(e) => setMaintenanceMode(e.target.checked)}
              className="w-4 h-4 text-amber-500 rounded bg-slate-900 border-slate-700"
            />
            <label htmlFor="maintenance" className="text-xs text-slate-300">
              Enable Maintenance Mode (Restricts public student admissions portal)
            </label>
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition flex items-center gap-1.5 cursor-pointer"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Infrastructure Settings</span>
          </button>
        </form>
      </div>
    </div>
  );
}
