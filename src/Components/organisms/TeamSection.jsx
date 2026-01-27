import React from 'react';
import TeamCard from './TeamCard';
import { motion } from 'motion/react';

// Importing team images
import team1 from '../../assets/team_img01.jpg';
import team2 from '../../assets/team_img02.jpg';
import team3 from '../../assets/team_img03.jpg';
import team4 from '../../assets/team_img04.jpg';

const teamMembers = [
    {
        id: 1,
        name: "Jone Cooper",
        role: "Finance Advisor",
        image: team1,
        socialLinks: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
        id: 2,
        name: "Eleanor Pena",
        role: "Business Eng.",
        image: team2,
        socialLinks: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
        id: 3,
        name: "Floyd Miles",
        role: "Marketing",
        image: team3,
        socialLinks: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
        id: 4,
        name: "Ralph Edwards",
        role: "Developer",
        image: team4,
        socialLinks: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
        id: 5,
        name: "Bessie Cooper",
        role: "Designer",
        image: team1, // Reusing for demo
        socialLinks: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
        id: 6,
        name: "Arlene McCoy",
        role: "Manager",
        image: team2, // Reusing for demo
        socialLinks: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
        id: 7,
        name: "Theresa Webb",
        role: "HR Expert",
        image: team3, // Reusing for demo
        socialLinks: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
        id: 8,
        name: "Jerome Bell",
        role: "SEO Expert",
        image: team4, // Reusing for demo
        socialLinks: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    }
];

const TeamSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-5 md:px-10 lg:px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <TeamCard
                                name={member.name}
                                role={member.role}
                                image={member.image}
                                socialLinks={member.socialLinks}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
