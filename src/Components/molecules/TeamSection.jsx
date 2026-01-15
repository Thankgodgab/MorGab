import React from 'react';
import TeamCard from '../organisms/TeamCard';
import { motion } from 'motion/react';

// Import Assets
import team01 from '../../assets/team_img01.jpg';
import team02 from '../../assets/team_img02.jpg';
import team03 from '../../assets/team_img03.jpg';
import team04 from '../../assets/team_img04.jpg';

const TeamSection = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Jone Cooper",
            role: "Finance Advisor",
            image: team01,
            portfolioLink: "/team/jone-cooper",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                instagram: "#",
                linkedin: "#"
            }
        },
        {
            id: 2,
            name: "Eleanor Pena",
            role: "Business Eng.",
            image: team02,
            portfolioLink: "/team/eleanor-pena",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                instagram: "#",
                linkedin: "#"
            }
        },
        {
            id: 3,
            name: "Floyd Miles",
            role: "Marketing",
            image: team03,
            portfolioLink: "/team/floyd-miles",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                instagram: "#",
                linkedin: "#"
            }
        },
        {
            id: 4,
            name: "Ralph Edwards",
            role: "Developer",
            image: team04,
            portfolioLink: "/team/ralph-edwards",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                instagram: "#",
                linkedin: "#"
            }
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="py-24 bg-white font-secondary overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16"
                >
                    <div className="max-w-xl">
                        <span className="text-mg-yellow font-bold uppercase tracking-wider text-sm mb-4 block">
                            Meet Our Team
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-mg-blue leading-tight font-primary">
                            Financial Expertise You Can Trust
                        </h2>
                    </div>
                    <div className="lg:max-w-sm">
                        <p className="text-gray-500 leading-relaxed">
                            Our power of choice is untrammelled and when nothing prevents being able to do what we like best every pleasure.
                        </p>
                    </div>
                </motion.div>

                {/* Team Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {teamMembers.map((member) => (
                        <motion.div key={member.id} variants={cardVariants}>
                            <TeamCard
                                {...member}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;
