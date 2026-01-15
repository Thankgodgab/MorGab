import React from 'react';
import SectionHeader from '../organisms/SectionHeader';
import Button from '../organisms/Button';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsTrophy } from "react-icons/bs";

// Images
import aboutImg from '../../assets/h5_choose_img01.jpg'; // Using the smiling woman image
import shape1 from '../../assets/h5_about_shape.png'; // Squiggly line?

const AboutSection = () => {
    return (
        <section className="w-full py-20 px-5 md:px-10 lg:px-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="flex flex-col gap-y-8 order-2 lg:order-1">
                    <SectionHeader
                        className="!items-start !text-left !px-0 !max-w-none"
                        subtitle="ABOUT COMPANY"
                        title={
                            <>
                                Business Growth Creativity <br />
                                Meet Our <span className="relative inline-block z-10">
                                    Agency's Experts
                                    {/* Underline */}
                                    <span className="absolute left-0 bottom-2 w-full h-3 bg-mg-yellow -z-10 opacity-80"></span>
                                </span>
                            </>
                        }
                        description={
                            <>
                                We successfully cope with tasks of varying complexity provide area longerty guarantees and regularly master. We successfully cope varying complexity provide area longerty guarantees.
                            </>
                        }
                    />

                    {/* Stats Card: Business Growth */}
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-md w-full">
                        <div className="flex justify-between items-end mb-2">
                            <h3 className="text-3xl font-bold font-primary text-mg-blue">98%</h3>
                            <span className="text-sm font-bold text-gray-500 mb-1">Business <br /> Growth</span>
                        </div>

                        {/* Progress Bars */}
                        <div className="flex flex-col gap-4 mt-4">
                            {/* Bar 1 */}
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between text-xs font-bold text-mg-blue">
                                    <span>Agency</span>
                                    <span>55%</span>
                                </div>
                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-mg-yellow w-[55%] rounded-full"></div>
                                </div>
                            </div>
                            {/* Bar 2 */}
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between text-xs font-bold text-mg-blue">
                                    <span>Business</span>
                                    <span>55%</span>
                                </div>
                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-mg-yellow w-[55%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bullet Points */}
                    <div className="flex flex-col gap-y-3">
                        {[
                            "Medicare Advantage Plans",
                            "Analysis & Research",
                            "100% Secure Money Back",
                            "100% Money Growth"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-mg-yellow flex items-center justify-center text-white text-xs">
                                    <FaArrowRightLong />
                                </div>
                                <span className="text-mg-blue font-bold font-primary text-lg">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-4">
                        <Button
                            bgColor="bg-mg-blue"
                            hoverColor="bg-mg-yellow"
                            className="!text-white hover:text-mg-blue!"
                        >
                            CONTACT WITH US <FaArrowRight />
                        </Button>
                    </div>
                </div>

                {/* Right Content - Image */}
                <div className="relative flex justify-center order-1  lg:order-2 lg:justify-end">
                    {/* Main Image Container */}
                    <div className="relative">
                        <img src={aboutImg} alt="Agency Expert" className="rounded-xl object-cover h-[600px] w-full max-w-md mx-auto" />

                        {/* Floating Badge: World Best Agency */}
                        <div className="absolute top-1/2 -left-12 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-2 text-center border border-gray-50 max-w-[140px] hidden md:flex">
                            <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-400 text-3xl mb-2">
                                <BsTrophy />
                            </div>
                            <span className="text-3xl font-bold text-mg-blue">15+</span>
                            <span className="text-xs font-bold text-gray-500 uppercase leading-snug">
                                Award Got <br /> World Best <br /> Agency
                            </span>
                        </div>

                        {/* Decorative Elements */}
                        <img src={shape1} alt="" className="absolute -top-10 -right-10 w-20 animate-pulse" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutSection