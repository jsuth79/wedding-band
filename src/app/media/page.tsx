import Link from "next/link";
import type { Metadata } from "next";
import { allVideos, getOrientation } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Watch Live | The Clooneys",
  description:
    "Watch The Clooneys perform live — ceremony, drinks reception and evening party footage from real weddings and events across Scotland.",
  alternates: {
    canonical: "/media",
  },
  openGraph: {
    title: "Watch Live | The Clooneys",
    description:
      "Watch The Clooneys perform live — ceremony, drinks reception and evening party footage from real weddings and events across Scotland.",
    url: "https://www.theclooneys.co.uk/media",
  },
  twitter: {
    card: "summary_large_image",
    title: "Watch Live | The Clooneys",
    description:
      "Watch The Clooneys perform live — ceremony, drinks reception and evening party footage from real weddings and events.",
  },
};

const portraitVideos = allVideos.filter((v) => getOrientation(v) === "portrait");
const landscapeVideos = allVideos.filter((v) => getOrientation(v) === "landscape");

function VideoEmbed({ video, className }: { video: (typeof allVideos)[number]; className?: string }) {
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
      src={`https://www.youtube.com/embed/${video.id}`}
      title={video.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={className}
    />
  );
}

export default function MediaPage() {
  return (
    <div className="pt-20">

      {/* INTRO */}
      <section className="bg-[var(--page-ivory)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Media</p>
            <h1 className="section-title section-heading">
              See The Clooneys in action.
            </h1>
            <p className="section-copy mt-6 text-lg">
              Real performances from real weddings and events across Scotland.
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO GRID */}
      <section className="bg-[var(--page-stone)] py-12 md:py-20">
        <div className="section-shell page-gutter">

          {/* PORTRAIT */}
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

          {/* LANDSCAPE */}
          {landscapeVideos.length > 0 && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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

      {/* CTA */}
      <section className="bg-[#211d19] py-12 md:py-20">
        <div className="section-shell page-gutter text-center">
          <h2 className="section-heading-inverse">
            See how we&apos;d fit your day.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            If you can picture one of these moments at your wedding or event,
            get in touch and we&apos;ll talk through the right options for you.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/447740360678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#211d19] transition-colors hover:bg-[#eef1f4]"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/enquire"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/8"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
