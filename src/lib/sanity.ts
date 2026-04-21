import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SANITY_CONFIG } from "./config";

export const sanityClient: SanityClient = createClient({
  projectId: SANITY_CONFIG.projectId,
  dataset: SANITY_CONFIG.dataset,
  apiVersion: SANITY_CONFIG.apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
type SanityImageSource = Parameters<typeof builder.image>[0];

export const urlFor = (source: SanityImageSource) => builder.image(source);

/** True only if the project ID has been configured. Used to avoid hitting Sanity with a placeholder. */
export const isSanityConfigured = () =>
  SANITY_CONFIG.projectId !== "your-project-id" && SANITY_CONFIG.projectId.length > 0;
