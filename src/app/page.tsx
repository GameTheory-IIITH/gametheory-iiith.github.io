// src/app/page.js
"use client";
import React from 'react';
import { Parallax } from '../components/Parallax';
import { Section } from '../components/Section';
import { ImageText } from '../components/ImageText';
import { Button } from '../components/Button';

export default function Home() { 
  return (
    <div className="min-h-screen" style={{overflow: "scroll"}}>

      <Parallax background="/images/event.jpg">
        <h1 className="text-7xl mb-4 tracking-extra-widest text-center leading-normal">Game Theory<br/><At/>IIITH</h1>
        <p className="text-xl mb-8 cinzel">Shuffle up and deal!</p>
      </Parallax>

      <Main/>

      <footer className="p-4 mt-8 text-center" style={{background: "var(--bg-secondary)"}}>
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
        Whether you're a beginner or a seasoned player, there's a seat at our table for you! 
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ratione quae voluptate praesentium architecto tempore ut ipsum delectus tempora sit! Repellendus, delectus. Illum error doloremque eius magnam aperiam aliquam dolorum?
      </Section>
      <Section title="Events">
        Poker tournaments every Wednesday.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quia non nesciunt molestias eos minima, repellendus quis repellat inventore omnis corrupti error! Suscipit, magni ab eveniet obcaecati nam aut quasi?
      </Section>
      <Section title="placeholder1">
        <ImageText src="/images/placeholder.png" alt="Poker Table" ratio='1:2'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, sit ipsum? Itaque accusantium perspiciatis nemo cupiditate fuga amet exercitationem, deleniti placeat a praesentium quod id reprehenderit distinctio molestiae consequatur atque.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam animi quas doloribus at sunt officia dicta et minus ipsum. Impedit molestiae error atque nemo doloremque saepe provident officia animi quia?
          </p>
          <Button onClick={() => console.log('Button clicked')} text="See More" />
        </ImageText>
      </Section>
      <Section title="placeholder2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque cum, ullam magni voluptate, porro possimus deleniti delectus veritatis doloremque quam eum amet provident aspernatur quo necessitatibus mollitia inventore, dignissimos soluta?
      </Section>
    </div>
  );
}

const At = () => { 
  return (
    <span style={{fontFamily: "serif, 'Times New Roman', Times"}}>@</span>
  );
}