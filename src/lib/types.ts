export interface ProjectListItem {
  _id: string;
  title: string;
  slug: string;
  category: string;
  excerpt?: string;
  coverImage?: { asset?: { _ref?: string }; url?: string };
  publishedAt?: string;
}

export type GalleryBlock =
  | { _key: string; _type: "imageBlock"; image: { url?: string }; caption?: string; layout?: "full" | "half" | "third" }
  | { _key: string; _type: "videoBlock"; url: string; caption?: string }
  | { _key: string; _type: "beforeAfterBlock"; before: { url?: string }; after: { url?: string }; caption?: string }
  | { _key: string; _type: "textBlock"; heading?: string; body: string };

export interface Project extends ProjectListItem {
  client?: string;
  role?: string;
  year?: string;
  liveUrl?: string;
  description?: string;
  gallery?: GalleryBlock[];
}
