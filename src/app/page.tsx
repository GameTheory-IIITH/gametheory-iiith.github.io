// src/app/page.js
import React from 'react';
import { loadYamlContent } from '@/lib/yaml-loader';
import { AboutData, Announcement, GalleryData } from '@/types/content';
import ClientHomePage from './ClientHomePage';

// Helper function to get latest announcement
const getLatestAnnouncement = () => {
  const announcementsData = loadYamlContent('announcements.yaml') as Announcement[];
  const publishedAnnouncements = announcementsData.filter(announcement => announcement.published);
  if (publishedAnnouncements.length === 0) return null;
  
  // Sort by publishDate (most recent first)
  const sorted = publishedAnnouncements.sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  
  return sorted[0];
};

export default function Home() {
  const aboutData = loadYamlContent('about.yaml') as AboutData;
  const galleryData = loadYamlContent('gallery.yaml') as GalleryData;
  const latestAnnouncement = getLatestAnnouncement();
  
  return (
    <ClientHomePage 
      aboutData={aboutData} 
      latestAnnouncement={latestAnnouncement}
      galleryData={galleryData}
    />
  );
}
