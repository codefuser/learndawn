'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { CareersService } from '@/services/careers';
import { JOB_LISTINGS_DATA } from '@/lib/data/careersData';
import { JobApplicationFormValues } from '@/types';
import { 
  Briefcase, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  UploadCloud, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Link as LinkIcon
} from 'lucide-react';

function JobApplicationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const jobParam = searchParams.get('job') || '';

  const availableJobs = JOB_LISTINGS_DATA.filter(j => j.isAvailable);

  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<JobApplicationFormValues>({
    fullName: '',
    email: '',
    mobile: '',
    location: '',
    age: '',
    positionAppliedFor: jobParam || availableJobs[0]?.title || 'NEET Faculty — Biology',
    preferredWorkMode: 'Online / Remote',
    availability: 'Full-time',
    highestQualification: '',
    currentStatus: 'Graduate',
    relevantExperience: '',
    keySkills: '',
    portfolioUrl: '',
    linkedInUrl: '',
    whyJoin: '',
    whyConsider: '',
    additionalInfo: '',
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Sync position if query parameter changes
  useEffect(() => {
    if (jobParam) {
      setFormData(prev => ({ ...prev, positionAppliedFor: jobParam }));
    }
  }, [jobParam]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const validExtensions = ['.pdf', '.doc', '.docx'];
    const fileName = file.name.toLowerCase();
    const isValid = validExtensions.some(ext => fileName.endsWith(ext));

    if (!isValid) {
      setErrorMessage('Please upload a valid CV document in PDF, DOC, or DOCX format.');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage('Resume file size exceeds the 10MB limit.');
      return;
    }

    setErrorMessage('');
    setResumeFile(file);
    setFormData(prev => ({ ...prev, resumeFileName: file.name }));
  };

  const removeFile = () => {
    setResumeFile(null);
    setFormData(prev => ({ ...prev, resumeFileName: undefined, resumeUrl: undefined }));
  };

  const validateStep1 = () => {
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.mobile.trim() || !formData.location.trim()) {
      setErrorMessage('Please fill in all mandatory personal details (Name, Email, Mobile, Location).');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please provide a valid email address.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const validateStep2 = () => {
    if (!formData.highestQualification.trim() || !formData.keySkills.trim()) {
      setErrorMessage('Please provide your Highest Qualification and Key Skills.');
      return false;
    }
    if (!resumeFile && !formData.resumeFileName) {
      setErrorMessage('Please upload your latest Resume / CV document.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    } else if (step === 2 && validateStep2()) {
      setStep(3);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setErrorMessage('');
    setStep(prev => Math.max(1, prev - 1));
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.whyJoin.trim() || !formData.whyConsider.trim()) {
      setErrorMessage('Please complete both questions regarding your interest in LearnDawn.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const res = await CareersService.submitApplication({
        ...formData,
        resumeFileName: resumeFile?.name || formData.resumeFileName,
      });

      if (res.success) {
        setSubmitted(true);
        setSuccessMessage(res.message);
      } else {
        setErrorMessage(res.message);
      }
    } catch {
      setErrorMessage('Failed to submit application. Please check your network connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#07070a] text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      <main className="flex-1 py-20 sm:py-28">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Header Card with Prominent Brand Logo */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 shadow-xl text-center space-y-6">
            <div className="flex justify-center">
              <BrandLogo size="lg" />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Job Application Portal</span>
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Join the LearnDawn Team
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 max-w-xl mx-auto">
                Applying for: <span className="font-bold text-red-600 dark:text-red-400">{formData.positionAppliedFor}</span>
              </p>
            </div>

            {/* Multi-Step Progress Indicator */}
            {!submitted && (
              <div className="flex items-center justify-center gap-2 sm:gap-4 pt-2">
                {[
                  { num: 1, label: 'Personal & Role' },
                  { num: 2, label: 'Education & CV' },
                  { num: 3, label: 'Statement & Review' },
                ].map((s) => (
                  <div key={s.num} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        step === s.num
                          ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                          : step > s.num
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-100 dark:bg-zinc-800 text-slate-400'
                      }`}
                    >
                      {step > s.num ? '✓' : s.num}
                    </div>
                    <span className="hidden sm:inline text-xs font-medium text-slate-600 dark:text-zinc-400">
                      {s.label}
                    </span>
                    {s.num < 3 && <div className="w-6 sm:w-12 h-0.5 bg-slate-200 dark:bg-zinc-800" />}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form Container */}
          <div className="mt-8 p-6 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Application Submitted Successfully
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {successMessage}
                  </p>
                </div>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/careers"
                    className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 font-semibold text-xs transition"
                  >
                    Back to All Job Openings
                  </Link>
                  <Link
                    href="/"
                    className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs transition shadow-md shadow-red-600/20"
                  >
                    Return Home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* ========================================================= */}
                {/* STEP 1: Personal Details & Position Details               */}
                {/* ========================================================= */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 dark:border-zinc-800 pb-3">
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <User className="w-4 h-4 text-red-500" />
                        <span>A. Personal Details</span>
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs sm:text-sm">
                      <div className="space-y-1.5">
                        <label className="font-semibold text-slate-700 dark:text-zinc-300">
                          1. Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-semibold text-slate-700 dark:text-zinc-300">
                          2. Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter an active email address"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-semibold text-slate-700 dark:text-zinc-300">
                          3. Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="mobile"
                          required
                          value={formData.mobile}
                          onChange={handleInputChange}
                          placeholder="Enter active WhatsApp / contact number"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-semibold text-slate-700 dark:text-zinc-300">
                          4. Location <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="City / District / State"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        />
                      </div>

                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="font-semibold text-slate-700 dark:text-zinc-300">
                          5. Age <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          placeholder="Enter your age"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        />
                      </div>
                    </div>

                    <div className="border-b border-slate-200 dark:border-zinc-800 pb-3 pt-4">
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-red-500" />
                        <span>B. Position Details</span>
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs sm:text-sm">
                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="font-semibold text-slate-700 dark:text-zinc-300">
                          6. Position Applied For <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="positionAppliedFor"
                          value={formData.positionAppliedFor}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        >
                          {availableJobs.map((j) => (
                            <option key={j.id} value={j.title}>
                              {j.title} ({j.compensation})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-semibold text-slate-700 dark:text-zinc-300">
                          7. Preferred Work Mode <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="preferredWorkMode"
                          value={formData.preferredWorkMode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        >
                          <option value="Online / Remote">Online / Remote</option>
                          <option value="Hybrid">Hybrid</option>
                          <option value="On-site">On-site</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-semibold text-slate-700 dark:text-zinc-300">
                          8. Availability <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="availability"
                          value={formData.availability}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        >
                          <option value="Full-time">Full-time</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Contract">Contract</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-md shadow-red-600/20 active:scale-95 cursor-pointer"
                      >
                        <span>Continue to Step 2</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* ========================================================= */}
                {/* STEP 2: Education, Experience & Documents                 */}
                {/* ========================================================= */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 dark:border-zinc-800 pb-3">
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <FileText className="w-4 h-4 text-red-500" />
                        <span>C. Education & Experience</span>
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs sm:text-sm">
                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="font-semibold text-slate-700 dark:text-zinc-300">
                          9. Highest Educational Qualification <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="highestQualification"
                          required
                          value={formData.highestQualification}
                          onChange={handleInputChange}
                          placeholder="Degree / Course / Institution / Year"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-semibold text-slate-700 dark:text-zinc-300">
                          10. Current Professional Status <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="currentStatus"
                          value={formData.currentStatus}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        >
                          <option value="Student">Student</option>
                          <option value="Graduate">Graduate</option>
                          <option value="Working Professional">Working Professional</option>
                          <option value="Freelancer">Freelancer</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="font-semibold text-slate-700 dark:text-zinc-300">
                          11. Relevant Experience <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <textarea
                          name="relevantExperience"
                          rows={2}
                          value={formData.relevantExperience}
                          onChange={handleInputChange}
                          placeholder="Briefly describe your experience related to the position"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition resize-none"
                        />
                      </div>

                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="font-semibold text-slate-700 dark:text-zinc-300">
                          12. Key Skills <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="keySkills"
                          required
                          value={formData.keySkills}
                          onChange={handleInputChange}
                          placeholder="List your most relevant skills (e.g., Biology NCERT, Video Editing, Student Counselling)"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        />
                      </div>
                    </div>

                    <div className="border-b border-slate-200 dark:border-zinc-800 pb-3 pt-4">
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <UploadCloud className="w-4 h-4 text-red-500" />
                        <span>D. Portfolio & Documents</span>
                      </h2>
                    </div>

                    <div className="space-y-5 text-xs sm:text-sm">
                      <div className="space-y-2">
                        <label className="font-semibold text-slate-700 dark:text-zinc-300">
                          13. Resume / CV <span className="text-red-500">*</span>
                        </label>

                        {resumeFile || formData.resumeFileName ? (
                          <div className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60">
                            <div className="flex items-center gap-2.5 truncate">
                              <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span className="font-semibold text-xs text-emerald-800 dark:text-emerald-300 truncate">
                                {resumeFile?.name || formData.resumeFileName}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={removeFile}
                              className="p-1 hover:bg-emerald-200/50 dark:hover:bg-emerald-900 rounded-lg text-emerald-700 dark:text-emerald-400 cursor-pointer"
                              title="Remove file"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <label className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-slate-300 dark:border-zinc-700 hover:border-red-500 dark:hover:border-red-500 bg-slate-50 dark:bg-zinc-950/60 cursor-pointer transition group">
                            <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-red-500 transition" />
                            <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300 mt-2">
                              Upload your latest CV or resume
                            </span>
                            <span className="text-[11px] text-slate-400 mt-0.5">
                              Supported formats: PDF, DOC, DOCX (Max 10MB)
                            </span>
                            <input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </label>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="font-semibold text-slate-700 dark:text-zinc-300 flex items-center gap-1.5">
                            <LinkIcon className="w-3.5 h-3.5 text-slate-400" />
                            <span>14. Portfolio / Work Samples</span>
                          </label>
                          <input
                            type="url"
                            name="portfolioUrl"
                            value={formData.portfolioUrl}
                            onChange={handleInputChange}
                            placeholder="Optional — Drive link, website or samples"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-semibold text-slate-700 dark:text-zinc-300 flex items-center gap-1.5">
                            <LinkIcon className="w-3.5 h-3.5 text-slate-400" />
                            <span>15. LinkedIn / Professional Profile</span>
                          </label>
                          <input
                            type="url"
                            name="linkedInUrl"
                            value={formData.linkedInUrl}
                            onChange={handleInputChange}
                            placeholder="Optional — LinkedIn profile URL"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 font-semibold text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-800 transition"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-md shadow-red-600/20 active:scale-95 cursor-pointer"
                      >
                        <span>Continue to Step 3</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* ========================================================= */}
                {/* STEP 3: Interest in LearnDawn & Final Submission          */}
                {/* ========================================================= */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 dark:border-zinc-800 pb-3">
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-red-500" />
                        <span>E. Your Interest In LearnDawn</span>
                      </h2>
                    </div>

                    <div className="space-y-5 text-xs sm:text-sm">
                      <div className="space-y-1.5">
                        <label className="font-semibold text-slate-700 dark:text-zinc-300">
                          16. Why do you want to join LearnDawn? <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="whyJoin"
                          required
                          rows={3}
                          value={formData.whyJoin}
                          onChange={handleInputChange}
                          placeholder="Briefly tell us why you are interested in this role and mission"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-semibold text-slate-700 dark:text-zinc-300">
                          17. Why should we consider you for this position? <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="whyConsider"
                          required
                          rows={3}
                          value={formData.whyConsider}
                          onChange={handleInputChange}
                          placeholder="Tell us about the strengths or experience you can bring to LearnDawn"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-semibold text-slate-700 dark:text-zinc-300">
                          18. Additional Information <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <textarea
                          name="additionalInfo"
                          rows={2}
                          value={formData.additionalInfo}
                          onChange={handleInputChange}
                          placeholder="Anything else you would like our team to know"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        />
                      </div>
                    </div>

                    {/* Summary Card */}
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-xs space-y-1.5">
                      <p className="font-bold text-slate-800 dark:text-zinc-200">Application Summary:</p>
                      <p className="text-slate-600 dark:text-zinc-400">
                        Applicant: <span className="font-medium text-slate-900 dark:text-white">{formData.fullName}</span> ({formData.email}, {formData.mobile})
                      </p>
                      <p className="text-slate-600 dark:text-zinc-400">
                        Role: <span className="font-medium text-red-600 dark:text-red-400">{formData.positionAppliedFor}</span> • Mode: {formData.preferredWorkMode} ({formData.availability})
                      </p>
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={handleBack}
                        disabled={loading}
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 font-semibold text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-800 transition"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-2 px-8 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-red-600/30 active:scale-95 cursor-pointer disabled:opacity-50"
                      >
                        {loading ? (
                          <span>Submitting Application...</span>
                        ) : (
                          <>
                            <span>Submit Application</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function JobApplicationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading application form...</div>}>
      <JobApplicationContent />
    </Suspense>
  );
}
