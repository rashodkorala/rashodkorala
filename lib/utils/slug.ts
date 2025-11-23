/**
 * Converts a string to a URL-friendly slug
 * @param text - The text to convert to a slug
 * @returns A URL-friendly slug
 * 
 * @example
 * slugify("GetFit App") // "getfit-app"
 * slugify("Small Business Website") // "small-business-website"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces, underscores, and multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Converts a slug back to a readable title (basic implementation)
 * @param slug - The slug to convert
 * @returns A readable title
 * 
 * @example
 * deslugify("getfit-app") // "Getfit App"
 */
export function deslugify(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

