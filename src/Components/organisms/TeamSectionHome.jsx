import React from 'react';
import TeamCard from '../molecules/TeamCard';
import { motion } from 'motion/react';
import { teamContent } from '../../data/content';

const TeamSectionHome = () => {
    const { sectionSubtitle, sectionTitle, sectionDescription, members } = teamContent;
    // Only show first 4 members on home
    const homeMembers = members.slice(0, 4);

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
                            {sectionSubtitle}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-mg-blue leading-tight font-primary">
                            {sectionTitle}
                        </h2>
                    </div>
                    <div className="lg:max-w-sm">
                        <p className="text-gray-500 leading-relaxed">
                            {sectionDescription}
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
                    {homeMembers.map((member) => (
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

export default TeamSectionHome;
