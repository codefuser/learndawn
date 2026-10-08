'use client';

import React from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { 
  ShieldCheck, 
  BookOpen, 
  Award, 
  HeartHandshake, 
  MapPin, 
  Mail, 
  Phone,
  ArrowUp,
  Sparkles
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-12 sm:pt-16 pb-10 sm:pb-12 overflow-hidden relative">
      {/* Subtle background dawn gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-gradient-to-b from-blue-600/15 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Main Grid: Responsive layout for mobile and desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 sm:mb-14">
          
          {/* Brand Column (Full width on mobile/tablet, 4-col on desktop) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block">
              <BrandLogo variant="full" theme="light" />
            </div>
            
            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 max-w-md">
              Learndawn India is a premier digital learning academy dedicated to competitive entrance mastery (NEET UG, JEE Main, AIIMS, CUET), academic rigor, and 1:1 structured mentorship.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-snug">New Delhi • Bengaluru • Chennai • Pan-India Digital Center</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a 
                  href="mailto:admissions@learndawn.in" 
                  className="hover:text-white transition underline-offset-2 hover:underline"
                >
                  admissions@learndawn.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href="tel:18005327632" 
                  className="hover:text-white transition font-medium"
                >
                  +91 1800-LEARN-DAWN (Toll Free)
                </a>
              </div>
            </div>

            {/* Trust badge on mobile & desktop */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Verified NTA / Board Syllabus
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-emerald-400">
                <ShieldCheck className="w-3 h-3" />
                SSL & RLS Secured Data
              </span>
            </div>
          </div>

          {/* Links Grid: 2 columns on mobile, 4 columns on tablet & desktop */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Column 1: Learndawn Academy */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5 pb-1 border-b border-slate-800/60 sm:border-transparent">
                <BookOpen className="w-3.5 h-3.5 text-amber-500" /> Learndawn
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/about" className="text-slate-400 hover:text-white transition py-0.5 inline-block">About Us</Link></li>
                <li><Link href="/learning-system" className="text-slate-400 hover:text-white transition py-0.5 inline-block">Learning System</Link></li>
                <li><Link href="/about#collaborators" className="text-slate-400 hover:text-white transition py-0.5 inline-block">Collaborators</Link></li>
                <li><Link href="/about#careers" className="text-slate-400 hover:text-white transition py-0.5 inline-block">Careers</Link></li>
                <li><Link href="/contact" className="text-slate-400 hover:text-white transition py-0.5 inline-block">Contact & Support</Link></li>
              </ul>
            </div>

            {/* Column 2: Guidance & Support */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5 pb-1 border-b border-slate-800/60 sm:border-transparent">
                <HeartHandshake className="w-3.5 h-3.5 text-blue-500" /> Guidance
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/mentorship#career" className="text-slate-400 hover:text-white transition py-0.5 inline-block">Career Guidance</Link></li>
                <li><Link href="/mentorship" className="text-slate-400 hover:text-white transition py-0.5 inline-block">1:1 Mentorship</Link></li>
                <li><Link href="/mentorship#counselling" className="text-slate-400 hover:text-white transition py-0.5 inline-block">Academic Counselling</Link></li>
                <li><Link href="/contact#support" className="text-slate-400 hover:text-white transition py-0.5 inline-block">Student Desk</Link></li>
              </ul>
            </div>

            {/* Column 3: Resources & Mastery */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5 pb-1 border-b border-slate-800/60 sm:border-transparent">
                <Award className="w-3.5 h-3.5 text-purple-500" /> Resources
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/resources" className="text-slate-400 hover:text-white transition py-0.5 inline-block">Study Material</Link></li>
                <li><Link href="/resources#question-bank" className="text-slate-400 hover:text-white transition py-0.5 inline-block">Question Bank</Link></li>
                <li><Link href="/resources#revision" className="text-slate-400 hover:text-white transition py-0.5 inline-block">Formula Sheets</Link></li>
                <li><Link href="/resources#assessments" className="text-slate-400 hover:text-white transition py-0.5 inline-block">Assessments</Link></li>
                <li><Link href="/sitemap.xml" className="text-slate-400 hover:text-white transition py-0.5 inline-block">Sitemap</Link></li>
              </ul>
            </div>

            {/* Column 4: Popular Goals */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5 pb-1 border-b border-slate-800/60 sm:border-transparent">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Target Exams
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/exams/neet-ug" className="text-slate-400 hover:text-white transition py-0.5 inline-block">NEET UG</Link></li>
                <li><Link href="/exams/jee-main" className="text-slate-400 hover:text-white transition py-0.5 inline-block">JEE Main</Link></li>
                <li><Link href="/exams/cuet" className="text-slate-400 hover:text-white transition py-0.5 inline-block">CUET (UG)</Link></li>
                <li><Link href="/exams/aiims-nursing" className="text-slate-400 hover:text-white transition py-0.5 inline-block">AIIMS Nursing</Link></li>
                <li><Link href="/exams/aiims-paramedical" className="text-slate-400 hover:text-white transition py-0.5 inline-block">AIIMS Paramedical</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Policies Row & Bottom Bar: Fully responsive on mobile */}
        <div className="pt-6 sm:pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-center md:text-left">
            <Link href="/about#privacy" className="hover:text-slate-300 transition py-1">Privacy Policy</Link>
            <span className="hidden sm:inline text-slate-800">•</span>
            <Link href="/about#terms" className="hover:text-slate-300 transition py-1">Terms of Service</Link>
            <span className="hidden sm:inline text-slate-800">•</span>
            <Link href="/about#refund" className="hover:text-slate-300 transition py-1">Refund Policy</Link>
            <span className="hidden sm:inline text-slate-800">•</span>
            <Link href="/about#guidelines" className="hover:text-slate-300 transition py-1">User Guidelines</Link>
            <span className="hidden sm:inline text-slate-800">•</span>
            <Link href="/contact#grievance" className="hover:text-slate-300 transition py-1">Grievance</Link>
            <span className="hidden sm:inline text-slate-800">•</span>
            <Link href="/contact#takedown" className="hover:text-slate-300 transition py-1">Takedown</Link>
          </div>

          <div className="flex items-center gap-4 text-center md:text-right">
            <span>© {new Date().getFullYear()} Learndawn India. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition border border-slate-800 flex items-center justify-center shadow-sm"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
