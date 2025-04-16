// src/components/QRCodeSection.jsx
import React from "react";
import QRCode from "./QRCode";

const QRCodeSection = () => {
  return (
    <section id="qr-code" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Share Our Workshop
          </h2>
          <p className="text-lg text-gray-700">
            Scan the QR code below to visit this page again or share it with
            others who might benefit from Diego's personalized workshop.
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          <QRCode />
        </div>

        <div className="max-w-xl mx-auto mt-12 text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Print and Share
          </h3>
          <p className="text-gray-700 mb-6">
            Download this QR code to include on flyers, business cards, or
            social media to help others discover the benefits of mindful
            movement with Diego Arango.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            Download QR Code
          </button>
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;
