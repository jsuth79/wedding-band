import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Event Singers & Live Entertainment in Scotland | The Clooneys",
  description:
    "Polished live vocals for corporate events, private parties and awards nights across Scotland. Live entertainment that reads the room and fits the occasion.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    siteName: "The Clooneys",
    title: "Corporate Event Singers & Live Entertainment in Scotland | The Clooneys",
    description:
      "Polished live vocals for corporate events, private parties and awards nights across Scotland. Live entertainment that reads the room and fits the occasion.",
    url: "https://www.theclooneys.co.uk/events",
    images: [{ url: "/images/the-clooneys-web.jpg", width: 1200, height: 630, alt: "The Clooneys performing live vocals at a corporate event in Scotland" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Event Singers & Live Entertainment in Scotland | The Clooneys",
    description:
      "Polished live vocals for corporate events, private parties and awards nights across Scotland. Live entertainment that reads the room and fits the occasion.",
    images: [{ url: "/images/the-clooneys-web.jpg", alt: "The Clooneys performing live vocals at a corporate event in Scotland" }],
  },
};

const eventCards = [
  {
    title: "Acoustic Event Set",
    included: [
      "Polished live vocals for drinks receptions, dinners and sophisticated background atmosphere.",
      "A relaxed acoustic format suited to corporate events, private parties and client entertainment.",
      "Close harmony singing that adds warmth and presence without overpowering the room.",
      "Professional PA and clear coordination with your venue or organiser.",
    ],
    price: "From £695",
  },
  {
    title: "Party Trio",
    included: [
      "A stronger vocal-led set for bigger reactions, fuller rooms and higher energy.",
      "Ideal for corporate entertainment, private parties, awards nights and evening event slots.",
      "Built around your audience, room and timings so the set lands at the right moment.",
      "Designed to get the room moving and give the night a clear high point.",
    ],
    price: "From £950",
  },
];

const eventSteps = [
  {
    title: "1. We get clear on the tone of the event",
    copy: "Some bookings need polished background atmosphere, others need a strong lift in energy. We plan the set around that from the start.",
  },
  {
    title: "2. We match the room and audience",
    copy: "Corporate dinners, private parties and charity nights all need slightly different pacing. We adjust the delivery to fit.",
  },
  {
    title: "3. We coordinate the practical detail",
    copy: "We keep communication straightforward with you and your venue so setup, timing and performance windows are all clear.",
  },
  {
    title: "4. The performance lands where it matters",
    copy: "The goal might be a warm background hum or a full-room reaction — either way, the set is there to support the event, not fight it.",
  },
];

const crossLinks = [
  {
    href: "/weddings",
    title: "Weddings",
    copy: "Ceremony, drinks reception and evening wedding music built around the full flow of the day.",
  },
  {
    href: "/singing-waiters-scotland",
    title: "Surprise Singers",
    copy: "A reveal-based format for guests who are meant to be caught completely off guard.",
  },
];

function DarkCta({
  heading,
  copy,
}: {
  heading: string;
  copy: string;
}) {
  return (
    <section className="bg-[#211d19] py-12 md:py-20">
      <div className="section-shell page-gutter text-center">
        <h2 className="section-heading-inverse">{heading}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
          {copy}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/447740360678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#211d19] transition-colors hover:bg-[var(--page-stone)]"
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
  );
}

