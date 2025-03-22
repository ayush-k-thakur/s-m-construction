import React from "react";

function Testimonials() {
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            className="flex justify-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Client Testimonials */}
            <div className="bg-white p-6 rounded-xl shadow-lg w-72">
              <p className="text-lg mb-4">
                "Great service! The team delivered our project on time and
                within budget. Highly recommend!"
              </p>
              <div className="flex items-center justify-center">
                <img
                  src=""
                  alt="Client"
                  className="rounded-full w-12 h-12 mr-2"
                />
                <span className="font-bold">John Doe</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg w-72">
              <p className="text-lg mb-4">
                "Professional and highly skilled. They turned our vision into a
                reality. Fantastic!"
              </p>
              <div className="flex items-center justify-center">
                <img
                  src=""
                  alt="Client"
                  className="rounded-full w-12 h-12 mr-2"
                />
                <span className="font-bold">Jane Smith</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
