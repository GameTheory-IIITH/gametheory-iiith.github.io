import { ReactNode } from 'react';

interface LinkProps {
    href: string;
    children: ReactNode;
    showArrow?: boolean;
    className?: string;
}

export const Link = ({ href, children, showArrow = false, className }: LinkProps) => (
    <a href={href} className={`text-foreground hover:text-fgSecondary flex items-center ${className}`}>
        <span className="hover:underline" style={{ display: 'flex', alignItems: 'center' }}>
            {children}
            {showArrow && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    width="2em"
                    height="2em"
                    style={{ marginLeft: '0.25em', verticalAlign: 'middle', fill: 'currentColor' }}
                >
                    <g>
                        <path d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z"></path>
                    </g>
                </svg>
            )}
        </span>
    </a>
);