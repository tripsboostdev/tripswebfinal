import { MessageCircle } from "lucide-react";
import { whatsappLink, SITE_CONFIG } from "@/lib/config";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with ${SITE_CONFIG.brand} on WhatsApp`}
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-ring" aria-hidden="true" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-[0_10px_40px_-5px_var(--primary)] transition-transform group-hover:scale-110">
        <MessageCircle size={24} strokeWidth={2.25} />
      </span>
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-lg glass px-3 py-2 text-xs font-medium text-foreground shadow-lg group-hover:block">
        Chat with us
      </span>
    </a>
  );
}
