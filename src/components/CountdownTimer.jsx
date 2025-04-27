// src/components/CountdownTimer.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  // Set the workshop date - May 20, 2025
  const workshopDate = new Date("2025-05-20T09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = workshopDate - now;

      if (difference <= 0) {
        // Workshop day has arrived
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-blue-900 text-center mb-4">
        Workshop Starts In:
      </h3>

      <div className="flex justify-between">
        {timeUnits.map((unit, index) => (
          <div key={index} className="text-center">
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                repeat: unit.label === "Seconds" ? Infinity : 0,
                duration: 1,
              }}
            >
              <span className="text-2xl md:text-3xl font-bold">
                {String(unit.value).padStart(2, "0")}
              </span>
            </motion.div>
            <span className="text-sm text-gray-600">{unit.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 mb-3">
          Limited to just 25 participants
        </p>
        <a
          href="#contact-form"
          className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 track-click"
          data-category="CTA"
          data-action="Click"
          data-label="Countdown Register"
        >
          Reserve Your Spot Now
        </a>
      </div>
    </div>
  );
};

export default CountdownTimer;
