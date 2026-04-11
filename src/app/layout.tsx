import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Clooneys | Premium Wedding & Events Band",
  description:
    "Professional wedding and events band based in Scotland. Stunning vocal harmonies and live entertainment for ceremonies, receptions, and celebrations across Scotland and the UK.",
  keywords: [
    "wedding band Scotland",
    "wedding band UK",
    "events band",
    "ceremony band",
    "Scottish wedding entertainment",
    "The Clooneys band",
  ],
  metadataBase: new URL("https://www.theclooneys.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.theclooneys.co.uk",
    siteName: "The Clooneys Wedding & Events Band",
    title: "The Clooneys | Premium Wedding & Events Band",
    description:
      "Professional wedding and events band based in Scotland. Stunning vocal harmonies and live entertainment for ceremonies, receptions, and celebrations across Scotland and the UK.",
    images: [
      {
        url: "/images/the_clooneys_hero.webp",
        width: 1200,
        height: 630,
        alt: "The Clooneys Wedding Band performing live",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Clooneys | Premium Wedding & Events Band",
    description:
      "Professional wedding and events band based in Scotland. Stunning vocal harmonies and live entertainment across Scotland and the UK.",
    images: ["/images/the_clooneys_hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.className} ${sans.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
