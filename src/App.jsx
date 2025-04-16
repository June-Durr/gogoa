// src/App.jsx
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ApproachBanner from "./components/ApproachBanner";
import InstagramFeed from "./components/InstagramFeed";
import TestimonialsSection from "./components/TestimonialSection";
import WorkshopSection from "./components/WorkShopSection";
import CallToAction from "./components/CallToAction";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <main>
        <AboutSection />
        <ApproachBanner />
        <ServicesSection />
        <WorkshopSection />
        <TestimonialsSection />
        <InstagramFeed />
        <CallToAction />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
