
import { Course } from '@/components/CourseCard';
import { College } from '@/components/CollegeCard';
import { Job } from '@/components/JobCard';

// Science Courses
export const scienceCourses: Course[] = [
  {
    id: 'engineering',
    name: 'Engineering',
    stream: 'science',
    description: 'Engineering focuses on applying scientific and mathematical principles to design and build machines, structures, and systems. It covers various specializations including mechanical, electrical, civil, and computer engineering.',
    duration: '4 years',
    eligibility: '10+2 with Physics, Chemistry, and Mathematics',
    careers: ['Software Engineer', 'Civil Engineer', 'Mechanical Engineer', 'Electrical Engineer'],
    iconText: 'EN',
  },
  {
    id: 'medical',
    name: 'Medical Sciences',
    stream: 'science',
    description: 'Medical sciences involve the study of maintaining health and preventing diseases. It includes fields like medicine, dentistry, nursing, and allied health disciplines that focus on patient care.',
    duration: '5.5 years (MBBS)',
    eligibility: '10+2 with Physics, Chemistry, and Biology',
    careers: ['Doctor', 'Surgeon', 'Dentist', 'Pharmacist'],
    iconText: 'MD',
  },
  {
    id: 'bsc-physics',
    name: 'B.Sc. Physics',
    stream: 'science',
    description: 'Bachelor of Science in Physics focuses on the study of matter, energy, and their interactions. The program covers classical mechanics, quantum physics, thermodynamics, and electromagnetism.',
    duration: '3 years',
    eligibility: '10+2 with Physics and Mathematics',
    careers: ['Research Scientist', 'Lab Technician', 'Physicist', 'Academic Researcher'],
    iconText: 'PH',
  },
  {
    id: 'bsc-chemistry',
    name: 'B.Sc. Chemistry',
    stream: 'science',
    description: 'Bachelor of Science in Chemistry explores the composition, structure, properties, and changes of matter. The curriculum includes organic, inorganic, physical, and analytical chemistry.',
    duration: '3 years',
    eligibility: '10+2 with Chemistry',
    careers: ['Chemist', 'Quality Control Analyst', 'Research Scientist', 'Chemical Engineer'],
    iconText: 'CH',
  },
  {
    id: 'biotech',
    name: 'Biotechnology',
    stream: 'science',
    description: 'Biotechnology combines biology with technology to develop products and processes for improving human life. It covers genetic engineering, bioprocessing, bioinformatics, and molecular biology.',
    duration: '4 years',
    eligibility: '10+2 with Biology',
    careers: ['Biotechnologist', 'Genetic Engineer', 'Biomedical Researcher', 'Pharmaceutical Scientist'],
    iconText: 'BT',
  },
];

// Commerce Courses
export const commerceCourses: Course[] = [
  {
    id: 'bcom',
    name: 'B.Com',
    stream: 'commerce',
    description: 'Bachelor of Commerce provides a strong foundation in business, accounting, economics, and finance. Students learn about financial accounting, business law, taxation, and corporate governance.',
    duration: '3 years',
    eligibility: '10+2 in any stream (Commerce preferred)',
    careers: ['Accountant', 'Financial Analyst', 'Banking Professional', 'Tax Consultant'],
    iconText: 'BC',
  },
  {
    id: 'bba',
    name: 'BBA',
    stream: 'commerce',
    description: 'Bachelor of Business Administration focuses on management principles and business operations. The curriculum includes marketing, human resources, finance, and organizational behavior.',
    duration: '3 years',
    eligibility: '10+2 in any stream',
    careers: ['Management Trainee', 'Entrepreneur', 'Business Analyst', 'Marketing Manager'],
    iconText: 'BA',
  },
  {
    id: 'ca',
    name: 'Chartered Accountancy',
    stream: 'commerce',
    description: 'Chartered Accountancy is a professional designation for financial experts specializing in accounting, auditing, taxation, and financial management. CA training is rigorous and highly respected.',
    duration: '4-5 years',
    eligibility: '10+2 with Commerce',
    careers: ['Chartered Accountant', 'Financial Controller', 'Auditor', 'Tax Consultant'],
    iconText: 'CA',
  },
  {
    id: 'economics',
    name: 'Economics',
    stream: 'commerce',
    description: 'Economics studies how societies allocate scarce resources. The program covers microeconomics, macroeconomics, econometrics, international trade, and public policy.',
    duration: '3 years',
    eligibility: '10+2 in any stream (Commerce/Math preferred)',
    careers: ['Economist', 'Market Research Analyst', 'Economic Consultant', 'Policy Analyst'],
    iconText: 'EC',
  },
  {
    id: 'finance',
    name: 'Finance',
    stream: 'commerce',
    description: 'Finance education focuses on managing money, banking, investments, assets, and liabilities. Students learn about financial markets, investment strategies, risk management, and financial planning.',
    duration: '3 years',
    eligibility: '10+2 with Commerce/Math',
    careers: ['Financial Planner', 'Investment Banker', 'Portfolio Manager', 'Risk Analyst'],
    iconText: 'FN',
  },
];

