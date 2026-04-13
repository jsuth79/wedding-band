import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FeatureIcon from "@/components/FeatureIcon";
import HeroSection from "@/components/HeroSection";
import YouTubeGrid from "@/components/YouTubeGrid";
import { allVideos } from "@/lib/videos";

export const metadata: Metadata = {
  title: "The Clooneys | Award-Winning Wedding Band Scotland",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Clooneys | Award-Winning Wedding Band Scotland",
    description:
      "Award-winning wedding and events band based in Scotland. Vocal harmonies for ceremonies, drinks receptions and evening parties across Scotland and the UK.",
    url: "https://www.theclooneys.co.uk",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Clooneys | Award-Winning Wedding Band Scotland",
    description:
      "Award-winning wedding and events band based in Scotland. Vocal harmonies for ceremonies, drinks receptions and evening parties across Scotland and the UK.",
  },
};

const testimonials = [
  {
    quote:
      "We had the Clooneys surprise our wedding guests after dinner with a Just Eat delivery entrance. It was absolutely fantastic and everyone was up dancing.",
    source: "Carrieann Smith",
  },
  {
    quote:
      "Walking down the aisle and signing the register I had goosebumps. Every song they did was amazing.",
    source: "Danielle Burns",
  },
  {
    quote:
      "They have gorgeous harmonies, real charisma and know how to engage with an audience. Highly recommended.",
    source: "Lisa Rose",
  },
];

const homePackages = [
  {
    icon: "daytime" as const,
    label: "Ceremony & Drinks Reception",
    copy: "Live vocals for the aisle, signing and exit, then relaxed sets while guests mingle, celebrate and settle into the day.",
  },
  {
    icon: "surprise" as const,
    label: "Interactive Wedding Moments",
    copy: "Roaming singers and surprise singing waiter-style performances that bring guests into the music and lift the room instantly.",
  },
  {
    icon: "party" as const,
    label: "Evening Party",
    copy: "A high-energy evening set for first dances, full dancefloors and the bigger singalong moments later in the night.",
  },
];

const eventHighlights = [
  {
    icon: "events" as const,
    label: "Corporate Events",
    copy: "Polished live vocals for award dinners, launches, client events and team celebrations.",
  },
  {
    icon: "celebration" as const,
    label: "Private Parties",
    copy: "A warm, high-impact set for birthdays, anniversaries and nights that need real atmosphere.",
  },
  {
    icon: "support" as const,
    label: "Seasonal & Festive Events",
    copy: "Christmas parties, end-of-year celebrations and seasonal dos that want something beyond a playlist.",
  },
];

// 3-clip video strip for home page
const homeVideos = allVideos;

export default function Home() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "The Clooneys",
    url: "https://www.theclooneys.co.uk",
    telephone: "+447740360678",
    email: "info@theclooneys.co.uk",
    description:
      "Award-winning wedding and events band based in Scotland providing live music with signature vocal harmonies for ceremonies, drinks receptions and evening parties.",
    image: "https://www.theclooneys.co.uk/images/the-clooneys-web.jpg",
    areaServed: [
      { "@type": "City", name: "Glasgow" },
      { "@type": "City", name: "Edinburgh" },
      { "@type": "AdministrativeArea", name: "Scotland" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    sameAs: [
      "https://www.instagram.com/theclooneys",
      "https://www.facebook.com/profile.php?id=61552003414629",
      "https://www.tiktok.com/@theclooneys",
      "https://www.youtube.com/channel/UCVXe27VHQ7ILNg5CF0bplQQ",
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "695",
        priceCurrency: "GBP",
      },
      description: "Wedding and events packages from £695",
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
          Now booking 2026 &amp; 2027 weddings and events
        </p>
      </div>

      {/* WHO WE ARE */}
      <section className="bg-[var(--page-ivory)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="section-intro mb-10">
            <p className="eyebrow mb-4">About The Clooneys</p>
            <h2 className="section-title section-heading">
              A trio built on harmony, warmth and real impact.
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

              <p className="mt-8 border-t border-[var(--line-soft)] pt-6 text-sm leading-6 text-[#5e4d41]">
                From intimate barn ceremonies to grand city receptions — at home
                across Scotland's finest venues.
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
              <p className="eyebrow mb-6 text-stone-400">About The Clooneys Wedding Band</p>
              <p className="text-base leading-7 text-stone-300 max-w-xl">
                Nicola, Gary and Sian are three professional performers with decades of experience between them — from Berklee College of Music and session work in Los Angeles, to Classic FM appearances and Golden Jubilee celebrations.
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

      {/* WEDDINGS */}
      <section className="bg-[var(--page-stone)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="section-intro mb-10">
            <p className="eyebrow mb-4">Weddings</p>
            <h2 className="section-title section-heading">
              Live wedding music for every part of the day.
            </h2>
            <p className="section-copy mt-4 text-base">
              From the ceremony through to the party, we shape the music around
              the moments that matter most and the atmosphere you want to create.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {homePackages.map((pkg) => (
              <article
                key={pkg.label}
                className="info-card p-6 md:p-7"
              >
                <FeatureIcon name={pkg.icon} />
                <h3 className="mt-4 text-[1.1rem] font-semibold text-[#2C2C2C]">
                  {pkg.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#545454]">{pkg.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 max-w-3xl border-t border-[var(--line-soft)] pt-6">
            <p className="text-sm leading-6 text-[#5e4d41]">
              Whether you want one key moment covered or music throughout the
              day, we can shape it around your plans.
            </p>
            <Link href="/weddings" className="btn-secondary mt-5">
              Explore Wedding Packages
            </Link>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="bg-[var(--page-ivory)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="section-intro ml-auto mb-10 text-right">
            <p className="eyebrow mb-4">Events</p>
            <h2 className="section-title section-heading">
              Live entertainment for corporate events and private parties.
            </h2>
            <p className="section-copy mt-4 text-base">
              Weddings are the heart of what we do, but we also bring the same
              warmth, polish and energy to standout event bookings.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {eventHighlights.map((item) => (
              <article
                key={item.label}
                className="soft-card p-6 md:p-7"
              >
                <FeatureIcon name={item.icon} />
                <h3 className="mt-4 text-[1.1rem] font-semibold text-[#2C2C2C]">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#545454]">{item.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 max-w-3xl border-t border-[var(--line-soft)] pt-6">
            <p className="text-sm leading-6 text-[#5e4d41]">
              Looking for a tailored event format? We can shape the set around
              your timings, venue and the kind of atmosphere you want to create.
            </p>
            <Link href="/events" className="btn-secondary mt-5">
              Explore Event Options
            </Link>
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
          <div className="mt-10 grid lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <blockquote
                key={testimonial.quote}
                className={`py-5 md:py-6 md:px-6 ${i === 0 ? "md:pl-0" : ""} ${
                  i === testimonials.length - 1 ? "md:pr-0" : ""
                } ${i < testimonials.length - 1 ? "border-b border-[var(--line-soft)] md:border-b-0 md:border-r" : ""}`}
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
