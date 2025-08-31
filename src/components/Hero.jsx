import React from "react";
import bgImage from "../assets/hero-bg.jpeg";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-end gap-8 p-6 text-white font-semibold z-10">
        <a href="#program" className="hover:text-orange-400">
          PROGRAM
        </a>
        <a href="#artists" className="hover:text-orange-400">
          ARTISTS
        </a>
        <a href="#tickets" className="hover:text-orange-400">
          TICKETS
        </a>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          BAZM CULTURAL <br />
          <span className="text-5xl md:text-6xl font-extrabold">FESTIVAL</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
