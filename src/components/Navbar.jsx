import React, { useState } from "react";
import logo from "/bazmlogo.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: "program", en: "PROGRAM", no: "PROGRAM" },
    { id: "artists", en: "ARTISTS", no: "KUNSTNERE" },
    { id: "tickets", en: "TICKETS", no: "BILLETTER" },
    { id: "mela-festival", en: "MELA FESTIVAL", no: "MELA FESTIVAL" },
    { id: "about", en: "ABOUT", no: "OM" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="absolute left-0 w-full flex items-center justify-between px-4 sm:px-10 py-3 text-white font-semibold z-50">
      {/* Logo */}
      <div className="flex items-center gap-4 ">
        <img
          src={logo}
          alt="Bazm Logo"
          className="rounded-full object-contain 
                     w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-26 xl:h-26 2xl:w-36 2xl:h-36 cursor-pointer"
        />
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-white focus:outline-none z-50"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              isMenuOpen
                ? "M6 18L18 6M6 6l12 12" // X
                : "M4 6h16M4 12h16m-7 6h7" // Hamburger
            }
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <div
        className={`fixed md:static top-0 right-0 w-3/4 md:w-auto bg-black/40 md:bg-transparent 
          flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 p-8 md:p-0 
          text-lg md:text-base transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          md:translate-x-0 md:flex`}
      >
        {navLinks.map((link, idx) => (
          <button
            key={idx}
            onClick={() => handleScroll(link.id)}
            data-en={link.en}
            data-no={link.no}
            className="relative bg-transparent border-none text-white cursor-pointer transition hover:text-orange-400 
                       after:content-[''] after:absolute after:left-0 after:-bottom-1 
                       after:w-0 hover:after:w-full after:h-[2px] 
                       after:bg-gradient-to-r after:from-orange-400 after:to-blue-400 
                       after:transition-all after:duration-300
                       before:content-[attr(data-no)] before:block hover:before:content-[attr(data-en)]"
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
