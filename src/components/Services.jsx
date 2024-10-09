import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceSection = () => {
  return (
    <section className="py-12 bg-[#F9F9F9] mx-auto">
      <div className="max-w-[1300px] mx-auto text-center">
        <div className="text-center mb-12">
          <h2 className="text-[#FF9D00] text-[36px] font-semibold font-poppins">
            OUR SERVICES
          </h2>
          <p className="text-[#546E7A] text-[16px] tracking-wider font-medium font-poppins mt-4">
            Innovative Solutions for Development and Security
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:min-w-[1100px] justify-items-center mx-auto">
          {/* Web Development Card */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 w-full sm:w-auto md:w-auto"
            whileHover={{ scale: 1.1, x: 1 }} // Scale and slide right on hover
            transition={{
              type: "spring",
              stiffness: 30, // Softer spring
              damping: 10, // Adds smoothness
              duration: 0.5, // Slower animation duration
            }}
          >
            <img
              src="/serviceImages/2.png"
              alt="Web Development"
              className="mx-auto mb-4 w-full max-w-[188px] h-[150px] object-cover"
            />
            <h3 className="text-[17px] font-semibold mb-1 text-[#1C1C1C] font-poppins">
              Web Development
            </h3>
            <p className="text-[#546E7A] mb-4 font-[400] text-[14px]">
              Build responsive and dynamic websites with modern technologies.
            </p>
            <Link to="/services?tab=web-design" className="text-blue-600 ">
              Learn More →
            </Link>
          </motion.div>

          {/* Mobile App Development Card */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 w-full sm:w-auto md:w-full lg:w-full"
            whileHover={{ scale: 1.1, x: 1 }} // Scale and slide right on hover
            transition={{
              type: "spring",
              stiffness: 30, // Softer spring
              damping: 10, // Adds smoothness
              duration: 0.5, // Slower animation duration
            }}
          >
            <img
              src="/serviceImages/3.png"
              alt="Mobile App Development"
              className="mx-auto mb-4 w-full max-w-[145px] h-[150px] object-cover"
            />
            <h3 className="text-[17px] font-semibold mb-1 text-[#1C1C1C] font-poppins">
              Mobile App Development
            </h3>
            <p className="text-[#546E7A] mb-2 font-[400] text-[14px]">
              Develop cutting-edge mobile apps for iOS and Android platforms.
            </p>
            <Link to="/services?tab=mobile-app" className="text-blue-600 ">
              Learn More →
            </Link>
          </motion.div>

          {/* Cyber Security Card */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 w-full sm:w-auto"
            whileHover={{ scale: 1.1, x: 1 }} // Scale and slide right on hover
            transition={{
              type: "spring",
              stiffness: 30, // Softer spring
              damping: 10, // Adds smoothness
              duration: 0.5, // Slower animation duration
            }}
          >
            <img
              src="/serviceImages/1.png"
              alt="Cyber Security"
              className="mx-auto mb-4 w-full max-w-[166px] h-[150px] object-cover"
            />
            <h3 className="text-[17px] font-semibold mb-1 text-[#1C1C1C] font-poppins">
              Cyber Security
            </h3>
            <p className="text-[#546E7A] mb-4 font-[400] text-[14px]">
              Protect your digital assets with top-tier security solutions.
            </p>
            <Link to="/services?tab=cyber-security" className="text-blue-600 ">
              Learn More →
            </Link>
          </motion.div>

          {/* SaaS Card */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 w-full sm:w-auto"
            whileHover={{ scale: 1.1, x: 1 }} // Scale and slide right on hover
            transition={{
              type: "spring",
              stiffness: 30, // Softer spring
              damping: 10, // Adds smoothness
              duration: 0.5, // Slower animation duration
            }}
          >
            <img
              src="/serviceImages/SaaS.png"
              alt="Cyber Security"
              className="mx-auto mb-4 w-full max-w-[166px] h-[150px] object-cover"
            />
            <h3 className="text-[17px] font-semibold font-poppins mb-1 text-[#1C1C1C]">
              SaaS
            </h3>
            <p className="text-[#546E7A] mb-4 font-[400] text-[14px]">
              SaaS is software delivered online, accessed via a browser, &
              managed by the provider.
            </p>
            <Link to="/services?tab=saas" className="text-blue-600">
              Learn More →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
