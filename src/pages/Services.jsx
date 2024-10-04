import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Services = () => {
  const [activeTab, setActiveTab] = useState("web-design"); // State to track the active tab

  return (
    <section className="min-h-screen w-[100%]">
      {/* Header Section */}
      <div
        className="relative w-full bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(0 0 0 / 70%) 20%, rgb(221 189 63 / 80%) 60%, rgb(206 0 0 / 20%) 100%), url('/serviceImages/serviceBG.jpg')",
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
            onClick={() => setActiveTab("sass")}
            className={`${
              activeTab === "sass"
                ? "text-orange-500 font-semibold"
                : "text-gray-600"
            }`}
          >
            SAAS
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
      <div className="container mx-auto px-5 py-10 bg-[#FFFFFF] w-full">
        {activeTab === "web-design" && (
          <div id="web-design" className="w-full max-w-[1200px] mx-auto">
            <div className="pb-20">
              <h2 className="text-center text-[36px] font-[600] mb-6 text-[#FF9D00] font-poppins">
                WEB DESIGN AND DEVELOPMENT
              </h2>
              <p className="text-center text-[#546E7A] font-[500] text-[16px] max-w-3xl mx-auto mb-5">
                Secwebxperts provides VAPT, penetration, and API testing, along
                with web and mobile development, UI/UX design, and software
                solutions, ensuring security and innovation for your business.
              </p>
            </div>

            {/* Web Design Section Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Side: Text Content */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Innovative Web Design Experts
                </h3>
                <ul className="list-none space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                    <span className="text-gray-600">
                      Perfect UX/UI designing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                    <span className="text-gray-600">
                      Responsive and Reliable
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                    <span className="text-gray-600">
                      Scalable and well-formatted
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                    <span className="text-gray-600">
                      Easily and effectively navigated
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                    <span className="text-gray-600">
                      Digital Marketing and Branding
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                    <span className="text-gray-600">
                      Relevant content that sticks visitors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                    <span className="text-gray-600">
                      Affordable and Pocket-friendly prices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                    <span className="text-gray-600">
                      Fast load times and great performance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                    <span className="text-gray-600">Optimized and Secure</span>
                  </li>
                </ul>
              </div>

              {/* Right Side: Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/Group1000001287.png"
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[600px] h-auto"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-24">
              {/* Right Side: Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/Group1000001291.png"
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[600px] h-auto"
                />
              </div>

              <div className="flex justify-center lg:justify-end items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Advanced Website Design & Development
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>E-commerce Website
                      Development.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>CMS Websites.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Responsive Website
                      Designing.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Static Website
                      Designing.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Dynamic Website
                      Designing
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Flat Web Designing
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Single Page Web
                      Designing.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-[24px] pb-7 font-[500]">
                Importance of a Website for Business Growth
              </h2>
              <p className="text-[16px] font-[500] text-[#546E7A]">
                A strong web presence is crucial for several important reasons,
                some of which make it absolutely essential for your business. To
                get the best results, you need the Best Web Design Company in
                Kolkata, India—and you can fully trust Secwebxperts Technologies
                Pvt. Ltd. to deliver.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-24">
              {/* Left Side: Centered Text Content */}
              <div className="flex items-center">
                <ul className="list-none space-y-2">
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">Popularity</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">Reach</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">
                      Increase Sales and Conversion
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">
                      Convenience for customers
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">
                      Availability all the time
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">
                      Increased Customer-base
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">Targeted Audience</span>
                  </li>
                </ul>
              </div>

              {/* Right Side: Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/serviceImages/webdev/img1.jpg"
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[600px] h-auto"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "mobile-app" && (
          <div id="mobile-app" className="w-full max-w-[1200px] mx-auto">
            <h2 className="text-center text-[36px] font-[600] mb-6 text-[#FF9D00] font-poppins">
              MOBILE APP DEVELOPMENT
            </h2>
            <p className="text-center text-[#546E7A] font-[500] text-[16px] max-w-2xl mx-auto mb-5">
              Secwebxperts offers tailored Mobile and iOS apps to meet your
              business needs. Our expert developers deliver sleek, responsive
              apps using Kotlin, Java, and more.
            </p>

            {/* Mobile App Development Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-20 max-w-[1100px] mx-auto">
              {/* Left Side: Text Content */}
              <div className="flex items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Our top-notch Mobile App services include:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Mobile Apps
                      Development
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Mobile UX Design
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Mobile Support
                      Maintenance
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Mobile Consulting
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side: Images */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/serviceImages/android/img1.jpg"
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[530px] max-h-[330px] h-auto"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-24 max-w-[1100px] mx-auto">
              {/* Left Side: Text Content */}

              {/* Right Side: Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/serviceImages/android/img2.jpg"
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[600px] h-auto"
                />
              </div>

              <div className="flex justify-center lg:justify-end items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Our top-notch IOS App services include:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>IOS Development
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>IOS UX Design
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>IOS Support
                      Maintenance
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>IOS Consulting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-[20px] font-[500] text-[#1C1C1C] pb-4">
                Why our service is one of the Best Mobile App Development
                Services in West Bengal ?
              </h2>
              <p className="text-[#546E7A] text-[16px] font-[500]">
                Our mobile app development service in West Bengal stands out due
                to customized solutions, expert developers skilled in Kotlin,
                Java, and more, and a focus on delivering fast, responsive apps
                tailored to business needs across industries.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-24 max-w-[1100px] mx-auto">
              {/* Left Side: Text Content */}
              <div className="flex items-center">
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                    <span className="text-gray-600"></span>Get apps from
                    experienced Mobile App developers with 100% on-time delivery
                    rates.
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                    <span className="text-gray-600"></span>Consistent quality
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                    <span className="text-gray-600"></span>100% clean source
                    code easier to maintain in future
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                    <span className="text-gray-600"></span> Flexible price
                    models
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                    <span className="text-gray-600"></span> Dedicated testing
                    team for each app developed
                  </li>
                </ul>
              </div>

              {/* Right Side: Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="serviceImages/android/img3.jpg"
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[600px] h-auto"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "cyber-security" && (
          <div id="cyber-security" className="w-full max-w-[1200px] mx-auto">
            <h2 className="uppercase text-center text-[36px] font-[600] mb-6 text-[#FF9D00] font-poppins">
              Cyber Security & Analyst
            </h2>
            <p className="text-center text-[#546E7A] font-[500] text-[16px] max-w-3xl mx-auto mb-5">
              SecWebXperts offers cybersecurity services like VAPT, penetration
              testing, and data leak testing. Our expert team uses advanced
              tools to protect your digital assets and ensure robust security
              for your business.
            </p>
            {/* Mobile App Development Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Side: Text Content */}
              <div className="items-center flex">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Kay Responsibilities
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Static Application
                      Security Testing (SAST)
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Dynamic Application
                      Security Testing (DAST)
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Application
                      Programming Interface(API)
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Android Penetration
                      Testing (APT)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side: Images */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/serviceImages/cyber/img1.jpg"
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[530px] max-h-[330px] h-auto"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "sass" && (
          <div id="sass" className="w-full max-w-[1200px] mx-auto">
            <h2 className="uppercase text-center text-[36px] font-[600] mb-6 text-[#FF9D00] font-poppins">
              Software as a Service (SaaS){" "}
            </h2>
            <p className="text-center text-[#546E7A] font-[500] text-[16px] max-w-2xl mx-auto mb-5">
              SaaS is a cloud-based software delivery model where applications
              are hosted by a provider and accessed by users over the internet
            </p>
            {/* Mobile App Development Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Side: Text Content */}
              <div className="items-center flex">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Key Points of SaaS{" "}
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Cloud-Based
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>No Installation
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Subscription Model
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Automatic Updates
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Scalable
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Accessible Anywhere
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Cost-Effective
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Multi-Tenant
                      Architecture
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Easy Collaboration
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2  mt-2"></span>
                      <span className="text-gray-600"></span>Secure
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side: Images */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/serviceImages/saas/img1.jpg"
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[530px] max-h-[330px] h-auto"
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
