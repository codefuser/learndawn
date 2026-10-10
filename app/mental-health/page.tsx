import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Heart,
  ShieldAlert,
  AlertTriangle,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Users,
  Compass,
  ArrowRight,
  Stethoscope,
  Lock,
  MessageSquareHeart,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mental Health & Healthcare Support | LearnDawn India',
  description:
    'Your well-being matters. Your life matters. LearnDawn provides compassionate, responsible guidance and support for student mental health and well-being.',
};

const stressSigns = [
  'Examination anxiety',
  'Persistent academic stress',
  'Fear of failure',
  'Pressure from expectations',
  'Difficulty concentrating',
  'Loss of motivation',
  'Feeling overwhelmed',
  'Social isolation',
  'Difficulty managing academic and personal responsibilities',
];

const supportRoles = [
  'Listen without unnecessary judgement',
  'Take concerns seriously',
  'Encourage students to seek appropriate help',
  'Connect students with qualified professionals where necessary',
  'Encourage communication with trusted family members or responsible adults',
  'Help students access appropriate healthcare or mental-health services',
];

const notReplacingList = [
  'Doctors',
  'Psychiatrists',
  'Clinical psychologists',
  'Counsellors',
  'Nurses',
  'Emergency medical services',
  'Other qualified healthcare professionals',
];

