import React from "react";
import bgImage from "/herobackground1.png";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative h-screen max-w-[1920px] mx-auto overflow-hidden scroll-smooth">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      <Navbar />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          <span className="text-pink-500">BAZM</span> Kultur <br />
          <span className="text-4xl md:text-7xl font-bold">Festivaler</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
