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
            <h2 className="text-center text-3xl font-bold mb-6">
              WEB DESIGN AND DEVELOPMENT
            </h2>
            <p className="text-center text-gray-600  mx-auto mb-10">
              Secwebxperts provides VAPT, penetration testing, system hardening,
              API testing, mobile app testing, and data leak testing services.
              Our expertise extends to web and mobile app development, UI/UX
              design, and software development, ensuring robust security and
              innovative solutions tailored to your business's unique needs.
            </p>

            {/* Web Design Section Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Side: Text Content */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  The Best Web Design Company
                </h3>
                <ul className="list-none space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">
                      Perfect UX/UI designing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">
                      Responsive and Reliable
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">
                      Scalable and well-formatted
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">
                      Easily and effectively navigated
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">
                      Digital Marketing and Branding
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">
                      Relevant content that sticks visitors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">
                      Affordable and Pocket-friendly prices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">
                      Fast load times and great performance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">Optimized and Secure</span>
                  </li>
                </ul>
              </div>

              {/* Right Side: Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="src/assets/Group1000001287.png"
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[600px] h-auto"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-24">
              {/* Left Side: Text Content */}

              {/* Right Side: Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="src/assets/Group1000001291.png"
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[600px] h-auto"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Our Web design and development Services:
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Perfect UX/UI
                    designing
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Responsive and
                    Reliable
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Scalable and
                    well-formatted
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Easily and
                    effectively navigated
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Digital Marketing and
                    Branding
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Relevant content that
                    sticks visitors
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Affordable and
                    Pocket-friendly prices
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Fast load times and
                    great performance
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Optimized and Secure
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl pb-7">
                Why should every business need a website?
              </h2>
              <p>
                There are several reasons for why you need a strong web
                presence. Some of them are so prominent that they make your
                online web presence of utmost importance. To get the best
                results you need the Best Web Design Company in Kolkata, India
                and for that you can absolutely trust on Secwebxperts
                Technologies Pvt. Ltd. Here are some points why you need us
                Popularity – Your web presence increases the visibility of your
                business and hence makes it popular among your prospective
                customers. Reach – Helps you markedly increase in reach and
                attracts the attention of your customers towards your products
                or services Increase Sales and Conversion – The more traffic and
                reach, the more the chances of sales or conversion. Your website
                is the first step toward your customers and a well-designed one
                can drive more sales. Convenience for customers – Your website
                offers a virtual tour of your services and solution. Hence makes
                your customers aware of your products and solutions. It is
                helpful for them to access the information about your services
                whenever they need it. Availability all the time – Your website
                makes your business or brand present around the clock in front
                of the customers. The availability around the clock always helps
                in generating more sales and conversion over the traditional
                storefront. Increased Customer-base – Having your website helps
                in a significant increase in customer base. It is easy for them
                to contact you directly through your given contact details if
                they liked your services. Targeted Audience – To save your money
                and time, your web presence is the best option. It helps you in
                communicating with the right audience. All things considered, we
                are your best companion in making a customer-centric website for
                you. Secwebxperts Technologies will serve you with top-notch
                website designing and development services.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-24">
              {/* Left Side: Text Content */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Innovative Web Design Experts
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Perfect UX/UI
                    designing
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Responsive and
                    Reliable
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Scalable and
                    well-formatted
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Easily and
                    effectively navigated
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Digital Marketing and
                    Branding
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Relevant content that
                    sticks visitors
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Affordable and
                    Pocket-friendly prices
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Fast load times and
                    great performance
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Optimized and Secure
                  </li>
                </ul>
              </div>

              {/* Right Side: Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="src/assets/Group1000001295.png"
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[600px] h-auto"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "mobile-app" && (
          <div id="mobile-app" className="w-full max-w-[1200px] mx-auto">
            <h2 className="text-center text-3xl font-bold mb-6">
              MOBILE APP DEVELOPMENT
            </h2>
            <p className="text-center text-gray-600  mx-auto mb-10">
              We have customized our Mobile App Development Services in India
              keeping in mind the user experience and Business need. Mobile and
              iOS apps are the current trends. In today’s time, people are
              always online and connected to their smart devices. The mobile has
              engulfed the entire market with high processing speed and storage
              like never before. Everyone is reluctant to open their laptop when
              they can use their mobile to serve the purpose. Whether your
              requirement is an Mobile app we have experienced software
              engineers to deliver the app within time. Our developers are
              well-versed in the responsiveness and design that fits every shape
              and size of mobiles available. The team of Mobile app developers
              are experienced with all development languages be it Kotlin, Java,
              HTML, or CSS they are well versatile with the same. Mobile are
              distinguishable features and face every vertical of business, be
              it e-commerce or a complex one. These apps help the business reach
              its own very hands. We at TP Digital Technologies understand the
              value of every business and know-how that an app with superb
              design sleek and fast performance can help to shape your business
              to the next level.
            </p>

            {/* Mobile App Development Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Side: Text Content */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Comprehensive Mobile App Services
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>iOS and Android
                    development
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Cross-platform
                    solutions
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Secure app
                    infrastructure
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>User-friendly UI/UX
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Performance
                    optimization
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>API integration and
                    cloud solutions
                  </li>
                </ul>
              </div>

              {/* Right Side: Images */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[530px] max-h-[330px] h-auto"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-24">
              {/* Left Side: Text Content */}

              {/* Right Side: Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="https://media.gettyimages.com/id/74292099/photo/unspecified-photo-of-queen-photo-by-michael-ochs-archives-getty-images.jpg?s=612x612&w=0&k=20&c=v3K3zxFVWWMHlcwmEKfFA5hR8pCbZJBkd-zjv51cBUU="
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[600px] h-auto"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Our top-notch IOS App services include:
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Perfect UX/UI
                    designing
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Responsive and
                    Reliable
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Scalable and
                    well-formatted
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Easily and
                    effectively navigated
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Digital Marketing and
                    Branding
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Relevant content that
                    sticks visitors
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Affordable and
                    Pocket-friendly prices
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Fast load times and
                    great performance
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Optimized and Secure
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl pb-7">
                Importance of a Website for Business Growth
              </h2>
              <p>
                A strong web presence is crucial for several important reasons,
                some of which make it absolutely essential for your business. To
                get the best results, you need the Best Web Design Company in
                Kolkata, India—and you can fully trust Secwebxperts Technologies
                Pvt. Ltd. to deliver.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-24">
              {/* Left Side: Text Content */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Innovative Web Design Experts
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Perfect UX/UI
                    designing
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Responsive and
                    Reliable
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Scalable and
                    well-formatted
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Easily and
                    effectively navigated
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Digital Marketing and
                    Branding
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Relevant content that
                    sticks visitors
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Affordable and
                    Pocket-friendly prices
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Fast load times and
                    great performance
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Optimized and Secure
                  </li>
                </ul>
              </div>

              {/* Right Side: Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="https://media.gettyimages.com/id/74292099/photo/unspecified-photo-of-queen-photo-by-michael-ochs-archives-getty-images.jpg?s=612x612&w=0&k=20&c=v3K3zxFVWWMHlcwmEKfFA5hR8pCbZJBkd-zjv51cBUU="
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[600px] h-auto"
                />
              </div>
            </div>
          </div>
        )}

{activeTab === "sass" && (
          <div id="sass" className="w-full max-w-[1200px] mx-auto">
            <h2 className="text-center text-3xl font-bold mb-6">
              SASS
            </h2>
            <p className="text-center text-gray-600  mx-auto mb-10">
              We have customized our Mobile App Development Services in India
              keeping in mind the user experience and Business need. Mobile and
              iOS apps are the current trends. In today’s time, people are
              always online and connected to their smart devices. The mobile has
              engulfed the entire market with high processing speed and storage
              like never before. Everyone is reluctant to open their laptop when
              they can use their mobile to serve the purpose. Whether your
              requirement is an Mobile app we have experienced software
              engineers to deliver the app within time. Our developers are
              well-versed in the responsiveness and design that fits every shape
              and size of mobiles available. The team of Mobile app developers
              are experienced with all development languages be it Kotlin, Java,
              HTML, or CSS they are well versatile with the same. Mobile are
              distinguishable features and face every vertical of business, be
              it e-commerce or a complex one. These apps help the business reach
              its own very hands. We at TP Digital Technologies understand the
              value of every business and know-how that an app with superb
              design sleek and fast performance can help to shape your business
              to the next level.
            </p>

            {/* Mobile App Development Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Side: Text Content */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Comprehensive Mobile App Services
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>iOS and Android
                    development
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Cross-platform
                    solutions
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Secure app
                    infrastructure
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>User-friendly UI/UX
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Performance
                    optimization
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>API integration and
                    cloud solutions
                  </li>
                </ul>
              </div>

              {/* Right Side: Images */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[530px] max-h-[330px] h-auto"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-24">
              {/* Left Side: Text Content */}

              {/* Right Side: Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="https://media.gettyimages.com/id/74292099/photo/unspecified-photo-of-queen-photo-by-michael-ochs-archives-getty-images.jpg?s=612x612&w=0&k=20&c=v3K3zxFVWWMHlcwmEKfFA5hR8pCbZJBkd-zjv51cBUU="
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[600px] h-auto"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Our top-notch IOS App services include:
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Perfect UX/UI
                    designing
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Responsive and
                    Reliable
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Scalable and
                    well-formatted
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Easily and
                    effectively navigated
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Digital Marketing and
                    Branding
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Relevant content that
                    sticks visitors
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Affordable and
                    Pocket-friendly prices
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Fast load times and
                    great performance
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Optimized and Secure
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl pb-7">
                Importance of a Website for Business Growth
              </h2>
              <p>
                A strong web presence is crucial for several important reasons,
                some of which make it absolutely essential for your business. To
                get the best results, you need the Best Web Design Company in
                Kolkata, India—and you can fully trust Secwebxperts Technologies
                Pvt. Ltd. to deliver.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-24">
              {/* Left Side: Text Content */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Innovative Web Design Experts
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Perfect UX/UI
                    designing
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Responsive and
                    Reliable
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Scalable and
                    well-formatted
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Easily and
                    effectively navigated
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Digital Marketing and
                    Branding
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Relevant content that
                    sticks visitors
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Affordable and
                    Pocket-friendly prices
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Fast load times and
                    great performance
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Optimized and Secure
                  </li>
                </ul>
              </div>

              {/* Right Side: Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="https://media.gettyimages.com/id/74292099/photo/unspecified-photo-of-queen-photo-by-michael-ochs-archives-getty-images.jpg?s=612x612&w=0&k=20&c=v3K3zxFVWWMHlcwmEKfFA5hR8pCbZJBkd-zjv51cBUU="
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[600px] h-auto"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "cyber-security" && (
          <div id="cyber-security" className="w-full max-w-[1200px] mx-auto">
            <div>
              <h2 className="text-center text-3xl font-bold mb-6">
                CYBER SECURITY & ANALYTICS
              </h2>
              <p className="text-center text-gray-600  mx-auto mb-10">
                SecWebXperts offers comprehensive cybersecurity services,
                including VAPT, penetration testing, system hardening, and data
                leak testing. Our expert team uses advanced tools and
                methodologies to protect your digital assets from threats. With
                extensive experience and industry certifications, we ensure
                robust security and resilience for your business’s critical
                systems and data.
              </p>
            </div>
            <div>
              <h2 className="text-center text-3xl font-bold mb-6">
                Static Application Security Testing (SAST)
              </h2>
              <p className="text-center text-gray-600  mx-auto mb-10">
                Static application security testing (SAST), or static analysis,
                is a testing methodology that analyzes source code to find
                security vulnerabilities that make your organization’s
                applications susceptible to attack. SAST scans an application
                before the code is compiled. It’s also known as white box
                testing.
              </p>
            </div>
            <div>
              <h2 className="text-center text-3xl font-bold mb-6">
                Dynamic Application Security Testing (DAST)
              </h2>
              <p className="text-center text-gray-600  mx-auto mb-10">
                Dynamic application security testing (DAST) is a method of
                AppSec testing in which testers examine an application while
                it’s running, but have no knowledge of the application’s
                internal interactions or designs at the system level, and no
                access or visibility into the source program. This “black box”
                testing looks at an application from the outside in, examines
                its running state, and observes its responses to simulated
                attacks made by a testing tool. An application’s responses to
                these simulations help determine whether the application is
                vulnerable and could be susceptible to a real malicious attac
                Find vulnerabilities with us before an attacker does.
              </p>
            </div>
            <div>
              <h2 className="text-center text-3xl font-bold mb-6">
                Application Programming Interface(API)
              </h2>
              <p className="text-center text-gray-600  mx-auto mb-10">
                API testing is a type of software testing that involves testing
                application programming interfaces (APIs) directly and as part
                of integration testing to determine if they meet expectations
                for functionality, reliability, performance, and security. Since
                APIs lack a GUI, API testing is performed at the message layer.
              </p>
            </div>
            <div>
              <h2 className="text-center text-3xl font-bold mb-6">
                Android Penetration Testing (APT)
              </h2>
              <p className="text-center text-gray-600  mx-auto mb-10">
                Android penetration testing is a process of finding security
                vulnerabilities in an Android application by attacking it using
                various methods and tools. This systematic approach searches for
                weaknesses in an Android application, verifies its security and
                makes sure it abides by security policies.
              </p>
            </div>

            {/* Cyber Security & Analytics Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Side: Text Content */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Complete Cyber Security Solutions
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Penetration testing
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Risk management
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Data encryption and
                    security
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Compliance and
                    regulation
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Security analytics
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Network security
                  </li>
                </ul>
              </div>

              {/* Right Side: Images */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L3JvYl9yYXdwaXhlbF9zdHVkaW9fcGhvdG9fb2ZfYV9vcmFuZ3V0YW5fZnVsbF9ib2R5X2lzb2xhdGVkX29uX182Nzc4MjQxOS1lYTFjLTQ1ODItYmExMy0xMzYzZDY0MDU2MzYtNXgtaHEtc2NhbGUtNV8wMHgtam9iMTg5NC0wMS5qcGc.jpg"
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[600px] h-auto"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-24">
              {/* Left Side: Text Content */}

              {/* Right Side: Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="https://media.gettyimages.com/id/74292099/photo/unspecified-photo-of-queen-photo-by-michael-ochs-archives-getty-images.jpg?s=612x612&w=0&k=20&c=v3K3zxFVWWMHlcwmEKfFA5hR8pCbZJBkd-zjv51cBUU="
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[600px] h-auto"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Innovative Web Design Experts
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Perfect UX/UI
                    designing
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Responsive and
                    Reliable
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Scalable and
                    well-formatted
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Easily and
                    effectively navigated
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Digital Marketing and
                    Branding
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Relevant content that
                    sticks visitors
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Affordable and
                    Pocket-friendly prices
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Fast load times and
                    great performance
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Optimized and Secure
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl pb-7">
                Importance of a Website for Business Growth
              </h2>
              <p>
                A strong web presence is crucial for several important reasons,
                some of which make it absolutely essential for your business. To
                get the best results, you need the Best Web Design Company in
                Kolkata, India—and you can fully trust Secwebxperts Technologies
                Pvt. Ltd. to deliver.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-24">
              {/* Left Side: Text Content */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Why our service is one of the Best Mobile App Development
                  Services in West Bengal ?
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Perfect UX/UI
                    designing
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Responsive and
                    Reliable
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Scalable and
                    well-formatted
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Easily and
                    effectively navigated
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Digital Marketing and
                    Branding
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Relevant content that
                    sticks visitors
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Affordable and
                    Pocket-friendly prices
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Fast load times and
                    great performance
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-600"></span>Optimized and Secure
                  </li>
                </ul>
              </div>

              {/* Right Side: Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="https://media.gettyimages.com/id/74292099/photo/unspecified-photo-of-queen-photo-by-michael-ochs-archives-getty-images.jpg?s=612x612&w=0&k=20&c=v3K3zxFVWWMHlcwmEKfFA5hR8pCbZJBkd-zjv51cBUU="
                  alt="Service Image"
                  className="rounded-lg shadow-md w-full max-w-[600px] h-auto"
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
