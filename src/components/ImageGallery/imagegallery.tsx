"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
    src: string;
    width: string;
    max?: number;
}

const ImageGallery = ({ src, width, max }: ImageGalleryProps) => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(`${src}/images.txt`);
            const text = await response.text();
            const staticImages = text.split('\n').filter(name => name.trim() !== '').map(name => `${name.trim()}`);

            const limitedImages = max ? staticImages.slice(0, max) : staticImages;
            setImages(limitedImages);
        };

        fetchImages();
    }, [max]);

    return (
        <div style={{ width }}>
            <div className={`columns-2 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-8`}>
                {images.map((src, index) => (
                    <Image 
                        key={index}
                        src={src} 
                        alt={`Image ${index}`} 
                        // layout="responsive" 
                        width={300} 
                        height={200}
                        className="transition duration-300 ease-in-out transform hover:scale-105"
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;