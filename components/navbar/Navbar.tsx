'use client';

import React, { useState, useEffect } from 'react';
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
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { GlobalSearchModal } from '@/components/search/GlobalSearchModal';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const pathname = usePathname();
  const { user, signOut, switchDemoRole } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.exams'), href: '/exams' },
    { name: t('nav.academics'), href: '/academics' },
    { name: t('nav.courses'), href: '/courses' },
    { name: t('nav.learningSystem'), href: '/learning-system' },
    { name: t('nav.mentorship'), href: '/mentorship' },
    { name: t('nav.resources'), href: '/resources' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-2.5'
            : 'bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm border-b border-slate-200/40 dark:border-slate-800/40 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-6">
            <BrandLogo variant="full" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/40 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Stack */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-slate-500 dark:text-slate-400 text-xs transition border border-slate-200/60 dark:border-slate-700/60"
              aria-label="Open search engine"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Search...</span>
              <kbd className="hidden lg:inline text-[10px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700">
                Ctrl+K
              </kbd>
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                aria-label="Change language"
              >
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                <span className="uppercase font-semibold">{language}</span>
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
                      className={`w-full text-left px-3 py-2 rounded-lg font-medium transition ${
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

            {/* Authentication Buttons or Profile */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition border border-slate-200 dark:border-slate-700 text-xs"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                    {user.full_name ? user.full_name.charAt(0) : 'U'}
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 hidden sm:inline max-w-[100px] truncate">
                    {user.full_name?.split(' ')[0] || 'User'}
                  </span>
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
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

                    {/* Reviewer / Client Demo Switcher */}
                    <div className="my-1 border-t border-slate-100 dark:border-slate-800 pt-1">
                      <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Client Preview Switch
                      </div>
                      <button
                        onClick={() => {
                          switchDemoRole('student');
                          setUserDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-left transition ${
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
                        className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-left transition ${
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
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 font-medium transition"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Link
                  href="/auth/sign-in"
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  href="/auth/sign-up"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition flex items-center gap-1.5"
                >
                  <span>{t('nav.signUp')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-[60px] bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-2xl p-5 space-y-4 animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
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
                  className="py-2.5 text-center rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md"
                >
                  {t('nav.signUp')}
                </Link>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Global Search Overlay Instance */}
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
