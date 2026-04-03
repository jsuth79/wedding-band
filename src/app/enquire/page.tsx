import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Get in Touch | The Clooneys",
  description:
    "Contact The Clooneys to discuss your wedding or event entertainment. Check availability and receive a personalised quote.",
  alternates: {
    canonical: "/enquire",
  },
  openGraph: {
    title: "Get in Touch | The Clooneys",
    description:
      "Contact The Clooneys to discuss your wedding or event entertainment. Check availability and receive a personalised quote.",
    url: "https://www.theclooneys.co.uk/enquire",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get in Touch | The Clooneys",
    description:
      "Contact The Clooneys to discuss your wedding or event entertainment. Check availability and receive a personalised quote.",
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
    answer: "Usually within 1-2 hours during the day, and often sooner on WhatsApp.",
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
  return (
    <div className="pt-20">
      <section className="bg-[var(--page-ivory)] py-14 md:py-24">
        <div className="section-shell page-gutter grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="eyebrow mb-4">Get In Touch</p>
            <h1 className="section-title section-heading">
              Tell us about your date and we will help with the rest.
            </h1>
            <p className="section-copy mt-6 max-w-2xl text-lg">
              Whether you are still exploring options or already know exactly what
              you want, send over the details and we will come back with
              availability, next steps and the package that feels right.
            </p>
          </div>
          <div className="panel-luxe rounded-[32px] p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-[#586474]">
              Helpful to include
            </p>
            <ul className="mt-4 space-y-3 text-[#444444]">
              {guidance.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-[#6f7c8c]">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[var(--page-stone)] py-8 md:py-12">
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
                    className="mt-1 inline-block text-[#6f7c8c] hover:text-[#586474]"
                  >
                    info@theclooneys.co.uk
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-[#888888]">Phone / WhatsApp</p>
                  <a
                    href="tel:+447740360678"
                    className="mt-1 inline-block text-[#6f7c8c] hover:text-[#586474]"
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
              <div className="mt-3 flex justify-center gap-1 text-[#6f7c8c]">
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
  );
}
