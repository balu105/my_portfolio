
import { Project, Experience, Education, Certification, Skill } from './types';

export const SKILLS: Skill[] = [
  { name: 'HTML5', percentage: 95 },
  { name: 'CSS3', percentage: 90 },
  { name: 'JavaScript', percentage: 85 },
  { name: 'React', percentage: 80 },
  { name: 'Python', percentage: 80 },
  { name: 'Django', percentage: 75 },
  { name: 'Data Analytics', percentage: 70 },
  { name: 'Cloud Computing', percentage: 65 },
];

export const PROJECTS: Project[] = [
  {
    title: 'Attendance Management System',
    description: 'Web app for managing student attendance and automated reports.',
    image: 'https://www.shutterstock.com/image-photo/concept-attendance-business-management-businessman-260nw-2149069489.jpg',
    github: 'https://github.com/balu105/attendance',
    demo: 'https://yourdemo.com/attendance',
    tags: ['Django', 'Python', 'JS']
  },
  {
    title: 'Data Analysis Dashboard',
    description: 'Dashboard for data analytics and visualization using Python.',
    image: 'https://media.istockphoto.com/id/1309831153/vector/dashboard-great-design-for-any-site-purposes-business-infographic-template-vector-flat.jpg?s=612x612&w=0&k=20&c=JW6DAMFFkOP78-GlC9t_rMV8zYlERIvrVrKrdv0HdnY=',
    github: 'https://github.com/yourusername/dashboard',
    demo: 'https://yourdemo.com/dashboard',
    tags: ['Python', 'Pandas', 'Plotly']
  },
  {
    title: 'Voice Grammar Corrector',
    description: 'Python website correcting spoken grammar in real-time.',
    image: 'https://bridge.edu/tefl/blog/wp-content/uploads/2025/05/AI-Enhanced-Speaking-Practice-featured-image.jpg',
    github: 'https://github.com/balu105/grammer_corrector_app',
    demo: 'https://yourdemo.com/voicegrammar',
    tags: ['AI', 'Python', 'WebSpeech API']
  },
  {
    title: 'Employee Performance Prediction',
    description: 'Machine learning project predicting employee performance based on historical data.',
    image: 'https://updategadh.com/wp-content/uploads/2025/09/Employee-Performance-Prediction-System.png',
    github: 'https://github.com/balu105/employee_performance_prediction',
    demo: 'https://yourdemo.com/employee-performance',
    tags: ['ML', 'Scikit-Learn', 'Python']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    title: 'Machine Learning Internship',
    company: 'SmartInternz',
    period: 'Aug 2025 - Oct 2025',
    description: 'Worked on practical ML projects, learned model training, evaluation, and deployment techniques.'
  },
  {
    title: 'AWS Internship',
    company: 'APSSDC',
    period: 'Jun 2024 - July 2024',
    description: 'Completed AWS online internship, worked on File Storage and Sharing project, and gained hands-on experience in cloud computing.'
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'B.Tech in Computer Science & AI',
    institution: 'St. John’s College of Engineering and Technology',
    period: '2022 – 2026',
    score: 'CGPA: 7.5/10'
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Govt Junior College, Yemmiganur',
    period: '2020 – 2022',
    score: '88.1%'
  },
  {
    degree: 'Secondary Education',
    institution: 'Govt High School, Yemmiganur',
    period: '2019 – 2020',
    score: '10/10'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Python Programming',
    provider: 'Guvi | HCL',
    description: 'Learned Python basics, data types, control flow, and simple scripting projects.',
    link: 'https://github.com/balu105/Portfolio/blob/main/Guvi-python.jpg'
  },
  {
    title: 'Python Programming',
    provider: 'Skill India Digital Hub',
    description: 'In this we have covered Python fundamentals, problem-solving, and small projects.',
    link: 'https://github.com/balu105/Portfolio/blob/main/SIDH-python.jpg'
  },
  {
    title: 'Java Programming',
    provider: 'Infosys Springboard',
    description: 'Mastered Java syntax, loops, OOP concepts, and built mini console applications.',
    link: 'https://github.com/balu105/Portfolio/blob/main/java-Infosys.pdf'
  },
  {
    title: 'Structured Query Language (SQL)',
    provider: 'Sololearn',
    description: 'Learned database queries, table management, joins, and data retrieval techniques.',
    link: 'https://github.com/balu105/Portfolio/blob/main/sololearn-SQL.jpg'
  },
  {
    title: 'Java Database Connectivity (JDBC)',
    provider: 'Simplilearn',
    description: 'Understood Java database connectivity, CRUD operations, and practical examples.',
    link: 'https://github.com/balu105/Portfolio/blob/main/simplilearn-JDBC.jpg'
  },
  {
    title: 'Data Analytics',
    provider: 'Cisco Foundation',
    description: 'Analyzed datasets, visualized results, and applied analytics techniques to real-world problems.',
    link: 'https://github.com/balu105/Portfolio/blob/main/cisco-data%20analysis.pdf'
  }
];
