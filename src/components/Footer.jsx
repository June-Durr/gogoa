// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">
          Connect with us:{" "}
          <a
            href="https://gogoa.com.co/page"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            Visit our main website
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} GOGOA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
