export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    isPrimary?: boolean;
    description?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  client?: string;
  category: 'AI & Cloud' | 'Enterprise' | 'Full Stack';
  description: string;
  extendedDescription: string;
  keyFeatures: string[];
  technologies: string[];
  architectureHighlights: string[];
  metrics?: string;
  mockupType: 'ai-chat' | 'analytics-dashboard' | 'property-grid' | 'lms-portal' | 'pos-system';
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Internship / Training';
  summary: string;
  projectsHighlighted: string[];
  keyContributions: string[];
  technologies: string[];
}

export interface EngineeringHighlight {
  id: string;
  title: string;
  category: string;
  metric: string;
  description: string;
  technicalDetails: string[];
  icon: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
}

export interface CertificationItem {
  code: string;
  title: string;
  issuer: string;
  badgeColor: string;
  verifiedYear: string;
  skills: string[];
}
