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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${fredoka.variable} ${poppins.variable} antialiased font-[var(--font-poppins)]`}
      >
        {/* Header with logo, colorful text, and navigation */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            {/* Left: Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="/images/ArloLogo.png"
                alt="Arlo Logo"
                className="h-12 md:h-16 w-auto"
              />
            </Link>
            
            {/* Center: Colorful text */}
            <div className="flex-1 text-center px-4">
              <h1 className="text-xl md:text-3xl font-bold font-[var(--font-fredoka)] leading-tight">
                <span className="text-red-500">Welcome</span>{" "}
                <span className="text-blue-500">to</span>{" "}
                <span className="text-yellow-500">Arlo's</span>{" "}
                <span className="text-green-500">BIG</span>{" "}
                <span className="text-purple-500">Book</span>{" "}
                <span className="text-orange-500">Series</span>
              </h1>
            </div>
            
            {/* Right: Navigation */}
            <ul className="hidden md:flex gap-6 flex-shrink-0">
              <li>
                <Link href="/" className="text-gray-800 font-semibold hover:text-red-500 transition-colors">
                  Home
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

            {/* Mobile menu button */}
            <div className="md:hidden flex-shrink-0">
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
