
import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Lato, Great_Vibes, Cinzel, Cormorant_Garamond } from "next/font/google"; // Using Google Fonts equivalents
import { AnimationProvider } from "@/components/AnimationProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: '--font-cinzel',
  display: 'swap',
  preload: true,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-cursive',
  display: 'swap',
  preload: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
});

const lato = Lato({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "JHL Solitaire Gading Serpong",
  description: "A 5-star luxury hotel in Gading Serpong, Tangerang. Experience the iconic architecture and refined elegance.",
  icons: {
    icon: "/favicon.ico",
  },
};

import { headers } from "next/headers";

import { LanguageProvider } from "@/context/LanguageContext";
import ClientSEO from "@/components/ClientSEO";
import CookieConsent from "@/components/CookieConsent";
import { GlobalHotelSchema } from "@/components/GlobalHotelSchema";
import { Analytics } from "@vercel/analytics/next";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get('x-nonce') || undefined;

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} ${lato.variable} ${greatVibes.variable} ${cinzel.variable} ${cormorant.variable} antialiased`}>
        <GlobalHotelSchema />
        <LanguageProvider>
          <ClientSEO />
          <AnimationProvider nonce={nonce}>
            {children}
            <Analytics />
            <CookieConsent />
          </AnimationProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
