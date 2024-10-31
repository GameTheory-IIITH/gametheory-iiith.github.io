import dynamic from "next/dynamic";
import ProfileCard from "@/components/ProfileCard";
import TeamDisplay from "@/components/TeamDisplay";
import heads from "@/content/heads.json";
import teams from "@/content/members.json";
import Link from "next/link";

const Section = dynamic(() => import("@/components/Section"), {
    ssr: false,
});

export const Members = () => (
    <div className="max-w-[874px] mx-auto">
        <Section title="heads">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {heads.map((head, index) => (
                    <div key={index} className="flex justify-center">
                        <ProfileCard
                            src={head.image}
                            name={head.name}
                            text={head.role}
                            index={index+1}
                        />
                    </div>
                ))}
            </div>
        </Section>

        <Section title="members" className="space-y-4">
            {Object.entries(teams).map(([team, members]) => (
                <TeamDisplay key={team} members={members} teamName={team} />
            ))}
        </Section>
    </div>
)

export default Members;