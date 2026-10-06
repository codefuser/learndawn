'use client';

import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  Maximize2, 
  CheckCircle, 
  FileText, 
  BookOpen, 
  Lock, 
  ChevronRight, 
  ChevronLeft,
  ShieldCheck,
  Download
} from 'lucide-react';
import { Lesson, CourseSection } from '@/types';
import { useToast } from '@/components/ui/Toast';

interface VideoPlayerProps {
  courseTitle: string;
  sections?: CourseSection[];
  initialLesson?: Lesson;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  courseTitle,
  sections,
  initialLesson,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'notes' | 'curriculum' | 'resources'>('notes');
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentLesson, setCurrentLesson] = useState<Lesson>(
    initialLesson || {
      id: 'les-demo-1',
      section_id: 'sec-1',
      title: 'Cell Biology & Membrane Transport Mechanics',
      lesson_order: 1,
      duration_seconds: 3240,
      video_provider: 'custom_stream',
      notes_content: 'High-yield points: Singer-Nicolson fluid mosaic model (1972). Phospholipids provide fluidity, proteins confer mosaic characteristics. Passive diffusion vs Facilitated diffusion (GLUT transporters) vs Active transport (Na+/K+ ATPase pump uses 1 ATP per cycle to pump 3 Na+ out and 2 K+ in).',
      is_preview_allowed: true,
    }
  );

  const { showToast } = useToast();

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleToggleComplete = () => {
    const nextState = !isCompleted;
    setIsCompleted(nextState);
    showToast(nextState ? 'Lesson marked as completed! Progress updated.' : 'Lesson marked incomplete', 'info');
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {courseTitle}
          </span>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            {currentLesson.title}
          </h2>
        </div>

        <button
          onClick={handleToggleComplete}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition ${
            isCompleted
              ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-300'
              : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
          }`}
        >
          <CheckCircle className="w-4 h-4 text-emerald-500" />
          <span>{isCompleted ? 'Completed' : 'Mark Completed'}</span>
        </button>
      </div>

      {/* Main Grid: Player on Left, Navigation/Notes on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Secure Video Player Container */}
        <div className="lg:col-span-8 space-y-4">
          <div className="relative aspect-video rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl flex flex-col justify-between p-4 group">
            {/* Watermark Security Overlay (Protects against illegal screencasts) */}
            <div className="absolute top-4 right-4 pointer-events-none opacity-40 select-none text-[10px] font-mono text-slate-400">
              LEARNDAWN SECURE STREAM • ID: 2026-LD-705B
            </div>

            {/* Simulated Live or Recorded Visual Screen */}
            <div className="absolute inset-0 flex items-center justify-center">
              {isPlaying ? (
                <div className="text-center space-y-2 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center mx-auto text-blue-400 animate-pulse">
                    <Play className="w-8 h-8 fill-blue-400 ml-1" />
                  </div>
                  <p className="text-xs text-slate-300 font-mono">
                    Streaming HLS Secure Encrypted Feed (1080p 60fps)
                  </p>
                </div>
              ) : (
                <div className="text-center space-y-3">
                  <button
                    onClick={handleTogglePlay}
                    className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-xl shadow-blue-500/30 transition transform hover:scale-105 mx-auto"
                    aria-label="Play video lesson"
                  >
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </button>
                  <p className="text-xs text-slate-400 font-medium">
                    Click to begin lesson video lecture
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Controls Bar */}
            <div className="relative z-10 mt-auto bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-slate-700/60 flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleTogglePlay}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-slate-300" />
                  <span className="font-mono text-[11px] text-slate-400">12:40 / 54:00</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-600/30 text-blue-300 border border-blue-400/30">
                  HD 1080p
                </span>
                <button className="p-1.5 rounded-lg hover:bg-white/10 transition" aria-label="Fullscreen">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Secure Video Provider Tag */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 px-2">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>DRM Encrypted Feed via Learndawn Private Edge CDN</span>
            </div>
            <span>Playback Speed: 1.0x</span>
          </div>
        </div>

        {/* Right Column: Tabbed Notes & Chapter Navigation */}
        <div className="lg:col-span-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col h-[480px]">
          {/* Tabs */}
          <div className="grid grid-cols-3 border-b border-slate-200 dark:border-slate-800 text-xs font-semibold bg-slate-50 dark:bg-slate-950/60">
            <button
              onClick={() => setActiveTab('notes')}
              className={`py-3 text-center transition ${
                activeTab === 'notes'
                  ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Lecture Notes
            </button>
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`py-3 text-center transition ${
                activeTab === 'curriculum'
                  ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Curriculum
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`py-3 text-center transition ${
                activeTab === 'resources'
                  ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Attachments
            </button>
          </div>

          {/* Tab 1: Notes Content */}
          {activeTab === 'notes' && (
            <div className="p-5 flex-1 overflow-y-auto text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-3">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-blue-500" />
                <span>Instructor Synopsis & Formulas</span>
              </div>
              <p>{currentLesson.notes_content}</p>
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-200">
                <strong>Memory Trick:</strong> Phospholipids are amphipathic. Polar heads face outer aqueous phases while fatty acid tails form the hydrophobic core.
              </div>
            </div>
          )}

          {/* Tab 2: Curriculum List */}
          {activeTab === 'curriculum' && (
            <div className="p-3 flex-1 overflow-y-auto space-y-2">
              {(sections || [
                {
                  id: 'sec-1',
                  course_id: 'c-1',
                  title: 'Module 1: Cellular Organization',
                  section_order: 1,
                  lessons: [
                    { id: 'l1', section_id: 'sec-1', title: 'Cell: The Unit of Life', lesson_order: 1, duration_seconds: 3240, video_provider: 'custom_stream', is_preview_allowed: true, is_completed: true },
                    { id: 'l2', section_id: 'sec-1', title: 'Cell Cycle & Checkpoints', lesson_order: 2, duration_seconds: 2880, video_provider: 'custom_stream', is_preview_allowed: false, is_completed: false },
                    { id: 'l3', section_id: 'sec-1', title: 'Biomolecules & Enzyme Kinetics', lesson_order: 3, duration_seconds: 3600, video_provider: 'custom_stream', is_preview_allowed: false, is_completed: false },
                  ],
                },
              ]).map((section) => (
                <div key={section.id} className="space-y-1">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
                    {section.title}
                  </div>
                  {section.lessons.map((les) => (
                    <button
                      key={les.id}
                      onClick={() => setCurrentLesson(les)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs transition ${
                        currentLesson.id === les.id
                          ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                          : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {les.is_completed ? (
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        ) : les.is_preview_allowed ? (
                          <Play className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        ) : (
                          <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        )}
                        <span className="truncate">{les.title}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {Math.floor(les.duration_seconds / 60)}m
                      </span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Downloadable Attachments */}
          {activeTab === 'resources' && (
            <div className="p-4 flex-1 overflow-y-auto space-y-3">
              {[
                { name: 'Cell Structure NCERT Annotated PDF', size: '4.2 MB' },
                { name: 'Previous 10-Year Question Compendium', size: '8.1 MB' },
                { name: 'Enzyme Kinetics Formula Flashcard', size: '1.5 MB' },
              ].map((res, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-purple-500" />
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 block truncate max-w-[160px]">
                        {res.name}
                      </span>
                      <span className="text-[10px] text-slate-400">{res.size}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => showToast(`Downloading ${res.name}`, 'info')}
                    className="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition"
                    aria-label="Download attachment"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
