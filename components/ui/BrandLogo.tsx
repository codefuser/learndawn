import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface BrandLogoProps {
  variant?: 'full' | 'mark' | 'horizontal' | 'mobile' | 'image' | 'white-bg';
  theme?: 'dark' | 'light' | 'auto';
  className?: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  theme = 'auto',
  className = '',
  href = '/',
  size = 'md',
}) => {
  const isLight = theme === 'light';

  // Dimension presets
  const sizeMap = {
    sm: { box: 'w-8 h-8', img: 32, text: 'text-base', sub: 'text-[9px]' },
    md: { box: 'w-10 h-10', img: 40, text: 'text-lg', sub: 'text-[10px]' },
    lg: { box: 'w-12 h-12', img: 48, text: 'text-xl', sub: 'text-xs' },
  };

  const currentSize = sizeMap[size];

  // If explicitly requested the direct full image with text
  if (variant === 'image') {
    const ImageContent = (
      <div className={`relative inline-flex items-center select-none ${className}`}>
        <Image
          src="/logos/LOGO.png"
          alt="Learndawn Tamil Logo"
          width={180}
          height={60}
          className="h-10 w-auto object-contain dark:brightness-110"
          priority
        />
      </div>
    );

    if (href) {
      return (
        <Link href={href} className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl p-0.5">
          {ImageContent}
        </Link>
      );
    }
    return ImageContent;
  }

  // If requested white-backed emblem
  if (variant === 'white-bg') {
    const WhiteBgContent = (
      <div className={`relative inline-flex items-center gap-3 select-none ${className}`}>
        <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-1 border border-slate-200 dark:border-slate-800 shadow-sm shrink-0 flex items-center justify-center">
          <Image
            src="/logos/LOGO.png"
            alt="Learndawn Logo"
            width={40}
            height={40}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-tight text-lg uppercase ${isLight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
              LEARN<span className="text-red-500">DAWN</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 border border-red-500/30">
              TAMIL
            </span>
          </div>
          <span className="text-[10px] tracking-wide text-slate-500 dark:text-slate-400 font-medium">
            Digital Learning Academy
          </span>
        </div>
      </div>
    );

    if (href) {
      return (
        <Link href={href} className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl p-0.5">
          {WhiteBgContent}
        </Link>
      );
    }
    return WhiteBgContent;
  }

  // Default & Standard: Transparent Victory Graduate Emblem + Dynamic Typography
  const LogoContent = (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official red Victory Graduate Emblem */}
      <div className={`relative flex items-center justify-center ${currentSize.box} rounded-xl bg-gradient-to-br from-red-500/15 via-red-500/10 to-red-600/20 border border-red-500/30 p-1 shadow-md shadow-red-500/10 shrink-0 group-hover:scale-105 transition-transform`}>
        <Image
          src="/logos/LOGO.png"
          alt="Learndawn Emblem"
          width={currentSize.img}
          height={currentSize.img}
          className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(239,68,68,0.3)]"
          priority
        />
      </div>

      {variant !== 'mark' && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black tracking-tight ${currentSize.text} uppercase transition-colors ${
                isLight ? 'text-white' : 'text-slate-900 dark:text-white'
              }`}
            >
              LEARN<span className="text-red-500 dark:text-red-400">DAWN</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 border border-red-500/30">
              TAMIL
            </span>
          </div>
          {variant !== 'mobile' && (
            <span className={`${currentSize.sub} tracking-wide text-slate-500 dark:text-slate-400 font-medium mt-0.5`}>
              Digital Learning Academy
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl p-0.5 group">
        {LogoContent}
      </Link>
    );
  }

  return LogoContent;
};
