import { sanityClient, isSanityConfigured } from "./sanity";
import type { Project, ProjectListItem } from "./types";
import { SAMPLE_PROJECTS } from "./sample-data";

const projectListQuery = `*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  excerpt,
  coverImage,
  publishedAt
}`;

const projectDetailQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  category,
  client,
  role,
  year,
  liveUrl,
  excerpt,
  description,
  coverImage,
  gallery
}`;

export async function fetchProjects(): Promise<ProjectListItem[]> {
  if (!isSanityConfigured()) {
    return SAMPLE_PROJECTS.map(({ gallery: _g, description: _d, ...p }) => p);
  }
  return sanityClient.fetch<ProjectListItem[]>(projectListQuery);
}

export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  if (!isSanityConfigured()) {
    return SAMPLE_PROJECTS.find((p) => p.slug === slug) ?? null;
  }
  return sanityClient.fetch<Project | null>(projectDetailQuery, { slug });
}
