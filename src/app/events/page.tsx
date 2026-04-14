import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FeatureIcon from "@/components/FeatureIcon";

export const metadata: Metadata = {
  title: "Corporate & Events Live Band Scotland | The Clooneys",
  description:
    "Live entertainment for corporate events, private parties and charity dinners across Scotland. Professional vocal harmonies with atmosphere and energy for every occasion.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    siteName: "The Clooneys Wedding & Events Band",
    title: "Corporate & Events Live Band Scotland | The Clooneys",
    description:
      "Live entertainment for corporate events, private parties and charity dinners across Scotland. Professional vocal harmonies for every occasion.",
    url: "https://www.theclooneys.co.uk/events",
    images: [{ url: "/images/the-clooneys-web.jpg", width: 1200, height: 630, alt: "The Clooneys Wedding Band performing live" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate & Events Live Band Scotland | The Clooneys",
    description:
      "Live entertainment for corporate events, private parties and charity dinners across Scotland. Professional vocal harmonies for every occasion.",
    images: ["/images/the-clooneys-web.jpg"],
  },
};

const qualities = [
  {
    icon: "events" as const,
    label: "Atmosphere",
    title: "A room that feels alive",
    copy: "From the moment we start, the energy shifts. Live music transforms a venue in a way a playlist simply cannot — and guests feel it immediately.",
  },
  {
    icon: "party" as const,
    label: "Energy",
    title: "Built for big moments",
    copy: "We know when to build, when to hold back and when to push for the big reactions. Every set is shaped around your event and your audience.",
  },
  {
    icon: "support" as const,
    label: "Professional delivery",
    title: "Reliable, prepared and easy to work with",
    copy: "PA, insurance, timing coordination and clear communication throughout. We make things straightforward for you and your venue.",
  },
];

const eventTypes = [
  {
    label: "Corporate Events",
    image: "/images/the-clooneys-corporate-l-2.webp",
    copy: "Award dinners, product launches, team celebrations and client entertainment. We match the tone of your event — professional, polished and with genuine impact.",
  },
  {
    label: "Private Parties",
    image: "/images/the-clooneys-party.webp",
    copy: "Milestone birthdays, anniversary celebrations and private gatherings. We bring the kind of energy that makes the night feel truly special.",
  },
  {
    label: "Charity Events",
    image: "/images/the-clooneys-events-l.webp",
    copy: "Fundraising dinners and charity gala evenings. We understand the importance of the occasion and deliver a performance that does justice to the cause.",
  },
];

const formats = [
  {
    icon: "acoustic" as const,
    label: "Acoustic",
    copy: "A more relaxed option for drinks, dinners and moments that need warmth without overwhelming the room.",
  },
  {
    icon: "roaming" as const,
    label: "Singing Waiters / Roaming Singers",
    copy: "An interactive roaming vocal set that moves through the room, surprises guests and changes the energy instantly.",
  },
  {
    icon: "party" as const,
    label: "Party Trio",
    copy: "A high-impact three-vocal set built for bigger reactions, celebrations and dancefloor energy.",
  },
];

export default function EventsPage() {
  return (
    <div className="pt-20">

      {/* INTRO */}
      <section className="bg-[var(--page-ivory)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="section-intro mb-10">
            <p className="eyebrow mb-4">Events</p>
            <h1 className="section-title section-heading">
              Entertainment for corporate events and private parties.
            </h1>
          </div>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] lg:items-start">
            <div className="max-w-3xl">
              <p className="section-copy text-lg">
                The Clooneys bring the same professionalism and energy to corporate
                events and private parties that they bring to weddings. Whether you
                need a sophisticated background sound or a full dancefloor moment,
                we shape the performance around your event.
              </p>
              <p className="section-copy mt-4 text-lg">
                We&apos;re experienced at reading diverse rooms — from black-tie charity
                galas to relaxed birthday dinners — and adjusting our set to match
                the moment.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/447740360678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Chat on WhatsApp
                </a>
                <Link href="/enquire" className="btn-secondary">
                  Enquire About Your Event
                </Link>
              </div>
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

      {/* EVENT TYPES */}
      <section className="bg-[var(--page-stone)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="section-intro mb-10">
            <p className="eyebrow mb-4">Event Types</p>
            <h2 className="section-title section-heading">
              We work well across a range of occasions.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((type) => (
              <article
                key={type.label}
                className="info-card flex h-full flex-col overflow-hidden p-5 md:p-6"
              >
                <h3 className="section-subheading text-[1.45rem]">{type.label}</h3>
                <div className="mt-4 relative aspect-square overflow-hidden">
                  <Image
                    src={type.image}
                    alt={`The Clooneys — ${type.label}`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-5 flex flex-1 flex-col">
                  <p className="section-copy text-[0.95rem] leading-7">{type.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="bg-[var(--page-ivory)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="section-intro mb-10">
            <p className="eyebrow mb-4">Formats</p>
            <h2 className="section-title section-heading">
              Choose the format that fits your occasion.
            </h2>
            <p className="section-copy mt-4 text-base">
              Start with how you want the room to feel, and we&apos;ll guide you
              toward the format that suits the event best.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {formats.map((fmt) => (
              <article
                key={fmt.label}
                className="info-card p-6 md:p-7"
              >
                <FeatureIcon name={fmt.icon} />
                <h3 className="mt-4 text-[1.05rem] font-semibold text-[#2C2C2C]">
                  {fmt.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#545454]">{fmt.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#211d19] py-12 md:py-20">
        <div className="section-shell page-gutter text-center">
          <h2 className="section-heading-inverse">
            Let&apos;s talk about your event.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            Tell us your date, venue and what you&apos;re planning — we&apos;ll come back
            quickly with availability and the best format for your occasion.
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

      {/* WHAT'S INCLUDED */}
      <section className="bg-[var(--page-stone)] py-6 md:py-10">
        <div className="section-shell page-gutter">
          <div className="section-intro mb-10">
            <p className="eyebrow mb-4">What&apos;s Included</p>
            <h2 className="section-title section-heading">
              The same calm, professional support behind every booking.
            </h2>
            <p className="section-copy mt-4 text-base">
              Alongside the performance itself, we make the practical side easy
              so the event feels smooth from first contact to final song.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {qualities.map((q) => (
              <article key={q.title} className="soft-card p-6 md:p-7">
                <FeatureIcon name={q.icon} className="mb-4" />
                <p className="eyebrow mb-4">{q.label}</p>
                <h3 className="section-subheading text-[1.35rem]">{q.title}</h3>
                <p className="section-copy mt-4">{q.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
