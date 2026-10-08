import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { VideoPlayer } from '@/components/learning/VideoPlayer';
import { 
  Sparkles, 
  Video, 
  Layers, 
  FileText, 
  CheckCircle, 
  HelpCircle, 
  ShieldCheck, 
  Cpu, 
  Smartphone,
  WifiOff
} from 'lucide-react';

export const metadata = {
  title: 'Digital Learning System | Pedagogy & Classroom Technology',
  description: 'Discover Learndawn\'s integrated digital learning system featuring DRM video delivery, synchronized lecture notes, interactive chapters, and real-time doubt clearing.',
};

export default function LearningSystemPage() {
  const systemFeatures = [
    {
      icon: <Video className="w-6 h-6 text-blue-500" />,
      title: 'Adaptive Video Streaming',
      desc: 'Smart bitrate switching ensures buffer-free lectures even on low-speed 3G/4G connections across rural and semi-urban India.',
    },
    {
      icon: <FileText className="w-6 h-6 text-emerald-500" />,
      title: 'Synchronized Smart Notes',
      desc: 'Read annotated formulas, diagram callouts, and instructor whiteboard snapshots in real-time alongside playback.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      title: 'DRM Content Security',
      desc: 'Dynamic dynamic watermarking and encrypted media fragments protect academic faculty intellectual property.',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-amber-500" />,
      title: 'Device Fluidity',
      desc: 'Seamless continuity across smartphones, tablets, laptops, and large desktop screens without losing playback timestamps.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1 pb-20">
        <section className="py-14 sm:py-20 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Technology & Pedagogy</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              The Learndawn Learning System
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Designed from first principles to eliminate digital fatigue and foster active cognitive retention through structured micro-modules and synchronized notes.
            </p>
          </div>
        </section>

        {/* Live Interactive Player Demonstration */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-12 space-y-12">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Student Classroom Interface
                </h2>
                <p className="text-xs text-slate-500">
                  Try out the live video player shell below with lesson switching, notes review, and completion tracking.
                </p>
              </div>
            </div>
            <VideoPlayer courseTitle="NEET UG 360° Comprehensive Batch" />
          </div>

          {/* Architecture Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
            {systemFeatures.map((feat, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3"
              >
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-fit">
                  {feat.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
