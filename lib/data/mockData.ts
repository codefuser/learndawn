import { 
  Exam, 
  AcademicProgram, 
  Course, 
  Subject, 
  Question, 
  Mentor, 
  LiveClass, 
  StudyMaterial 
} from '@/types';

export const EXAMS_DATA: Exam[] = [
  {
    id: 'exam-neet-ug',
    slug: 'neet-ug',
    title: 'NEET UG',
    short_code: 'NEET',
    category: 'competitive',
    tagline: 'India\'s premier entrance test for MBBS, BDS, and allied medical admissions.',
    description: 'Master Physics, Chemistry, Botany, and Zoology with structured NCERT deep-dives, simulated NTA test series, and mentorship from AIIMS rankers.',
    eligibility: '10+2 with Physics, Chemistry, Biology/Biotechnology and English with 50% minimum aggregate.',
    exam_pattern: '720 Total Marks, 200 Questions (180 to be attempted) across 4 subjects in pen-and-paper mode.',
    syllabus_summary: 'Complete NCERT Class 11 & 12 syllabus covering 97 high-weightage chapters.',
    badge_label: 'Flagship Medical',
    accent_color: '#0284C7',
    display_order: 1,
    subjects_count: 4,
    mock_tests_count: 45,
    students_enrolled: '24,800+'
  },
  {
    id: 'exam-jee-main',
    slug: 'jee-main',
    title: 'JEE Main',
    short_code: 'JEE',
    category: 'competitive',
    tagline: 'Gateway to NITs, IIITs, CFTIs and eligibility for JEE Advanced.',
    description: 'Elevate mathematical rigor and conceptual physics intuition with problem-solving architecture designed by top IITian faculty.',
    eligibility: '10+2 with Physics and Mathematics as compulsory subjects alongside Chemistry/Biotechnology.',
    exam_pattern: '300 Total Marks, Computer Based Test (CBT) with single-choice and numerical value questions.',
    syllabus_summary: 'Rigorous engineering syllabus across Mechanics, Calculus, Organic Chemistry and Coordinate Geometry.',
    badge_label: 'Top Engineering',
    accent_color: '#2563EB',
    display_order: 2,
    subjects_count: 3,
    mock_tests_count: 50,
    students_enrolled: '19,500+'
  },
  {
    id: 'exam-cuet',
    slug: 'cuet',
    title: 'CUET (UG)',
    short_code: 'CUET',
    category: 'competitive',
    tagline: 'Standardized national admission test for Central and State Universities.',
    description: 'Comprehensive domain subject preparation combined with Section 1 Language mastery and Section 3 General Aptitude modules.',
    eligibility: '10+2 or equivalent examination recognized by central/state education boards.',
    exam_pattern: 'Hybrid Computer-Based MCQ examination segmented by Domain Subjects, Languages, and General Aptitude.',
    syllabus_summary: 'Class 12 core curriculum combined with quantitative reasoning, current affairs, and vocabulary.',
    badge_label: 'University Access',
    accent_color: '#7C3AED',
    display_order: 3,
    subjects_count: 6,
    mock_tests_count: 30,
    students_enrolled: '14,200+'
  },
  {
    id: 'exam-aiims-nursing',
    slug: 'aiims-nursing',
    title: 'AIIMS Nursing Entrance',
    short_code: 'AIIMS-N',
    category: 'paramedical',
    tagline: 'Premier national entrance test for B.Sc (Hons) Nursing across all AIIMS institutes.',
    description: 'Specialized medical nursing curriculum with dedicated focus on Biology, General Knowledge, Physics, Chemistry, and Clinical aptitude.',
    eligibility: 'Female candidates passing 10+2 with Physics, Chemistry, Biology and English with min 55% marks.',
    exam_pattern: '100 Marks CBT covering Biology (30), Chemistry (30), Physics (30), and General Knowledge (10).',
    syllabus_summary: 'Targeted medical foundation tailored specifically to the AIIMS nursing standard.',
    badge_label: 'Healthcare Elite',
    accent_color: '#059669',
    display_order: 4,
    subjects_count: 4,
    mock_tests_count: 25,
    students_enrolled: '8,900+'
  },
  {
    id: 'exam-aiims-paramedical',
    slug: 'aiims-paramedical',
    title: 'AIIMS Paramedical Entrance',
    short_code: 'AIIMS-P',
    category: 'paramedical',
    tagline: 'Direct admission to Medical Technology, Radiography, OT, and Lab Sciences at AIIMS.',
    description: 'Build clinical and diagnostic technical foundations for high-demand paramedical career pathways in government healthcare systems.',
    eligibility: '10+2 with PCB/PCM with minimum 50% aggregate.',
    exam_pattern: '90 MCQs (90 minutes) across Physics, Chemistry, and Biology/Maths.',
    syllabus_summary: 'Applied medical science foundations and core Class 11-12 natural science concepts.',
    badge_label: 'Clinical Sciences',
    accent_color: '#D97706',
    display_order: 5,
    subjects_count: 4,
    mock_tests_count: 20,
    students_enrolled: '6,400+'
  }
];

