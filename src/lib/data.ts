
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

// Colleges data
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

// Admin data
export interface AdminStats {
  totalStudents: number;
  totalCourses: number;
  totalColleges: number;
  totalJobs: number;
  popularStreams: { name: string; count: number }[];
  popularCourses: { name: string; count: number }[];
}

export const adminStats: AdminStats = {
  totalStudents: 15845,
  totalCourses: allCourses.length,
  totalColleges: colleges.length,
  totalJobs: jobs.length,
  popularStreams: [
    { name: 'Science', count: 8245 },
    { name: 'Commerce', count: 5632 },
    { name: 'Arts', count: 1968 },
  ],
  popularCourses: [
    { name: 'Engineering', count: 4521 },
    { name: 'BBA', count: 2874 },
    { name: 'Medical Sciences', count: 2105 },
    { name: 'B.Com', count: 1985 },
    { name: 'B.Sc. Physics', count: 1432 },
  ],
};

// SQL Queries for the project
export const sqlQueries = `
-- Create Database
CREATE DATABASE university_pathways;
USE university_pathways;

-- Create Tables
CREATE TABLE streams (
    stream_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE courses (
    course_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    stream_id VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    duration VARCHAR(50) NOT NULL,
    eligibility TEXT NOT NULL,
    FOREIGN KEY (stream_id) REFERENCES streams(stream_id)
);

CREATE TABLE course_careers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id VARCHAR(50) NOT NULL,
    career_name VARCHAR(100) NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

CREATE TABLE colleges (
    college_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    avg_salary VARCHAR(50) NOT NULL,
    fees VARCHAR(50) NOT NULL,
    application_deadline VARCHAR(50) NOT NULL
);

CREATE TABLE college_courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    college_id VARCHAR(50) NOT NULL,
    course_id VARCHAR(50) NOT NULL,
    FOREIGN KEY (college_id) REFERENCES colleges(college_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

CREATE TABLE college_companies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    college_id VARCHAR(50) NOT NULL,
    company_name VARCHAR(100) NOT NULL,
    FOREIGN KEY (college_id) REFERENCES colleges(college_id)
);

CREATE TABLE jobs (
    job_id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    company VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    salary VARCHAR(50) NOT NULL,
    job_type VARCHAR(50) NOT NULL,
    posted_date VARCHAR(50) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE job_skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_id VARCHAR(50) NOT NULL,
    skill_name VARCHAR(100) NOT NULL,
    FOREIGN KEY (job_id) REFERENCES jobs(job_id)
);

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    full_name VARCHAR(100) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE saved_jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    job_id VARCHAR(50) NOT NULL,
    saved_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (job_id) REFERENCES jobs(job_id),
    UNIQUE KEY (user_id, job_id)
);

CREATE TABLE job_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    job_id VARCHAR(50) NOT NULL,
    application_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Applied', 'Under Review', 'Interview', 'Selected', 'Rejected') DEFAULT 'Applied',
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (job_id) REFERENCES jobs(job_id)
);

-- Insert data into streams
INSERT INTO streams (stream_id, name, description) VALUES
('science', 'Science', 'Explore engineering, medicine, and scientific research pathways.'),
('commerce', 'Commerce', 'Discover business, accounting, and finance career options.'),
('arts', 'Arts', 'Pursue creative, humanities, and liberal arts education.');

-- Insert data into courses (sample entries)
INSERT INTO courses (course_id, name, stream_id, description, duration, eligibility) VALUES
('engineering', 'Engineering', 'science', 'Engineering focuses on applying scientific and mathematical principles to design and build machines, structures, and systems.', '4 years', '10+2 with Physics, Chemistry, and Mathematics'),
('medical', 'Medical Sciences', 'science', 'Medical sciences involve the study of maintaining health and preventing diseases.', '5.5 years (MBBS)', '10+2 with Physics, Chemistry, and Biology'),
('bsc-physics', 'B.Sc. Physics', 'science', 'Bachelor of Science in Physics focuses on the study of matter, energy, and their interactions.', '3 years', '10+2 with Physics and Mathematics'),
('bcom', 'B.Com', 'commerce', 'Bachelor of Commerce provides a strong foundation in business, accounting, economics, and finance.', '3 years', '10+2 in any stream (Commerce preferred)'),
('bba', 'BBA', 'commerce', 'Bachelor of Business Administration focuses on management principles and business operations.', '3 years', '10+2 in any stream'),
('ba-english', 'B.A. English Literature', 'arts', 'Bachelor of Arts in English Literature explores literary works across periods, genres, and cultures.', '3 years', '10+2 in any stream'),
('psychology', 'Psychology', 'arts', 'Psychology studies human behavior and mental processes.', '3 years', '10+2 in any stream');

-- Insert course careers
INSERT INTO course_careers (course_id, career_name) VALUES
('engineering', 'Software Engineer'),
('engineering', 'Civil Engineer'),
('engineering', 'Mechanical Engineer'),
('engineering', 'Electrical Engineer'),
('medical', 'Doctor'),
('medical', 'Surgeon'),
('medical', 'Dentist'),
('medical', 'Pharmacist'),
('bcom', 'Accountant'),
('bcom', 'Financial Analyst'),
('bcom', 'Banking Professional'),
('bba', 'Management Trainee'),
('bba', 'Entrepreneur'),
('bba', 'Business Analyst'),
('ba-english', 'Content Writer'),
('ba-english', 'Editor'),
('ba-english', 'Teacher'),
('psychology', 'Counselor'),
('psychology', 'Human Resources Specialist'),
('psychology', 'Research Assistant');

-- Insert colleges
INSERT INTO colleges (college_id, name, location, avg_salary, fees, application_deadline) VALUES
('iit-delhi', 'Indian Institute of Technology, Delhi', 'New Delhi, India', '₹18-25 LPA', '₹8.5 Lakhs (Total)', 'April 30, 2025'),
('nit-trichy', 'National Institute of Technology, Tiruchirappalli', 'Tamil Nadu, India', '₹10-15 LPA', '₹4.5 Lakhs (Total)', 'May 15, 2025'),
('bits-pilani', 'Birla Institute of Technology and Science, Pilani', 'Rajasthan, India', '₹12-18 LPA', '₹16 Lakhs (Total)', 'May 10, 2025'),
('aiims', 'All India Institute of Medical Sciences', 'New Delhi, India', '₹12-20 LPA', '₹1.5 Lakhs (Total)', 'June 5, 2025'),
('srcc-delhi', 'Shri Ram College of Commerce', 'Delhi, India', '₹8-12 LPA', '₹50,000 (Per Year)', 'June 15, 2025'),
('christ-bangalore', 'Christ University', 'Bangalore, India', '₹7-10 LPA', '₹6 Lakhs (Total)', 'April 15, 2025'),
('stephens-delhi', 'St. Stephen''s College', 'Delhi, India', '₹5-8 LPA', '₹30,000 (Per Year)', 'June 10, 2025'),
('lady-shriram', 'Lady Shri Ram College for Women', 'Delhi, India', '₹5-9 LPA', '₹35,000 (Per Year)', 'June 5, 2025');

-- Link colleges to courses
INSERT INTO college_courses (college_id, course_id) VALUES
('iit-delhi', 'engineering'),
('nit-trichy', 'engineering'),
('bits-pilani', 'engineering'),
('aiims', 'medical'),
('srcc-delhi', 'bcom'),
('christ-bangalore', 'bba'),
('stephens-delhi', 'ba-english'),
('lady-shriram', 'psychology');

-- Add companies to colleges
INSERT INTO college_companies (college_id, company_name) VALUES
('iit-delhi', 'Google'),
('iit-delhi', 'Microsoft'),
('iit-delhi', 'Amazon'),
('iit-delhi', 'Apple'),
('iit-delhi', 'Facebook'),
('nit-trichy', 'TCS'),
('nit-trichy', 'Infosys'),
('nit-trichy', 'Wipro'),
('bits-pilani', 'Intel'),
('bits-pilani', 'Qualcomm'),
('aiims', 'Apollo Hospitals'),
('aiims', 'Fortis Healthcare'),
('srcc-delhi', 'Deloitte'),
('srcc-delhi', 'EY'),
('srcc-delhi', 'KPMG'),
('christ-bangalore', 'Accenture'),
('christ-bangalore', 'Deloitte'),
('stephens-delhi', 'HarperCollins'),
('stephens-delhi', 'Penguin Random House'),
('lady-shriram', 'Fortis Healthcare'),
('lady-shriram', 'UNICEF');

-- Insert jobs
INSERT INTO jobs (job_id, title, company, location, salary, job_type, posted_date, description) VALUES
('job-1', 'Software Engineer', 'Microsoft', 'Bangalore, India', '₹15-20 LPA', 'Full-time', '2 days ago', 'We are looking for a talented Software Engineer to join our team in Bangalore.'),
('job-2', 'Mechanical Engineer', 'Tata Motors', 'Pune, India', '₹8-12 LPA', 'Full-time', '1 week ago', 'Tata Motors is seeking a Mechanical Engineer to join our product development team.'),
('job-3', 'General Physician', 'Apollo Hospitals', 'Delhi, India', '₹12-18 LPA', 'Full-time', '3 days ago', 'Apollo Hospitals is looking for a General Physician to provide comprehensive healthcare to patients.'),
('job-4', 'Financial Analyst', 'HDFC Bank', 'Mumbai, India', '₹8-12 LPA', 'Full-time', '1 week ago', 'HDFC Bank is seeking a Financial Analyst to join our corporate finance team.'),
('job-5', 'Content Writer', 'HCL Technologies', 'Noida, India', '₹5-8 LPA', 'Full-time', '4 days ago', 'HCL Technologies is seeking a talented Content Writer to create engaging and informative content for our digital platforms.');

-- Insert job skills
INSERT INTO job_skills (job_id, skill_name) VALUES
('job-1', 'JavaScript'),
('job-1', 'React'),
('job-1', 'Node.js'),
('job-1', 'Cloud Computing'),
('job-2', 'AutoCAD'),
('job-2', 'Mechanical Design'),
('job-2', 'Product Development'),
('job-3', 'Patient Care'),
('job-3', 'Diagnosis'),
('job-3', 'Medical Knowledge'),
('job-4', 'Financial Modeling'),
('job-4', 'Data Analysis'),
('job-4', 'Excel'),
('job-5', 'Content Creation'),
('job-5', 'SEO'),
('job-5', 'Editing');

-- Create admin user
INSERT INTO users (username, password, email, full_name, role) VALUES
('admin', '$2a$10$1qAz2wSx3eDc4rFv5tGb5eT3TEMoaIEqVOGDBlTmYwr0WPM1hfm56', 'admin@unipathways.com', 'Admin User', 'admin');

-- Add some example users
INSERT INTO users (username, password, email, full_name) VALUES
('student1', '$2a$10$YHZmYGYNj7joKoManJJTVO93TP33wk19Qs2YkAkxjCXBVj1yYhYaK', 'student1@example.com', 'John Smith'),
('student2', '$2a$10$30DL/m0/vbFo.R9hFS9H6evZNRGFtAAwjQcCEpvA12T6CrnJqB9cm', 'student2@example.com', 'Emily Johnson');

-- Add some saved jobs
INSERT INTO saved_jobs (user_id, job_id) VALUES
(2, 'job-1'),
(2, 'job-3'),
(3, 'job-2'),
(3, 'job-4');

-- Add some job applications
INSERT INTO job_applications (user_id, job_id, status) VALUES
(2, 'job-1', 'Applied'),
(2, 'job-3', 'Interview'),
(3, 'job-2', 'Under Review'),
(3, 'job-5', 'Applied');

-- Add transaction isolation level examples
-- Transaction to save a job (with error handling)
DELIMITER //
CREATE PROCEDURE SaveJob(IN p_user_id INT, IN p_job_id VARCHAR(50))
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SELECT 'An error occurred while saving the job' AS message;
    END;

    START TRANSACTION;
    
    -- Check if the job is already saved
    IF NOT EXISTS (SELECT 1 FROM saved_jobs WHERE user_id = p_user_id AND job_id = p_job_id) THEN
        INSERT INTO saved_jobs (user_id, job_id) VALUES (p_user_id, p_job_id);
    END IF;
    
    COMMIT;
    
    SELECT 'Job saved successfully' AS message;
END //
DELIMITER ;

-- Transaction to apply for a job (with concurrency control)
DELIMITER //
CREATE PROCEDURE ApplyForJob(IN p_user_id INT, IN p_job_id VARCHAR(50))
BEGIN
    DECLARE job_exists INT DEFAULT 0;
    DECLARE already_applied INT DEFAULT 0;
    
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SELECT 'An error occurred while applying for the job' AS message;
    END;
    
    -- Set transaction isolation level
    SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
    START TRANSACTION;
    
    -- Check if job exists
    SELECT COUNT(*) INTO job_exists FROM jobs WHERE job_id = p_job_id FOR UPDATE;
    
    IF job_exists = 0 THEN
        ROLLBACK;
        SELECT 'Job does not exist' AS message;
    ELSE
        -- Check if already applied
        SELECT COUNT(*) INTO already_applied FROM job_applications 
        WHERE user_id = p_user_id AND job_id = p_job_id;
        
        IF already_applied > 0 THEN
            ROLLBACK;
            SELECT 'You have already applied for this job' AS message;
        ELSE
            -- Apply for the job
            INSERT INTO job_applications (user_id, job_id) VALUES (p_user_id, p_job_id);
            COMMIT;
            SELECT 'Application submitted successfully' AS message;
        END IF;
    END IF;
END //
DELIMITER ;

-- Create indexes for better performance
CREATE INDEX idx_courses_stream ON courses (stream_id);
CREATE INDEX idx_college_courses_course ON college_courses (course_id);
CREATE INDEX idx_college_courses_college ON college_courses (college_id);
CREATE INDEX idx_job_applications_user ON job_applications (user_id);
CREATE INDEX idx_job_applications_job ON job_applications (job_id);
CREATE INDEX idx_saved_jobs_user ON saved_jobs (user_id);
`;
