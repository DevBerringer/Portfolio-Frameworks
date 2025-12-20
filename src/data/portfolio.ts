import type { Project, Skill, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Cozy Cookbook',
    description: 'A full-stack web application solution with real-time recipe management, authentication, and user interactions.',
    detailedDescription: 'Cozy Cookbook is a comprehensive recipe management platform built with modern web technologies. It features user authentication, real-time recipe sharing, and an intuitive interface for managing personal and community recipes. The application includes advanced search and filtering capabilities, user profiles, and social features for recipe interactions.',
    image: '/cozy-cookbook.png',
    tags: ['React', 'Java Spring Boot', 'MongoDB', 'Tailwind CSS'],
    technologies: [
      { name: 'React', description: 'Frontend framework for building the user interface' },
      { name: 'Java Spring Boot', description: 'Backend framework for API development' },
      { name: 'MongoDB', description: 'NoSQL database for storing recipes and user data' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework for styling' }
    ],
    features: ['User authentication', 'Recipe CRUD operations', 'Real-time updates', 'Search and filtering', 'User profiles'],
    challenges: [
      {
        challenge: 'Implementing real-time features with WebSockets and ensuring data consistency across multiple users',
        solution: 'Utilized Socket.IO for WebSocket connections and implemented optimistic updates with conflict resolution to maintain data integrity'
      }
    ],
    demoUrl: 'https://thecozycookbookwebui.vercel.app/',
    githubUrl: 'https://github.com/DevBerringer/RecipeWeb/tree/setup/blake',
  },
  {
    id: '2',
    title: 'Vanilla Portfolio',
    description: 'I wanted to learn the base of web development. I created a portfolio using vanilla JavaScript, HTML, and CSS. No frameworks were used.',
    detailedDescription: 'This vanilla JavaScript portfolio showcases fundamental web development skills without relying on any frameworks or libraries. It demonstrates proficiency in HTML5, CSS3, and vanilla JavaScript for DOM manipulation, event handling, and responsive design. The site includes sections for projects, skills, and contact information with smooth scrolling and interactive elements.',
    image: '/Portfolio.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    technologies: [
      { name: 'HTML5', description: 'Markup language for structuring the web page' },
      { name: 'CSS3', description: 'Styling language for visual presentation' },
      { name: 'JavaScript', description: 'Programming language for interactivity' }
    ],
    features: ['Responsive design', 'Smooth scrolling navigation', 'Interactive project gallery', 'Contact form', 'Skills showcase'],
    challenges: [
      {
        challenge: 'Creating responsive layouts and smooth animations without CSS frameworks or JavaScript libraries',
        solution: 'Implemented custom CSS Grid and Flexbox layouts with media queries, and used vanilla JavaScript for scroll-based animations and transitions'
      }
    ],
    demoUrl: 'https://blakeberringer.vercel.app/',
    githubUrl: 'https://github.com/DevBerringer/Portfolio/tree/main',
  },
  {
    id: '3',
    title: 'Real-Time Analytics Dashboard',
    description: 'Interactive dashboard for visualizing real-time data streams with customizable widgets and alerts.',
    detailedDescription: 'Real-Time Analytics Dashboard featuring comprehensive data visualization that displays live metrics. It uses Firebase authentication for secure user access, Firestore for real-time data storage and updates, and configurable pricing and sales modules. The dashboard includes customizable widgets, interactive charts, and alert systems for monitoring data anomalies. Dashboard is deployed to Google Cloud Platform as well as an processing and update service on Cloud Run functions, it utilizes Quarkus cache for efficient dashboard metadata caching.',
    image: '/AnalyticsDashboard.png',
    tags: ['React', 'Vite', 'Firebase', 'Firestore', 'Kotlin', 'Java Quarkus', 'AWS Lambda', 'GCP'],
    technologies: [
      { name: 'React', description: 'Frontend library for building the user interface' },
      { name: 'Vite SWC', description: 'Build tool for fast development and optimized production builds' },
      { name: 'Firebase', description: 'Platform for authentication and real-time database' },
      { name: 'Firestore', description: 'NoSQL cloud database for real-time data synchronization' },
      { name: 'Kotlin Quarkus', description: 'Backend for dashboard service' },
      { name: 'Quarkus Cache', description: 'Caching solution for dashboard metadata' },
      { name: 'Java Quarkus', description: 'Microservice for item processing and updates' },
      { name: 'Google Cloud Platform', description: 'Cloud platform for dashboard deployment and Serverless functions' }

    ],
    features: ['Real-time data visualization', 'Customizable widgets', 'Alert system', 'Configurable pricing', 'Sales analytics', 'Multiple chart types', 'Data export', 'Efficient updates'],
    challenges: [
      {
        challenge: 'Orchestrating seamless data flow between a Kotlin-based Firebase backend and a Java Quarkus processing engine, while managing a infrastructure on GCP.',
        solution: 'Architected a robust event-driven system using Firestore listeners and optimistic UI updates for zero-latency feel. I optimized Quarkus-level metadata caching and engineered cloud deployment pipeline that ensured data integrity and synchronization across different cloud deployments.'
      },
      {
        challenge: 'Scalability bottlenecks when syncing 20,000+ product updates simultaneously across multiple WooCommerce client sites.',
        solution: 'Developed a "divide and conquer" ingestion strategy using parallel Java execution. By batch-processing updates and running client-side syncs in parallel, I significantly reduced total execution time and minimized compute costs.'
      }
    ],
    demoUrl: undefined,
    githubUrl: undefined,
  },
  {
    id: '4',
    title: 'StackDev',
    description: 'Adaptive, AI‑powered coding professors that teach developers through evolving, lesson‑based onboarding and hands‑on guidance. Includes retraining pipelines, subscription flows, and multi‑persona professor architecture.',
    detailedDescription: 'StackDev is an innovative AI-powered learning platform designed to teach developers through personalized, adaptive lessons. The system features multiple AI professor personas, each specializing in different technologies. It includes subscription management, progress tracking, and retraining pipelines to keep the AI models up-to-date with the latest technologies.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tags: ['React', 'Firebase', 'AI Agents'],
    technologies: [
      { name: 'React', description: 'Frontend library for building the user interface' },
      { name: 'Firebase', description: 'Backend-as-a-Service for authentication and database' },
      { name: 'AI Agents', description: 'Custom AI models for personalized learning' }
    ],
    features: ['AI-powered professors', 'Adaptive learning paths', 'Subscription management', 'Progress tracking', 'Multi-persona architecture'],
    challenges: [
      {
        challenge: 'Developing accurate AI models for code teaching and managing multiple AI personas with consistent behavior',
        solution: 'Created specialized training datasets for each technology stack and implemented persona consistency checks with reinforcement learning techniques'
      }
    ],
    demoUrl: undefined,
    githubUrl: undefined,
  }
];

