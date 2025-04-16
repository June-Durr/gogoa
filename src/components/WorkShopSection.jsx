// src/components/WorkshopSection.jsx
import React from "react";
import { motion } from "framer-motion";

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
                src="/images/workshop-session.jpg"
                alt="3-Hour Personalized Workshop"
                className="w-full h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://dummyimage.com/600x400/1a365d/ffffff&text=Personalized+Workshop";
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
              3-Hour Personalized Workshop
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Experience a transformative session with Diego Arango that
              combines science storytelling with mindful movement techniques to
              enhance your overall wellbeing.
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Personalized Approach:</strong> One-on-one format
                  tailored to your specific needs and goals
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Duration:</strong> 3 hours of intensive, focused
                  training
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Location:</strong> Available in-person or online via
                  video call
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Expert Guidance:</strong> Learn from Diego Arango, an
                  experienced storytelling and movement specialist
                </p>
              </div>
            </div>

            <a
              href="https://gogoa.com.co/page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              Book Your Workshop
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
