import React from "react";
import logo from "/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black max-w-[1920px] mx-auto text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-400 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto">
      
        <div className="px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
     
            <div className="lg:col-span-1">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={logo}
                  alt="Bazm Logo"
                  width={60}
                  height={60}
                  className="rounded-full object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-orange-400">BAZM</h3>
                  <p className="text-sm text-gray-300">Kulturfestival</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Vi feirer mangfoldige kulturer og bringer lokalsamfunn sammen
                gjennom kunst, musikk og tradisjoner fra hele verden.
              </p>

              {/* Sosiale medier ikoner */}
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61580166548194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-400 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/kulturfestivaler/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-400 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@bazmmelabergen?_t=ZS-8zRyuhgr95U&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-400 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
              </div>
            </div>

    
            <div>
              <h4 className="text-lg font-semibold text-orange-400 mb-6">
                Hurtiglenker
              </h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">
                    PROGRAM
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">
                    ARTISTER
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">
                    BILLETTER
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">
                    MELA FESTIVAL
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">
                    OM OSS
                  </span>
                </li>
              </ul>
            </div>

          
            <div>
              <h4 className="text-lg font-semibold text-orange-400 mb-6">
                Festivalinformasjon
              </h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">
                    Sted & Lokasjon
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">
                    Mat & Drikke
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">
                    Kulturelle Verksteder
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">
                    Våre Sponsorer
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">
                    Frivillig
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">
                    FAQ
                  </span>
                </li>
              </ul>
            </div>

          
            <div>
              <h4 className="text-lg font-semibold text-orange-400 mb-6">
                Hold deg oppdatert
              </h4>
              <div className="space-y-4">
                <div className="text-sm text-gray-300 space-y-2">
                  {/* 📧 E-post */}
                  <a
                    href="mailto:info@bazmfestival.com"
                    className="flex items-center gap-2 hover:text-orange-400 transition-colors duration-300"
                  >
                    <FaEnvelope className="text-orange-400 w-4 h-4" />
                    Bazmkulturfestivaler@gmail.com
                  </a>

                  {/* ✅ WhatsApp Gruppe */}
                  <a
                    href="https://chat.whatsapp.com/JcOGaq5zrTN97FSlEGdVFG?mode=ems_wa_c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-400 hover:text-orange-400 transition-colors duration-300 font-semibold cursor-pointer"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Bli med i vår WhatsApp-gruppe
                  </a>

                  {/* 📍 Lokasjon */}
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-orange-400 w-4 h-4" />
                    Bergen
                  </p>
                </div>

                {/* Nyhetsbrev */}
                <div className="mt-6">
                  <h5 className="text-sm font-semibold mb-3 text-white">
                    Nyhetsbrev
                  </h5>
                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <input
                      type="email"
                      placeholder="Din e-post"
                      className="w-full sm:flex-1 max-w-[250px] sm:max-w-none px-3 sm:px-4 py-2 
                 bg-gray-800 border border-gray-700 rounded-lg 
                 text-xs sm:text-sm text-white focus:outline-none focus:border-orange-400 
                 transition-colors duration-300"
                    />
                    <button
                      className="w-full sm:w-auto max-w-[250px] sm:max-w-none px-3 sm:px-6 py-2 
                 bg-orange-400 hover:bg-orange-500 text-black font-semibold rounded-lg 
                 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      Abonner
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bunntekst */}
        <div className="border-t border-gray-800 px-6 md:px-10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; 2025 Bazm Kulturfestival. Alle rettigheter reservert.</p>
            </div>

            <div className="flex gap-6 text-xs text-gray-400">
              <span className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                Personvernpolicy
              </span>
              <span className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                Vilkår for bruk
              </span>
              <span className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                Retningslinjer for informasjonskapsler
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
