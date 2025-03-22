import React from "react";
import { motion } from "framer-motion";
import vid1 from "../assets/videos/1.mp4";
import vid2 from "../assets/videos/2.mp4";
import vid3 from "../assets/videos/3.mp4";
import vid4 from "../assets/videos/4.mp4";
import vid5 from "../assets/videos/5.mp4";

function VideoWalkthrough() {
  return (
    <section className="bg-gray-400 pt-12 pb-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-center text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Video Walkthrough
        </motion.h2>
        <div className="grid grid-cols-3 gap-10">
          <video controls width="600">
            <source
              src={vid1}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <video controls width="600">
            <source
              src={vid4}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video><video controls width="600">
            <source
              src={vid3}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video><video controls width="600">
            <source
              src={vid2}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video><video controls width="600">
            <source
              src={vid5}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default VideoWalkthrough;
