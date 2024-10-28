import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from 'next/dynamic';

const cinzel = localFont({
  src: "./fonts/CinzelVF.ttf",
  variable: "--font-cinzel",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Game Theory",
  description: "poker club description placeholder",
  icons: {
    icon: '/favicon.ico',
  }
};

const Navbar = dynamic(() => import('@/components/Navbar'), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}