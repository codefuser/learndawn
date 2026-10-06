'use client';

import React from 'react';
import { PracticeEngine } from '@/components/practice/PracticeEngine';
import { QUESTIONS_DATA } from '@/lib/data/mockData';

export default function StudentPracticePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Chapter-wise Practice Module
        </h1>
        <p className="text-xs text-slate-500">
          Solve previous-year and model test questions. Explanations and performance statistics are updated in real-time.
        </p>
      </div>

      <PracticeEngine initialQuestions={QUESTIONS_DATA} title="Adaptive Diagnostic Practice" />
    </div>
  );
}
