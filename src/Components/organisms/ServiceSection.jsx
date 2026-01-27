import React from 'react';
import ServiceCard from './ServiceCard';
import { motion } from 'motion/react';
import { FaChartBar, FaLightbulb, FaSearchDollar, FaChartLine, FaCogs, FaRocket, FaBullhorn, FaDatabase } from "react-icons/fa";

const services = [
    {
        id: 1,
        icon: FaChartBar,
        title: "Strategic marketing",
        description: "Beauis utter enim amet lacus ornare ullamcorper Praesent neque purus rhoncus.",
        btnText: "READ MORE"
    },
    {
        id: 2,
        icon: FaLightbulb,
        title: "Insights & analytics",
        description: "Beauis utter enim amet lacus ornare ullamcorper Praesent neque purus rhoncus.",
        btnText: "READ MORE"
    },
    {
        id: 3,
        icon: FaSearchDollar,
        title: "Tax Audit",
        description: "Beauis utter enim amet lacus ornare ullamcorper Praesent neque purus rhoncus.",
        btnText: "READ MORE"
    },
    {
        id: 4,
        icon: FaChartLine,
        title: "Financial Growth",
        description: "Beauis utter enim amet lacus ornare ullamcorper Praesent neque purus rhoncus.",
        btnText: "READ MORE"
    },
    {
        id: 5,
        icon: FaCogs,
        title: "Business Planning",
        description: "Beauis utter enim amet lacus ornare ullamcorper Praesent neque purus rhoncus.",
        btnText: "READ MORE"
    },
    {
        id: 6,
        icon: FaRocket,
        title: "Market Expansion",
        description: "Beauis utter enim amet lacus ornare ullamcorper Praesent neque purus rhoncus.",
        btnText: "READ MORE"
    },
    {
        id: 7,
        icon: FaBullhorn,
        title: "Digital Advertising",
        description: "Beauis utter enim amet lacus ornare ullamcorper Praesent neque purus rhoncus.",
        btnText: "READ MORE"
    },
    {
        id: 8,
        icon: FaDatabase,
        title: "Data Management",
        description: "Beauis utter enim amet lacus ornare ullamcorper Praesent neque purus rhoncus.",
        btnText: "READ MORE"
    }
];

const ServiceSection = () => {
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
                        WHAT WE OFFER
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-mg-blue font-primary mt-4 mb-6 leading-tight"
                    >
                        We Do World Class Work For You
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-500 font-secondary text-sm md:text-base leading-relaxed"
                    >
                        Mauris ut enim sit amet lacus ornare ullamcorper Praesent plaacerat neque eu purus rhoncus vel tincidunt odio ultrices.
                    </motion.p>
                </div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ServiceCard
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                btnText={service.btnText}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
