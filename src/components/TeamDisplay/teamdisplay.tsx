import React from 'react';
import Link from 'next/link';

interface TeamDisplayProps {
    members: { name: string; link?: string; }[];
    teamName: string;
}

const TeamDisplay = ({ members, teamName }: TeamDisplayProps) => {
    return (
        <div className="bg-bgSecondary w-full h-full min-h-[200px] p-8 flex justify-between items-center">
            <div className="space-y-1">
                {members.map((member, index) => (
                    <div key={index}>
                        {member.link
                            ? <Link href={ member.link } className='text-lg underline text-blue-300 hover:text-blue-400'>{ member.name }</Link>
                            : <p className='text-lg'>{ member.name }</p>
                        }
                    </div>
                ))}
            </div>
            <h1 className="text-6xl font-bold opacity-60 bg-gradient-to-r from-bgSecondary to-foreground bg-clip-text text-transparent">
                {teamName}
            </h1>
        </div>
    );
};

export default TeamDisplay;