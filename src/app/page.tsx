import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import YouTubeGrid from "@/components/YouTubeGrid";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Clooneys | Premium Wedding & Events Band",
    description:
      "Professional wedding and events band based in Scotland. Stunning vocal harmonies and live entertainment for ceremonies, receptions, and celebrations across Scotland and the UK.",
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

const accolades = [
  {
    label: "Confetti Awards 2025",
    title: "Wedding Ceremony Entertainment",
    detail: "Highly Recommended",
  },
];

const proofItems = [
  {
    label: "Live Feel",
    title: "Warm harmonies, modern songs, real atmosphere",
    copy: "Live music that feels polished, natural and full of personality",
  },
  {
    label: "Reception Energy",
    title: "A room that feels alive from the first drink onwards",
    copy: "Ideal for drinks receptions, dinner moments and the parts of the day guests remember",
  },
  {
    label: "Reputation",
    title: "Confetti Awards 2025 and 5-star reviews",
    copy: "Highly Recommended Wedding Ceremony Entertainment with strong client feedback",
  },
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
];

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
      <HeroSection />

      <section className="bg-[#1f1b17] py-5 md:py-6">
        <div className="section-shell page-gutter">
          <div className="grid md:grid-cols-3">
            {proofItems.map((item) => (
              <article
                key={item.title}
                className="py-5 md:py-6 md:pl-6 md:pr-6 md:first:pl-0 md:last:pr-0 md:[&:not(:last-child)]:border-r md:[&:not(:last-child)]:border-white/10"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#6f7c8c]">
                  {item.label}
                </p>
                <h2 className="mt-2 text-[1.45rem] leading-tight font-serif text-white md:text-[1.7rem]">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-5 text-stone-300">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--page-ivory)] py-14 md:py-24">
        <div className="section-shell page-gutter">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow mb-4">About The Clooneys</p>
            <h2 className="section-title section-heading">
              Elegant live music with warmth, personality and real impact.
            </h2>
          </div>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.72fr)]">
            <div>
            <p className="section-copy mt-6 text-lg">
              The Clooneys bring a polished live sound that feels elevated
              without losing warmth. Their close harmonies and modern repertoire
              work beautifully for ceremonies, drinks receptions and the
              celebratory moments in between.
            </p>
            <p className="section-copy mt-5 text-lg">
              More than anything, they know how to read a room: when to make a
              ceremony feel intimate, when to lift a reception, and how to create
              the kind of atmosphere guests keep talking about afterwards.
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
                Start Your Enquiry
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

      <YouTubeGrid />

      <section className="bg-[var(--page-ivory)] py-14 md:py-24">
        <div className="section-shell page-gutter">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Awards & Kind Words</p>
            <h2 className="section-title section-heading">
              Thoughtful, memorable and easy to work with.
            </h2>
          </div>
          <div className="mt-10 grid lg:grid-cols-3">
            <article className="py-5 md:py-6 md:pl-0 md:pr-6 md:[&:not(:last-child)]:border-r md:[&:not(:last-child)]:border-[#d7dde3]">
              <p className="eyebrow mb-4">Recognition</p>
              <h3 className="section-subheading text-[1.25rem]">
                Confetti Awards 2025
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#545454]">
                Highly Recommended for Wedding Ceremony Entertainment.
              </p>
              <div className="mt-6 flex items-center gap-1 text-[#6f7c8c]">
                {[...Array(5)].map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[#777777]">
                Google &amp; Facebook Reviews
              </p>
            </article>
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.quote}
                className="py-5 md:py-6 md:px-6 md:last:pr-0 md:[&:not(:last-child)]:border-r md:[&:not(:last-child)]:border-[#d7dde3]"
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

      <section className="bg-[#211d19] py-14 md:py-24">
        <div className="section-shell page-gutter text-center">
          <h2 className="section-heading-inverse">
            If you want live music that feels effortless and memorable, let&apos;s talk.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            Tell us your date and venue and we&apos;ll come back quickly to let you
            know if The Clooneys are available.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/447740360678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#211d19] transition-colors hover:bg-[#eef1f4]"
            >
              Chat with us on WhatsApp
            </a>
            <Link
              href="/enquire"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/8"
            >
              Send us an email about your event
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--page-stone)] py-14 md:py-24">
        <div className="section-shell page-gutter">
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="section-title section-heading max-w-3xl">
            Trusted at beautiful venues across Scotland and beyond.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {venues.map((venue) => (
              <span
                key={venue}
                className="rounded-full border border-[#d7dde3] bg-white px-4 py-2 text-sm text-[#4d5865]"
              >
                {venue}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
