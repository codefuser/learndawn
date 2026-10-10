'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { useAuth } from '@/lib/auth/context';
import { useLanguage, SupportedLanguage } from '@/lib/i18n/context';
import { useTheme } from '@/lib/theme/context';
import { 
  ChevronDown, 
  Globe, 
  Sun,
  Moon,
  User, 
  LayoutDashboard, 
  ShieldAlert, 
  LogOut, 
  ArrowRight,
  BookOpen,
  GraduationCap,
  Layers,
  Award,
  PhoneCall,
  CheckCircle2,
  Stethoscope,
  Cpu,
  Compass,
  Heart,
  Briefcase,
  Headphones,
  Users
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  // Navigation Dropdown states for Desktop / Laptop
  const [programsOpen, setProgramsOpen] = useState(false);
  const [learningOpen, setLearningOpen] = useState(false);
  const [guidanceOpen, setGuidanceOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // Mobile sub-accordions
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileLearningOpen, setMobileLearningOpen] = useState(false);
  const [mobileGuidanceOpen, setMobileGuidanceOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const pathname = usePathname();
  const { user, signOut, switchDemoRole } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const programsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const learningTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const guidanceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProgramsEnter = () => {
    if (programsTimeoutRef.current) clearTimeout(programsTimeoutRef.current);
    setProgramsOpen(true);
    setLearningOpen(false);
    setGuidanceOpen(false);
    setAboutOpen(false);
  };
  const handleProgramsLeave = () => {
    programsTimeoutRef.current = setTimeout(() => setProgramsOpen(false), 150);
  };

  const handleLearningEnter = () => {
    if (learningTimeoutRef.current) clearTimeout(learningTimeoutRef.current);
    setLearningOpen(true);
    setProgramsOpen(false);
    setGuidanceOpen(false);
    setAboutOpen(false);
  };
  const handleLearningLeave = () => {
    learningTimeoutRef.current = setTimeout(() => setLearningOpen(false), 150);
  };

  const handleGuidanceEnter = () => {
    if (guidanceTimeoutRef.current) clearTimeout(guidanceTimeoutRef.current);
    setGuidanceOpen(true);
    setProgramsOpen(false);
    setLearningOpen(false);
    setAboutOpen(false);
  };
  const handleGuidanceLeave = () => {
    guidanceTimeoutRef.current = setTimeout(() => setGuidanceOpen(false), 150);
  };

  const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutOpen(true);
    setProgramsOpen(false);
    setLearningOpen(false);
    setGuidanceOpen(false);
  };
  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => setAboutOpen(false), 150);
  };

  const isProgramsActive = ['/exams', '/academics'].some(p => pathname.startsWith(p));
  const isLearningActive = ['/courses', '/learning-system', '/practice'].some(p => pathname.startsWith(p));
  const isGuidanceActive = ['/mentorship', '/career-guidance', '/academic-counselling'].some(p => pathname.startsWith(p));
  const isAboutActive = ['/about', '/student-desk', '/mental-health', '/careers', '/contact'].some(p => pathname.startsWith(p));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 dark:bg-[#08080b]/85 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-b border-slate-200/60 dark:border-white/[0.06] py-2 sm:py-2.5'
            : 'bg-white/70 dark:bg-black/60 backdrop-blur-md border-b border-transparent py-2.5 sm:py-3.5'
        }`}
      >
        {/* Ambient Red Glow Line along bottom of sticky header when scrolled */}
        <div 
          className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/35 to-transparent transition-opacity duration-500 pointer-events-none ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`} 
        />

        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-2">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            <BrandLogo variant="full" size="lg" />
          </div>

          {/* Desktop & Laptop Navigation (Visible on lg: 1024px+ screens) */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 text-xs xl:text-sm font-semibold flex-1 mx-4">
            
            {/* Home */}
            <Link
              href="/"
              className={`px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer outline-none focus:outline-none focus:ring-0 ${
                pathname === '/'
                  ? 'text-red-500 font-bold bg-zinc-100 dark:bg-zinc-900'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
              }`}
            >
              {t('nav.home')}
            </Link>

            {/* Programs & Exams Dropdown */}
            <div 
              className="relative shrink-0"
              onMouseEnter={handleProgramsEnter}
              onMouseLeave={handleProgramsLeave}
            >
              <button
                type="button"
                onClick={() => setProgramsOpen(!programsOpen)}
                className={`group flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer outline-none focus:outline-none focus:ring-0 ${
                  isProgramsActive || programsOpen
                    ? 'text-red-500 font-bold bg-zinc-100 dark:bg-zinc-900'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                }`}
              >
                <span className="hidden xl:inline">Programs & Exams</span>
                <span className="xl:hidden">Programs</span>
                <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${programsOpen ? 'rotate-180 text-red-500' : 'group-hover:translate-y-0.5'}`} />
              </button>

              <div 
                className={`absolute left-0 top-full pt-1.5 w-72 z-50 transition-all duration-200 ease-out origin-top ${
                  programsOpen
                    ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible'
                    : 'opacity-0 -translate-y-2 scale-95 pointer-events-none invisible'
                }`}
              >
                <div className="bg-white dark:bg-[#0c0c0f]/95 backdrop-blur-xl rounded-2xl shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-slate-200/80 dark:border-zinc-800/80 p-2 text-xs">
                  <div className="px-3 py-1.5 font-bold text-[10px] uppercase tracking-wider text-slate-400">
                    Competitive Entrance
                  </div>
                  <Link
                    href="/exams/neet-ug"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition"
                  >
                    <div className="p-2 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">NEET UG</div>
                      <div className="text-[11px] text-slate-500">Medical Entrance & Biology Mastery</div>
                    </div>
                  </Link>

                  <Link
                    href="/exams/jee-main"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition"
                  >
                    <div className="p-2 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">JEE Main</div>
                      <div className="text-[11px] text-slate-500">Engineering & Advanced Problem Solving</div>
                    </div>
                  </Link>

                  <Link
                    href="/exams/cuet"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition"
                  >
                    <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">CUET & AIIMS Nursing</div>
                      <div className="text-[11px] text-slate-500">Central Universities & Clinical Care</div>
                    </div>
                  </Link>

                  <div className="my-1 border-t border-slate-100 dark:border-zinc-800/60" />
                  
                  <Link
                    href="/academics"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-950/40 group transition"
                  >
                    <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400">School Academics</div>
                      <div className="text-[11px] text-slate-500">Class 9-12 Foundation & Board Excellence</div>
                    </div>
                  </Link>

                  <div className="pt-1 mt-1 border-t border-slate-100 dark:border-zinc-800/60">
                    <Link
                      href="/exams"
                      className="block px-3 py-1.5 text-center font-semibold text-red-600 dark:text-red-400 hover:underline text-[11px]"
                    >
                      View All Target Exams →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Courses & System Dropdown */}
            <div 
              className="relative shrink-0"
              onMouseEnter={handleLearningEnter}
              onMouseLeave={handleLearningLeave}
            >
              <button
                type="button"
                onClick={() => setLearningOpen(!learningOpen)}
                className={`group flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer outline-none focus:outline-none focus:ring-0 ${
                  isLearningActive || learningOpen
                    ? 'text-red-500 font-bold bg-zinc-100 dark:bg-zinc-900'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                }`}
              >
                <span className="hidden xl:inline">Learning Systems</span>
                <span className="xl:hidden">Systems</span>
                <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${learningOpen ? 'rotate-180 text-red-500' : 'group-hover:translate-y-0.5'}`} />
              </button>

              <div 
                className={`absolute left-0 top-full pt-1.5 w-64 z-50 transition-all duration-200 ease-out origin-top ${
                  learningOpen
                    ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible'
                    : 'opacity-0 -translate-y-2 scale-95 pointer-events-none invisible'
                }`}
              >
                <div className="bg-white dark:bg-[#0c0c0f]/95 backdrop-blur-xl rounded-2xl shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-slate-200/80 dark:border-zinc-800/80 p-2 text-xs">
                  <Link
                    href="/about#onepod"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">OnePod Learning System</div>
                      <div className="text-[11px] text-slate-500">Personalised Mentorship Model</div>
                    </div>
                  </Link>

                  <Link
                    href="/about#group-learning"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">Group Learning System</div>
                      <div className="text-[11px] text-slate-500">Collaborative Live Batches</div>
                    </div>
                  </Link>

                  <div className="my-1 border-t border-slate-100 dark:border-zinc-800/60" />

                  <Link
                    href="/courses"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">Video Masterclasses</div>
                      <div className="text-[11px] text-slate-500">Comprehensive structured batches</div>
                    </div>
                  </Link>

                  <Link
                    href="/learning-system"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">4-Layer Learning</div>
                      <div className="text-[11px] text-slate-500">Methodology & NCERT linking</div>
                    </div>
                  </Link>

                  <Link
                    href="/practice"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">Dawn CBT Practice</div>
                      <div className="text-[11px] text-slate-500">Exam simulator & question bank</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Guidance & Mentorship Dropdown */}
            <div 
              className="relative shrink-0"
              onMouseEnter={handleGuidanceEnter}
              onMouseLeave={handleGuidanceLeave}
            >
              <button
                type="button"
                onClick={() => setGuidanceOpen(!guidanceOpen)}
                className={`group flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer outline-none focus:outline-none focus:ring-0 ${
                  isGuidanceActive || guidanceOpen
                    ? 'text-red-500 font-bold bg-zinc-100 dark:bg-zinc-900'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                }`}
              >
                <span className="hidden xl:inline">Guidance & Mentorship</span>
                <span className="xl:hidden">Guidance</span>
                <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${guidanceOpen ? 'rotate-180 text-red-500' : 'group-hover:translate-y-0.5'}`} />
              </button>

              <div 
                className={`absolute left-0 top-full pt-1.5 w-64 z-50 transition-all duration-200 ease-out origin-top ${
                  guidanceOpen
                    ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible'
                    : 'opacity-0 -translate-y-2 scale-95 pointer-events-none invisible'
                }`}
              >
                <div className="bg-white dark:bg-[#0c0c0f]/95 backdrop-blur-xl rounded-2xl shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-slate-200/80 dark:border-zinc-800/80 p-2 text-xs">
                  <Link
                    href="/mentorship"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">1:1 Mentorship</div>
                      <div className="text-[11px] text-slate-500">Personal Guidance & Error Analysis</div>
                    </div>
                  </Link>

                  <Link
                    href="/career-guidance"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">Career Guidance</div>
                      <div className="text-[11px] text-slate-500">Explore Pathways & 5-Step Session</div>
                    </div>
                  </Link>

                  <Link
                    href="/academic-counselling"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">Academic Counselling</div>
                      <div className="text-[11px] text-slate-500">Course, Stream & Medical Guidance</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources */}
            <Link
              href="/resources"
              className={`px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer outline-none focus:outline-none focus:ring-0 ${
                pathname.startsWith('/resources')
                  ? 'text-red-500 font-bold bg-zinc-100 dark:bg-zinc-900'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
              }`}
            >
              {t('nav.resources')}
            </Link>

            {/* About & Support Dropdown */}
            <div 
              className="relative shrink-0"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`group flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer outline-none focus:outline-none focus:ring-0 ${
                  isAboutActive || aboutOpen
                    ? 'text-red-500 font-bold bg-zinc-100 dark:bg-zinc-900'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                }`}
              >
                <span className="hidden xl:inline">About & Support</span>
                <span className="xl:hidden">About</span>
                <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${aboutOpen ? 'rotate-180 text-red-500' : 'group-hover:translate-y-0.5'}`} />
              </button>

              <div 
                className={`absolute right-0 top-full pt-1.5 w-60 z-50 transition-all duration-200 ease-out origin-top ${
                  aboutOpen
                    ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible'
                    : 'opacity-0 -translate-y-2 scale-95 pointer-events-none invisible'
                }`}
              >
                <div className="bg-white dark:bg-[#0c0c0f]/95 backdrop-blur-xl rounded-2xl shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-slate-200/80 dark:border-zinc-800/80 p-2 text-xs">
                  <Link
                    href="/about"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-red-500 shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">About Academy</div>
                      <div className="text-[10px] text-slate-500">Reaching the Unreached</div>
                    </div>
                  </Link>

                  <Link
                    href="/student-desk"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition cursor-pointer"
                  >
                    <Headphones className="w-4 h-4 text-blue-500 shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">Student Desk</div>
                      <div className="text-[10px] text-slate-500">Central Help &amp; Toll-Free</div>
                    </div>
                  </Link>

                  <Link
                    href="/mental-health"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition cursor-pointer"
                  >
                    <Heart className="w-4 h-4 text-rose-500 shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">Mental Health &amp; Care</div>
                      <div className="text-[10px] text-slate-500">Student Well-Being &amp; Emergency 112</div>
                    </div>
                  </Link>

                  <Link
                    href="/careers"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition cursor-pointer"
                  >
                    <Briefcase className="w-4 h-4 text-amber-500 shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">Build With LearnDawn</div>
                      <div className="text-[10px] text-slate-500">Job Opportunities &amp; Careers</div>
                    </div>
                  </Link>

                  <div className="my-1 border-t border-slate-100 dark:border-zinc-800/60" />

                  <Link
                    href="/contact"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-500 shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">Contact &amp; Admissions</div>
                      <div className="text-[10px] text-slate-500">Enquiries &amp; Support Channels</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </nav>

          {/* Right Action Stack: Language, Theme Toggle, Profile/Auth */}
          <div className="flex items-center gap-1.5 sm:gap-2 xl:gap-3 shrink-0">

            {/* Dark / Light Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition border border-transparent hover:border-slate-200 dark:hover:border-slate-700 cursor-pointer flex items-center justify-center shrink-0"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-red-600 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Language Switcher (Visible on sm: 640px+) */}
            <div className="relative shrink-0 hidden sm:block">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition border border-transparent hover:border-slate-200 dark:hover:border-slate-700 cursor-pointer"
                aria-label="Change language"
              >
                <Globe className="w-3.5 h-3.5 text-red-500" />
                <span className="uppercase">{language}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              <div 
                className={`absolute right-0 top-full pt-1.5 w-36 z-50 transition-all duration-200 ease-out origin-top ${
                  langDropdownOpen
                    ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible'
                    : 'opacity-0 -translate-y-2 scale-95 pointer-events-none invisible'
                }`}
                onMouseLeave={() => setLangDropdownOpen(false)}
              >
                <div className="bg-white dark:bg-[#0c0c0f]/95 backdrop-blur-xl rounded-xl shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-slate-200/80 dark:border-zinc-800/80 p-1.5 text-xs">
                  {[
                    { code: 'en', label: 'English' },
                    { code: 'hi', label: 'हिन्दी (Hindi)' },
                    { code: 'ta', label: 'தமிழ் (Tamil)' },
                  ].map((item) => (
                    <button
                      key={item.code}
                      onClick={() => {
                        setLanguage(item.code as SupportedLanguage);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg font-medium transition cursor-pointer ${
                        language === item.code
                          ? 'bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 font-semibold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Authenticated User Dropdown OR Sign-in/Sign-up CTAs */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-1.5 sm:gap-2 pl-1.5 pr-2 sm:pr-2.5 py-1 rounded-xl bg-slate-100 dark:bg-zinc-900 hover:bg-slate-200 dark:hover:bg-zinc-800 transition border border-slate-200 dark:border-zinc-800 text-xs cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-red-600 to-red-600 text-white flex items-center justify-center font-bold text-xs">
                    {user.full_name ? user.full_name.charAt(0) : 'U'}
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 hidden sm:inline max-w-[90px] truncate">
                    {user.full_name?.split(' ')[0] || 'User'}
                  </span>
                  <span className="hidden md:inline-block text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-900/60 text-red-700 dark:text-red-300">
                    {user.role}
                  </span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </button>

                <div 
                  className={`absolute right-0 top-full pt-1.5 w-56 z-50 transition-all duration-200 ease-out origin-top ${
                    userDropdownOpen
                      ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible'
                      : 'opacity-0 -translate-y-2 scale-95 pointer-events-none invisible'
                  }`}
                  onMouseLeave={() => setUserDropdownOpen(false)}
                >
                  <div className="bg-white dark:bg-[#0c0c0f]/95 backdrop-blur-xl rounded-2xl shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-slate-200/80 dark:border-zinc-800/80 p-2 text-xs">
                    <div className="px-3 py-2 border-b border-slate-100 dark:border-zinc-800/60 mb-1">
                      <p className="font-semibold text-slate-900 dark:text-slate-100 truncate">
                        {user.full_name || 'Learndawn User'}
                      </p>
                      <p className="text-slate-400 text-[11px] truncate">{user.email}</p>
                    </div>

                    <Link
                      href={user.role === 'admin' ? '/dashboard/admin' : '/dashboard/student'}
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition"
                    >
                      <LayoutDashboard className="w-4 h-4 text-red-500" />
                      <span>{user.role === 'admin' ? 'Admin Dashboard' : 'Student Dashboard'}</span>
                    </Link>

                    <div className="border-t border-slate-100 dark:border-zinc-800/60 pt-1 mt-1">
                      <button
                        onClick={() => {
                          signOut();
                          setUserDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 font-medium transition cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <Link
                  href="/auth/sign-in"
                  className="hidden sm:inline-flex px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 transition whitespace-nowrap shrink-0 cursor-pointer outline-none focus:outline-none"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  href="/auth/sign-up"
                  className="hidden md:inline-flex group relative px-3 sm:px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs shadow-md shadow-red-600/30 hover:shadow-red-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all items-center gap-1.5 whitespace-nowrap shrink-0 overflow-hidden cursor-pointer outline-none focus:outline-none"
                >
                  <span>{t('nav.signUp')}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </div>
            )}

            {/* Animated Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative w-9 h-9 rounded-xl flex flex-col items-center justify-center gap-1.5 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0 translate-x-2' : 'opacity-100'
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Backdrop Overlay */}
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className={`lg:hidden fixed inset-0 top-[60px] sm:top-[64px] bg-black/60 backdrop-blur-xs transition-opacity duration-300 z-40 ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Smooth Animated Mobile Navigation Drawer */}
        <div
          className={`lg:hidden absolute top-full inset-x-0 bg-white/95 dark:bg-[#0c0c0f]/95 backdrop-blur-2xl border-b border-slate-200/80 dark:border-zinc-800/80 shadow-2xl transition-all duration-300 ease-in-out origin-top z-50 ${
            mobileMenuOpen 
              ? 'max-h-[85vh] opacity-100 translate-y-0 pointer-events-auto visible py-5 px-5 overflow-y-auto' 
              : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none invisible py-0 px-5 border-transparent overflow-hidden'
          }`}
        >
            <nav className="flex flex-col space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                  pathname === '/'
                    ? 'bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {t('nav.home')}
              </Link>

              {/* Mobile Accordion: Programs */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  <span>Programs & Exams</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileProgramsOpen ? 'rotate-180 text-red-500' : ''}`} />
                </button>
                <div
                  className={`pl-4 space-y-1 border-l-2 border-red-500/40 ml-4 transition-all duration-300 ease-in-out overflow-hidden ${
                    mobileProgramsOpen ? 'max-h-96 opacity-100 my-1 py-1' : 'max-h-0 opacity-0 my-0 py-0'
                  }`}
                >
                  <Link href="/exams/neet-ug" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-red-600 transition">NEET UG Medical</Link>
                  <Link href="/exams/jee-main" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-red-600 transition">JEE Main Engineering</Link>
                  <Link href="/exams/cuet" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-red-600 transition">CUET & AIIMS Nursing</Link>
                  <Link href="/academics" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-red-600 transition">School Academics (Class 9-12)</Link>
                  <Link href="/exams" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs font-semibold text-red-600 transition">All Target Exams →</Link>
                </div>
              </div>

              {/* Mobile Accordion: Learning Systems */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileLearningOpen(!mobileLearningOpen)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  <span>Learning Systems</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileLearningOpen ? 'rotate-180 text-red-500' : ''}`} />
                </button>
                <div
                  className={`pl-4 space-y-1 border-l-2 border-red-500/40 ml-4 transition-all duration-300 ease-in-out overflow-hidden ${
                    mobileLearningOpen ? 'max-h-96 opacity-100 my-1 py-1' : 'max-h-0 opacity-0 my-0 py-0'
                  }`}
                >
                  <Link href="/about#onepod" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-red-600 transition">OnePod Learning System</Link>
                  <Link href="/about#group-learning" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-red-600 transition">Group Learning System</Link>
                  <Link href="/courses" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-red-600 transition">Video Masterclasses</Link>
                  <Link href="/learning-system" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-red-600 transition">4-Layer Learning Ecosystem</Link>
                  <Link href="/practice" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-red-600 transition">Dawn CBT Practice</Link>
                </div>
              </div>

              {/* Mobile Accordion: Guidance & Mentorship */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileGuidanceOpen(!mobileGuidanceOpen)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  <span>Guidance & Mentorship</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileGuidanceOpen ? 'rotate-180 text-red-500' : ''}`} />
                </button>
                <div
                  className={`pl-4 space-y-1 border-l-2 border-indigo-500/40 ml-4 transition-all duration-300 ease-in-out overflow-hidden ${
                    mobileGuidanceOpen ? 'max-h-96 opacity-100 my-1 py-1' : 'max-h-0 opacity-0 my-0 py-0'
                  }`}
                >
                  <Link href="/mentorship" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition">1:1 Mentorship</Link>
                  <Link href="/career-guidance" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition">Career Guidance & Sessions</Link>
                  <Link href="/academic-counselling" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition">Academic Counselling</Link>
                </div>
              </div>

              {/* Mobile Accordion: About & Support */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  <span>About & Support</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180 text-red-500' : ''}`} />
                </button>
                <div
                  className={`pl-4 space-y-1 border-l-2 border-blue-500/40 ml-4 transition-all duration-300 ease-in-out overflow-hidden ${
                    mobileAboutOpen ? 'max-h-96 opacity-100 my-1 py-1' : 'max-h-0 opacity-0 my-0 py-0'
                  }`}
                >
                  <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 transition">About Academy</Link>
                  <Link href="/student-desk" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 transition">Student Desk Support</Link>
                  <Link href="/mental-health" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-rose-600 transition">Mental Health & Care (112)</Link>
                  <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-amber-600 transition">Build With LearnDawn & Careers</Link>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition">Contact & Admissions</Link>
                </div>
              </div>

              <Link
                href="/resources"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                  pathname.startsWith('/resources')
                    ? 'bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {t('nav.resources')}
              </Link>
            </nav>

            {/* Mobile Language Switcher */}
            <div className="pt-3 border-t border-slate-200 dark:border-zinc-800/80 flex items-center justify-between px-2">
              <span className="text-xs font-semibold text-slate-600 dark:text-zinc-400">Language</span>
              <div className="flex items-center gap-1.5">
                {[
                  { code: 'en', label: 'English' },
                  { code: 'hi', label: 'हिन्दी' },
                  { code: 'ta', label: 'தமிழ்' },
                ].map((item) => (
                  <button
                    key={item.code}
                    onClick={() => setLanguage(item.code as SupportedLanguage)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                      language === item.code
                        ? 'bg-red-600 border-red-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Theme Toggle */}
            <div className="pt-3 border-t border-slate-200 dark:border-zinc-800/80 flex items-center justify-between px-2">
              <span className="text-xs font-semibold text-slate-600 dark:text-zinc-400">Interface Theme</span>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:bg-slate-200 dark:hover:bg-zinc-800 transition cursor-pointer"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-red-600" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>

            {!user && (
              <div className="pt-4 border-t border-slate-200 dark:border-zinc-800/80 grid grid-cols-2 gap-3">
                <Link
                  href="/auth/sign-in"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-center rounded-xl border border-slate-200 dark:border-zinc-800 font-semibold text-sm text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-zinc-900 transition"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  href="/auth/sign-up"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-center rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 font-semibold text-sm text-white shadow-md shadow-red-500/20 transition"
                >
                  {t('nav.signUp')}
                </Link>
              </div>
            )}
          </div>
      </header>

      {/* Structural spacer matching fixed header height */}
      <div className="h-[62px] sm:h-[68px] w-full shrink-0" aria-hidden="true" />
    </>
  );
};
