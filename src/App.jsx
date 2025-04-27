// src/App.jsx - Updated
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Section 1
import ExperienceSection from "./components/ExperienceSection"; // Section 2
import WorkShopSection from "./components/WorkShopSection"; // Section 3
import BenefitsSection from "./components/BenefitsSection"; // Section 4
import TestimonialsSection from "./components/TestimonialSection"; // Section 5
import SocialShare from "./components/SocialShare"; // Social sharing
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
        <WorkShopSection /> {/* Section 3 */}
        <BenefitsSection /> {/* Section 4 */}
        <TestimonialsSection /> {/* Section 5 */}
        <div className="bg-blue-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-sm mx-auto">
              <SocialShare /> {/* Social Sharing Component */}
            </div>
          </div>
        </div>
        <ContactForm /> {/* Section 6 */}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
