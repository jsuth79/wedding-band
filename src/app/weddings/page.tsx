import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import YouTubeGrid from "@/components/YouTubeGrid";
import { allVideos } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Wedding Band Scotland | The Clooneys",
  description:
    "From your aisle walk to a full dancefloor. The Clooneys provide live wedding music for ceremonies, drinks receptions, dinner and evening parties across Scotland and the UK.",
  alternates: {
    canonical: "/weddings",
  },
  openGraph: {
    title: "Wedding Band Scotland | The Clooneys",
    description:
      "From your aisle walk to a full dancefloor. Live wedding music for ceremonies, drinks receptions, dinner and evening parties across Scotland.",
    url: "https://www.theclooneys.co.uk/weddings",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Band Scotland | The Clooneys",
    description:
      "From your aisle walk to a full dancefloor. Live wedding music for ceremonies, drinks receptions, dinner and evening parties across Scotland.",
  },
};


const ways = [
  {
    label: "Singing Waiters",
    copy: "Disguised as waiting staff, we break into song mid-service. Perfect for the wedding meal — a big surprise guests never see coming.",
  },
  {
    label: "Roaming Band",
    copy: "Moving through your guests, creating atmosphere up close. Interactive, warm and full of energy — ideal for drinks receptions.",
  },
  {
    label: "Full Band",
    copy: "Stage-ready performance with full sound. Built for evenings, dancefloors and creating a proper party atmosphere.",
  },
  {
    label: "Acoustic Moments",
    copy: "A stripped-back, intimate sound perfect for ceremonies, dinner or the quieter parts of your day.",
  },
];

const packages = [
  {
    name: "The Ceremony",
    description:
      "Beautiful live vocals for the aisle entrance, signing and exit, with carefully chosen songs that give your ceremony warmth and emotional impact.",
    image:
      "https://images.squarespace-cdn.com/content/65f8c528b5449106e4650e68/a552687e-e421-4227-8f7f-5e565fcc9b23/490661475_122257962626066780_8872813234820613686_n.jpg?content-type=image%2Fjpeg",
    includes: ["Aisle entrance music", "Signing music", "Exit music"],
    prices: [
      { label: "Solo", price: "£325" },
      { label: "Duo", price: "£695" },
      { label: "Trio", price: "£975" },
    ],
  },
  {
    name: "Drinks Reception",
    description:
      "Relaxed but polished live sets while guests mingle, celebrate and settle into the day. A lovely bridge from ceremony to reception.",
    image:
      "https://images.squarespace-cdn.com/content/65f8c528b5449106e4650e68/5a32b323-e457-4972-82a9-a668b8a70074/456965803_17887043475069880_4128126161902035965_n.jpg?content-type=image%2Fjpeg",
    includes: ["Acoustic live set", "Perfect for canapes and photos", "Warm upbeat atmosphere"],
    prices: [
      { label: "Solo", price: "£350" },
      { label: "Duo", price: "£700" },
      { label: "Trio", price: "£1050" },
    ],
  },
  {
    name: "Daytime Package",
    description:
      "Ceremony and drinks reception combined into one seamless live music experience, with a consistent tone from the first arrivals through to the reception.",
    image:
      "https://images.squarespace-cdn.com/content/65f8c528b5449106e4650e68/cbc65cef-eec7-411c-8fbf-9ee94f847518/588734913_122298915152066780_2468145125351396523_n.jpg?content-type=image%2Fjpeg",
    includes: ["Ceremony coverage", "Reception coverage", "Simple all-in daytime flow"],
    prices: [
      { label: "Solo", price: "£575" },
      { label: "Duo", price: "£1150" },
      { label: "Trio", price: "£1725" },
    ],
  },
  {
    name: "Complete Package",
    description:
      "The fullest daytime experience, covering the key emotional moments and the celebration in between. Designed for couples who want the music woven throughout the day.",
    image:
      "https://images.squarespace-cdn.com/content/65f8c528b5449106e4650e68/24bd9574-d5dd-4e13-a0dc-663ae071c515/485144419_122252646410066780_367602104697355397_n.jpg?content-type=image%2Fjpeg",
    includes: ["Ceremony", "Drinks reception", "First dances"],
    prices: [
      { label: "Solo", price: "£795" },
      { label: "Duo", price: "£1590" },
      { label: "Trio", price: "£2385" },
    ],
  },
  {
    name: "Secret Singers",
    description:
      "Unexpected vocal performances that appear from nowhere and turn the room instantly. Ideal for high-energy meal entertainment and a talking point guests never forget.",
    image:
      "https://images.squarespace-cdn.com/content/65f8c528b5449106e4650e68/954a10d7-d6fb-4dba-b985-7f38aaf5fbae/481789981_122246168978066780_3483161538487758072_n.jpg?content-type=image%2Fjpeg",
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
      "The Clooneys are phenomenal performers with stunning harmonies. Nothing was too big an ask and they made the whole day feel incredibly special.",
    source: "Wedding client",
  },
  {
    quote:
      "We still get messages from guests saying the music was the highlight of the day. They read the room perfectly from ceremony right through to the evening.",
    source: "Wedding client",
  },
  {
    quote:
      "Every part of the process felt easy, thoughtful and professional. From the first enquiry to the last song of the night.",
    source: "Wedding client",
  },
];

