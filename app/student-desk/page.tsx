import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Headphones, 
  Phone, 
  Mail, 
  Clock, 
  HelpCircle, 
  CheckCircle2, 
  BookOpen, 
  UserCheck, 
  Compass, 
  Laptop, 
  Users, 
  ShieldAlert, 
  Calendar, 
  ArrowRight,
  FileCheck2,
  AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Student Desk | LearnDawn India',
  description:
    'The LearnDawn India Student Desk is the central support system for students, parents, and learners. Listen. Understand. Assist. Resolve.',
};

const supportAreas = [
  'Course and batch information',
  'Admission and registration',
  'Mentorship',
  'Academic counselling',
  'Class schedules',
  'Examination schedules',
  'Study materials',
  'Test series',
  'Learning platforms',
  'Faculty-related queries',
  'Mentor-related queries',
  'Technical difficulties',
  'Attendance and academic concerns',
  'Student programmes',
  'Certificates and academic documentation',
  'General student support',
];

const supportCategories = [
  {
    title: 'Academic Support',
    icon: BookOpen,
    desc: 'For questions related to classes, syllabus, study plans, revision, tests, assignments, learning materials, and academic schedules.',
    items: ['Classes & Syllabus coverage', 'Study plans & Revision cycles', 'Tests & Assignments', 'Learning materials & Schedules'],
  },
  {
    title: 'Mentorship Support',
    icon: UserCheck,
    desc: 'Students who require individual guidance can request support regarding their mentor and preparation pathway.',
    items: ['Mentor allocation', 'Mentorship sessions & scheduling', 'Mentor communication', 'Academic progress discussions', 'Study planning & Individual concerns'],
  },
  {
    title: 'Counselling Support',
    icon: Compass,
    desc: 'Students and parents can contact the Student Desk for guidance regarding educational pathways and sessions.',
    items: ['Academic counselling', 'Career counselling', 'Course selection guidance', 'Higher-education pathways', 'Counselling registration & Appointment queries'],
  },
  {
    title: 'Technical Support',
    icon: Laptop,
    desc: 'For online learners encountering technical hurdles that interrupt daily learning.',
    items: ['Online class access', 'Google Meet sessions', 'Learning resources & Digital materials', 'Communication channels & Access issues'],
  },
  {
    title: 'Parent Support',
    icon: Users,
    desc: 'Parents are an important part of a student’s educational journey and can reach out for comprehensive updates.',
    items: ['Programmes & Student participation', 'Schedules & Registration', 'Mentorship & Counselling overview', 'Academic support & General services'],
  },
  {
    title: 'Student Grievance & Concern Support',
    icon: ShieldAlert,
    desc: 'A structured, confidential point of contact to ensure genuine issues are directed to the right team for review.',
    items: ['Academic Team', 'Mentorship Team', 'Student Affairs', 'Examination Team', 'Technical Support & Administration'],
    note: 'The objective is to ensure that concerns are heard, documented where necessary, and appropriately addressed.',
  },
  {
    title: 'Student Affairs Support',
    icon: Calendar,
    desc: 'Working alongside the Student Affairs system to maintain clear communication between students and the institution.',
    items: ['Attendance & Assessments', 'Examinations & Academic schedules', 'Student programmes & Skill development', 'Important announcements & Schedule changes'],
  },
];

const checklistItems = [
  'Full Name',
  'Batch / Programme Name',
  'Student ID / Mentor Code (if applicable)',
  'Nature of Query (Academic, Technical, Mentorship, etc.)',
  'Brief Description of the Issue',
  'Relevant Screenshot / Document (if required)',
];

