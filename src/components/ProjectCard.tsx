import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ProjectListItem } from "@/lib/types";
import { isSanityConfigured, urlFor } from "@/lib/sanity";

interface Props {
  project: ProjectListItem;
  priority?: boolean;
}

function getImageUrl(cover?: ProjectListItem["coverImage"]) {
  if (!cover) return undefined;
  if (cover.url) return cover.url;
  if (isSanityConfigured() && cover.asset) {
    return urlFor(cover).width(1200).height(800).fit("crop").auto("format").url();
  }
  return undefined;
}

export function ProjectCard({ project }: Props) {
  const imageUrl = getImageUrl(project.coverImage);

  return (
    <Link
      to="/works/$slug"
      params={{ slug: project.slug }}
      className="group relative block overflow-hidden rounded-2xl glass-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-elevated">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            <span className="font-display text-2xl">{project.title.charAt(0)}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
        <div className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/60 backdrop-blur-md text-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <div className="relative p-5">
        <span className="inline-block rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          {project.category}
        </span>
        <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-foreground">
          {project.title}
        </h3>
        {project.excerpt && (
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {project.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}
