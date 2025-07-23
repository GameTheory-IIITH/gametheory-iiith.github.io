"use client";

import { useState } from 'react';
import ImageGallery from "@/components/ImageGallery";
import { GalleryImage } from '@/types/content';
import "@/components/Button/button.css";

interface ClientGalleryProps {
    images: GalleryImage[];
    initialLoad?: number;
    loadMoreCount?: number;
}

const ClientGallery = ({ 
    images,
    initialLoad = 10, 
    loadMoreCount = 10 
}: ClientGalleryProps) => {
    const [displayCount, setDisplayCount] = useState(initialLoad);

    const handleLoadMore = () => {
        setDisplayCount(prev => Math.min(prev + loadMoreCount, images.length));
    };

    const displayedImages = images.slice(0, displayCount);
    const hasMoreImages = displayCount < images.length;

    return (
        <div className="mb-8">
            <ImageGallery images={displayedImages} width="100%" />
            
            {hasMoreImages && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleLoadMore}
                        className="poker-button"
                        aria-label="Load more images"
                    >
                        <span className="button-text">
                            Load More
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ClientGallery;
