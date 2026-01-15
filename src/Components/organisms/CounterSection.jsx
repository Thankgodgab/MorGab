import React from 'react';
import { FaTrophy, FaRegSmile, FaGlobeAmericas, FaRegClock } from "react-icons/fa";
import { motion } from 'motion/react';

const counters = [
    {
        id: 1,
        icon: FaTrophy,
        number: "45+",
        title: "Successfully",
        subtitle: "Completed Projects"
    },
    {
        id: 2,
        icon: FaRegSmile,
        number: "92K",
        title: "Satisfied",
        subtitle: "100% Our Clients"
    },
    {
        id: 3,
        icon: FaGlobeAmericas,
        number: "19+",
        title: "All Over The World",
        subtitle: "We Are Available"
    },
    {
        id: 4,
        icon: FaRegClock,
        number: "25+",
        title: "Years of Experiences",
        subtitle: "To Run This Company"
    }
];

const CounterSection = () => {
    return (
        <div className="w-full bg-[#fdfaf5] py-20 px-5 md:px-10 lg:px-20 relative overflow-hidden border-t-[1px] border-gray-100">
            {/* Decorative Shapes */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-10 right-10 w-16 h-16 bg-mg-yellow rounded-full blur-3xl opacity-20"
            ></motion.div>
            <div className="absolute top-[-40px] left-[-40px] w-32 h-32 border-[1px] border-mg-yellow/20 rounded-full"></div>
            <div className="absolute top-[-20px] left-[-20px] w-24 h-24 border-[1px] border-mg-yellow/10 rounded-full"></div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
                className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 relative z-10"
            >
                {counters.map((counter) => (
                    <motion.div
                        key={counter.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-5 group cursor-default"
                    >
                        {/* Icon Container with Rotate Animation on Hover */}
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            className="text-mg-yellow text-5xl md:text-6xl"
                        >
                            <counter.icon />
                        </motion.div>
                        {/* Text Content */}
                        <div className="flex flex-col">
                            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-mg-blue font-primary leading-tight">
                                {counter.number}
                            </span>
                            <p className="text-gray-500 text-sm md:text-[15px] font-medium mt-1 leading-snug">
                                {counter.title} <br />
                                {counter.subtitle}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default CounterSection;

