import { JobListing } from '@/types';

export const CAREER_OPPORTUNITIES_INTRO = {
  headline: 'BUILD WITH LEARNDAWN',
  subheading: 'Your skills can become someone\'s direction.',
  content: 'LearnDawn is building an education ecosystem powered by people who believe that the right education, guidance and support can change a student\'s journey. We welcome passionate individuals who want to contribute beyond a conventional job role and become part of something that creates meaningful impact.',
  categories: [
    {
      title: 'Faculty & Educators',
      description: 'Teach, simplify concepts and build strong academic foundations.'
    },
    {
      title: 'Doctors & Medical Professionals',
      description: 'Share medical knowledge, career insights and professional mentorship.'
    },
    {
      title: 'Mentors',
      description: 'Guide students through preparation, consistency, accountability and academic challenges.'
    },
    {
      title: 'Counsellors',
      description: 'Help students make informed decisions about education, competitive examinations, higher studies and career pathways.'
    },
    {
      title: 'Editors',
      description: 'Develop, review and refine educational content, notes, questions, study materials and digital resources to maintain clarity and academic quality.'
    },
    {
      title: 'Academic Content Team',
      description: 'Create structured learning resources, assessments, question banks and preparation materials.'
    },
    {
      title: 'Student Support Team',
      description: 'Assist students with communication, coordination, schedules and their overall learning experience.'
    },
    {
      title: 'Creative & Media Team',
      description: 'Develop visual content, educational media, campaigns and digital communication.'
    },
    {
      title: 'Technology Team',
      description: 'Help build and improve the digital infrastructure that supports LearnDawn\'s learning ecosystem.'
    }
  ],
  whoAreWeLookingFor: {
    title: 'WHO ARE WE LOOKING FOR?',
    description: 'We look for people with knowledge, responsibility, creativity, communication skills and a genuine interest in helping students grow.\n\nWhether you are an experienced professional, educator, doctor, medical student, counsellor, editor or someone with a skill that can contribute to education — there may be a place for you at LearnDawn.'
  },
  closing: {
    headline: 'DON\'T JUST BUILD A CAREER. BUILD AN IMPACT.',
    subtext: 'Join the people working to make education more accessible, meaningful and direction-driven.',
    cta: 'Build with LearnDawn.'
  }
};

/**
 * 19 Exact Job Listings as defined in Client Reference Document (WEB 1.pdf, Pages 6-8).
 * Note: Position 10 is intentionally skipped per original source requirements.
 */
