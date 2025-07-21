"use client";

import { useState } from 'react';
import Image from 'next/image';
import { GalleryImage } from '@/types/content';

interface ImageGalleryProps {
    images: GalleryImage[];
    width: string;
    max?: number;
}

const ImageGallery = ({ images, width, max }: ImageGalleryProps) => {
    const [selected, setSelected] = useState<string | null>(null);

    // Apply max limit if specified
    const displayImages = max ? images.slice(0, max) : images;

    return (
        <div style={{ width }}>
            <div className={`columns-2 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-8`}>
                {displayImages.map((image, index) => (
                    <Image 
                        key={index}
                        src={image.url} 
                        alt={image.alt} 
                        width={300} 
                        height={200}
                        className="transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                        onClick={() => setSelected(image.url)}
                    />
                ))}
            </div>
            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setSelected(null)}>
                    <div className="relative max-w-3xl w-full flex flex-col items-center">
                        <button className="absolute top-2 right-2 text-white text-2xl" onClick={() => setSelected(null)} aria-label="Close">&times;</button>
                        <Image src={selected} alt="Expanded" width={900} height={600} className="max-h-[80vh] object-contain" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;