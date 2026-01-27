import React from 'react';
import ServiceCard from '../molecules/ServiceCard';
import { motion } from 'motion/react';
import * as FaIcons from "react-icons/fa";
import { servicesContent } from '../../data/content';

const ServiceSection = () => {
    const { sectionSubtitle, sectionTitle, sectionDescription, services } = servicesContent;

    return (
        <section className="py-24 bg-[#fdfaf5]">
            <div className="container mx-auto px-5 md:px-10 lg:px-20">
                {/* Header Text */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-mg-yellow font-bold tracking-widest text-sm md:text-base uppercase"
                    >
                        {sectionSubtitle}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-mg-blue font-primary mt-4 mb-6 leading-tight"
                    >
                        {sectionTitle}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-500 font-secondary text-sm md:text-base leading-relaxed"
                    >
                        {sectionDescription}
                    </motion.p>
                </div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const Icon = FaIcons[service.iconName];
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ServiceCard
                                    icon={Icon}
                                    title={service.title}
                                    description={service.description}
                                    btnText={service.btnText}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
