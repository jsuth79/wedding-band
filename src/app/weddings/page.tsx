import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FeatureIcon from "@/components/FeatureIcon";

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


const ways = [
  {
    icon: "acoustic" as const,
    label: "Acoustic Moments",
    copy: "A stripped-back, intimate sound perfect for ceremonies, dinner or the quieter parts of your day.",
  },
  {
    icon: "roaming" as const,
    label: "Surprise Singers",
    copy: "The band appears unannounced and moves through your guests — an interactive, high-energy performance that nobody sees coming.",
  },
  {
    icon: "party" as const,
    label: "Party Trio",
    copy: "A high-impact three-vocal performance built for evenings, dancefloors and creating a proper party atmosphere.",
  },
];

const testimonials = [
  {
    quote:
      "Perfection does not even describe it. We had so many sentimental songs that were not traditional wedding songs, but they learned them all.",
    source: "Danielle Burns",
  },
  {
    quote:
      "They did a fantastic sound setup before the wedding so no guests would know, then had everyone joining in and up doing a conga round the room.",
    source: "Christine Cosgrove",
  },
  {
    quote:
      "Everything was outstanding from the entrance to the end. They had everyone out their seats and made our wedding weekend unforgettable.",
    source: "Elizabeth Quayle",
  },
];

const supportItems = [
  {
    icon: "support" as const,
    label: "Included",
    title: "Professional support",
    copy: "We help shape the timing, song flow and practical setup so your music feels considered from first contact to final performance.",
  },
  {
    icon: "venueReady" as const,
    label: "Venue Ready",
    title: "PA and insurance covered",
    copy: "We come prepared with the professional equipment and documentation venues usually need, helping things run smoothly on the day.",
  },
  {
    icon: "tailored" as const,
    label: "Tailored",
    title: "Built around your plans",
    copy: "If your timings or ideas do not fit neatly into one package, we can talk through a tailored option that suits your wedding best.",
  },
];

