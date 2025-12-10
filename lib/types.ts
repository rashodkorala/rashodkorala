export type ProjectCategory = 'startup' | 'client' | 'personal' | 'school';
export type ProjectStatus = 'draft' | 'published' | 'archived';

export interface Project {
  id: string; // UUID
  user_id: string; // UUID
  slug: string; // URL-friendly slug (e.g., "getfit", "small-business-website")
  title: string;
  subtitle?: string;
  problem?: string;
  solution?: string;
  roles?: string[]; // Array of roles
  features?: string[]; // Array of features
  tech?: string[]; // Array of technologies
  live_url?: string;
  github_url?: string;
  case_study_url?: string;
  cover_image_url?: string;
  gallery_image_urls?: string[]; // Array of gallery image URLs
  category?: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

