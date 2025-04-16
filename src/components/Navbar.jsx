// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2 text-blue-900"
          : "bg-transparent py-4 text-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/images/gogoa-logo.png"
              alt="GOGOA"
              className={`h-10 w-auto ${
                isScrolled ? "filter-none" : "brightness-0 invert"
              }`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://dummyimage.com/150x50/1a365d/ffffff&text=GOGOA";
              }}
            />
            <span className={`ml-2 font-bold text-xl`}>STUDIO</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a
                href="#about"
                className={`${
                  isScrolled
                    ? "text-blue-900 hover:text-blue-600"
                    : "text-white hover:text-yellow-300"
                } transition-colors duration-300 font-medium`}
              >
                About
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="#services"
                className={`${
                  isScrolled
                    ? "text-blue-900 hover:text-blue-600"
                    : "text-white hover:text-yellow-300"
                } transition-colors duration-300 font-medium`}
              >
                Services
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="#testimonials"
                className={`${
                  isScrolled
                    ? "text-blue-900 hover:text-blue-600"
                    : "text-white hover:text-yellow-300"
                } transition-colors duration-300 font-medium`}
              >
                Testimonials
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="https://gogoa.com.co/page"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isScrolled
                    ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-blue-900"
                } border-2 px-4 py-2 rounded-lg transition-colors duration-300 font-medium`}
              >
                Visit Main Site
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 focus:outline-none ${
                isScrolled ? "text-blue-900" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-60 mt-4" : "max-h-0"
          }`}
          initial={false}
          animate={isMenuOpen ? { opacity: 1 } : { opacity: 0 }}
        >
          <div className="flex flex-col bg-white rounded-lg shadow-lg p-4 space-y-3">
            <a
              href="#about"
              className="text-blue-900 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-blue-900 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-blue-900 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="https://gogoa.com.co/page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white py-2 px-3 rounded-md text-center transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Visit Main Site
            </a>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