// Arts Courses
export const artsCourses: Course[] = [
  {
    id: 'ba-english',
    name: 'B.A. English Literature',
    stream: 'arts',
    description: 'Bachelor of Arts in English Literature explores literary works across periods, genres, and cultures. Students analyze texts, develop critical thinking, and enhance communication skills.',
    duration: '3 years',
    eligibility: '10+2 in any stream',
    careers: ['Content Writer', 'Editor', 'Teacher', 'Public Relations Specialist'],
    iconText: 'EN',
  },
  {
    id: 'psychology',
    name: 'Psychology',
    stream: 'arts',
    description: 'Psychology studies human behavior and mental processes. The program covers cognitive, social, developmental, and abnormal psychology, research methods, and psychological assessment.',
    duration: '3 years',
    eligibility: '10+2 in any stream',
    careers: ['Counselor', 'Human Resources Specialist', 'Research Assistant', 'Rehabilitation Specialist'],
    iconText: 'PS',
  },
  {
    id: 'sociology',
    name: 'Sociology',
    stream: 'arts',
    description: 'Sociology examines human society, social relationships, institutions, and cultures. Students study social theories, research methods, social problems, and social change.',
    duration: '3 years',
    eligibility: '10+2 in any stream',
    careers: ['Social Worker', 'Community Development Officer', 'Market Research Analyst', 'Human Services Assistant'],
    iconText: 'SO',
  },
  {
    id: 'history',
    name: 'History',
    stream: 'arts',
    description: 'History programs explore past events, civilizations, and their impact on present societies. Students analyze historical documents, develop research skills, and understand historical contexts.',
    duration: '3 years',
    eligibility: '10+2 in any stream',
    careers: ['Historian', 'Archivist', 'Museum Curator', 'Heritage Consultant'],
    iconText: 'HI',
  },
  {
    id: 'mass-comm',
    name: 'Mass Communication',
    stream: 'arts',
    description: 'Mass Communication studies media and its impact on society. The curriculum includes journalism, advertising, public relations, film studies, and digital media production.',
    duration: '3 years',
    eligibility: '10+2 in any stream',
    careers: ['Journalist', 'Media Planner', 'Public Relations Officer', 'Content Creator'],
    iconText: 'MC',
  },
];

// All courses combined
export const allCourses: Course[] = [
  ...scienceCourses,
  ...commerceCourses,
  ...artsCourses
];

