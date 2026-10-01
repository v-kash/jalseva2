import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JalSeva — Refill, Reuse, Reduce",
  description:
    "A youth-led initiative creating practical solutions for cleaner water access, responsible consumption and stronger communities.",
  keywords: [
    "JalSeva",
    "clean water",
    "sustainability",
    "reusable bottles",
    "youth initiative",
    "reduce plastic",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
