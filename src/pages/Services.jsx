import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Services = () => {
  const [activeTab, setActiveTab] = useState("web-design"); // State to track the active tab

  return (
    <section className="min-h-screen">
      {/* Header Section */}
      <div
        className="relative w-full bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(0 0 0 / 70%) 20%, rgb(221 189 63 / 80%) 60%, rgb(206 0 0 / 20%) 100%), url('src/assets/serviceImages/serviceBG.jpg')",
        }}
      >
        {/* Gradient and Background */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-orange-500">Services</h1>
          <p className="mt-4 text-white max-w-2xl mx-auto">
            We provide IT consulting, managed services, cloud solutions,
            cybersecurity, infrastructure management, and data analytics to
            optimize your technology and ensure security.
          </p>
          <div className="flex justify-center mt-6">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                className="w-full px-5 py-3 text-sm border border-gray-300 rounded-full focus:outline-none shadow-md"
                placeholder="Search"
              />
              <button className="absolute inset-y-0 right-0 flex items-center pr-5">
                <FiSearch size={24} className="text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Tabs */}
      <div className="w-full bg-white text-center border-b">
        <div className="container mx-auto py-4 flex justify-around">
          <button
            onClick={() => setActiveTab("web-design")}
            className={`${
              activeTab === "web-design"
                ? "text-orange-500 font-semibold"
                : "text-gray-600"
            }`}
          >
            Web Design And Development
          </button>
          <button
            onClick={() => setActiveTab("mobile-app")}
            className={`${
              activeTab === "mobile-app"
                ? "text-orange-500 font-semibold"
                : "text-gray-600"
            }`}
          >
            Mobile App Development
          </button>
          <button
            onClick={() => setActiveTab("cyber-security")}
            className={`${
              activeTab === "cyber-security"
                ? "text-orange-500 font-semibold"
                : "text-gray-600"
            }`}
          >
            Cyber Security & Analytics
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-5 py-10">
        {activeTab === "web-design" && (
          <div id="web-design" className="w-full max-w-[1200px] mx-auto">
            <h2 className="text-center text-3xl font-bold mb-6">
              WEB DESIGN AND DEVELOPMENT
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
              Secwebxperts provides VAPT, penetration, and API testing, along
              with web and mobile development, UI/UX design, and software
              solutions, ensuring security and innovation for your business.
            </p>

            {/* Web Design Section Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Side: Text Content */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Innovative Web Design Experts
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Perfect UX/UI designing</li>
                  <li>Responsive and Reliable</li>
                  <li>Scalable and well-formatted</li>
                  <li>Easily and effectively navigated</li>
                  <li>Digital Marketing and Branding</li>
                  <li>Relevant content that sticks visitors</li>
                  <li>Affordable and Pocket-friendly prices</li>
                  <li>Fast load times and great performance</li>
                  <li>Optimized and Secure</li>
                </ul>
              </div>

              {/* Right Side: Images */}
              <div>
                <div className="flex flex-wrap">
                  <div className="w-1/5 p-4">
                    {/* This is equivalent to col-4 in Bootstrap */}
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Service Image"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="w-1/3 p-4">
                    {/* This is equivalent to col-4 in Bootstrap */}
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Service Image"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="w-1/3 p-4">
                    {/* This is equivalent to col-4 in Bootstrap */}
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Service Image"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-1/5 p-4">
                    {/* This is equivalent to col-4 in Bootstrap */}
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Service Image"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="w-1/3 p-4">
                    {/* This is equivalent to col-4 in Bootstrap */}
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Service Image"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="w-1/3 p-4">
                    {/* This is equivalent to col-4 in Bootstrap */}
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Service Image"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-1/5 p-4">
                    {/* This is equivalent to col-4 in Bootstrap */}
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Service Image"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="w-1/3 p-4">
                    {/* This is equivalent to col-4 in Bootstrap */}
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Service Image"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="w-1/3 p-4">
                    {/* This is equivalent to col-4 in Bootstrap */}
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Service Image"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "mobile-app" && (
          <div id="mobile-app" className="w-full max-w-[1200px] mx-auto">
            <h2 className="text-center text-3xl font-bold mb-6">
              MOBILE APP DEVELOPMENT
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
              We build secure, scalable, and fast mobile applications tailored
              to your business needs. Our expertise includes cross-platform
              development, performance optimization, and user-friendly
              interfaces.
            </p>

            {/* Mobile App Development Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Side: Text Content */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Comprehensive Mobile App Services
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>iOS and Android development</li>
                  <li>Cross-platform solutions</li>
                  <li>Secure app infrastructure</li>
                  <li>User-friendly UI/UX</li>
                  <li>Performance optimization</li>
                  <li>API integration and cloud solutions</li>
                </ul>
              </div>

              {/* Right Side: Images */}
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Service Image"
                  className="rounded-lg shadow-md"
                />
                <img
                  src="https://via.placeholder.com/150"
                  alt="Service Image"
                  className="rounded-lg shadow-md"
                />
                <img
                  src="https://via.placeholder.com/150"
                  alt="Service Image"
                  className="rounded-lg shadow-md"
                />
                <img
                  src="https://via.placeholder.com/150"
                  alt="Service Image"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "cyber-security" && (
          <div id="cyber-security" className="w-full max-w-[1200px] mx-auto">
            <h2 className="text-center text-3xl font-bold mb-6">
              CYBER SECURITY & ANALYTICS
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
              Our cybersecurity services include penetration testing, risk
              management, and data security. We ensure your business is
              protected from cyber threats and vulnerabilities.
            </p>

            {/* Cyber Security & Analytics Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Side: Text Content */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Complete Cyber Security Solutions
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Penetration testing</li>
                  <li>Risk management</li>
                  <li>Data encryption and security</li>
                  <li>Compliance and regulation</li>
                  <li>Security analytics</li>
                  <li>Network security</li>
                </ul>
              </div>

              {/* Right Side: Images */}
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Service Image"
                  className="rounded-lg shadow-md"
                />
                <img
                  src="https://via.placeholder.com/150"
                  alt="Service Image"
                  className="rounded-lg shadow-md"
                />
                <img
                  src="https://via.placeholder.com/150"
                  alt="Service Image"
                  className="rounded-lg shadow-md"
                />
                <img
                  src="https://via.placeholder.com/150"
                  alt="Service Image"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
