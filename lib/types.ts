export interface Project {
  id: number;
  title: string;
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

