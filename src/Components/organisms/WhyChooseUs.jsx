import React from 'react';
import SectionHeader from '../atoms/SectionHeader';
import { FaEnvelopeOpenText, FaChartLine } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { motion } from 'framer-motion';

// Images
import img1 from '../../assets/h5_choose_img01.jpg';
import img2 from '../../assets/h5_choose_img02.jpg';
import shape1 from '../../assets/h5_choose_shape02.png';

const WhyChooseUs = () => {
    // Features Data
    const features = [
        {
            icon: FaEnvelopeOpenText,
            title: "E-mail Marketing",
            description: "Agilos helps youcona doing tempor incididunt."
        },
        {
            icon: FaChartLine,
            title: "Business Growth",
            description: "Agilos helps youcona doing tempor incididunt."
        }
    ];

    return (
        <section className="w-full py-20 px-5 md:px-10 lg:px-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content - Image Grid */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative "
                >
                    {/* Decorative Dots Background */}
                    <img src={shape1} alt="" className="absolute -bottom-10 left-10 w-24 opacity-60 z-0" />

                    <div className="relative z-10 grid grid-cols-12 gap-4 items-center">
                        {/* Large Image */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="col-span-8 col-start-1 row-start-1 relative z-10"
                        >
                            <img src={img1} alt="Consulting Team" className="w-full h-[500px] object-cover rounded-2xl shadow-xl" />
                        </motion.div>

                        {/* Smaller Image */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="col-span-6 col-start-7 row-start-1 pt-32 lg:pt-48 relative z-20 -ml-4 lg:-ml-8"
                        >
                            <div className="p-2 bg-white rounded-2xl shadow-lg">
                                <img src={img2} alt="Handshake" className="w-full h-[250px] object-cover rounded-xl" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Floating Success Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-10 z-30 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-gray-100 max-w-xs w-full"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="min-w-[60px] h-[60px] bg-mg-yellow rounded-lg flex items-center justify-center text-white text-2xl"
                        >
                            <FaArrowTrendUp />
                        </motion.div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-mg-blue">79%</span>
                            <span className="text-gray-500 font-medium text-sm">Success Goal</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-y-10"
                >
                    <SectionHeader
                        className="items-start! text-left! px-0! max-w-none!"
                        subtitle="WHY CHOOSE OUR SERVICE"
                        title="Providing Expert Advice on Business Consulting, Planning & Success"
                        description="Mauris ut enim sit amet lacus ornare ullamcorper. Praesent placerat neque eu purus rhoncus, vel tincidunt odio ultrices. Seed theya are feugiat elis Curabitur posuere tristique."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                viewport={{ once: true }}
                                className="flex flex-col gap-y-4"
                            >
                                <div className="relative w-20 h-20 flex items-center justify-center bg-orange-50 rounded-lg">
                                    <feature.icon className="text-3xl text-mg-yellow relative z-10" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-xl font-bold text-mg-blue font-primary">{feature.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