export const ACADEMIC_PROGRAMS_DATA: AcademicProgram[] = [
  {
    id: 'prog-cbse-9',
    slug: 'cbse-class-9',
    title: 'CBSE Class 9',
    board: 'CBSE',
    class_level: 'Class 9',
    description: 'Foundational concept building in Science and Mathematics to build early aptitude for competitive exams.',
    badge_label: 'Foundation',
    display_order: 1
  },
  {
    id: 'prog-cbse-10',
    slug: 'cbse-class-10',
    title: 'CBSE Class 10 Board Accelerator',
    board: 'CBSE',
    class_level: 'Class 10',
    description: 'Targeted Board exam preparation with chapter-wise exemplar question breakdowns, mock papers, and doubt clinics.',
    badge_label: 'Board Excellence',
    display_order: 2
  },
  {
    id: 'prog-cbse-11',
    slug: 'cbse-class-11',
    title: 'CBSE Class 11 Science Stream',
    board: 'CBSE',
    class_level: 'Class 11',
    description: 'Bridging high-school basics with rigorous senior secondary Physics, Chemistry, Math, and Biology.',
    badge_label: 'Bridge & Core',
    display_order: 3
  },
  {
    id: 'prog-cbse-12',
    slug: 'cbse-class-12',
    title: 'CBSE Class 12 Science Stream',
    board: 'CBSE',
    class_level: 'Class 12',
    description: 'Dual-target strategy: 95%+ Board exam mastery coupled with NEET/JEE entrance baseline synchronization.',
    badge_label: 'Dual Target',
    display_order: 4
  },
  {
    id: 'prog-state-11',
    slug: 'state-board-class-11',
    title: 'State Board Class 11',
    board: 'State Board',
    class_level: 'Class 11',
    description: 'Bilingual delivery aligning State Board textbooks with national competitive entrance standards.',
    badge_label: 'State Core',
    display_order: 5
  },
  {
    id: 'prog-state-12',
    slug: 'state-board-class-12',
    title: 'State Board Class 12',
    board: 'State Board',
    class_level: 'Class 12',
    description: 'Extensive textbook derivation mastery, blue-print question models, and previous decade paper drills.',
    badge_label: 'State Finals',
    display_order: 6
  }
];

