import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2, ShoppingBag, Palette, TrendingUp, Smartphone, Megaphone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SITE_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Services — ${SITE_CONFIG.brand}` },
      { name: "description", content: "Web development, e-commerce, branding, and digital growth services." },
      { property: "og:title", content: `Services — ${SITE_CONFIG.brand}` },
      { property: "og:description", content: "Web development, e-commerce, branding, and digital growth services." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Custom-coded websites and apps using React, TypeScript, and modern tooling. Fast, secure, scalable.",
    features: ["Custom React/TS builds", "Performance optimization", "CMS integration", "SEO architecture"],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    desc: "Headless and traditional storefronts engineered for conversion. From Shopify to fully custom.",
    features: ["Shopify & headless setups", "Custom checkout flows", "Payment integration", "Analytics dashboards"],
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    desc: "Strategic brand identity systems — logo, type, color, voice, and the rules to keep them consistent.",
    features: ["Logo design", "Type & color systems", "Brand guidelines", "Visual storytelling"],
  },
  {
    icon: TrendingUp,
    title: "Social Media Growth",
    desc: "Engineered audience growth packages across all major platforms. Real engagement, no bots.",
    features: ["Followers & engagement", "Content strategy", "Multi-platform campaigns", "Analytics reporting"],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    desc: "Pixel-perfect responsive interfaces that look incredible on every device, every breakpoint.",
    features: ["Responsive UI/UX", "Mobile prototypes", "Cross-device testing", "Accessibility"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Paid campaigns, content marketing, and conversion-focused funnels that turn traffic into revenue.",
    features: ["Meta & Google Ads", "Funnel design", "Email marketing", "ROI tracking"],
  },
] as const;

function ServicesPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">Services</p>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl font-semibold tracking-tight">
              Built for <span className="text-gradient-primary">ambitious</span> brands.
            </h1>
            <p className="mt-5 max-w-xl text-muted-foreground">
              A full-stack design and development practice. Whether you need a single landing page or a complete digital ecosystem — I've got you.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group relative h-full rounded-2xl glass-card p-8">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-primary-glow/10 text-primary-glow ring-1 ring-primary/20">
                    <s.icon size={24} strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 size={14} className="text-primary-glow flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-glow transition">
              Discuss your project <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
