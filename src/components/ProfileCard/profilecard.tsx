"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ProfileCardProps {
    src: string;
    name: string;
    text: string;
    index?: number;
}

const ProfileCard = ({ src, name, text, index }: ProfileCardProps) => {
    const nameRef = useRef<HTMLParagraphElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const [nameHeight, setNameHeight] = useState(0);
    const [textHeight, setTextHeight] = useState(0);
    const [nameTranslateY, setNameTranslateY] = useState('');
    const [textTranslateY, setTextTranslateY] = useState('');

    useEffect(() => {
        if (nameRef.current && textRef.current) {
            const nameStyles = window.getComputedStyle(nameRef.current);
            const textStyles = window.getComputedStyle(textRef.current);

            const nameLineHeight = parseFloat(nameStyles.lineHeight);
            const textLineHeight = parseFloat(textStyles.lineHeight);

            setNameHeight(nameRef.current.clientHeight);
            setTextHeight(textRef.current.clientHeight);

            const textLines = textHeight / textLineHeight;
            const nameLines = nameHeight / nameLineHeight;

            const nameTranslateYValue = `calc(-0.2rem * ${8 - nameLines * 2 - textLines * 0.5})`;
            const textTranslateYValue = `calc(-0.175rem * ${2 + textLines * 4 - nameLines * 2})`;

            setNameTranslateY(nameTranslateYValue);
            setTextTranslateY(textTranslateYValue);
        }
    }, [nameHeight, textHeight]);

    return (
        <div 
            className={`parent${index ? `-${index}` : ''} relative overflow-hidden text-center w-fit bg-bgSecondary duration-200 hover:scale-110`}
        >
            <div className={`w-64 h-64 flex items-center justify-center duration-200`}>
                <Image
                    src={ src }
                    alt={ name }
                    className={`h-64 w-64 object-cover duration-200`}
                    height="300"
                    width="300"
                />
            </div>
            <h2 className={`text-lg my-4 w-64 h-14 duration-200 flex items-center justify-center`}>
                <p ref={nameRef} className="duration-200 translate-x-0 leading-[1.25rem]">{ name }</p>
            </h2>
            <p ref={textRef} className={`absolute text-sm leading-[1rem] translate-y-6 left-1/2 -translate-x-1/2 bottom-0 h-6 duration-200`}>{ text }</p>

            <style>{`
                .parent${index ? `-${index}` : ''}:hover > *:nth-child(3) {
                    --tw-translate-y: ${textTranslateY};
                }
                .parent${index ? `-${index}` : ''}:hover > *:nth-child(2) > p {
                    --tw-translate-y: ${nameTranslateY};
                }
            `}</style>
        </div>
    );
};

export default ProfileCard;
