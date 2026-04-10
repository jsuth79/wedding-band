import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[700px] overflow-hidden bg-stone-900">
      {/* Background video — place your file at /public/videos/hero.mp4 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/the_clooneys_hero.webp"
        className="absolute inset-0 h-full w-full object-cover object-top scale-[1.02]"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,18,16,0.78)_8%,rgba(20,18,16,0.42)_46%,rgba(20,18,16,0.3)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#191715] to-transparent" />

      <div className="section-shell page-gutter relative z-10 flex min-h-[700px] flex-col justify-end pb-14">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-serif leading-[0.96] text-white md:text-6xl">
            Vocal-led wedding &amp; event entertainment across Scotland.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-200 md:text-xl md:leading-8">
            The Clooneys bring warm, modern harmonies and polished live energy to
            weddings, corporate events and private celebrations.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/enquire" className="btn-primary px-6 py-3 text-[0.82rem]">
              Check Availability
            </Link>
            <Link
              href="/weddings"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-[0.82rem] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10"
            >
              Wedding Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
