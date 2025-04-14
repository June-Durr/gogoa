// src/App.jsx
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkshopSection from "./components/WorkShopSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <main>
        <AboutSection />
        <WorkshopSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
