import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Assets
import breadcrumbBg from '../../assets/breadcrumb_bg.jpg';

const BreadcrumbHeader = ({ title, path = [] }) => {
    return (
        <section 
            className="relative w-full py-[100px] bg-mg-blue overflow-hidden flex items-center justify-center text-center bg-cover bg-center"
            style={{ 
                backgroundImage: `linear-gradient(rgba(11, 24, 39, 0.7), rgba(11, 24, 39, 0.7)), url(${breadcrumbBg})` 
            }}
        >
            <div className="container mx-auto px-5 md:px-10 lg:px-20 relative z-10 w-full">
                <div className="flex flex-col items-start justify-center">
                    
                    {/* Content: Title & Breadcrumb */}
                    <div className="text-start">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-primary mb-4 tracking-tight uppercase"
                        >
                            {title}
                        </motion.h1>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-start justify-start gap-2 text-sm md:text-base font-bold font-primary"
                        >
                            <Link to="/" className="text-gray-300 hover:text-mg-yellow transition-colors tracking-wide">
                                HOME
                            </Link>
                            <span className="text-mg-yellow font-normal"> / </span>
                            <span className="text-mg-yellow uppercase tracking-widest">
                                {path[path.length - 1]}
                            </span>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

BreadcrumbHeader.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.arrayOf(PropTypes.string)
};

export default BreadcrumbHeader;
