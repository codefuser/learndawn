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
      icon: <Video className="w-6 h-6 text-red-500" />,
      title: 'Adaptive Video Streaming',
      desc: 'Smart bitrate switching ensures buffer-free lectures even on low-speed 3G/4G connections across rural and semi-urban India.',
    },
    {
      icon: <FileText className="w-6 h-6 text-red-500" />,
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
        <section className="py-14 sm:py-20 bg-gradient-to-b from-red-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 text-xs font-bold uppercase tracking-wider">
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

        {/* ========================================================= */}
        {/* 1. LEVEL OF PREPARATION (STUDENT EDITION)                 */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-24 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">
              STUDENT EDITION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase mt-2">
              LEVEL OF PREPARATION
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
              LearnDawn&apos;s structured 8-stage preparation pathway converting large syllabi into consistent, measurable milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: '01',
                name: 'Lecture',
                purpose: 'Build the foundation.',
                desc: 'Students begin by understanding the subject, topic and concepts through structured lectures.',
                badge: 'Foundation',
              },
              {
                step: '02',
                name: 'Revision',
                purpose: 'Strengthen what you learned.',
                desc: 'Students revisit previously learned concepts to improve retention and understanding.',
                badge: 'Retention',
              },
              {
                step: '03',
                name: 'Foundation Check',
                assessment: 'AURA Exam',
                purpose: 'Test your basics through AURA Exam.',
                desc: 'Comprehensive diagnostic evaluation assessing baseline concept readiness.',
                badge: 'Assessment: AURA',
              },
              {
                step: '04',
                name: 'Error Check',
                assessment: 'EEC Exam',
                purpose: 'Identify and eliminate mistakes through EEC Exam.',
                desc: 'Pinpoints conceptual slips, misreading errors, and calculation bottlenecks.',
                badge: 'Assessment: EEC',
              },
              {
                step: '05',
                name: 'Conceptual Check',
                assessment: 'Core Concept Evaluation',
                purpose: 'Challenge your understanding through Core Concept Evaluation.',
                desc: 'Tests application to unfamiliar problem variants and complex scenarios.',
                badge: 'Evaluation',
              },
              {
                step: '06',
                name: 'PYQs',
                purpose: 'Understand the examination through Previous Year Questions.',
                desc: 'Systematic analysis of 10+ years of previous competitive examination patterns (PYQ Analysis).',
                badge: 'Pattern Analysis',
              },
              {
                step: '07',
                name: 'DMM',
                assessment: 'Advanced Module Practice',
                purpose: 'Master advanced application through Advanced Module Practice.',
                desc: 'High-yield tier simulation drills calibrating accuracy under strict time pressure.',
                badge: 'DMM Module',
              },
              {
                step: '08',
                name: 'Consistency',
                purpose: 'Maintain preparation until the destination is reached.',
                desc: 'Continued practice, repeated assessment, correction and preparation discipline.',
                badge: 'Goal Achieved',
              },
            ].map((stage) => (
              <div
                key={stage.step}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-red-500/50 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-black text-red-500">
                      {stage.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {stage.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-red-500 transition-colors">
                    {stage.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1 mb-2">
                    {stage.purpose}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. 15 LEVEL TEST SERIES                                   */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-24 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-black/40">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-500">
              DIAGNOSTIC BENCHMARKING
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase mt-2">
              15 LEVEL TEST SERIES
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
              Multi-tiered assessment ecosystem providing continuous checkpoints from chapter fundamentals to national showdown simulations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { id: '01', title: 'Advanced Unified Revision Assessment' },
              { id: '02', title: 'Lessons Wise Test' },
              { id: '03', title: 'Topic Wise Test Series' },
              { id: '04', title: 'Concept Wise Test' },
              { id: '05', title: 'Sequential Test Series' },
              { id: '06', title: 'Cumulative Test Series' },
              { id: '07', title: 'Core Concept Evaluation' },
              { id: '08', title: 'Primo Test Series' },
              { id: '09', title: 'Weekly Marathon' },
              { id: '10', title: 'Mentimeter Test Series' },
              { id: '11', title: 'Showdown Test Series' },
              { id: '12', title: 'Trialthon Test Series' },
              { id: '13', title: 'Error Evaluation Test' },
              { id: '14', title: 'Genesis Test Series' },
              { id: '15', title: 'Play With the Numbers' },
            ].map((test) => (
              <div
                key={test.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5 hover:border-emerald-500/50 hover:shadow-md transition-all"
              >
                <span className="text-sm font-black text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                  {test.id}
                </span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-snug">
                  {test.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. DMM MODULE 2027                                        */}
        {/* ========================================================= */}
        <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-24 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">
              ADVANCED MODULE PRACTICE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase mt-2">
              DMM MODULE 2027
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
              Named advanced module in the LearnDawn orientation material featuring five structured paper tiers along a progressive preparation pathway.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                id: '01',
                name: 'Replica Paper',
                color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-400',
                badge: 'Tier 01',
              },
              {
                id: '02',
                name: 'Golden Paper',
                color: 'from-amber-500/20 to-yellow-500/10 border-amber-500/40 text-amber-600 dark:text-amber-400',
                badge: 'Tier 02',
              },
              {
                id: '03',
                name: 'Silver Paper',
                color: 'from-slate-400/20 to-zinc-400/10 border-slate-400/40 text-slate-600 dark:text-slate-300',
                badge: 'Tier 03',
              },
              {
                id: '04',
                name: 'Platinum Paper',
                color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/40 text-cyan-600 dark:text-cyan-400',
                badge: 'Tier 04',
              },
              {
                id: '05',
                name: 'Bronze Paper',
                color: 'from-orange-500/20 to-amber-700/10 border-orange-500/40 text-orange-600 dark:text-orange-400',
                badge: 'Tier 05',
              },
            ].map((paper) => (
              <div
                key={paper.id}
                className={`p-6 rounded-3xl bg-gradient-to-b ${paper.color} bg-white dark:bg-slate-900 border text-center flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-slate-400 dark:text-slate-500">
                      PATHWAY {paper.id}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      {paper.badge}
                    </span>
                  </div>
                  <div className="text-3xl font-black mb-2">
                    {paper.id}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {paper.name}
                  </h3>
                </div>
                <div className="text-[11px] text-slate-500 mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-800/50">
                  DMM 2027 Assessment Paper
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
