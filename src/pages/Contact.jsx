import { FiSearch } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      {/* Header Section */}
      <div className="w-full text-center py-32 bg-[url('/contact/Frame6.png')] bg-cover bg-center min-h-[330px] flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-customYellow ">
          How Can We Help You?
        </h1>
        <div className="flex justify-center mt-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              className="bg-black  w-full px-5 py-3 text-sm text-white rounded-full focus:outline-none shadow-md"
              placeholder="Search"
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-5">
              <FiSearch size={24} className="text-gray-500" />
            </button>
          </div>
        </div>
        <p className="text-[##1C1C1C] mt-4 text-[16px]">
          Secwebxperts Support / Submit a Request
        </p>
      </div>

      {/* Talk to Us Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-around gap-10 px-5 py-10">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full h-[300px] lg:h-[400px] ml-[59px]">
            <img
              src="/contact/model.jpg" // Replace with the actual image
              alt="Customer Support"
              className="w-full h-full  rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-8">
          <h2 className=" font-Poppins font-semibold text-[#1E2D4D] mb-6 text-3xl">
            Talk To us
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              />
              <input
                type="text"
                placeholder="Job Title (optional)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
            <textarea
              placeholder="What do you need help with?"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-[30%] bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Request a call back
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
