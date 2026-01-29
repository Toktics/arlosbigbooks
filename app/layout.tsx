import type { Metadata } from "next";
import { Fredoka, Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";
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
  title: "Arlo's Big Books - Children's Picture Book Series",
  description: "Join Arlo on BIG adventures! Playful rhyming picture books for ages 3-6 that turn everyday moments into extraordinary stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fredoka.variable} ${poppins.variable} antialiased font-[var(--font-poppins)]`}
      >
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="block">
              <div className="relative w-64 h-16">
                <Image
                  src="/images/logo.png"
                  alt="Arlo's Big Books"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            
            <ul className="hidden md:flex gap-8">
              <li>
                <Link href="/" className="text-gray-800 font-semibold hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#books" className="text-gray-800 font-semibold hover:text-red-500 transition-colors">
                  The Books
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-800 font-semibold hover:text-red-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-800 font-semibold hover:text-red-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile menu button - can add later */}
            <div className="md:hidden">
              <button className="text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
