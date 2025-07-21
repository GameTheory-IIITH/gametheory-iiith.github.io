import { ReactNode } from 'react';
import At from '@/components/At';
import { loadYamlContent } from '@/lib/yaml-loader';
import { FAQ } from '@/types/content';
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
    const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;
    const parts = text.split(markdownLinkRegex);

    const result: ReactNode[] = [];

    for (let i = 0; i < parts.length; i += 3) {
        const normalText = parts[i];
        const linkText = parts[i + 1];
        const linkUrl = parts[i + 2];

        if (normalText) {
            result.push(normalText);
        }
        if (linkText && linkUrl) {
            result.push(
                <Link key={`link-${keyPrefix}-${i}`} href={linkUrl} className='underline'>
                    {linkText}
                </Link>
            );
        }
    }

    return result;
}

const Question = ({ title, children }: QuestionProps) => (
    <div className="space-y-6">
        <h2 className="text-2xl">{title}</h2>
        <p>{children}</p>
    </div>
);

const faqs = loadYamlContent('faqs.yaml') as FAQ[];

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