export default function WeddingsPage() {
  return (
    <div className="pt-20">

      {/* INTRO */}
      <section className="bg-[var(--page-ivory)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="section-intro mb-10">
            <p className="eyebrow mb-4">Your Wedding Day</p>
            <h1 className="section-title section-heading">
              From your aisle walk to a full dance floor.
            </h1>
          </div>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] lg:items-start">
            <div className="max-w-3xl">
              <p className="section-copy text-lg">
                The Clooneys provide live music across the full wedding day —
                from the first quiet moments of your ceremony to the last song
                of the night.
              </p>
              <p className="section-copy mt-4 text-lg">
                We&apos;ll guide you through the options and shape the music around
                your day, making sure everything feels natural and in the right
                place.
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
                  Check Your Date
                </Link>
              </div>
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


      {/* PRICING */}
      <section id="packages" className="bg-[var(--page-stone)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="section-intro mb-12">
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="section-title section-heading">
              Live music for every part of your day.
            </h2>
            <p className="section-copy mt-4 text-base">
              Start with the bookings below and tailor the details around your venue and timings.
            </p>
          </div>

          {/* TRIO */}
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-gold)] mb-6">
              Trio
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Ceremony + Drinks */}
              <article className="info-card p-5 md:p-6 flex flex-col">
                <h3 className="section-subheading text-[1.2rem]">Ceremony + Drinks</h3>
                <ul className="mt-3 space-y-2 flex-1">
                  {[
                    "Aisle song, signing of the register (up to 3 songs), and exit song.",
                    "Two 30-minute live sets with a curated playlist between sets.",
                  ].map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-[0.88rem] leading-6 text-[#545454]">
                      <span className="mt-[0.4rem] w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)] shrink-0" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-[var(--line-soft)]">
                  <p className="text-[1.6rem] font-semibold tracking-tight text-[#2C2C2C]">£1200</p>
                </div>
              </article>

              {/* Ceremony to Early Evening */}
              <article className="info-card p-5 md:p-6 flex flex-col">
                <h3 className="section-subheading text-[1.2rem]">Ceremony to Early Evening</h3>
                <ul className="mt-3 space-y-2 flex-1">
                  {[
                    "Aisle song, signing of the register (up to 3 songs), and exit song.",
                    "Two 30-minute live sets with a curated playlist between sets.",
                    "First dances and a 90-minute live set.",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2 text-[0.88rem] leading-6 text-[#545454]">
                      <span className="mt-[0.4rem] w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)] shrink-0" aria-hidden="true" />
                      {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[0.72rem] leading-5 text-[#888888]">One song learnt to order. Everything else from our repertoire.</p>
                <div className="mt-5 pt-4 border-t border-[var(--line-soft)]">
                  <p className="text-[1.6rem] font-semibold tracking-tight text-[#2C2C2C]">£1800</p>
                </div>
              </article>
            </div>
          </div>

          {/* SURPRISE SINGERS */}
          <div className="mt-10 pt-10 border-t border-[var(--line-soft)]">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-gold)] mb-6">
              Surprise Singers
            </p>
            <article className="info-card p-5 md:p-6 flex flex-col">
              <h3 className="section-subheading text-[1.2rem]">Surprise Singers</h3>
              <p className="section-copy mt-3 text-[0.88rem] leading-6 text-[#545454] flex-1">
                An unexpected vocal performance during your drinks reception or meal. The band appears unannounced — a completely different kind of booking.
              </p>
              <div className="mt-5 pt-4 border-t border-[var(--line-soft)]">
                <p className="text-[1.6rem] font-semibold tracking-tight text-[#2C2C2C]">£950</p>
              </div>
            </article>
          </div>

          {/* ADD-ONS */}
          <div className="mt-10">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-gold)] mb-6">
              Add-ons
            </p>
            <article className="info-card p-5 md:p-6 space-y-0">
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-[var(--line-soft)]">
                <div>
                  <h3 className="section-subheading text-[1.1rem]">Keepsake Recording</h3>
                  <p className="section-copy mt-1 text-[0.88rem] leading-6">
                    A professional recording of one song from your booking.
                  </p>
                  <p className="mt-2 text-[0.78rem] text-[#888888]">Available with any existing booking.</p>
                </div>
                <p className="text-[1.4rem] font-semibold tracking-tight text-[#2C2C2C] shrink-0">£150</p>
              </div>
              <div className="flex items-start justify-between gap-4 pt-4">
                <div>
                  <h3 className="section-subheading text-[1.1rem]">Saxophone Power Hour</h3>
                  <p className="section-copy mt-1 text-[0.88rem] leading-6">
                    A live saxophone set added to your booking.
                  </p>
                  <p className="mt-2 text-[0.78rem] text-[#888888]">Available with any existing booking.</p>
                </div>
                <p className="text-[1.4rem] font-semibold tracking-tight text-[#2C2C2C] shrink-0">£370</p>
              </div>
              <div className="flex items-start justify-between gap-4 pt-4 border-t border-[var(--line-soft)]">
                <div>
                  <h3 className="section-subheading text-[1.1rem]">Dinner</h3>
                  <p className="section-copy mt-1 text-[0.88rem] leading-6">
                    Your epic entrance to dinner, then a personal playlist through the PA for the meal.
                  </p>
                  <p className="mt-2 text-[0.78rem] text-[#888888]">Available with any existing booking.</p>
                </div>
                <p className="text-[1.4rem] font-semibold tracking-tight text-[#2C2C2C] shrink-0">£300</p>
              </div>
            </article>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#211d19] py-12 md:py-20">
        <div className="section-shell page-gutter text-center">
          <h2 className="section-heading-inverse">
            Ready to check your date?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            Tell us your wedding date and venue and we&apos;ll confirm availability
            and help you plan the right music for your day.
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

      {/* FORMATS */}
      <section className="bg-[var(--page-ivory)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="section-intro mb-10">
            <p className="eyebrow mb-4">Formats</p>
            <h2 className="section-title section-heading">
              Choose how you want the music to feel.
            </h2>
            <p className="section-copy mt-4 text-base">
              If you are looking for something more interactive, more relaxed or
              more high-energy, these formats give you another way to shape the
              feel of the day.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ways.map((way) => (
              <article
                key={way.label}
                className="soft-card p-6 md:p-7"
              >
                <FeatureIcon name={way.icon} />
                <h3 className="mt-4 text-[1.05rem] font-semibold text-[#2C2C2C]">
                  {way.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#545454]">{way.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-[var(--page-stone)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="section-intro">
            <p className="eyebrow mb-4">What Couples Say</p>
            <h2 className="section-title section-heading">
              Words from people who had us on their day.
            </h2>
          </div>
          <div className="mt-10 grid lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <blockquote
                key={testimonial.quote}
                className={`py-5 md:py-6 md:px-6 ${i === 0 ? "md:pl-0" : ""} ${
                  i === testimonials.length - 1 ? "md:pr-0" : ""
                } ${
                  i < testimonials.length - 1
                    ? "border-b border-[var(--line-soft)] md:border-b-0 md:border-r"
                    : ""
                }`}
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

      {/* WHAT'S INCLUDED */}
      <section className="bg-[var(--page-ivory)] py-6 md:py-10">
        <div className="section-shell page-gutter">
          <div className="section-intro mb-8">
            <p className="eyebrow mb-4">What&apos;s Included</p>
            <h2 className="section-title section-heading">
              The same calm, professional support behind every booking.
            </h2>
            <p className="section-copy mt-4 text-base">
              Alongside the performance itself, we make the practical side easy
              so your wedding feels smooth from first contact to final song.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {supportItems.map((item) => (
              <article key={item.title} className="soft-card p-6 md:p-7">
                <FeatureIcon name={item.icon} className="mb-4" />
                <p className="eyebrow mb-4">{item.label}</p>
                <h3 className="section-subheading text-[1.35rem]">{item.title}</h3>
                <p className="section-copy mt-4">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
