import Section from "@/components/Section";
import { loadYamlContent } from '@/lib/yaml-loader';
import { Announcement } from '@/types/content';
import Image from "next/image";

const announcements = loadYamlContent('announcements.yaml') as Announcement[];

const formatDateTime = (announcement: Announcement) => {
	const { dateTime } = announcement;
	
	switch (dateTime.type) {
		case 'single':
			const start = new Date(dateTime.startDateTime!);
			const end = new Date(dateTime.endDateTime!);
			return `${start.toLocaleDateString()} ${start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
		case 'recurring':
			return `${dateTime.startTime} - ${dateTime.endTime} every ${dateTime.dayOfWeek}`;
		case 'deadline':
			return dateTime.displayText || `Deadline: ${new Date(dateTime.deadlineDateTime!).toLocaleDateString()}`;
		default:
			return '';
	}
};

const AnnouncementsPage = () => {
	// Group announcements by year inferred from publishDate
	const groupedAnnouncements = announcements
		.filter((ann: Announcement) => ann.published)
		.reduce((acc: Record<string, Announcement[]>, ann: Announcement) => {
			const year = new Date(ann.publishDate).getFullYear().toString();
			if (!acc[year]) acc[year] = [];
			acc[year].push(ann);
			return acc;
		}, {});

	return (
		<div className="max-w-[874px] mx-auto">
			<Section title="Announcements">
				<div className="space-y-12">
					{Object.entries(groupedAnnouncements)
						.sort(([a], [b]) => b.localeCompare(a)) // Sort years descending
						.map(([year, yearAnnouncements]) => (
						<div key={year}>
							<div className="text-2xl font-bold mb-8 border-b border-gray-300 pb-2">{year}</div>
							<div className="space-y-8">
								{yearAnnouncements
									.sort((a: Announcement, b: Announcement) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
									.map((announcement: Announcement) => (
									<article key={announcement.id} className="space-y-4">
										{/* Title & Subtitle */}
										<div>
											<h3 className="text-xl font-semibold">
												{announcement.title}
											</h3>
											{announcement.subtitle && (
												<p className="text-gray-600 text-sm mt-1">{announcement.subtitle}</p>
											)}
										</div>
										
										{/* Date/Time */}
										<p className="text-sm text-gray-500">{formatDateTime(announcement)}</p>
										
										{/* Image - positioned based on configuration */}
										{announcement.image && (
											<div className={`w-full ${announcement.image.position === 'top' ? 'order-0' : ''}`}>
												<Image 
													src={announcement.image.url} 
													alt={announcement.image.alt}
													width={874}
													height={400}
													className={`object-cover ${
														announcement.image.position === 'top' ? 'w-full h-64' :
														announcement.image.position === 'left' ? 'w-1/3 h-48 float-left mr-4 mb-4' :
														'w-1/3 h-48 float-right ml-4 mb-4'
													}`}
												/>
												{announcement.image.caption && (
													<p className="text-xs text-gray-500 mt-2 italic">{announcement.image.caption}</p>
												)}
											</div>
										)}
										
										{/* Description */}
										<div className="space-y-4">
											<p className="text-gray-300 leading-relaxed">{announcement.description}</p>
											
											{/* Location */}
											{announcement.location && (
												<p className="text-sm text-gray-600">
													<strong>Location:</strong> {announcement.location.venue}
													{announcement.location.address && `, ${announcement.location.address}`}
													{announcement.location.isOnline && (
														<span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1">Online</span>
													)}
												</p>
											)}
											
											{/* Call to Action Button */}
											{announcement.button && (
												<div className="pt-4">
													<a 
														href={announcement.button.url}
														className={`inline-block px-6 py-2 transition-colors duration-200 ${
															announcement.button.style === 'primary' 
																? 'bg-blue-600 hover:bg-blue-700 text-white' 
																: 'bg-gray-200 hover:bg-gray-300 text-gray-800'
														}`}
														target={announcement.button.external ? "_blank" : "_self"}
														rel={announcement.button.external ? "noopener noreferrer" : undefined}
													>
														{announcement.button.text}
													</a>
												</div>
											)}
										</div>
									</article>
								))}
							</div>
						</div>
					))}
				</div>
			</Section>
		</div>
	);
};

export default AnnouncementsPage;