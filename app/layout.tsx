import type { Metadata } from "next";
import { Instrument_Serif, Manrope, Cabin, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Weblinear Workspace",
  description: "Run Your Entire Business from One Intelligent Workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        instrumentSerif.variable,
        manrope.variable,
        cabin.variable,
        inter.variable
      )}
    >
      <body className="min-h-full flex flex-col font-inter bg-black">{children}</body>
    </html>
  );
}
