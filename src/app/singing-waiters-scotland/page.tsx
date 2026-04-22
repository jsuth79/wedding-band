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

const surpriseCards = [
  {
    title: "Surprise Singers",
    included: [
      "A reveal-led live vocal performance at the right point in the day.",
      "Timing planned around drinks reception, meal service or another key moment.",
      "Guest interaction and a stronger lift in room energy.",
      "Pre-event coordination so the surprise still lands cleanly.",
    ],
    price: "£950",
  },
];

const surpriseSteps = [
  {
    title: "1. We choose the right reveal point",
    copy: "The format works best when the room is settled and the contrast in energy can really land, usually during dinner or drinks.",
  },
  {
    title: "2. We keep the setup controlled",
    copy: "The surprise only works if it is handled properly. We coordinate discreetly so the performance still feels unexpected to guests.",
  },
  {
    title: "3. The first song changes the room",
    copy: "The opening reveal is designed to catch attention fast, then build into a more interactive set that feels lively rather than awkward.",
  },
  {
    title: "4. We leave you with a proper shared moment",
    copy: "The best surprise singer bookings become a talking point of the day because they shift the room all at once and get guests involved quickly.",
  },
];

const crossLinks = [
  {
    href: "/weddings",
    title: "Weddings",
    copy: "If you want live music across the wider day as well as the big moments, the weddings page covers the main package options.",
  },
  {
    href: "/events",
    title: "Events",
    copy: "For private parties, corporate bookings and occasions that need a more traditional live set, the events page is the better fit.",
  },
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
            <div className="section-intro mb-10">
              <p className="eyebrow mb-4">Surprise Singers</p>
              <h1 className="section-title section-heading">
                Singing waiters and surprise singers for Glasgow and Scotland.
              </h1>
            </div>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] lg:items-start">
              <div className="max-w-3xl">
                <p className="section-copy text-lg">
                  This is the format for clients who want a reveal, a jolt of
                  energy and a room that changes in an instant rather than a more
                  traditional live set.
                </p>
                <p className="section-copy mt-4 text-lg">
                  The Clooneys handle it as a dedicated booking with the timing,
                  reveal and guest interaction planned properly in advance.
                </p>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                <Image
                  src="/images/the-clooneys-surprise-singers-sq.webp"
                  alt="The Clooneys performing as surprise singers at a wedding in Scotland"
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
                    Surprise singer pricing and what&apos;s included.
                  </h2>
                  <p className="section-copy mt-4 text-base">
                    This is a dedicated format rather than a small add-on. The value
                    is in the timing, reveal and room interaction as much as the set
                    itself.
                  </p>
                </div>
                <div className="grid gap-6 max-w-2xl">
                  {surpriseCards.map((card) => (
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
                    A reveal-based booking that has to be timed properly.
                  </h2>
                  <p className="section-copy mt-4 text-base">
                    The impact comes from delivery, not just the songs. We treat the
                    whole thing as a controlled reveal rather than a standard set.
                  </p>
                </div>
                <div className="grid gap-6">
                  {surpriseSteps.map((step) => (
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
          heading="Thinking about a surprise singers booking?"
          copy="Send the date, venue and the moment in the day you want to transform, and we’ll tell you quickly whether the format fits."
        />

        <section className="bg-[var(--page-stone)] py-12 md:py-20">
          <div className="section-shell page-gutter">
            <div className="section-intro mb-10">
              <p className="eyebrow mb-4">Also Explore</p>
              <h2 className="section-title section-heading">
                Related formats from The Clooneys.
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
