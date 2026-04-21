import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    ssr: {
      // Sanity Studio is browser-only — never bundle into SSR worker.
      noExternal: [],
    },
    optimizeDeps: {
      exclude: ["sanity", "@sanity/vision", "styled-components"],
    },
    build: {
      chunkSizeWarningLimit: 5000,
    },
  },
});
