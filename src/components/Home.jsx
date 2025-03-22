import React from "react";
import "../App.css"; // Import CSS
import HeaderPage from "./HeaderPage";
import Features from "./Features";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <div className="App">
      {/* Hero Section */}
      <HeaderPage />

      {/* Features Section */}
      <Features />

      {/* Features Section */}
      <Projects />

      {/* Features Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 S & M. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default Home;
