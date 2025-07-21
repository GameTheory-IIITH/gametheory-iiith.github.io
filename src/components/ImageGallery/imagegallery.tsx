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
    const [selected, setSelected] = useState<string | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(`${src}/images.txt`);
            const text = await response.text();
            const staticImages = text.split('\n').filter(name => name.trim() !== '').map(name => `${name.trim()}`);
            const limitedImages = max ? staticImages.slice(0, max) : staticImages;
            setImages(limitedImages);
        };
        fetchImages();
    }, [max, src]);

    return (
        <div style={{ width }}>
            <div className={`columns-2 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-8`}>
                {images.map((imgSrc, index) => (
                    <Image 
                        key={index}
                        src={imgSrc} 
                        alt={`Image ${index}`} 
                        width={300} 
                        height={200}
                        className="transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                        onClick={() => setSelected(imgSrc)}
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