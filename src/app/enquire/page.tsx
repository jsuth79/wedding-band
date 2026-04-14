import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Book a Wedding Band in Scotland | Enquire — The Clooneys",
  description:
    "Enquire about booking The Clooneys for your wedding or event in Scotland. Share your date and venue and we'll confirm availability within 24 hours.",
  alternates: {
    canonical: "/enquire",
  },
  openGraph: {
    siteName: "The Clooneys Wedding & Events Band",
    title: "Book a Wedding Band in Scotland | Enquire — The Clooneys",
    description:
      "Enquire about booking The Clooneys for your wedding or event in Scotland. Share your date and venue and we'll confirm availability within 24 hours.",
    url: "https://www.theclooneys.co.uk/enquire",
    images: [{ url: "/images/the-clooneys-web.jpg", width: 1200, height: 630, alt: "The Clooneys Wedding Band performing live" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Wedding Band in Scotland | Enquire — The Clooneys",
    description:
      "Enquire about booking The Clooneys for your wedding or event in Scotland. Share your date and venue and we'll confirm availability within 24 hours.",
    images: ["/images/the-clooneys-web.jpg"],
  },
};

const guidance = [
  "Your wedding date or event date",
  "Venue or area",
  "The parts of the day you want music for",
  "Any songs or moments that matter to you",
];

const answers = [
  {
    question: "How quickly do you reply?",
    answer: "Usually within 24 hours, and often sooner on WhatsApp.",
  },
  {
    question: "What areas do you cover?",
    answer: "We are based in Scotland and perform across the UK and for destination weddings.",
  },
  {
    question: "Can you learn a specific song?",
    answer: "Yes, we are always happy to talk through meaningful song requests where timings allow.",
  },
];

export default function EnquirePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: answers.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <div className="pt-20">
      <section className="bg-[var(--page-ivory)] py-12 md:py-20">
        <div className="section-shell page-gutter grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="eyebrow mb-4">Enquire</p>
            <h1 className="section-title section-heading">
              Check availability for your date.
            </h1>
            <p className="section-copy mt-6 max-w-2xl text-lg">
              Whether you are planning a wedding, private party or corporate
              event, this is the final step. Share your date, venue and what you
              have in mind, and we&apos;ll come back with availability, next steps
              and the option that fits best.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/447740360678"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                WhatsApp — Fastest Response
              </a>
            </div>
            <p className="mt-4 text-sm text-[#888888]">
              Or use the form below for a structured enquiry. Weddings are our
              most common enquiry, but events and private parties are welcome too.
            </p>
          </div>
          <div className="panel-luxe rounded-[32px] p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-brand-gold-dark)]">
              Helpful to include
            </p>
            <ul className="mt-4 space-y-3 text-[#444444]">
              {guidance.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-[var(--color-brand-gold)]">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-[20px] bg-[var(--page-stone)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-gold)]">
                Response time
              </p>
              <p className="mt-1 text-sm text-[#444444]">
                We respond within 24 hours — usually much sooner on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--page-stone)] py-6 md:py-10">
        <div className="section-shell page-gutter grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="panel-luxe rounded-[36px] p-6 md:p-8">
            <EnquiryForm />
          </div>

          <div className="space-y-6">
            <div className="panel-luxe rounded-[30px] p-8">
              <h2 className="section-subheading">Other Ways to Reach Us</h2>
              <div className="mt-6 space-y-5 text-[#444444]">
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-[#888888]">Email</p>
                  <a
                    href="mailto:info@theclooneys.co.uk"
                    className="mt-1 inline-block text-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold-dark)]"
                  >
                    info@theclooneys.co.uk
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-[#888888]">Phone / WhatsApp</p>
                  <a
                    href="tel:+447740360678"
                    className="mt-1 inline-block text-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold-dark)]"
                  >
                    +44 7740 360678
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-[#888888]">Based In</p>
                  <p className="mt-1">Scotland</p>
                  <p className="mt-1 text-sm">Serving Scotland, the UK and destination weddings</p>
                </div>
              </div>
              <a
                href="https://wa.me/447740360678"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 w-full"
              >
                WhatsApp Availability Check
              </a>
            </div>

            <div className="rounded-[30px] bg-[var(--page-stone)] p-8">
              <h2 className="section-subheading">Quick Answers</h2>
              <div className="mt-6 space-y-5">
                {answers.map((item) => (
                  <div key={item.question}>
                    <p className="font-medium text-[#2C2C2C]">{item.question}</p>
                    <p className="section-copy mt-2 text-sm">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.16em] text-[#888888]">
                Professional Wedding &amp; Events Band
              </p>
              <div className="mt-3 flex justify-center gap-1 text-[var(--color-brand-gold)]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-2 text-sm text-[#444444]">
                5-star reviews on Google &amp; Facebook
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
