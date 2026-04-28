import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundMusic from "@/components/BackgroundMusic";

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className={`${geistSans.className} min-h-full flex flex-col`}>
        <BackgroundMusic />
        {children}
      </body>
    </html>
  );
}