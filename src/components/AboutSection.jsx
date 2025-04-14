// src/components/AboutSection.jsx
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            About Diego Arango
          </h2>
          <p className="text-lg text-gray-700">
            Meet Diego Arango, an experienced movement coach dedicated to
            helping individuals transform their lives through mindful movement
            practices. With a passion for holistic wellbeing, Diego combines
            physical training with mindfulness techniques to enhance both
            physical and mental health.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-700 mb-6">
            Diego believes in the power of connecting with your body to achieve
            greater balance, reduce stress, and improve overall wellbeing. His
            personalized approach ensures that each individual receives tailored
            guidance to meet their specific needs and goals.
          </p>
          <p className="text-gray-700">
            Through his 3-hour personalized workshop, Diego offers a unique
            opportunity to learn practical techniques that can be integrated
            into daily life for lasting results. Whether you are looking to
            improve your physical fitness, reduce stress, or enhance your mental
            focus, Diego's expertise and guidance can help you on your journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