export const SUBJECTS_DATA: Subject[] = [
  {
    id: 'subj-physics',
    slug: 'physics',
    name: 'Physics',
    icon_name: 'Atom',
    accent_color: '#2563EB',
    description: 'Mechanics, Electrodynamics, Optics, Thermodynamics, and Modern Physics.',
    display_order: 1,
    chapters_count: 28
  },
  {
    id: 'subj-chemistry',
    slug: 'chemistry',
    name: 'Chemistry',
    icon_name: 'FlaskConical',
    accent_color: '#059669',
    description: 'Physical Chemistry, Inorganic Coordination, and Organic Reaction Mechanisms.',
    display_order: 2,
    chapters_count: 30
  },
  {
    id: 'subj-biology',
    slug: 'biology',
    name: 'Biology (Botany & Zoology)',
    icon_name: 'Dna',
    accent_color: '#0284C7',
    description: 'Human Physiology, Genetics, Cell Biology, Ecology, and Plant Morphology.',
    display_order: 3,
    chapters_count: 38
  },
  {
    id: 'subj-mathematics',
    slug: 'mathematics',
    name: 'Mathematics',
    icon_name: 'Calculator',
    accent_color: '#7C3AED',
    description: 'Calculus, Vectors & 3D, Algebra, Trigonometry, and Probability.',
    display_order: 4,
    chapters_count: 26
  },
  {
    id: 'subj-aptitude',
    slug: 'general-aptitude',
    name: 'General & Nursing Aptitude',
    icon_name: 'Compass',
    accent_color: '#EA580C',
    description: 'Logical reasoning, quantitative aptitude, medical ethics, and general awareness.',
    display_order: 5,
    chapters_count: 14
  }
];

export const COURSES_DATA: Course[] = [
  {
    id: 'course-neet-conqueror',
    slug: 'neet-conqueror-2025',
    exam_id: 'exam-neet-ug',
    title: 'NEET Conqueror 360° Comprehensive Batch',
    subtitle: 'Complete 2-year integrated syllabus mastery with daily live interactive sessions.',
    description: 'An all-inclusive program covering Botany, Zoology, Physics, and Chemistry. Includes 600+ hours of live classes, NCERT line-by-line annotations, 40 full-length simulated mock tests, and 1:1 mentorship from AIIMS doctors.',
    instructor_name: 'Dr. Aarav Sharma & Team',
    instructor_bio: 'AIIMS New Delhi Gold Medalist and seasoned medical educator with 12+ years mentoring top 100 AIR rankers.',
    thumbnail_url: '/images/courses/neet-course.jpg',
    duration_hours: 480,
    total_lectures: 320,
    language: 'English & Hinglish',
    difficulty_level: 'Comprehensive',
    price: 4999,
    original_price: 12999,
    is_featured: true,
    is_published: true,
    display_order: 1,
    rating: 4.95,
    review_count: 1840,
    sections: [
      {
        id: 'sec-1',
        course_id: 'course-neet-conqueror',
        title: 'Cell Biology & Genetics Mastery',
        section_order: 1,
        lessons: [
          {
            id: 'les-1',
            section_id: 'sec-1',
            title: 'Cell: The Unit of Life - NCERT High-Yield Focus',
            lesson_order: 1,
            duration_seconds: 3240,
            video_provider: 'custom_stream',
            notes_content: 'Key organelles, endomembrane system, and organelle autonomy summary notes.',
            is_preview_allowed: true,
            is_completed: true
          },
          {
            id: 'les-2',
            section_id: 'sec-1',
            title: 'Cell Cycle & Cell Division (Mitosis & Meiosis)',
            lesson_order: 2,
            duration_seconds: 2880,
            video_provider: 'custom_stream',
            notes_content: 'Phases of meiosis I, crossing over mechanics, and checkpoint regulation.',
            is_preview_allowed: false,
            is_completed: false
          }
        ]
      },
      {
        id: 'sec-2',
        course_id: 'course-neet-conqueror',
        title: 'Human Physiology Deep Dive',
        section_order: 2,
        lessons: [
          {
            id: 'les-3',
            section_id: 'sec-2',
            title: 'Neural Control & Synaptic Transmission',
            lesson_order: 1,
            duration_seconds: 3600,
            video_provider: 'custom_stream',
            notes_content: 'Action potential generation, saltatory conduction, and neurotransmitter pathways.',
            is_preview_allowed: false,
            is_completed: false
          }
        ]
      }
    ]
  },
  {
    id: 'course-jee-pinnacle',
    slug: 'jee-pinnacle-rankers',
    exam_id: 'exam-jee-main',
    title: 'JEE Main Pinnacle: Concept to Advanced Problem Solving',
    subtitle: 'Engineered for aspirants aiming for 99+ percentile in JEE Main.',
    description: 'Deep problem-solving sessions focusing on high-frequency questions, shortcut calculus techniques, coordinate geometry visualizations, and physical chemistry numerical speed tricks.',
    instructor_name: 'Prof. Rajesh K. Varma',
    instructor_bio: 'IIT Bombay (B.Tech Mechanical), 14 years teaching JEE physics with 80+ selections in top 500 AIR.',
    thumbnail_url: '/images/courses/jee-course.jpg',
    duration_hours: 520,
    total_lectures: 350,
    language: 'English',
    difficulty_level: 'Advanced',
    price: 5499,
    original_price: 14999,
    is_featured: true,
    is_published: true,
    display_order: 2,
    rating: 4.92,
    review_count: 1420
  },
  {
    id: 'course-aiims-nursing-accelerator',
    slug: 'aiims-nursing-accelerator',
    exam_id: 'exam-aiims-nursing',
    title: 'AIIMS B.Sc Nursing Special Focus Batch',
    subtitle: 'The definitive blueprint for clearing AIIMS B.Sc Nursing entrance examination.',
    description: 'Designed exclusively for female nursing aspirants. Features complete Biology, Chemistry, Physics plus high-scoring General Knowledge and Nursing Aptitude modules.',
    instructor_name: 'Sister Priya Menon & Medical Faculty',
    instructor_bio: 'Senior Nursing Officer at AIIMS & Clinical Nurse Educator.',
    thumbnail_url: '/images/courses/nursing-course.jpg',
    duration_hours: 240,
    total_lectures: 160,
    language: 'English & Hinglish',
    difficulty_level: 'Foundation',
    price: 2999,
    original_price: 7999,
    is_featured: true,
    is_published: true,
    display_order: 3,
    rating: 4.97,
    review_count: 980
  },
  {
    id: 'course-cuet-mastery',
    slug: 'cuet-ug-target-delhi-university',
    exam_id: 'exam-cuet',
    title: 'CUET General Test + Domain Science Accelerator',
    subtitle: 'Target top Central Universities: DU, BHU, JNU with structured CUET strategy.',
    description: 'Section 1 English language proficiency, Section 2 domain science papers, and Section 3 General test with daily timed sectional speed tests.',
    instructor_name: 'Ananya Sen & Faculty Team',
    instructor_bio: 'DU Alumnus, expert in CUET question framing and cognitive test analysis.',
    thumbnail_url: '/images/courses/cuet-course.jpg',
    duration_hours: 220,
    total_lectures: 140,
    language: 'English & Hinglish',
    difficulty_level: 'Comprehensive',
    price: 2499,
    original_price: 6999,
    is_featured: false,
    is_published: true,
    display_order: 4,
    rating: 4.88,
    review_count: 670
  }
];

