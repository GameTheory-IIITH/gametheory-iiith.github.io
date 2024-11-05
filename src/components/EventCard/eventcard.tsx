import Image from "next/image";

interface EventCardProps {
	name: string;
	time: string;
	description: string;
	imageUrl: string;
}

const EventCard = ({ name, time, description, imageUrl }: EventCardProps) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg" style={{ backgroundColor: "rgb(var(--bg-secondary), 0.2)" }}>
			<Image className="w-full" src={imageUrl} alt={name} width={400} height={225} />
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{name}</div>
				<p className="text-gray-700 text-base">{description}</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<span className="text-gray-600 text-sm">{time}</span>
			</div>
		</div>
	);
};

export default EventCard;