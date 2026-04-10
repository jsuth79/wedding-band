"use client";

import { useEffect } from "react";
import { allVideos } from "@/lib/videos";
import type { VideoItem } from "@/lib/videos";

export type { VideoItem };
export { allVideos };

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

interface YouTubeGridProps {
  videos?: VideoItem[];
  eyebrow?: string;
  heading?: string;
  showLabels?: boolean;
  background?: string;
}

export default function YouTubeGrid({
  videos = allVideos,
  eyebrow = "See & Hear The Clooneys in Action",
  heading = "Live Performance Videos",
  showLabels = false,
  background = "bg-[var(--page-stone)]",
}: YouTubeGridProps) {
  const videoSchema = videos.map((video) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description ?? video.title,
    thumbnailUrl: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
    uploadDate: "2024-01-01T00:00:00Z",
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    publisher: {
      "@type": "MusicGroup",
      name: "The Clooneys",
    },
  }));

  useEffect(() => {
    function initPlayers() {
      videos.forEach((video) => {
        new window.YT.Player(`yt-player-${video.id}`, {
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

  const colClass =
    videos.length <= 2
      ? "lg:grid-cols-2 lg:gap-0"
      : "lg:grid-cols-3 lg:gap-0";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <section className={`${background} py-12 md:py-24`}>
        <div className="section-shell page-gutter">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h2 className="section-title section-heading mb-4">{heading}</h2>
          </div>
          <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${colClass}`}>
            {videos.map((video) => (
              <div
                key={video.id}
                className="group py-5 lg:px-6 lg:first:pl-0 lg:last:pr-0 lg:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-[#d7dde3]"
              >
                {showLabels && video.label && (
                  <p className="eyebrow mb-3">{video.label}</p>
                )}
                <div className="relative aspect-video overflow-hidden rounded-[20px] bg-stone-200">
                  <iframe
                    id={`yt-player-${video.id}`}
                    src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <h3 className="mt-4 text-base font-medium text-[#444444] transition-colors group-hover:text-[#6f7c8c]">
                  {showLabels && video.label ? video.label : video.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#777777]">
                  {video.caption ??
                    "A snapshot of the atmosphere, energy and style couples can expect live."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
