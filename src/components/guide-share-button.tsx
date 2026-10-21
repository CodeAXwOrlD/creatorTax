"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

export function GuideShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="guide-share-btn"
      title={`Share ${title}`}
      aria-label="Copy guide link to clipboard"
    >
      {copied ? (
        <>
          <Check size={13} color="#15803d" />
          <span style={{ color: "#15803d" }}>Link Copied</span>
        </>
      ) : (
        <>
          <Share2 size={13} />
          <span>Share Guide</span>
        </>
      )}
    </button>
  );
}
