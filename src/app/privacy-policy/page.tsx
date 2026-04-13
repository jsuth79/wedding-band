import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Clooneys",
  description:
    "Privacy policy for The Clooneys wedding and events band. How we collect, use and protect your personal data under UK data protection law.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <section className="bg-[var(--page-ivory)] py-12 md:py-20">
        <div className="section-shell page-gutter max-w-3xl">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="section-title section-heading mb-10">Privacy Policy</h1>
          <p className="text-sm text-[#888888] mb-10">Last updated: April 2026</p>

          <div className="space-y-10 text-[#444444]">

            <div>
              <h2 className="section-subheading mb-3">Overview</h2>
              <p className="text-base leading-7">
                The Clooneys (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a professional wedding and events band
                based in Scotland. This policy explains what personal data we collect, how we use
                it, and your rights under UK data protection law.
              </p>
            </div>

            <div>
              <h2 className="section-subheading mb-3">Data We Collect</h2>
              <p className="text-base leading-7 mb-3">We collect information through:</p>
              <ul className="space-y-2 text-base leading-7 list-none pl-4">
                <li className="flex gap-3"><span className="text-[var(--color-brand-gold)] mt-1">●</span><span>Enquiry form submissions — your name, email address, phone number, event date, event type and any message you include</span></li>
                <li className="flex gap-3"><span className="text-[var(--color-brand-gold)] mt-1">●</span><span>Direct communication via email or WhatsApp when you contact us</span></li>
                <li className="flex gap-3"><span className="text-[var(--color-brand-gold)] mt-1">●</span><span>Anonymised website analytics (see Analytics section below)</span></li>
              </ul>
            </div>

            <div>
              <h2 className="section-subheading mb-3">How We Use Your Data</h2>
              <p className="text-base leading-7 mb-3">Your information is used to:</p>
              <ul className="space-y-2 text-base leading-7 list-none pl-4">
                <li className="flex gap-3"><span className="text-[var(--color-brand-gold)] mt-1">●</span><span>Respond to your enquiry about our services</span></li>
                <li className="flex gap-3"><span className="text-[var(--color-brand-gold)] mt-1">●</span><span>Communicate with you regarding event details and bookings</span></li>
                <li className="flex gap-3"><span className="text-[var(--color-brand-gold)] mt-1">●</span><span>Manage and fulfil confirmed bookings</span></li>
                <li className="flex gap-3"><span className="text-[var(--color-brand-gold)] mt-1">●</span><span>Monitor website performance and improve the user experience</span></li>
              </ul>
            </div>

            <div>
              <h2 className="section-subheading mb-3">Legal Basis for Processing</h2>
              <p className="text-base leading-7">
                We process your personal data on the basis of <strong>contractual necessity</strong> when
                handling pre-booking communications and confirmed bookings, and on the basis of
                <strong> legitimate interests</strong> for client communication and website optimisation.
              </p>
            </div>

            <div>
              <h2 className="section-subheading mb-3">Third-Party Services</h2>
              <p className="text-base leading-7 mb-3">
                We use the following third-party services which may process your data:
              </p>
              <ul className="space-y-2 text-base leading-7 list-none pl-4">
                <li className="flex gap-3"><span className="text-[var(--color-brand-gold)] mt-1">●</span><span><strong>Zoho Mail</strong> — email delivery for enquiry notifications sent from this website</span></li>
                <li className="flex gap-3"><span className="text-[var(--color-brand-gold)] mt-1">●</span><span><strong>Vercel</strong> — website hosting and infrastructure</span></li>
                <li className="flex gap-3"><span className="text-[var(--color-brand-gold)] mt-1">●</span><span><strong>Umami</strong> — anonymised website analytics (see below)</span></li>
              </ul>
            </div>

            <div>
              <h2 className="section-subheading mb-3">Analytics</h2>
              <p className="text-base leading-7">
                We use Umami for website analytics. Umami is a privacy-focused tool that collects
                anonymised usage data only — it does not use cookies and does not collect any
                personally identifiable information.
              </p>
            </div>

            <div>
              <h2 className="section-subheading mb-3">Data Security</h2>
              <p className="text-base leading-7">
                We apply reasonable technical and organisational security measures to protect your
                personal data. No method of transmission over the internet is completely secure,
                but we take our obligations seriously and work to minimise risk.
              </p>
            </div>

            <div>
              <h2 className="section-subheading mb-3">Retention</h2>
              <p className="text-base leading-7">
                We retain personal data only for as long as necessary — to respond to your
                enquiry, manage a confirmed booking, meet any legal obligations, and resolve
                disputes if they arise. Enquiries that do not result in a booking are not
                retained indefinitely.
              </p>
            </div>

            <div>
              <h2 className="section-subheading mb-3">Your Rights</h2>
              <p className="text-base leading-7 mb-3">
                Under UK GDPR you have the right to:
              </p>
              <ul className="space-y-2 text-base leading-7 list-none pl-4">
                <li className="flex gap-3"><span className="text-[var(--color-brand-gold)] mt-1">●</span><span>Access the personal data we hold about you</span></li>
                <li className="flex gap-3"><span className="text-[var(--color-brand-gold)] mt-1">●</span><span>Request correction of inaccurate data</span></li>
                <li className="flex gap-3"><span className="text-[var(--color-brand-gold)] mt-1">●</span><span>Request erasure of your data</span></li>
                <li className="flex gap-3"><span className="text-[var(--color-brand-gold)] mt-1">●</span><span>Restrict or object to processing</span></li>
              </ul>
              <p className="text-base leading-7 mt-3">
                You also have the right to lodge a complaint with the{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-brand-gold)] underline hover:text-[var(--color-brand-gold-dark)]"
                >
                  Information Commissioner&apos;s Office (ICO)
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="section-subheading mb-3">Contact</h2>
              <p className="text-base leading-7">
                For any questions about this policy or to exercise your rights, please contact us
                at{" "}
                <a
                  href="mailto:info@theclooneys.co.uk"
                  className="text-[var(--color-brand-gold)] underline hover:text-[var(--color-brand-gold-dark)]"
                >
                  info@theclooneys.co.uk
                </a>
                .
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
