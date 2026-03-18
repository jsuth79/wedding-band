import type { Metadata } from "next";
import { EB_Garamond, Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nicola Mason | Award-Winning Wedding & Events Singer",
  description:
    "Award-winning wedding and events singer based in Glasgow, Scotland. Tailored live music for ceremonies, receptions, and celebrations across Central Scotland.",
  keywords: [
    "wedding singer Glasgow",
    "wedding singer Scotland",
    "events singer",
    "ceremony singer",
    "Scottish wedding entertainment",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${garamond.variable} ${lato.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
