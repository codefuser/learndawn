'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Sparkles,
  GraduationCap,
  HeartHandshake,
  Users,
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import { useAuth } from '@/lib/auth/context';

export interface HeroSlideData {
  id: string;
  category: string;
  headline: string;
  ctaText: string;
  ctaHref: string;
  image: string;
  alt: string;
  subtitle: string;
  badge: string;
  focalPosition: string;
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
}

export const HERO_SLIDES: HeroSlideData[] = [
  {
    id: 'one-to-one-learning',
    category: 'One-to-One Learning',
    headline: 'One Mentor. One Dream. One Success.',
    ctaText: 'Explore NEET Programme',
    ctaHref: '/exams/neet-ug',
    image: '/images/hero/one-to-one-learning.webp',
    alt: 'LearnDawn mentor coaching a student one-on-one with laptop and textbooks under cinematic red halo lighting',
    subtitle: 'Personalised medical entrance preparation with dedicated AIIMS faculty, high-yield NCERT line-by-line mastery, and individualised rank tracking.',
    badge: 'Flagship NEET UG Mentorship',
    focalPosition: 'center 20%',
    icon: GraduationCap,
    highlights: ['AIIMS & IITian Faculty', 'NCERT Line-by-Line Mastery', 'Simulated CBT Test Series']
  },
  {
    id: 'personal-mentorship',
    category: 'Personal Mentorship',
    headline: 'Guidance That Understands You.',
    ctaText: 'Discover Our Mentorship',
    ctaHref: '/mentorship',
    image: '/images/hero/personal-mentorship.webp',
    alt: 'LearnDawn female mentor providing personal guidance to a student across study desk under subtle red lighting',
    subtitle: 'Empathetic, structured mentorship decoding your academic weak spots, establishing daily study discipline, and guiding every exam milestone.',
    badge: '1:1 Dedicated Faculty Access',
    focalPosition: 'center 20%',
    icon: HeartHandshake,
    highlights: ['Daily Goal Tracking', '1:1 Weekly Review Sessions', 'Stress & Routine Management']
  },
  {
    id: 'academic-support',
    category: 'Individual Academic Support',
    headline: 'Every Student Deserves Personal Attention.',
    ctaText: 'Explore OnePod Learning',
    ctaHref: '/about#onepod',
    image: '/images/hero/academic-support.webp',
    alt: 'LearnDawn faculty guiding a student through academic notes and practice questions with personal attention',
    subtitle: 'Our signature OnePod ecosystem pairs each learner with dedicated subject mentors for real-time doubt resolution and personalized study plans.',
    badge: 'Signature OnePod Ecosystem',
    focalPosition: 'center 20%',
    icon: BookOpen,
    highlights: ['Dedicated OnePod Faculty', 'Rapid Doubt Resolution Desk', 'Custom Revision Blueprints']
  },
  {
    id: 'collaborative-learning',
    category: 'Collaborative Learning',
    headline: 'Learn Together. Grow Together.',
    ctaText: 'Join LearnDawn',
    ctaHref: '/auth/sign-up',
    image: '/images/hero/collaborative-learning.webp',
    alt: 'LearnDawn collaborative learning group with mentor and students around laptop and textbooks discussing problem-solving techniques',
    subtitle: 'Synchronized group discussions, live interactive masterclasses, and peer benchmark testing designed for competitive rankers.',
    badge: 'Synchronized Group Batches',
    focalPosition: 'center 20%',
    icon: Users,
    highlights: ['Live Peer Discussion Pods', 'National Benchmark Drills', 'Interactive Faculty Masterclasses']
  }
];

