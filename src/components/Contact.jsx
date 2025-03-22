import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-gray-400 pt-12 pb-8" id="contact">
      <motion.h2
        className="text-center text-5xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h2>
      <div className="max-w-lg mx-auto p-6 bg-gray-800 shadow-lg rounded-lg">
        <form
          className="flex flex-col gap-5 items-center"
          action="https://formspree.io/f/xaneowol"
          method="POST"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="input"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="input"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            required
            className="input"
          />
          <textarea
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            placeholder="Purpose"
            required
            className="input"
          />
          <button className="mx-auto px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
