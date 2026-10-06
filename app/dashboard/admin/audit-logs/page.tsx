'use client';

import React from 'react';
import { ScrollText, ShieldCheck, Clock } from 'lucide-react';

export default function AdminAuditLogsPage() {
  const auditLogs = [
    { id: '1', action: 'COURSE_PUBLISHED', entity: 'NEET Conqueror 360 Batch', user: 'admin@learndawn.in', ip: '103.21.244.12', time: '2 hours ago' },
    { id: '2', action: 'STUDY_MATERIAL_UPLOADED', entity: 'Human Physiology Mind Map PDF', user: 'faculty@learndawn.in', ip: '49.36.128.8', time: '4 hours ago' },
    { id: '3', action: 'ROLE_MODIFIED', entity: 'Assigned "educator" role to Dr. Aarav', user: 'admin@learndawn.in', ip: '103.21.244.12', time: 'Yesterday' },
    { id: '4', action: 'QUESTION_BULK_UPLOAD', entity: 'Uploaded 250 Questions (Cell Bio)', user: 'faculty@learndawn.in', ip: '49.36.128.8', time: 'Yesterday' },
    { id: '5', action: 'SYSTEM_BACKUP_SNAPSHOT', entity: 'Postgres Database Snapshot Created', user: 'SYSTEM_CRON', ip: '127.0.0.1', time: '2 days ago' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">System Security & Audit Logs</h1>
        <p className="text-xs text-slate-400">
          Immutable event log of administrative actions, role updates, and content modifications.
        </p>
      </div>

      <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-400 font-semibold">
                <th className="py-3 px-4">Event Code</th>
                <th className="py-3 px-4">Affected Entity</th>
                <th className="py-3 px-4">Origin User</th>
                <th className="py-3 px-4">IP Address</th>
                <th className="py-3 px-4 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-900/40 transition">
                  <td className="py-3 px-4">
                    <span className="font-mono text-amber-400 font-bold">{log.action}</span>
                  </td>
                  <td className="py-3 px-4 font-medium text-white">{log.entity}</td>
                  <td className="py-3 px-4 text-slate-300">{log.user}</td>
                  <td className="py-3 px-4 font-mono text-[11px] text-slate-500">{log.ip}</td>
                  <td className="py-3 px-4 text-right text-slate-400">{log.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
