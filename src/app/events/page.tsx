import EventCard from "@/components/EventCard";
import Section from "@/components/Section";
import events from "@/content/events.json";

const EventsPage = () => {
	return (
		<Section title="Events">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{events.map((event, index) => (
					<EventCard key={index} {...event} />
				))}
			</div>
		</Section>
	);
};

export default EventsPage;