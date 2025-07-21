import ProfileCard from "@/components/ProfileCard";
import MemberCard from "@/components/MemberCard";
import Section from "@/components/Section";
import { loadYamlContent } from '@/lib/yaml-loader';
import { TeamMember } from '@/types/content';

export const Members = () => {
    const teamData = loadYamlContent('teams.yaml') as TeamMember[];
    const heads = teamData.filter(member => member.head);
    const members = teamData.filter(member => !member.head);
    
    return (
        <div className="max-w-[874px] mx-auto">
            <Section title="Team">
                <div className="space-y-12">
                    {/* Heads section - larger cards, fewer per row */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {heads.map((member, index) => (
                            <ProfileCard
                                key={`head-${index}`}
                                src={member.image!}
                                name={member.name}
                                text={member.designation}
                                size="large"
                            />
                        ))}
                    </div>
                    
                    {/* Members section - smaller cards, more per row */}
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                        {members.map((member, index) => (
                            <MemberCard
                                key={`member-${index}`}
                                name={member.name}
                                link={member.url}
                                image={member.image}
                                team={member.team}
                            />
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Members;