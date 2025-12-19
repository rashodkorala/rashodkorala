export interface CaseStudy {
  id: string;
  user_id: string;
  title: string;
  slug: string;
  summary: string | null;
  type: 'problem-solving' | 'descriptive';
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  published_at: string | null;

  // Subject & Context
  subject_name: string | null;
  subject_type: string | null;
  industry: string | null;
  audience: string | null;

  // Team & Timeline
  role: string | null;
  team_size: string | null;
  timeline: string | null;

  // Technical (JSONB)
  tags: string[] | null;
  skills: string[] | null;
  stack: string[] | null;

  // Media
  cover_url: string | null;
  gallery_urls: string[] | null;

  // Proof (JSONB)
  links: Array<{ label: string; url: string }> | null;
  results: Array<{ text: string }> | null;
  metrics: Array<{ label: string; value: string }> | null;

  // MDX
  mdx_path: string | null;

  // SEO
  seo_title: string | null;
  seo_description: string | null;

  // System
  views: number;
  created_at: string;
  updated_at: string;
}

export interface CaseStudyWithMDX extends CaseStudy {
  mdx_content: string | null;
}