export default function EventsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.theclooneys.co.uk/events#service",
    name: "Corporate Event Singers and Live Entertainment in Scotland",
    serviceType: "Corporate Entertainment",
    description:
      "Polished live vocals for corporate events, private parties and awards nights across Scotland, from acoustic background sets to high-energy party formats.",
    url: "https://www.theclooneys.co.uk/events",
    provider: {
      "@type": "MusicGroup",
      "@id": "https://www.theclooneys.co.uk/#organization",
      name: "The Clooneys",
    },
    areaServed: [
      { "@type": "City", name: "Glasgow" },
      { "@type": "City", name: "Edinburgh" },
      { "@type": "AdministrativeArea", name: "Scotland" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    offers: [
      {
        "@type": "Offer",
        name: "Acoustic Event Set",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "695",
          priceCurrency: "GBP",
        },
      },
      {
        "@type": "Offer",
        name: "Party Trio",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "950",
          priceCurrency: "GBP",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    <div className="pt-20">
      <section className="bg-[var(--page-ivory)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="section-intro mb-10">
            <p className="eyebrow mb-4">Events</p>
            <h1 className="section-title section-heading">
              Corporate event singers and live entertainment in Scotland.
            </h1>
          </div>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] lg:items-start">
            <div id="intro" className="max-w-3xl">
              <p className="section-copy text-lg">
                The Clooneys provide polished live vocals for corporate events,
                private parties and celebrations across Scotland.
              </p>
              <p className="section-copy mt-4 text-lg">
                From award dinners, launches and client events to birthdays,
                private celebrations and Christmas parties, the set is built
                around the room, the audience and what you want people to take
                away from the night.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
              <Image
                src="/images/the-clooneys-band-sq-2.webp"
                alt="The Clooneys performing at a corporate event in Scotland"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--page-stone)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="grid gap-12 xl:grid-cols-2 xl:items-start">
            <div>
              <div className="section-intro mb-10">
                <p className="eyebrow mb-4">Packages</p>
                <h2 className="section-title section-heading">
                  Live event formats built around atmosphere and energy.
                </h2>
                <p className="section-copy mt-4 text-base">
                  Some corporate entertainment needs warmth in the background,
                  others need a set that lifts the whole room. These live event
                  singer choices give you a clear starting point.
                </p>
              </div>
              <div className="grid gap-6">
                {eventCards.map((card) => (
                  <article key={card.title} className="info-card p-6 md:p-7">
                    <h3 className="section-subheading text-[1.25rem]">{card.title}</h3>
                    <ul className="mt-4 space-y-3">
                      {card.included.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[0.92rem] leading-6 text-[#545454]">
                          <span className="mt-1 text-[var(--color-brand-gold)]">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <div className="section-intro mb-10 xl:ml-auto xl:text-right">
                <p className="eyebrow mb-4">How It Works</p>
                <h2 className="section-title section-heading">
                  Live entertainment that reads the room.
                </h2>
                <p className="section-copy mt-4 text-base">
                  We shape the performance around your audience, your timings
                  and the tone of the event so the live entertainment supports
                  the room rather than fighting it.
                </p>
              </div>
              <div className="grid gap-6">
                {eventSteps.map((step) => (
                  <article key={step.title} className="soft-card p-6 md:p-7">
                    <h3 className="section-subheading text-[1.2rem]">{step.title}</h3>
                    <p className="section-copy mt-4">{step.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--page-ivory)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="section-intro mb-10">
            <p className="eyebrow mb-4">How It Sounds</p>
            <h2 className="section-title section-heading">
              Live vocals in the room.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl">
            <div>
              <div className="relative aspect-[9/16] overflow-hidden rounded-[20px] bg-stone-200">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1284114416974597%2F&show_text=false"
                  title="Man I Need — Olivia Dean"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <p className="mt-3 text-sm font-semibold leading-snug text-[#2C2C2C]">Man I Need — Olivia Dean</p>
              <p className="mt-1 text-xs text-[#545454]">Party</p>
            </div>
            <div>
              <div className="relative aspect-[9/16] overflow-hidden rounded-[20px] bg-stone-200">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F616681694666317%2F&show_text=false"
                  title="Pink Pony Club — Chappell Roan"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <p className="mt-3 text-sm font-semibold leading-snug text-[#2C2C2C]">Pink Pony Club — Chappell Roan</p>
              <p className="mt-1 text-xs text-[#545454]">Party</p>
            </div>
          </div>
        </div>
      </section>

      <DarkCta
        heading="Planning live music for an event in Scotland?"
        copy="Tell us the date, venue and the kind of atmosphere you want, and we’ll point you towards the corporate entertainment or live event singer setup that fits best."
      />

      <section className="bg-[var(--page-stone)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="section-intro mb-10">
            <p className="eyebrow mb-4">Also Explore</p>
            <h2 className="section-title section-heading">
              Other live music options from The Clooneys.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {crossLinks.map((item) => (
              <article key={item.href} className="soft-card p-6 md:p-7">
                <h3 className="section-subheading text-[1.25rem]">{item.title}</h3>
                <p className="section-copy mt-4">{item.copy}</p>
                <Link href={item.href} className="btn-secondary mt-6">
                  Explore {item.title}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
