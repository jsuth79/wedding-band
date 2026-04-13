import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-20 min-h-[70vh] flex items-center">
      <div className="section-shell page-gutter max-w-4xl py-24 text-center">
        <p className="text-[var(--color-brand-gold)] text-sm uppercase tracking-[0.2em] mb-4">
          Wrong note
        </p>
        <h1 className="mb-6 text-4xl text-[#2C2C2C] md:text-6xl">
          Oops — we&apos;ve hit a bum note.
        </h1>
        <p className="text-xl text-[#444444] leading-relaxed mb-10">
          That page doesn&apos;t exist, but the rest of the set is still going strong.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Home
          </Link>
          <Link href="/weddings" className="btn-secondary">
            Weddings
          </Link>
          <Link href="/events" className="btn-secondary">
            Events
          </Link>
          <Link href="/enquire" className="btn-secondary">
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}
