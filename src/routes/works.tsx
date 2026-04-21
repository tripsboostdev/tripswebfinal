import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { fetchProjects } from "@/lib/queries";
import { SITE_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: `Works — ${SITE_CONFIG.brand}` },
      { name: "description", content: "Selected projects across web development, e-commerce, branding, and digital growth." },
      { property: "og:title", content: `Works — ${SITE_CONFIG.brand}` },
      { property: "og:description", content: "Selected projects across web development, e-commerce, branding, and digital growth." },
    ],
  }),
  loader: () => fetchProjects(),
  component: WorksPage,
});

function WorksPage() {
  const projects = Route.useLoaderData();
  const [filter, setFilter] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [projects]);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">Portfolio</p>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl font-semibold tracking-tight">
              Every project tells a <span className="text-gradient-primary">story</span>.
            </h1>
            <p className="mt-5 max-w-xl text-muted-foreground">
              A curated selection of recent work — case studies that show how design, code, and strategy come together.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p._id} delay={i * 60}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
