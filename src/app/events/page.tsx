import Link from "next/link";
import type { Metadata } from "next";
import YouTubeGrid from "@/components/YouTubeGrid";
import { allVideos } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Events Band Scotland | The Clooneys",
  description:
    "Live entertainment for corporate events, private parties and charity dinners across Scotland. The Clooneys bring atmosphere, energy and professional delivery to every event.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Events Band Scotland | The Clooneys",
    description:
      "Live entertainment for corporate events, private parties and charity dinners across Scotland.",
    url: "https://www.theclooneys.co.uk/events",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events Band Scotland | The Clooneys",
    description:
      "Live entertainment for corporate events, private parties and charity dinners across Scotland.",
  },
};

const qualities = [
  {
    label: "Atmosphere",
    title: "A room that feels alive",
    copy: "From the moment we start, the energy shifts. Live music transforms a venue in a way a playlist simply cannot — and guests feel it immediately.",
  },
  {
    label: "Energy",
    title: "Built for big moments",
    copy: "We know when to build, when to hold back and when to push for the big reactions. Every set is shaped around your event and your audience.",
  },
  {
    label: "Professional delivery",
    title: "Reliable, prepared and easy to work with",
    copy: "PA, insurance, timing coordination and clear communication throughout. We make things straightforward for you and your venue.",
  },
];

const eventTypes = [
  {
    label: "Corporate Events",
    copy: "Award dinners, product launches, team celebrations and client entertainment. We match the tone of your event — professional, polished and with genuine impact.",
  },
  {
    label: "Private Parties",
    copy: "Milestone birthdays, anniversary celebrations and private gatherings. We bring the kind of energy that makes the night feel truly special.",
  },
  {
    label: "Charity Events",
    copy: "Fundraising dinners and charity gala evenings. We understand the importance of the occasion and deliver a performance that does justice to the cause.",
  },
];

const formats = ["Singing Waiters", "Roaming Band", "Party Band", "Acoustic"];

// Upbeat clips for events page
const eventsVideos = [allVideos[2], allVideos[3]]; // Love on Top + Young Hearts

export default function EventsPage() {
  return (
    <div className="pt-20">

      {/* INTRO */}
      <section className="bg-[var(--page-ivory)] py-14 md:py-24">
        <div className="section-shell page-gutter">
          <div className="mb-10 max-w-3xl">
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
            </div>
            <div className="flex flex-col gap-4 lg:items-stretch">
              <a
                href="https://wa.me/447740360678"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                Chat on WhatsApp
              </a>
              <Link href="/enquire" className="btn-secondary w-full">
                Enquire About Your Event
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-[var(--page-stone)] py-14 md:py-24">
        <div className="section-shell page-gutter">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow mb-4">What You Get</p>
            <h2 className="section-title section-heading">
              More than entertainment — a room transformed.
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {qualities.map((q) => (
              <article key={q.title} className="border-t border-[#d7dde3] pt-5">
                <p className="eyebrow mb-4">{q.label}</p>
                <h3 className="section-subheading text-[1.35rem]">{q.title}</h3>
                <p className="section-copy mt-4">{q.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section className="bg-[var(--page-ivory)] py-14 md:py-24">
        <div className="section-shell page-gutter">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow mb-4">Event Types</p>
            <h2 className="section-title section-heading">
              We work well across a range of occasions.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((type) => (
              <article
                key={type.label}
                className="rounded-[24px] border border-[#d7dde3] bg-white p-6"
              >
                <h3 className="text-[1.05rem] font-semibold text-[#2C2C2C]">
                  {type.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#545454]">{type.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="bg-[#1f1b17] py-14 md:py-24">
        <div className="section-shell page-gutter">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow mb-4 text-[#a1acb8]">How You Can Have Us</p>
            <h2 className="section-heading-inverse">
              Different formats for different occasions.
            </h2>
            <p className="mt-4 text-stone-300">
              From surprise singing waiters to a full stage-ready party band —
              we work with you to find the format that fits your event best.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {formats.map((fmt) => (
              <span
                key={fmt}
                className="rounded-full border border-white/20 bg-white/8 px-5 py-2.5 text-sm font-semibold text-white"
              >
                {fmt}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <YouTubeGrid
        videos={eventsVideos}
        eyebrow="See The Energy"
        heading="Watch us perform live"
        showLabels
        background="bg-[var(--page-stone)]"
      />

      {/* CTA */}
      <section className="bg-[#211d19] py-14 md:py-24">
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
    </div>
  );
}
