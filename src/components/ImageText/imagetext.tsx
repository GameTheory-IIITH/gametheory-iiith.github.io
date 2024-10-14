import { ReactNode } from 'react';
import Image from 'next/image';

interface ImageTextProps {
  src: string;
  alt: string;
  ratio?: string;
  children: ReactNode;
  className?: string;
}

export const ImageText = ({ src, alt, ratio, children, className }: ImageTextProps) => { 
  ratio = ratio || '1:1';
  const w1 = parseInt(ratio.split(':')[0]);
  const w2 = parseInt(ratio.split(':')[1]);
  return (
    <div className={`flex items-center space-x-8 ${className}`}>
      <Image src={src} alt={alt} width={800} height={800} style={{ width: `${ 100 * w1 / (w1 + w2) }%` }}/>
      <div className="text-justify space-y-8" style={{ width: `${ 100 * w2 / (w1 + w2) }%` }}>
        {children}
      </div>
    </div>
  );
}