export const QUESTIONS_DATA: Question[] = [
  {
    id: 'q-1',
    subject_id: 'subj-biology',
    exam_id: 'exam-neet-ug',
    question_text: 'Which of the following stages of meiosis involves the enzyme recombinase and is characterized by the appearance of recombination nodules?',
    difficulty: 'medium',
    explanation: 'Crossing over takes place during the Pachytene stage of Prophase I. This process is enzyme-mediated, and the enzyme involved is recombinase. Recombination nodules appear at this stage.',
    year_asked: 2023,
    is_pyq: true,
    options: [
      { id: 'opt-1-a', question_id: 'q-1', option_key: 'A', option_text: 'Leptotene', is_correct: false },
      { id: 'opt-1-b', question_id: 'q-1', option_key: 'B', option_text: 'Zygotene', is_correct: false },
      { id: 'opt-1-c', question_id: 'q-1', option_key: 'C', option_text: 'Pachytene', is_correct: true },
      { id: 'opt-1-d', question_id: 'q-1', option_key: 'D', option_text: 'Diplotene', is_correct: false }
    ]
  },
  {
    id: 'q-2',
    subject_id: 'subj-physics',
    exam_id: 'exam-jee-main',
    question_text: 'A particle executes simple harmonic motion with an amplitude of 4 cm. At what displacement from the mean position is its kinetic energy equal to three times its potential energy?',
    difficulty: 'medium',
    explanation: 'Kinetic Energy KE = (1/2)mω²(A² - x²) and Potential Energy PE = (1/2)mω²x². Given KE = 3*PE => A² - x² = 3x² => 4x² = A² => x = ±A/2. With A = 4 cm, x = ±2 cm.',
    year_asked: 2024,
    is_pyq: true,
    options: [
      { id: 'opt-2-a', question_id: 'q-2', option_key: 'A', option_text: '± 2 cm', is_correct: true },
      { id: 'opt-2-b', question_id: 'q-2', option_key: 'B', option_text: '± 1 cm', is_correct: false },
      { id: 'opt-2-c', question_id: 'q-2', option_key: 'C', option_text: '± 2√2 cm', is_correct: false },
      { id: 'opt-2-d', question_id: 'q-2', option_key: 'D', option_text: '± √3 cm', is_correct: false }
    ]
  },
  {
    id: 'q-3',
    subject_id: 'subj-chemistry',
    exam_id: 'exam-neet-ug',
    question_text: 'Which among the following coordination compounds exhibits optical isomerism?',
    difficulty: 'hard',
    explanation: '[Co(en)3]3+ has octahedral geometry with three bidentate ethylenediamine ligands, lacking any plane or center of symmetry, thus forming non-superimposable d and l enantiomers.',
    year_asked: 2022,
    is_pyq: true,
    options: [
      { id: 'opt-3-a', question_id: 'q-3', option_key: 'A', option_text: '[Co(en)3]3+', is_correct: true },
      { id: 'opt-3-b', question_id: 'q-3', option_key: 'B', option_text: 'trans-[Co(en)2Cl2]+', is_correct: false },
      { id: 'opt-3-c', question_id: 'q-3', option_key: 'C', option_text: '[Pt(NH3)2Cl2]', is_correct: false },
      { id: 'opt-3-d', question_id: 'q-3', option_key: 'D', option_text: '[Zn(NH3)4]2+', is_correct: false }
    ]
  },
  {
    id: 'q-4',
    subject_id: 'subj-aptitude',
    exam_id: 'exam-aiims-nursing',
    question_text: 'Normal human resting body temperature in degrees Celsius is approximately:',
    difficulty: 'easy',
    explanation: 'Normal resting human body temperature is approximately 37.0°C (98.6°F), with typical physiological variations between 36.5°C and 37.5°C.',
    year_asked: 2023,
    is_pyq: true,
    options: [
      { id: 'opt-4-a', question_id: 'q-4', option_key: 'A', option_text: '35.5°C', is_correct: false },
      { id: 'opt-4-b', question_id: 'q-4', option_key: 'B', option_text: '37.0°C', is_correct: true },
      { id: 'opt-4-c', question_id: 'q-4', option_key: 'C', option_text: '38.5°C', is_correct: false },
      { id: 'opt-4-d', question_id: 'q-4', option_key: 'D', option_text: '39.2°C', is_correct: false }
    ]
  }
];

