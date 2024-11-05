import { ReactNode } from 'react';
import At from '@/components/At';
import faqs from '@/content/faqs.json';
import Link from 'next/link';

interface QuestionProps {
    title: ReactNode;
    children: ReactNode;
}

function parseContent(text: string): ReactNode[] {
    const atParts = text.split('@');
    const result: ReactNode[] = [];

    atParts.forEach((part, index) => {
        if (index > 0) {
            result.push(<At key={`at-${index}`} />);
        }
        result.push(...replaceLinks(part, index));
    });

    return result;
}

function replaceLinks(text: string, keyPrefix: number): ReactNode[] {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) =>
        urlRegex.test(part) ? (
            <Link key={`link-${keyPrefix}-${index}`} href={part} className='underline'>
                {part}
            </Link>
        ) : (
            part
        )
    );
}

const Question = ({ title, children }: QuestionProps) => (
    <div className="space-y-6">
        <h2 className="text-2xl">{title}</h2>
        <p>{children}</p>
    </div>
);

export default function FAQs() {
    return (
        <div className="max-w-[874px] mx-auto">
            <main className="container mx-auto mt-8 p-4" id="FAQs">
                <h1 className="text-4xl font-semibold mb-4 text-center">FAQs</h1>
                <div className={`mb-4 text-justify`}>
                    <div className="space-y-12">
                        {faqs.map((faq, index) => (
                            <Question key={index} title={parseContent(faq.question)}>
                                {parseContent(faq.answer)}
                            </Question>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}