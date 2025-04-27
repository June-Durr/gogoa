// src/components/ContactForm.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  // Validate email format
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Validate phone number format (optional field)
  const isValidPhone = (phone) => {
    if (!phone) return true; // Phone is optional
    const regex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return regex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!isValidEmail(formData.email))
      newErrors.email = "Please enter a valid email";

    // Optional field with format validation
    if (formData.phone && !isValidPhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      // If validation fails, focus on the first field with an error
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField && formRef.current) {
        const errorElement = formRef.current.querySelector(
          `[name="${firstErrorField}"]`
        );
        if (errorElement) errorElement.focus();
      }
      return;
    }

    setLoading(true);

    try {
      // EmailJS implementation with recipient set to ideas@gogoa.com.co
      // Make sure your EmailJS template has a field for the recipient email
      await emailjs.sendForm(
        "service_bvljtmj",
        "template_of0lldh",
        formRef.current,
        "X2c5eM1-C7UfNvc_T",
        {
          to_email: "ideas@gogoa.com.co", // Setting the recipient email
        }
      );

      // Google Analytics event tracking for form submission (if GA is set up)
      if (window.gtag) {
        window.gtag("event", "form_submission", {
          event_category: "Workshop",
          event_label: "Registration Form",
        });
      }

      setStatus({
        submitted: true,
        success: true,
        message:
          "Thank you! Your registration has been received. We'll be in touch soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        submitted: true,
        success: false,
        message:
          "Oops! Something went wrong. Please try again or contact us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Register for the Workshop
          </h2>
          <p className="text-lg text-gray-700">
            Spaces are limited to ensure personalized attention. Reserve your
            spot today.
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8">
          {status.submitted && status.success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Registration Complete!
              </h3>
              <p className="text-gray-700">{status.message}</p>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="Your Name"
                  required
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-xs mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Your Email"
                  required
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  placeholder="Your Phone (optional)"
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-red-500 text-xs mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                  placeholder="Your Organization (optional)"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  What do you hope to gain from this workshop?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                  placeholder="Your goals and expectations..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline w-full transition duration-300 ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Secure My Spot"
                  )}
                </button>
              </div>

              {status.submitted && !status.success && (
                <div className="mt-4 text-red-600 text-center">
                  {status.message}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
