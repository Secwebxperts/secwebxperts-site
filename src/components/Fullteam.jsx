import React, { useState } from 'react';

const CircleHoverEffect = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex justify-center items-center">
        
        {/* Left Outer Circle (Smaller Circle) */}
        <div
          className={`absolute left-[-10px] transition-all duration-700 ease-in-out delay-100 ${
            hover ? 'opacity-100 translate-x-[-300px]' : 'opacity-0 translate-x-0'
          }`}
        >
          <div className="w-32 h-32 rounded-full border-4 border-yellow-500 flex items-center justify-center overflow-hidden relative"> {/* Increased size */}
            <img
              src="/teamMember/web/img3.png"
              alt="Junior Developer"
              className="w-full h-full object-cover rounded-full"
            />
            {/* Gray Overlay */}
            <div
              className={`absolute inset-0 bg-gray-500 transition-opacity duration-500 ease-in-out ${
                hover ? 'opacity-40' : 'opacity-0' // Lower opacity for better visibility
              }`}
            />
            <span
              className={`absolute bottom-[5px] text-center text-white transition-opacity duration-500 ease-in-out ${
                hover ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Junior Developer
            </span>
          </div>
        </div>

        {/* Left Main Circle (Moves from right to left) */}
        <div
          className={`absolute left-[-70px] transition-all duration-700 ease-in-out delay-150 ${
            hover ? 'opacity-100 translate-x-[-100px]' : 'opacity-0 translate-x-0'
          }`}
        >
          <div className="w-40 h-40 rounded-full border-4 border-yellow-500 flex items-center justify-center overflow-hidden relative"> {/* Increased size */}
            <img
              src="/teamMember/web/img2.png"
              alt="Intern Developer"
              className="w-full h-full object-cover rounded-full"
            />
            {/* Gray Overlay */}
            <div
              className={`absolute inset-0 bg-gray-500 transition-opacity duration-500 ease-in-out ${
                hover ? 'opacity-40' : 'opacity-0'
              }`}
            />
            <span
              className={`absolute bottom-[5px] text-center text-white transition-opacity duration-500 ease-in-out ${
                hover ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Intern Developer
            </span>
          </div>
        </div>

        {/* Middle Circle (Larger size and clearer visibility) */}
        <div
          className="w-60 h-60 rounded-full border-4 border-yellow-500 flex items-center justify-center cursor-pointer z-50 overflow-hidden relative" // Increased size here
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            src="/teamMember/web/img1.png"
            alt="Senior Developer"
            className="w-full h-full object-cover rounded-full"
          />
          {/* Gray Overlay */}
          <div
            className={`absolute inset-0 bg-gray-500 transition-opacity duration-500 ease-in-out ${
              hover ? 'opacity-30' : 'opacity-0' // Reduced opacity for clearer visibility
            }`}
          />
          <span
            className={`absolute bottom-[5px] text-center text-white transition-opacity duration-500 ease-in-out ${
              hover ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Senior Developer
          </span>
        </div>

        {/* Right Main Circle (Moves from left to right) */}
        <div
          className={`absolute right-[-70px] transition-all duration-700 ease-in-out delay-150 ${
            hover ? 'opacity-100 translate-x-[100px]' : 'opacity-0 translate-x-0'
          }`}
        >
          <div className="w-40 h-40 rounded-full border-4 border-yellow-500 flex items-center justify-center overflow-hidden relative"> {/* Increased size */}
            <img
              src="/teamMember/web/img4.png"
              alt="Junior Developer"
              className="w-full h-full object-cover rounded-full"
            />
            {/* Gray Overlay */}
            <div
              className={`absolute inset-0 bg-gray-500 transition-opacity duration-500 ease-in-out ${
                hover ? 'opacity-40' : 'opacity-0'
              }`}
            />
            <span
              className={`absolute bottom-[5px] text-center text-white transition-opacity duration-500 ease-in-out ${
                hover ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Junior Developer
            </span>
          </div>
        </div>

        {/* Right Outer Circle (Smaller Circle) */}
        <div
          className={`absolute right-[-110px] transition-all duration-700 ease-in-out delay-100 ${
            hover ? 'opacity-100 translate-x-[200px]' : 'opacity-0 translate-x-0'
          }`}
        >
          <div className="w-32 h-32 rounded-full border-4 border-yellow-500 flex items-center justify-center overflow-hidden relative"> {/* Increased size */}
            <img
              src="/teamMember/web/img5.png"
              alt="Junior Developer"
              className="w-full h-full object-cover rounded-full"
            />
            {/* Gray Overlay */}
            <div
              className={`absolute inset-0 bg-gray-500 transition-opacity duration-500 ease-in-out ${
                hover ? 'opacity-40' : 'opacity-0'
              }`}
            />
            <span
              className={`absolute bottom-[6px] text-center text-white transition-opacity duration-500 ease-in-out ${
                hover ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Junior Developer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleHoverEffect;
