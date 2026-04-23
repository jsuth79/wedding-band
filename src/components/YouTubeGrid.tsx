import { allVideos, getOrientation } from "@/lib/videos";
import type { VideoItem } from "@/lib/videos";

export type { VideoItem };
export { allVideos };


interface YouTubeGridProps {
  videos?: VideoItem[];
  eyebrow?: string;
  heading?: string;
  background?: string;
}

function VideoEmbed({ video, className }: { video: VideoItem; className?: string }) {
  if (video.platform === "facebook") {
    return (
      <iframe
        src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${video.id}%2F&show_text=false`}
        title={video.title}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        className={className}
      />
    );
  }
  if (video.platform === "instagram") {
    return (
      <iframe
        src={`https://www.instagram.com/reel/${video.id}/embed/`}
        title={video.title}
        allowFullScreen
        className={className}
      />
    );
  }
  return (
    <iframe
      id={`yt-player-${video.id}`}
      src={`https://www.youtube.com/embed/${video.id}`}
      title={video.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={className}
    />
  );
}

export default function YouTubeGrid({
  videos = allVideos,
  eyebrow = "See & Hear The Clooneys in Action",
  heading = "Live Performance Videos",
  background = "bg-[var(--page-stone)]",
}: YouTubeGridProps) {
  const ytVideos = videos.filter((v) => (v.platform ?? "youtube") === "youtube");

  const videoSchema = ytVideos.map((video) => ({
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

  const portraitVideos = videos.filter((v) => getOrientation(v) === "portrait");
  const landscapeVideos = videos.filter((v) => getOrientation(v) === "landscape");

  const landscapeColClass = landscapeVideos.length <= 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";

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

          {/* PORTRAIT GRID */}
          {portraitVideos.length > 0 && (
            <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {portraitVideos.map((video) => (
                <div key={video.id}>
                  <div className="relative aspect-[9/16] overflow-hidden rounded-[20px] bg-stone-200">
                    <VideoEmbed video={video} className="absolute inset-0 h-full w-full" />
                  </div>
                  <div className="mt-3 px-1">
                    {video.category && (
                      <p className="eyebrow mb-1 text-[0.6rem]">{video.category}</p>
                    )}
                    <p className="text-sm font-semibold leading-snug text-[#2C2C2C]">{video.title}</p>
                    {video.description && (
                      <p className="mt-1 text-xs leading-5 text-[#545454]">{video.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* LANDSCAPE GRID */}
          {landscapeVideos.length > 0 && (
            <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${landscapeColClass}`}>
              {landscapeVideos.map((video) => (
                <div key={video.id}>
                  <div className="relative aspect-video overflow-hidden rounded-[20px] bg-stone-200">
                    <VideoEmbed video={video} className="absolute inset-0 h-full w-full" />
                  </div>
                  <div className="mt-3 px-1">
                    {video.category && (
                      <p className="eyebrow mb-1 text-[0.6rem]">{video.category}</p>
                    )}
                    <p className="text-sm font-semibold leading-snug text-[#2C2C2C]">{video.title}</p>
                    {video.description && (
                      <p className="mt-1 text-xs leading-5 text-[#545454]">{video.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
