import React from 'react';
import Button from '../organisms/Button';
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'motion/react';

// Images
import bannerImg from '../../assets/h5_banner_img01.png';
import shape01 from '../../assets/h5_banner_shape01.png';
import shape02 from '../../assets/h5_banner_shape02.png';
// Using other shapes if needed, or stick to what seems decorative
import shape04 from '../../assets/h5_banner_shape04.png';

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 },
    },
  };

  return (
    <div className="relative w-full pt-32 lg:pb-10 px-5 md:px-10 lg:px-25 overflow-hidden bg-mg-offwhite z-0">

      {/* Background Shapes */}
      {/* Top right squiggly line */}
      <motion.img
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: 360, opacity: 0.6 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        src={shape01}
        alt=""
        className="absolute top-5 lg:top-10 right-10 w-16 md:w-26 z-0"
      />
      {/* Star shape near text */}
      <motion.img
        initial={{ y: 0 }}
        animate={{ y: [-20, 0, -20] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        src={shape02}
        alt=""
        className="absolute top-[15%] left-[60%] -translate-x-1/2 w-12 md:w-16 z-0 hidden lg:block"
      />
      {/* Dots grid */}
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.4, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        src={shape04}
        alt=""
        className="absolute bottom-10 left-10 md:left-1/3 w-24 md:w-32 z-0"
      />

      {/* Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10"
      >

        {/* Left Content */}
        <div className="flex flex-col gap-y-6 md:gap-y-8 text-center lg:text-left">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-primary text-mg-blue leading-tight"
          >
            Agency's Vision For <br className="hidden lg:block" />
            The <span className="relative inline">
              Next Generation
              {/* Underline effect */}
              <motion.svg
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute w-full h-3 -bottom-1 left-0 text-mg-yellow"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
              </motion.svg>
            </span> <br className="hidden lg:block" />
            Of Advertising
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 font-secondary text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Agilos helps you to convert your data into a strategic asset and get business insights Agilos helps you to convert.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start"
          >
            <Button href="/contact">
              GET STARTED <FaArrowRight />
            </Button>
          </motion.div>
        </div>

        {/* Right Content - Images */}
        <motion.div
          variants={imageVariants}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Main Image */}
          <div className="relative z-10">
            <img src={bannerImg} alt="Business Woman" className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl" />

            {/* Floating Card: Business Growth */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-15, 0, -15] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-6 md:-left-12 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 z-20 max-w-[200px] md:max-w-xs border border-gray-100"
            >
              <div className="bg-blue-50 text-mg-blue font-bold text-xl px-3 py-2 rounded-lg">
                15K
              </div>
              <div className="flex flex-col gap-1 w-full">
                <span className="text-sm font-bold text-mg-blue">Business Growth</span>
                <div className="flex flex-col gap-1">
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="h-full bg-mg-yellow rounded-full"
                    ></motion.div>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                      className="h-full bg-orange-400 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative circles behind image (using CSS or shape) */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] border border-gray-200 rounded-full opacity-50 pointer-events-none -z-10"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] border border-gray-200 rounded-full opacity-30 pointer-events-none -z-10"></div>

        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
