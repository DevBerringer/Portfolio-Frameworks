import type { Project, Skill, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Cozy Cookbook',
    description: 'A full-stack web application solution with real-time recipe management, authentication, and user interactions.',
    image: '/cozy-cookbook.png',
    tags: ['React', 'Java Spring Boot', 'MongoDB', 'Tailwind CSS'],
    demoUrl: 'https://thecozycookbookwebui.vercel.app/',
    githubUrl: 'https://github.com/DevBerringer/RecipeWeb/tree/setup/blake',
  },
  {
    id: '2',
    title: 'Vanilla Portfolio',
    description: 'I wanted to learn the base of web development. I created a portfolio using vanilla JavaScript, HTML, and CSS. No frameworks were used.',
    image: '/Portfolio.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://blakeberringer.vercel.app/',
    githubUrl: 'https://github.com/DevBerringer/Portfolio/tree/main',
  },
  {
    id: '3',
    title: 'Real-Time Analytics Dashboard',
    description: 'Interactive dashboard for visualizing real-time data streams with customizable widgets and alerts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Next.js', 'D3.js', 'WebSocket', 'Redis'],
    demoUrl: undefined,
    githubUrl: undefined,
  },
  {
    id: '4',
    title: 'Social Media Scheduler',
    description: 'Multi-platform social media management tool with content calendar and analytics.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tags: ['React', 'Express', 'OAuth', 'AWS'],
    demoUrl: undefined,
    githubUrl: undefined,
  },
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

