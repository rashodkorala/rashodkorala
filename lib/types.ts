export interface Project {
  id: number;
  title: string;
  slug: string; // URL-friendly slug (e.g., "getfit", "small-business-website")
  description: string;
  about: string;
  image: string[]; // Array of image URLs
  Imagewidth?: number;
  height?: number;
  link?: string;
  linkText?: string;
  tags: string[];
  slidesToShow?: number;
  video?: string;
  created_at?: string;
  updated_at?: string;
}

