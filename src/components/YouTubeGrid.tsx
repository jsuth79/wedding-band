"use client";

import { useEffect } from "react";

const videos = [
  {
    id: "XKc-6xf8_mQ",
    title: "This Will Be (An Everlasting Love) — Natalie Cole",
    description: "The Clooneys perform This Will Be (An Everlasting Love) by Natalie Cole — live wedding performance in Scotland",
  },
  {
    id: "ElDXQQPltmU",
    title: "Love on Top — Beyoncé",
    description: "The Clooneys perform Love on Top by Beyoncé — live wedding performance in Scotland",
  },
  {
    id: "4cXKL3oPLNA",
    title: "Leave the Door Open — Silk Sonic",
    description: "The Clooneys perform Leave the Door Open by Bruno Mars, Anderson .Paak & Silk Sonic — live wedding performance in Scotland",
  },
  {
    id: "Ay7eYAzIUSk",
    title: "Young Hearts Run Free — Candi Staton",
    description: "The Clooneys perform Young Hearts Run Free by Candi Staton — live wedding performance in Scotland",
  },
];

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

export default function YouTubeGrid() {
  const videoSchema = videos.map((video) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
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
          events: {
            onStateChange: () => {},
          },
        });
      });
    }

    if (window.YT && window.YT.Player) {
      initPlayers();
    } else {
      window.onYouTubeIframeAPIReady = initPlayers;
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <section className="bg-[var(--page-stone)] py-12 md:py-24">
        <div className="section-shell page-gutter">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow mb-4">
              See &amp; Hear The Clooneys in Action
            </p>
            <h2 className="section-title section-heading mb-4">
              Live Performance Videos
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-0">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group py-5 lg:px-6 lg:first:pl-0 lg:last:pr-0 lg:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-[#d7dde3]"
              >
                <div className="relative aspect-video overflow-hidden rounded-[20px] bg-stone-200">
                  <iframe
                    id={`yt-player-${video.id}`}
                    src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <h3 className="mt-4 text-base font-medium text-[#444444] transition-colors group-hover:text-[#6f7c8c]">
                  {video.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#777777]">
                  A snapshot of the atmosphere, energy and style couples can expect live.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
