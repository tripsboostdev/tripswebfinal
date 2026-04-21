import { Link } from "@tanstack/react-router";
import { Mail, Twitter, Linkedin, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { SITE_CONFIG, whatsappLink } from "@/lib/config";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40 mt-32">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="" className="h-10 w-10 rounded-lg object-cover ring-1 ring-border" />
              <span className="font-display text-lg font-semibold">{SITE_CONFIG.brand}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/works" className="hover:text-primary-glow transition">Works</Link></li>
              <li><Link to="/services" className="hover:text-primary-glow transition">Services</Link></li>
              <li><Link to="/growth" className="hover:text-primary-glow transition">Growth</Link></li>
              <li><Link to="/contact" className="hover:text-primary-glow transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={SITE_CONFIG.social.twitter} target="_blank" rel="noreferrer" aria-label="X / Twitter"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/20 transition">
                <Twitter size={16} />
              </a>
              <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/20 transition">
                <Linkedin size={16} />
              </a>
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/20 transition">
                <Instagram size={16} />
              </a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/20 transition">
                <MessageCircle size={16} />
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} aria-label="Email"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/20 transition">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.brand}. Crafted with intent.
          </p>
          <p className="text-xs text-muted-foreground">
            Web & Graphic Design · 5 years of experience
          </p>
        </div>
      </div>
    </footer>
  );
}
