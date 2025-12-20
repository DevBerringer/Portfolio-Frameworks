import type { Project, Skill, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Cozy Cookbook',
    description: 'A full-stack web application solution with real-time recipe management, authentication, and user interactions.',
    detailedDescription: 'Cozy Cookbook is a comprehensive recipe management platform built with modern web technologies. It features user authentication, real-time recipe sharing, and an intuitive interface for managing personal and community recipes. The application includes advanced search and filtering capabilities, user profiles, and social features for recipe interactions.',
    image: '/cozy-cookbook.png',
    screenshots: ['/cozy-cookbook.png', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop'],
    tags: ['React', 'Java Spring Boot', 'MongoDB', 'Tailwind CSS'],
    technologies: [
      { name: 'React', description: 'Frontend framework for building the user interface' },
      { name: 'Java Spring Boot', description: 'Backend framework for API development' },
      { name: 'MongoDB', description: 'NoSQL database for storing recipes and user data' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework for styling' }
    ],
    features: ['User authentication', 'Recipe CRUD operations', 'Real-time updates', 'Search and filtering', 'User profiles'],
    challenges: 'Implementing real-time features with WebSockets and ensuring data consistency across multiple users.',
    date: '2024-06-15',
    demoUrl: 'https://thecozycookbookwebui.vercel.app/',
    githubUrl: 'https://github.com/DevBerringer/RecipeWeb/tree/setup/blake',
  },
  {
    id: '2',
    title: 'Vanilla Portfolio',
    description: 'I wanted to learn the base of web development. I created a portfolio using vanilla JavaScript, HTML, and CSS. No frameworks were used.',
    detailedDescription: 'This vanilla JavaScript portfolio showcases fundamental web development skills without relying on any frameworks or libraries. It demonstrates proficiency in HTML5, CSS3, and vanilla JavaScript for DOM manipulation, event handling, and responsive design. The site includes sections for projects, skills, and contact information with smooth scrolling and interactive elements.',
    image: '/Portfolio.png',
    screenshots: ['/Portfolio.png', 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    technologies: [
      { name: 'HTML5', description: 'Markup language for structuring the web page' },
      { name: 'CSS3', description: 'Styling language for visual presentation' },
      { name: 'JavaScript', description: 'Programming language for interactivity' }
    ],
    features: ['Responsive design', 'Smooth scrolling navigation', 'Interactive project gallery', 'Contact form', 'Skills showcase'],
    challenges: 'Creating responsive layouts and smooth animations without CSS frameworks or JavaScript libraries.',
    date: '2023-12-01',
    demoUrl: 'https://blakeberringer.vercel.app/',
    githubUrl: 'https://github.com/DevBerringer/Portfolio/tree/main',
  },
  {
    id: '3',
    title: 'Real-Time Analytics Dashboard',
    description: 'Interactive dashboard for visualizing real-time data streams with customizable widgets and alerts.',
    detailedDescription: 'The Real-Time Analytics Dashboard provides comprehensive data visualization for live data streams. Built with Next.js and D3.js, it offers customizable widgets, real-time updates via WebSockets, and alert systems for data anomalies. The dashboard supports multiple data sources and includes advanced charting capabilities with interactive features.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    screenshots: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'],
    tags: ['Next.js', 'D3.js', 'WebSocket', 'Redis'],
    technologies: [
      { name: 'Next.js', description: 'React framework for server-side rendering and API routes' },
      { name: 'D3.js', description: 'JavaScript library for data visualization' },
      { name: 'WebSocket', description: 'Protocol for real-time communication' },
      { name: 'Redis', description: 'In-memory data structure store for caching' }
    ],
    features: ['Real-time data visualization', 'Customizable widgets', 'Alert system', 'Multiple chart types', 'Data export'],
    challenges: 'Optimizing performance for high-frequency data updates and ensuring WebSocket connection stability.',
    date: '2024-08-20',
    demoUrl: undefined,
    githubUrl: undefined,
  },
  {
    id: '4',
    title: 'StackDev',
    description: 'Adaptive, AI‑powered coding professors that teach developers through evolving, lesson‑based onboarding and hands‑on guidance. Includes retraining pipelines, subscription flows, and multi‑persona professor architecture.',
    detailedDescription: 'StackDev is an innovative AI-powered learning platform designed to teach developers through personalized, adaptive lessons. The system features multiple AI professor personas, each specializing in different technologies. It includes subscription management, progress tracking, and retraining pipelines to keep the AI models up-to-date with the latest technologies.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    screenshots: ['https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop'],
    tags: ['React', 'Firebase', 'AI Agents'],
    technologies: [
      { name: 'React', description: 'Frontend library for building the user interface' },
      { name: 'Firebase', description: 'Backend-as-a-Service for authentication and database' },
      { name: 'AI Agents', description: 'Custom AI models for personalized learning' }
    ],
    features: ['AI-powered professors', 'Adaptive learning paths', 'Subscription management', 'Progress tracking', 'Multi-persona architecture'],
    challenges: 'Developing accurate AI models for code teaching and managing multiple AI personas with consistent behavior.',
    date: '2024-10-10',
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
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/blake-berringer-35126a105', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:blake.berringer.work@gmail.com', icon: 'email' },
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
  availability: 'Available for freelance projects',
};

