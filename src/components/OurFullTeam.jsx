/* eslint-disable react/prop-types */
import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; 
const OurFullTeam = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center  bg-gradient-to-b from-white to-purple-50 max-h-[800px] md:py-30 min-h-[350px]">
    <h1 className="text-4xl font-bold text-orange-500 text-center">
      We Bring A Wealth Of Skills And Experience <br /> From A Wide Range Of Background
    </h1>
    <p className="mt-4 text-lg text-gray-500 text-center">
      Our Philosophy is simple; hire great people and give them the resources and support to do their best work.
    </p>
  </div>
 {/* teamSection */}
  {/* director */}
 <div className='items-center justify-center flex'>
    <div className="max-w-sm bg-white shadow-lg rounded-lg p-6 text-center items-center mt-6">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src="/teamMember/hem_ch.png" // Replace with the actual image path
          alt="Hem Chandra Paira"
          className="w-24 h-24 rounded-full border-1 border-gray-300"
        />
      </div>
      
      {/* Name and Title */}
      <h2 className="text-xl font-semibold font-poppins text-[#000000]">Hem Chandra Paira</h2>
      <p className="text-[#FF9D00] font-medium font-poppins">Director</p>
      
      {/* Description */}
      <p className="mt-4 text-[#546E7A] font-poppins">
        Experienced IT leader dedicated to driving innovation and excellence in
        technology solutions and cybersecurity.
      </p>
      
      {/* LinkedIn Icon */}
      <div className="mt-4 items-center justify-center flex">
        <a
          href="https://www.linkedin.com" // Replace with the actual LinkedIn profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
  </div>
 </div>

<div className='flex items-center justify-between sm:max-w-[400px] md:max-w-[700px] lg:max-w-[800px] mx-auto my-8'>

    <div className="max-w-sm bg-white shadow-lg rounded-lg p-6 text-center">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src="path-to-image.jpg" // Replace with the actual image path
          alt="Hem Chandra Paira"
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
      </div>
      
      {/* Name and Title */}
      <h2 className="text-xl font-semibold text-gray-800">Hem Chandra Paira</h2>
      <p className="text-orange-500 font-medium">Director</p>
      
      {/* Description */}
      <p className="mt-4 text-gray-500">
        Experienced IT leader dedicated to driving innovation and excellence in
        technology solutions and cybersecurity.
      </p>
      
      {/* LinkedIn Icon */}
      <div className="mt-4">
        <a
          href="https://www.linkedin.com" // Replace with the actual LinkedIn profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>


    <div className="max-w-sm bg-white shadow-lg rounded-lg p-6 text-center">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src="path-to-image.jpg" // Replace with the actual image path
          alt="Hem Chandra Paira"
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
      </div>
      
      {/* Name and Title */}
      <h2 className="text-xl font-semibold text-gray-800">Hem Chandra Paira</h2>
      <p className="text-orange-500 font-medium">Director</p>
      
      {/* Description */}
      <p className="mt-4 text-gray-500">
        Experienced IT leader dedicated to driving innovation and excellence in
        technology solutions and cybersecurity.
      </p>
      
      {/* LinkedIn Icon */}
      <div className="mt-4">
        <a
          href="https://www.linkedin.com" // Replace with the actual LinkedIn profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>

    </div>
    </>
  );
};

export default OurFullTeam;
