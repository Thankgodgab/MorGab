import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ image, title, category, link = "#" }) => {
    return (
        <div className="group relative w-full h-[450px] overflow-hidden cursor-pointer">
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover lg:grayscale transition-all duration-500 lg:group-hover:grayscale-0 group-hover:scale-105"
            />

            {/* Gradient Overlay (for text readability) */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300"></div>

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 w-full p-8 flex items-end justify-between z-10">

                {/* Text */}
                <div className="flex flex-col gap-1 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold font-primary text-white">{title}</h3>
                    <span className="text-mg-yellow font-bold text-sm uppercase tracking-wide">{category}</span>
                </div>

                {/* Arrow Button */}
                <a
                    href={link}
                    className="w-12 h-12 rounded-full bg-mg-blue flex items-center justify-center text-white transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-mg-yellow hover:text-mg-blue! shadow-lg"
                >
                    <FaArrowRight />
                </a>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    link: PropTypes.string,
};

export default ProjectCard;
