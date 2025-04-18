// src/components/TestimonialsSection.jsx - Updated
import React from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Maria Rodriguez",
      role: "Marine Biologist, Ocean Conservation Institute",
      quote:
        "GOGOA's storytelling workshop transformed how I communicate my research. What used to be complex data is now compelling narrative that resonates with both colleagues and the public.",
      image: "/images/section5.jpg",
    },
    {
      name: "James Wilson",
      role: "Director, Climate Science Foundation",
      quote:
        "After working with GOGOA, our fundraising materials became significantly more effective. Their approach to science storytelling helped us increase donor engagement by over 40%.",
      image: "/images/testimonial-2.jpg",
    },
    {
      name: "Dr. Sarah Chen",
      role: "Environmental Researcher",
      quote:
        "The techniques I learned at GOGOA's workshop have been invaluable. I've secured two major grants since applying their storytelling framework to my proposals.",
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
            Success Stories
          </h2>
          <p className="text-lg text-gray-700">
            Hear from scientists and organizations who have transformed their
            communication through our storytelling approach.
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
