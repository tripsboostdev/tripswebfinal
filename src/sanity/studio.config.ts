import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { SANITY_CONFIG } from "@/lib/config";

export const sanityStudioConfig = defineConfig({
  name: "trips-development",
  title: "Trips Development — Studio",
  projectId: SANITY_CONFIG.projectId,
  dataset: SANITY_CONFIG.dataset,
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
