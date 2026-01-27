import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import ContactForm from '../molecules/ContactForm';
import { contactInfo as storeContactInfo } from '../../data/content';

const ContactSection = () => {
    const infoItems = [
        {
            icon: FaMapMarkerAlt,
            title: "Address",
            value: storeContactInfo.address,
            color: "text-blue-500",
            bgColor: "bg-blue-50"
        },
        {
            icon: FaPhoneAlt,
            title: "Phone",
            value: storeContactInfo.phone,
            color: "text-purple-500",
            bgColor: "bg-purple-50"
        },
        {
            icon: FaEnvelope,
            title: "E-mail",
            value: storeContactInfo.email,
            color: "text-sky-500",
            bgColor: "bg-sky-50"
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-5 md:px-10 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Content */}
                    <div className="w-full lg:w-2/5">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-mg-blue font-primary mb-6 leading-tight"
                        >
                            How can we help you?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-500 mb-12 font-secondary leading-relaxed max-w-lg"
                        >
                            When an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five artifact types remaining essentially unchanged.
                        </motion.p>

                        <div className="space-y-8">
                            {infoItems.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="flex items-center gap-5 group"
                                >
                                    <div className={`w-14 h-14 rounded-full ${info.bgColor} ${info.color} flex items-center justify-center text-xl shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                                        <info.icon />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-mg-blue font-primary leading-none mb-1">
                                            {info.title}
                                        </h4>
                                        <p className="text-gray-500 font-secondary text-[15px]">
                                            {info.value}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Component: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-3/5"
                    >
                        <ContactForm />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
