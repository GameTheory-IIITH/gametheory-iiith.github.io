import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ title, children, className }: SectionProps) => { 
  return (
    <main className={`container mx-auto mt-8 p-4 ${className}`}>
      <h2 className="text-2xl font-semibold mb-4 text-center">{ title }</h2>
      <div className="mb-4 text-justify">
        { children }
      </div>
    </main>
  );
}