export const HeroSlider: React.FC = () => {
  const { user } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Touch gesture tracking
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Check prefers-reduced-motion media query
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const toggleManualPause = useCallback(() => {
    setIsManuallyPaused((prev) => !prev);
  }, []);

  // Auto-advance timer (5 seconds)
  useEffect(() => {
    // If reduced motion or user paused or hovering, don't run auto-timer
    if (isHovered || isManuallyPaused) {
      return;
    }

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, isManuallyPaused, handleNext]);

  // Touch gesture listeners
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Minimum swipe threshold: 40px, and horizontal move must dominate vertical move
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNext(); // Swiped left -> next
      } else {
        handlePrev(); // Swiped right -> prev
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Keyboard navigation when slider area is focused
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      toggleManualPause();
    }
  };

  // Resolve CTA link behavior for "Join LearnDawn"
  const getCtaLink = (slide: HeroSlideData) => {
    if (slide.id === 'collaborative-learning') {
      if (user) {
        return user.role === 'admin' ? '/dashboard/admin' : '/dashboard/student';
      }
      return '/auth/sign-up';
    }
    return slide.ctaHref;
  };

  return (
    <div
      ref={sliderRef}
      className="relative w-full overflow-hidden bg-[#050505] text-white selection:bg-red-600/40 selection:text-white select-none focus:outline-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="LearnDawn Mentorship Showcase Carousel"
    >
      {/* Background Ambient Red Lighting & Atmosphere */}
      <div 
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-red-600/[0.08] blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-red-600/[0.06] blur-[160px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Main Expansive Slide Content Container */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-10 relative z-10">
        
        {/* Dynamic Slide Viewport */}
        <div className="relative min-h-[580px] sm:min-h-[620px] lg:min-h-[540px] xl:min-h-[580px] flex items-center">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;
            const SlideIcon = slide.icon;

            return (
              <div
                key={slide.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of 4: ${slide.category}`}
                aria-hidden={!isActive}
                className={`w-full transition-all ${
                  prefersReducedMotion ? 'duration-0' : 'duration-[800ms] ease-in-out'
                } ${
                  isActive
                    ? 'opacity-100 z-10 translate-y-0 relative pointer-events-auto'
                    : 'opacity-0 z-0 translate-y-2 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
                  
                  {/* Left Column: Bold Headline, Tag, Supporting Text & Red CTA */}
                  <div className="lg:col-span-6 xl:col-span-6 space-y-5 sm:space-y-6 text-left">
                    
                    {/* Category Pill Tag & Slide Counter */}
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-red-500/30 text-white text-xs font-semibold shadow-sm backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <SlideIcon className="w-3.5 h-3.5 text-red-400" />
                        <span className="tracking-wide text-zinc-200">{slide.category}</span>
                      </div>
                      
                      <div className="text-xs font-mono font-bold tracking-widest text-zinc-500">
                        <span className="text-red-500">0{index + 1}</span> / 04
                      </div>
                    </div>

                    {/* Grand Cinematic Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.65rem] font-black text-white tracking-tight leading-[1.1] transition-transform">
                      {slide.headline}
                    </h1>

                    {/* Supporting Description Text */}
                    <p className="text-sm sm:text-base lg:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl">
                      {slide.subtitle}
                    </p>

                    {/* Primary CTA Button & Secondary Shortcut */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                      <Link
                        href={getCtaLink(slide)}
                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-red-600/30 ring-1 ring-red-400/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                        aria-label={`${slide.ctaText} - ${slide.category}`}
                      >
                        <span>{slide.ctaText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>

                      <Link
                        href="/learning-system"
                        className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 font-semibold text-xs sm:text-sm transition-all shadow-sm"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-red-500" />
                        <span>Methodology</span>
                      </Link>
                    </div>

                    {/* Key Trust Highlights (Subtle thin borders & restrained effects) */}
                    <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 border-t border-zinc-900">
                      {slide.highlights.map((highlight, hIdx) => (
                        <div 
                          key={hIdx} 
                          className="flex items-center gap-2 p-2 rounded-lg bg-zinc-950/60 border border-zinc-900 text-zinc-300 text-xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          <span className="truncate text-[11px] font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Right Column: Premium Framed Cinematic Learning Scene */}
                  <div className="lg:col-span-6 xl:col-span-6 relative">
                    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                      
                      {/* Ambient Red Rim Glow behind the framed visual */}
                      <div 
                        className="absolute -inset-1.5 bg-gradient-to-tr from-red-600/20 via-red-500/10 to-transparent rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" 
                        aria-hidden="true" 
                      />

                      {/* Framed Image Canvas */}
                      <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-red-500/30 bg-zinc-950 shadow-2xl shadow-black/80">
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          priority={index === 0}
                          loading={index === 0 ? 'eager' : 'lazy'}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 680px"
                          className="object-cover transition-transform duration-700 ease-out"
                          style={{ objectPosition: slide.focalPosition }}
                        />

                        {/* Subtle Cinematic Vignette Overlay to maintain contrast */}
                        <div 
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" 
                          aria-hidden="true" 
                        />
                        <div 
                          className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" 
                          aria-hidden="true" 
                        />

                        {/* Floating Live Badge inside image */}
                        <div className="absolute top-3.5 left-3.5 z-20 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-zinc-200 flex items-center gap-1.5 shadow-md">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                          <span>{slide.badge}</span>
                        </div>

                        {/* Active Scene Indicator Pill */}
                        <div className="absolute bottom-3.5 right-3.5 z-20 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-red-500/40 text-[10px] font-mono font-bold uppercase tracking-wider text-red-400 shadow-md">
                          Scene 0{index + 1}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Bottom Control Bar: Arrows, 4 Slide Indicators & Autoplay Control */}
        <div className="mt-8 pt-4 border-t border-zinc-900/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* 4 Slide Indicators */}
          <div 
            className="flex items-center gap-2.5 sm:gap-3" 
            role="tablist" 
            aria-label="Slide Selector"
          >
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${index + 1}: ${slide.category}`}
                  className={`group relative h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                    isActive 
                      ? 'w-10 sm:w-12 bg-red-600 shadow-md shadow-red-600/50' 
                      : 'w-2.5 sm:w-3 bg-zinc-700/80 hover:bg-zinc-500'
                  }`}
                >
                  <span className="sr-only">{slide.category}</span>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls: Previous / Pause / Next */}
          <div className="flex items-center gap-2">
            
            {/* Play/Pause Button for accessibility & user control */}
            <button
              type="button"
              onClick={toggleManualPause}
              aria-label={isManuallyPaused ? 'Resume automatic slide rotation' : 'Pause automatic slide rotation'}
              title={isManuallyPaused ? 'Resume rotation' : 'Pause rotation'}
              className="p-2 sm:p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              {isManuallyPaused ? (
                <Play className="w-4 h-4 text-red-500" />
              ) : (
                <Pause className="w-4 h-4" />
              )}
            </button>

            {/* Previous Arrow Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous slide"
              className="p-2 sm:p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 active:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-800 hover:border-red-500/50 hover:shadow-md hover:shadow-red-600/10 transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next Arrow Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next slide"
              className="p-2 sm:p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 active:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-800 hover:border-red-500/50 hover:shadow-md hover:shadow-red-600/10 transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};
