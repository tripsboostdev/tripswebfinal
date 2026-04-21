import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { SITE_CONFIG } from "@/lib/config";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/works", label: "Works" },
  { to: "/services", label: "Services" },
  { to: "/growth", label: "Growth" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt={`${SITE_CONFIG.brand} logo`}
              className="h-9 w-9 rounded-lg object-cover ring-1 ring-border transition-transform group-hover:scale-105"
            />
            <span className="font-display text-base font-semibold tracking-tight">
              {SITE_CONFIG.brand}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-foreground bg-secondary" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary-glow hover:shadow-[0_0_30px_-5px_var(--primary)]"
          >
            Start a project
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden rounded-lg p-2 text-foreground hover:bg-secondary"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-3 space-y-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-secondary text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
                className="block rounded-lg px-4 py-3 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
