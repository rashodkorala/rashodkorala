import { supabase } from '../supabase';
import { Project } from '../types';

/**
 * Get all published projects, ordered by sort_order and created_at
 */
export async function getAllProjects(): Promise<Project[]> {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'published')
        .order('sort_order', { ascending: true })
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }

    return data || [];
}

/**
 * Get a published project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

    if (error) {
        console.error('Error fetching project:', error);
        return null;
    }

    return data;
}

/**
 * Get featured projects
 */
export async function getFeaturedProjects(): Promise<Project[]> {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'published')
        .eq('featured', true)
        .order('sort_order', { ascending: true })
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching featured projects:', error);
        throw error;
    }

    return data || [];
}

/**
 * Get projects by category
 */
export async function getProjectsByCategory(category: Project['category']): Promise<Project[]> {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'published')
        .eq('category', category)
        .order('sort_order', { ascending: true })
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching projects by category:', error);
        throw error;
    }

    return data || [];
}

