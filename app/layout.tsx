import type { Metadata } from 'next';
import Script from 'next/script';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { I18nProvider } from '@/lib/i18n/context';
import { AuthProvider } from '@/lib/auth/context';
import { ToastProvider } from '@/components/ui/Toast';
import { AuthModal } from '@/components/auth/AuthModal';
import { SearchProvider } from '@/components/search/SearchContext';
import { ThemeProvider } from '@/lib/theme/context';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Learndawn India | Digital Learning Academy',
    template: '%s | Learndawn India',
  },
  description: 'A modern digital learning academy for competitive entrance exams, academics, skills, mentorship, and career guidance.',
  keywords: ['NEET UG', 'JEE Main', 'CUET', 'AIIMS Nursing', 'AIIMS Paramedical', 'CBSE Class 12', 'EdTech India'],
  authors: [{ name: 'Learndawn Academic Council' }],
  openGraph: {
    title: 'Learndawn India - Learn Today. Build Your Tomorrow.',
    description: 'Premier digital academy for NEET, JEE, AIIMS, and Academic Excellence.',
    siteName: 'Learndawn India',
    type: 'website',
  },
  icons: {
    icon: '/logos/LOGO.png',
    shortcut: '/logos/LOGO.png',
    apple: '/logos/LOGO.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head />
      <body
        className="min-h-full flex flex-col font-sans bg-white dark:bg-black text-slate-900 dark:text-zinc-100 selection:bg-red-500/20 selection:text-white"
        suppressHydrationWarning
      >
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('learndawn-theme');
                if (t === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.documentElement.style.colorScheme = 'light';
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.style.colorScheme = 'dark';
                }
              } catch (e) {}
            `,
          }}
        />
        <ThemeProvider>
          <I18nProvider>
            <AuthProvider>
              <ToastProvider>
                <SearchProvider>
                  {children}
                  <AuthModal />
                </SearchProvider>
              </ToastProvider>
            </AuthProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
