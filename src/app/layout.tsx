import type { Metadata } from "next";
import { Rajdhani, Space_Grotesk, Inter } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import StudioXIntroOverlay from "@/components/ui/StudioXIntroOverlay";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = createMetadata(
  "Studio X — Design Beyond Limits.",
  "Studio X is an independent creative design studio focused on building distinctive brands, digital experiences, and visual communication."
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-type="service"
      className={`${rajdhani.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-sx-white text-sx-black antialiased font-semibold">
        <SmoothScrollProvider>
          <StudioXIntroOverlay />
          <Nav />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
