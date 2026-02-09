
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
  authors: [{ name: "VyleraLabs", url: "https://vyleralabs.com" }],
  generator: "VyleraLabs Engine",
  applicationName: "JHL Collection by VyleraLabs",
  keywords: ["JHL Solitaire", "Gading Serpong", "Luxury Hotel", "VyleraLabs Product Demo"],
  creator: "VyleraLabs",
  publisher: "VyleraLabs",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "vylera-ownership": "Property of VyleraLabs.com",
    "copyright": "© 2026 VyleraLabs. All rights reserved.",
  },
};

import { headers } from "next/headers";

import { LanguageProvider } from "@/context/LanguageContext";
import ClientSEO from "@/components/ClientSEO";
import CookieConsent from "@/components/CookieConsent";
import { GlobalHotelSchema } from "@/components/GlobalHotelSchema";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get('x-nonce') || undefined;

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} ${lato.variable} ${greatVibes.variable} ${cinzel.variable} ${cormorant.variable} antialiased`}>
        {/* 
          PROPERTY OF VYLERALABS.COM
          This website is a product demo developed by VyleraLabs for JHL Group.
          Unauthorized copying, reproduction, or use of this code is strictly prohibited.
          Violators will be prosecuted to the fullest extent of the law.
          SHA256: 08278b510ed2dced6c3dec17f2cce6bb7d90f133b2b9a0f8a4fc4bbe860c15bf
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log("%cSTOP!", "color: red; font-size: 50px; font-weight: bold; text-shadow: 2px 2px 0px black;");
              console.log("%cThis is a property of VyleraLabs.com.", "color: #d4af37; font-size: 20px; font-weight: bold; background: black; padding: 10px; border-radius: 5px;");
              console.log("%cUnauthorized use or copying of this code is prohibited.", "font-size: 16px;");
            `,
          }}
        />
        <GlobalHotelSchema />
        <LanguageProvider>
          <ClientSEO />
          <AnimationProvider nonce={nonce}>
            {children}
            <Analytics />
            <SpeedInsights />
            <CookieConsent />
          </AnimationProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