// Colleges data - Adding more colleges for each course
export const colleges: College[] = [
  // Engineering Colleges
  {
    id: 'iit-delhi',
    name: 'Indian Institute of Technology, Delhi',
    location: 'New Delhi, India',
    avgSalary: '₹18-25 LPA',
    fees: '₹8.5 Lakhs (Total)',
    companies: ['Google', 'Microsoft', 'Amazon', 'Apple', 'Facebook'],
    applicationDeadline: 'April 30, 2025',
    courseId: 'engineering'
  },
  {
    id: 'nit-trichy',
    name: 'National Institute of Technology, Tiruchirappalli',
    location: 'Tamil Nadu, India',
    avgSalary: '₹10-15 LPA',
    fees: '₹4.5 Lakhs (Total)',
    companies: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture'],
    applicationDeadline: 'May 15, 2025',
    courseId: 'engineering'
  },
  {
    id: 'bits-pilani',
    name: 'Birla Institute of Technology and Science, Pilani',
    location: 'Rajasthan, India',
    avgSalary: '₹12-18 LPA',
    fees: '₹16 Lakhs (Total)',
    companies: ['Intel', 'Qualcomm', 'Samsung', 'Oracle', 'Adobe'],
    applicationDeadline: 'May 10, 2025',
    courseId: 'engineering'
  },
  {
    id: 'iit-bombay',
    name: 'Indian Institute of Technology, Bombay',
    location: 'Mumbai, India',
    avgSalary: '₹20-28 LPA',
    fees: '₹9 Lakhs (Total)',
    companies: ['Microsoft', 'Apple', 'Google', 'Uber', 'LinkedIn'],
    applicationDeadline: 'April 25, 2025',
    courseId: 'engineering'
  },
  {
    id: 'iit-madras',
    name: 'Indian Institute of Technology, Madras',
    location: 'Chennai, India',
    avgSalary: '₹18-24 LPA',
    fees: '₹8 Lakhs (Total)',
    companies: ['Amazon', 'Microsoft', 'Goldman Sachs', 'Intel', 'Samsung'],
    applicationDeadline: 'May 5, 2025',
    courseId: 'engineering'
  },
  
  // Medical Colleges
  {
    id: 'aiims',
    name: 'All India Institute of Medical Sciences',
    location: 'New Delhi, India',
    avgSalary: '₹12-20 LPA',
    fees: '₹1.5 Lakhs (Total)',
    companies: ['Apollo Hospitals', 'Fortis Healthcare', 'Max Healthcare'],
    applicationDeadline: 'June 5, 2025',
    courseId: 'medical'
  },
  {
    id: 'cmch-vellore',
    name: 'Christian Medical College',
    location: 'Vellore, Tamil Nadu',
    avgSalary: '₹10-15 LPA',
    fees: '₹5 Lakhs (Total)',
    companies: ['Apollo Hospitals', 'Manipal Hospitals', 'Medanta'],
    applicationDeadline: 'May 25, 2025',
    courseId: 'medical'
  },
  {
    id: 'kmc-manipal',
    name: 'Kasturba Medical College',
    location: 'Manipal, Karnataka',
    avgSalary: '₹10-14 LPA',
    fees: '₹12 Lakhs (Total)',
    companies: ['Fortis', 'Apollo', 'Narayana Health', 'Manipal Hospitals'],
    applicationDeadline: 'June 10, 2025',
    courseId: 'medical'
  },
  {
    id: 'ucms-delhi',
    name: 'University College of Medical Sciences',
    location: 'Delhi, India',
    avgSalary: '₹8-12 LPA',
    fees: '₹1.2 Lakhs (Total)',
    companies: ['AIIMS', 'Fortis', 'Max Healthcare', 'Medanta'],
    applicationDeadline: 'June 15, 2025',
    courseId: 'medical'
  },
  
  // Physics Colleges
  {
    id: 'iiser-pune',
    name: 'Indian Institute of Science Education and Research',
    location: 'Pune, India',
    avgSalary: '₹6-10 LPA',
    fees: '₹3 Lakhs (Total)',
    companies: ['ISRO', 'BARC', 'DRDO', 'Tata Institute'],
    applicationDeadline: 'June 20, 2025',
    courseId: 'bsc-physics'
  },
  {
    id: 'st-stephens-physics',
    name: 'St. Stephens College',
    location: 'Delhi, India',
    avgSalary: '₹5-8 LPA',
    fees: '₹80,000 (Per Year)',
    companies: ['ISRO', 'DRDO', 'Research Labs', 'Educational Institutions'],
    applicationDeadline: 'June 10, 2025',
    courseId: 'bsc-physics'
  },
  {
    id: 'madras-christian-physics',
    name: 'Madras Christian College',
    location: 'Chennai, India',
    avgSalary: '₹4-7 LPA',
    fees: '₹70,000 (Per Year)',
    companies: ['Research Labs', 'Educational Institutions', 'Wipro'],
    applicationDeadline: 'May 30, 2025',
    courseId: 'bsc-physics'
  },
  
  // Chemistry Colleges
  {
    id: 'iit-kgp-chem',
    name: 'IIT Kharagpur - Chemistry Department',
    location: 'Kharagpur, India',
    avgSalary: '₹7-12 LPA',
    fees: '₹8 Lakhs (Total)',
    companies: ['ONGC', 'Reliance', 'Asian Paints', 'Sun Pharma'],
    applicationDeadline: 'May 20, 2025',
    courseId: 'bsc-chemistry'
  },
  {
    id: 'delhi-university-chem',
    name: 'Delhi University - Chemistry Department',
    location: 'Delhi, India',
    avgSalary: '₹5-8 LPA',
    fees: '₹75,000 (Per Year)',
    companies: ['ONGC', 'IOCL', 'Pharmaceutical Companies', 'Research Labs'],
    applicationDeadline: 'June 5, 2025',
    courseId: 'bsc-chemistry'
  },
  
  // Biotechnology Colleges
  {
    id: 'manipal-biotech',
    name: 'Manipal Institute of Technology - Biotechnology',
    location: 'Manipal, Karnataka',
    avgSalary: '₹6-10 LPA',
    fees: '₹14 Lakhs (Total)',
    companies: ['Biocon', 'Dr. Reddy\'s', 'Cipla', 'Research Labs'],
    applicationDeadline: 'May 30, 2025',
    courseId: 'biotech'
  },
  {
    id: 'vit-biotech',
    name: 'Vellore Institute of Technology - Biotechnology',
    location: 'Vellore, Tamil Nadu',
    avgSalary: '₹5-9 LPA',
    fees: '₹10 Lakhs (Total)',
    companies: ['Biocon', 'Serum Institute', 'Cipla', 'Novozymes'],
    applicationDeadline: 'June 15, 2025',
    courseId: 'biotech'
  },
  
  // B.Com Colleges
  {
    id: 'srcc-delhi',
    name: 'Shri Ram College of Commerce',
    location: 'Delhi, India',
    avgSalary: '₹8-12 LPA',
    fees: '₹50,000 (Per Year)',
    companies: ['Deloitte', 'EY', 'KPMG', 'PwC', 'JP Morgan'],
    applicationDeadline: 'June 15, 2025',
    courseId: 'bcom'
  },
  {
    id: 'loyola-chennai',
    name: 'Loyola College',
    location: 'Chennai, India',
    avgSalary: '₹6-9 LPA',
    fees: '₹40,000 (Per Year)',
    companies: ['HDFC Bank', 'ICICI Bank', 'Infosys', 'TCS', 'Wipro'],
    applicationDeadline: 'May 30, 2025',
    courseId: 'bcom'
  },
  {
    id: 'christ-bcom',
    name: 'Christ University - B.Com',
    location: 'Bangalore, India',
    avgSalary: '₹7-10 LPA',
    fees: '₹1.2 Lakhs (Per Year)',
    companies: ['KPMG', 'EY', 'Deloitte', 'Goldman Sachs', 'JP Morgan'],
    applicationDeadline: 'May 20, 2025',
    courseId: 'bcom'
  },
  {
    id: 'symbiosis-pune-bcom',
    name: 'Symbiosis College of Arts and Commerce',
    location: 'Pune, India',
    avgSalary: '₹6-9 LPA',
    fees: '₹80,000 (Per Year)',
    companies: ['HDFC Bank', 'Axis Bank', 'ICICI', 'Goldman Sachs', 'EY'],
    applicationDeadline: 'June 5, 2025',
    courseId: 'bcom'
  },
  
  // BBA Colleges
  {
    id: 'christ-bangalore',
    name: 'Christ University',
    location: 'Bangalore, India',
    avgSalary: '₹7-10 LPA',
    fees: '₹6 Lakhs (Total)',
    companies: ['Accenture', 'Deloitte', 'Amazon', 'Flipkart', 'TCS'],
    applicationDeadline: 'April 15, 2025',
    courseId: 'bba'
  },
  {
    id: 'nmims-mumbai',
    name: 'NMIMS School of Business Management',
    location: 'Mumbai, India',
    avgSalary: '₹8-14 LPA',
    fees: '₹10 Lakhs (Total)',
    companies: ['KPMG', 'EY', 'Reliance', 'Unilever', 'P&G'],
    applicationDeadline: 'May 5, 2025',
    courseId: 'bba'
  },
  {
    id: 'symbiosis-bba',
    name: 'Symbiosis Centre for Management Studies',
    location: 'Pune, India',
    avgSalary: '₹7-12 LPA',
    fees: '₹8 Lakhs (Total)',
    companies: ['Deloitte', 'KPMG', 'Capgemini', 'Cognizant', 'Infosys'],
    applicationDeadline: 'May 10, 2025',
    courseId: 'bba'
  },
  
  // CA Colleges
  {
    id: 'icai-delhi',
    name: 'Institute of Chartered Accountants of India',
    location: 'Delhi, India',
    avgSalary: '₹8-15 LPA',
    fees: '₹80,000 (Total)',
    companies: ['Deloitte', 'EY', 'KPMG', 'PwC', 'Grant Thornton'],
    applicationDeadline: 'June 30, 2025',
    courseId: 'ca'
  },
  {
    id: 'icai-mumbai',
    name: 'ICAI - Mumbai Chapter',
    location: 'Mumbai, India',
    avgSalary: '₹10-18 LPA',
    fees: '₹80,000 (Total)',
    companies: ['EY', 'Deloitte', 'KPMG', 'PwC', 'BDO'],
    applicationDeadline: 'June 30, 2025',
    courseId: 'ca'
  },
  
  // Economics Colleges
  {
    id: 'dse-delhi',
    name: 'Delhi School of Economics',
    location: 'Delhi, India',
    avgSalary: '₹8-14 LPA',
    fees: '₹40,000 (Per Year)',
    companies: ['World Bank', 'RBI', 'Finance Ministry', 'Think Tanks'],
    applicationDeadline: 'June 10, 2025',
    courseId: 'economics'
  },
  {
    id: 'jnu-economics',
    name: 'Jawaharlal Nehru University - Economics',
    location: 'Delhi, India',
    avgSalary: '₹7-12 LPA',
    fees: '₹30,000 (Per Year)',
    companies: ['NITI Aayog', 'RBI', 'World Bank', 'Economic Ministries'],
    applicationDeadline: 'June 15, 2025',
    courseId: 'economics'
  },
  
  // Finance Colleges
  {
    id: 'iim-finance',
    name: 'IIM Ahmedabad - Finance',
    location: 'Ahmedabad, India',
    avgSalary: '₹15-28 LPA',
    fees: '₹23 Lakhs (Total)',
    companies: ['Goldman Sachs', 'JP Morgan', 'Morgan Stanley', 'BlackRock'],
    applicationDeadline: 'March 25, 2025',
    courseId: 'finance'
  },
  {
    id: 'nmims-finance',
    name: 'NMIMS - Finance',
    location: 'Mumbai, India',
    avgSalary: '₹10-16 LPA',
    fees: '₹12 Lakhs (Total)',
    companies: ['HDFC Bank', 'ICICI', 'Aditya Birla Capital', 'Kotak Mahindra'],
    applicationDeadline: 'May 5, 2025',
    courseId: 'finance'
  },
  
  // English Literature Colleges
  {
    id: 'stephens-delhi',
    name: "St. Stephen's College",
    location: 'Delhi, India',
    avgSalary: '₹5-8 LPA',
    fees: '₹30,000 (Per Year)',
    companies: ['HarperCollins', 'Penguin Random House', 'Times Group', 'NDTV'],
    applicationDeadline: 'June 10, 2025',
    courseId: 'ba-english'
  },
  {
    id: 'xaviers-mumbai',
    name: "St. Xavier's College",
    location: 'Mumbai, India',
    avgSalary: '₹5-7 LPA',
    fees: '₹25,000 (Per Year)',
    companies: ['TOI', 'Hindustan Times', 'Oxford University Press', 'Tata McGraw Hill'],
    applicationDeadline: 'May 20, 2025',
    courseId: 'ba-english'
  },
  {
    id: 'jadavpur-english',
    name: 'Jadavpur University - English Department',
    location: 'Kolkata, India',
    avgSalary: '₹4-7 LPA',
    fees: '₹20,000 (Per Year)',
    companies: ['Publishing Houses', 'Media Companies', 'Educational Institutions'],
    applicationDeadline: 'June 5, 2025',
    courseId: 'ba-english'
  },
  
  // Psychology Colleges
  {
    id: 'lady-shriram',
    name: 'Lady Shri Ram College for Women',
    location: 'Delhi, India',
    avgSalary: '₹5-9 LPA',
    fees: '₹35,000 (Per Year)',
    companies: ['Fortis Healthcare', 'Max Healthcare', 'UNICEF', 'NGOs'],
    applicationDeadline: 'June 5, 2025',
    courseId: 'psychology'
  },
  {
    id: 'fergusson-pune',
    name: 'Fergusson College',
    location: 'Pune, India',
    avgSalary: '₹4.5-7 LPA',
    fees: '₹30,000 (Per Year)',
    companies: ['TCS', 'Wipro', 'Hospitals', 'Educational Institutions'],
    applicationDeadline: 'May 25, 2025',
    courseId: 'psychology'
  },
  {
    id: 'christ-psychology',
    name: 'Christ University - Psychology',
    location: 'Bangalore, India',
    avgSalary: '₹5-8 LPA',
    fees: '₹80,000 (Per Year)',
    companies: ['Hospitals', 'Counseling Centers', 'Schools', 'Corporate Firms'],
    applicationDeadline: 'May 15, 2025',
    courseId: 'psychology'
  },
  
  // Sociology Colleges
  {
    id: 'jnu-sociology',
    name: 'Jawaharlal Nehru University - Sociology',
    location: 'Delhi, India',
    avgSalary: '₹4-7 LPA',
    fees: '₹25,000 (Per Year)',
    companies: ['NGOs', 'Research Organizations', 'Government Agencies', 'UN Bodies'],
    applicationDeadline: 'June 10, 2025',
    courseId: 'sociology'
  },
  {
    id: 'delhi-school-sociology',
    name: 'Delhi School of Economics - Sociology',
    location: 'Delhi, India',
    avgSalary: '₹5-8 LPA',
    fees: '₹30,000 (Per Year)',
    companies: ['Research Institutes', 'Think Tanks', 'International Organizations'],
    applicationDeadline: 'June 5, 2025',
    courseId: 'sociology'
  },
  
  // History Colleges
  {
    id: 'stephens-history',
    name: "St. Stephen's College - History",
    location: 'Delhi, India',
    avgSalary: '₹4-7 LPA',
    fees: '₹30,000 (Per Year)',
    companies: ['Archives', 'Museums', 'Tourism Sector', 'Research Institutes'],
    applicationDeadline: 'June 10, 2025',
    courseId: 'history'
  },
  {
    id: 'jnu-history',
    name: 'Jawaharlal Nehru University - History',
    location: 'Delhi, India',
    avgSalary: '₹5-8 LPA',
    fees: '₹25,000 (Per Year)',
    companies: ['Archaeological Survey', 'Museums', 'Research Organizations'],
    applicationDeadline: 'June 15, 2025',
    courseId: 'history'
  },
  
  // Mass Comm Colleges
  {
    id: 'iimc-delhi',
    name: 'Indian Institute of Mass Communication',
    location: 'Delhi, India',
    avgSalary: '₹6-10 LPA',
    fees: '₹1.5 Lakhs (Total)',
    companies: ['Times Group', 'NDTV', 'India Today', 'Republic'],
    applicationDeadline: 'May 25, 2025',
    courseId: 'mass-comm'
  },
  {
    id: 'symbiosis-masscomm',
    name: 'Symbiosis Centre for Media & Communication',
    location: 'Pune, India',
    avgSalary: '₹5-9 LPA',
    fees: '₹8 Lakhs (Total)',
    companies: ['Zee Media', 'Network18', 'PR Agencies', 'Digital Media'],
    applicationDeadline: 'May 15, 2025',
    courseId: 'mass-comm'
  }
];

