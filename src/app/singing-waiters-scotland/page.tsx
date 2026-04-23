import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Singing Waiters & Secret Singers in Scotland | The Clooneys",
  description:
    "Singing waiters, surprise singers and secret singers in Glasgow, Edinburgh and across Scotland. High-impact live vocals and real guest reaction.",
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
    siteName: "The Clooneys",
    title: "Singing Waiters & Secret Singers in Scotland | The Clooneys",
    description:
      "Singing waiters, surprise singers and secret singers in Glasgow, Edinburgh and across Scotland. High-impact live vocals and real guest reaction.",
    url: "https://www.theclooneys.co.uk/singing-waiters-scotland",
    images: [
      {
        url: "/images/the-clooneys-surprise-singers-sq.webp",
        width: 1200,
        height: 1200,
        alt: "The Clooneys performing as surprise singers at a wedding in Scotland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Singing Waiters & Secret Singers in Scotland | The Clooneys",
    description:
      "Singing waiters, surprise singers and secret singers in Glasgow, Edinburgh and across Scotland. High-impact live vocals and real guest reaction.",
    images: [{ url: "/images/the-clooneys-surprise-singers-sq.webp", alt: "The Clooneys performing as surprise singers at a wedding in Scotland" }],
  },
};

const surpriseCards = [
  {
    title: "Special Offer - Surprise Singer Trio and Room Turnover",
    included: [
      "Three surprise singers with rich 3-part harmony and a bigger live vocal sound.",
      "A high-impact set delivered as singing waiters or glam roaming singers.",
      "A reveal-led performance that catches guests when they least expect it and changes the energy instantly.",
      "Room turnover entertainment that keeps the atmosphere alive while the evening space is being prepared.",
      "Available on selected wedding dates in April and May, and from September 1st to November 15th.",
    ],
    price: "£750",
  },
  {
    title: "Surprise Singers",
    included: [
      "A reveal-led singing waiters or surprise singers performance at exactly the right point in the day.",
      "Timing planned around dinner, drinks or another moment where the reveal will land cleanest.",
      "Strong live vocals, guest interaction and an immediate shift in the room from the first note.",
      "Pre-event coordination so the surprise feels seamless to you and completely unexpected to your guests.",
    ],
    price: "£950",
  },
];

const surpriseSteps = [
  {
    title: "1. We'll help you choose the right reveal point",
    copy: "The format works best when the room is settled and the contrast in energy can really land, usually during dinner or drinks.",
  },
  {
    title: "2. We keep the setup controlled",
    copy: "We coordinate discreetly so the reveal still feels completely unexpected to guests.",
  },
  {
    title: "3. The first song changes the room",
    copy: "The opening reveal is designed to catch attention fast, then build into a more interactive set that feels lively rather than awkward.",
  },
  {
    title: "4. The room ends up in it together",
    copy: "The best ones shift the whole room at once — everyone in it at the same time, which is rare and hard to replicate with anything else.",
  },
];

