import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SITE_CONFIG, whatsappLink } from "@/lib/config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${SITE_CONFIG.brand}` },
      { name: "description", content: "Start a project, ask a question, or just say hi. Let's build something great together." },
      { property: "og:title", content: `Contact — ${SITE_CONFIG.brand}` },
      { property: "og:description", content: "Start a project, ask a question, or just say hi." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">Contact</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-semibold tracking-tight">
            Let's build something <span className="text-gradient-primary">remarkable</span>.
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Tell me about your project, your goals, and your timeline — I usually reply within 24 hours.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="group block h-full rounded-2xl glass-card p-8 transition"
            >
              <MessageCircle size={28} className="text-primary-glow" />
              <h3 className="mt-5 font-display text-2xl font-semibold">WhatsApp</h3>
              <p className="mt-2 text-sm text-muted-foreground">Fastest way to reach me — usually under an hour.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-glow">
                Start a chat <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>

          <Reveal delay={120}>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="group block h-full rounded-2xl glass-card p-8 transition"
            >
              <Mail size={28} className="text-primary-glow" />
              <h3 className="mt-5 font-display text-2xl font-semibold">Email</h3>
              <p className="mt-2 text-sm text-muted-foreground">{SITE_CONFIG.email}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-glow">
                Send a message <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-12 rounded-2xl glass-card p-8">
            <h3 className="font-display text-lg font-semibold">Find me elsewhere</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={SITE_CONFIG.social.twitter} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm hover:bg-primary/20 transition">
                <Twitter size={14} /> X / Twitter
              </a>
              <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm hover:bg-primary/20 transition">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm hover:bg-primary/20 transition">
                <Instagram size={14} /> Instagram
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
