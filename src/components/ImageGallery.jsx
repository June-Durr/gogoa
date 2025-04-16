// src/components/ImageGallery.jsx
import React from "react";
import { motion } from "framer-motion";

const ImageGallery = () => {
  // Sample gallery data
  const galleryImages = [
    {
      src: "/images/gallery/movement-1.jpg",
      alt: "Workshop Session - Mindful Movement Practice",
      category: "Workshop",
    },
    {
      src: "/images/gallery/movement-2.jpg",
      alt: "Personalized Coaching with Diego",
      category: "One-on-One",
    },
    {
      src: "/images/gallery/movement-3.jpg",
      alt: "Breathwork Session",
      category: "Technique",
    },
    {
      src: "/images/gallery/movement-4.jpg",
      alt: "Body Awareness Training",
      category: "Workshop",
    },
    {
      src: "/images/gallery/movement-5.jpg",
      alt: "Movement for Stress Reduction",
      category: "Technique",
    },
    {
      src: "/images/gallery/movement-6.jpg",
      alt: "Group Movement Session",
      category: "Workshop",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Workshop in Action
          </h2>
          <p className="text-lg text-gray-700">
            Experience the transformative power of mindful movement with Diego
            Arango.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-lg overflow-hidden shadow-lg h-64"
            >
              {/* Fallback for image errors */}
              <div className="absolute inset-0 bg-blue-900 flex items-center justify-center">
                <p className="text-white text-center px-4">{image.alt}</p>
              </div>

              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />

              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-yellow-400 text-sm font-medium mb-1">
                  {image.category}
                </span>
                <h3 className="text-white text-lg font-bold">{image.alt}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#workshop"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            Learn More About the Workshop
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
