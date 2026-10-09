'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { 
  ShieldCheck, 
  BookOpen, 
  Award, 
  MapPin, 
  Mail, 
  Phone,
  ArrowUp,
  Sparkles,
  Stethoscope,
  Cpu,
  Layers,
  GraduationCap,
  ChevronRight,
  Send,
  Heart,
  CheckCircle2,
  Flame,
  Radio,
  ExternalLink,
  Lock,
  Zap,
  Target
} from 'lucide-react';

/* -------------------------------------------------------------
   Custom Scalable Brand SVGs for Social Media
   ------------------------------------------------------------- */
const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const XTwitterIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] text-zinc-400 overflow-hidden pt-16 sm:pt-24 pb-12 transition-colors border-t border-zinc-900">
      
      {/* Dynamic Animated Top Aurora Beam */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/80 to-transparent animate-pulse" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 max-w-5xl h-36 bg-red-600/[0.07] blur-[110px] pointer-events-none" />
      <div className="absolute bottom-20 -right-24 w-96 h-96 bg-rose-600/[0.04] blur-[120px] pointer-events-none" />

      {/* Giant Architectural Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none font-black text-[13vw] tracking-[0.22em] text-white/[0.015] whitespace-nowrap uppercase z-0 font-sans"
      >
        LEARNDAWN
      </div>

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 space-y-16">
        
        {/* ========================================================= */}
        {/* 1. INTERACTIVE HIGH-YIELD RESOURCE VAULT & NEWSLETTER     */}
        {/* ========================================================= */}
        <div className="relative rounded-3xl p-6 sm:p-9 md:p-11 bg-gradient-to-br from-zinc-900/90 via-[#0a0a0f]/95 to-zinc-950/90 border border-zinc-800/80 shadow-2xl backdrop-blur-2xl overflow-hidden group">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-red-600/25 transition-all duration-700" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Shimmer line atop card */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Copy & Value Proposition */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold backdrop-blur-md">
                <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                <span>Free Aspirants VIP Vault • NEET &amp; JEE 2026-27</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Supercharge Your Rank with Weekly High-Yield Blueprints
              </h3>
              
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
                Join 50,000+ serious aspirants receiving curated NCERT formula cheat sheets, 10-year chapterwise PYQ breakdowns, live CBT simulation test notices, and AIIMS &amp; IITian masterclasses.
              </p>

              {/* Value Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-zinc-400 font-medium">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
                  <Lock className="w-3 h-3 text-red-400" />
                  <span>Strict Zero Spam</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>Instant Formula Sheet Access</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
                  <Target className="w-3 h-3 text-emerald-400" />
                  <span>AIIMS &amp; IIT Faculty Curated</span>
                </span>
              </div>
            </div>

            {/* Right Interactive Subscription Form */}
            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 shadow-xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-200 space-y-2">
                  <div className="flex items-center gap-2.5 font-bold text-white text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Welcome to Learndawn VIP Vault!</span>
                  </div>
                  <p className="text-xs text-emerald-300/90 leading-relaxed pl-7">
                    We&apos;ve sent your NCERT Biology &amp; Chemistry Formula Blueprint directly to your inbox. Please check your promotions or updates tab.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative group/input">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/30 to-rose-600/30 rounded-2xl blur opacity-0 group-focus-within/input:opacity-100 transition duration-300 pointer-events-none" />
                    
                    <div className="relative flex flex-col sm:flex-row items-stretch gap-2.5 bg-zinc-950/90 p-1.5 rounded-2xl border border-zinc-800 focus-within:border-red-500/60 shadow-inner">
                      <div className="relative flex-1 flex items-center">
                        <Mail className="absolute left-3.5 w-4 h-4 text-zinc-500 group-focus-within/input:text-red-400 transition-colors" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your student or parent email..."
                          className="w-full pl-10 pr-4 py-3 bg-transparent text-white placeholder-zinc-500 text-xs sm:text-sm outline-none font-medium"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="group/btn relative px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-600/30 hover:shadow-red-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 overflow-hidden"
                      >
                        {/* Shimmer sweep */}
                        <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover/btn:animate-shimmer-sweep pointer-events-none" />
                        <span className="relative z-10">Get Free Notes</span>
                        <Send className="w-3.5 h-3.5 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-zinc-500 px-2">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      100% Free Educational Material
                    </span>
                    <span>Unsubscribe anytime in 1-click</span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. TRUST & ACCREDITATION PILLARS RIBBON                    */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: ShieldCheck,
              title: 'NTA & CBSE Aligned',
              desc: '100% NCERT rationalized syllabus mapped for 2026-27',
              color: 'text-rose-500',
              border: 'group-hover:border-rose-500/40',
              bg: 'bg-rose-500/10'
            },
            {
              icon: Stethoscope,
              title: 'AIIMS & IITian Faculty',
              desc: 'Structured pedagogy mentored by top all-India rankers',
              color: 'text-red-500',
              border: 'group-hover:border-red-500/40',
              bg: 'bg-red-500/10'
            },
            {
              icon: Cpu,
              title: '99.98% CBT Simulation',
              desc: 'Real NTA-grade computer exam testing interface & analytics',
              color: 'text-amber-500',
              border: 'group-hover:border-amber-500/40',
              bg: 'bg-amber-500/10'
            },
            {
              icon: Award,
              title: 'Verified Academic Trust',
              desc: 'ISO standards & 256-bit encrypted student records',
              color: 'text-emerald-500',
              border: 'group-hover:border-emerald-500/40',
              bg: 'bg-emerald-500/10'
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`group p-4 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 ${item.border} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl space-y-2`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`p-2 rounded-xl ${item.bg} ${item.color} shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white tracking-wide">{item.title}</h4>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed pl-0.5">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 3. MULTI-COLUMN BRAND & NAVIGATION MATRIX                 */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-2">
          
          {/* Brand Info & Contact Hub (4 Columns on Desktop) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3.5">
              <div className="inline-block transform hover:scale-[1.02] transition-transform">
                <BrandLogo variant="full" size="lg" />
              </div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-semibold text-zinc-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>Where The Dreams Finds Their Direction</span>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 max-w-sm">
                India&apos;s synchronized digital ecosystem for NEET UG, JEE Main, CUET, and School Board Excellence — powered by AIIMS doctors &amp; IITian master faculty.
              </p>
            </div>

            {/* Live Operational Status Beacon */}
            <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs text-zinc-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-medium text-[11px]">All CBT Simulation Engines Online (99.98% SLA)</span>
            </div>

            {/* Interactive Contact Touchpoints */}
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-zinc-300 text-xs leading-snug">
                  Learndawn Academic Tower, New Delhi • Bengaluru • Chennai
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a 
                  href="mailto:admissions@learndawn.in"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-red-500/40 hover:bg-red-950/20 text-zinc-300 hover:text-white transition group cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform shrink-0" />
                  <span className="truncate text-[11px] font-medium">admissions@learndawn.in</span>
                </a>

                <a 
                  href="tel:18005327632"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-red-500/40 hover:bg-red-950/20 text-zinc-300 hover:text-white transition group cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform shrink-0" />
                  <span className="truncate text-[11px] font-bold">1800-LEARN-DAWN</span>
                </a>
              </div>
            </div>

            {/* Social Media Community Stack */}
            <div className="pt-2 space-y-2.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Join Aspirants Community
              </div>
              <div className="flex items-center gap-2.5">
                {[
                  { 
                    name: 'YouTube', 
                    icon: YoutubeIcon, 
                    color: 'hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10 hover:shadow-red-500/20', 
                    href: 'https://youtube.com/@learndawn' 
                  },
                  { 
                    name: 'Instagram', 
                    icon: InstagramIcon, 
                    color: 'hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 hover:shadow-pink-500/20', 
                    href: 'https://instagram.com/learndawn' 
                  },
                  { 
                    name: 'LinkedIn', 
                    icon: LinkedinIcon, 
                    color: 'hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-blue-500/20', 
                    href: 'https://linkedin.com/company/learndawn' 
                  },
                  { 
                    name: 'X (Twitter)', 
                    icon: XTwitterIcon, 
                    color: 'hover:text-zinc-200 hover:border-zinc-400/50 hover:bg-zinc-800 hover:shadow-zinc-500/20', 
                    href: 'https://x.com/learndawn' 
                  },
                  { 
                    name: 'WhatsApp Community', 
                    icon: WhatsAppIcon, 
                    color: 'hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-emerald-500/20', 
                    href: 'https://whatsapp.com' 
                  },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg active:scale-95 cursor-pointer ${social.color}`}
                      aria-label={`Follow Learndawn on ${social.name}`}
                      title={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 4 Interactive Categorized Link Columns (8 Columns on Desktop) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Column 1: Target Entrance Exams */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2.5 border-b border-zinc-800/80">
                <div className="p-1.5 rounded-lg bg-red-500/10 text-red-500">
                  <Stethoscope className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Target Exams</h4>
              </div>
              <ul className="space-y-2 text-xs">
                {[
                  { name: 'NEET UG 2026', href: '/exams/neet-ug', badge: 'HOT' },
                  { name: 'JEE Main & Adv', href: '/exams/jee-main', badge: 'POPULAR' },
                  { name: 'CUET (UG)', href: '/exams/cuet' },
                  { name: 'AIIMS B.Sc Nursing', href: '/exams/aiims-nursing' },
                  { name: 'AIIMS Paramedical', href: '/exams/aiims-paramedical' },
                  { name: 'CBSE Class 9-12', href: '/academics' },
                  { name: 'All Goal Exams →', href: '/exams', isHighlight: true },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`group flex items-center justify-between py-1 transition-all duration-200 ${
                        item.isHighlight 
                          ? 'text-red-400 hover:text-red-300 font-bold' 
                          : 'text-zinc-400 hover:text-white hover:translate-x-1'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <ChevronRight className="w-3 h-3 text-red-500 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        <span>{item.name}</span>
                      </span>
                      {item.badge && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-red-600/20 text-red-400 border border-red-500/30 animate-pulse">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Learning Ecosystem */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2.5 border-b border-zinc-800/80">
                <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-500">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Ecosystem</h4>
              </div>
              <ul className="space-y-2 text-xs">
                {[
                  { name: 'Dawn Studio', href: '/courses', badge: 'LIVE' },
                  { name: 'CBT Practice Hub', href: '/practice', badge: 'NEW' },
                  { name: '4-Layer NCERT', href: '/learning-system' },
                  { name: '1:1 Mentorship', href: '/mentorship' },
                  { name: 'Daily Mock Tests', href: '/practice' },
                  { name: 'Performance AI', href: '/learning-system' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between py-1 text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                    >
                      <span className="flex items-center gap-1.5">
                        <ChevronRight className="w-3 h-3 text-amber-500 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        <span>{item.name}</span>
                      </span>
                      {item.badge && (
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                          item.badge === 'LIVE' 
                            ? 'bg-rose-600/20 text-rose-400 border border-rose-500/30 animate-pulse'
                            : 'bg-amber-600/20 text-amber-400 border border-amber-500/30'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Free Study Resources */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2.5 border-b border-zinc-800/80">
                <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-500">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Resources</h4>
              </div>
              <ul className="space-y-2 text-xs">
                {[
                  { name: 'Study Material', href: '/resources' },
                  { name: 'NCERT Formula Sheets', href: '/resources', badge: 'FREE' },
                  { name: 'Previous Year PYQs', href: '/resources' },
                  { name: 'Exam Question Bank', href: '/resources' },
                  { name: 'Rank Predictor', href: '/exams' },
                  { name: 'Sitemap XML', href: '/sitemap.xml' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between py-1 text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                    >
                      <span className="flex items-center gap-1.5">
                        <ChevronRight className="w-3 h-3 text-purple-500 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        <span>{item.name}</span>
                      </span>
                      {item.badge && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-purple-600/20 text-purple-400 border border-purple-500/30">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Academic Council & Trust */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2.5 border-b border-zinc-800/80">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Academy</h4>
              </div>
              <ul className="space-y-2 text-xs">
                {[
                  { name: 'About Academy', href: '/about' },
                  { name: 'Faculty Credentials', href: '/about#collaborators' },
                  { name: 'Methodology', href: '/learning-system' },
                  { name: 'Careers & Faculty', href: '/about#careers', badge: 'HIRING' },
                  { name: 'Student Desk', href: '/contact#support' },
                  { name: 'Helpline & Contact', href: '/contact' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between py-1 text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                    >
                      <span className="flex items-center gap-1.5">
                        <ChevronRight className="w-3 h-3 text-emerald-500 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        <span>{item.name}</span>
                      </span>
                      {item.badge && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. BOTTOM POLICIES BAR, COPYRIGHT & BACK TO TOP           */}
        {/* ========================================================= */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-400">
          
          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2">
            {[
              { name: 'Privacy Policy', href: '/about#privacy' },
              { name: 'Terms of Service', href: '/about#terms' },
              { name: 'Refund Policy', href: '/about#refund' },
              { name: 'User Guidelines', href: '/about#guidelines' },
              { name: 'Grievance Officer', href: '/contact#grievance' },
              { name: 'Takedown Notice', href: '/contact#takedown' },
            ].map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="hover:text-red-400 transition-colors py-0.5"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center Crafted Badge */}
          <div className="flex items-center gap-1.5 text-zinc-400 text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
            <span>for India&apos;s Future Doctors &amp; Engineers</span>
          </div>

          {/* Copyright & Interactive Scroll to Top */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-[11px] text-zinc-400">
              © {new Date().getFullYear()} Learndawn India. All rights reserved.
            </span>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-red-500/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all shadow-md hover:shadow-red-500/20 active:scale-95 cursor-pointer"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <span className="text-[11px] font-semibold hidden sm:inline">Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-red-500" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
