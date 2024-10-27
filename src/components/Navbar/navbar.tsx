"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
            setIsOpen(e.matches);
        };

        // Set initial state based on the current screen size
        setIsOpen(mediaQuery.matches);

        // Add the media query listener
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        // Cleanup the listener on component unmount
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    return (
        <nav className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-4 sticky top-0 z-10 bg-background" style={{ backdropFilter: "blur(10px)", /*backgroundColor: "rgba(var(--bg-primary), 0.8)"*/ }}>
            <div className="flex justify-between items-center w-full md:w-auto">
                <Leftitem />
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <svg className="w-6 h-6 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    )}
                </button>
            </div>
            <Rightitem className={isOpen ? 'justify-end w-full space-y-8 py-4 text-right' : 'hidden'}>
                <Navitem href="/#Game-Theory">About</Navitem>
                <Navitem href="/events">Events</Navitem>
                <Navitem href="/gallery">Gallery</Navitem>
                <Navitem href="/members">Members</Navitem>
                <Navitem href="/faq">FAQ</Navitem>
                <Navitem href="/#Contact-Us">Contact</Navitem>
            </Rightitem>
        </nav>
    );
};

const Leftitem = () => (
    <a href="/">
        <Image src="/images/favicon.ico" alt="logo" className="h-14 w-14" width={100} height={100} />
    </a>
);

const Rightitem = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 ${className}`}>
        {children}
    </div>
);

const Navitem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} className="text-foreground hover:text-fgSecondary hover:underline">
        {children}
    </a>
);