import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'motion/react';

const SectionHeader = ({ title, subtitle, description, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`flex flex-col items-center text-center gap-y-4 max-w-3xl px-4 ${className}`}
        >
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="text-mg-yellow font-bold tracking-wider uppercase text-sm md:text-base"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold font-primary text-mg-blue"
            >
                {title}
            </motion.h2>
            {description && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-600 font-secondary text-base md:text-lg leading-relaxed max-w-2xl"
                >
                    {description}
                </motion.p>
            )}
        </motion.div>
    );
};

SectionHeader.propTypes = {
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.node,
    className: PropTypes.string,
};

export default SectionHeader;

