import React from 'react';
import SectionHeader from '../atoms/SectionHeader';
import ServiceCard from '../molecules/ServiceCard';
import * as FaIcons from "react-icons/fa";
import { motion } from 'motion/react';
import { servicesContent } from '../../data/content';

function OfferSection() {
    const { sectionSubtitle, sectionTitle, sectionDescription, services } = servicesContent;
    // Show only first 4 on home
    const homeServices = services.slice(0, 4);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="w-full py-20 px-5 md:px-10 lg:px-20 bg-white overflow-hidden">
            <div className="mb-16">
                <SectionHeader
                    subtitle={sectionSubtitle}
                    title={sectionTitle}
                    description={sectionDescription}
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
            >
                {homeServices.map((service) => {
                    const Icon = FaIcons[service.iconName] || FaIcons.FaBullhorn;
                    return (
                        <motion.div key={service.id} variants={cardVariants}>
                            <ServiceCard
                                icon={Icon}
                                title={service.title}
                                description={service.description}
                                btnText={service.btnText}
                            />
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}

export default OfferSection;
