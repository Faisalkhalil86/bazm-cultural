import React, { useState } from "react";
import logo from "/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-4 sm:px-10 py-4 text-white font-semibold z-10">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="Bazm Logo"
          width={80}
          height={80}
          className="rounded-full object-contain"
        />
      </div>

      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden text-white focus:outline-none"
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
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <div
        className={`fixed md:static top-16 right-0 w-3/5 md:w-auto bg-black/80 md:bg-transparent p-4 md:p-0 flex flex-col md:flex-row gap-4 md:gap-8 text-sm md:text-base transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 md:flex`}
      >
        <a
          href="#program"
          className="hover:text-orange-400 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          PROGRAM
        </a>
        <a
          href="#artists"
          className="hover:text-orange-400 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          ARTISTS
        </a>
        <a
          href="#tickets"
          className="hover:text-orange-400 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          TICKETS
        </a>
        <a
          href="#mela-festival"
          className="hover:text-orange-400 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          MELA FESTIVAL
        </a>
        <a
          href="#about"
          className="hover:text-orange-400 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          ABOUT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
