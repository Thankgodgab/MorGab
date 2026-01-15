import React from 'react';
import SectionHeader from '../organisms/SectionHeader';
import ServiceCard from '../organisms/ServiceCard';
import { FaBullhorn, FaChartLine, FaFileInvoiceDollar, FaChartPie } from "react-icons/fa6"; // Standard matching icons
import { motion } from 'motion/react';

const services = [
    {
        id: 1,
        icon: FaBullhorn,
        title: "Strategic marketing",
        description: "Beauis utter enim amet lacus ornare ullamcorper Praesent neque purus rhoncus.",
        btnText: "READ MORE"
    },
    {
        id: 2,
        icon: FaChartLine,
        title: "Insights & analytics",
        description: "Beauis utter enim amet lacus ornare ullamcorper Praesent neque purus rhoncus.",
        btnText: "READ MORE"
    },
    {
        id: 3,
        icon: FaFileInvoiceDollar,
        title: "Tax Audit",
        description: "Beauis utter enim amet lacus ornare ullamcorper Praesent neque purus rhoncus.",
        btnText: "READ MORE"
    },
    {
        id: 4,
        icon: FaChartPie,
        title: "Financial Growth",
        description: "Beauis utter enim amet lacus ornare ullamcorper Praesent neque purus rhoncus.",
        btnText: "READ MORE"
    }
];

function WhatWeOffer() {
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
            {/* 1. Heading Component */}
            <div className="mb-16">
                <SectionHeader
                    subtitle="WHAT WE OFFER"
                    title="We Do World Class Work For You"
                    description="Mauris ut enim sit amet lacus ornare ullamcorper Praesent placerat neque eu purus rhoncus vel tincidunt odio ultrices."
                />
            </div>

            {/* 2. Body - Cards Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
            >
                {services.map((service) => (
                    <motion.div key={service.id} variants={cardVariants}>
                        <ServiceCard
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            btnText={service.btnText}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default WhatWeOffer;
