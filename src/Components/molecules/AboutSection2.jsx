import React from 'react';
import { motion } from 'motion/react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import SectionHeader from '../organisms/SectionHeader';
import Button from '../organisms/Button';

// Assets
import imgCloud from '../../assets/img-cloud.png';
import dotSquare from '../../assets/dot-square.png';

const AboutSection2 = () => {
    return (
        <section className="w-full py-20 px-5 md:px-10 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Images & Decoration */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Dots Background */}
                    <img
                        src={dotSquare}
                        alt=""
                        className="absolute -top-10 -right-10 w-40 opacity-50 -z-10"
                    />

                    {/* Main Image Container */}
                    <div className="relative">
                        <img
                            src={imgCloud}
                            alt="Cloud Services"
                            className="w-full h-auto rounded-3xl"
                        />

                        {/* Floating Experience Card */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="absolute -bottom-10 left-10 bg-white p-8 rounded-[40px] shadow-2xl border border-gray-100 max-w-[320px] hidden md:block"
                        >
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-4">
                                    <span className="text-6xl font-black text-mg-yellow font-primary">25</span>
                                    <div className="flex flex-col">
                                        <span className="text-mg-blue font-bold text-lg leading-tight uppercase font-primary">Years Experience</span>
                                        <div className="flex text-mg-yellow text-sm mt-1">
                                            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm font-medium mt-2 leading-relaxed">
                                    We successfully cope with tasks of varying complexity provide area
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-y-8"
                >
                    <SectionHeader
                        className="!items-start !text-left !px-0 !max-w-none"
                        subtitle="TOP OF TECHNOLOGY"
                        title="Cloud Services for Seamless Data Management"
                        description="We successfully cope with tasks of varying complexity provide area longerty guarantees and regularly master. We successfully cope varying complexity provide area longerty guarantees."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Business Growth Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100"
                        >
                            <div className="flex justify-between items-end mb-4">
                                <h3 className="text-4xl font-black font-primary text-mg-blue">98%</h3>
                                <div className="flex flex-col text-right">
                                    <span className="text-mg-blue font-bold text-xs">Business</span>
                                    <span className="text-mg-blue font-bold text-xs uppercase">Growth</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold text-mg-blue mb-1 uppercase tracking-wider">
                                        <span>Agency</span>
                                        <span>55%</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '55%' }}
                                            transition={{ duration: 1, delay: 0.6 }}
                                            className="h-full bg-mg-yellow rounded-full"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold text-mg-blue mb-1 uppercase tracking-wider">
                                        <span>Business</span>
                                        <span>55%</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '55%' }}
                                            transition={{ duration: 1, delay: 0.8 }}
                                            className="h-full bg-mg-yellow rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* List of features */}
                        <div className="flex flex-col gap-y-4">
                            {[
                                "Medicare Advantage Plans",
                                "Analysis & Research",
                                "100% Secure Money Back",
                                "100% Money Growth"
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-7 h-7 bg-mg-yellow rounded-full flex items-center justify-center text-white shrink-0">
                                        <FaArrowRightLong className="text-xs" />
                                    </div>
                                    <span className="text-mg-blue font-bold font-primary text-base lg:text-lg">
                                        {item}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Button
                            bgColor="bg-mg-blue"
                            hoverColor="bg-mg-yellow"
                            className="!text-white hover:!text-mg-blue transition-all"
                        >
                            CONTACT WITH US <FaArrowRight />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection2;