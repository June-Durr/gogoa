// src/components/TestimonialsSection.jsx
import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      quote:
        "The workshop with Diego was truly transformative. I feel more connected to my body and have learned valuable techniques to manage stress.",
      image: "/images/testimonial-1.jpg", // Replace with actual image path
    },
    {
      name: "Carlos Perez",
      quote:
        "I highly recommend Diego's personalized workshop. His guidance was excellent, and I noticed a significant improvement in my focus and energy levels.",
      image: "/images/testimonial-2.jpg", // Replace with actual image path
    },
    {
      name: "Laura Gómez",
      quote:
        "Diego's approach is very effective. The combination of movement and mindfulness has made a positive impact on my overall wellbeing.",
      image: "/images/testimonial-3.jpg", // Replace with actual image path
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
          What Our Participants Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://dummyimage.com/150x150/ccc/000&text=Testimonial";
                  }}
                />
                <div>
                  <h4 className="text-lg font-semibold text-blue-800">
                    {testimonial.name}
                  </h4>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
