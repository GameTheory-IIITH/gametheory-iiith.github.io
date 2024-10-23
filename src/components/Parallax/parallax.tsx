"use client";
import React, { useEffect, useState, ReactNode } from 'react';

interface ParallaxProps {
  background: string;
  children: ReactNode;
}

export const Parallax = ( {background, children}: ParallaxProps ) => { 
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const fadeTarget = document.querySelectorAll('.fade-target')[0];
    if (fadeTarget) { 
      fadeTarget.classList.remove('opacity-0');
      fadeTarget.classList.add('opacity-100');
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${background}')`,
          transform: `translateY(${scrollY * 0.1}px)`,
          filter: `blur(${3 + scrollY / 50}px) brightness(${100 - scrollY / 12}%)`,
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div 
        className="relative flex flex-col items-center justify-center h-full text-white opacity-0 transition-opacity duration-1000 ease-in-out fade-target"
        style={{transform: `translateY(${scrollY * 0.3}px)`,}}
      >
        { children }
      </div>
    </div>
  );
};