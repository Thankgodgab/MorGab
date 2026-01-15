import React from 'react';
import Button from '../organisms/Button';
import { FaArrowRight } from "react-icons/fa";

// Images
import bannerImg from '../../assets/h5_banner_img01.png';
import shape01 from '../../assets/h5_banner_shape01.png';
import shape02 from '../../assets/h5_banner_shape02.png';
// Using other shapes if needed, or stick to what seems decorative
import shape04 from '../../assets/h5_banner_shape04.png';

function HeroSection() {
  return (
    <div className="relative w-full pt-25 lg:pb-10 px-5 md:px-10 lg:px-25 overflow-hidden bg-mg-offwhite z-0">

      {/* Background Shapes */}
      {/* Top right squiggly line */}
      <img src={shape01} alt="" className="absolute top-5 lg:top-10 right-10 w-16 md:w-26 opacity-60 animate-spin z-0" />
      {/* Star shape near text */}
      <img src={shape02} alt="" className="absolute top-[15%] left-[60%] -translate-x-1/2 w-12 md:w-16 animate-bounce z-0 hidden lg:block" style={{ animationDuration: '10s' }} />
      {/* Dots grid */}
      <img src={shape04} alt="" className="absolute bottom-10 left-10 md:left-1/3 w-24 md:w-32 opacity-40 z-0" />

      {/* Container */}
      <div className="relative w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

        {/* Left Content */}
        <div className="flex flex-col gap-y-6 md:gap-y-8 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl  font-bold font-primary text-mg-blue leading-tight">
            Agency's Vision For <br className="hidden lg:block" />
            The <span className="relative inline">
              Next Generation
              {/* Underline effect */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-mg-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
              </svg>
            </span> <br className="hidden lg:block" />
            Of Advertising
          </h1>

          <p className="text-gray-600 font-secondary text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Agilos helps you to convert your data into a strategic asset and get business insights Agilos helps you to convert.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button>
              GET STARTED <FaArrowRight />
            </Button>
          </div>
        </div>

        {/* Right Content - Images */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Main Image */}
          <div className="relative z-10">
            <img src={bannerImg} alt="Business Woman" className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl" />

            {/* Floating Card: Business Growth */}
            <div className="absolute top-10 -left-6 md:-left-12 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce z-20 max-w-[200px] md:max-w-xs border border-gray-100" style={{ animationDuration: '3s' }}>
              <div className="bg-blue-50 text-mg-blue font-bold text-xl px-3 py-2 rounded-lg">
                15K
              </div>
              <div className="flex flex-col gap-1 w-full">
                <span className="text-sm font-bold text-mg-blue">Business Growth</span>
                <div className="flex flex-col gap-1">
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-mg-yellow w-[70%] rounded-full"></div>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400 w-[50%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative circles behind image (using CSS or shape) */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] border border-gray-200 rounded-full opacity-50 pointer-events-none -z-10"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] border border-gray-200 rounded-full opacity-30 pointer-events-none -z-10"></div>

        </div>
      </div>
    </div>
  )
}

export default HeroSection