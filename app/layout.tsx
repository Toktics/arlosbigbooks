import type { Metadata } from "next";
import { Fredoka, Andika } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "600", "700"],
});

const andika = Andika({
  subsets: ["latin"],
  variable: "--font-andika",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Arlo's Big Books | Rhyming Picture Books & Bedtime Stories for Kids Ages 3-6",
  description: "Funny, heartwarming rhyming picture books for ages 3-6. Perfect bedtime stories for read-aloud time with preschoolers. Start with Arlo's Big Yawn - a silly, imaginative adventure!",
  keywords: "picture books for kids, bedtime stories, rhyming books, children's books ages 3-6, preschool books, funny bedtime stories, read aloud books, toddler picture books",
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
        className={`${fredoka.variable} ${andika.variable} antialiased font-[var(--font-andika)]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
