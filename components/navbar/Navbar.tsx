'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { useAuth } from '@/lib/auth/context';
import { useLanguage, SupportedLanguage } from '@/lib/i18n/context';
import { useTheme } from '@/lib/theme/context';
import { 
  Menu, 
  X, 
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
  Cpu
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
  const [aboutOpen, setAboutOpen] = useState(false);

  // Mobile sub-accordions
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileLearningOpen, setMobileLearningOpen] = useState(false);

  const pathname = usePathname();
  const { user, signOut, switchDemoRole } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const programsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const learningTimeoutRef = useRef<NodeJS.Timeout | null>(null);
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
    setAboutOpen(false);
  };
  const handleProgramsLeave = () => {
    programsTimeoutRef.current = setTimeout(() => setProgramsOpen(false), 150);
  };

  const handleLearningEnter = () => {
    if (learningTimeoutRef.current) clearTimeout(learningTimeoutRef.current);
    setLearningOpen(true);
    setProgramsOpen(false);
    setAboutOpen(false);
  };
  const handleLearningLeave = () => {
    learningTimeoutRef.current = setTimeout(() => setLearningOpen(false), 150);
  };

  const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutOpen(true);
    setProgramsOpen(false);
    setLearningOpen(false);
  };
  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => setAboutOpen(false), 150);
  };

  const isProgramsActive = ['/exams', '/academics'].some(p => pathname.startsWith(p));
  const isLearningActive = ['/courses', '/learning-system', '/practice'].some(p => pathname.startsWith(p));
  const isAboutActive = ['/about', '/contact'].some(p => pathname.startsWith(p));

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-black/90 backdrop-blur-md shadow-xs border-b border-slate-200/50 dark:border-zinc-900/80 py-2 sm:py-2.5'
            : 'bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-transparent dark:border-transparent py-2.5 sm:py-3.5'
        }`}
      >
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
              className={`px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                pathname === '/'
                  ? 'text-red-500 font-bold bg-zinc-100 dark:bg-zinc-900 border border-transparent dark:border-zinc-800'
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
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                  isProgramsActive || programsOpen
                    ? 'text-red-500 font-bold bg-zinc-100 dark:bg-zinc-900 border border-transparent dark:border-zinc-800'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                }`}
              >
                <span className="hidden xl:inline">Programs & Exams</span>
                <span className="xl:hidden">Programs</span>
                <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${programsOpen ? 'rotate-180' : ''}`} />
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
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                  isLearningActive || learningOpen
                    ? 'text-red-500 font-bold bg-zinc-100 dark:bg-zinc-900 border border-transparent dark:border-zinc-800'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                }`}
              >
                <span className="hidden xl:inline">Courses & System</span>
                <span className="xl:hidden">Courses</span>
                <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${learningOpen ? 'rotate-180' : ''}`} />
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
                    href="/courses"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition"
                  >
                    <div className="p-2 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">Video Masterclasses</div>
                      <div className="text-[11px] text-slate-500">Comprehensive structured batches</div>
                    </div>
                  </Link>

                  <Link
                    href="/learning-system"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition"
                  >
                    <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">4-Layer Learning</div>
                      <div className="text-[11px] text-slate-500">Methodology & NCERT linking</div>
                    </div>
                  </Link>

                  <Link
                    href="/practice"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition"
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

            {/* Mentorship */}
            <Link
              href="/mentorship"
              className={`px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                pathname.startsWith('/mentorship')
                  ? 'text-red-500 font-bold bg-zinc-100 dark:bg-zinc-900 border border-transparent dark:border-zinc-800'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
              }`}
            >
              {t('nav.mentorship')}
            </Link>

            {/* Resources */}
            <Link
              href="/resources"
              className={`px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                pathname.startsWith('/resources')
                  ? 'text-red-500 font-bold bg-zinc-100 dark:bg-zinc-900 border border-transparent dark:border-zinc-800'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
              }`}
            >
              {t('nav.resources')}
            </Link>

            {/* About & Contact Dropdown */}
            <div 
              className="relative shrink-0"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                  isAboutActive || aboutOpen
                    ? 'text-red-500 font-bold bg-zinc-100 dark:bg-zinc-900 border border-transparent dark:border-zinc-800'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                }`}
              >
                <span className="hidden xl:inline">About & Contact</span>
                <span className="xl:hidden">About</span>
                <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>

              <div 
                className={`absolute right-0 top-full pt-1.5 w-52 z-50 transition-all duration-200 ease-out origin-top ${
                  aboutOpen
                    ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible'
                    : 'opacity-0 -translate-y-2 scale-95 pointer-events-none invisible'
                }`}
              >
                <div className="bg-white dark:bg-[#0c0c0f]/95 backdrop-blur-xl rounded-2xl shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-slate-200/80 dark:border-zinc-800/80 p-2 text-xs">
                  <Link
                    href="/about"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition"
                  >
                    <BookOpen className="w-4 h-4 text-red-500" />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">About Academy</div>
                      <div className="text-[10px] text-slate-500">Mission, Faculty & Council</div>
                    </div>
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/50 group transition"
                  >
                    <PhoneCall className="w-4 h-4 text-red-500" />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">Admissions & Contact</div>
                      <div className="text-[10px] text-slate-500">Helpline & Pan-India Desk</div>
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
                  className="hidden sm:inline-flex px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 transition whitespace-nowrap shrink-0"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  href="/auth/sign-up"
                  className="hidden md:inline-flex px-3 sm:px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 shadow-lg shadow-red-600/30 ring-1 ring-red-400/30 font-bold text-white text-xs font-semibold shadow-xs shadow-red-500/20 transition items-center gap-1.5 whitespace-nowrap shrink-0"
                >
                  <span>{t('nav.signUp')}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            )}

            {/* Mobile Hamburger Toggle (Visible on screens < 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full inset-x-0 bg-white dark:bg-[#0c0c0f] border-b border-slate-200 dark:border-zinc-800/80 shadow-2xl p-5 space-y-4 animate-in slide-in-from-top duration-200 max-h-[calc(100vh-100%)] overflow-y-auto z-50">
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
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <span>Programs & Exams</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileProgramsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileProgramsOpen && (
                  <div className="pl-4 py-1 space-y-1 border-l-2 border-red-500/30 ml-4 my-1">
                    <Link href="/exams/neet-ug" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-red-600">NEET UG Medical</Link>
                    <Link href="/exams/jee-main" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-red-600">JEE Main Engineering</Link>
                    <Link href="/exams/cuet" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-red-600">CUET & AIIMS Nursing</Link>
                    <Link href="/academics" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-red-600">School Academics (Class 9-12)</Link>
                    <Link href="/exams" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs font-semibold text-red-600">All Target Exams →</Link>
                  </div>
                )}
              </div>

              {/* Mobile Accordion: Courses & System */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileLearningOpen(!mobileLearningOpen)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <span>Courses & System</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileLearningOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileLearningOpen && (
                  <div className="pl-4 py-1 space-y-1 border-l-2 border-red-500/30 ml-4 my-1">
                    <Link href="/courses" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-red-600">Video Masterclasses</Link>
                    <Link href="/learning-system" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-red-600">4-Layer Learning Ecosystem</Link>
                    <Link href="/practice" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-red-600">Dawn CBT Practice</Link>
                  </div>
                )}
              </div>

              <Link
                href="/mentorship"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                  pathname.startsWith('/mentorship')
                    ? 'bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {t('nav.mentorship')}
              </Link>

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

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                  pathname.startsWith('/about')
                    ? 'bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                About Academy
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                  pathname.startsWith('/contact')
                    ? 'bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                Contact & Admissions
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
                  className="py-2.5 text-center rounded-xl bg-red-600 hover:bg-red-700 font-semibold text-sm text-white shadow-md shadow-red-500/20 transition"
                >
                  {t('nav.signUp')}
                </Link>
              </div>
            )}
          </div>
        )}
      </header>
    </>
  );
};
