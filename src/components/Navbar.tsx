"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/",         label: "Home" },
  { href: "/weddings", label: "Weddings" },
  { href: "/events",   label: "Events" },
  { href: "/enquire",  label: "Enquire" },
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
    `rounded-full px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
      pathname === href
        ? isLightTheme
          ? "bg-[#241f1a] text-white"
          : "bg-white/18 text-white backdrop-blur-sm"
        : isLightTheme
          ? "text-[#544b41] hover:text-[#6f7c8c]"
          : "text-white/88 hover:text-white"
    }`;
  const ctaClassName = isLightTheme
    ? "inline-flex items-center justify-center rounded-full border border-[#aab5c0] bg-[#6f7c8c] px-2.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#705745]"
    : "inline-flex items-center justify-center rounded-full border border-white/28 bg-white/12 px-2.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors hover:bg-white/20";
  const menuButtonClassName = isLightTheme
    ? "rounded-full border border-[#d7dde3] bg-white/85 p-2.5 text-[#2C2C2C] md:hidden"
    : "rounded-full border border-white/28 bg-white/12 p-2.5 text-white backdrop-blur-sm md:hidden";

  return (
    <nav className="fixed inset-x-0 top-0 z-50 pt-3">
      <div className={`rounded-[30px] border transition-colors md:border-transparent md:bg-transparent md:shadow-none md:backdrop-blur-none ${isOpen ? "border-[#e8ddd0] bg-white shadow-lg" : "border-transparent bg-transparent shadow-none"}`}>
        {/* Mobile bar — hamburger left, logo centred */}
        <div className="flex items-center justify-between px-8 py-3 sm:px-10 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={menuButtonClassName.replace("md:hidden", "")}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <Link href="/" className={`absolute left-1/2 -translate-x-1/2 ${brandClassName}`}>
            <span className="font-serif text-xl leading-none">The Clooneys</span>
          </Link>
          {/* Spacer to balance the hamburger */}
          <div className="w-10" />
        </div>

        {/* Desktop bar — nav left, logo centre, CTA right */}
        <div className="hidden items-center px-12 py-3 lg:px-16 md:grid md:grid-cols-[1fr_auto_1fr]">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={navLinkClassName(link.href)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <Link href="/" className={brandClassName}>
              <span className="font-serif text-2xl leading-none">The Clooneys</span>
            </Link>
          </div>
          <div className="flex justify-end">
            <Link href="/enquire" className={`${ctaClassName} text-center`}>
              Check Availability
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-[#e8ddd0] px-5 pb-4 pt-2 md:hidden">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-full px-4 py-2.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
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
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#aab5c0] bg-[#6f7c8c] px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#586474]"
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
