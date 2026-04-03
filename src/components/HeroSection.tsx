import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[700px] overflow-hidden bg-stone-100">
      <Image
        src="/images/the_clooneys_hero.webp"
        alt="The Clooneys performing at a wedding"
        fill
        className="object-cover object-top scale-[1.02]"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,18,16,0.78)_8%,rgba(20,18,16,0.42)_46%,rgba(20,18,16,0.3)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#191715] to-transparent" />

      <div className="section-shell page-gutter relative z-10 flex min-h-[700px] flex-col justify-between pb-10 pt-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-serif leading-[0.96] text-white md:text-6xl">
            Show-stopping vocals for the most meaningful moments of the day.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-200 md:text-xl md:leading-8">
            The Clooneys bring warm, modern harmonies and polished live energy to
            weddings across Scotland, the UK and beyond.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/weddings" className="btn-primary px-6 py-3 text-[0.82rem]">
              Wedding singer packages from £325
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
