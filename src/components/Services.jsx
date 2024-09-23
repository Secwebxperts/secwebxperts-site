import { Link } from "react-router-dom";

const ServiceSection = () => {
  return (
    <section className="py-12 bg-[#F6F4F4] mx-auto">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="text-center mb-12">
          <h2 className="text-[#FF9D00] text-4xl font-bold">OUR SERVICES</h2>
          <p className="uppercase text-xl tracking-wider font-extrabold mt-4">
            Innovative Solutions for Development and Security
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="/src/assets/serviceImages/1.png"
              alt="Web Development"
              className="mx-auto mb-4 w-[188px] h-[150px] object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600 mb-4">
              Build responsive and dynamic websites with modern technologies.
            </p>
            <Link
              to="/services/web-development"
              className="text-blue-600 hover:underline"
            >
              Learn More →
            </Link>
          </div>

          {/* Mobile App Development Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="/src/assets/serviceImages/3.png"
              alt="Mobile App Development"
              className="mx-auto mb-4 w-[145px] h-[150px] object-cover "
            />
            <h3 className="text-2xl font-semibold mb-2">
              Mobile App Development
            </h3>
            <p className="text-gray-600 mb-4">
              Develop cutting-edge mobile apps for iOS and Android platforms.
            </p>
            <Link
              to="/services/mobile-app-development"
              className="text-blue-600 hover:underline"
            >
              Learn More →
            </Link>
          </div>

          {/* Cyber Security Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="/src/assets/serviceImages/2.png"
              alt="Cyber Security"
              className="mx-auto mb-4 w-[166px] h-[150px] object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">Cyber Security</h3>
            <p className="text-gray-600 mb-4">
              Protect your digital assets with top-tier security solutions.
            </p>
            <Link
              to="/services/cyber-security"
              className="text-blue-600 hover:underline"
            >
              Learn More →
            </Link>
          </div>
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
