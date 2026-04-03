import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-20 min-h-[70vh] flex items-center">
      <div className="section-shell page-gutter max-w-4xl py-24 text-center">
        <p className="text-[#6f7c8c] text-sm uppercase tracking-[0.2em] mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-6xl font-serif text-[#2C2C2C] mb-6">
          Page Not Found
        </h1>
        <p className="text-xl text-[#444444] leading-relaxed mb-10">
          Sorry, we couldn&apos;t find the page you were looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-8 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
          >
            Back to Home
          </Link>
          <Link
            href="/enquire"
            className="inline-block border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white px-8 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
