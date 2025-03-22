import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import FloorPlan from "./components/FloorPlan";
import VideoWalkthrough from "./components/VideoWalkthrough";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/floor-plan" element={<FloorPlan />} />
          <Route path="/video-walkthrough" element={<VideoWalkthrough />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
