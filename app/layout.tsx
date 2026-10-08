import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { I18nProvider } from '@/lib/i18n/context';
import { AuthProvider } from '@/lib/auth/context';
import { ToastProvider } from '@/components/ui/Toast';
import { AuthModal } from '@/components/auth/AuthModal';
import { SearchProvider } from '@/components/search/SearchContext';

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
      <body
        className="min-h-full flex flex-col font-sans bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
        suppressHydrationWarning
      >
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
      </body>
    </html>
  );
}