export const MENTORS_DATA: Mentor[] = [
  {
    id: 'mentor-1',
    name: 'Dr. Siddharth Rao',
    headline: 'AIIMS New Delhi (AIR 42), Senior Academic Mentor',
    expertise_tags: ['NEET UG', 'Medical Strategy', 'Biology NCERT', 'Mental Resilience'],
    rating: 4.98,
    total_sessions: 640,
    avatar_url: '/images/mentors/mentor-1.jpg',
    bio: 'Guided over 2,000+ medical aspirants through structured revision cycles, active recall systems, and clinical reasoning techniques.',
    is_available: true,
    available_slots: ['Tomorrow, 4:00 PM', 'Tomorrow, 6:30 PM', 'Saturday, 11:00 AM']
  },
  {
    id: 'mentor-2',
    name: 'Er. Rituja Deshmukh',
    headline: 'IIT Bombay Alumna, Ex-EdTech Lead for Advanced Math',
    expertise_tags: ['JEE Main', 'JEE Advanced', 'Calculus Strategy', 'Time Management'],
    rating: 4.94,
    total_sessions: 520,
    avatar_url: '/images/mentors/mentor-2.jpg',
    bio: 'Specialist in transforming test anxiety into exam tempo. Architect of the 3-phase speed solving model for competitive tests.',
    is_available: true,
    available_slots: ['Today, 8:00 PM', 'Friday, 5:00 PM', 'Sunday, 10:00 AM']
  },
  {
    id: 'mentor-3',
    name: 'Sister Kavitha Nair',
    headline: 'Senior Nursing Officer at AIIMS, B.Sc (Hons) Topper',
    expertise_tags: ['AIIMS Nursing', 'Paramedical', 'Clinical Aptitude', 'Career Guidance'],
    rating: 4.96,
    total_sessions: 430,
    avatar_url: '/images/mentors/mentor-3.jpg',
    bio: 'Empowering future healthcare leaders with tactical guidance on AIIMS entrance patterns, eligibility documents, and interview protocols.',
    is_available: true,
    available_slots: ['Tomorrow, 3:00 PM', 'Saturday, 4:00 PM']
  }
];

