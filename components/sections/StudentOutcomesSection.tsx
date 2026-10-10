import React from 'react';
import { 
  Trophy, 
  Stethoscope, 
  GraduationCap, 
  Award, 
  Building2, 
  Heart, 
  Activity, 
  Sparkles 
} from 'lucide-react';

export const StudentOutcomesSection: React.FC = () => {
  const medicalDegrees = [
    { label: 'MBBS', value: '79', sub: 'Bachelor of Medicine & Surgery' },
    { label: 'BDS', value: '18', sub: 'Bachelor of Dental Surgery' },
    { label: 'BHMS', value: '12', sub: 'Homeopathic Medicine' },
    { label: 'BAMS', value: '10', sub: 'Ayurvedic Medicine' },
    { label: 'B.V.Sc', value: '8', sub: 'Veterinary Science' },
    { label: 'BPT', value: '15+', sub: 'Physiotherapy' },
  ];

  const healthcarePathways = [
    { label: 'Nursing Officers', value: '21', sub: 'Serving in healthcare centers' },
    { label: 'BSc Nursing', value: '47', sub: 'Undergraduate professional nursing' },
    { label: 'Diploma Nursing', value: '13', sub: 'Clinical general nursing' },
    { label: 'Paramedical', value: '32', sub: 'Allied health & lab technologies' },
  ];

  const premierInstitutions = [
    { 
      label: 'Students Studying in AIIMS', 
      value: '23', 
      badge: 'All India Institute of Medical Sciences',
      desc: 'LearnDawn students enrolled across premier AIIMS institutions.'
    },
    { 
      label: 'Students of CMC', 
      value: '3', 
      badge: 'Christian Medical College',
      desc: 'Aspirants admitted to Christian Medical College.'
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-[#07070a] text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-zinc-800/80 transition-colors">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 text-xs font-bold uppercase tracking-wider mb-3 border border-red-200 dark:border-red-900/40">
            <Trophy className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>Educational Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
            STUDENT ACHIEVEMENTS &amp; EDUCATIONAL OUTCOMES
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-3 max-w-xl mx-auto">
            Client-documented student transitions into medical, dental, nursing, and allied healthcare careers.
          </p>
        </div>

        {/* 1. Flagship Highlight: Doctors Produced */}
        <div className="mb-12">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-red-600 via-rose-600 to-indigo-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-red-200">
                Primary Medical Milestone
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Doctors Produced Across Medical Disciplines
              </h3>
              <p className="text-xs sm:text-sm text-red-100 max-w-xl">
                Students guided through rigorous NEET preparation, concept mastery, and OnePod mentorship into medical seats.
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center shrink-0 min-w-[180px]">
              <div className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                127
              </div>
              <div className="text-xs font-bold text-red-200 uppercase tracking-wider mt-1">
                Doctors Produced
              </div>
            </div>
          </div>
        </div>

        {/* 2. Medical Degree Breakdown Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Stethoscope className="w-5 h-5 text-red-500" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
              Medical &amp; Clinical Degrees
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {medicalDegrees.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 text-center hover:border-red-500/40 hover:-translate-y-1 transition-all shadow-xs"
              >
                <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-1">
                  {item.value}
                </div>
                <div className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wide">
                  {item.label}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-zinc-400 mt-1 line-clamp-1">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Healthcare, Nursing & Paramedical Pathways */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-5 h-5 text-emerald-500" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
              Nursing &amp; Allied Healthcare Pathways
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {healthcarePathways.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 text-center hover:border-emerald-500/40 hover:-translate-y-1 transition-all shadow-xs"
              >
                <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-1">
                  {item.value}
                </div>
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-zinc-400 mt-1">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Premier National Institutes: AIIMS & CMC */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
              National Institute Admissions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {premierInstitutions.map((inst, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 flex items-center justify-between gap-6 hover:border-blue-500/40 transition-all shadow-xs"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                    {inst.badge}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {inst.label}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    {inst.desc}
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-center shrink-0 min-w-[90px]">
                  <div className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400">
                    {inst.value}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Enrolled
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
