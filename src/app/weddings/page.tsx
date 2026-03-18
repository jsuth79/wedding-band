import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Singer Packages | Nicola Mason",
  description:
    "Wedding singer packages for ceremonies, drinks receptions, and evening entertainment. Serving Glasgow, Edinburgh, and Central Scotland. Packages from £325.",
};

const packages = [
  {
    name: "Ceremony",
    price: "£325",
    description: "Perfect for your ceremony",
    image: "https://images.squarespace-cdn.com/content/v1/641787c199b0b17ed0758ebc/5e3c4c4b-e369-44ce-bf08-e9d63f4e4e78/Nicola+Mason+Wedding+Ceremony",
    features: [
      "Playlist during guest arrival",
      "Aisle entrance song",
      "Song during register signing",
      "Exit/recessional song",
      "Professional PA system included",
    ],
  },
  {
    name: "Drinks Reception",
    price: "£350",
    description: "Entertain your guests",
    image: "https://images.squarespace-cdn.com/content/v1/641787c199b0b17ed0758ebc/f808b349-e328-40d0-b83b-3a0e78f15d3e/Nicola+Mason+Wedding+Drinks",
    features: [
      "Two 45-minute live sets",
      "Playlist between sets",
      "Acoustic classics & modern hits",
      "Perfect for mingling atmosphere",
      "Professional PA system included",
    ],
  },
  {
    name: "Dinner",
    price: "£350",
    description: "Elegant background music",
    image: "https://images.squarespace-cdn.com/content/v1/641787c199b0b17ed0758ebc/c251548e-8aac-4c1d-94a4-4637dba76aea/Nicola+Mason+Wedding+Meal+Singer+Glasgow.JPG",
    features: [
      "Grand entrance song",
      "Two 45-minute soft background sets",
      "Tailored to your meal timing",
      "Relaxed, ambient atmosphere",
      "Professional PA system included",
    ],
  },
  {
    name: "Daytime Package",
    price: "£575",
    description: "Ceremony through reception",
    image: "https://images.squarespace-cdn.com/content/v1/641787c199b0b17ed0758ebc/7e25fb1d-2599-410a-9b80-e90196b417bd/Nicola+Mason+Daytime+Wedding+Package",
    features: [
      "Full ceremony service",
      "Drinks reception entertainment",
      "Seamless transitions",
      "Substitute drinks for dinner (+£55)",
      "All equipment included",
    ],
  },
  {
    name: "The Full Shebang",
    price: "£795",
    popular: true,
    description: "Complete musical coverage",
    image: "https://images.squarespace-cdn.com/content/v1/641787c199b0b17ed0758ebc/b748fa9a-22e6-471d-a5dd-b7847165754a/Nicola+Mason+Full+Day+Wedding+Package",
    features: [
      "Full ceremony service",
      "90-minute drinks reception",
      "First dance performance",
      "One hour of party songs",
      "Everything you need for the day",
    ],
  },
  {
    name: "First Dances",
    price: "£395",
    description: "Evening entertainment",
    image: "https://images.squarespace-cdn.com/content/v1/641787c199b0b17ed0758ebc/50b4eb30-03db-4d15-ad5c-a0c6a850f87c/Nicola+Mason+First+Dance+Packages",
    features: [
      "Your first dance performed live",
      "One hour of upbeat party songs",
      "Get guests on the dancefloor",
      "High-energy performance",
      "Professional PA system included",
    ],
  },
];

const extras = [
  {
    name: "Surprise Singers",
    price: "From £795",
    image: "https://images.squarespace-cdn.com/content/v1/641787c199b0b17ed0758ebc/167225d9-6adb-4819-9519-3c14382ddce1/Nicola+Mason+Gary+Lynass+Secret+Signing+Waiters",
    description:
      "Two or more performers disguised as waiters, delivery drivers, or police who reveal themselves to perform popular floor-fillers.",
  },
  {
    name: "The Clooneys",
    price: "POA",
    image: "https://images.squarespace-cdn.com/content/v1/641787c199b0b17ed0758ebc/2b21f9b5-54ed-45b8-8c55-d695c1d4099a/the_Clooneys.jpg",
    description:
      "Three-piece vocal harmony trio available for ceremonies, receptions, and evening entertainment.",
  },
  {
    name: "Keepsake Recording",
    price: "£80",
    image: "https://images.squarespace-cdn.com/content/v1/641787c199b0b17ed0758ebc/71beaa31-1b1b-4299-bc42-6d7015abe250/Nicola+Mason+professional+wedding+recording",
    description:
      "Professional recording of your preferred wedding song. Discounts available for multiple recordings.",
  },
];

