// src/App.jsx - Updated
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Section 1
import ExperienceSection from "./components/ExperienceSection"; // Section 2
import WorkshopSection from "./components/WorkshopSection"; // Section 3
import BenefitsSection from "./components/BenefitsSection"; // Section 4
import TestimonialsSection from "./components/TestimonialSection"; // Section 5
import ContactForm from "./components/ContactForm"; // Section 6
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero /> {/* Section 1 */}
      <main>
        <ExperienceSection /> {/* Section 2 */}
        <WorkshopSection /> {/* Section 3 */}
        <BenefitsSection /> {/* Section 4 */}
        <TestimonialsSection /> {/* Section 5 */}
        <ContactForm /> {/* Section 6 */}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