// Jobs data
export const jobs: Job[] = [
  // Engineering Jobs
  {
    id: 'job-1',
    title: 'Software Engineer',
    company: 'Microsoft',
    location: 'Bangalore, India',
    salary: '₹15-20 LPA',
    type: 'Full-time',
    posted: '2 days ago',
    skills: ['JavaScript', 'React', 'Node.js', 'Cloud Computing'],
    description: 'We are looking for a talented Software Engineer to join our team in Bangalore. You will be responsible for developing and maintaining high-quality software solutions. The ideal candidate has experience with modern web technologies and a passion for writing clean, maintainable code.',
  },
  {
    id: 'job-2',
    title: 'Mechanical Engineer',
    company: 'Tata Motors',
    location: 'Pune, India',
    salary: '₹8-12 LPA',
    type: 'Full-time',
    posted: '1 week ago',
    skills: ['AutoCAD', 'Mechanical Design', 'Product Development'],
    description: 'Tata Motors is seeking a Mechanical Engineer to join our product development team. You will be involved in designing and testing automotive components, collaborating with cross-functional teams, and ensuring product quality and reliability.',
  },
  
  // Medical Jobs
  {
    id: 'job-3',
    title: 'General Physician',
    company: 'Apollo Hospitals',
    location: 'Delhi, India',
    salary: '₹12-18 LPA',
    type: 'Full-time',
    posted: '3 days ago',
    skills: ['Patient Care', 'Diagnosis', 'Medical Knowledge'],
    description: 'Apollo Hospitals is looking for a General Physician to provide comprehensive healthcare to patients. Responsibilities include diagnosing and treating various medical conditions, ordering and interpreting diagnostic tests, and providing preventive care advice.',
  },
  {
    id: 'job-4',
    title: 'Pharmacist',
    company: 'Fortis Healthcare',
    location: 'Mumbai, India',
    salary: '₹6-9 LPA',
    type: 'Full-time',
    posted: '5 days ago',
    skills: ['Pharmacy Operations', 'Medication Management', 'Patient Counseling'],
    description: 'Join our team as a Pharmacist at Fortis Healthcare. You will be responsible for dispensing medications, providing drug information to healthcare professionals, counseling patients on medication use, and ensuring compliance with regulatory requirements.',
  },
  
  // Commerce Jobs
  {
    id: 'job-5',
    title: 'Financial Analyst',
    company: 'HDFC Bank',
    location: 'Mumbai, India',
    salary: '₹8-12 LPA',
    type: 'Full-time',
    posted: '1 week ago',
    skills: ['Financial Modeling', 'Data Analysis', 'Excel', 'Reporting'],
    description: 'HDFC Bank is seeking a Financial Analyst to join our corporate finance team. You will be responsible for analyzing financial data, preparing reports, assisting with budgeting and forecasting, and supporting strategic financial decisions.',
  },
  {
    id: 'job-6',
    title: 'Chartered Accountant',
    company: 'Deloitte',
    location: 'Bengaluru, India',
    salary: '₹10-15 LPA',
    type: 'Full-time',
    posted: '2 weeks ago',
    skills: ['Auditing', 'Taxation', 'Financial Reporting', 'IFRS'],
    description: 'Deloitte is looking for a Chartered Accountant to join our audit and assurance team. You will be responsible for conducting financial audits, preparing financial statements, ensuring compliance with accounting standards, and providing advisory services to clients.',
  },
  
  // Arts Jobs
  {
    id: 'job-7',
    title: 'Content Writer',
    company: 'HCL Technologies',
    location: 'Noida, India',
    salary: '₹5-8 LPA',
    type: 'Full-time',
    posted: '4 days ago',
    skills: ['Content Creation', 'SEO', 'Editing', 'Research'],
    description: 'HCL Technologies is seeking a talented Content Writer to create engaging and informative content for our digital platforms. You will be responsible for writing blog posts, articles, website content, and marketing materials that align with our brand voice and SEO strategy.',
  },
  {
    id: 'job-8',
    title: 'HR Specialist',
    company: 'Wipro',
    location: 'Hyderabad, India',
    salary: '₹6-9 LPA',
    type: 'Full-time',
    posted: '1 week ago',
    skills: ['Recruitment', 'Employee Relations', 'HR Policies', 'Talent Management'],
    description: 'Wipro is looking for an HR Specialist to join our human resources team. You will be responsible for recruitment, onboarding, employee relations, performance management, and ensuring compliance with labor laws and company policies.',
  },
  {
    id: 'job-9',
    title: 'Journalist',
    company: 'Times of India',
    location: 'Delhi, India',
    salary: '₹5-8 LPA',
    type: 'Full-time',
    posted: '3 days ago',
    skills: ['Reporting', 'Writing', 'Interviewing', 'Research'],
    description: 'Times of India is seeking a Journalist to report on current events, conduct interviews, and write news articles. The ideal candidate has excellent writing skills, a nose for news, and the ability to meet tight deadlines in a fast-paced environment.',
  },
  {
    id: 'job-10',
    title: 'Digital Marketing Specialist',
    company: 'Amazon',
    location: 'Bengaluru, India',
    salary: '₹8-12 LPA',
    type: 'Full-time',
    posted: '5 days ago',
    skills: ['Social Media Marketing', 'SEO', 'SEM', 'Content Strategy'],
    description: 'Amazon is looking for a Digital Marketing Specialist to develop and implement digital marketing strategies. You will be responsible for social media management, SEO optimization, email marketing, and analyzing campaign performance to drive customer engagement and sales.',
  }
];