const crossLinks = [
  {
    href: "/weddings",
    title: "Weddings",
    copy: "If you want live music across the wider day as well as the big moments, the weddings page shows how The Clooneys cover the ceremony, drinks reception and evening.",
  },
  {
    href: "/events",
    title: "Events",
    copy: "For private parties, corporate events and occasions that need a more traditional live set, the events page is the better fit.",
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
      "Yes. Glasgow is one of our core areas, and we regularly travel across Scotland for weddings, parties and events.",
  },
  {
    question: "When does the performance usually happen?",
    answer:
      "Most couples place it during the meal, during drinks reception or at another point where the room is settled and the reveal can create a strong contrast in energy.",
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
    "@id": "https://www.theclooneys.co.uk/singing-waiters-scotland#service",
    name: "Singing Waiters and Surprise Singers in Scotland",
    serviceType: "Singing Waiters and Surprise Singers",
    description:
      "Reveal-led singing waiter and surprise singer performances for weddings and events in Glasgow, Edinburgh and across Scotland, with live vocals and real guest interaction.",
    url: "https://www.theclooneys.co.uk/singing-waiters-scotland",
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
        name: "Surprise Singers",
        price: "950",
        priceCurrency: "GBP",
      },
    ],
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
                Singing waiters, surprise singers and secret singers in Scotland.
              </h1>
            </div>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] lg:items-start">
              <div id="intro" className="max-w-3xl">
                <p className="section-copy text-lg">
                  If you are looking for singing waiters, surprise singers or
                  secret singers in Glasgow, Edinburgh, Central Scotland or
                  further afield, this is the format built for the reveal, the
                  reaction and the moment the whole room suddenly wakes up.
                </p>
                <p className="section-copy mt-4 text-lg">
                  The Clooneys treat surprise singers as a dedicated booking,
                  using strong live vocals, careful timing and guest interaction
                  to create a genuine talking point in the day.
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
                    Surprise singers designed for maximum impact.
                  </h2>
                  <p className="section-copy mt-4 text-base">
                    This is not just a short add-on. The value comes from the
                    reveal, the live vocals and the way the performance changes
                    the energy in the room from the first note.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {surpriseCards.map((card) => (
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
                    A surprise singer performance only works when the timing is right.
                  </h2>
                  <p className="section-copy mt-4 text-base">
                    The impact comes from delivery as much as the songs. We plan
                    the reveal carefully so the performance feels surprising to
                    guests and seamless to you, whether you call it surprise
                    singers, secret singers or singing waiters.
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

        <section className="bg-[var(--page-ivory)] py-12 md:py-20">
          <div className="section-shell page-gutter">
            <div className="section-intro mb-10">
              <p className="eyebrow mb-4">How It Sounds</p>
              <h2 className="section-title section-heading">
                The reveal in action.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl">
              <div>
                <div className="relative aspect-[9/16] overflow-hidden rounded-[20px] bg-stone-200">
                  <iframe
                    src="https://www.instagram.com/reel/DNyfT92WHtM/embed/"
                    title="Red Light Spells Danger"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold leading-snug text-[#2C2C2C]">Red Light Spells Danger</p>
                <p className="mt-1 text-xs text-[#545454]">Singing Waiters</p>
              </div>
              <div>
                <div className="relative aspect-[9/16] overflow-hidden rounded-[20px] bg-stone-200">
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F698668756491902%2F&show_text=false"
                    title="Reach — S Club 7"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold leading-snug text-[#2C2C2C]">Reach — S Club 7</p>
                <p className="mt-1 text-xs text-[#545454]">Singing Waiters</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--page-stone)] py-12 md:py-20">
          <div className="section-shell page-gutter">
            <div className="section-intro mb-10">
              <p className="eyebrow mb-4">What People Said</p>
              <h2 className="section-title section-heading">
                Kind words from wedding guests.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <blockquote className="soft-card p-6 md:p-7">
                <div className="flex gap-1 text-[var(--color-brand-gold)]" aria-label="5 stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="mt-4 text-[1.05rem] font-medium leading-7 text-[#2C2C2C]">
                  &ldquo;Seen them doing a surprise singing Just Eat delivery — it was hysterical and got the party started and everyone ready for the evening.&rdquo;
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[#777777]">Iain Fraser</p>
              </blockquote>
              <blockquote className="soft-card p-6 md:p-7">
                <div className="flex gap-1 text-[var(--color-brand-gold)]" aria-label="5 stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="mt-4 text-[1.05rem] font-medium leading-7 text-[#2C2C2C]">
                  &ldquo;They had everyone joining in and up doing a conga round the room. They have wonderful voices and made our day even more special.&rdquo;
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[#777777]">Christine Cosgrove</p>
              </blockquote>
            </div>
          </div>
        </section>

        <DarkCta
          heading="Looking for singing waiters in Glasgow or Scotland?"
          copy="Send the date, venue and the point in the day you want to transform, and we’ll tell you quickly whether singing waiters, surprise singers or secret singers are the right fit."
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
