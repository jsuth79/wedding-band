import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";

const venues = [
  "Carlowrie Castle",
  "Fasque Castle",
  "Atholl Palace",
  "The Balmoral Hotel",
  "Norton House Hotel",
  "Lodge on Loch Lomond",
  "Balbirnie House",
  "Oran Mor",
  "The Corinthian",
  "Edinburgh City Chambers",
];

const faqs = [
  {
    question: "Where are you based and where can you perform?",
    answer:
      "I am based in Central Scotland and regularly perform across Glasgow, Edinburgh, Lanarkshire, and Stirling. I am always happy to travel further afield. Just let me know your venue when you enquire.",
  },
  {
    question: "Can we choose our own songs for the ceremony?",
    answer:
      "Absolutely. You can choose from my extensive repertoire of acoustic classics and modern hits. I may also be able to learn a special song (subject to availability) to make your walk down the aisle or first dance truly personal.",
  },
  {
    question: "Do you provide your own equipment and insurance?",
    answer:
      "Yes. I provide a professional, compact PA system suitable for both indoor and outdoor settings. For your venue's peace of mind, all my equipment is PAT-tested, and I hold full Public Liability Insurance (PLI).",
  },
  {
    question: "What happens when you aren't singing?",
    answer:
      "There's never any 'dead air'. I provide tailored background music during my short breaks to keep the atmosphere seamless, so you don't need to worry about managing a separate playlist.",
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
              Scottish Wedding Awards 2026
            </p>
            <p className="font-serif text-lg">Ceremony Entertainer of the Year</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-stone-600" />
          <div className="text-white">
            <p className="text-[#C4A882] text-xs uppercase tracking-wider mb-1">
              Confetti Awards 2025
            </p>
            <p className="font-serif text-lg">Finalist &bull; Best Ceremony Entertainer</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-stone-600" />
          <div className="text-white">
            <p className="text-[#C4A882] text-xs uppercase tracking-wider mb-1">
              UKbride
            </p>
            <p className="font-serif text-lg">Approved Wedding Supplier</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-6">
                Your Vocal Soundtrack for Life&apos;s Special Moments
              </h2>
              <p className="text-[#444444] leading-relaxed mb-6">
                Trained at Napier University and Berklee College of Music in
                Boston, I&apos;ve dedicated my career to creating the perfect musical
                atmosphere for weddings and events across Scotland.
              </p>
              <p className="text-[#444444] leading-relaxed mb-6">
                Whether you&apos;re planning an intimate ceremony, a lively drinks
                reception, or an unforgettable evening celebration, I work
                closely with you to curate a repertoire that tells your story
                and moves your guests.
              </p>
              <p className="text-[#444444] leading-relaxed mb-8">
                I handle all bookings personally, ensuring you receive dedicated
                attention from your first enquiry to your last dance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/447740360678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-white px-8 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
                >
                  <span className="font-medium">Check My Availability</span>
                  <span className="text-xs normal-case tracking-normal mt-1 opacity-90">
                    via WhatsApp (1-2 hour response)
                  </span>
                </a>
                <Link
                  href="/enquire"
                  className="inline-flex flex-col items-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-8 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
                >
                  <span className="font-medium">Check My Availability</span>
                  <span className="text-xs normal-case tracking-normal mt-1 opacity-90">
                    via Contact Form
                  </span>
                </Link>
              </div>
            </div>
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/641787c199b0b17ed0758ebc/5acddd01-44e6-4e2e-b7e5-e41df6af1e9d/tempImageCmiaaB.jpg"
                alt="Nicola Mason"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-24 px-6 bg-[#FCFCFC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Common Questions &amp; Planning
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-stone-200 pb-8">
                <h3 className="text-lg font-medium text-[#2C2C2C] mb-3">
                  {faq.question}
                </h3>
                <p className="text-[#444444] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/enquire"
              className="inline-block text-[#C4A882] border-b-2 border-[#C4A882] pb-1 hover:text-[#A68B5B] hover:border-[#A68B5B] transition-colors uppercase text-sm tracking-wider"
            >
              View All Frequently Asked Questions →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-4">
              Tailored to Your Occasion
            </h2>
            <p className="text-[#444444] max-w-2xl mx-auto">
              From wedding ceremonies to corporate events, I provide professional
              live entertainment with state-of-the-art audio equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/weddings" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/641787c199b0b17ed0758ebc/4611dfff-10dc-4704-b047-81633afcc4d5/tempImagetCYvTS.jpg"
                    alt="Nicola Mason singing at a wedding"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#C4A882] transition-colors">
                    Weddings
                  </h3>
                  <p className="text-stone-200 text-sm mb-2">
                    Ceremonies, drinks receptions &amp; evening entertainment
                  </p>
                  <p className="text-[#C4A882] text-sm font-medium">
                    Packages from £325
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/events" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/641787c199b0b17ed0758ebc/60d8b844-bedb-433d-9c34-97e87f72946e/tempImagekF7sSa.jpg"
                    alt="Nicola Mason at an event"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#C4A882] transition-colors">
                    Events
                  </h3>
                  <p className="text-stone-200 text-sm">
                    Corporate functions, private parties &amp; celebrations
                  </p>
                </div>
              </div>
            </Link>
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
            What Couples Say
          </h2>

          <div className="space-y-12">
            <blockquote className="text-xl md:text-2xl text-[#444444] italic leading-relaxed">
              &ldquo;Nicola is a phenomenal singer with a beautiful voice. Nothing
              was too big an ask &mdash; she went above and beyond to make our day
              truly special.&rdquo;
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
            Let&apos;s Create Something Beautiful
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto">
            I&apos;d love to hear about your upcoming celebration. Get in touch to
            check availability and discuss how we can make your day unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/447740360678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-white px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check My Availability</span>
              <span className="text-xs normal-case tracking-normal mt-1 opacity-90">
                via WhatsApp (1-2 hour response)
              </span>
            </a>
            <Link
              href="/enquire"
              className="inline-flex flex-col items-center border border-white text-white hover:bg-white hover:text-[#2C2C2C] px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check My Availability</span>
              <span className="text-xs normal-case tracking-normal mt-1 opacity-90">
                via Contact Form
              </span>
            </Link>
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
              Trusted at Scotland&apos;s Finest Venues
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

      {/* Video */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              See & Hear Nicola in Action
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">
              A selection of videos from my YouTube channel
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[#888888]">

          </div>
        </div>
      </section>

            {/* Social */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Behind the Scenes — Follow Nicola on Instagram
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">
              A selection of content from my Instagram
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[#888888]">

          </div>
        </div>
      </section>

    </>
  );
}
