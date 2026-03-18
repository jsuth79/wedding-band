import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";

const venues = [
  "Norton House Hotel & Spa, Edinburgh",
  "Below Canvas",
  "Inglewood House",
];

const faqs = [
  {
    question: "Where are you based and where can you perform?",
    answer:
      "We are based in Scotland and regularly perform across Glasgow, Edinburgh, and throughout Scotland and the UK. We're also available for destination weddings. Just let us know your venue when you enquire.",
  },
  {
    question: "Can we choose our own songs?",
    answer:
      "Absolutely. You can choose from our extensive repertoire of classics and modern hits featuring our signature harmonies. We may also be able to learn special songs (subject to availability) to make your celebration truly personal.",
  },
  {
    question: "Do you provide your own equipment and insurance?",
    answer:
      "Yes. We provide professional PA system and lighting suitable for both indoor and outdoor settings. For your venue's peace of mind, all our equipment is PAT-tested, and we hold full Public Liability Insurance (PLI).",
  },
  {
    question: "What happens during breaks?",
    answer:
      "There's never any 'dead air'. We provide tailored background music during our breaks to keep the atmosphere seamless, so you don't need to worry about managing a separate playlist.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Awards Banner */}
      <section className="bg-[#2C2C2C] py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-8 text-center">
          <div className="text-white">
            <p className="text-[#C4A882] text-xs uppercase tracking-wider mb-1">
              Premium Live Entertainment
            </p>
            <p className="font-serif text-lg">Scotland &amp; UK Wide</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-stone-600" />
          <div className="text-white">
            <p className="text-[#C4A882] text-xs uppercase tracking-wider mb-1">
              Professional Band
            </p>
            <p className="font-serif text-lg">Full PA &amp; Lighting Included</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-stone-600" />
          <div className="text-white">
            <p className="text-[#C4A882] text-xs uppercase tracking-wider mb-1">
              Trusted by Venues
            </p>
            <p className="font-serif text-lg">Fully Insured &amp; PAT Tested</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
                About The Clooneys
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-6">
                Elevate Your Event with Signature Vocal Harmonies
              </h2>
              <p className="text-[#444444] leading-relaxed mb-6">
                The Clooneys bring professional excellence to every stage with
                polished live music and signature vocal harmonies that captivate
                audiences across Scotland and the UK.
              </p>
              <p className="text-[#444444] leading-relaxed mb-6">
                From intimate wedding ceremonies to corporate galas and lively
                evening celebrations, we create unforgettable musical experiences
                with our unique arrangements and show-stopping performances.
              </p>
              <p className="text-[#444444] leading-relaxed mb-8">
                Based in Scotland, we&apos;re available for events throughout the UK
                and destination weddings, bringing state-of-the-art sound and
                lighting to make your celebration truly special.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/447740360678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-white px-8 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
                >
                  <span className="font-medium">Check Our Availability</span>
                  <span className="text-xs normal-case tracking-normal mt-1 opacity-90">
                    via WhatsApp (1-2 hour response)
                  </span>
                </a>
                <Link
                  href="/enquire"
                  className="inline-flex flex-col items-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-8 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
                >
                  <span className="font-medium">Check Our Availability</span>
                  <span className="text-xs normal-case tracking-normal mt-1 opacity-90">
                    via Contact Form
                  </span>
                </Link>
              </div>
            </div>
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image
                src="/images/the-clooneys-ceremony2.webp"
                alt="The Clooneys Band"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Kind Words
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-16">
            What Clients Say
          </h2>

          <div className="space-y-12">
            <blockquote className="text-xl md:text-2xl text-[#444444] italic leading-relaxed">
              &ldquo;The Clooneys are phenomenal performers with stunning harmonies.
              Nothing was too big an ask &mdash; they went above and beyond to make
              our celebration truly special.&rdquo;
            </blockquote>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#C4A882] text-xl">
                  ★
                </span>
              ))}
            </div>
            <p className="text-[#888888] text-sm">
              5-star reviews on Google &amp; Facebook
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Let&apos;s Create Something Unforgettable
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto">
            We&apos;d love to hear about your upcoming celebration. Get in touch to
            check availability and discuss how we can make your event unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/447740360678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-white px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check Our Availability</span>
              <span className="text-xs normal-case tracking-normal mt-1 opacity-90">
                via WhatsApp (1-2 hour response)
              </span>
            </a>
            <Link
              href="/enquire"
              className="inline-flex flex-col items-center border border-white text-white hover:bg-white hover:text-[#2C2C2C] px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check Our Availability</span>
              <span className="text-xs normal-case tracking-normal mt-1 opacity-90">
                via Contact Form
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              See & Hear The Clooneys in Action
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] mb-4">
              Live Performance Videos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <div className="aspect-video">
                  <iframe className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/XKc-6xf8_mQ?si=iMyOUelsS_nWbC7u" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <p className="text-center text-sm text-[#444444] mt-3">Video Title Here</p>
              </div>
              <div>
                <div className="aspect-video">
                  <iframe className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/ElDXQQPltmU?si=hZmKMT1EG9RTGVzq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <p className="text-center text-sm text-[#444444] mt-3">Video Title Here</p>
              </div>
              <div>
                <div className="aspect-video">
                  <iframe className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/4cXKL3oPLNA?si=IsV_cejOqEqUm-Sv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <p className="text-center text-sm text-[#444444] mt-3">Video Title Here</p>
              </div>
              <div>
                <div className="aspect-video">
                  <iframe className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/Ay7eYAzIUSk?si=SX1j6HasfLpxJV7n" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <p className="text-center text-sm text-[#444444] mt-3">Video Title Here</p>
              </div>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">
              Trusted at Scotland&apos;s Premier Venues
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[#888888]">
            {venues.map((venue) => (
              <span key={venue} className="text-sm">
                {venue}
              </span>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
