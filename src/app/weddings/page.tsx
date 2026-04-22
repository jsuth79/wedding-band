import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Wedding Band Scotland | Packages & Prices — The Clooneys",
  description:
    "Live wedding band based in Scotland — ceremonies, drinks receptions, first dances and evening entertainment across Edinburgh, Glasgow, the Highlands and beyond.",
  alternates: {
    canonical: "/weddings",
  },
  openGraph: {
    siteName: "The Clooneys Wedding & Events Band",
    title: "Live Wedding Band Scotland | Packages & Prices — The Clooneys",
    description:
      "Live wedding band based in Scotland — ceremonies, drinks receptions, first dances and evening entertainment across Edinburgh, Glasgow, the Highlands and beyond.",
    url: "https://www.theclooneys.co.uk/weddings",
    images: [{ url: "/images/the-clooneys-web.jpg", width: 1200, height: 630, alt: "The Clooneys Wedding Band performing live" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Wedding Band Scotland | Packages & Prices — The Clooneys",
    description:
      "Live wedding band based in Scotland — ceremonies, drinks receptions, first dances and evening entertainment across Edinburgh, Glasgow, the Highlands and beyond.",
    images: ["/images/the-clooneys-web.jpg"],
  },
};

const weddingCards = [
  {
    title: "Special Offer - Surprise Singer Trio and Room Turnover",
    included: [
      "Three surprise singers with live 3-part harmony.",
      "A high-impact set delivered as singing waiters or glam roaming singers.",
      "A surprise performance designed to catch guests when they least expect it.",
      "Room turnover entertainment while your room is being prepared for evening guests.",
      "Available on selected dates in April and May, and from September 1st to November 15th.",
    ],
    price: "£750",
  },
  {
    title: "Ceremony + Drinks",
    included: [
      "Aisle song, signing music and exit song.",
      "Two 30-minute live sets for the drinks reception.",
      "Curated playlist between live sets.",
    ],
    price: "£950",
  },
  {
    title: "Ceremony to Early Evening",
    included: [
      "Ceremony music from entrance to exit.",
      "Two 30-minute live sets during drinks reception.",
      "First dance and a 90-minute live party set.",
      "One song learnt to order.",
    ],
    price: "£1300",
  },
];

const weddingSteps = [
  {
    title: "1. We map the day with you",
    copy: "We plan where live music adds the most value, from the ceremony through to the first dance and evening energy.",
  },
  {
    title: "2. We shape the set around your timings",
    copy: "We work around your venue schedule, meal service and room changes so the music lands naturally rather than interrupting the flow.",
  },
  {
    title: "3. We handle the practical side",
    copy: "PA, setup, communication and venue requirements are covered in advance so the day feels calm and properly prepared.",
  },
  {
    title: "4. The music builds with the day",
    copy: "The atmosphere starts intimate, opens out through the drinks reception and finishes with the bigger singing and dancefloor moments later on.",
  },
];

const crossLinks = [
  {
    href: "/events",
    title: "Events",
    copy: "Corporate events, private parties and dinners that need live music with polish and flexibility.",
  },
  {
    href: "/singing-waiters-scotland",
    title: "Surprise Singers",
    copy: "A dedicated surprise format for daytime reveals, guest interaction and a sharper change of energy.",
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

export default function WeddingsPage() {
  return (
    <div className="pt-20">
      <section className="bg-[var(--page-ivory)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="section-intro mb-10">
            <p className="eyebrow mb-4">Weddings</p>
            <h1 className="section-title section-heading">
              Live wedding vocals for every part of the day.
            </h1>
          </div>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] lg:items-start">
            <div className="max-w-3xl">
              <p className="section-copy text-lg">
                The Clooneys are a vocal harmony trio based in Scotland,
                providing live wedding music from the ceremony through to the
                evening party.
              </p>
              <p className="section-copy mt-4 text-lg">
                With close harmonies, carefully arranged songs and a warm live
                sound, they offer something more personal than a standard
                wedding band package.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
              <Image
                src="/images/the-clooneys-bride.webp"
                alt="The Clooneys performing at a Scottish wedding"
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
                  Wedding packages built around the moments that matter.
                </h2>
                <p className="section-copy mt-4 text-base">
                  From the aisle walk to the first dance, these wedding music
                  options are designed around the flow of the day and the kind
                  of atmosphere you want to create.
                </p>
              </div>
              <div className="grid gap-6">
                {weddingCards.map((card) => (
                  <article
                    key={card.title}
                    className={`p-6 md:p-7 ${
                      card.title === "Special Offer - Surprise Singer Trio and Room Turnover"
                        ? "rounded-[28px] border border-[var(--color-brand-gold)] bg-[linear-gradient(180deg,rgba(212,175,55,0.14),rgba(255,255,255,0.92))] shadow-[0_18px_44px_rgba(44,44,44,0.08)]"
                        : "info-card"
                    }`}
                  >
                    {card.title === "Special Offer - Surprise Singer Trio and Room Turnover" && (
                      <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-gold-dark)]">
                        Limited Dates
                      </p>
                    )}
                    <h3 className="section-subheading text-[1.25rem]">{card.title}</h3>
                    <ul className="mt-4 space-y-3">
                      {card.included.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[0.92rem] leading-6 text-[#545454]">
                          <span className="mt-1 text-[var(--color-brand-gold)]">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 border-t border-[var(--line-soft)] pt-4">
                      <p className="text-[1.6rem] font-semibold tracking-tight text-[#2C2C2C]">
                        {card.price}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div>
            <div className="section-intro mb-10 xl:ml-auto xl:text-right">
              <p className="eyebrow mb-4">How It Works</p>
              <h2 className="section-title section-heading">
                  Great vocals, placed in the right part of the day.
                </h2>
                <p className="section-copy mt-4 text-base">
                  We help shape the timings, song flow and practical setup so
                  the live music feels natural, considered and in the right
                  place from start to finish.
                </p>
              </div>
              <div className="grid gap-6">
                {weddingSteps.map((step) => (
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

      <DarkCta
        heading="Looking for live wedding music in Scotland?"
        copy="Send your date, venue and the parts of the day you want covered, and we’ll come back with availability and the wedding package that fits best."
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
  );
}