export default function StudentDeskPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-transparent dark:from-slate-900/50 dark:via-slate-950 dark:to-transparent border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase mb-6">
            <Headphones className="w-3.5 h-3.5" />
            Central Student Support
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Student Desk
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-6">
            One Point of Support for Every Student.
          </p>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            The LearnDawn India Student Desk is the central support system for students, parents, and learners who need assistance with academic programmes, mentorship, counselling, admissions, examinations, learning resources, schedules, and other student-related concerns.
          </p>

          {/* 4 Pillars Badge Banner */}
          <div className="inline-grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto p-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
            {['Listen', 'Understand', 'Assist', 'Resolve'].map((word, i) => (
              <div key={word} className="flex items-center justify-center gap-2 py-2 px-3 text-sm font-bold text-slate-800 dark:text-slate-200">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                {word}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919025362645"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Desk: +91 90253 62645
            </a>
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm border border-slate-300 dark:border-slate-700 transition-all"
            >
              Send Us a Message
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Primary Goal Banner */}
      <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            The Student Desk helps students reach the appropriate LearnDawn team without confusion and ensures that their concerns are directed to the right department.
          </p>
        </div>
      </section>

      {/* What Does the Student Desk Do? */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            What Does the Student Desk Do?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            The Student Desk acts as the primary point of communication between students and LearnDawn India. Students can approach the desk for support related to:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {supportAreas.map((area, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{area}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Student Support Categories */}
      <section className="py-16 sm:py-20 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              Student Support Categories
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Every student&apos;s concern may be different. The Student Desk helps identify the nature of the request and connects the student with the appropriate person or department.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{cat.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{cat.desc}</p>
                    <ul className="space-y-2 mb-4">
                      {cat.items.map((item, i) => (
                        <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {cat.note && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs italic text-slate-500 dark:text-slate-400">
                      {cat.note}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before Contacting + Contact Channels */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Before Contacting */}
          <div className="lg:col-span-6 rounded-2xl p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-4">
              <FileCheck2 className="w-3.5 h-3.5" />
              Quick Resolution Checklist
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Before Contacting the Student Desk
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              To help us respond more efficiently, students and parents are encouraged to provide:
            </p>

            <ul className="space-y-3 mb-6">
              {checklistItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Providing complete information helps the support team understand the issue and direct it to the correct department faster.
              </p>
            </div>
          </div>

          {/* Official Contact Channels */}
          <div className="lg:col-span-6 rounded-2xl p-8 bg-gradient-to-br from-blue-900 to-indigo-950 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-2">How to Contact the Student Desk</h3>
            <p className="text-sm text-blue-200 mb-8">
              Students can contact the LearnDawn India Student Desk through the available official communication channels.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="text-xs font-medium text-blue-300 uppercase tracking-wider mb-1">
                  Toll-Free Student Desk
                </div>
                <a
                  href="tel:+919025362645"
                  className="text-2xl font-extrabold text-white hover:text-blue-300 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-blue-400" />
                  +91 90253 62645
                </a>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="text-xs font-medium text-blue-300 uppercase tracking-wider mb-2">
                  Email Support Channels
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs text-blue-200 block">General &amp; Admissions:</span>
                    <a
                      href="mailto:learndawn24@gmail.com"
                      className="text-sm font-semibold text-white hover:text-blue-300 transition-colors underline"
                    >
                      learndawn24@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-blue-200 block">Academic &amp; Resources:</span>
                    <a
                      href="mailto:entprepmakers3@gmail.com"
                      className="text-sm font-semibold text-white hover:text-blue-300 transition-colors underline"
                    >
                      entprepmakers3@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Online Availability */}
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2 text-xs font-medium text-blue-300 uppercase tracking-wider mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  Online Availability
                </div>
                <div className="text-base font-bold text-white mb-1">24/7 Online Student Support</div>
                <p className="text-xs text-blue-200 leading-relaxed">
                  Students can send their queries through the official support channels. Response time may vary depending on the nature and urgency of the request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Students Banner */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
            Our Commitment to Students
          </h3>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            The Student Desk is more than a contact number. It is a structured support channel created to make sure that students know where to go, whom to contact, and what to do next when they need assistance.
          </p>
          <p className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
            You focus on your learning. We help you find the right direction when you need support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/career-guidance/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition-all"
            >
              Book Counselling Session
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-sm transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