// 3 clips labelled by moment
const weddingVideos = allVideos.slice(0, 3);

const supportItems = [
  {
    label: "Included",
    title: "Professional support",
    copy: "We help shape the timing, song flow and practical setup so your music feels considered from first contact to final performance.",
  },
  {
    label: "Venue Ready",
    title: "PA and insurance covered",
    copy: "We come prepared with the professional equipment and documentation venues usually need, helping things run smoothly on the day.",
  },
  {
    label: "Tailored",
    title: "Built around your plans",
    copy: "If your timings or ideas do not fit neatly into one package, we can talk through a tailored option that suits your wedding best.",
  },
];

export default function WeddingsPage() {
  return (
    <div className="pt-20">

      {/* INTRO */}
      <section className="bg-[var(--page-ivory)] py-14 md:py-24">
        <div className="section-shell page-gutter">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow mb-4">Weddings</p>
            <h1 className="section-title section-heading">
              From your aisle walk to a full dancefloor.
            </h1>
          </div>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] lg:items-start">
            <div className="max-w-3xl">
              <p className="section-copy text-lg">
                The Clooneys cover every part of your wedding day with live music
                that feels considered and seamless — from the first quiet notes of
                your ceremony to the last song of the night.
              </p>
              <p className="section-copy mt-4 text-lg">
                Each booking is tailored to your venue, timeline and the moments
                that matter most to you. We&apos;ll guide you through the options and
                make sure the music fits perfectly.
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
                Check Your Date
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* WAYS TO HAVE US */}
      <section className="bg-[var(--page-ivory)] py-14 md:py-24">
        <div className="section-shell page-gutter">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow mb-4">Ways to Have Us</p>
            <h2 className="section-title section-heading">
              Four formats, one band — built around your day.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ways.map((way) => (
              <article
                key={way.label}
                className="rounded-[24px] border border-[#d7dde3] bg-white p-6"
              >
                <h3 className="text-[1.05rem] font-semibold text-[#2C2C2C]">
                  {way.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#545454]">{way.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="#packages" className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2C2C2C] hover:text-[#6f7c8c]">
              View Pricing →
            </a>
            <p className="mt-1.5 text-[0.68rem] uppercase tracking-[0.16em] text-[#999]">No hidden costs</p>
          </div>
        </div>
      </section>

      {/* VIDEO BY MOMENT */}
      {/* PACKAGES */}
      <section id="packages" className="bg-[var(--page-ivory)] py-10 md:py-16">
        <div className="section-shell page-gutter">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow mb-4">Packages</p>
            <h2 className="section-title section-heading">
              Most couples choose one of these options.
            </h2>
            <p className="section-copy mt-4 text-base">
              These are starting points — every booking can be shaped around your
              specific plans, venue and timings.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className="grid gap-5 border-t border-[#d7dde3] pt-6"
              >
                <div className="relative aspect-[16/8] overflow-hidden rounded-[20px]">
                  <Image
                    src={pkg.image}
                    alt={`The Clooneys — ${pkg.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="section-subheading text-[1.45rem]">{pkg.name}</h3>
                  <p className="section-copy mt-4 text-base">{pkg.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {pkg.includes.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[var(--page-stone)] px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#5d6775]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="my-6 max-w-sm border-t border-b border-stone-200 py-5">
                    {pkg.prices.map((price) => (
                      <div
                        key={price.label}
                        className="mb-2 flex items-center justify-between text-base text-[#444444] last:mb-0"
                      >
                        <span>{price.label}</span>
                        <span className="font-semibold text-[#2C2C2C]">{price.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO BY MOMENT */}
      <YouTubeGrid
        videos={weddingVideos}
        eyebrow="Watch Live"
        heading="See each part of the day in action"
        showLabels
        background="bg-[var(--page-stone)]"
      />

      {/* REVIEWS */}
      <section className="bg-[var(--page-stone)] py-14 md:py-24">
        <div className="section-shell page-gutter">
          <div className="max-w-3xl">
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
                    ? "border-b border-[#d7dde3] md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <p className="text-[1.05rem] font-medium leading-7 text-[#2C2C2C]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-1 text-[#6f7c8c]">
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
      <section className="bg-[var(--page-ivory)] py-8 md:py-12">
        <div className="section-shell page-gutter">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow mb-4">What&apos;s Included</p>
            <h2 className="section-title section-heading">
              Everything designed to make the music feel easy on the day.
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {supportItems.map((item) => (
              <article key={item.title} className="border-t border-[#d7dde3] pt-5">
                <p className="eyebrow mb-4">{item.label}</p>
                <h3 className="section-subheading text-[1.35rem]">{item.title}</h3>
                <p className="section-copy mt-4">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#211d19] py-14 md:py-24">
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
    </div>
  );
}
