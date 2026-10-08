import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { STUDY_MATERIALS_DATA } from '@/lib/data/mockData';
import { FileText, Download, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mat = STUDY_MATERIALS_DATA.find((m) => m.slug === slug);
  if (!mat) return { title: 'Resource Not Found | Learndawn India' };

  return {
    title: `${mat.title} | Learndawn Resource Vault`,
    description: `Download ${mat.title} for ${mat.subject_name}. High-yield verified study material with ${mat.page_count} pages.`,
  };
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const material = STUDY_MATERIALS_DATA.find((m) => m.slug === slug);

  if (!material) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1 pb-20">
        <section className="py-14 sm:py-20 bg-gradient-to-b from-purple-900 via-slate-900 to-slate-950 text-white">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/resources" className="hover:text-white">Resources</Link>
              <span>/</span>
              <span className="text-purple-400 font-semibold">{material.subject_name}</span>
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider border border-purple-500/30">
              {material.material_type.replace('_', ' ')}
            </span>

            <h1 className="text-3xl sm:text-4xl font-black tracking-tight max-w-3xl">
              {material.title}
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Curated by senior faculty. Formatted with high-contrast diagrams, active recall callout boxes, and essential entrance derivations.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-xs text-slate-400 block">File Size</span>
                <span className="text-base font-bold text-slate-900 dark:text-white">{material.file_size}</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-xs text-slate-400 block">Total Pages</span>
                <span className="text-base font-bold text-slate-900 dark:text-white">{material.page_count} Pages</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-xs text-slate-400 block">Subject</span>
                <span className="text-base font-bold text-slate-900 dark:text-white">{material.subject_name}</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-xs text-slate-400 block">Downloads</span>
                <span className="text-base font-bold text-red-600">{material.download_count.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <h4 className="font-bold text-slate-900 dark:text-white">Document Inclusions:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Line-by-line NCERT statement mapping</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>High-frequency formula quick reference table</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Exemplar diagrams with labeled anatomical and physical markers</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>Protected by Learndawn Verified Academic Security</span>
              </div>
              <Link
                href="/auth/sign-in"
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs shadow-md transition flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Handbook</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
