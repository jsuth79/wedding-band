import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FeatureIcon from "@/components/FeatureIcon";
import HeroSection from "@/components/HeroSection";
import YouTubeGrid from "@/components/YouTubeGrid";
import { allVideos } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Wedding Singers, Singing Waiters & Corporate Entertainment | The Clooneys",
  description:
    "Close-harmony wedding singers, singing waiters and corporate entertainment across Scotland. See videos, packages and availability for The Clooneys.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "The Clooneys",
    title: "Wedding Singers, Singing Waiters & Corporate Entertainment | The Clooneys",
    description:
      "Close-harmony wedding singers, singing waiters and corporate entertainment across Scotland. See videos, packages and availability for The Clooneys.",
    url: "https://www.theclooneys.co.uk",
    images: [{ url: "/images/the-clooneys-web.jpg", width: 1200, height: 630, alt: "The Clooneys vocal harmony trio performing live at a Scottish wedding" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Singers, Singing Waiters & Corporate Entertainment | The Clooneys",
    description:
      "Close-harmony wedding singers, singing waiters and corporate entertainment across Scotland. See videos, packages and availability for The Clooneys.",
    images: [{ url: "/images/the-clooneys-web.jpg", alt: "The Clooneys vocal harmony trio performing live at a Scottish wedding" }],
  },
};

const testimonials = [
  {
    quote:
      "Contemplating renewing my wedding vows — just so I can book these guys. You'll have to search far and wide to find the smooth and assured vocal harmonies these guys provide.",
    source: "Iain Fraser",
  },
  {
    quote:
      "Walking down the aisle and as I signed the register I had goosebumps. Every song they did was amazing.",
    source: "Danielle Burns",
  },
  {
    quote:
      "They had everyone joining in and up doing a conga round the room. They have wonderful voices and made our day even more special.",
    source: "Christine Cosgrove",
  },
  {
    quote:
      "It was absolutely fantastic — everyone was up dancing and having a brilliant time. All our guests have been raving about how good they were.",
    source: "Carrieann Smith",
  },
  {
    quote:
      "Gorgeous harmonies, carried with such charisma. The lead singer really knows how to engage with the audience. Highly recommended.",
    source: "Lisa Rose",
  },
  {
    quote:
      "Learning our first dance and father of the bride song days before, and they did every song to perfection. Every one of our guests commented on how truly amazing they were.",
    source: "Beth Williams",
  },
];

const serviceHighlights = [
  {
    icon: "daytime" as const,
    label: "Weddings",
    title: "Live wedding vocals that carry the day",
    copy: "From the aisle walk to the evening party, The Clooneys bring close harmonies, warmth and the kind of live music that becomes part of the memory of the day itself.",
    image: "/images/the-clooneys-ceremony-sq.webp",
    imageAlt: "The Clooneys performing close harmony vocals at a Scottish wedding ceremony",
    href: "/weddings",
    cta: "Explore Weddings",
  },
  {
    icon: "events" as const,
    label: "Events",
    title: "Atmosphere with polish and real presence",
    copy: "For corporate events, private parties and celebrations, live vocals change how a room feels — people relax into it, conversations open up and the night takes on a different shape.",
    image: "/images/the-clooneys-corporate-l-2.webp",
    imageAlt: "The Clooneys performing live vocals at a corporate event in Scotland",
    href: "/events",
    cta: "Explore Events",
  },
  {
    icon: "surprise" as const,
    label: "Singing Waiters",
    title: "A reveal guests talk about long after",
    copy: "Surprise singers and singing waiter-style performances create the sharpest shift in energy — the moment people stop, laugh, sing, film and remember exactly where they were when it started.",
    image: "/images/the-clooneys-roaming-singers-l.webp",
    imageAlt: "The Clooneys performing as roaming surprise singing waiters at a Scottish event",
    href: "/singing-waiters-scotland",
    cta: "Find Out More",
  },
];

// 3-clip video strip for home page
const homeVideos = allVideos;

