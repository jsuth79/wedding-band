import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[75vh] min-h-[550px] max-h-[850px] flex flex-col justify-between bg-stone-100">
      {/* Background image */}
      <Image
        src="/images/the_clooneys_hero.webp"
        alt="The Clooneys performing at a wedding"
        fill
        className="object-cover object-top"
        priority
      />
      <div className="absolute inset-0 bg-black/25" />

      {/* Top content - heading and subheading */}
      <div className="relative z-10 px-6 pt-32 max-w-6xl mx-auto w-full">
        <div className="text-center md:text-left md:max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Show Stopping Vocals, Stunning Harmonies
          </h1>
          <p className="text-lg md:text-xl text-stone-200 leading-relaxed">
            Premium wedding entertainment from ceremony to dance floor across Scotland and the UK.
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
            View Our Wedding Packages
          </Link>
          <p className="mt-6 text-stone-300 text-sm">
            Now booking for 2026 &amp; 2027
          </p>
        </div>
      </div>
    </section>
  );
}
