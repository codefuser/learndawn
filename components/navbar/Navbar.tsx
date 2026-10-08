'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { useAuth } from '@/lib/auth/context';
import { useLanguage, SupportedLanguage } from '@/lib/i18n/context';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
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
import { GlobalSearchModal } from '@/components/search/GlobalSearchModal';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  
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
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-2 sm:py-2.5'
            : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-200/40 dark:border-slate-800/40 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            <BrandLogo variant="full" />
          </div>

          {/* Desktop & Laptop Navigation (Visible on lg: 1024px+ screens) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 text-xs xl:text-sm font-medium shrink-0">
            
            {/* Home */}
            <Link
              href="/"
              className={`px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                pathname === '/'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/40 font-semibold'
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
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/40 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                }`}
              >
                <span className="hidden xl:inline">Programs & Exams</span>
                <span className="xl:hidden">Programs</span>
                <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${programsOpen ? 'rotate-180' : ''}`} />
              </button>

              {programsOpen && (
                <div className="absolute left-0 mt-1 w-72 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-2 z-50 text-xs animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1.5 font-bold text-[10px] uppercase tracking-wider text-slate-400">
                    Competitive Entrance
                  </div>
                  <Link
                    href="/exams/neet-ug"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/50 group transition"
                  >
                    <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">NEET UG</div>
                      <div className="text-[11px] text-slate-500">Medical Entrance & Biology Mastery</div>
                    </div>
                  </Link>

                  <Link
                    href="/exams/jee-main"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/50 group transition"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">JEE Main</div>
                      <div className="text-[11px] text-slate-500">Engineering & Advanced Problem Solving</div>
                    </div>
                  </Link>

                  <Link
                    href="/exams/cuet"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/50 group transition"
                  >
                    <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">CUET & AIIMS Nursing</div>
                      <div className="text-[11px] text-slate-500">Central Universities & Clinical Care</div>
                    </div>
                  </Link>

                  <div className="my-1 border-t border-slate-100 dark:border-slate-800" />
                  
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

                  <div className="pt-1 mt-1 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      href="/exams"
                      className="block px-3 py-1.5 text-center font-semibold text-blue-600 dark:text-blue-400 hover:underline text-[11px]"
                    >
                      View All Target Exams →
                    </Link>
                  </div>
                </div>
              )}
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
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/40 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                }`}
              >
                <span className="hidden xl:inline">Courses & System</span>
                <span className="xl:hidden">Courses</span>
                <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${learningOpen ? 'rotate-180' : ''}`} />
              </button>

              {learningOpen && (
                <div className="absolute left-0 mt-1 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-2 z-50 text-xs animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    href="/courses"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/50 group transition"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Video Masterclasses</div>
                      <div className="text-[11px] text-slate-500">Comprehensive structured batches</div>
                    </div>
                  </Link>

                  <Link
                    href="/learning-system"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/50 group transition"
                  >
                    <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">4-Layer Learning</div>
                      <div className="text-[11px] text-slate-500">Methodology & NCERT linking</div>
                    </div>
                  </Link>

                  <Link
                    href="/practice"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/50 group transition"
                  >
                    <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Dawn CBT Practice</div>
                      <div className="text-[11px] text-slate-500">Exam simulator & question bank</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Mentorship */}
            <Link
              href="/mentorship"
              className={`px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                pathname.startsWith('/mentorship')
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/40 font-semibold'
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
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/40 font-semibold'
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
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/40 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                }`}
              >
                <span className="hidden xl:inline">About & Contact</span>
                <span className="xl:hidden">About</span>
                <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>

              {aboutOpen && (
                <div className="absolute right-0 mt-1 w-52 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-2 z-50 text-xs animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    href="/about"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/50 group transition"
                  >
                    <BookOpen className="w-4 h-4 text-blue-500" />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">About Academy</div>
                      <div className="text-[10px] text-slate-500">Mission, Faculty & Council</div>
                    </div>
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/50 group transition"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-500" />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">Admissions & Contact</div>
                      <div className="text-[10px] text-slate-500">Helpline & Pan-India Desk</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

          </nav>

          {/* Right Action Stack: Search, Language, Profile/Auth */}
          <div className="flex items-center gap-1.5 sm:gap-2 xl:gap-2.5 shrink-0">
            
            {/* Quick Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-1.5 px-2 py-1.5 sm:px-2.5 sm:py-1.5 xl:px-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-slate-500 dark:text-slate-400 text-xs transition border border-slate-200/60 dark:border-slate-700/60 cursor-pointer shrink-0 whitespace-nowrap"
              aria-label="Open search engine"
            >
              <Search className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden xl:inline">Search...</span>
              <kbd className="hidden 2xl:inline text-[10px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-400">
                Ctrl+K
              </kbd>
            </button>

            {/* Language Switcher */}
            <div className="relative shrink-0">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition border border-transparent hover:border-slate-200 dark:hover:border-slate-700 cursor-pointer"
                aria-label="Change language"
              >
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                <span className="uppercase">{language}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {langDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-1.5 z-50 text-xs"
                  onMouseLeave={() => setLangDropdownOpen(false)}
                >
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
                          ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Authenticated User Dropdown OR Sign-in/Sign-up CTAs */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 pl-1.5 pr-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 transition border border-slate-200 dark:border-slate-700 text-xs cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                    {user.full_name ? user.full_name.charAt(0) : 'U'}
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 hidden sm:inline max-w-[90px] truncate">
                    {user.full_name?.split(' ')[0] || 'User'}
                  </span>
                  <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                    {user.role}
                  </span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </button>

                {userDropdownOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 z-50 text-xs"
                    onMouseLeave={() => setUserDropdownOpen(false)}
                  >
                    <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 mb-1">
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
                      <LayoutDashboard className="w-4 h-4 text-blue-500" />
                      <span>{user.role === 'admin' ? 'Admin Dashboard' : 'Student Dashboard'}</span>
                    </Link>

                    {/* Preview Switcher */}
                    <div className="my-1 border-t border-slate-100 dark:border-slate-800 pt-1">
                      <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Quick Preview Switch
                      </div>
                      <button
                        onClick={() => {
                          switchDemoRole('student');
                          setUserDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-left transition cursor-pointer ${
                          user.role === 'student' ? 'text-blue-600 font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <User className="w-3.5 h-3.5" /> Student View
                        </span>
                        {user.role === 'student' && <span className="text-[10px] bg-blue-100 text-blue-700 px-1 rounded">Active</span>}
                      </button>
                      <button
                        onClick={() => {
                          switchDemoRole('admin');
                          setUserDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-left transition cursor-pointer ${
                          user.role === 'admin' ? 'text-amber-600 font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <ShieldAlert className="w-3.5 h-3.5" /> Admin View
                        </span>
                        {user.role === 'admin' && <span className="text-[10px] bg-amber-100 text-amber-700 px-1 rounded">Active</span>}
                      </button>
                    </div>

                    <div className="border-t border-slate-100 dark:border-slate-800 pt-1 mt-1">
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
                )}
              </div>
            ) : (
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <Link
                  href="/auth/sign-in"
                  className="px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition whitespace-nowrap shrink-0"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  href="/auth/sign-up"
                  className="px-3 sm:px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-semibold shadow-xs shadow-blue-500/20 transition flex items-center gap-1.5 whitespace-nowrap shrink-0"
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
          <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-2xl p-5 space-y-4 animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto z-50">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                  pathname === '/'
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400'
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
                  <div className="pl-4 py-1 space-y-1 border-l-2 border-blue-500/30 ml-4 my-1">
                    <Link href="/exams/neet-ug" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600">NEET UG Medical</Link>
                    <Link href="/exams/jee-main" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600">JEE Main Engineering</Link>
                    <Link href="/exams/cuet" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600">CUET & AIIMS Nursing</Link>
                    <Link href="/academics" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600">School Academics (Class 9-12)</Link>
                    <Link href="/exams" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs font-semibold text-blue-600">All Target Exams →</Link>
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
                  <div className="pl-4 py-1 space-y-1 border-l-2 border-blue-500/30 ml-4 my-1">
                    <Link href="/courses" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600">Video Masterclasses</Link>
                    <Link href="/learning-system" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600">4-Layer Learning Ecosystem</Link>
                    <Link href="/practice" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600">Dawn CBT Practice</Link>
                  </div>
                )}
              </div>

              <Link
                href="/mentorship"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                  pathname.startsWith('/mentorship')
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400'
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
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400'
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
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400'
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
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                Contact & Admissions
              </Link>
            </nav>

            {!user && (
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-3">
                <Link
                  href="/auth/sign-in"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-center rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-sm text-slate-800 dark:text-slate-200"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  href="/auth/sign-up"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-center rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-sm text-white shadow-md shadow-blue-500/20"
                >
                  {t('nav.signUp')}
                </Link>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Global Search Engine Modal */}
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
