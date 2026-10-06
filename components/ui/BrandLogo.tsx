import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'full' | 'mark' | 'horizontal' | 'mobile';
  theme?: 'dark' | 'light' | 'auto';
  className?: string;
  href?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  theme = 'auto',
  className = '',
  href = '/',
}) => {
  const isLight = theme === 'light';

  const LogoSvg = (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Radiant Dawn Emblem */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-orange-600 to-indigo-700 p-0.5 shadow-md shadow-orange-500/20 shrink-0">
        <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center overflow-hidden relative">
          {/* Subtle sun rays aura */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(245,158,11,0.35),transparent_70%)]" />
          <svg
            viewBox="0 0 40 40"
            className="w-6 h-6 text-amber-400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Dawn Horizon Arc */}
            <path
              d="M6 26C10 20 15 17 20 17C25 17 30 20 34 26"
              stroke="url(#dawn-grad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Ascending Knowledge Beam / Spire */}
            <path
              d="M20 7L24 16L20 22L16 16L20 7Z"
              fill="url(#core-grad)"
            />
            {/* Sunrise Rays */}
            <line x1="20" y1="4" x2="20" y2="2" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            <line x1="27" y1="7" x2="29" y2="5" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" />
            <line x1="13" y1="7" x2="11" y2="5" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" />
            {/* Foundation Pages Base */}
            <path
              d="M10 29C15 27 20 28 20 28C20 28 25 27 30 29"
              stroke="#94A3B8"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="dawn-grad" x1="6" y1="21.5" x2="34" y2="21.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F59E0B" />
                <stop offset="0.5" stopColor="#FB923C" />
                <stop offset="1" stopColor="#38BDF8" />
              </linearGradient>
              <linearGradient id="core-grad" x1="16" y1="7" x2="24" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FCD34D" />
                <stop offset="1" stopColor="#EA580C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {variant !== 'mark' && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black tracking-tight text-lg uppercase transition-colors ${
                isLight ? 'text-white' : 'text-slate-900 dark:text-white'
              }`}
            >
              LEARN<span className="text-amber-500">DAWN</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-600/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 border border-blue-500/20">
              INDIA
            </span>
          </div>
          {variant !== 'mobile' && (
            <span className="text-[10px] tracking-wide text-slate-500 dark:text-slate-400 font-medium">
              Digital Learning Academy
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg p-0.5">
        {LogoSvg}
      </Link>
    );
  }

  return LogoSvg;
};
