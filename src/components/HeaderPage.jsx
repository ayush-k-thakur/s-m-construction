import React from "react";
import "../App.css";
import { motion } from "framer-motion";

function HeaderPage() {
  return (
    <div>
      <section className="relative bg-cover bg-center h-screen" id="header">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <motion.div
          className="relative text-white text-center p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-6xl text-yellow-400 font-bold leading-tight mt-32 text-left pl-56">
            S & M Constructions
          </h1>
          <h1 className="text-4xl mt-10 font-bold leading-tight text-left pl-60">
            BUILDING YOUR VISION
          </h1>
          <h1 className="text-2xl font-semibold leading-tight text-left pl-60 mt-2">
            with Expert to Construction for Solutions
          </h1>
          <p className="text-lg mt-20">
            Transform construction to visions into reality. Precision.
            Excellence.
          </p>
          <a href ="#projects" className="relative top-[20px] px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300">
            GET STARTED NOW
          </a>
        </motion.div>
      </section>
    </div>
  );
}

export default HeaderPage;