export const JOB_LISTINGS_DATA: JobListing[] = [
  // ACADEMIC & EDUCATION
  {
    id: 'job-1',
    number: 1,
    title: 'NEET Faculty — Biology',
    category: 'Academic & Education',
    description: 'Teach concepts, conduct classes, prepare questions and support academic programmes.',
    compensation: 'Fixed Salary: ₹30,000/Contract',
    status: 'Available',
    isAvailable: true
  },
  {
    id: 'job-2',
    number: 2,
    title: 'NEET Faculty — Physics',
    category: 'Academic & Education',
    description: 'Deliver conceptual and problem-solving sessions with structured exam preparation.',
    compensation: 'Fixed Salary: ₹70,000/Contract',
    status: 'Apply now',
    isAvailable: true
  },
  {
    id: 'job-3',
    number: 3,
    title: 'NEET Faculty — Chemistry',
    category: 'Academic & Education',
    description: 'Guide students through Physical, Organic and Inorganic Chemistry preparation.',
    compensation: 'Fixed Salary: ₹30,000/Contract',
    status: 'Available',
    isAvailable: true
  },
  {
    id: 'job-4',
    number: 4,
    title: 'Academic Content Developer',
    category: 'Academic & Education',
    description: 'Create lessons, study materials, question banks and academic resources.',
    compensation: 'Fixed Salary: ₹15,000/month',
    status: 'No Current Vacancies',
    isAvailable: false
  },
  {
    id: 'job-5',
    number: 5,
    title: 'Academic Editor',
    category: 'Academic & Education',
    description: 'Review, edit and maintain the quality, accuracy and presentation of educational content.',
    compensation: 'Fixed Salary: ₹15,000/month',
    status: 'No Current Vacancies',
    isAvailable: false
  },
  {
    id: 'job-6',
    number: 6,
    title: 'Question Bank Developer',
    category: 'Academic & Education',
    description: 'Develop conceptual, application-based and exam-oriented questions.',
    compensation: 'Fixed Salary: ₹25,000/month',
    status: 'No Current Vacancies',
    isAvailable: false
  },

  // MENTORSHIP & COUNSELLING
  {
    id: 'job-7',
    number: 7,
    title: 'Student Mentor',
    category: 'Mentorship & Counselling',
    description: 'Provide continuous academic guidance, follow-up, motivation and progress support.',
    compensation: 'Fixed Salary: ₹20,000/month',
    status: 'No Current Vacancies',
    isAvailable: false
  },
  {
    id: 'job-8',
    number: 8,
    title: 'Academic Counsellor',
    category: 'Mentorship & Counselling',
    description: 'Guide students regarding courses, competitive examinations, higher education and career pathways.',
    compensation: 'Fixed Salary: ₹10,000/month',
    status: 'No Current Vacancies',
    isAvailable: false
  },
  {
    id: 'job-9',
    number: 9,
    title: 'Career Counsellor',
    category: 'Mentorship & Counselling',
    description: 'Help students understand career opportunities, pathways and educational choices.',
    compensation: 'Fixed Salary: ₹10,000/month',
    status: 'No Current Vacancies',
    isAvailable: false
  },
  // Note: Position 10 is skipped per client specification.

  // MEDIA & CREATIVE
  {
    id: 'job-11',
    number: 11,
    title: 'Video Editor',
    category: 'Media & Creative',
    description: 'Create educational videos, lectures, reels, promotional content and digital media.',
    compensation: 'Fixed Salary: ₹15,000/Customizable',
    status: 'No Current Vacancies',
    isAvailable: false
  },
  {
    id: 'job-12',
    number: 12,
    title: 'Motion Graphics Designer',
    category: 'Media & Creative',
    description: 'Create animations, educational graphics and motion-based digital content.',
    compensation: 'Fixed Salary: ₹15,000/month',
    status: 'No Current Vacancies',
    isAvailable: false
  },
  {
    id: 'job-13',
    number: 13,
    title: 'Graphic Designer',
    category: 'Media & Creative',
    description: 'Design educational materials, social media creatives, posters and campaigns.',
    compensation: 'Fixed Salary: ₹10,000/month',
    status: 'No Current Vacancies',
    isAvailable: false
  },
  {
    id: 'job-14',
    number: 14,
    title: 'Social Media Content Creator',
    category: 'Media & Creative',
    description: 'Develop and coordinate educational and institutional content for digital platforms.',
    compensation: 'Fixed Salary: ₹15,000/month',
    status: 'No Current Vacancies',
    isAvailable: false
  },
  {
    id: 'job-15',
    number: 15,
    title: 'Script Writer',
    category: 'Media & Creative',
    description: 'Write educational, promotional and awareness scripts for LearnDawn media.',
    compensation: 'Fixed Salary: ₹10,000/month',
    status: 'No Current Vacancies',
    isAvailable: false
  },

  // OPERATIONS & STUDENT SUPPORT
  {
    id: 'job-16',
    number: 16,
    title: 'Student Support Executive',
    category: 'Operations & Student Support',
    description: 'Handle student enquiries, communication and day-to-day support.',
    compensation: 'Fixed Salary: ₹10,000/month',
    status: 'No Current Vacancies',
    isAvailable: false
  },
  {
    id: 'job-17',
    number: 17,
    title: 'Batch Coordinator',
    category: 'Operations & Student Support',
    description: 'Coordinate classes, schedules, faculty communication and student requirements.',
    compensation: 'Fixed Salary: ₹5,000/month',
    status: 'No Current Vacancies',
    isAvailable: false
  },
  {
    id: 'job-18',
    number: 18,
    title: 'Admissions Executive',
    category: 'Operations & Student Support',
    description: 'Assist prospective students and families throughout the admission process.',
    compensation: 'Fixed Salary: ₹7,000/month',
    status: 'No Current Vacancies',
    isAvailable: false
  },
  {
    id: 'job-19',
    number: 19,
    title: 'Operations Executive',
    category: 'Operations & Student Support',
    description: 'Support the smooth functioning of LearnDawn\'s academic and administrative operations.',
    compensation: 'Fixed Salary: ₹5,000/month',
    status: 'Apply now',
    isAvailable: true
  },
  {
    id: 'job-20',
    number: 20,
    title: 'Community Coordinator',
    category: 'Operations & Student Support',
    description: 'Build and manage student communities, programmes and engagement activities.',
    compensation: 'Fixed Salary: ₹5,000/month',
    status: 'Apply now',
    isAvailable: true
  }
];