export const LIVE_CLASSES_DATA: LiveClass[] = [
  {
    id: 'live-1',
    title: 'High-Yield Organic Reaction Mechanisms for NEET 2025',
    educator_name: 'Dr. Aarav Sharma',
    scheduled_start: '2026-10-04T18:00:00+05:30',
    scheduled_end: '2026-10-04T19:30:00+05:30',
    status: 'live',
    stream_room_id: 'room-neet-org-live-99',
    subject_name: 'Chemistry',
    provider: 'liveclass_secure_room'
  },
  {
    id: 'live-2',
    title: 'Rotational Dynamics Problem-Solving Clinic',
    educator_name: 'Prof. Rajesh K. Varma',
    scheduled_start: '2026-10-04T20:00:00+05:30',
    scheduled_end: '2026-10-04T21:30:00+05:30',
    status: 'upcoming',
    stream_room_id: 'room-jee-phys-rot-102',
    subject_name: 'Physics',
    provider: 'liveclass_secure_room'
  },
  {
    id: 'live-3',
    title: 'AIIMS Nursing 2025: General Knowledge & High-Yield Biology Booster',
    educator_name: 'Sister Priya Menon',
    scheduled_start: '2026-10-05T17:00:00+05:30',
    scheduled_end: '2026-10-05T18:30:00+05:30',
    status: 'upcoming',
    stream_room_id: 'room-aiims-boost-303',
    subject_name: 'General & Nursing Aptitude',
    provider: 'liveclass_secure_room'
  }
];

export const STUDY_MATERIALS_DATA: StudyMaterial[] = [
  {
    id: 'mat-1',
    title: 'Complete Human Physiology 1-Page Mind Maps',
    slug: 'human-physiology-mind-maps',
    exam_slug: 'neet-ug',
    subject_name: 'Biology',
    material_type: 'mind_map',
    file_size: '8.4 MB',
    page_count: 24,
    is_gated: true,
    download_count: 14200
  },
  {
    id: 'mat-2',
    title: 'JEE Main Physics Formula & Derivation Handbook',
    slug: 'jee-physics-formula-handbook',
    exam_slug: 'jee-main',
    subject_name: 'Physics',
    material_type: 'formula_sheet',
    file_size: '12.1 MB',
    page_count: 48,
    is_gated: true,
    download_count: 11800
  },
  {
    id: 'mat-3',
    title: 'AIIMS Nursing Previous 10 Years Solved Papers',
    slug: 'aiims-nursing-pyq-solved',
    exam_slug: 'aiims-nursing',
    subject_name: 'General Aptitude',
    material_type: 'pyq',
    file_size: '15.6 MB',
    page_count: 96,
    is_gated: true,
    download_count: 7300
  },
  {
    id: 'mat-4',
    title: 'Organic Chemistry Named Reactions Quick Flashcards',
    slug: 'organic-named-reactions-flashcards',
    exam_slug: 'neet-ug',
    subject_name: 'Chemistry',
    material_type: 'revision_notes',
    file_size: '6.2 MB',
    page_count: 32,
    is_gated: false,
    download_count: 19500
  }
];
