/**
 * TRIPS DEVELOPMENT — Site Configuration
 *
 * Replace these values with your real ones.
 * The Sanity Project ID is also read from VITE_SANITY_PROJECT_ID env var if available.
 */

export const SITE_CONFIG = {
  brand: "Trips Development",
  tagline: "Next-Gen Design & Web Solutions",
  description:
    "World-class web development, branding, and digital growth services. Crafted for ambitious brands.",

  // TODO: Replace with your real WhatsApp number in international format (no +, no spaces)
  // Example: "2348012345678"
  whatsappNumber: "2348000000000",
  whatsappMessage: "Hi Trips Development! I'd like to discuss a project.",

  email: "hello@tripsdevelopment.com",

  social: {
    twitter: "https://x.com/",
    linkedin: "https://linkedin.com/",
    instagram: "https://instagram.com/",
  },
} as const;

export const SANITY_CONFIG = {
  // TODO: Replace with your real Sanity Project ID, OR set VITE_SANITY_PROJECT_ID in your env
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "your-project-id",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
} as const;

export const whatsappLink = () =>
  `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;
