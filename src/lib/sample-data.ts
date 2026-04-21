import type { Project } from "./types";

/**
 * Fallback content shown when Sanity is not yet configured.
 * Once VITE_SANITY_PROJECT_ID is set and projects exist, real Sanity data takes over.
 */
export const SAMPLE_PROJECTS: Project[] = [
  {
    _id: "sample-1",
    title: "Aurora Finance Platform",
    slug: "aurora-finance",
    category: "Web Development",
    excerpt: "A premium fintech dashboard with real-time data visualization and seamless UX.",
    description:
      "Built a complete trading interface from the ground up — from design system to backend integration. Features include real-time market data, custom chart components, and a responsive multi-portfolio view.",
    client: "Aurora Capital",
    role: "Lead Designer & Developer",
    year: "2024",
    coverImage: { url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80" },
    gallery: [
      {
        _key: "g1",
        _type: "imageBlock",
        image: { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80" },
        caption: "Dashboard overview",
        layout: "full",
      },
      {
        _key: "g2",
        _type: "imageBlock",
        image: { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" },
        layout: "half",
      },
      {
        _key: "g3",
        _type: "imageBlock",
        image: { url: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&q=80" },
        layout: "half",
      },
    ],
  },
  {
    _id: "sample-2",
    title: "Nova Commerce",
    slug: "nova-commerce",
    category: "E-Commerce",
    excerpt: "Headless commerce experience with conversion-focused product storytelling.",
    description:
      "End-to-end e-commerce build with custom checkout flow, AR product previews, and optimized for mobile-first shopping.",
    client: "Nova Apparel",
    role: "Designer & Developer",
    year: "2024",
    coverImage: { url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80" },
    gallery: [
      {
        _key: "g1",
        _type: "imageBlock",
        image: { url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80" },
        layout: "full",
      },
    ],
  },
  {
    _id: "sample-3",
    title: "Helix Brand Identity",
    slug: "helix-brand",
    category: "Branding",
    excerpt: "Complete visual identity system for a biotech startup.",
    description:
      "Logo design, type system, color palette, and brand guidelines delivered as a full design system.",
    client: "Helix Labs",
    role: "Brand Designer",
    year: "2023",
    coverImage: { url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1600&q=80" },
    gallery: [],
  },
  {
    _id: "sample-4",
    title: "Pulse Social Campaign",
    slug: "pulse-social",
    category: "Social Media",
    excerpt: "30-day growth campaign that scaled engagement by 340%.",
    description:
      "Strategy, creative direction, and execution of a multi-platform launch campaign.",
    client: "Pulse Beverages",
    role: "Creative Director",
    year: "2024",
    coverImage: { url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&q=80" },
    gallery: [],
  },
];
