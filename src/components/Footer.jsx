import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-400 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto">
        {/* Main Footer Content */}
        <div className="px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
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
                  <p className="text-sm text-gray-300">Cultural Festival</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Celebrating diverse cultures and bringing communities together
                through art, music, and traditions from around the world.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 hover:bg-orange-400 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
                  <FaFacebookF className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-orange-400 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
                  <FaInstagram className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-orange-400 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
                  <FaTwitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-orange-400 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
                  <FaTiktok className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-orange-400 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">PROGRAM</span></li>
                <li><span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">ARTISTS</span></li>
                <li><span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">TICKETS</span></li>
                <li><span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">MELA FESTIVAL</span></li>
                <li><span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">ABOUT</span></li>
              </ul>
            </div>

            {/* Festival Info */}
            <div>
              <h4 className="text-lg font-semibold text-orange-400 mb-6">Festival Info</h4>
              <ul className="space-y-3">
                <li><span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">Venue & Location</span></li>
                <li><span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">Food & Drinks</span></li>
                <li><span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">Cultural Workshops</span></li>
                <li><span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">Our Sponsors</span></li>
                <li><span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">Volunteer</span></li>
                <li><span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm cursor-pointer">FAQ</span></li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-orange-400 mb-6">Stay Connected</h4>
              <div className="space-y-4">
                <div className="text-sm text-gray-300">
                  <p className="mb-2">📧 info@bazmfestival.com</p>
                  <p className="mb-2">📞 +47 1234 5678</p>
                  <p>📍 Cultural Center, Norway</p>
                </div>
                
                {/* Newsletter Signup */}
                <div className="mt-6">
                  <h5 className="text-sm font-semibold mb-3 text-white">Newsletter</h5>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-orange-400 transition-colors duration-300"
                    />
                    <button className="px-6 py-2 bg-orange-400 hover:bg-orange-500 text-black font-semibold rounded-lg transition-colors duration-300 text-sm">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 px-6 md:px-10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; 2025 Bazm Cultural Festival. All rights reserved.</p>
            </div>
            
            <div className="flex gap-6 text-xs text-gray-400">
              <span className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">Terms of Service</span>
              <span className="hover:text-orange-400 transition-colors duration-300 cursor-pointer">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