export default function MentalHealthPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-rose-50/60 via-white to-transparent dark:from-rose-950/20 dark:via-slate-950 dark:to-transparent border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 text-xs font-semibold tracking-wide uppercase mb-6">
            <Heart className="w-3.5 h-3.5 fill-current" />
            Student Well-Being &amp; Care
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Mental Health &amp; Healthcare Support
          </h1>

          <p className="text-2xl sm:text-3xl font-bold text-rose-600 dark:text-rose-400 mb-6">
            Your Well-Being Matters. Your Life Matters.
          </p>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            At LearnDawn India, we believe that education is not only about academic performance. A student&apos;s physical health, mental well-being, emotional stability, and sense of safety are equally important.
          </p>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Academic pressure, examination stress, family expectations, relationship difficulties, financial concerns, loneliness, or uncertainty about the future can sometimes become overwhelming. Students should not feel that they have to face such situations alone.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919025362645"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              Speak to Us: +91 90253 62645
            </a>
            <Link
              href="/career-guidance/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm border border-slate-300 dark:border-slate-700 transition-all"
            >
              Book a Counselling Session
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Immediate Safety Concerns Alert Box */}
      <section className="py-12 bg-red-50/80 dark:bg-red-950/30 border-b border-red-200 dark:border-red-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-300 dark:border-red-800 shadow-md">
            <div className="flex items-center gap-3 mb-4 text-red-600 dark:text-red-400">
              <ShieldAlert className="w-7 h-7 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold">Immediate Safety Concerns</h2>
            </div>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
              If a student feels that they may hurt themselves, feels unable to stay safe, or is facing an immediate mental-health emergency, LearnDawn is not a replacement for emergency medical care or professional crisis intervention.
            </p>

            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 mb-5">
              <div className="text-xs font-bold text-red-700 dark:text-red-300 uppercase tracking-wide mb-2">
                The Priority Should Be Immediate Safety. Students Should:
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
                <span>Move to a safe environment</span>
                <span className="text-red-500 font-bold">&rarr;</span>
                <span>Stay with a trusted person</span>
                <span className="text-red-500 font-bold">&rarr;</span>
                <span>Tell a parent, guardian, teacher, mentor, doctor, or trusted adult</span>
                <span className="text-red-500 font-bold">&rarr;</span>
                <span className="text-red-600 dark:text-red-400 font-bold">Contact emergency services immediately</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80">
              <div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                  National Emergency Number (India)
                </div>
                <div className="text-2xl font-black text-red-600 dark:text-red-400">112</div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md">
                Students may also seek urgent assistance from the nearest hospital or qualified healthcare professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Safe Point of Support */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase mb-4">
              <MessageSquareHeart className="w-3.5 h-3.5" />
              Compassionate Guidance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              A Safe Point of Support
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              LearnDawn provides a supportive pathway for students who are experiencing emotional distress, severe academic stress, or concerns affecting their well-being.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium">
              Students can approach the Student Desk or appropriate support team when they need help finding the right next step.
            </p>
          </div>

          <div className="lg:col-span-6 rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Our Role Is To:
            </h3>
            <ul className="space-y-3.5">
              {supportRoles.map((role, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* When Academic Pressure Becomes Overwhelming */}
      <section className="py-16 sm:py-20 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              When Academic Pressure Becomes Overwhelming
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Competitive examinations can be demanding. Students may experience:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {stressSigns.map((sign, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3 shadow-sm"
              >
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{sign}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center max-w-2xl mx-auto">
            <p className="text-base text-slate-700 dark:text-slate-300 font-medium mb-2">
              These experiences should not simply be ignored.
            </p>
            <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
              Seeking help is a responsible step, not a weakness.
            </p>
          </div>
        </div>
      </section>

      {/* Healthcare Support Boundaries + Confidentiality */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Healthcare Boundaries */}
          <div className="rounded-2xl p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Healthcare Support
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Students experiencing physical health concerns should seek assessment from a qualified healthcare professional.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              LearnDawn may help students understand where to seek appropriate care, but our educational team does not replace:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {notReplacingList.map((item, i) => (
                <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
              Medical or mental-health concerns should be evaluated by the appropriate professional.
            </p>
          </div>

          {/* Confidentiality & For Parents */}
          <div className="space-y-6">
            <div className="rounded-2xl p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-3 text-slate-900 dark:text-white">
                <Lock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h4 className="text-xl font-bold">Confidentiality &amp; Responsible Support</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Students should feel comfortable communicating genuine concerns. LearnDawn aims to handle student concerns respectfully and responsibly.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                However, when there is an immediate risk to a student&apos;s safety, involving a responsible adult, family member, healthcare professional, or emergency service may be necessary to protect the student.
              </p>
            </div>

            <div className="rounded-2xl p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-3 text-slate-900 dark:text-white">
                <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-xl font-bold">For Parents &amp; Guardians</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                If you notice significant changes in a student&apos;s behaviour, academic functioning, communication, sleep, social interaction, or general well-being, do not dismiss the changes simply as lack of discipline or motivation.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                A calm conversation and timely professional support can make an important difference. If you are concerned about a student&apos;s immediate safety, seek professional or emergency assistance without delay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Message to Every Student */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">
            Important Reminder
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-8">
            Our Message to Every Student
          </h3>
          <div className="space-y-4 text-xl sm:text-2xl font-bold text-blue-100 max-w-2xl mx-auto">
            <p>&ldquo;Your examination result does not define your worth.&rdquo;</p>
            <p>&ldquo;A difficult academic period does not determine your entire future.&rdquo;</p>
            <p className="text-white text-2xl sm:text-3xl pt-2 font-black">
              Asking for help is not failure.
            </p>
          </div>
        </div>
      </section>

      {/* Speak to Us Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl text-center max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Speak to Us
          </h3>
          <p className="text-xl font-semibold text-rose-600 dark:text-rose-400 mb-6">
            You Don&apos;t Have to Figure Everything Out Alone.
          </p>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4 max-w-2xl mx-auto">
            Whether you have an academic question, need mentorship, require counselling, or simply need help finding the right support, LearnDawn India is here to listen.
          </p>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto font-medium">
            If you are unsure about what to do next, reach out to us. Tell us what you need. We will help you find the right direction.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Student Desk</div>
              <a
                href="tel:+919025362645"
                className="text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-rose-500" />
                +91 90253 62645
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Email Support</div>
              <a
                href="mailto:learndawn24@gmail.com"
                className="text-xs font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 truncate block"
              >
                learndawn24@gmail.com
              </a>
              <a
                href="mailto:entprepmakers3@gmail.com"
                className="text-xs font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 truncate block mt-0.5"
              >
                entprepmakers3@gmail.com
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Online Support</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-500" />
                Available 24/7
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">Official support channels</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919025362645"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm shadow-md transition-all"
            >
              Speak to Us &rarr;
            </a>
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm border border-slate-300 dark:border-slate-700 transition-all"
            >
              Message Us &rarr;
            </Link>
            <Link
              href="/career-guidance/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition-all"
            >
              Book a Counselling Session &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
