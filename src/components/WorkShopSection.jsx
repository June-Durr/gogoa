// src/components/WorkshopSection.jsx - Updated
import React from "react";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

const WorkshopSection = () => {
  return (
    <section
      id="workshop"
      className="py-16 bg-blue-50 overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 -mr-32"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-yellow-200 rounded-full opacity-20 -ml-32"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/Diego.JPG"
                alt="Science Storytelling Workshop - May 20, 2025"
                className="w-full h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://dummyimage.com/600x400/1a365d/ffffff&text=Science+Storytelling+Workshop";
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Science Storytelling Workshop
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Join us for an intensive workshop designed to help scientists,
              conservationists, and science communicators transform complex
              research into compelling narratives.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1 mr-3">
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
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Date:</strong> May 20, 2025
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1 mr-3">
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
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Time:</strong> 9:00 AM - 4:00 PM (EDT)
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1 mr-3">
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
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Location:</strong> Innovation Center, 123 Science
                  Blvd, Miami, FL 33139
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1 mr-3">
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
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Investment:</strong> $299 per person (includes lunch
                  and materials)
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1 mr-3">
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
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Capacity:</strong> Limited to 25 participants for
                  personalized attention
                </p>
              </div>
            </div>

            <div className="mt-8">
              <CountdownTimer />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
