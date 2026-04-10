import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import YouTubeGrid from "@/components/YouTubeGrid";
import { allVideos } from "@/lib/videos";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Clooneys | Wedding & Events Band Scotland",
    description:
      "Vocal-led wedding and event entertainment across Scotland. Stunning live harmonies for ceremonies, drinks receptions, corporate events and private parties.",
    url: "https://www.theclooneys.co.uk",
  },
};

const venues = [
  "Norton House Hotel & Spa",
  "Below Canvas",
  "Inglewood House",
  "The Signet Library",
  "The Byre at Inchyra",
  "Destination Weddings",
];

const testimonials = [
  {
    quote:
      "The Clooneys are phenomenal performers with stunning harmonies. Nothing was too big an ask and they made the whole day feel incredibly special.",
    source: "Wedding client",
  },
  {
    quote:
      "Every part of the process felt easy, thoughtful and professional. Our guests are still talking about the music and the atmosphere they created.",
    source: "Private event client",
  },
  {
    quote:
      "We had them for our corporate dinner and the room completely transformed. Absolute professionals — everyone was on their feet by the end.",
    source: "Corporate events client",
  },
];

const dayMoments = [
  {
    step: "01",
    label: "Ceremony",
    copy: "Intimate vocals for the aisle walk, signing and exit.",
  },
  {
    step: "02",
    label: "Drinks Reception",
    copy: "Relaxed live sets while guests mingle and celebrate.",
  },
  {
    step: "03",
    label: "Wedding Meal",
    copy: "Background music that keeps the energy warm and unhurried.",
  },
  {
    step: "04",
    label: "Evening Party",
    copy: "High energy and a full dancefloor to close the day.",
  },
];

const formats = [
  {
    label: "Singing Waiters",
    copy: "The surprise no one sees coming. Waiters who break into song and turn the room on its head.",
  },
  {
    label: "Roaming Band",
    copy: "Moving through guests, creating atmosphere up close. Interactive and full of energy.",
  },
  {
    label: "Party Band",
    copy: "Stage-ready full band performance. Built for dancefloors and big moments.",
  },
];

// 3-clip video strip for home page
const homeVideos = allVideos.slice(0, 3);

