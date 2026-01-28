import { useState, useEffect } from 'react'
import { navigation, contactInfo } from '../../data/content'
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { motion } from 'motion/react';

// Components declared outside of the main Header component to avoid re-creation on every render
const NavItems = () => {
  const currentPath = window.location.pathname;

  return (
    <nav className="hidden lg:flex items-center gap-x-8 lg:gap-x-12">
      {navigation.links.map((link, index) => {
        const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));

        return (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <a
              href={link.path}
              className={`text-base font-semibold font-primary transition-colors duration-300 ease-in-out ${isActive ? 'text-mg-yellow' : 'text-mg-blue hover:text-mg-yellow'}`}
            >
              {link.name}
            </a>
          </motion.div>
        );
      })}
    </nav>
  );
}

const ActionButtons = ({ setIsOpen }) => (
  <div className="flex items-center gap-x-6 justify-end">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="hidden md:flex items-center gap-x-4"
    >
      <a
        href={navigation.actionButton.path}
        className="text-mg-blue hover:text-mg-offwhite px-7 py-3 bg-mg-yellow relative overflow-hidden group hover:bg-none transition-colors duration-500 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
      >
        <span className="absolute left-0 bottom-0 w-full h-full bg-mg-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></span>
        <span className='font-bold text-base relative z-10 uppercase'>{navigation.actionButton.text}</span>
      </a>
    </motion.div>
    <div className="lg:hidden">
      <button onClick={() => setIsOpen(true)} className="text-3xl text-mg-blue cursor-pointer focus:outline-none">
        <HiMenuAlt3 />
      </button>
    </div>
  </div>
)

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const currentPath = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Main Header (Standard) */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full py-6 flex items-center justify-center bg-transparent z-40"
      >
        <div className="flex justify-between items-center w-full px-5 md:px-10 lg:px-20">
          <div className="h-full">
            <a href="/">
              <img src={navigation.logo.dark} alt={navigation.logo.alt} className='w-36 md:w-40 object-contain' />
            </a>
          </div>
          <NavItems />
          <ActionButtons setIsOpen={setIsOpen} />

        </div>
      </motion.header>

      {/* Sticky Header (Slides down) */}
      <header
        className={`fixed top-0 left-0 w-full py-4 bg-white shadow-xl z-9999 transition-all duration-500 transform ${isSticky ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex justify-between items-center w-full px-5 md:px-10 lg:px-20 container mx-auto">
          <div className="h-full">
            <a href="/">
              <img src={navigation.logo.dark} alt={navigation.logo.alt} className='w-32 md:w-36 object-contain' />
            </a>
          </div>
          <NavItems />
          <ActionButtons setIsOpen={setIsOpen} />
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-mg-blue/80 z-10000 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar Content */}
      <div className={`fixed top-0 right-0 w-full md:w-[80%] max-w-sm h-full bg-white z-10001 shadow-2xl p-6 flex flex-col gap-y-8 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <a href="/" onClick={() => setIsOpen(false)}>
            <img src={navigation.logo.dark} alt={navigation.logo.alt} className='w-32 object-contain' />
          </a>
          <button onClick={() => setIsOpen(false)} className="text-3xl text-mg-blue hover:text-mg-yellow transition-colors focus:outline-none">
            <RxCross2 />
          </button>
        </div>

        <nav className="flex flex-col gap-y-4">
          {navigation.links.map((link) => {
            const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));

            return (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium font-primary transition-colors duration-300 ${isActive ? 'text-mg-yellow' : 'text-mg-blue hover:text-mg-yellow'}`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto">
          <div className="flex flex-col gap-y-2 text-mg-blue font-secondary">
            <p className='font-bold text-lg'>Contact Info</p>
            <p className="text-sm">{contactInfo.email}</p>
            <p className="text-sm">{contactInfo.phone}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;
