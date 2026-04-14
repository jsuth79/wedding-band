import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FeatureIcon from "@/components/FeatureIcon";

export const metadata: Metadata = {
  title: "Live Wedding Band Scotland | Packages & Prices — The Clooneys",
  description:
    "Live wedding band Scotland covering ceremonies, drinks receptions, dinner and evening parties. From the aisle to the dancefloor — The Clooneys.",
  alternates: {
    canonical: "/weddings",
  },
  openGraph: {
    siteName: "The Clooneys Wedding & Events Band",
    title: "Live Wedding Band Scotland | Packages & Prices — The Clooneys",
    description:
      "Live wedding band Scotland covering ceremonies, drinks receptions, dinner and evening parties. From the aisle to the dancefloor — The Clooneys.",
    url: "https://www.theclooneys.co.uk/weddings",
    images: [{ url: "/images/the-clooneys-web.jpg", width: 1200, height: 630, alt: "The Clooneys Wedding Band performing live" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Wedding Band Scotland | Packages & Prices — The Clooneys",
    description:
      "Live wedding band Scotland covering ceremonies, drinks receptions, dinner and evening parties. From the aisle to the dancefloor — The Clooneys.",
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
    label: "Singing Waiters / Roaming Singers",
    copy: "An interactive roaming vocal set that moves through your guests and creates a surprise, high-energy atmosphere up close.",
  },
  {
    icon: "party" as const,
    label: "Party Trio",
    copy: "A high-impact three-vocal performance built for evenings, dancefloors and creating a proper party atmosphere.",
  },
];

const packages = [
  {
    name: "The Ceremony",
    description:
      "Beautiful live vocals for the aisle entrance, signing and exit, with carefully chosen songs that give your ceremony warmth and emotional impact.",
    image: "/images/the-clooneys-ceremony-sq.webp",
    includes: ["Aisle entrance music", "Signing music", "Exit music"],
    prices: [
      { label: "Duo", price: "£695" },
      { label: "Trio", price: "£975" },
    ],
  },
  {
    name: "Drinks Reception",
    description:
      "Relaxed but polished live sets while guests mingle, celebrate and settle into the day. A lovely bridge from ceremony to reception.",
    image: "/images/the-clooneys-drinks-reception-p.webp",
    includes: ["Acoustic live set", "Perfect for canapes and photos", "Warm upbeat atmosphere"],
    prices: [
      { label: "Duo", price: "£700" },
      { label: "Trio", price: "£1050" },
    ],
  },
  {
    name: "Daytime Package",
    description:
      "Ceremony and drinks reception combined into one seamless live music experience, with a consistent tone from the first arrivals through to the reception.",
    image: "/images/the-clooneys-roaming-singers-l.webp",
    includes: ["Ceremony coverage", "Reception coverage", "Simple all-in daytime flow"],
    prices: [
      { label: "Duo", price: "£1150" },
      { label: "Trio", price: "£1725" },
    ],
  },
  {
    name: "Complete Package",
    description:
      "The fullest daytime experience, covering the key emotional moments and the celebration in between. Designed for couples who want the music woven throughout the day.",
    image: "/images/the-clooneys-band-2-l.webp",
    includes: ["Ceremony", "Drinks reception", "First dances"],
    prices: [
      { label: "Duo", price: "£1590" },
      { label: "Trio", price: "£2385" },
    ],
  },
  {
    name: "Secret Singers",
    description:
      "Unexpected vocal performances that appear from nowhere and turn the room instantly. Ideal for high-energy meal entertainment and a talking point guests never forget.",
    image: "/images/the-clooneys-surprise-singers-sq.webp",
    includes: ["Interactive performance", "Perfect during the meal", "Big surprise factor"],
    prices: [
      { label: "Duo", price: "£795" },
      { label: "Trio", price: "£995" },
    ],
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


      {/* PACKAGES */}
      <section id="packages" className="bg-[var(--page-stone)] py-12 md:py-20">
        <div className="section-shell page-gutter">
          <div className="section-intro mb-10">
            <p className="eyebrow mb-4">Packages</p>
            <h2 className="section-title section-heading">
              Start with the parts of the day you want covered.
            </h2>
            <p className="section-copy mt-4 text-base">
              Most couples choose one of these starting points, then tailor the
              finer details around their venue, timings and guest list.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className="info-card flex h-full flex-col overflow-hidden p-5 md:p-6"
              >
                <h3 className="section-subheading text-[1.45rem]">{pkg.name}</h3>
                <div className="mt-4 relative aspect-square overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={`The Clooneys — ${pkg.name}`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-5 flex flex-1 flex-col">
                  <p className="section-copy text-[0.95rem] leading-7">{pkg.description}</p>
                  <ul className="mt-8 mb-6 space-y-3">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-[#545454]"
                      >
                        <span
                          className="mt-1.5 h-2 w-2 rounded-full bg-[var(--color-brand-gold)]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8 border-t border-[var(--line-soft)]">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-gold)]">
                      Prices
                    </p>
                    <div className="mt-3 space-y-2">
                      {pkg.prices.map((price) => (
                        <div
                          key={price.label}
                          className="flex items-center justify-between text-sm text-[#444444]"
                        >
                          <span>{price.label}</span>
                          <span className="font-semibold text-[#2C2C2C]">{price.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm leading-6 text-[#5e4d41]">
            Solo prices are also available on request.{" "}
            <a
              href="https://wa.me/447740360678"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#2C2C2C]"
            >
              WhatsApp us
            </a>{" "}
            or{" "}
            <Link href="/enquire" className="underline hover:text-[#2C2C2C]">
              send an enquiry
            </Link>{" "}
            for more details.
          </p>
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
