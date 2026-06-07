/**
 * Returns the full URL for an image hosted on your public Cloudflare R2 bucket.
 * Make sure to set VITE_R2_PUBLIC_URL in your environment variables.
 * 
 * @param filename The name of the file in your R2 bucket (e.g., 'artwork-1.jpg')
 * @param fallbackUrl An optional fallback URL to return if the environment variable is not set
 */
export function getR2ImageUrl(filename: string, fallbackUrl?: string): string {
  const baseUrl = import.meta.env.VITE_R2_PUBLIC_URL;
  
  if (!baseUrl) {
    if (fallbackUrl) {
       return fallbackUrl;
    }
    console.warn("VITE_R2_PUBLIC_URL is not defined in environment variables.");
    return "";
  }

  // Remove trailing slashes from the base URL and leading slashes from filename
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const cleanFilename = filename.replace(/^\/+/, '');
  
  return `${cleanBase}/${cleanFilename}`;
}
