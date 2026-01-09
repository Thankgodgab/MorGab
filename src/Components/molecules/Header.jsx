import { useState } from 'react'
import logo from '../../assets/LogoDark-L.png'
import { Link, NavLink } from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <div className="w-full py-6 flex items-center justify-center bg-transparent relative z-50">
      <div className="flex justify-between items-center w-full px-5 max-w-7xl">
        {/* Logo Section */}
        <div className="h-full">
          <Link to="/">
            <img src={logo} alt="Company Logo" className='w-36 md:w-40 object-contain' />
          </Link>
        </div>

        {/* Navigation Links - Center */}
        <nav className="hidden lg:flex items-center gap-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-base font-semibold font-primary transition-colors duration-300 ease-in-out ${isActive ? 'text-mg-yellow' : 'text-mg-blue hover:text-mg-yellow'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-x-6 justify-end">
          {/* Action Buttons - Right */}
          <div className="hidden md:flex items-center gap-x-4">
            <button className="text-mg-blue hover:text-mg-offwhite px-7 py-3 bg-mg-yellow relative overflow-hidden group hover:bg-none transition-colors duration-500 rounded-lg    shadow-md hover:shadow-lg cursor-pointer">
              <span className="absolute left-0 bottom-0 w-full h-full bg-mg-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></span>
              <span className='font-bold text-base relative z-10'>LET'S TALK</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(true)} className="text-3xl text-mg-blue cursor-pointer">
              <HiMenuAlt3 />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-mg-blue/80 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar Content */}
      <div className={`fixed top-0 right-0 w-full md:w-[80%] max-w-sm h-full bg-white z-50 shadow-2xl p-6 flex flex-col gap-y-8 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Sidebar Header */}
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Company Logo" className='w-32 object-contain' />
          </Link>
          <button onClick={() => setIsOpen(false)} className="text-3xl text-mg-blue hover:text-mg-yellow transition-colors">
            <RxCross2 />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col gap-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium font-primary transition-colors duration-300 ${isActive ? 'text-mg-yellow' : 'text-mg-blue hover:text-mg-yellow'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Sidebar Footer / Contact */}
        <div className="mt-auto">
          <div className="flex flex-col gap-y-2 text-mg-blue font-secondary">
            <p className='font-bold text-lg'>Contact Info</p>
            <p className="text-sm">info@apexa.com</p>
            <p className="text-sm">+123 888 9999</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header