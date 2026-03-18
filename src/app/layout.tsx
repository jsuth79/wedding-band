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
