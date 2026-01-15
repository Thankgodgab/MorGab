import React from 'react';
import SectionHeader from '../organisms/SectionHeader';
import { FaEnvelopeOpenText, FaChartLine } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { motion } from 'motion/react';

// Images
import img1 from '../../assets/h5_choose_img01.jpg'; // Large portrait
import img2 from '../../assets/h5_choose_img02.jpg'; // Small overlapping landscape
import shape1 from '../../assets/h5_choose_shape02.png'; // Dots pattern or similar

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
                    {/* Decorative Dots Background - Positioned relative to the main image area */}
                    <img src={shape1} alt="" className="absolute -bottom-10 left-10 w-24 opacity-60 z-0" />

                    <div className="relative z-10 grid grid-cols-12 gap-4 items-center">
                        {/* Large Image (Back/Left) */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="col-span-8 col-start-1 row-start-1 relative z-10"
                        >
                            <img src={img1} alt="Consulting Team" className="w-full h-[500px] object-cover rounded-2xl shadow-xl" />
                        </motion.div>

                        {/* Smaller Image (Front/Right/Bottom) */}
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

                {/* Right Content - Text & Features */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-y-10"
                >
                    {/* Header */}
                    <div>
                        <SectionHeader
                            className="items-start! text-left! px-0! max-w-none!"
                            subtitle="WHY CHOOSE OUR SERVICE"
                            title="Providing Expert Advice on Business Consulting, Planning & Success"
                            description="Mauris ut enim sit amet lacus ornare ullamcorper. Praesent placerat neque eu purus rhoncus, vel tincidunt odio ultrices. Seed theya are feugiat elis Curabitur posuere tristique."
                        />
                    </div>

                    {/* Features Row */}
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
                                {/* Icon Container with SVG Shape (Copied Style) */}
                                <div className="relative w-20 h-20 flex items-center justify-center bg-orange-50 rounded-lg">
                                    {/* Background Shape SVG */}
                                    <div className="absolute inset-0 flex items-center justify-center z-0 text-orange-100">
                                        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-100 scale-110">
                                            <path d="M89.3997 20.1665C90.5806 21.4322 91.2497 23.0786 91.2607 24.7458C91.2717 26.4129 90.6237 27.965 89.4585 29.0627L82.7168 35.3787C83.8857 34.2836 85.4772 33.7354 87.141 33.8548C88.8049 33.9742 90.4049 34.7514 91.589 36.0153C92.7732 37.2792 93.4445 38.9265 93.4553 40.5946C93.4661 42.2627 92.8154 43.815 91.6465 44.9101L89.4391 46.9782C90.7021 46.1158 92.2814 45.7931 93.8594 46.075C95.4374 46.3569 96.897 47.2225 97.9445 48.4977C98.9919 49.7729 99.5496 51.363 99.5051 52.948C99.4607 54.5331 98.8175 55.9955 97.705 57.041L66.4218 86.3494C65.306 87.3914 63.8048 87.938 62.2202 87.8791C60.6357 87.8202 59.0853 87.1602 57.881 86.0319C56.6767 84.9037 55.908 83.3908 55.7294 81.7978C55.5509 80.2048 55.9757 78.6498 56.9185 77.4457L46.2874 87.4056C45.1185 88.5008 43.5271 89.0489 41.8632 88.9295C40.1994 88.8101 38.5994 88.033 37.4152 86.769C36.2311 85.5051 35.5598 83.8579 35.549 82.1898C35.5382 80.5217 36.1888 78.9693 37.3578 77.8742L42.5545 73.0055C41.5403 73.9509 40.2052 74.4903 38.7733 74.5334C37.3414 74.5764 35.8998 74.1205 34.6905 73.242C33.4812 72.3636 32.5777 71.1161 32.1318 69.7089C31.6858 68.3017 31.7245 66.8205 32.2413 65.5139L22.1964 74.9247C21.0275 76.0198 19.4361 76.5679 17.7722 76.4485C16.1084 76.3291 14.5084 75.552 13.3242 74.2881C12.1401 73.0241 11.4688 71.3769 11.458 69.7088C11.4472 68.0407 12.0978 66.4883 13.2667 65.3932L25.0674 54.3375C23.8985 55.4326 22.3071 55.9808 20.6432 55.8614C18.9794 55.742 17.3794 54.9649 16.1952 53.7009C15.0111 52.437 14.3398 50.7898 14.329 49.1217C14.3182 47.4536 14.9688 45.9012 16.1377 44.8061L11.4359 49.2111C10.267 50.3062 8.67555 50.8544 7.01169 50.735C5.34784 50.6156 3.74784 49.8384 2.56369 48.5745C1.37954 47.3106 0.708235 45.6633 0.697453 43.9952C0.686672 42.3271 1.3373 40.7748 2.5062 39.6797L35.5613 8.71135C36.7302 7.61624 38.3217 7.06808 39.9855 7.18747C41.6494 7.30686 43.2494 8.08401 44.4335 9.34795C45.6177 10.6119 46.289 12.2591 46.2998 13.9272C46.3105 15.5953 45.6599 17.1477 44.491 18.2428L61.4956 2.31173C62.6645 1.21663 64.2559 0.668477 65.9198 0.787863C67.5836 0.90725 69.1836 1.6844 70.3678 2.94834C71.5519 4.21229 72.2232 5.8595 72.234 7.5276C72.2448 9.19571 71.5942 10.7481 70.4253 11.8432L65.2285 16.7119C66.242 15.7657 67.5766 15.2252 69.0084 15.181C70.4403 15.1369 71.8821 15.5918 73.092 16.4694C74.3019 17.3471 75.2063 18.594 75.6532 20.001C76.1001 21.4079 76.0625 22.8893 75.5466 24.1964L80.5275 19.5299C81.699 18.4397 83.2895 17.8948 84.9518 18.014C86.6141 18.1333 88.2131 18.9071 89.3997 20.1665Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    {/* Icon */}
                                    <feature.icon className="text-3xl text-mg-yellow relative z-10" />
                                </div>

                                {/* Text */}
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
