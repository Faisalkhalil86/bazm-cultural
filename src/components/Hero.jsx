import React, { useState, useEffect } from "react";
import bgImage from "/herobackground1.png";
import Navbar from "./Navbar";

const Hero = () => {
  const headings = [
    { main: "BAZM Kultur", sub: "Festivaler" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [headings.length]);

  return (
    <div className="relative h-screen max-w-[1920px] mx-auto  overflow-hidden scroll-smooth">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      {/* Navbar */}
      <Navbar />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg transition-all duration-700 ease-in-out">
          {headings[currentIndex].main} <br />
          <span className="text-4xl md:text-7xl font-bold text-blue-40">
            {headings[currentIndex].sub}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