export const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Java', category: 'backend' },
  { name: 'Spring boot', category: 'backend' },
  { name: 'Quarkus', category: 'backend' },
  { name: 'C# .NET', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'MS SQL', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'Git', category: 'cloud tools' },
  { name: 'Docker', category: 'cloud tools' },
  { name: 'AWS Lambda', category: 'cloud tools' },
  { name: 'Kubernetes', category: 'cloud tools' },
  { name: 'PCF', category: 'cloud tools' },
  { name: 'Ampcode', category: 'AI' },
  { name: 'Anthropic Claude', category: 'AI' },
  { name: 'Cursor', category: 'AI' },
  { name: 'LangChain', category: 'AI' },
  { name: 'OpenAI API', category: 'AI' },
  { name: 'NLP', category: 'AI' },
  { name: 'Figma', category: 'design' },
  { name: 'Lucidchart', category: 'design' },
  { name: 'Microsoft Visio', category: 'design' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/DevBerringer', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/blake-berringer-35126a105', icon: 'linkedin' }
];

export const personalInfo = {
  name: 'Blake Berringer',
  title: 'Full Stack Developer',
  tagline: 'Building exceptional digital experiences',
  about: `I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies like React and Vite, I transform ideas into elegant, scalable solutions.

  Professionally, I've contributed to impactful systems at GM, including designing a Pulsar-based event router in Java and Quarkus that increased throughput by over 100% and standardized multi-API orchestration. My work spans fault-tolerant architecture, maintainable codebases, and developer experience improvements, from onboarding flows to automated testing and TDD.
  
  When I'm not coding, you'll find me exploring new technologies or sharing knowledge with the developer community. I thrive on refining systems, dissecting complex stacks, and building tools that make engineering more intuitive and efficient.`,
  email: 'Blake.Berringer.Work@gmail.com',
  location: 'Austin, TX',
  availability: 'Available for Fullstack and Backend Roles',
};

