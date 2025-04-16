// src/components/InstagramFeed.jsx
import React from "react";
import { motion } from "framer-motion";

const InstagramFeed = () => {
  // Sample Instagram posts data
  // In a real implementation, you would fetch this from Instagram API
  const instagramPosts = [
    {
      id: "post1",
      imageUrl: "/images/instagram/post1.jpg",
      caption:
        "Exploring the connection between movement and mindfulness in today's workshop. #MindfulMovement #GogoaStudio",
      likes: 142,
      date: "2 days ago",
      link: "https://www.instagram.com/p/post1/",
    },
    {
      id: "post2",
      imageUrl: "/images/instagram/post2.jpg",
      caption:
        "Science meets storytelling: How movement practices connect to our everyday life. #ScienceStorytelling #MindfulMovement",
      likes: 98,
      date: "1 week ago",
      link: "https://www.instagram.com/p/post2/",
    },
    {
      id: "post3",
      imageUrl: "/images/instagram/post3.jpg",
      caption:
        "Personalized workshop session focusing on breathwork and stress reduction techniques. #PersonalizedApproach #Wellness",
      likes: 215,
      date: "2 weeks ago",
      link: "https://www.instagram.com/p/post3/",
    },
    {
      id: "post4",
      imageUrl: "/images/instagram/post4.jpg",
      caption:
        "The science behind mindful movement: How these practices affect our brain and overall wellbeing. #ScienceOfMovement",
      likes: 173,
      date: "3 weeks ago",
      link: "https://www.instagram.com/p/post4/",
    },
    {
      id: "post5",
      imageUrl: "/images/instagram/post5.jpg",
      caption:
        "Grateful for another successful workshop today! #MindfulMovement #GogoaStudio #TransformLives",
      likes: 124,
      date: "1 month ago",
      link: "https://www.instagram.com/p/post5/",
    },
    {
      id: "post6",
      imageUrl: "/images/instagram/post6.jpg",
      caption:
        "When science meets storytelling, we can transform how we understand our bodies and minds. #GogoaApproach",
      likes: 187,
      date: "1 month ago",
      link: "https://www.instagram.com/p/post6/",
    },
  ];

  return (
    <section id="instagram" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Follow Our Journey
          </h2>
          <p className="text-lg text-gray-700">
            Connect with us on Instagram to see more about our approach to
            mindful movement and personalized workshops.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative overflow-hidden rounded-lg shadow-md aspect-square"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Fallback background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-blue-600 flex items-center justify-center text-white p-4">
                <p className="text-center">{post.caption}</p>
              </div>

              {/* Instagram post image */}
              <img
                src={post.imageUrl}
                alt={`Instagram post: ${post.caption.substring(0, 30)}...`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />

              {/* Overlay with Instagram info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white text-sm line-clamp-3 mb-2">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-red-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white text-xs">{post.likes}</span>
                  </div>
                  <span className="text-white text-xs">{post.date}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/gogoa_studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow @gogoa_studio
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
