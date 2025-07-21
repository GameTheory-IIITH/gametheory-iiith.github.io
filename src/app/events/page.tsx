import Section from "@/components/Section";
import events from "@/content/events.json";

const AnnouncementsPage = () => {
	return (
		<div className="max-w-[874px] mx-auto">
			<Section title="Announcements">
				<div className="flex flex-col gap-4">
					{events.map((event, index) => (
						<div key={index} className="w-full bg-[rgba(var(--bg-secondary),0.2)] shadow-lg flex flex-col md:flex-row items-center p-4">
							<img src={event.imageUrl} alt={event.name} className="w-full md:w-1/4 h-40 object-cover mr-6" />
							<div className="flex-1">
								<div className="font-bold text-2xl mb-2">{event.name}</div>
								<p className="text-gray-700 text-base mb-2">{event.description}</p>
								<span className="text-gray-600 text-sm block mb-1">{event.time}</span>
								{event.location && <span className="text-gray-500 text-xs">Location: {event.location}</span>}
							</div>
						</div>
					))}
				</div>
			</Section>
		</div>
	);
};

export default AnnouncementsPage;