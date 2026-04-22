import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Singing Waiters Scotland | Surprise Singers Glasgow — The Clooneys",
  description:
    "Book singing waiters and surprise singers in Glasgow and across Scotland. See how it works, where it fits in your day and how The Clooneys create a high-impact guest surprise.",
  keywords: [
    "singing waiters Glasgow",
    "singing waiters Scotland",
    "surprise singers Glasgow",
    "surprise singers Scotland",
    "wedding singing waiters Glasgow",
    "singing waiters wedding Scotland",
  ],
  alternates: {
    canonical: "/singing-waiters-scotland",
  },
  openGraph: {
    siteName: "The Clooneys Wedding & Events Band",
    title: "Singing Waiters Scotland | Surprise Singers Glasgow — The Clooneys",
    description:
      "Singing waiters and surprise singers for weddings, parties and events in Glasgow and across Scotland. Find out how the performance works and when to book it.",
    url: "https://www.theclooneys.co.uk/singing-waiters-scotland",
    images: [
      {
        url: "/images/the-clooneys-surprise-singers-sq.webp",
        width: 1200,
        height: 1200,
        alt: "The Clooneys surprise singers performing at a wedding in Scotland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Singing Waiters Scotland | Surprise Singers Glasgow — The Clooneys",
    description:
      "Book singing waiters and surprise singers in Glasgow and across Scotland. See how it works and where it fits best in your day.",
    images: ["/images/the-clooneys-surprise-singers-sq.webp"],
  },
};

const highlights = [
  {
    title: "Built around the reveal",
    copy: "We coordinate the setup in advance so the performance lands as a real surprise rather than feeling bolted on.",
  },
  {
    title: "Strong guest interaction",
    copy: "This format works best when the room feels involved. We move through guests, build participation and lift the energy quickly.",
  },
  {
    title: "Works for weddings and events",
    copy: "It suits wedding breakfasts, drinks receptions, private parties, awards dinners and corporate celebrations across Scotland.",
  },
];

const steps = [
  {
    title: "1. We plan the timing with you",
    copy: "We agree the point in the day where the surprise will have the biggest impact, usually during dinner service, drinks or just before a key transition.",
  },
  {
    title: "2. We blend in before the performance",
    copy: "Depending on the setup, we arrive, coordinate discreetly and keep the reveal controlled so guests do not realise what is about to happen.",
  },
  {
    title: "3. The performance breaks the room open",
    copy: "The first song lands as a genuine surprise, then we build from that into a lively interactive set that gets people singing, clapping and out of their seats.",
  },
  {
    title: "4. We shape the finish around your event",
    copy: "The surprise can stand alone or lead into another part of the booking such as drinks reception music, a party set or evening entertainment.",
  },
];

const bestFor = [
  "Wedding breakfasts and daytime receptions",
  "Glasgow weddings looking for a standout talking point",
  "Private parties and family celebrations",
  "Corporate dinners, awards nights and client events",
];

const areas = [
  "Glasgow",
  "Edinburgh",
  "Loch Lomond",
  "Ayrshire",
  "Lanarkshire",
  "Central Scotland",
  "The Highlands",
  "Across Scotland and the UK",
];

const faqs = [
  {
    question: "What is the difference between singing waiters and surprise singers?",
    answer:
      "People often use the terms interchangeably. In practice, both describe a surprise live vocal performance that begins unexpectedly and then becomes an interactive set.",
  },
  {
    question: "Do you provide singing waiters in Glasgow?",
    answer:
      "Yes. Glasgow is one of our core areas, and we regularly travel across Scotland for weddings, parties and event bookings.",
  },
  {
    question: "When does the performance usually happen?",
    answer:
      "Most bookings place it during the meal, during drinks reception or at another point where the room is settled and the reveal can create a strong contrast in energy.",
  },
  {
    question: "Can the surprise singers be part of a wider package?",
    answer:
      "Yes. The surprise set can be booked on its own or combined with ceremony music, drinks reception sets or evening party entertainment.",
  },
];

export default function SingingWaitersScotlandPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Singing Waiters and Surprise Singers",
    provider: {
      "@type": "MusicGroup",
      name: "The Clooneys",
      url: "https://www.theclooneys.co.uk",
    },
    areaServed: [
      { "@type": "City", name: "Glasgow" },
      { "@type": "AdministrativeArea", name: "Scotland" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    serviceType: "Singing waiters and surprise singers for weddings and events",
    url: "https://www.theclooneys.co.uk/singing-waiters-scotland",
    description:
      "Interactive singing waiter and surprise singer performances for weddings, private parties and corporate events in Glasgow and across Scotland.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="pt-20">
        <section className="bg-[var(--page-ivory)] py-12 md:py-20">
          <div className="section-shell page-gutter">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-start">
              <div className="max-w-3xl">
                <p className="eyebrow mb-4">Singing Waiters Scotland &amp; Glasgow</p>
                <h1 className="section-title section-heading">
                  Surprise singers that shift the whole room.
                </h1>
                <p className="section-copy mt-6 text-lg">
                  If you are looking for singing waiters in Glasgow or surprise
                  singers anywhere in Scotland, this is one of the most effective
                  ways to create an unforgettable moment in the day.
                </p>
                <p className="section-copy mt-4 text-lg">
                  The Clooneys deliver a polished surprise performance that starts
                  unexpectedly, draws guests in fast and turns a settled room into
                  a proper shared moment.
                </p>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(44,44,44,0.12)]">
                <Image
                  src="/images/the-clooneys-surprise-singers-sq.webp"
                  alt="The Clooneys performing as surprise singers at a wedding in Scotland"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--page-stone)] py-12 md:py-20">
          <div className="section-shell page-gutter">
            <div className="section-intro mb-10">
              <p className="eyebrow mb-4">Why This Works</p>
              <h2 className="section-title section-heading">
                A big reaction without feeling chaotic.
              </h2>
              <p className="section-copy mt-4 text-base">
                The best singing waiter bookings feel spontaneous to guests but
                carefully controlled behind the scenes.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item) => (
                <article key={item.title} className="soft-card p-6 md:p-7">
                  <h3 className="section-subheading text-[1.25rem]">{item.title}</h3>
                  <p className="section-copy mt-4">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--page-ivory)] py-12 md:py-20">
          <div className="section-shell page-gutter">
            <div className="section-intro mb-10">
              <p className="eyebrow mb-4">How It Works</p>
              <h2 className="section-title section-heading">
                From quiet setup to full-room singalong.
              </h2>
              <p className="section-copy mt-4 text-base">
                This format depends on timing and delivery. We keep the process
                clear so you know exactly how the surprise will land.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {steps.map((step) => (
                <article key={step.title} className="info-card p-6 md:p-7">
                  <h3 className="section-subheading text-[1.2rem]">{step.title}</h3>
                  <p className="section-copy mt-4">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--page-stone)] py-12 md:py-20">
          <div className="section-shell page-gutter">
            <div className="section-intro mb-10">
              <p className="eyebrow mb-4">Pricing</p>
              <h2 className="section-title section-heading">
                Surprise singers as a dedicated booking.
              </h2>
              <p className="section-copy mt-4 text-base">
                This format sits best as its own booking with timing planned
                around the reveal and the room.
              </p>
            </div>
            <div className="max-w-xl">
              <article className="info-card p-5 md:p-6 flex flex-col">
                <h3 className="section-subheading text-[1.2rem]">Surprise Singers</h3>
                <p className="section-copy mt-3 text-[0.88rem] leading-6 text-[#545454] flex-1">
                  An unexpected live vocal performance during your drinks
                  reception, meal or another key moment in the day. The set is
                  built around the reveal, guest interaction and a strong lift in
                  energy.
                </p>
                <div className="mt-5 pt-4 border-t border-[var(--line-soft)]">
                  <p className="text-[1.6rem] font-semibold tracking-tight text-[#2C2C2C]">£950</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#211d19] py-12 md:py-20">
          <div className="section-shell page-gutter text-center">
            <h2 className="section-heading-inverse">
              Planning a singing waiter surprise in Glasgow or Scotland?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              Send your date, venue and the kind of moment you want to create.
              We&apos;ll come back quickly with availability and the best way to make
              it work.
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

        <section className="bg-[var(--page-stone)] py-12 md:py-20">
          <div className="section-shell page-gutter grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Best Fit</p>
              <h2 className="section-title section-heading">
                Where surprise singers work best.
              </h2>
              <ul className="mt-6 space-y-3 text-[#545454]">
                {bestFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-[var(--color-brand-gold)]">●</span>
                    <span className="section-copy">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="section-copy mt-6">
                If you are unsure whether singing waiters or a more traditional
                live set is the better fit, we can talk through the room, timings
                and guest mix and guide you properly.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-4">Areas Covered</p>
              <h2 className="section-title section-heading">
                Glasgow, Scotland and beyond.
              </h2>
              <p className="section-copy mt-4">
                We are based in Scotland and regularly travel for bookings across
                the country. Glasgow is a key area, but this format also works
                well in destination venues, country houses and city-centre events.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-[var(--line-soft)] bg-white px-4 py-2 text-sm text-[#5e4d41]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--page-ivory)] py-12 md:py-20">
          <div className="section-shell page-gutter">
            <div className="section-intro mb-10">
              <p className="eyebrow mb-4">FAQs</p>
              <h2 className="section-title section-heading">
                Questions we get about singing waiters.
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {faqs.map((item) => (
                <article key={item.question} className="soft-card p-6 md:p-7">
                  <h3 className="section-subheading text-[1.15rem]">{item.question}</h3>
                  <p className="section-copy mt-4">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
