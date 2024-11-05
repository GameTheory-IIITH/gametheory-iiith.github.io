// src/app/page.js
"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const Link = dynamic(() => import('@/components/Link'), {
  ssr: false,
});

const Button = dynamic(() => import('@/components/Button'), {
  ssr: false,
});

const ImageText = dynamic(() => import('@/components/ImageText'), {
  ssr: false,
});

const Parallax = dynamic(() => import('@/components/Parallax'), {
  ssr: false,
});

const Section = dynamic(() => import('@/components/Section'), {
  ssr: false,
});

const ImageGallery = dynamic(() => import('@/components/ImageGallery'), {
  ssr: false,
});

const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), {
  ssr: false,
});

const Instagram = () => (
  <a href="https://www.instagram.com/gametheory_iiith" target="_blank" rel="noopener noreferrer" className="flex items-center no-underline">
    <FaInstagram className="mr-2" /> gametheory_iiith
  </a>
);


const At = () => (
  <span style={{ fontFamily: "serif, 'Times New Roman', Times" }}>@</span>
);

export default function Home() { 
  return (
    <div className="min-h-screen">

      <Parallax background="/images/event.jpg">
        <h1 className="text-7xl mb-4 tracking-extra-widest text-center leading-normal">Game Theory<br/><At/>IIITH</h1>
        <p className="text-xl mb-8 cinzel">Shuffle up and deal.</p>
      </Parallax>

      <Main/>

      <footer className="p-4 mt-8 text-center" style={{background: "rgb(var(--bg-secondary))"}}>
        <p>&copy; 2024 Game Theory@IIITH. All rights reserved.</p>
      </footer>

    </div>
  );
}

const Main = () => {
  return (
    <div className="max-w-[874px] mx-auto">
      <Section title="Game Theory">
        Join us for exciting tournaments, friendly games, and opportunities to improve your poker skills.
        Whether you&apos;re a beginner or a seasoned player, there&apos;s a seat at our table for you!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ratione quae voluptate praesentium architecto tempore ut ipsum delectus tempora sit! Repellendus, delectus. Illum error doloremque eius magnam aperiam aliquam dolorum?
        
        <div className="flex justify-end mt-2">
          <Link href="https://forms.gle/b3FtfsSFQmboAUoDA" showArrow>
            Join Us
          </Link>
        </div>
      </Section>

      <Section title="Events">
        <ImageText src="/images/placeholder.png" alt="Poker Table" ratio='1:2'>
          <p>
            Poker tournaments every Wednesday.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, sit ipsum? Itaque accusantium perspiciatis nemo cupiditate fuga amet exercitationem, deleniti placeat a praesentium quod id reprehenderit distinctio molestiae consequatur atque.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam animi quas doloribus at sunt officia dicta et minus ipsum. Impedit molestiae error atque nemo doloremque saepe provident officia animi quia?
          </p>
          <Button redirectTo='/events' text="See All Events" />
        </ImageText>
        
      </Section>

      <Section title="Gallery">
        <ImageGallery src="/images/gallery" width="100%" max={5} />
        <div className="flex justify-end mt-2">
          <Link href="/gallery" showArrow>
            See more
          </Link>
        </div>
      </Section>
      
      <Section title="Contact Us" className="text-center">
        <p className="flex items-center justify-center">
          <span>gametheoryiiith@gmail.com</span>
        </p>
        <p className="flex items-center justify-center">
          <Instagram />
        </p>
      </Section>
    </div>
  );
};
