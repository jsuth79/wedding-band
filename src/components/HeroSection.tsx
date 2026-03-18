import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[75vh] min-h-[550px] max-h-[850px] flex flex-col justify-between bg-stone-100">
      {/* Background image */}
      <Image
        src="https://images.squarespace-cdn.com/content/v1/641787c199b0b17ed0758ebc/e6ff22c4-f244-4fae-b9ef-19092b2f3d5d/nicola-mason-wedding-singer.jpg"
        alt="Nicola Mason performing at a wedding"
        fill
        className="object-cover object-top"
        priority
      />
      <div className="absolute inset-0 bg-black/25" />

      {/* Top content - heading and subheading */}
      <div className="relative z-10 px-6 pt-32 max-w-6xl mx-auto w-full">
        <div className="text-center md:text-left md:max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Award-Winning Vocals. Unforgettable Atmosphere.
          </h1>
          <p className="text-lg md:text-xl text-stone-200 leading-relaxed">
            Tailored live music for elegant Scottish celebrations.
          </p>
        </div>
      </div>

      {/* Bottom content - button and booking notes */}
      <div className="relative z-10 px-6 pb-12 max-w-6xl mx-auto w-full">
        <div className="text-center md:text-right">
          <Link
            href="/weddings"
            className="inline-block bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-8 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
          >
            View My Wedding Packages
          </Link>
          <p className="mt-6 text-stone-300 text-sm">
            Now booking for 2027 &bull; Limited 2026 dates available
          </p>
        </div>
      </div>
    </section>
  );
}
