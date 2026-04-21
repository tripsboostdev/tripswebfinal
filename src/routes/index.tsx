import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Code2,
  ShoppingBag,
  Palette,
  TrendingUp,
  Smartphone,
  Megaphone,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { fetchProjects } from "@/lib/queries";
import { SITE_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE_CONFIG.brand} — ${SITE_CONFIG.tagline}` },
      { name: "description", content: SITE_CONFIG.description },
      { property: "og:title", content: `${SITE_CONFIG.brand} — ${SITE_CONFIG.tagline}` },
      { property: "og:description", content: SITE_CONFIG.description },
    ],
  }),
  loader: () => fetchProjects(),
  component: HomePage,
});

const SERVICES = [
  { icon: Code2, title: "Web Development", desc: "High-performance, custom-built websites and web apps using modern stacks." },
  { icon: ShoppingBag, title: "E-Commerce", desc: "Conversion-driven storefronts with seamless checkout and headless backends." },
  { icon: Palette, title: "Branding & Identity", desc: "Logos, type systems, and visual identity that make your brand memorable." },
  { icon: TrendingUp, title: "Social Media Growth", desc: "Real audience growth through strategy, content, and platform optimization." },
  { icon: Smartphone, title: "Mobile-First Design", desc: "Pixel-perfect responsive UIs that perform on every device and breakpoint." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Campaigns, ads, and content that turn impressions into revenue." },
] as const;

const STATS = [
  { value: "5+", label: "Years experience" },
  { value: "80+", label: "Projects shipped" },
  { value: "40+", label: "Happy clients" },
  { value: "12", label: "Industries served" },
];

function HomePage() {
  const projects = Route.useLoaderData();
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
                Available for new projects · Q1 2026
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-7 font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
                <span className="text-gradient">Next-Gen Design</span>
                <br />
                <span className="text-foreground">& Web Solutions</span>
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p className="mx-auto mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                I'm a Web & Graphic Designer with 5+ years of experience building premium digital products
                for ambitious brands. From identity systems to full-stack web apps — engineered with intent.
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/works"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-glow hover:shadow-[0_0_40px_-5px_var(--primary)]"
                >
                  See my work
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-secondary"
                >
                  Start a project
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Stats strip */}
          <Reveal delay={480}>
            <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl glass md:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-surface/40 p-6 text-center">
                  <div className="font-display text-3xl font-semibold text-gradient-primary">{s.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">What I do</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
                Services built for <span className="text-gradient-primary">growth</span>
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                A full-stack design and development practice — strategy, brand, build, and beyond.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <div className="group relative h-full rounded-2xl glass-card p-7">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-primary-glow/10 text-primary-glow ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                    <service.icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 text-center">
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-glow hover:text-primary transition">
                Explore all services
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED WORKS */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">
                  Selected works
                </p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
                  Recent <span className="text-gradient-primary">projects</span>
                </h2>
              </div>
              <Link to="/works" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary-glow transition">
                View all works <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p._id} delay={i * 100}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GROWTH TEASER */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl glass-card p-10 md:p-16">
              <div className="absolute inset-0 opacity-30 grid-pattern pointer-events-none" />
              <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary-glow ring-1 ring-primary/30">
                    <Sparkles size={12} /> Growth Services
                  </div>
                  <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold tracking-tight">
                    Scale your <span className="text-gradient-primary">social presence</span>.
                  </h2>
                  <p className="mt-4 max-w-md text-muted-foreground">
                    Real, organic-feel growth across Instagram, X, TikTok, and YouTube. No bots — just engineered momentum.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                    {["Verified-quality followers", "Engagement boost packages", "Custom growth strategies"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary-glow" /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      to="/growth"
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow transition"
                    >
                      View growth plans <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl" />
                  <div className="relative grid grid-cols-2 gap-3">
                    {[
                      { label: "Followers", value: "+12.4K" },
                      { label: "Likes", value: "+87K" },
                      { label: "Reach", value: "+340%" },
                      { label: "Avg ROI", value: "5.2×" },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-2xl glass p-5 text-center animate-float" style={{ animationDelay: `${Math.random() * 2}s` }}>
                        <div className="font-display text-2xl font-semibold text-gradient-primary">{stat.value}</div>
                        <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
