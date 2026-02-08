
import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Lato, Great_Vibes } from "next/font/google"; // Using Google Fonts equivalents
import { AnimationProvider } from "@/components/AnimationProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-cursive',
  display: 'swap',
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get('x-nonce') || undefined;

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} ${lato.variable} ${greatVibes.variable} antialiased`}>
        <LanguageProvider>
          <ClientSEO />
          <AnimationProvider nonce={nonce}>
            {children}
          </AnimationProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
