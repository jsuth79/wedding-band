"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/weddings", label: "Weddings" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(pathname !== "/");

  useEffect(() => {
    if (pathname !== "/") {
      setIsLightTheme(true);
      return;
    }

    const handleScroll = () => {
      setIsLightTheme(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const brandClassName = isLightTheme ? "text-[#201b16]" : "text-white";
  const navLinkClassName = (href: string) =>
    `rounded-full px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
      pathname === href
        ? isLightTheme
          ? "bg-[#241f1a] text-white"
          : "bg-white/18 text-white backdrop-blur-sm"
        : isLightTheme
          ? "text-[#544b41] hover:text-[#6f7c8c]"
          : "text-white/88 hover:text-white"
    }`;
  const ctaClassName = isLightTheme
    ? "inline-flex items-center justify-center rounded-full border border-[#aab5c0] bg-[#6f7c8c] px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#586474]"
    : "inline-flex items-center justify-center rounded-full border border-white/28 bg-white/12 px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-colors hover:bg-white/20";
  const menuButtonClassName = isLightTheme
    ? "rounded-full border border-[#d7dde3] bg-white/85 p-2.5 text-[#2C2C2C] md:hidden"
    : "rounded-full border border-white/28 bg-white/12 p-2.5 text-white backdrop-blur-sm md:hidden";

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-6">
      <div className="mx-auto max-w-6xl rounded-[30px] border border-transparent bg-transparent shadow-none backdrop-blur-none">
        <div className="flex items-center justify-between gap-6 px-5 py-3 md:px-7">
          <Link href="/" className={brandClassName}>
            <span className="font-serif text-xl leading-none md:text-2xl">
              The Clooneys
            </span>
          </Link>

          <ul className="hidden items-center gap-3 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={navLinkClassName(link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/enquire"
                className={ctaClassName}
              >
                Check Availability
              </Link>
            </li>
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={menuButtonClassName}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-[#e8ddd0] px-5 pb-4 pt-2 md:hidden">
            <div className="mb-4 rounded-[22px] bg-[#241f1a] px-4 py-3 text-center text-[0.72rem] uppercase tracking-[0.22em] text-stone-200">
              Now booking 2026 and 2027
            </div>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-full px-4 py-3 text-center text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                      pathname === link.href
                        ? "bg-[#241f1a] text-white"
                        : "border border-[#ece2d5] bg-white/75 text-[#4f463d]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/enquire"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#aab5c0] bg-[#6f7c8c] px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#586474]"
                >
                  Check Availability
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
