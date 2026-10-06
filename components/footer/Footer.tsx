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
  Phone 
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden relative">
      {/* Subtle background dawn gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-blue-600/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="full" theme="light" />
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Learndawn India is a standalone digital learning academy dedicated to competitive exam mastery, academic precision, clinical foundations, and 1:1 student mentorship.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>New Delhi • Bengaluru • Chennai • Pan-India Digital Center</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>admissions@learndawn.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+91 1800-LEARN-DAWN (Toll Free)</span>
              </div>
            </div>
          </div>

          {/* Column 1: Learndawn Academy */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-500" /> Learndawn
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/learning-system" className="text-slate-400 hover:text-white transition">Learning System</Link></li>
              <li><Link href="/about#collaborators" className="text-slate-400 hover:text-white transition">Collaborators</Link></li>
              <li><Link href="/about#careers" className="text-slate-400 hover:text-white transition">Careers</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2: Guidance & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <HeartHandshake className="w-3.5 h-3.5 text-blue-500" /> Guidance
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/mentorship#career" className="text-slate-400 hover:text-white transition">Career Guidance</Link></li>
              <li><Link href="/mentorship" className="text-slate-400 hover:text-white transition">1:1 Mentorship</Link></li>
              <li><Link href="/mentorship#counselling" className="text-slate-400 hover:text-white transition">Academic Counselling</Link></li>
              <li><Link href="/contact#support" className="text-slate-400 hover:text-white transition">Student Support Desk</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources & Mastery */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-purple-500" /> Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/resources" className="text-slate-400 hover:text-white transition">Study Material</Link></li>
              <li><Link href="/resources#question-bank" className="text-slate-400 hover:text-white transition">Question Bank</Link></li>
              <li><Link href="/resources#revision" className="text-slate-400 hover:text-white transition">Formula Sheets & Notes</Link></li>
              <li><Link href="/resources#assessments" className="text-slate-400 hover:text-white transition">Assessments</Link></li>
              <li><Link href="/sitemap.xml" className="text-slate-400 hover:text-white transition">Sitemap</Link></li>
            </ul>
          </div>

          {/* Column 4: Popular Goals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Popular Goals
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/exams/neet-ug" className="text-slate-400 hover:text-white transition">NEET UG</Link></li>
              <li><Link href="/exams/jee-main" className="text-slate-400 hover:text-white transition">JEE Main</Link></li>
              <li><Link href="/exams/cuet" className="text-slate-400 hover:text-white transition">CUET (UG)</Link></li>
              <li><Link href="/exams/aiims-nursing" className="text-slate-400 hover:text-white transition">AIIMS Nursing</Link></li>
              <li><Link href="/exams/aiims-paramedical" className="text-slate-400 hover:text-white transition">AIIMS Paramedical</Link></li>
            </ul>
          </div>
        </div>

        {/* Policies Row */}
        <div className="pt-8 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/about#privacy" className="hover:text-slate-300 transition">Privacy Policy</Link>
            <span>•</span>
            <Link href="/about#terms" className="hover:text-slate-300 transition">Terms of Service</Link>
            <span>•</span>
            <Link href="/about#refund" className="hover:text-slate-300 transition">Refund Policy</Link>
            <span>•</span>
            <Link href="/about#guidelines" className="hover:text-slate-300 transition">User Guidelines</Link>
            <span>•</span>
            <Link href="/contact#grievance" className="hover:text-slate-300 transition">Grievance Redressal</Link>
            <span>•</span>
            <Link href="/contact#takedown" className="hover:text-slate-300 transition">Takedown Policy</Link>
          </div>
          <div>
            © {new Date().getFullYear()} Learndawn India. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
