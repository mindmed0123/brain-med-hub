import { useState } from "react";
import { Share2, Check, Linkedin, Twitter, Link as LinkIcon, MessageCircle } from "lucide-react";
import { trackMetric } from "@/hooks/usePostMetrics";
import { Button } from "@/components/ui/button";

interface Props {
  slug: string;
  title: string;
}

export default function ShareButton({ slug, title }: Props) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";

  const handleShare = async (channel: "copy" | "linkedin" | "twitter" | "whatsapp" | "native") => {
    trackMetric(slug, "shares");

    if (channel === "whatsapp") {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(title + "\n\n" + url)}`,
        "_blank",
        "noopener,noreferrer",
      );
      return;
    }

    if (channel === "copy") {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return;
    }
    if (channel === "linkedin") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
      return;
    }
    if (channel === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        "_blank",
      );
      return;
    }
    if (channel === "native" && navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // user cancelled
      }
    }
  };

  return (
    <div className="my-12 flex flex-wrap items-center gap-3 border-y border-border py-6">
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        <Share2 size={12} className="mr-2 inline" />
        Compartilhar
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare("whatsapp")}
        className="gap-2 hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
      >
        <MessageCircle size={14} /> WhatsApp
      </Button>
      <Button variant="outline" size="sm" onClick={() => handleShare("linkedin")} className="gap-2">
        <Linkedin size={14} /> LinkedIn
      </Button>
      <Button variant="outline" size="sm" onClick={() => handleShare("twitter")} className="gap-2">
        <Twitter size={14} /> X
      </Button>
      <Button variant="outline" size="sm" onClick={() => handleShare("copy")} className="gap-2">
        {copied ? <Check size={14} /> : <LinkIcon size={14} />}
        {copied ? "Copiado" : "Copiar link"}
      </Button>
    </div>
  );
}
