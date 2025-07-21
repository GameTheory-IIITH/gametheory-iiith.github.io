"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import Link from '@/components/Link';
import Button from '@/components/Button';
import ImageText from '@/components/ImageText';
import Section from '@/components/Section';
import { AboutData, Announcement } from '@/types/content';
const Parallax = dynamic(() => import('@/components/Parallax'), { ssr: false });
const ImageGallery = dynamic(() => import('@/components/ImageGallery'), { ssr: false });
const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });

interface ClientHomePageProps {
  aboutData: AboutData;
  latestAnnouncement: Announcement | null;
}

const Instagram = ({ aboutData }: { aboutData: AboutData }) => (
  <a href={aboutData.sections.contact.instagram.url} target="_blank" rel="noopener noreferrer" className="flex items-center no-underline">
    <FaInstagram className="mr-2" /> {aboutData.sections.contact.instagram.handle}
  </a>
);

const Main = ({ aboutData, latestAnnouncement }: { aboutData: AboutData; latestAnnouncement: Announcement | null }) => {
  return (
    <div className="max-w-[874px] mx-auto">
      <Section title={aboutData.sections.gameTheory.title}>
        {/* Split content by line breaks and render as paragraphs */}
        {aboutData.sections.gameTheory.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className={`text-center ${index > 0 ? 'mt-4' : ''}`}>
            {paragraph}
          </p>
        ))}
        
        <div className="flex justify-end mt-2">
          <Link href={aboutData.sections.gameTheory.joinLink.url} showArrow>
            {aboutData.sections.gameTheory.joinLink.text}
          </Link>
        </div>
      </Section>

      <Section title={aboutData.sections.announcements.title}>
        {latestAnnouncement ? (
          <ImageText 
            src={latestAnnouncement.image?.url || aboutData.sections.announcements.fallbackContent.image} 
            alt={latestAnnouncement.image?.alt || aboutData.sections.announcements.fallbackContent.imageAlt} 
            ratio='1:2'
          >
            <h3 className="text-xl font-bold mb-2">{latestAnnouncement.title}</h3>
            <p>{latestAnnouncement.description}</p>
            <Button redirectTo={aboutData.sections.announcements.seeAllButton.url} text={aboutData.sections.announcements.seeAllButton.text} />
          </ImageText>
        ) : (
          <ImageText 
            src={aboutData.sections.announcements.fallbackContent.image} 
            alt={aboutData.sections.announcements.fallbackContent.imageAlt} 
            ratio='1:2'
          >
            {/* Split fallback content by line breaks and render as paragraphs */}
            {aboutData.sections.announcements.fallbackContent.text.split('\n\n').map((paragraph, index) => (
              <p key={index} className={index > 0 ? 'mt-4' : ''}>
                {paragraph}
              </p>
            ))}
            <Button redirectTo={aboutData.sections.announcements.seeAllButton.url} text={aboutData.sections.announcements.seeAllButton.text} />
          </ImageText>
        )}
      </Section>

      <Section title={aboutData.sections.gallery.title}>
        <ImageGallery src={aboutData.sections.gallery.galleryPath} width="100%" max={aboutData.sections.gallery.maxImages} />
        <div className="flex justify-end mt-2">
          <Link href={aboutData.sections.gallery.seeMoreLink.url} showArrow>
            {aboutData.sections.gallery.seeMoreLink.text}
          </Link>
        </div>
      </Section>
      
      <Section title={aboutData.sections.contact.title} className="text-center">
        <p className="flex items-center justify-center">
          <span>{aboutData.sections.contact.email}</span>
        </p>
        <p className="flex items-center justify-center">
          <Instagram aboutData={aboutData} />
        </p>
        <p className="flex items-center justify-center mt-2">
          <a href={aboutData.sections.contact.linkedin.url} target="_blank" rel="noopener noreferrer" className="flex items-center no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="mr-2"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            {aboutData.sections.contact.linkedin.text}
          </a>
        </p>
      </Section>
    </div>
  );
};

export default function ClientHomePage({ aboutData, latestAnnouncement }: ClientHomePageProps) { 
  return (
    <div className="min-h-screen relative">

      <Parallax background={aboutData.hero.parallaxImage}>
        <h1 className="text-7xl mb-4 tracking-extra-widest text-center leading-normal" dangerouslySetInnerHTML={{ __html: aboutData.hero.title }}></h1>
        <p className="text-xl mb-8 cinzel">{aboutData.hero.subtitle}</p>
      </Parallax>

      <div className="pb-24"> {/* Add bottom padding to prevent footer overlap */}
        <Main aboutData={aboutData} latestAnnouncement={latestAnnouncement} />
      </div>

      <footer className="p-4 mt-8 text-center fixed bottom-0 left-0 w-full z-50" style={{background: "rgb(var(--bg-secondary))"}}>
        <p>{aboutData.footer.copyright}</p>
        <p className="text-xs mt-1">{aboutData.footer.disclaimer}</p>
      </footer>

    </div>
  );
}
