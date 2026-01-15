import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronUp } from 'react-icons/fa';
import Button from '../organisms/Button';
import { motion } from 'motion/react';

// Import Assets
import logoLight from '../../assets/LogoLight-L.png';
import footerShape from '../../assets/h4_footer_shape.png';
import insta01 from '../../assets/footer_insta01.jpg';
import insta02 from '../../assets/footer_insta02.jpg';
import insta03 from '../../assets/footer_insta03.jpg';
import insta04 from '../../assets/footer_insta04.jpg';
import insta05 from '../../assets/footer_insta05.jpg';
import insta06 from '../../assets/footer_insta06.jpg';

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

  const instagramPosts = [
    { id: 1, img: insta01, link: "https://www.instagram.com/p/1" },
    { id: 2, img: insta02, link: "https://www.instagram.com/p/2" },
    { id: 3, img: insta03, link: "https://www.instagram.com/p/3" },
    { id: 4, img: insta04, link: "https://www.instagram.com/p/4" },
    { id: 5, img: insta05, link: "https://www.instagram.com/p/5" },
    { id: 6, img: insta06, link: "https://www.instagram.com/p/6" },
  ];

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
        {/* Background Shape */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <img src={footerShape} alt="" className="w-full h-full object-cover" />
        </div>

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
              <Link to="/" className="inline-block">
                <img src={logoLight} alt="APexa Logo" className="h-10 w-auto" />
              </Link>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center gap-3 group">
                  <span className="text-mg-yellow group-hover:scale-110 transition-transform"><FaPhoneAlt /></span>
                  <a href="tel:+1238889999" className="hover:text-mg-yellow transition-colors">+123 888 9999</a>
                </div>
                <div className="flex items-center gap-3 group">
                  <span className="text-mg-yellow group-hover:scale-110 transition-transform"><FaEnvelope /></span>
                  <a href="mailto:info@apexa.com" className="hover:text-mg-yellow transition-colors">info@apexa.com</a>
                </div>
                <div className="flex items-start gap-3 group">
                  <span className="text-mg-yellow mt-1 group-hover:scale-110 transition-transform"><FaMapMarkerAlt /></span>
                  <p className="leading-relaxed">Sydney Harbour Bridge Circular City of Sydney, Australia.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                {[
                  { icon: <FaFacebookF />, link: "#" },
                  { icon: <FaTwitter />, link: "#" },
                  { icon: <FaInstagram />, link: "#" },
                  { icon: <FaPinterestP />, link: "#" },
                  { icon: <FaYoutube />, link: "#" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-gray-800 text-mg-offwhite hover:bg-mg-yellow hover:text-mg-blue"
                  >
                    {social.icon}
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
                {['Information', 'About us', 'Meet our team', 'Case stories', 'Latest news', 'Contact us'].map((item) => (
                  <li key={item}>
                    <Link to="#" className="hover:text-mg-yellow transition-colors flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-2 h-[2px] bg-mg-yellow transition-all duration-300"></span>
                      {item}
                    </Link>
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
                {["How it's Work", 'Partners', 'Testimonials', 'Case Studies', 'Pricing'].map((item) => (
                  <li key={item}>
                    <Link to="#" className="hover:text-mg-yellow transition-colors flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-2 h-[2px] bg-mg-yellow transition-all duration-300"></span>
                      {item}
                    </Link>
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
                {instagramPosts.map((post) => (
                  <a
                    key={post.id}
                    href={post.link}
                    className="relative group overflow-hidden rounded-lg block aspect-square"
                  >
                    <img
                      src={post.img}
                      alt={`Instagram post ${post.id}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
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
                <h3 className="text-2xl md:text-3xl font-bold whitespace-nowrap">Subscribe Newsletter</h3>
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                  <input
                    type="email"
                    placeholder="E-Mail Type . . ."
                    className="w-full py-4 px-8 rounded-full bg-white text-mg-blue outline-none placeholder:text-gray-400 h-[56px] focus:ring-2 focus:ring-mg-yellow transition-all"
                  />
                  <Button className="h-[56px] py-4 px-10 rounded-full text-base uppercase whitespace-nowrap bg-mg-yellow! text-mg-blue! hover:text-mg-offwhite! shadow-none hover:shadow-xl w-full sm:w-auto">
                    Subscribe
                  </Button>
                </div>
              </div>
              <div className="w-full lg:w-auto">
                <p className="text-gray-400 text-sm md:whitespace-nowrap text-center lg:text-left">
                  Copyright © 2024 Apexa | All Right Reserved
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

