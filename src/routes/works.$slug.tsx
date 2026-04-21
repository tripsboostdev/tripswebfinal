import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import { fetchProjectBySlug } from "@/lib/queries";
import { isSanityConfigured, urlFor } from "@/lib/sanity";
import { SITE_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/works/$slug")({
  loader: async ({ params }) => {
    const project = await fetchProjectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: `Project — ${SITE_CONFIG.brand}` }] };
    const cover = loaderData.coverImage;
    const ogImage =
      cover?.url ||
      (isSanityConfigured() && cover?.asset
        ? urlFor(cover).width(1200).height(630).fit("crop").url()
        : undefined);
    return {
      meta: [
        { title: `${loaderData.title} — ${SITE_CONFIG.brand}` },
        { name: "description", content: loaderData.excerpt || loaderData.description?.slice(0, 160) || "" },
        { property: "og:title", content: `${loaderData.title} — ${SITE_CONFIG.brand}` },
        { property: "og:description", content: loaderData.excerpt || "" },
        ...(ogImage
          ? [
              { property: "og:image", content: ogImage },
              { name: "twitter:image", content: ogImage },
            ]
          : []),
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetailPage,
});

function ProjectNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-32">
      <div className="text-center max-w-md">
        <h1 className="font-display text-3xl font-semibold">Project not found</h1>
        <p className="mt-3 text-muted-foreground">
          This project may have been moved or doesn't exist yet.
        </p>
        <Link to="/works" className="mt-6 inline-flex items-center gap-2 text-primary-glow hover:text-primary">
          <ArrowLeft size={16} /> Back to all works
        </Link>
      </div>
    </div>
  );
}

function getCoverUrl(cover?: { url?: string; asset?: { _ref?: string } }) {
  if (!cover) return undefined;
  if (cover.url) return cover.url;
  if (isSanityConfigured() && cover.asset) {
    return urlFor(cover).width(2000).auto("format").url();
  }
  return undefined;
}

function ProjectDetailPage() {
  const project = Route.useLoaderData();
  const coverUrl = getCoverUrl(project.coverImage);

  return (
    <article>
      {/* Header */}
      <header className="relative pt-32 md:pt-40 pb-12">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <Link to="/works" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
              <ArrowLeft size={14} /> All works
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <span className="mt-8 inline-block rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {project.category}
            </span>
          </Reveal>

          <Reveal delay={160}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              <span className="text-gradient">{project.title}</span>
            </h1>
          </Reveal>

          {project.excerpt && (
            <Reveal delay={240}>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{project.excerpt}</p>
            </Reveal>
          )}

          {(project.client || project.role || project.year || project.liveUrl) && (
            <Reveal delay={320}>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl glass">
                {project.client && (
                  <Meta label="Client" value={project.client} />
                )}
                {project.role && <Meta label="Role" value={project.role} />}
                {project.year && <Meta label="Year" value={project.year} />}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="bg-surface/40 p-4 hover:bg-surface transition group">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Live</div>
                    <div className="mt-1 flex items-center gap-1.5 text-sm font-medium">
                      Visit site <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </a>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </header>

      {/* Cover */}
      {coverUrl && (
        <Reveal delay={400}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="overflow-hidden rounded-3xl glass-card">
              <img src={coverUrl} alt={project.title} className="w-full h-auto object-cover" />
            </div>
          </div>
        </Reveal>
      )}

      {/* Description */}
      {project.description && (
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                {project.description}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-10 text-gradient">
              Project Gallery
            </h2>
          </Reveal>
          <Gallery blocks={project.gallery || []} />
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h3 className="font-display text-3xl md:text-4xl font-semibold">
              Have a project in mind?
            </h3>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow transition"
            >
              Let's talk
            </Link>
          </Reveal>
        </div>
      </section>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface/40 p-4">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-medium">{value}</div>
    </div>
  );
}
