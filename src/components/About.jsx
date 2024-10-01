import { motion } from "framer-motion";

const About = () => {
  return (
    <section>
      <section className="py-12 max-w-[1350px] mx-auto bg-[#FFFFFF] h-auto">
        <div className="container mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
  THE LANDINGFOLIO FACTS
</h2>

            {/* Subtext */}
            <div className="flex justify-center items-start mb-8 space-x-8">
              <ul className="text-left text-gray-600">
                <li className="mb-2">
                  <span className="text-orange-500 mr-2">•</span>Young And
                  Hardworking Professional
                </li>
                <li>
                  <span className="text-orange-500 mr-2">•</span>Innovation And
                  Research
                </li>
              </ul>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Total Projects */}
            <motion.div
              className="bg-[#F4F4F4] rounded-lg shadow-lg p-6"
              whileHover={{ scale: 1.1, x: 10 }} // Scale and slide right on hover
              transition={{ type: "spring", stiffness: 200 }} // Softer spring animation
            >
              <h3 className="text-4xl font-bold text-orange-500">20+</h3>
              <p className="text-gray-700 mt-2">Total Projects</p>
            </motion.div>

            {/* Total Clients */}
            <motion.div
              className="bg-[#F4F4F4] rounded-lg shadow-lg p-6"
              whileHover={{ scale: 1.1, x: 10 }} // Scale and slide right on hover
              transition={{ type: "spring", stiffness: 200 }} // Softer spring animation
            >
              <h3 className="text-4xl font-bold text-orange-500">10+</h3>
              <p className="text-gray-700 mt-2">Total Clients</p>
            </motion.div>

            {/* Customer Satisfaction */}
            <motion.div
              className="bg-[#F4F4F4] rounded-lg shadow-lg p-6"
              whileHover={{ scale: 1.05, y: -10 }} // Scale and slide up on hover
              transition={{ type: "spring", damping: 10 }} // Spring with more damping for a smooth effect
            >
              <h3 className="text-4xl font-bold text-orange-500">98.29%</h3>
              <p className="text-gray-700 mt-2">Customer Satisfaction Rate</p>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="bg-[#FFFFFF] py-16 ">
        <div className="container px-4 text-center max-w-[1350px] mx-auto">
          {/* About Section Title */}
          <h1 className="text-5xl font-bold text-orange-500 mb-6">ABOUT</h1>

          {/* Description */}
          <p className="text-gray-600 max-w-4xl mx-auto mb-12 text-xl font-bold">
            Secwebxperts is a team of IT professionals providing top-notch
            website and mobile app development, cybersecurity, and web design.
            Founded 1.2 years ago, our expertise includes VAPT, penetration
            testing, and data leak assessments, including dark web evaluations.
          </p>

          {/* Mission and Vision Cards */}
          <div className=" flex flex-col md:flex-row md:space-x-6 mx-auto justify-center items-center">
            {/* Our Mission Card */}
            <motion.div
              className="bg-white shadow-md rounded-lg p-8 w-full max-w-xs md:max-w-sm mb-6 md:mb-0 md:min-h-[500px] "
              whileHover={{ scale: 1.1, x: 10 }} // Scale and slide right on hover
              transition={{ type: "spring", stiffness: 200 }} // Softer spring animation
            >
              <img
                src="src/assets/mission.jpeg"
                alt="Mission"
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6">
                At Secwebxperts, our mission is to provide innovative, reliable,
                and comprehensive IT solutions.
              </p>
              <a
                href="#"
                className="text-orange-500 font-bold hover:underline flex items-center justify-center"
              >
                READ MORE
                <span className="ml-2">→</span>
              </a>
            </motion.div>
            {/* Our Vision Card */}
            {/* < className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xs md:max-w-sm md:min-h-[500px]"> */}
            <motion.div
              className="bg-white shadow-md rounded-lg p-8 w-full max-w-xs md:max-w-sm mb-6 md:mb-0 md:min-h-[500px] "
              whileHover={{ scale: 1.1, x: 10 }} // Scale and slide right on hover
              transition={{ type: "spring", stiffness: 200 }} // Softer spring animation
            >
              <img
                src="src/assets/vision.jpeg"
                alt="Vision"
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 mb-6">
                At Secwebxperts, our vision is to become the top provider of
                comprehensive IT solutions.
              </p>
              <a
                href="#"
                className="text-orange-500 font-bold hover:underline flex items-center justify-center"
              >
                READ MORE
                <span className="ml-2">→</span>
              </a>
            </motion.div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
