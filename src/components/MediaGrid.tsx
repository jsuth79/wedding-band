"use client";

import { useState, useEffect } from "react";
import type { VideoItem } from "@/lib/videos";

declare global {
  interface Window {
    YT: {
      Player: new (
        id: string,
        options: {
          events: {
            onStateChange: (event: { data: number }) => void;
          };
        }
      ) => void;
      PlayerState: { PLAYING: number };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

type FilterCategory = "all" | "ceremony" | "background" | "party";

const filterLabels: { value: FilterCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "ceremony", label: "Ceremony" },
  { value: "background", label: "Background" },
  { value: "party", label: "Party" },
];

interface MediaGridProps {
  videos: VideoItem[];
}

export default function MediaGrid({ videos }: MediaGridProps) {
  const [active, setActive] = useState<FilterCategory>("all");

  const filtered =
    active === "all" ? videos : videos.filter((v) => v.category === active);

  useEffect(() => {
    function initPlayers() {
      videos.forEach((video) => {
        new window.YT.Player(`media-player-${video.id}`, {
          events: { onStateChange: () => {} },
        });
      });
    }

    if (window.YT && window.YT.Player) {
      initPlayers();
    } else {
      window.onYouTubeIframeAPIReady = initPlayers;
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {/* Filter tabs */}
      <div className="mb-10 flex flex-wrap gap-3">
        {filterLabels.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
              active === f.value
                ? "bg-[#241f1a] text-white"
                : "border border-[#d7dde3] bg-white text-[#4d5865] hover:border-[#aab5c0]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((video) => (
          <article key={video.id}>
            {video.category && <p className="eyebrow mb-3">{video.category}</p>}
            <div className="relative aspect-video overflow-hidden rounded-[20px] bg-stone-200">
              <iframe
                id={`media-player-${video.id}`}
                src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            {video.description && (
              <p className="mt-3 text-sm leading-6 text-[#777777]">{video.description}</p>
            )}
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-[#777777]">No videos in this category yet.</p>
      )}
    </div>
  );
}
