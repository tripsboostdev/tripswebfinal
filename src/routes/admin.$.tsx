import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ComponentType } from "react";
import { isSanityConfigured } from "@/lib/sanity";
import { SANITY_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/admin/$")({
  head: () => ({
    meta: [
      { title: "Studio — Trips Development" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [Studio, setStudio] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Browser-only — never runs during SSR
    if (typeof window === "undefined") return;
    if (!isSanityConfigured()) return;

    let cancelled = false;
    (async () => {
      try {
        const [{ Studio: SanityStudio }, { sanityStudioConfig }] = await Promise.all([
          import(/* @vite-ignore */ "sanity"),
          import("@/sanity/studio.config"),
        ]);
        if (cancelled) return;
        const Mounted: ComponentType = () => <SanityStudio config={sanityStudioConfig} />;
        setStudio(() => Mounted);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load studio");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!isSanityConfigured()) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="max-w-md rounded-2xl glass-card p-8 text-center">
          <h1 className="font-display text-2xl font-semibold">Sanity Studio not configured</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Set <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">VITE_SANITY_PROJECT_ID</code> in your environment, or replace the placeholder
            in <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">src/lib/config.ts</code>.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Current project ID: <code>{SANITY_CONFIG.projectId}</code>
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="max-w-md text-center text-destructive">{error}</div>
      </div>
    );
  }

  if (!Studio) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-sm text-muted-foreground">Loading Studio…</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Studio />
    </div>
  );
}
