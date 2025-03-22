import React from "react";
import "../App.css";
import { motion } from "framer-motion";

function Features() {
  return (
    <div>
      {/* Features Section */}
      <section className="bg-gray-400 pt-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-center text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h2>
          <div className="serviceImg px-10 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <motion.div
                className="relative p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                    <i className="fas fa-cogs text-2xl"></i>
                  </div>
                </div>
                <h3 className="text-center text-xl font-bold mb-4">
                  Construction
                </h3>
                <p>Full-service construction management</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="relative p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                    <i className="fas fa-tachometer-alt text-2xl"></i>
                  </div>
                </div>
                <h3 className="text-center text-xl font-bold mb-4">
                  Architecture
                </h3>
                <p>Innovative architectural designs</p>
              </motion.div>

              {/* Card 3 */}

              {/* Card 4 */}
              <motion.div
                className="p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                    <i className="fas fa-wrench text-2xl"></i>
                  </div>
                </div>
                <h3 className="text-center text-xl font-bold mb-4">
                  Interior Design
                </h3>
                <p>Custom interior solutions</p>
              </motion.div>
            </div>
            <a href ="#contact" className="relative top-48 px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300">
              GET YOUR QUOTE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
