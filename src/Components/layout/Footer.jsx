import React, { useState, useEffect } from 'react';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronUp
} from 'react-icons/fa';
import Button from '../atoms/Button';
import { motion } from 'motion/react';
import { footerContent, contactInfo, navigation } from '../../data/content';

const iconMap = {
  FaFacebookF: <FaFacebookF />,
  FaTwitter: <FaTwitter />,
  FaInstagram: <FaInstagram />,
  FaPinterestP: <FaPinterestP />,
  FaYoutube: <FaYoutube />
};

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <footer className="bg-[#0b0f1a] text-mg-offwhite pt-20 pb-10 font-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
          >
            {/* Column 1: Logo & Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <a href="/" className="inline-block">
                <img src={navigation.logo.light} alt={navigation.logo.alt} className="h-10 w-auto" />
              </a>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center gap-3 group">
                  <span className="text-mg-yellow group-hover:scale-110 transition-transform"><FaPhoneAlt /></span>
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-mg-yellow transition-colors">{contactInfo.phone}</a>
                </div>
                <div className="flex items-center gap-3 group">
                  <span className="text-mg-yellow group-hover:scale-110 transition-transform"><FaEnvelope /></span>
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-mg-yellow transition-colors">{contactInfo.email}</a>
                </div>
                <div className="flex items-start gap-3 group">
                  <span className="text-mg-yellow mt-1 group-hover:scale-110 transition-transform"><FaMapMarkerAlt /></span>
                  <p className="leading-relaxed">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                {contactInfo.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-gray-800 text-mg-offwhite hover:bg-mg-yellow hover:text-mg-blue"
                  >
                    {iconMap[social.icon]}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Column 2: Information */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-8 relative inline-block">
                Information
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-mg-yellow"></span>
              </h4>
              <ul className="space-y-4 text-gray-400">
                {footerContent.infoLinks.map((item) => (
                  <li key={item.name}>
                    <a href={item.path} className="hover:text-mg-yellow transition-colors flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-2 h-[2px] bg-mg-yellow transition-all duration-300"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Top Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-8 relative inline-block">
                Top Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-mg-yellow"></span>
              </h4>
              <ul className="space-y-4 text-gray-400">
                {footerContent.topLinks.map((item) => (
                  <li key={item.name}>
                    <a href={item.path} className="hover:text-mg-yellow transition-colors flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-2 h-[2px] bg-mg-yellow transition-all duration-300"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Instagram Posts */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-8 relative inline-block">
                Instagram Posts
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-mg-yellow"></span>
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {footerContent.instagramPosts.map((post) => (
                  <a
                    key={post.id}
                    href={post.link}
                    className="relative group overflow-hidden rounded-lg block aspect-square"
                  >
                    <img
                      src={post.img}
                      alt={`Instagram post ${post.id}`}
                      className="w-full h-full object-cover lg:grayscale lg:group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-mg-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Newsletter & Copyright Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-gray-800 pt-10 mt-10"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-10">
              <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                <h3 className="text-2xl md:text-3xl font-bold whitespace-nowrap">{footerContent.newsletter.title}</h3>
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                  <form className="flex flex-col sm:flex-row items-center gap-4 w-full" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="email"
                      placeholder={footerContent.newsletter.placeholder}
                      className="w-full py-4 px-8 rounded-full bg-white text-mg-blue outline-none placeholder:text-gray-400 h-[56px] focus:ring-2 focus:ring-mg-yellow transition-all"
                    />
                    <Button type="submit" className="h-[56px] py-4 px-10 rounded-full text-base uppercase whitespace-nowrap bg-mg-yellow! text-mg-blue! hover:text-mg-offwhite! shadow-none hover:shadow-xl w-full sm:w-auto">
                      {footerContent.newsletter.buttonText}
                    </Button>
                  </form>
                </div>
              </div>
              <div className="w-full lg:w-auto">
                <p className="text-gray-400 text-sm md:whitespace-nowrap text-center lg:text-left">
                  {footerContent.copyright}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Fixed Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-mg-yellow text-mg-blue rounded-lg flex items-center justify-center hover:bg-mg-blue hover:text-mg-yellow transition-all duration-300 shadow-2xl z-9999 group overflow-hidden ${showScroll ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        aria-label="Back to top"
      >
        <span className="absolute inset-0 bg-mg-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
        <FaChevronUp className="relative z-10 group-hover:-translate-y-1 transition-transform" />
      </button>
    </>
  );
};

export default Footer;
