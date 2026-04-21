import type { GalleryBlock } from "@/lib/types";
import { isSanityConfigured, urlFor } from "@/lib/sanity";

interface Props {
  blocks: GalleryBlock[];
}

function imgUrl(image?: { url?: string; asset?: { _ref?: string } }, w = 1600) {
  if (!image) return undefined;
  if (image.url) return image.url;
  if (isSanityConfigured() && image.asset) {
    return urlFor(image).width(w).auto("format").url();
  }
  return undefined;
}

const layoutClass = {
  full: "md:col-span-12",
  half: "md:col-span-6",
  third: "md:col-span-4",
} as const;

function isYouTube(url: string) {
  return /youtube\.com|youtu\.be/.test(url);
}
function isVimeo(url: string) {
  return /vimeo\.com/.test(url);
}
function getEmbedUrl(url: string): string | null {
  if (isYouTube(url)) {
    const m = url.match(/(?:v=|youtu\.be\/)([\w-]{11})/);
    return m ? `https://www.youtube.com/embed/${m[1]}` : null;
  }
  if (isVimeo(url)) {
    const m = url.match(/vimeo\.com\/(\d+)/);
    return m ? `https://player.vimeo.com/video/${m[1]}` : null;
  }
  return null;
}

export function Gallery({ blocks }: Props) {
  if (!blocks?.length) {
    return (
      <p className="text-center text-sm text-muted-foreground">No gallery items yet.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
      {blocks.map((block) => {
        if (block._type === "imageBlock") {
          const url = imgUrl(block.image);
          return (
            <figure
              key={block._key}
              className={`${layoutClass[block.layout || "full"]} group overflow-hidden rounded-2xl glass-card`}
            >
              {url ? (
                <img
                  src={url}
                  alt={block.caption || ""}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="aspect-video bg-surface-elevated" />
              )}
              {block.caption && (
                <figcaption className="p-4 text-xs text-muted-foreground">{block.caption}</figcaption>
              )}
            </figure>
          );
        }

        if (block._type === "videoBlock") {
          const embed = getEmbedUrl(block.url);
          return (
            <figure key={block._key} className="md:col-span-12 overflow-hidden rounded-2xl glass-card">
              <div className="relative aspect-video bg-black">
                {embed ? (
                  <iframe
                    src={embed}
                    title={block.caption || "Video"}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <video src={block.url} controls className="absolute inset-0 h-full w-full" />
                )}
              </div>
              {block.caption && (
                <figcaption className="p-4 text-xs text-muted-foreground">{block.caption}</figcaption>
              )}
            </figure>
          );
        }

        if (block._type === "beforeAfterBlock") {
          const before = imgUrl(block.before);
          const after = imgUrl(block.after);
          return (
            <figure key={block._key} className="md:col-span-12 overflow-hidden rounded-2xl glass-card">
              <div className="grid grid-cols-2">
                <div className="relative">
                  {before && <img src={before} alt="Before" loading="lazy" className="w-full h-full object-cover" />}
                  <span className="absolute left-3 top-3 rounded-full bg-background/70 backdrop-blur px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">Before</span>
                </div>
                <div className="relative border-l border-border">
                  {after && <img src={after} alt="After" loading="lazy" className="w-full h-full object-cover" />}
                  <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">After</span>
                </div>
              </div>
              {block.caption && (
                <figcaption className="p-4 text-xs text-muted-foreground">{block.caption}</figcaption>
              )}
            </figure>
          );
        }

        if (block._type === "textBlock") {
          return (
            <div key={block._key} className="md:col-span-12 px-2 py-6 max-w-3xl mx-auto">
              {block.heading && (
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-gradient mb-4">
                  {block.heading}
                </h3>
              )}
              <p className="text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                {block.body}
              </p>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
