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
  title: "Wedding Singers, Singing Waiters & Corporate Entertainment | The Clooneys",
  description:
    "Award-winning vocal harmony trio for wedding singers, singing waiters, surprise singers and corporate entertainment across Scotland.",
  applicationName: "The Clooneys",
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
    siteName: "The Clooneys",
    title: "Wedding Singers, Singing Waiters & Corporate Entertainment | The Clooneys",
    description:
      "Award-winning vocal harmony trio for wedding singers, singing waiters, surprise singers and corporate entertainment across Scotland.",
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
    title: "Wedding Singers, Singing Waiters & Corporate Entertainment | The Clooneys",
    description:
      "Award-winning vocal harmony trio for wedding singers, singing waiters, surprise singers and corporate entertainment across Scotland.",
    images: [{ url: "/images/the-clooneys-web.jpg", alt: "The Clooneys vocal harmony trio performing live" }],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["MusicGroup", "LocalBusiness"],
  "@id": "https://www.theclooneys.co.uk/#organization",
  name: "The Clooneys",
  url: "https://www.theclooneys.co.uk",
  logo: {
    "@type": "ImageObject",
    url: "https://www.theclooneys.co.uk/images/the-clooneys-web.jpg",
    width: 1200,
    height: 630,
  },
  image: "https://www.theclooneys.co.uk/images/the-clooneys-web.jpg",
  telephone: "+447740360678",
  email: "info@theclooneys.co.uk",
  description:
    "Award-winning vocal harmony trio providing wedding singers, singing waiters and corporate entertainment across Scotland and the UK.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Scotland",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "City", name: "Glasgow" },
    { "@type": "City", name: "Edinburgh" },
    { "@type": "City", name: "Stirling" },
    { "@type": "City", name: "Perth" },
    { "@type": "AdministrativeArea", name: "Scotland" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  priceRange: "£695–£1500",
  // Add Google Business Profile URL to sameAs once available: "https://g.page/..."
  sameAs: [
    "https://www.instagram.com/theclooneys",
    "https://www.facebook.com/profile.php?id=61552003414629",
    "https://www.tiktok.com/@theclooneys",
    "https://www.youtube.com/channel/UCVXe27VHQ7ILNg5CF0bplQQ",
  ],
  // aggregateRating: once review count is confirmed, add:
  // { "@type": "AggregateRating", ratingValue: "5", reviewCount: "XX", bestRating: "5" }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
