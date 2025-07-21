import Image from "next/image";

interface ProfileCardProps {
    src: string;
    name: string;
    text: string;
    size?: 'large' | 'small';
}

const ProfileCard = ({ src, name, text, size = 'large' }: ProfileCardProps) => {
    const cardWidth = size === 'large' ? 'w-64' : 'w-48';
    const textSize = size === 'large' ? 'text-lg' : 'text-base';
    const nameSize = size === 'large' ? 'text-xl' : 'text-lg';

    return (
        <div className={`${cardWidth} bg-bgSecondary shadow-lg overflow-hidden text-center`}>
            <div className="w-full">
                <Image
                    src={src}
                    alt={name}
                    className="w-full h-auto max-h-64 object-cover"
                    height={size === 'large' ? 300 : 200}
                    width={size === 'large' ? 300 : 200}
                />
            </div>
            <div className="p-4 space-y-2">
                <p className={`${textSize} text-gray-300 font-medium`}>{text}</p>
                <h3 className={`${nameSize} font-bold text-gray-100`}>{name}</h3>
            </div>
        </div>
    );
};

export default ProfileCard;
