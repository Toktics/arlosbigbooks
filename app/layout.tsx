import type { Metadata } from "next";
import { Fredoka, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arlo's Big Books - Playful Picture Books for Ages 3-6",
  description: "Join Arlo on BIG adventures! Rhyming picture books that turn everyday moments into extraordinary stories. Perfect for bedtime reading.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${fredoka.variable} ${poppins.variable} antialiased font-[var(--font-poppins)]`}
      >
        {/* Header with fun text instead of logo */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-center items-center">
            <Link href="/" className="block">
              <h1 className="text-3xl md:text-4xl font-bold text-center font-[var(--font-fredoka)]">
                <span className="text-red-500">Arlo's</span>{" "}
                <span className="text-blue-500">BIG</span>
                <span className="text-gray-800">... Adventures</span>
              </h1>
            </Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
