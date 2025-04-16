// src/components/CallToAction.jsx
import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-r from-blue-800 to-indigo-700 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <svg
          className="absolute -top-24 -right-24 text-blue-500 opacity-20"
          width="300"
          height="300"
          viewBox="0 0 200 200"
        >
          <path
            fill="currentColor"
            d="M44.9,-76.2C59.7,-69.2,74.4,-60.4,83.6,-47.3C92.7,-34.1,96.3,-17.1,93.4,-1.7C90.6,13.8,81.4,27.5,72.2,40.7C63,53.9,53.8,66.6,41.4,74.8C28.9,83.1,14.4,87,0.1,86.8C-14.2,86.6,-28.5,82.3,-41.9,74.9C-55.4,67.5,-68.1,56.9,-76.2,43.2C-84.3,29.5,-87.8,14.7,-86.2,0.9C-84.6,-12.9,-77.9,-25.8,-69.9,-38.4C-61.8,-51,-52.5,-63.3,-40.5,-71.5C-28.5,-79.7,-14.2,-83.9,0.5,-84.8C15.2,-85.7,30.1,-83.3,44.9,-76.2Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="absolute -bottom-24 -left-24 text-blue-500 opacity-20"
          width="300"
          height="300"
          viewBox="0 0 200 200"
        >
          <path
            fill="currentColor"
            d="M44.7,-76.4C58.8,-69.2,71.8,-58.5,79.6,-44.7C87.4,-30.9,90,-13.9,89.3,2.8C88.5,19.5,84.4,36,74.8,48.3C65.3,60.5,50.4,68.6,35.5,74.7C20.7,80.7,5.9,84.7,-9.3,83.3C-24.6,81.9,-40.3,75.1,-53.4,65.2C-66.5,55.3,-77,42.3,-83.7,27C-90.3,11.7,-93.2,-5.9,-88.8,-21.6C-84.5,-37.3,-73,-51.1,-59.1,-58.4C-45.2,-65.7,-28.8,-66.5,-13.7,-70.3C1.4,-74.1,10.4,-81,22.6,-81.9C34.7,-82.8,50.1,-77.7,62,-69.1C73.9,-60.5,83.3,-48.4,88.5,-34.9C93.7,-21.3,94.7,-6.2,89.6,6.3C84.5,18.8,73.3,28.7,64.2,40.8C55.1,52.8,48.1,67,37.5,76.4C26.9,85.8,12.7,90.5,0.1,90.3C-12.5,90.1,-25,85,-38.6,78.6C-52.3,72.3,-67.1,64.7,-76.3,52.6C-85.5,40.5,-89.1,24,-88.9,8C-88.8,-8,-84.9,-23.4,-76.6,-35.6C-68.2,-47.8,-55.4,-56.7,-42,-64.9C-28.7,-73,-14.3,-80.4,0.1,-80.5C14.4,-80.7,28.9,-73.8,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's Tell Your Science Story
            </h2>

            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Stories shape the way we see the world. When people connect with a
              story, they care, and when they care, they act. Drop us a message
              to begin your storytelling journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://gogoa.com.co/page"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
              >
                Visit Our Website
              </a>

              <a
                href="https://www.instagram.com/gogoa_studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white hover:bg-blue-50 text-blue-900 font-bold rounded-lg shadow-xl hover:shadow-2xl transition duration-300"
              >
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Follow GOGOA
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
