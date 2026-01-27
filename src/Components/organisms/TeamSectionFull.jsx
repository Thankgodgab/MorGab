import React from 'react';
import TeamCard from '../molecules/TeamCard';
import { motion } from 'framer-motion';
import { teamContent } from '../../data/content';

const TeamSectionFull = () => {
    const { members } = teamContent;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-5 md:px-10 lg:px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {members.map((member, index) => (
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

export default TeamSectionFull;
