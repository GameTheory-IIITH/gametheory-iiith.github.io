import { ReactNode } from 'react';
import Image from 'next/image';
import styles from './ImageText.module.css';

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
  const imageWidth = `${100 * w1 / (w1 + w2)}%`;
  const textWidth = `${100 * w2 / (w1 + w2)}%`;

  return (
    <div className={`md:space-x-8 md:space-y-0 space-y-8 ${styles.container} ${className}`} style={{ '--image-width': imageWidth, '--text-width': textWidth } as React.CSSProperties}>
      <Image src={src} alt={alt} width={800} height={800} className={styles.image} />
      <div className={`${styles.text} text-justify space-y-8`}>
        {children}
      </div>
    </div>
  );
}