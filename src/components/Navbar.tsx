"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/weddings", label: "Weddings" },
  { href: "/events", label: "Events" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-base md:text-xl font-serif text-[#2C2C2C]">
            <span className="md:hidden">Nicola Mason</span>
            <span className="hidden md:inline">Nicola Mason Wedding &amp; Events Singer</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors hover:text-[#C4A882] ${
                    pathname === link.href
                      ? "text-[#C4A882] font-medium"
                      : "text-[#444444]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/enquire"
                className="bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-5 py-2 text-sm tracking-wide transition-colors rounded-[4px]"
              >
                Check Availability
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#2C2C2C]"
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

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-sm tracking-wide transition-colors hover:text-[#C4A882] ${
                      pathname === link.href
                        ? "text-[#C4A882] font-medium"
                        : "text-[#444444]"
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
                  className="inline-block bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-5 py-2 text-sm tracking-wide transition-colors rounded-[4px]"
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
