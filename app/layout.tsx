import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BabyCare - Layanan Home Care Bayi Profesional",
  description:
    "Memberikan perawatan terbaik untuk buah hati Anda dengan penuh kasih sayang dan dukungan profesional untuk Ibu di rumah.",
  verification: {
    google: "9MCAiK5V6L5y6fyEQ--ASYgX7kjjHTmUjLxdAS8pr2A",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* 🔥 META MANUAL (PASTI TERBACA GOOGLE) */}
        <meta
          name="google-site-verification"
          content="9MCAiK5V6L5y6fyEQ--ASYgX7kjjHTmUjLxdAS8pr2A"
        />
      </head>

      <body className={`${geistSans.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}