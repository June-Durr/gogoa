// Updated src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="about"
      className="relative bg-gradient-to-r from-blue-900 to-indigo-800 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Where <span className="text-yellow-400">Science Meets</span>{" "}
                Storytelling
              </h1>

              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg md:max-w-xl">
                GOGOA Studio bridges the gap between complex scientific concepts
                and engaging narratives. We simplify and amplify science
                stories, making them relevant for your audience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#workshop"
                  className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
                >
                  Our Services
                </a>

                <button
                  onClick={scrollToForm}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition duration-300"
                >
                  Reserve Your Spot!
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right content - Visual element */}
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-lg overflow-hidden">
                <img
                  src="/images/logo3.png"
                  alt="Science Storytelling - GOGOA Studio"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://dummyimage.com/600x400/1a365d/ffffff&text=Science+Storytelling";
                  }}
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full z-0 opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-full z-0 opacity-50"></div>

              {/* Floating icons - science theme */}
              <motion.div
                className="absolute top-10 right-10 bg-white p-2 rounded-full shadow-lg z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-10 bg-white p-2 rounded-full shadow-lg z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