export default function Home() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "The Clooneys",
    description:
      "Professional wedding and events band based in Scotland providing live music with signature vocal harmonies.",
    areaServed: [
      { "@type": "City", name: "Glasgow" },
      { "@type": "City", name: "Edinburgh" },
      { "@type": "State", name: "Scotland" },
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: "325",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "325",
        priceCurrency: "GBP",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <HeroSection />

      {/* BOOKING BANNER */}
      <div className="bg-[#241f1a] py-3 text-center">
        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-stone-300">
          Now booking 2026 &amp; 2027
        </p>
      </div>

      {/* WHO WE ARE */}
      <section className="bg-[var(--page-ivory)] py-14 md:py-24">
        <div className="section-shell page-gutter">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow mb-4">About The Clooneys</p>
            <h2 className="section-title section-heading">
              A trio built on harmony, warmth and real impact.
            </h2>
          </div>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.72fr)]">
            <div>
              <p className="section-copy mt-6 text-lg">
                Three voices, close harmonies and a repertoire that spans soul,
                pop and classic wedding favourites. The Clooneys bring a sound
                that feels polished and elevated — without losing warmth or
                personality.
              </p>
              <p className="section-copy mt-5 text-lg">
                More than anything, they know how to read a room: when to make a
                ceremony feel intimate, when to lift a reception, and how to
                create the kind of atmosphere guests keep talking about afterwards.
              </p>

              {/* Credibility strip */}
              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[#d7dde3] pt-6">
                <div className="rounded-full border border-[#d7dde3] bg-white px-4 py-2 text-sm text-[#4d5865]">
                  ★ Confetti Awards 2025 — Highly Recommended
                </div>
                {venues.map((venue) => (
                  <span
                    key={venue}
                    className="rounded-full border border-[#d7dde3] bg-white px-4 py-2 text-sm text-[#4d5865]"
                  >
                    {venue}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/447740360678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  WhatsApp Us
                </a>
                <Link href="/enquire" className="btn-secondary">
                  Check Availability
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
              <Image
                src="/images/the-clooneys-ceremony2.webp"
                alt="The Clooneys performing live vocal harmonies at a Scottish wedding ceremony"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE FIT YOUR DAY */}
      <section className="bg-[var(--page-stone)] py-14 md:py-24">
        <div className="section-shell page-gutter">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow mb-4">How We Fit Your Day</p>
            <h2 className="section-title section-heading">
              Music for every moment, from the aisle to the dancefloor.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dayMoments.map((moment) => (
              <article
                key={moment.step}
                className="rounded-[24px] border border-[#d7dde3] bg-white p-6"
              >
                <p className="font-serif text-3xl text-[#d7dde3]">{moment.step}</p>
                <h3 className="mt-4 text-[1.1rem] font-semibold text-[#2C2C2C]">
                  {moment.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#545454]">{moment.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WEDDINGS / EVENTS SPLIT */}
      <section className="bg-[var(--page-ivory)] py-14 md:py-24">
        <div className="section-shell page-gutter">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow mb-4">What We Do</p>
            <h2 className="section-title section-heading">
              The right entertainment for your occasion.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="group relative overflow-hidden rounded-[28px]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.squarespace-cdn.com/content/65f8c528b5449106e4650e68/a552687e-e421-4227-8f7f-5e565fcc9b23/490661475_122257962626066780_8872813234820613686_n.jpg?content-type=image%2Fjpeg"
                  alt="The Clooneys performing at a wedding ceremony"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,18,16,0.72)_0%,rgba(20,18,16,0.1)_60%)]" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="eyebrow mb-2 text-white/70">Weddings</p>
                <h3 className="text-2xl font-serif text-white">
                  From ceremony to dancefloor
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-200">
                  Tailored live music for every part of your wedding day.
                </p>
                <Link
                  href="/weddings"
                  className="mt-4 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  See Wedding Options
                </Link>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-[28px]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.squarespace-cdn.com/content/65f8c528b5449106e4650e68/24bd9574-d5dd-4e13-a0dc-663ae071c515/485144419_122252646410066780_367602104697355397_n.jpg?content-type=image%2Fjpeg"
                  alt="The Clooneys performing at a corporate event"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,18,16,0.72)_0%,rgba(20,18,16,0.1)_60%)]" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="eyebrow mb-2 text-white/70">Events</p>
                <h3 className="text-2xl font-serif text-white">
                  Corporate &amp; private events
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-200">
                  Atmosphere and energy for corporate dinners, parties and celebrations.
                </p>
                <Link
                  href="/events"
                  className="mt-4 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  See Events Options
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FORMATS PREVIEW */}
      <section className="bg-[#1f1b17] py-14 md:py-24">
        <div className="section-shell page-gutter">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow mb-4 text-[#a1acb8]">How You Can Have Us</p>
            <h2 className="section-heading-inverse">
              Three ways to experience The Clooneys.
            </h2>
          </div>
          <div className="grid gap-0 md:grid-cols-3">
            {formats.map((fmt, i) => (
              <article
                key={fmt.label}
                className={`py-6 md:px-6 md:first:pl-0 md:last:pr-0 ${
                  i < formats.length - 1
                    ? "border-b border-white/10 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <h3 className="text-[1.25rem] font-semibold text-white">
                  {fmt.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-stone-300">{fmt.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/enquire"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/8"
            >
              Explore All Formats
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO STRIP */}
      <YouTubeGrid
        videos={homeVideos}
        eyebrow="See The Clooneys Live"
        heading="Watch us in action"
        showLabels
        background="bg-[var(--page-stone)]"
      />

      {/* REVIEWS */}
      <section className="bg-[var(--page-ivory)] py-14 md:py-24">
        <div className="section-shell page-gutter">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Kind Words</p>
            <h2 className="section-title section-heading">
              What clients say about The Clooneys.
            </h2>
          </div>
          <div className="mt-10 grid lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <blockquote
                key={testimonial.quote}
                className={`py-5 md:py-6 md:px-6 ${i === 0 ? "md:pl-0" : ""} ${
                  i === testimonials.length - 1 ? "md:pr-0" : ""
                } ${i < testimonials.length - 1 ? "border-b border-[#d7dde3] md:border-b-0 md:border-r" : ""}`}
              >
                <p className="text-[1.05rem] font-medium leading-7 text-[#2C2C2C]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-1 text-[#6f7c8c]">
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#777777]">
                  {testimonial.source}
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#211d19] py-14 md:py-24">
        <div className="section-shell page-gutter text-center">
          <h2 className="section-heading-inverse">
            Ready to check if we&apos;re available for your date?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            Tell us your date and venue and we&apos;ll come back quickly to confirm
            availability and talk through the best options.
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
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
