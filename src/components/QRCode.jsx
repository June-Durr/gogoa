// src/components/QRCode.jsx
import React, { useEffect, useRef } from "react";

const QRCode = () => {
  const qrCodeRef = useRef(null);

  useEffect(() => {
    // This is a placeholder for actual QR code generation
    // In a real implementation, you would:
    // 1. Use a library like qrcode.react or qrcode.js
    // 2. Generate the QR code with the URL of this landing page

    // Example of how to implement with qrcode.react:
    // import QRCode from 'qrcode.react';
    // <QRCode value="https://yourdomain.com/diego-workshop" />

    // For now, we'll simulate the QR code with a placeholder
    if (qrCodeRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = 200;
      canvas.height = 200;
      const ctx = canvas.getContext("2d");

      // Draw placeholder QR code
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 200, 200);

      ctx.fillStyle = "#000000";
      ctx.fillRect(20, 20, 160, 160);

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(40, 40, 120, 120);

      ctx.fillStyle = "#000000";
      ctx.fillRect(60, 60, 20, 20);
      ctx.fillRect(100, 60, 20, 20);
      ctx.fillRect(140, 60, 20, 20);

      ctx.fillRect(60, 100, 20, 20);
      ctx.fillRect(140, 100, 20, 20);

      ctx.fillRect(60, 140, 20, 20);
      ctx.fillRect(100, 140, 20, 20);
      ctx.fillRect(140, 140, 20, 20);

      qrCodeRef.current.innerHTML = "";
      qrCodeRef.current.appendChild(canvas);
    }
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-blue-900 mb-4">Scan to Visit</h3>
      <div
        ref={qrCodeRef}
        className="mb-4 border-2 border-gray-200 rounded"
      ></div>
      <p className="text-gray-600 text-center">
        Scan this QR code to visit Diego Arango's personalized workshop landing
        page.
      </p>
      <p className="text-gray-500 text-sm mt-2">
        URL: yourdomain.com/diego-workshop
      </p>
    </div>
  );
};

export default QRCode;
