import type { Metadata } from "next";
import { Fredoka, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
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
        <Header />
        {children}
      </body>
    </html>
  );
}
