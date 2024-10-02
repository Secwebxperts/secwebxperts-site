import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceSection = () => {
  return (
    <section className="py-12 bg-[#F9F9F9] mx-auto">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="text-center mb-12">

          <h2 className="text-[#FF9D00] text-[36px] font-bold font-poppins">OUR SERVICES</h2>
          <p className="text-[#546E7A] text-[16px] tracking-wider font-extrabold font-poppins mt-4">

            Innovative Solutions for Development and Security
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development Card */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            whileHover={{ scale: 1.1, x: 10 }} // Scale and slide right on hover
            transition={{ type: "spring", stiffness: 200 }} // Softer spring animation
          >
            <img
              src="/serviceImages/1.png"
              alt="Web Development"
              className="mx-auto mb-4 w-[188px] h-[150px] object-cover"
            />
            <h3 className="text-xl font-medium mb-2">Web Development</h3>
            <p className="text-[#546E7A] mb-4 font-normal text-sm">
              Build responsive and dynamic websites with modern technologies.
            </p>
            <Link
              to="/services"
              className="text-blue-600 hover:underline"
            >
              Learn More →
            </Link>
          </motion.div>
          {/* Mobile App Development Card */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            whileHover={{ scale: 1.1, x: 10 }} // Scale and slide right on hover
            transition={{ type: "spring", stiffness: 200 }} // Softer spring animation
          >
            <img
              src="/serviceImages/3.png"
              alt="Mobile App Development"
              className="mx-auto mb-4 w-[145px] h-[150px] object-cover "
            />
            <h3 className="text-xl font-medium mb-2">Mobile App Development</h3>
            <p className="text-[#546E7A] mb-4 font-normal text-sm">
              Develop cutting-edge mobile apps for iOS and Android platforms.
            </p>
            <Link
              to="/services"
              className="text-blue-600 hover:underline"
            >
              Learn More →
            </Link>
          </motion.div>
          {/* Cyber Security Card */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            whileHover={{ scale: 1.1, x: 10 }} // Scale and slide right on hover
            transition={{ type: "spring", stiffness: 200 }} // Softer spring animation
          >
            <img
              src="/serviceImages/2.png"
              alt="Cyber Security"
              className="mx-auto mb-4 w-[166px] h-[150px] object-cover"
            />
            <h3 className="text-xl font-medium mb-2">Cyber Security</h3>
            <p className="text-[#546E7A] mb-4 font-normal text-sm">
              Protect your digital assets with top-tier security solutions.
            </p>
            <Link
              to="/services"
              className="text-blue-600 hover:underline"
            >
              Learn More →
            </Link>
          </motion.div>{" "}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="text-blue-600 hover:underline flex items-center justify-center"
          >
            View all Services <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
