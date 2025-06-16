export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  technologies: string[];
  category: string;
  date: string;
  github: string;
  demo: string;
  features: string[];
  status?: "completed" | "in-progress" | "planned";
  featured?: boolean;
  clientWork?: boolean;
  teamSize?: number;
  duration?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  period: string;
  type: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship";
  description: string;
  achievements: string[];
  technologies: string[];
  projects: string[];
  companyLogo?: string;
  companyUrl?: string;
  current?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: "programming" | "framework" | "tool" | "database" | "cloud" | "soft";
  icon?: string;
  yearsOfExperience?: number;
  projects?: number;
}

export interface SkillCategory {
  category: string;
  items: string[];
  icon: any; // Lucide icon component
  color: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa?: number;
  location: string;
  description?: string;
  achievements?: string[];
  relevantCourses?: string[];
  logo?: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  expiryDate?: string;
  skills: string[];
  logo?: string;
}

export interface ContactInfo {
  icon: any; // Lucide icon component
  label: string;
  value: string;
  href: string;
  color: string;
  description?: string;
}

export interface SocialLink {
  icon: any; // Lucide icon component
  label: string;
  href: string;
  color: string;
  username?: string;
  followers?: number;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  date: string;
  projectRelated?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags: string[];
  category: string;
  readTime: number;
  featured?: boolean;
  image?: string;
  views?: number;
  likes?: number;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  type: "award" | "recognition" | "milestone" | "publication";
  issuer?: string;
  credentialUrl?: string;
  image?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: any; // Lucide icon component
  features: string[];
  pricing?: {
    type: "fixed" | "hourly" | "project";
    amount?: number;
    currency?: string;
    note?: string;
  };
  duration?: string;
  deliverables?: string[];
}

export interface Stats {
  number: string;
  label: string;
  description?: string;
  icon?: any; // Lucide icon component
  color?: string;
}

export interface Timeline {
  id: number;
  title: string;
  date: string;
  description: string;
  type: "work" | "education" | "project" | "achievement";
  icon?: any; // Lucide icon component
  color?: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: any; // Lucide icon component
  external?: boolean;
}

export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
  phone?: string;
  budget?: string;
  timeline?: string;
  projectType?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface UserPreferences {
  theme: "light" | "dark" | "system";
  reducedMotion: boolean;
  language: string;
  currency: string;
  timezone: string;
}

export interface MetaData {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  og: {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
    creator: string;
  };
}

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface MotionProps {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
  whileInView?: any;
  viewport?: any;
}

export interface FilterOptions {
  category?: string;
  technology?: string;
  year?: string;
  type?: string;
  status?: string;
  featured?: boolean;
}

export interface SortOptions {
  field: string;
  order: "asc" | "desc";
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisible?: number;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string;
  progress?: number;
}

export interface FeatureFlag {
  name: string;
  enabled: boolean;
  description?: string;
  rolloutPercentage?: number;
}

export interface Config {
  siteUrl: string;
  siteName: string;
  siteDescription: string;
  author: {
    name: string;
    email: string;
    social: {
      github: string;
      linkedin: string;
      twitter: string;
    };
  };
  analytics: {
    googleAnalyticsId?: string;
    hotjarId?: string;
  };
  features: FeatureFlag[];
}

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Event Types
export type ContactFormSubmitEvent = CustomEvent<FormData>;
export type ThemeChangeEvent = CustomEvent<{ theme: string }>;
export type ProjectViewEvent = CustomEvent<{ projectId: number }>;

// Component Variants
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
export type CardVariant = "default" | "glass" | "gradient" | "elevated";
export type AlertType = "success" | "error" | "warning" | "info";

// Animation Types
export type AnimationType = "fade" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scale" | "rotate";
export type EasingType = "linear" | "easeIn" | "easeOut" | "easeInOut" | "spring";

// Responsive Breakpoints
export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

// Status Types
export type ProjectStatus = "planning" | "in-progress" | "completed" | "on-hold" | "cancelled";
export type PublishStatus = "draft" | "published" | "archived";
export type Priority = "low" | "medium" | "high" | "urgent";

// Permission Types
export type Permission = "read" | "write" | "admin";
export type Role = "visitor" | "user" | "admin" | "super-admin";