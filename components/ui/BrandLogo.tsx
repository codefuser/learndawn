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
  theme = 'auto',
  className = '',
  href = '/',
  size = 'md',
}) => {
  // Height presets maintaining the clean horizontal ratio (1624x498 ~ 3.26:1)
  const sizeMap = {
    sm: { height: 32, width: 105, className: 'h-8 sm:h-9 w-auto' },
    md: { height: 42, width: 137, className: 'h-10 sm:h-11 md:h-12 w-auto' },
    lg: { height: 52, width: 170, className: 'h-11 sm:h-12 md:h-14 w-auto' },
  };

  const currentSize = sizeMap[size];

  const renderLogoImage = () => {
    if (theme === 'light') {
      return (
        <Image
          src="/logos/logo-light.png"
          alt="LEARNDAWN"
          width={currentSize.width}
          height={currentSize.height}
          className={`${currentSize.className} object-contain transition-opacity duration-200`}
          priority
        />
      );
    }

    if (theme === 'dark') {
      return (
        <Image
          src="/logos/logo-dark.png"
          alt="LEARNDAWN"
          width={currentSize.width}
          height={currentSize.height}
          className={`${currentSize.className} object-contain transition-opacity duration-200`}
          priority
        />
      );
    }

    // Auto: Seamless CSS-based theme switching between light and dark modes
    return (
      <>
        <Image
          src="/logos/logo-light.png"
          alt="LEARNDAWN"
          width={currentSize.width}
          height={currentSize.height}
          className={`${currentSize.className} object-contain dark:hidden transition-opacity duration-200`}
          priority
        />
        <Image
          src="/logos/logo-dark.png"
          alt="LEARNDAWN"
          width={currentSize.width}
          height={currentSize.height}
          className={`${currentSize.className} object-contain hidden dark:block transition-opacity duration-200`}
          priority
        />
      </>
    );
  };

  const LogoContent = (
    <div className={`inline-flex items-center select-none py-0.5 ${className}`}>
      {renderLogoImage()}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-red-500/40 rounded-lg transition-transform hover:opacity-95 active:scale-95"
        aria-label="LEARNDAWN Home"
      >
        {LogoContent}
      </Link>
    );
  }

  return LogoContent;
};
