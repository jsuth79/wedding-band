import Link from "next/link";
import type { Metadata } from "next";
import MediaGrid from "@/components/MediaGrid";
import { allVideos } from "@/lib/videos";

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

export default function MediaPage() {
  return (
    <div className="pt-20">

      {/* INTRO */}
      <section className="bg-[var(--page-ivory)] py-14 md:py-24">
        <div className="section-shell page-gutter">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Media</p>
            <h1 className="section-title section-heading">
              See The Clooneys in action.
            </h1>
            <p className="section-copy mt-6 text-lg">
              Real performances from real events — use the filters below to see
              ceremony moments, background sets and full party energy.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERABLE VIDEO GRID */}
      <section className="bg-[var(--page-stone)] py-14 md:py-24">
        <div className="section-shell page-gutter">
          <MediaGrid videos={allVideos} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#211d19] py-14 md:py-24">
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
