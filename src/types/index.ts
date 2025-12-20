export interface Challenge {
  challenge: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  image: string;
  screenshots?: string[];
  tags: string[];
  technologies?: { name: string; description: string }[];
  features?: string[];
  challenges?: Challenge[];
  date?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'cloud tools' | 'design' | 'AI';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

