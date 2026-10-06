'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  X, 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  Layers, 
  FileText, 
  Users, 
  Clock, 
  Sparkles 
} from 'lucide-react';
import { EXAMS_DATA, COURSES_DATA, SUBJECTS_DATA, STUDY_MATERIALS_DATA, MENTORS_DATA } from '@/lib/data/mockData';
import { SearchResultItem } from '@/types';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'NEET UG 2025',
    'Physics mechanics',
    'AIIMS Nursing solved papers',
    'Calculus mock questions',
  ]);
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Exams' | 'Courses' | 'Subjects' | 'Study Materials'>('All');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Aggregate searchable items
  const allResults: SearchResultItem[] = [
    ...EXAMS_DATA.map((e) => ({
      id: e.id,
      title: e.title,
      category: 'Exams' as const,
      subtitle: e.tagline,
      href: `/exams/${e.slug}`,
      badge: e.badge_label,
    })),
    ...COURSES_DATA.map((c) => ({
      id: c.id,
      title: c.title,
      category: 'Courses' as const,
      subtitle: `${c.difficulty_level} • By ${c.instructor_name}`,
      href: `/courses/${c.slug}`,
      badge: `₹${c.price}`,
    })),
    ...SUBJECTS_DATA.map((s) => ({
      id: s.id,
      title: s.name,
      category: 'Subjects' as const,
      subtitle: s.description,
      href: `/learning-system#${s.slug}`,
      badge: `${s.chapters_count} Chapters`,
    })),
    ...STUDY_MATERIALS_DATA.map((m) => ({
      id: m.id,
      title: m.title,
      category: 'Study Materials' as const,
      subtitle: `${m.subject_name} • ${m.file_size} • ${m.page_count} pages`,
      href: `/resources/${m.slug}`,
      badge: m.material_type.replace('_', ' ').toUpperCase(),
    })),
    ...MENTORS_DATA.map((m) => ({
      id: m.id,
      title: m.name,
      category: 'Mentors' as const,
      subtitle: m.headline,
      href: `/mentorship#${m.id}`,
      badge: `★ ${m.rating}`,
    })),
  ];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open triggered from layout listener
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredResults = allResults.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery =
      query.trim() === '' ||
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const handleSelect = (href: string, title: string) => {
    if (!recentSearches.includes(title)) {
      setRecentSearches((prev) => [title, ...prev.slice(0, 4)]);
    }
    onClose();
    router.push(href);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Exams':
        return <GraduationCap className="w-4 h-4 text-blue-500" />;
      case 'Courses':
        return <BookOpen className="w-4 h-4 text-amber-500" />;
      case 'Subjects':
        return <Layers className="w-4 h-4 text-emerald-500" />;
      case 'Study Materials':
        return <FileText className="w-4 h-4 text-purple-500" />;
      default:
        return <Users className="w-4 h-4 text-rose-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search exams, subjects, chapters or courses... (ESC to close)"
            className="w-full py-4 pl-3 pr-10 bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none text-base"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs text-slate-400 border border-slate-300 dark:border-slate-700 rounded bg-slate-100 dark:bg-slate-800">
              ESC
            </kbd>
          )}
        </div>

        {/* Filter Categories Chips */}
        <div className="flex items-center gap-2 px-4 py-2.5 overflow-x-auto bg-slate-50 dark:bg-slate-950/50 border-b border-slate-200/60 dark:border-slate-800/60 text-xs">
          {(['All', 'Exams', 'Courses', 'Subjects', 'Study Materials'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full font-medium transition whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Results / Suggestions */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {query.trim() === '' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Recent Searches
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300 transition"
                  >
                    <span>{term}</span>
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Popular Goals
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {EXAMS_DATA.slice(0, 4).map((exam) => (
                    <button
                      key={exam.id}
                      onClick={() => handleSelect(`/exams/${exam.slug}`, exam.title)}
                      className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-slate-800/50 text-left transition group"
                    >
                      <div className="flex items-center gap-2.5">
                        <GraduationCap className="w-4 h-4 text-blue-500 shrink-0" />
                        <div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            {exam.title}
                          </div>
                          <div className="text-xs text-slate-500 truncate max-w-[180px]">
                            {exam.short_code} • {exam.category}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-500 transition" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {query.trim() !== '' && filteredResults.length > 0 && (
            <div className="space-y-1.5">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-2 mb-1">
                Matching Results ({filteredResults.length})
              </div>
              {filteredResults.map((item) => (
                <button
                  key={`${item.category}-${item.id}`}
                  onClick={() => handleSelect(item.href, item.title)}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition text-left group border border-transparent hover:border-slate-200 dark:hover:border-slate-700/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-500 transition shrink-0 ml-2" />
                </button>
              ))}
            </div>
          )}

          {query.trim() !== '' && filteredResults.length === 0 && (
            <div className="py-12 text-center">
              <Search className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
              <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                No matching results found
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mt-1">
                We couldn&apos;t find anything matching &quot;{query}&quot;. Try searching for &quot;NEET&quot;, &quot;Physics&quot;, &quot;Biology&quot;, or &quot;AIIMS&quot;.
              </p>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Search index connected to Learndawn Knowledge Engine</span>
          <span className="hidden sm:inline">Press ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
};
