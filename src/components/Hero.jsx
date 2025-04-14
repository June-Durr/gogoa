// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion"; // Optional: for animations

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Transform Your Life Through{" "}
                <span className="text-yellow-400">Mindful Movement</span>
              </h1>

              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg md:max-w-xl">
                Join Diego Arango for a transformative 3-hour workshop designed
                to help you reconnect with your body and find balance through
                mindful movement practices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#workshop"
                  className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
                >
                  Learn More
                </a>

                <a
                  href="https://gogoa.com.co/page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition duration-300"
                >
                  Visit Main Website
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right content - Coach Image */}
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/diego-arango.jpg"
                  alt="Diego Arango - Movement Coach"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://dummyimage.com/600x700/ccc/000&text=Diego+Arango";
                  }}
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full z-0 opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-full z-0 opacity-50"></div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
