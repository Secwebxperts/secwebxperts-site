import { motion } from "framer-motion";

const About = () => {
  return (
    <section>
      <section className="py-12 max-w-[1150px] mx-auto h-auto">
        <div className="container mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Title */}

            <h2 className="font-poppins text-[36px] leading-[54px] font-[600] text-gray-800 mb-6">

              THE LANDINGFOLIO FACTS
            </h2>

            {/* Subtext */}
            <div className="flex justify-center items-start mb-8 space-x-8">
              <ul className="text-left text-gray-600">
                <li className="mb-2">
                  <span className="text-[#FF9D00] mr-2 text-[20px]">•</span>
                  Young And Hardworking Professional
                </li>
                <li>
                  <span className="text-[#FF9D00] mr-2 text-[20px]">•</span>
                  Innovation And Research
                </li>
              </ul>
            </div>
          </div>
          {/* Stats */}
          {/* Single Box for all Stats */}
          <div className="bg-[#F4F4F4] border border-b-2 border-[#D7D7D7] rounded-lg h-[140px]">
            <div className="grid grid-cols-1 md:grid-cols-3 text-left h-full">
              {/* Total Project */}
              <div className="md:border-r-2 border-[#D7D7D7] flex flex-col justify-center items-start px-4 h-full">
                <h3 className="text-[60px] text-[#FF9D00] font-bold font-poppins">20+</h3>
                <p className="text-[#1C1C1C] font-poppins  text[18px] leading-[28px]">Total Project</p>
              </div>

              {/* Total Client */}
              <div className="md:border-r-2 border-[#D7D7D7] flex flex-col justify-center items-start px-14 h-full">
                <h3 className="text-[60px] text-customYellow font-bold font-poppins">20+</h3>
                <p className="text-[#1C1C1C] font-poppins text[18px]">Total Client</p>
              </div>

              {/* Customer Satisfaction Rate */}
              <div className="flex flex-col justify-center items-start px-14 h-full">
                <h3 className="text-[60px] text-customYellow font-bold font-poppins">98.29%</h3>
                <p className="text-[#1C1C1C] font-poppins text[18px]">Customer Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" py-16 ">
        <div className="container px-4 text-center max-w-[1350px] mx-auto">
          {/* About Section Title */}

          <h1 className="text-[36px] font-bold text-[#FF9D00] mb-6">ABOUT</h1>

          {/* Description */}
          <p className="text-[#546E7A] max-w-4xl mx-auto mb-10 text-[16px]  font-poppins">
            Secwebxperts is a team of IT professionals providing top-notch
            website and mobile app development, cybersecurity, and web design.
            Founded 1.2 years ago, our expertise includes VAPT, penetration
            testing, and data leak assessments, including dark web evaluations.
          </p>

          {/* Mission and Vision Cards */}
          <div className=" flex flex-col md:flex-row md:space-x-6 mx-auto justify-center items-center">
            {/* Our Mission Card */}
            <motion.div
              className="bg-white shadow-md rounded-lg p-8 w-full max-w-xs md:max-w-sm mb-6 md:mb-0 md:min-h-[500px]"
              whileHover={{ scale: 1.1, x: 1 }} // Scale and slide right on hover
              transition={{
                type: "spring",
                stiffness: 30, // Softer spring
                damping: 10, // Adds smoothness
                duration: 0.5, // Slower animation duration
              }}
            >
              <img
                src="/mission.jpeg"
                alt="Mission"
                className="mx-auto mb-4"
              />
              <h2 className=" text-[#1C1C1C] mb-4 font-poppins font-semibold text-[20px]">
                Our Mission
              </h2>
              <p className="text-[#546E7A] mb-6">
                At Secwebxperts, our mission is to provide innovative, reliable,
                and comprehensive IT solutions.
              </p>
              {/* <a
                href="#"
                className="text-customYellow font-bold hover:underline flex items-center justify-center"
              >
                READ MORE
                <span className="ml-2">→</span>
              </a> */}
            </motion.div>
            {/* Our Vision Card */}
            {/* < className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xs md:max-w-sm md:min-h-[500px]"> */}
            <motion.div
              className="bg-white shadow-md rounded-lg p-8 w-full max-w-xs md:max-w-sm mb-6 md:mb-0 md:min-h-[500px]"
              whileHover={{ scale: 1.1, x: 1 }} // Scale and slide right on hover
              transition={{
                type: "spring",
                stiffness: 30, // Softer spring
                damping: 10, // Adds smoothness
                duration: 0.5, // Slower animation duration
              }}
            >
              <img
                src="/vision.jpeg"
                alt="Vision"
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl  text-[#1C1C1C] mb-4 font-poppins font-semibold text-[20px]">
                Our Vision
              </h2>
              <p className="text-[#546E7A] mb-6">
                At Secwebxperts, our vision is to become the top provider of
                comprehensive IT solutions.
              </p>
              {/* <a
                href="#"
                className="text-customYellow font-bold hover:underline flex items-center justify-center"
              >
                READ MORE
                <span className="ml-2">→</span>
              </a> */}
            </motion.div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
