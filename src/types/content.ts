// Content data type definitions

export interface AboutData {
  hero: {
    title: string;
    subtitle: string;
    parallaxImage: string;
  };
  sections: {
    gameTheory: {
      title: string;
      content: string;
      joinLink: {
        url: string;
        text: string;
      };
    };
    announcements: {
      title: string;
      fallbackContent: {
        text: string;
        image: string;
        imageAlt: string;
      };
      seeAllButton: {
        url: string;
        text: string;
      };
    };
    gallery: {
      title: string;
      galleryPath: string;
      maxImages: number;
      seeMoreLink: {
        url: string;
        text: string;
      };
    };
    contact: {
      title: string;
      email: string;
      instagram: {
        url: string;
        handle: string;
      };
      linkedin: {
        url: string;
        text: string;
      };
    };
  };
  footer: {
    copyright: string;
    disclaimer: string;
  };
}

export interface Announcement {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  dateTime: {
    type: 'single' | 'recurring' | 'deadline';
    startDateTime?: string;
    endDateTime?: string;
    startTime?: string;
    endTime?: string;
    dayOfWeek?: string;
    deadlineDateTime?: string;
    displayText?: string;
    timezone: string;
  };
  location?: {
    venue: string;
    address?: string;
    isOnline: boolean;
  };
  image?: {
    url: string;
    alt: string;
    position: 'top' | 'left' | 'right';
    caption?: string;
  };
  button?: {
    text: string;
    url: string;
    style: 'primary' | 'secondary';
    external: boolean;
  };
  published: boolean;
  publishDate: string;
  year?: string;
}

export interface TeamMember {
  name: string;
  head: boolean;
  image?: string;
  url?: string;
  designation: string;
  team: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
