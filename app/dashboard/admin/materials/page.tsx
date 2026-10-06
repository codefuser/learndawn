'use client';

import React from 'react';
import { STUDY_MATERIALS_DATA } from '@/lib/data/mockData';
import { useToast } from '@/components/ui/Toast';
import { FileText, Plus, Upload, ShieldCheck } from 'lucide-react';

export default function AdminMaterialsPage() {
  const { showToast } = useToast();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Study Materials & Private Vault</h1>
          <p className="text-xs text-slate-400">
            Upload notes into private Supabase Storage buckets with encrypted download authorizations.
          </p>
        </div>

        <button
          onClick={() => showToast('Secure file upload modal initiated', 'info')}
          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition flex items-center gap-1.5"
        >
          <Upload className="w-4 h-4" />
          <span>Upload PDF Document</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STUDY_MATERIALS_DATA.map((mat) => (
          <div
            key={mat.id}
            className="p-6 rounded-3xl bg-slate-950 border border-slate-800 shadow-md space-y-3"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-900">
                {mat.material_type.replace('_', ' ')}
              </span>
              <span className="text-emerald-400 font-semibold">{mat.download_count} Downloads</span>
            </div>

            <h3 className="text-base font-bold text-white">{mat.title}</h3>
            <p className="text-xs text-slate-400">{mat.subject_name} • {mat.file_size} • {mat.page_count} Pages</p>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1 text-[11px] text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" /> Gated Storage
              </span>
              <button
                onClick={() => showToast(`Regenerating signed URL for ${mat.title}`, 'info')}
                className="hover:underline text-blue-400"
              >
                Inspect Token
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
