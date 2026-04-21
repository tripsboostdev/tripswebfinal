import { createFileRoute } from "@tanstack/react-router";
import { Check, Sparkles, Shield, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { whatsappLink, SITE_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/growth")({
  head: () => ({
    meta: [
      { title: `Social Growth — ${SITE_CONFIG.brand}` },
      { name: "description", content: "Premium social media growth packages — followers, likes, views, and engagement." },
      { property: "og:title", content: `Social Growth — ${SITE_CONFIG.brand}` },
      { property: "og:description", content: "Premium social media growth packages — followers, likes, views, and engagement." },
    ],
  }),
  component: GrowthPage,
});

interface Plan {
  platform: string;
  metric: string;
  tiers: { qty: string; price: string; popular?: boolean }[];
}

const PLANS: Plan[] = [
  {
    platform: "Instagram",
    metric: "Followers",
    tiers: [
      { qty: "1,000", price: "$15" },
      { qty: "5,000", price: "$60", popular: true },
      { qty: "10,000", price: "$110" },
    ],
  },
  {
    platform: "Instagram",
    metric: "Likes",
    tiers: [
      { qty: "1,000", price: "$8" },
      { qty: "5,000", price: "$30", popular: true },
      { qty: "10,000", price: "$55" },
    ],
  },
  {
    platform: "TikTok",
    metric: "Followers",
    tiers: [
      { qty: "1,000", price: "$12" },
      { qty: "5,000", price: "$50", popular: true },
      { qty: "10,000", price: "$95" },
    ],
  },
  {
    platform: "YouTube",
    metric: "Subscribers",
    tiers: [
      { qty: "500", price: "$20" },
      { qty: "1,000", price: "$35", popular: true },
      { qty: "5,000", price: "$160" },
    ],
  },
  {
    platform: "X / Twitter",
    metric: "Followers",
    tiers: [
      { qty: "1,000", price: "$18" },
      { qty: "5,000", price: "$80", popular: true },
      { qty: "10,000", price: "$150" },
    ],
  },
  {
    platform: "YouTube",
    metric: "Views",
    tiers: [
      { qty: "10,000", price: "$25" },
      { qty: "50,000", price: "$110", popular: true },
      { qty: "100,000", price: "$200" },
    ],
  },
];

const TRUST = [
  { icon: Shield, title: "Safe & secure", desc: "No password required. Compliant delivery — your account stays safe." },
  { icon: Zap, title: "Fast delivery", desc: "Most orders begin within 24 hours and complete inside a week." },
  { icon: Sparkles, title: "Real-feel growth", desc: "Quality engagement designed to look and behave organically." },
];

function GrowthPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary-glow ring-1 ring-primary/30">
              <Sparkles size={12} /> Growth Services
            </div>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl font-semibold tracking-tight">
              Boost your <span className="text-gradient-primary">social presence</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              Engineered growth packages across the platforms that matter. Real-feel engagement, fast delivery, and zero risk to your account.
            </p>
          </div>
        </Reveal>

        {/* Trust badges */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {TRUST.map((t, i) => (
            <Reveal key={t.title} delay={i * 80}>
              <div className="rounded-2xl glass-card p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary-glow">
                  <t.icon size={18} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Plans */}
        <Reveal>
          <h2 className="mt-24 font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Choose your <span className="text-gradient-primary">plan</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={`${plan.platform}-${plan.metric}`} delay={i * 60}>
              <div className="rounded-2xl glass-card p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{plan.platform}</p>
                    <h3 className="mt-1 font-display text-xl font-semibold">{plan.metric}</h3>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {plan.tiers.map((tier) => (
                    <div
                      key={tier.qty}
                      className={`flex items-center justify-between rounded-xl border p-4 transition ${
                        tier.popular
                          ? "border-primary/40 bg-primary/10"
                          : "border-border bg-surface/40 hover:border-primary/30"
                      }`}
                    >
                      <div>
                        <div className="font-display text-lg font-semibold">{tier.qty}</div>
                        {tier.popular && (
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-primary-glow">
                            Most popular
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="font-display text-xl font-semibold text-gradient-primary">{tier.price}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow transition"
                >
                  Order via WhatsApp
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Custom CTA */}
        <Reveal>
          <div className="mt-24 rounded-3xl glass-card p-10 md:p-14 text-center">
            <Check size={32} className="mx-auto text-primary-glow" />
            <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold">
              Need a <span className="text-gradient-primary">custom package</span>?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Bigger numbers, multiple platforms, or full-service campaign management — let's build something tailored.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-glow transition"
            >
              Get a custom quote
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
