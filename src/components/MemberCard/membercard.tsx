import Image from "next/image";

interface MemberCardProps {
    name: string;
    link?: string;
    image?: string;
    team?: string;
}

const MemberCard = ({ name, link, image, team }: MemberCardProps) => {
    const cardContent = (
        <div className="w-48 bg-bgSecondary shadow-md overflow-hidden text-center">
            {image ? (
                <div className="w-full">
                    <Image
                        src={image}
                        alt={name}
                        className="w-full h-auto max-h-48 object-cover"
                        height={200}
                        width={200}
                    />
                </div>
            ) : (
                <div className="w-full h-40 bg-[rgba(var(--bg-primary),0.3)] flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">
                            {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                    </div>
                </div>
            )}
            <div className="p-3 space-y-1">
                <p className="text-xs text-gray-300 font-medium">
                    {team ? `Member, ${team}` : 'Member'}
                </p>
                <h4 className="text-md font-semibold text-gray-100 leading-tight">{name}</h4>
            </div>
        </div>
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                {cardContent}
            </a>
        );
    }

    return cardContent;
};

export default MemberCard;
