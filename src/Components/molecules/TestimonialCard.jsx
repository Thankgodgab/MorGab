import React from 'react';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

const TestimonialCard = ({ author, role, image, rating, text }) => {
    return (
        <div className="bg-white p-10 rounded-3xl relative h-full flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-50">
            <div>
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                            src={image}
                            alt={author}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-mg-blue/60 font-medium text-sm mb-2">{role}</p>
                        {/* Rating */}
                        <div className="flex gap-1 text-mg-yellow mb-4">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className={i < rating ? "fill-current" : "text-gray-200"} />
                            ))}
                        </div>
                    </div>
                    {/* Quote Icon */}
                    <FaQuoteRight className="text-[#e2e8f0] text-6xl opacity-50" />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-500 italic leading-relaxed text-lg">
                    “ {text} ”
                </p>
            </div>
        </div>
    );
};


export default TestimonialCard;
