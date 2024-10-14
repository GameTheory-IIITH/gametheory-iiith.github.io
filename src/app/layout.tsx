import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

function Navbar() {
  return (
    <nav 
      className="flex justify-between items-center px-16 py-4 sticky top-0 bg-background bg-opacity-50 z-10"
      style={{backdropFilter: "blur(10px)"}}
    >
      <Leftitem />
      <Rightitem>
        <Navitem href="/about">About</Navitem>
        <Navitem href="/contact">Contact</Navitem>
      </Rightitem>
    </nav>
  );
}

function Leftitem() { // logo image that links to home page
  return (
    <a href="/">
      <img src="/favicon.ico" alt="logo" className="h-14" />
    </a>
  );
}

function Rightitem({ children }: { children: React.ReactNode }) {
  return <div className="flex space-x-4">{children}</div>;
}

function Navitem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-gray-100 hover:text-gray-200 hover:underline">
      {children}
    </a>
  );
}