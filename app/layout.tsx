
import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Lato } from "next/font/google"; // Using Google Fonts equivalents
import { AnimationProvider } from "@/components/AnimationProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
});

const lato = Lato({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "JHL Solitaire Gading Serpong",
  description: "A 5-star luxury hotel in Gading Serpong, Tangerang. Experience the iconic architecture and refined elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} ${lato.variable} antialiased`}>
        <AnimationProvider>
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
