'use client';

import React from 'react';
import { STUDY_MATERIALS_DATA } from '@/lib/data/mockData';
import { useToast } from '@/components/ui/Toast';
import { Layers, Plus, FileText } from 'lucide-react';

export default function AdminResourcesPage() {
  const { showToast } = useToast();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Public Resource Catalog</h1>
          <p className="text-xs text-slate-400">
            Publish downloadable revision sheets, articles, and syllabus matrices.
          </p>
        </div>

        <button
          onClick={() => showToast('New public resource editor opened', 'info')}
          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Publish Resource</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STUDY_MATERIALS_DATA.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-3 shadow-md"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 text-slate-400">
              {item.material_type}
            </span>
            <h3 className="text-base font-bold text-white">{item.title}</h3>
            <p className="text-xs text-slate-400">{item.subject_name} • {item.page_count} Pages</p>
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-red-400">
              <span>Published Live</span>
              <button
                onClick={() => showToast(`Modifying ${item.title}`, 'info')}
                className="text-red-400 hover:underline"
              >
                Edit Content
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
