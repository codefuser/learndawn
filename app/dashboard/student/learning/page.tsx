'use client';

import React from 'react';
import { VideoPlayer } from '@/components/learning/VideoPlayer';

export default function StudentLearningPlayerPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Interactive Video Classroom
        </h1>
        <p className="text-xs text-slate-500">
          Learn with adaptive streaming, chapter navigation, synchronized whiteboard notes, and downloadable assets.
        </p>
      </div>

      <VideoPlayer courseTitle="NEET Conqueror 360° Comprehensive Batch" />
    </div>
  );
}
