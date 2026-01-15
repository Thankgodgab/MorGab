import React, { useState } from 'react';
import { FaShareAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TeamCard = ({ name, role, image, portfolioLink, socialLinks }) => {
    const [isSocialOpen, setIsSocialOpen] = useState(false);

    return (
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 group shadow-sm hover:shadow-xl transition-all duration-500">
            {/* Image Section */}
            <div className="relative bg-[#ebf3f7] pt-8 px-4 overflow-hidden">
                {/* Background Shape */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white rounded-t-[100%] scale-x-125 translate-y-1/2 transition-transform duration-700 group-hover:scale-x-150"></div>

                <img
                    src={image}
                    alt={name}
                    className="relative z-10 w-full h-auto object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />

                {/* Social Share Toggle */}
                <div className="absolute top-6 right-6 z-20 flex flex-col items-center">
                    <div className={`flex flex-col items-center gap-3 transition-all duration-500 origin-top overflow-hidden bg-white rounded-full ${isSocialOpen ? 'max-h-60 py-4 px-2 opacity-100 mb-2 shadow-lg' : 'max-h-0 opacity-0 mb-0'
                        }`}>
                        <button
                            onClick={() => setIsSocialOpen(false)}
                            className="text-mg-blue hover:text-mg-yellow transition-colors mb-2"
                        >
                            <FaTimes />
                        </button>
                        <a href={socialLinks?.facebook || "#"} className="text-mg-blue hover:text-mg-yellow transition-colors text-sm"><FaFacebookF /></a>
                        <a href={socialLinks?.twitter || "#"} className="text-mg-blue hover:text-mg-yellow transition-colors text-sm"><FaTwitter /></a>
                        <a href={socialLinks?.instagram || "#"} className="text-gray-400 hover:text-mg-blue transition-colors text-sm"><FaInstagram /></a>
                        <a href={socialLinks?.linkedin || "#"} className="text-mg-blue hover:text-mg-yellow transition-colors text-sm"><FaLinkedinIn /></a>
                    </div>

                    {!isSocialOpen && (
                        <button
                            onClick={() => setIsSocialOpen(true)}
                            className="w-10 h-10 rounded-full bg-white text-mg-blue flex items-center justify-center transition-all duration-300 shadow-md hover:bg-mg-yellow hover:text-mg-blue"
                        >
                            <FaShareAlt />
                        </button>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 text-left bg-white relative z-10">
                <Link
                    to={portfolioLink || "#"}
                    className="block text-2xl font-bold text-mg-blue hover:text-mg-yellow transition-colors duration-300 mb-1"
                >
                    {name}
                </Link>
                <p className="text-mg-yellow font-medium text-sm">
                    {role}
                </p>
            </div>
        </div>
    );
};

export default TeamCard;