// Database connection configuration
export const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Roshan@123',
  database: 'careerrecommendationdb'
};

// Get courses by stream
export const getCoursesByStream = (stream: string): Course[] => {
  switch(stream) {
    case 'science':
      return scienceCourses;
    case 'commerce':
      return commerceCourses;
    case 'arts':
      return artsCourses;
    default:
      return allCourses;
  }
};

// Get colleges by course
export const getCollegesByCourse = (courseId: string): College[] => {
  return colleges.filter(college => college.courseId === courseId);
};

// Get course by ID
export const getCourseById = (courseId: string): Course | undefined => {
  return allCourses.find(course => course.id === courseId);
};

// Get college by ID
export const getCollegeById = (collegeId: string): College | undefined => {
  return colleges.find(college => college.id === collegeId);
};

// Get job by ID
export const getJobById = (jobId: string): Job | undefined => {
  return jobs.find(job => job.id === jobId);
};

// Mock admin stats for dashboard
export const adminStats = {
  totalStudents: 5200,
  totalCourses: allCourses.length,
  totalColleges: colleges.length,
  totalJobs: jobs.length,
  newApplications: 24,
  activeUsers: 457,
  monthlyVisits: 5823,
  popularStreams: [
    { name: 'Science', count: 2450 },
    { name: 'Commerce', count: 1850 },
    { name: 'Arts', count: 900 }
  ],
  popularCourses: [
    { name: 'Engineering', count: 1245 },
    { name: 'Medical Sciences', count: 987 },
    { name: 'B.Com', count: 876 },
    { name: 'BBA', count: 764 },
    { name: 'Psychology', count: 543 }
  ]
};