export default function Home() {
  return (
    <>
      {/* HERO */}
      <HeroSection />

      {/* BOOKING BANNER */}
      <div className="bg-[#241f1a] py-3 text-center">
        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-stone-300">
          Now booking 2026 &amp; 2027 weddings and events
        </p>
      </div>

      {/* WHO WE ARE */}
      <section className="bg-[var(--page-ivory)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="section-intro mb-10">
            <p className="eyebrow mb-4">The Clooneys</p>
            <h2 className="section-title section-heading">
              Three voices, one sound.
            </h2>
          </div>
          <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,1fr)] lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,1fr)]">
            <div className="order-2 md:order-1">
              <div className="mt-2 flex items-center justify-center gap-2 md:justify-start" aria-hidden="true">
                {[1, 2, 3].map((item) => (
                  <span
                    key={item}
                    className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand-gold-light)]"
                  />
                ))}
              </div>
              <p className="section-copy mt-6 text-lg">
                The Clooneys are a vocal harmony trio based in Scotland,
                providing live music across the full wedding day — from ceremony
                through to the evening party.
              </p>
              <p className="section-copy mt-5 text-lg">
                With a focus on close harmonies and carefully arranged songs,
                they offer something a bit different from a standard wedding band.
              </p>

              <p className="mt-8 border-t border-[var(--line-soft)] pt-6 text-sm leading-6 text-[#5e4d41]">
                From intimate ceremonies to packed dance floors, performing at
                venues across Scotland.
              </p>

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

            <div className="order-1 relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(44,44,44,0.12)] md:order-2">
              <Image
                src="/images/the-clooneys-corporate-l-2.webp"
                alt="The Clooneys wedding and events band Scotland"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="bg-[#211d19] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">

            {/* LEFT: credentials + awards */}
            <div>
              <p className="eyebrow mb-6 text-stone-400">In Safe Hands</p>
              <p className="text-base leading-7 text-stone-300 max-w-xl">
                Nicola, Gary and Sian are experienced wedding performers who know how to prepare — from asking the right questions in advance to bringing the right setup on the day and adapting as things change.
              </p>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-gold)]">
                  Confetti Awards 2026
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-8">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-[var(--color-brand-gold)]">★</span>
                    <p className="text-sm leading-6 text-stone-300">
                      Best Evening Entertainment (Live Bands)<br />
                      <span className="text-xs text-stone-500">Highly Recommended</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-[var(--color-brand-gold)]">★</span>
                    <p className="text-sm leading-6 text-stone-300">
                      Best Ceremony Entertainer<br />
                      <span className="text-xs text-stone-500">Highly Recommended</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: award image */}
            <div className="hidden md:block">
              <div className="relative h-72 w-72 overflow-hidden rounded-[20px]">
                <Image
                  src="/images/the-clooneys-award-sq-2.webp"
                  alt="Confetti Awards 2026 — The Clooneys"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[var(--page-stone)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="section-intro mb-10">
            <p className="eyebrow mb-4">What We Do</p>
            <h2 className="section-title section-heading">
              Three ways The Clooneys change the feel of a day.
            </h2>
            <p className="section-copy mt-4 text-base">
              The songs matter, but they are not what people remember. It is the
              hush before the aisle walk, the moment the room erupts, the dance
              floor still going an hour later than planned.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceHighlights.map((item) => (
              <article
                key={item.label}
                className="info-card p-6 md:p-7"
              >
                <FeatureIcon name={item.icon} />
                <p className="eyebrow mt-4">{item.label}</p>
                <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-[18px]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="mt-4 text-[1.25rem] font-semibold text-[#2C2C2C]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#545454]">{item.copy}</p>
                <Link href={item.href} className="btn-secondary mt-6">
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8 max-w-4xl border-t border-[var(--line-soft)] pt-6">
            <p className="text-sm leading-6 text-[#5e4d41]">
              From the quiet of the ceremony to a packed dance floor, The
              Clooneys bring close harmonies and strong live vocals to the parts
              of the day that stay with people.
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO STRIP */}
      <YouTubeGrid
        videos={homeVideos}
        eyebrow="See The Clooneys Live"
        heading="Watch us in action"
        background="bg-[var(--page-stone)]"
      />

      {/* REVIEWS */}
      <section className="bg-[var(--page-ivory)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Kind Words</p>
            <h2 className="section-title section-heading">
              What clients say about The Clooneys.
            </h2>
          </div>
          <div className="mt-10 grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.source}
                className="border-t border-[var(--line-soft)] py-6"
              >
                <p className="text-[1.05rem] font-medium leading-7 text-[#2C2C2C]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-1 text-[var(--color-brand-gold)]">
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
      <section className="bg-[#211d19] py-12 md:py-20">
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
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#211d19] transition-colors hover:bg-[#eef1f4]"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/enquire"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/8"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
