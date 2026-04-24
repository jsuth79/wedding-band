import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[700px] overflow-hidden bg-stone-900">
      <Image
        src="/images/the-clooneys-band-2-l.webp"
        alt="The Clooneys wedding band performing live at a Scottish ceremony"
        fill
        priority
        className="object-cover object-top scale-[1.02]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,18,16,0.78)_8%,rgba(20,18,16,0.42)_46%,rgba(20,18,16,0.3)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#191715] to-transparent" />

      <div className="section-shell page-gutter relative z-10 flex min-h-[700px] flex-col justify-end pb-14">
        <div className="max-w-3xl">
          <h1 className="text-4xl leading-[0.96] text-white md:text-6xl">
            Vocal harmony trio for weddings and events across Scotland.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-200 md:text-xl md:leading-8">
            Warm, modern live music from ceremony to evening party.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/enquire" className="btn-primary">
              Check Availability
            </Link>
            <Link
              href="/weddings"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
            >
              Wedding Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
