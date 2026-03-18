import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Band Packages | The Clooneys",
  description:
    "Wedding band packages for ceremonies, drinks receptions, and evening entertainment. Serving Scotland and the UK with stunning vocal harmonies. Premium live entertainment.",
};

const packages = [
  {
    name: "Secret Singers / Roaming Singers",
    description: "Unexpected vocal performances that appear from nowhere and disappear just as fast. A high-energy, unforgettable moment that gets every guest involved — perfect for bringing the room to life during the meal.",
    image: "https://images.squarespace-cdn.com/content/65f8c528b5449106e4650e68/954a10d7-d6fb-4dba-b985-7f38aaf5fbae/481789981_122246168978066780_3483161538487758072_n.jpg?content-type=image%2Fjpeg",
    prices: [
      { label: "Duo", price: "£795" },
      { label: "Trio", price: "£995" },
    ],
  },
  {
    name: "The Ceremony",
    description: "From the moment you walk down the aisle to your first steps as a married couple, we create the emotional soundtrack to your vows. Stunning harmonies, personal song choices, and goosebump moments you'll never forget.",
    image: "https://images.squarespace-cdn.com/content/65f8c528b5449106e4650e68/a552687e-e421-4227-8f7f-5e565fcc9b23/490661475_122257962626066780_8872813234820613686_n.jpg?content-type=image%2Fjpeg",
    prices: [
      { label: "Solo", price: "£325" },
      { label: "Duo", price: "£695" },
      { label: "Trio", price: "£975" },
    ],
  },
  {
    name: "Drinks Reception",
    description: "The perfect bridge between ceremony and celebration. Upbeat acoustic sets with show-stopping vocals to set the mood while your guests mingle, toast, and enjoy those all-important photos.",
    image: "https://images.squarespace-cdn.com/content/65f8c528b5449106e4650e68/5a32b323-e457-4972-82a9-a668b8a70074/456965803_17887043475069880_4128126161902035965_n.jpg?content-type=image%2Fjpeg",
    prices: [
      { label: "Solo", price: "£350" },
      { label: "Duo", price: "£700" },
      { label: "Trio", price: "£1050" },
    ],
  },
  {
    name: "Daytime Package",
    description: "Ceremony and Drinks Reception covered — seamlessly. Live music woven through your entire afternoon, from the first goosebumps to the last glass of prosecco.",
    image: "https://images.squarespace-cdn.com/content/65f8c528b5449106e4650e68/cbc65cef-eec7-411c-8fbf-9ee94f847518/588734913_122298915152066780_2468145125351396523_n.jpg?content-type=image%2Fjpeg",
    prices: [
      { label: "Solo", price: "£575" },
      { label: "Duo", price: "£1150" },
      { label: "Trio", price: "£1725" },
    ],
  },
  {
    name: "Complete Package",
    description: "The full Clooneys experience. Ceremony, Drinks Reception, and First Dances — a full day of live music tailored entirely to your story. The ultimate soundtrack from \"I do\" to the dance floor.",
    image: "https://images.squarespace-cdn.com/content/65f8c528b5449106e4650e68/24bd9574-d5dd-4e13-a0dc-663ae071c515/485144419_122252646410066780_367602104697355397_n.jpg?content-type=image%2Fjpeg",
    prices: [
      { label: "Solo", price: "£795" },
      { label: "Duo", price: "£1590" },
      { label: "Trio", price: "£2385" },
    ],
  },
];

export default function WeddingsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Wedding Packages
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#2C2C2C] mb-6">
            Your Wedding, Your Music
          </h1>
          <p className="text-xl text-[#444444] leading-relaxed">
            From intimate ceremonies to full-day celebrations, we bring stunning vocal harmonies and unforgettable moments to your special day.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-6 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-[4px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-[200px] w-full">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold text-[#2C2C2C] mb-3 tracking-wide">
                    {pkg.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-[#666] mb-5">
                    {pkg.description}
                  </p>

                  <div className="py-4 my-5 border-t border-b border-stone-200">
                    {pkg.prices.map((price) => (
                      <div
                        key={price.label}
                        className="flex justify-between text-sm mb-1 last:mb-0 text-[#444]"
                      >
                        <span>{price.label}</span>
                        <span className="font-semibold text-[#2C2C2C]">
                          {price.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/enquire"
                    className="mt-auto text-center bg-[#2C2C2C] hover:bg-[#C4A882] text-white py-3.5 px-5 text-xs uppercase tracking-wider rounded-[4px] transition-colors duration-300"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Ready to Book The Clooneys?
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto">
            Get in touch to check availability for your wedding date and discuss your perfect package.
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
    </div>
  );
}
