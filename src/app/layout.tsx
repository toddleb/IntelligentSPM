import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Cinzel } from "next/font/google";
import "./globals.css";
import { NavPrimary } from "@/components/layout/NavPrimary";
import { FooterMega } from "@/components/layout/FooterMega";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://intelligentspm.com"),
  title: {
    default: "IntelligentSPM - Comp plans that don't lie",
    template: "%s - IntelligentSPM",
  },
  description:
    "Audit-ready sales compensation diagnostics, plan intelligence, and behavior-first design. Find loopholes before your reps do.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://intelligentspm.com",
    siteName: "IntelligentSPM",
    images: [
      {
        url: "/images/og/og-home.png",
        width: 1200,
        height: 630,
        alt: "IntelligentSPM - Comp plans that don't lie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@intelligentspm",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${cinzel.variable} antialiased min-h-screen flex flex-col`}
      >
        <NavPrimary />
        <main className="flex-1">{children}</main>
        <FooterMega />
      </body>
    </html>
  );
}
