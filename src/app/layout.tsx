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
  title: "The Clooneys | Award-Winning Wedding Band Scotland",
  description:
    "Award-winning wedding and events band based in Scotland. Vocal harmonies for ceremonies, drinks receptions and evening parties across Scotland and the UK.",
  keywords: [
    "wedding band Scotland",
    "wedding band UK",
    "events band Scotland",
    "ceremony band",
    "Scottish wedding entertainment",
    "The Clooneys band",
  ],
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://www.theclooneys.co.uk"
  ),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.theclooneys.co.uk",
    siteName: "The Clooneys Wedding & Events Band",
    title: "The Clooneys | Award-Winning Wedding Band Scotland",
    description:
      "Award-winning wedding and events band based in Scotland. Vocal harmonies for ceremonies, drinks receptions and evening parties across Scotland and the UK.",
    images: [
      {
        url: "/images/the-clooneys-web.jpg",
        width: 1200,
        height: 630,
        alt: "The Clooneys Wedding Band performing live",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Clooneys | Award-Winning Wedding Band Scotland",
    description:
      "Award-winning wedding and events band based in Scotland. Vocal harmonies for ceremonies, drinks receptions and evening parties across Scotland and the UK.",
    images: ["/images/the-clooneys-web.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <script defer src="https://umami-three-smoky.vercel.app/script.js" data-website-id="27623460-856a-45ce-ae66-3198efb09b08"></script>
      </head>
      <body className={`${sans.className} ${sans.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
