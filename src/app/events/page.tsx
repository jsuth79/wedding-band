import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Singer Services | Nicola Mason",
  description:
    "Professional event singer for corporate functions, private parties, and celebrations. Based in Glasgow, serving Central Scotland.",
};

const eventTypes = [
  {
    title: "Corporate Events",
    description:
      "From awards ceremonies to company celebrations, I provide sophisticated entertainment that elevates your corporate event. Professional, punctual, and adaptable to your brand's tone.",
    image: "https://images.squarespace-cdn.com/content/v1/641787c199b0b17ed0758ebc/1682725500724-WEFCWRLBWG777INITVNI/unsplash-image-rxpThOwuVgE.jpg",
    features: [
      "Awards ceremonies & gala dinners",
      "Conference entertainment",
      "Product launches & brand events",
      "Client hospitality events",
      "Christmas parties & summer balls",
      "Team building days (in-person or online)",
    ],
  },
  {
    title: "Private Celebrations",
    description:
      "Whether it's a milestone birthday, anniversary celebration, or garden party, I'll create the perfect atmosphere for your gathering with a tailored setlist.",
    image: "https://images.squarespace-cdn.com/content/v1/641787c199b0b17ed0758ebc/1679789846255-8OD4II6DBW7J2TANSHK0/unsplash-image-fIHozNWfcvs.jpg",
    features: [
      "Milestone birthdays (30th, 40th, 50th+)",
      "Anniversary celebrations",
      "Garden parties & summer events",
      "Christenings & baby showers",
      "Engagement parties",
      "Dinner party entertainment",
    ],
  },
  {
    title: "Funeral & Memorial Services",
    description:
      "I bring sensitivity and professionalism to life's most difficult moments, providing comfort through music at services and gatherings.",
    image: "https://images.squarespace-cdn.com/content/v1/641787c199b0b17ed0758ebc/6843d2c1-7bde-455d-ab91-b3f4fc4ed9d1/unsplash-image-iSyyY1GfYSw.jpg",
    features: [
      "Church or civil ceremonies",
      "Crematorium services",
      "Graveside services",
      "Post-service gatherings",
      "Hymns and popular music available",
      "Additional musicians available",
    ],
  },
];

export default function EventsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Event Services
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#2C2C2C] mb-6">
            Entertainment for Every Occasion
          </h1>
          <p className="text-xl text-[#444444] leading-relaxed">
            From corporate galas to intimate celebrations, I bring versatility,
            professionalism, and a touch of magic to events of all sizes across
            Central Scotland.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {eventTypes.map((event, index) => (
            <div
              key={event.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] mb-4">
                  {event.title}
                </h2>
                <p className="text-[#444444] leading-relaxed mb-6">
                  {event.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {event.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-[#444444]"
                    >
                      <span className="text-[#C4A882]">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/enquire"
                  className="inline-block text-[#C4A882] border-b-2 border-[#C4A882] pb-1 hover:text-[#A68B5B] hover:border-[#A68B5B] transition-colors"
                >
                  Enquire about {event.title.toLowerCase()}
                </Link>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6 bg-[#FCFCFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              What&apos;s Included
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">
              The Full Package
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Professional PA",
                description:
                  "State-of-the-art audio equipment suitable for indoor and outdoor venues",
              },
              {
                title: "Flexible Setlist",
                description:
                  "Repertoire tailored to your event theme and audience preferences",
              },
              {
                title: "Fully Insured",
                description:
                  "Full Public Liability Insurance with PAT-tested equipment",
              },
              {
                title: "Song Requests",
                description:
                  "Happy to learn specific songs for your event (subject to availability)",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-[#C4A882]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#C4A882] text-2xl">♪</span>
                </div>
                <h3 className="text-lg font-serif text-[#2C2C2C] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#444444] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Coverage Area
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] mb-6">
            Serving Central Scotland
          </h2>
          <p className="text-[#444444] mb-8">
            Based in Glasgow, I regularly perform at venues across:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Glasgow",
              "Edinburgh",
              "Lanarkshire",
              "Stirling",
              "Ayrshire",
              "The Lothians",
            ].map((area) => (
              <span
                key={area}
                className="px-6 py-2 bg-[#F5F5F5] rounded-full text-[#2C2C2C]"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-[#888888] text-sm mt-8">
            40 miles travel included in all packages. Additional mileage at 45p
            per mile.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Planning an Event?
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto">
            I&apos;d love to discuss how I can make your event memorable. Get in
            touch with details about your occasion for a personalised quote.
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
    </div>
  );
}
