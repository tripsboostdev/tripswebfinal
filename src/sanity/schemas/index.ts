import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          "Web Development",
          "E-Commerce",
          "Branding",
          "Social Media",
          "Mobile App",
          "Graphic Design",
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "client", type: "string" }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "year", type: "string" }),
    defineField({ name: "liveUrl", title: "Live URL", type: "url" }),
    defineField({ name: "publishedAt", title: "Published at", type: "datetime" }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 2,
      description: "Short one-liner shown on the works grid",
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 6,
      description: "Full project description shown on the detail page",
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery (mixed media — 20+ items supported)",
      type: "array",
      of: [
        { type: "imageBlock" },
        { type: "videoBlock" },
        { type: "beforeAfterBlock" },
        { type: "textBlock" },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
});

export const imageBlock = defineType({
  name: "imageBlock",
  title: "Image",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({ name: "caption", type: "string" }),
    defineField({
      name: "layout",
      type: "string",
      options: { list: ["full", "half", "third"], layout: "radio" },
      initialValue: "full",
    }),
  ],
  preview: {
    select: { title: "caption", media: "image" },
    prepare: ({ title, media }) => ({ title: title || "Image", media }),
  },
});

export const videoBlock = defineType({
  name: "videoBlock",
  title: "Video Embed",
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "Video URL (YouTube / Vimeo / mp4)",
      type: "url",
      validation: (r) => r.required(),
    }),
    defineField({ name: "caption", type: "string" }),
  ],
});

export const beforeAfterBlock = defineType({
  name: "beforeAfterBlock",
  title: "Before / After",
  type: "object",
  fields: [
    defineField({ name: "before", type: "image", options: { hotspot: true } }),
    defineField({ name: "after", type: "image", options: { hotspot: true } }),
    defineField({ name: "caption", type: "string" }),
  ],
});

export const textBlock = defineType({
  name: "textBlock",
  title: "Text Section",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string" }),
    defineField({ name: "body", type: "text", rows: 4, validation: (r) => r.required() }),
  ],
});

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "icon", type: "string", description: "lucide-react icon name" }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "order", type: "number" }),
  ],
});

export const growthPlan = defineType({
  name: "growthPlan",
  title: "Growth Plan",
  type: "document",
  fields: [
    defineField({ name: "platform", type: "string" }),
    defineField({ name: "metric", type: "string", description: "e.g. Followers, Likes, Views" }),
    defineField({ name: "quantity", type: "number" }),
    defineField({ name: "price", type: "number" }),
    defineField({ name: "popular", type: "boolean" }),
  ],
});

export const schemaTypes = [
  project,
  imageBlock,
  videoBlock,
  beforeAfterBlock,
  textBlock,
  service,
  growthPlan,
];
