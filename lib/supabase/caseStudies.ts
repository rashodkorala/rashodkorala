'use server';

import { supabase } from '../supabase';
import { CaseStudy, CaseStudyWithMDX } from '@/lib/types/caseStudy';

/**
 * Fetch MDX content from Supabase Storage
 */
export async function fetchMdxFromStorage(mdxPath: string): Promise<string | null> {
  try {

    const { data, error } = await supabase.storage
      .from('case-studies-mdx')
      .download(mdxPath);

    if (error) {
      console.error('Error fetching MDX from storage:', error);
      return null;
    }

    const text = await data.text();
    return text;
  } catch (error) {
    console.error('Error reading MDX content:', error);
    return null;
  }
}

/**
 * Get all published case studies (for public listing)
 */
export async function getPublishedCaseStudies(): Promise<CaseStudy[]> {
  try {

    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching case studies:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getPublishedCaseStudies:', error);
    return [];
  }
}

/**
 * Get a single published case study by slug (for public view)
 */
export async function getCaseStudyBySlug(slug: string): Promise<CaseStudyWithMDX | null> {
  try {

    // Fetch metadata
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error) {
      console.error('Error fetching case study:', error);
      return null;
    }

    if (!data) return null;

    // Fetch MDX content if path exists
    let mdxContent = null;
    if (data.mdx_path) {
      mdxContent = await fetchMdxFromStorage(data.mdx_path);
    }

    // Increment views
    await supabase
      .from('case_studies')
      .update({ views: (data.views || 0) + 1 })
      .eq('id', data.id);

    return {
      ...data,
      mdx_content: mdxContent
    };
  } catch (error) {
    console.error('Error in getCaseStudyBySlug:', error);
    return null;
  }
}

/**
 * Get featured case studies for homepage
 */
export async function getFeaturedCaseStudies(limit: number = 2): Promise<CaseStudy[]> {
  try {

    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('status', 'published')
      .eq('featured', true)
      .order('published_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching featured case studies:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getFeaturedCaseStudies:', error);
    return [];
  }
}

/**
 * Get case study statistics
 */
export async function getCaseStudyStats(caseStudyId: string) {
  try {

    const { data, error } = await supabase
      .from('case_studies')
      .select('views, created_at, published_at')
      .eq('id', caseStudyId)
      .single();

    if (error) {
      console.error('Error fetching case study stats:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in getCaseStudyStats:', error);
    return null;
  }
}
