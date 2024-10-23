import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Services = () => {
  // const [activeTab, setActiveTab] = useState("web-design"); // State to track the active tab
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab"); // Default to web-design if no query param

  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab); // Update activeTab when query changes
  }, [initialTab]);

  return (
    <section className="min-h-screen w-[100%]">
      {/* Header Section */}

      <div className="relative w-full bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-center bg-[url('/serviceImages/serviceBG.png')]">

        {/* Gradient and Background */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-[#FF9D00]">Services</h1>
          <p className="mt-6 text-white max-w-2xl mx-auto text-[16px]">
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
        <div className="container mx-auto py-4 flex justify-around relative">
          <button
            onClick={() => setActiveTab("web-design")}
            className={`relative font-poppins pb-2 ${
              activeTab === "web-design"
                ? "text-[#FF9D00] font-semibold after:border-b-2 after:border-[#FF9D00] after:absolute after:left-0 after:right-0 after:bottom-[-18px]"
                : "text-[#ACACAC]"
            }`}
          >
            Web App
          </button>
          <button
            onClick={() => setActiveTab("mobile-app")}
            className={`relative font-poppins pb-2 ${
              activeTab === "mobile-app"
                ? "text-[#FF9D00] font-semibold after:border-b-2 after:border-[#FF9D00] after:absolute after:left-0 after:right-0 after:bottom-[-18px]"
                : "text-[#ACACAC]"
            }`}
          >
            Mobile App
          </button>
          <button
            onClick={() => setActiveTab("cyber-security")}
            className={`relative font-poppins pb-2 ${
              activeTab === "cyber-security"
                ? "text-[#FF9D00] font-semibold after:border-b-2 after:border-[#FF9D00] after:absolute after:left-0 after:right-0 after:bottom-[-18px]"
                : "text-[#ACACAC]"
            }`}
          >
            Cyber Security
          </button>
          <button
            onClick={() => setActiveTab("saas")}
            className={`relative font-poppins pb-2 ${
              activeTab === "saas"
                ? "text-[#FF9D00] font-semibold after:border-b-2 after:border-[#FF9D00] after:absolute after:left-0 after:right-0 after:bottom-[-18px]"
                : "text-[#ACACAC]"
            }`}
          >
            SaaS
          </button>
          <button
            onClick={() => setActiveTab("digital-marketing")}
            className={`relative font-poppins pb-2 ${
              activeTab === "digital-marketing"
                ? "text-[#FF9D00] font-semibold after:border-b-2 after:border-[#FF9D00] after:absolute after:left-0 after:right-0 after:bottom-[-18px]"
                : "text-[#ACACAC]"
            }`}
          >
            Digital-Marketing
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-5 py-10 bg-[#FFFFFF] w-full">
        {activeTab === "web-design" && (
          <div id="web-design" className="w-full max-w-[1200px] mx-auto">
            <div className="pb-20">
              <h2 className="text-center text-[30px] font-[600] mb-6 text-[#FF9D00] font-poppins">
                WEB DESIGN AND DEVELOPMENT
              </h2>
              <p className="text-center text-[#546E7A] font-[500] text-[16px] max-w-4xl mx-auto mb-5">
              In today's digital world, a strong online presence is essential. 
              Our web development services focus on creating user-friendly, responsive,
               and visually appealing websites tailored to meet your business goals. 
               Whether you're starting from scratch or looking to upgrade your existing site,
                we use the latest technologies to ensure fast, secure, and scalable solutions.
                 Let us help you build a website that not only looks great but also delivers an exceptional 
                 user experience.
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
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                    <span className="text-[#546E7A]">
                      Perfect UX/UI designing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                    <span className="text-[#546E7A]">
                      Responsive and Reliable
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                    <span className="text-[#546E7A]">
                      Scalable and well-formatted
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                    <span className="text-[#546E7A]">
                      Easily and effectively navigated
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                    <span className="text-[#546E7A]">
                      Digital Marketing and Branding
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                    <span className="text-[#546E7A]">
                      Relevant content that sticks visitors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                    <span className="text-[#546E7A]">
                      Affordable and Pocket-friendly prices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                    <span className="text-[#546E7A]">
                      Fast load times and great performance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                    <span className="text-[#546E7A]">Optimized and Secure</span>
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
                  <ul className="list-disc list-inside text-[#ACACAC] space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        E-commerce Website Development.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">CMS Websites.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        Responsive Website Designing.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        Static Website Designing.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        Dynamic Website Designing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">Flat Web Designing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        {" "}
                        Single Page Web Designing.
                      </span>
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
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2"></span>
                    <span className="text-[#546E7A]">Popularity</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2"></span>
                    <span className="text-[#546E7A]">Reach</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2"></span>
                    <span className="text-[#546E7A]">
                      Increase Sales and Conversion
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2"></span>
                    <span className="text-[#546E7A]">
                      Convenience for customers
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2"></span>
                    <span className="text-[#546E7A]">
                      Availability all the time
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2"></span>
                    <span className="text-[#546E7A]">
                      Increased Customer-base
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2"></span>
                    <span className="text-[#546E7A]">Targeted Audience</span>
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
            <h2 className="text-center text-[30px] font-[600] mb-6 text-[#FF9D00] font-poppins">
              MOBILE APP DEVELOPMENT
            </h2>
            <p className="text-center text-[#546E7A] font-[500] text-[16px] max-w-4xl mx-auto mb-5">
            Unlock the power of mobile with our custom app development services. We design and develop intuitive,
             high-performance mobile applications that deliver seamless user experiences across all devices.
              From concept to launch, our team works with you to create apps that are not only visually appealing but also secure,
             scalable, and tailored to meet your business objectives.
             Whether you need a native app or a cross-platform solution, we are here to turn your ideas into reality.
            </p>

            {/* Mobile App Development Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-20 max-w-[1100px] mx-auto">
              {/* Left Side: Text Content */}
              <div className="flex items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Our top-notch Mobile App services include:
                  </h3>
                  <ul className="list-disc list-inside text-[#ACACAC] space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        Mobile Apps Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">Mobile UX Design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        Mobile Support Maintenance
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">Mobile Consulting</span>
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
                  <ul className="list-disc list-inside text-[#ACACAC] space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">IOS Development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">IOS UX Design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        IOS Support Maintenance
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">IOS Consulting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-[20px] font-[500] text-[#1C1C1C] pb-4">
                Why our service is one of the Best Mobile App Development
                Services ?
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
                <ul className="list-disc list-inside text-[#ACACAC] space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                    <span className="text-[#546E7A]">
                      Get apps from experienced Mobile App developers with 100%
                      on-time delivery rates.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                    <span className="text-[#546E7A]">Consistent quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                    <span className="text-[#546E7A]">
                      100% clean source code easier to maintain in future
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                    <span className="text-[#546E7A]">
                      {" "}
                      Flexible price models
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                    <span className="text-[#546E7A]">
                      Dedicated testing team for each app developed
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right Side: Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/serviceImages/android/img3.jpg"
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[600px] h-auto"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "cyber-security" && (
          <div id="cyber-security" className="w-full max-w-[1200px] mx-auto">
            <h2 className="uppercase text-center text-[30px] font-[600] mb-6 text-[#FF9D00] font-poppins">
              Cyber Security & Analyst
            </h2>
            <p className="text-center text-[#546E7A] font-[500] text-[16px] max-w-4xl mx-auto mb-5">
            In an increasingly connected world, protecting your digital assets is more important than ever.
             Our cybersecurity services provide comprehensive solutions to safeguard your business from cyber threats.
              From vulnerability assessments and threat detection to data encryption and incident response,
               we ensure your systems and data remain secure.
             With our expert team, you can stay ahead of potential risks and ensure your business operates safely and smoothly in the digital space.
            </p>
            {/* Mobile App Development Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Side: Text Content */}
              <div className="items-center flex">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Key Responsibilities
                  </h3>
                  <ul className="list-disc list-inside text-[#ACACAC] space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        Static Application Security Testing (SAST)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        Dynamic Application Security Testing (DAST)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        Application Programming Interface(API)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        Android Penetration Testing (APT)
                      </span>
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

        {activeTab === "saas" && (
          <div id="saas" className="w-full max-w-[1200px] mx-auto">
            <h2 className="uppercase text-center text-[30px] font-[600] mb-6 text-[#FF9D00] font-poppins">
              Software as a Service (SaaS){" "}
            </h2>
            <p className="text-center text-[#546E7A] font-[500] text-[16px] max-w-4xl mx-auto mb-5">
            Streamline your business operations with our Software as a Service (SaaS) solutions. 
            Our cloud-based applications provide you with the flexibility and scalability needed to adapt to changing market demands. 
            Designed for ease of use, our SaaS offerings empower teams to collaborate efficiently, 
            reduce costs, and improve productivity without the burden of complex installations or maintenance.
             Whether you're looking for customer relationship management, project management, or specialized industry solutions,
              our services are tailored to help your business thrive in the digital landscape.
            </p>
            {/* Mobile App Development Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Side: Text Content */}
              <div className="items-center flex">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Key Points of SaaS{" "}
                  </h3>
                  <ul className="list-disc list-inside text-[#ACACAC] space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">Cloud-Based</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">No Installation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">Subscription Model</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">Automatic Updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">Scalable</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        Accessible Anywhere
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">Cost-Effective</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        Multi-Tenant Architecture
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">Easy Collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">Secure</span>
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
        {activeTab === "digital-marketing" && (
          <div id="digital-marketing" className="w-full max-w-[1200px] mx-auto">
            <h2 className="uppercase text-center text-[30px] font-[600] mb-6 text-[#FF9D00] font-poppins">
              DIGITAL MARKETING
            </h2>
            <p className="text-center text-[#546E7A] font-[500] text-[16px] max-w-4xl mx-auto mb-5">
            In the fast-paced digital landscape, standing out is crucial. Our digital marketing services are designed to elevate your brand,
             drive traffic, and generate leads. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media management and content marketing,
              we create customized strategies that align with your business goals. Our team of experts utilizes data-driven insights to optimize your online presence,
               engage your target audience, and maximize your ROI. Partner with us to unlock the full potential of your digital marketing efforts and achieve sustainable growth.
            </p>
            {/* Mobile App Development Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Side: Text Content */}
              <div className="items-center flex">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Components</h3>
                  <ul className="list-disc list-inside text-[#ACACAC] space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        Search Engine Optimization (SEO)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">Content Marketing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        Social Media Marketing (SMM)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        Pay-Per-Click Advertising (PPC)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">Email Marketing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        Affiliate Marketing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        Influencer Marketing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-[#FF9D00] rounded-full mr-2  mt-2"></span>
                      <span className="text-[#546E7A]">
                        Analytics and Reporting
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side: Images */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/serviceImages/digital/img1.png"
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
