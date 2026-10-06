'use client';

import React, { useState, useEffect } from 'react';
import { Question } from '@/types';
import { QuestionService } from '@/services/questions';
import { 
  CheckCircle2, 
  XCircle, 
  Bookmark, 
  BookmarkCheck, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  Timer, 
  Trophy, 
  Sparkles,
  BarChart2
} from 'lucide-react';
import { useToast } from '@/components/ui/Toast';

interface PracticeEngineProps {
  initialQuestions?: Question[];
  title?: string;
}

export const PracticeEngine: React.FC<PracticeEngineProps> = ({
  initialQuestions,
  title = 'Interactive Practice Module',
}) => {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions || []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [userScore, setUserScore] = useState({ correct: 0, incorrect: 0, totalAttempted: 0 });
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const { showToast } = useToast();

  useEffect(() => {
    async function loadData() {
      if (!initialQuestions) {
        const fetched = await QuestionService.getQuestions();
        setQuestions(fetched);
      }
    }
    loadData();
  }, [initialQuestions]);

  // Question Timer
  useEffect(() => {
    if (isSubmitted) return;
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted, currentIndex]);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (optId: string) => {
    if (isSubmitted) return;
    setSelectedOptionId(optId);
  };

  const handleSubmit = async () => {
    if (!selectedOptionId || !currentQ) return;
    setIsSubmitted(true);

    const chosenOption = currentQ.options.find((o) => o.id === selectedOptionId);
    const isCorrect = Boolean(chosenOption?.is_correct);

    setUserScore((prev) => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      incorrect: isCorrect ? prev.incorrect : prev.incorrect + 1,
      totalAttempted: prev.totalAttempted + 1,
    }));

    await QuestionService.recordAttempt({
      questionId: currentQ.id,
      selectedOptionId,
      isCorrect,
      timeTakenSeconds: seconds,
    });

    if (isCorrect) {
      showToast('Correct! Excellent reasoning.', 'success');
    } else {
      showToast('Incorrect. Review the detailed explanation below.', 'error');
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsSubmitted(false);
      setIsBookmarked(false);
      setSeconds(0);
    } else {
      // Completed all questions in set
      showToast('Practice set completed!', 'info');
    }
  };

  const handleToggleBookmark = async () => {
    if (!currentQ) return;
    const active = await QuestionService.toggleBookmark(currentQ.id);
    setIsBookmarked(active);
    showToast(active ? 'Question saved to bookmarks' : 'Bookmark removed', 'info');
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setSeconds(0);
    setUserScore({ correct: 0, incorrect: 0, totalAttempted: 0 });
  };

  if (!currentQ) {
    return (
      <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
        <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
        <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">
          Loading Question Bank...
        </h4>
      </div>
    );
  }

  const accuracyRate = userScore.totalAttempted > 0 
    ? Math.round((userScore.correct / userScore.totalAttempted) * 100) 
    : 0;

  return (
    <div className="space-y-6">
      {/* Top Header & Scoreboard Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {title}
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Question {currentIndex + 1} of {questions.length}
          </h3>
        </div>

        {/* Real-time stats */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            <Timer className="w-3.5 h-3.5 text-blue-500" />
            <span>{Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
            <Trophy className="w-3.5 h-3.5" />
            <span>{userScore.correct} / {userScore.totalAttempted}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>{accuracyRate}% Accuracy</span>
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
              currentQ.difficulty === 'easy'
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400'
                : currentQ.difficulty === 'medium'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400'
                : 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400'
            }`}>
              {currentQ.difficulty} Difficulty
            </span>
            {currentQ.is_pyq && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
                PYQ {currentQ.year_asked}
              </span>
            )}
          </div>

          <button
            onClick={handleToggleBookmark}
            className={`p-2 rounded-xl border transition ${
              isBookmarked
                ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 border-amber-300'
                : 'bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700 hover:text-slate-600'
            }`}
            aria-label="Bookmark question"
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
          </button>
        </div>

        {/* Question Text */}
        <div className="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
          {currentQ.question_text}
        </div>

        {/* Options List */}
        <div className="space-y-3">
          {currentQ.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            let optionStyle = 'border-slate-200 dark:border-slate-800 hover:border-blue-400 bg-slate-50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200';

            if (isSubmitted) {
              if (option.is_correct) {
                optionStyle = 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-100 ring-2 ring-emerald-500/20';
              } else if (isSelected && !option.is_correct) {
                optionStyle = 'border-rose-500 bg-rose-50/80 dark:bg-rose-950/50 text-rose-900 dark:text-rose-100 ring-2 ring-rose-500/20';
              } else {
                optionStyle = 'opacity-50 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900';
              }
            } else if (isSelected) {
              optionStyle = 'border-blue-600 bg-blue-50/60 dark:bg-blue-950/40 text-blue-900 dark:text-blue-100 ring-2 ring-blue-500/30';
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                disabled={isSubmitted}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left text-sm transition-all duration-200 ${optionStyle}`}
              >
                <div className="flex items-center gap-3.5">
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}>
                    {option.option_key}
                  </span>
                  <span className="font-normal">{option.option_text}</span>
                </div>

                {isSubmitted && option.is_correct && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 ml-2" />
                )}
                {isSubmitted && isSelected && !option.is_correct && (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={handleRestart}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Module</span>
          </button>

          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={!selectedOptionId}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-semibold text-xs shadow-md transition"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md transition flex items-center gap-1.5"
            >
              <span>{currentIndex < questions.length - 1 ? 'Next Question' : 'Complete Practice'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Detailed Explanation Box upon Submission */}
        {isSubmitted && (
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2 animate-in fade-in duration-300">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Step-by-Step Pedagogical Explanation</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentQ.explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
