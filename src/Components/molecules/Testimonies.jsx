import React, { useState, useEffect } from 'react';
import TestimonialCard from '../organisms/TestimonialCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import Assets (using team images as placeholders for avatars)
import avatar01 from '../../assets/team_img01.jpg';
import avatar02 from '../../assets/team_img02.jpg';
import avatar03 from '../../assets/team_img03.jpg';
import avatar04 from '../../assets/team_img04.jpg';
import quoteIcon from '../../assets/quote02.svg';

const Testimonies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const testimonials = [
        {
            id: 1,
            author: "Jone Cooper",
            role: "CEO, Apexa Agency",
            image: avatar01,
            rating: 5,
            text: "Morem ipsum dolor sit amet, consectetur adipisc Service awing elita florai sum dolor sit amet, consectetura area recall edBorem satisfied clients have to say ipsum dolor sit amet, consectetur."
        },
        {
            id: 2,
            author: "Eleanor Pena",
            role: "CEO, Ketto Agency",
            image: avatar02,
            rating: 5,
            text: "Morem ipsum dolor sit amet, consectetur adipisc Service awing elita florai sum dolor sit amet, consectetura area recall edBorem satisfied clients have to say ipsum dolor sit amet, consectetur."
        },
        {
            id: 3,
            author: "Floyd Miles",
            role: "CEO, Miles Marketing",
            image: avatar03,
            rating: 4,
            text: "Business consultancy were able to provide us with the best solutions for our marketing campaigns. Their team is highly professional and result-oriented."
        },
        {
            id: 4,
            author: "Ralph Edwards",
            role: "CTO, Tech Solutions",
            image: avatar04,
            rating: 5,
            text: "The financial strategies implemented by the team helped us scale our operations efficiently. I highly recommend their expertise to any growing business."
        },
        {
            id: 5,
            author: "Bessie Cooper",
            role: "Manager, Fine Art",
            image: avatar01,
            rating: 5,
            text: "A truly transformative experience. The level of detail and commitment to our project's success was outstanding from start to finish."
        },
        {
            id: 6,
            author: "Guy Hawkins",
            role: "Founder, Growth Lab",
            image: avatar02,
            rating: 5,
            text: "The insights provided were invaluable. We've seen a significant increase in our ROI since we started following their expert advice."
        }
    ];

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        const step = isMobile ? 1 : 2;
        if (currentIndex < testimonials.length - step) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCurrentIndex(0); // Loop back
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        } else {
            const step = isMobile ? 1 : 2;
            setCurrentIndex(testimonials.length - step); // Go to end
        }
    };

    return (
        <section className="py-24 bg-[#f9fafb] font-secondary overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 px-4">
                    <div className="max-w-2xl">
                        <span className="text-mg-yellow font-bold uppercase tracking-wider text-sm mb-4 block">
                            WHAT CLIENT SAY
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-mg-blue leading-tight font-primary">
                            Hear what our Satisfied <br className="hidden md:block" /> Clients have to say
                        </h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-mg-blue transition-all duration-300 hover:bg-mg-yellow hover:border-mg-yellow group"
                        >
                            <FaArrowLeft className="group-hover:scale-110 transition-transform" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-mg-blue transition-all duration-300 hover:bg-mg-yellow hover:border-mg-yellow group"
                        >
                            <FaArrowRight className="group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Slider Container */}
                <div className="relative">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)` }}
                    >
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="w-full lg:w-1/2 flex-shrink-0 px-4"
                            >
                                <TestimonialCard {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonies;