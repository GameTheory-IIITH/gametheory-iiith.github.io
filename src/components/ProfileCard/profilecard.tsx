// import Image from "next/image";
// // import './profilecard.scss';

// interface ProfileCardProps {
//     src: string;
//     name: string;
//     text: string;
//     index?: number;
// }

// const ProfileCard = ({ src, name, text, index }: ProfileCardProps) => {
//     return (
//         <div className={`relative overflow-hidden text-center w-fit bg-bgSecondary duration-200 
//             hover:-translate-x-2 
//             hover:-translate-y-2 
//             [&>*:nth-child(1)]:hover:w-64 
//             [&>*:nth-child(1)]:hover:mt-2 
//             [&>*:nth-child(1)>img]:hover:w-64 
//             [&>*:nth-child(1)>img]:hover:h-64
//             [&>*:nth-child(2)]:hover:mb-10 
//             [&>*:nth-child(3)]:hover:-translate-y-4`}
//         >
//             <div className={`w-60 h-60 flex items-center justify-center duration-200`}>
//                 <Image 
//                     src={src} 
//                     alt={name} 
//                     className={`h-60 w-60 object-cover duration-200`}
//                     height="300" 
//                     width="300"
//                 />
//             </div>
//             <h2 className={`text-lg my-4 w-60 duration-200`}>{ name }</h2>
//             <p className={`absolute translate-y-6 left-1/2 -translate-x-1/2 bottom-0 h-6 duration-200`}>{ text }</p>
//         </div>
//     );
// };

// export default ProfileCard;

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

/* 
 * ${textHeight}px/0.75rem = number of lines in text = t
 * ${nameHeight}px/0.875rem = number of lines in name = n
 * t+n = total lines
 * t=2, n=1:
 *  name translateY: 2/3
 *  text translateY: 1/3
 * t=1, n=2:
 *  name translateY: 1/3
 *  text translateY: 2/3
 * t=1, n=1:
 *  name translateY: 1/2
 *  text translateY: 1/2
 * total h = 3.5rem
 *  name translateY: 3.5rem * t/(t+n)
 *  text translateY: 3.5rem * n/(t+n)
.name {
  transform: translateY(calc(3.5rem * var(--text-lines) / (var(--text-lines) + var(--name-lines))));
}

.text {
  transform: translateY(calc(3.5rem * var(--name-lines) / (var(--text-lines) + var(--name-lines))));
}

  const nameTranslateY = `calc(-2rem * ${(nameLines+1)/2 * nameHeight/2})`;
  const textTranslateY = `calc(-1.75rem * ${nameLines} / ${totalLines})`;
 * t=1=n: 0.4
 * t=2, n=1: 0.7
 * t=1, n=2: 0.2
 * t -> 0.3
 * n -> -0.2
 * ans = t * 0.3 + n * -0.2 + 0.3
*/