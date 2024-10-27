import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const cinzel = localFont({
  src: "./fonts/CinzelVF.ttf",
  variable: "--font-cinzel",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Game Theory",
  description: "poker club description placeholder",
};

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