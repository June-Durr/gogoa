// src/components/TestimonialsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Conservation International",
      role: "Environmental NGO",
      quote:
        "GOGOA Studio transformed our complex conservation data into compelling narratives that resonated with our donors and stakeholders.",
      image: "/images/testimonial-1.jpg",
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "Marine Biologist",
      quote:
        "Their ability to translate scientific research into engaging stories helped us secure funding and raise awareness for our ocean conservation initiatives.",
      image: "/images/testimonial-2.jpg",
    },
    {
      name: "EcoScience Foundation",
      role: "Research Organization",
      quote:
        "GOGOA's storytelling approach brought our scientific findings to life in ways that made our work accessible and meaningful to the general public.",
      image: "/images/testimonial-3.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200 rounded-full opacity-20 -ml-32 -mb-32"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Who We've Helped
          </h2>
          <p className="text-lg text-gray-700">
            We've collaborated with scientists, conservationists, and
            organizations to make their important work more accessible and
            impactful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg flex flex-col h-full relative"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 -left-4 text-5xl text-yellow-400">
                "
              </div>

              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-blue-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://dummyimage.com/150x150/e2e8f0/1a365d&text=Client";
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-600">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-700 italic flex-grow">
                {testimonial.quote}
              </p>

              {/* Quote closing mark */}
              <div className="text-right text-5xl text-yellow-400 mt-2">"</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
