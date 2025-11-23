import { supabase } from '../supabase';
import { Project } from '../types';

export async function getAllProjects(): Promise<Project[]> {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: true });

    if (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }

    return data || [];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error) {
        console.error('Error fetching project:', error);
        return null;
    }

    return data;
}

// Keep this for backward compatibility if needed
export async function getProjectById(id: number): Promise<Project | null> {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('Error fetching project:', error);
        return null;
    }

    return data;
}

