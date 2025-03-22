import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div id="projects">
      {/* Features Section */}
      <section className="bg-gray-300 pt-12 pb-8 h-[500px]" >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-center text-5xl font-bold text-gray-800 mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Projects Showcase
          </motion.h2>

          <div className="flex justify-center gap-20">
            {/* Card 1 */}
            <Link to="/floor-plan">
            <motion.div
              className="relative p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              id="floor"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-cogs text-2xl"></i>
                </div>
              </div>
              <h3 className="text-center text-xl font-bold mb-4">
                Floor Plan & Elevation
              </h3>
              <p>Full-service construction management</p>
            </motion.div>
            </Link>

            {/* Card 2 */}
            <Link to="/video-walkthrough">
            <motion.div
              className="relative p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              id="videoDemo"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-tachometer-alt text-2xl"></i>
                </div>
              </div>
              <h3 className="text-center text-xl font-bold mb-4">
                Video Walkthrough
              </h3>
              <p>Innovative & Modern architectural designs</p>
            </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