export default function WeddingsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Wedding Services
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#2C2C2C] mb-6">
            Your Perfect Day Deserves the Perfect Soundtrack
          </h1>
          <p className="text-xl text-[#444444] leading-relaxed">
            From the moment your guests arrive to your last dance of the night,
            I&apos;ll create an atmosphere of elegance and celebration that reflects
            your unique love story.
          </p>
        </div>
      </section>

      {/* What I Offer */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] mb-6">
                More Than Just a Singer
              </h2>
              <p className="text-[#444444] leading-relaxed mb-6">
                Your wedding day is one of the most important days of your life,
                and the music should be nothing short of exceptional. I bring not
                only my voice but years of experience performing at Scotland&apos;s
                most prestigious venues.
              </p>
              <p className="text-[#444444] leading-relaxed mb-6">
                From helping you choose your ceremony songs to reading the room
                during the reception, I pride myself on being a seamless,
                professional addition to your wedding team.
              </p>
              <ul className="space-y-3 text-[#444444]">
                <li className="flex items-start gap-3">
                  <span className="text-[#C4A882] mt-1">✓</span>
                  Full Public Liability Insurance &amp; PAT tested equipment
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4A882] mt-1">✓</span>
                  Professional PA suitable for indoor &amp; outdoor venues
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4A882] mt-1">✓</span>
                  Tailored playlists between live sets
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4A882] mt-1">✓</span>
                  Happy to learn special songs for your day
                </li>
              </ul>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/641787c199b0b17ed0758ebc/6c01f360-286b-489c-9b3f-9fdd489ee1e6/tempImager91yGE.jpg"
                alt="Nicola Mason performing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-24 px-6 bg-[#FCFCFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] mb-4">
              Wedding Packages
            </h2>
            <p className="text-[#444444] max-w-2xl mx-auto">
              All prices include professional PA equipment and 40 miles travel
              from Glasgow. Additional mileage charged at 45p per mile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-white rounded-lg overflow-hidden ${
                  pkg.popular
                    ? "ring-2 ring-[#C4A882] shadow-xl"
                    : "border border-stone-200"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute top-4 right-4 z-10 bg-[#C4A882] text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="aspect-[4/3] relative">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-[#2C2C2C] mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-2xl font-serif text-[#C4A882] mb-1">
                    {pkg.price}
                  </p>
                  <p className="text-[#888888] text-sm mb-4">{pkg.description}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[#444444]"
                      >
                        <span className="text-[#C4A882] mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/enquire"
                    className={`block text-center py-3 text-sm uppercase tracking-wider transition-colors rounded-[4px] ${
                      pkg.popular
                        ? "bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white"
                        : "border border-stone-300 hover:border-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white text-[#2C2C2C]"
                    }`}
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Enhance Your Day
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">
              Additional Entertainment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extras.map((extra) => (
              <div
                key={extra.name}
                className="bg-[#F5F5F5] rounded-lg overflow-hidden"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={extra.image}
                    alt={extra.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif text-[#2C2C2C] mb-1">
                    {extra.name}
                  </h3>
                  <p className="text-[#C4A882] font-medium mb-3">{extra.price}</p>
                  <p className="text-[#444444] text-sm">{extra.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] mb-6">
            Ready to Discuss Your Wedding?
          </h2>
          <p className="text-[#444444] text-lg mb-4">
            Now booking for 2027. Still some 2026 dates available.
          </p>
          <p className="text-[#444444] mb-10">
            I&apos;d love to hear about your plans and help make your day truly
            special.
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
              className="inline-flex flex-col items-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
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
