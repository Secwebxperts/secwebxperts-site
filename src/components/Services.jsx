import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./style.css";
import { useRef, useState } from "react";

const ServiceSection = () => {
  const sliderRef = useRef(null); // Reference for slider
  const [isPaused, setIsPaused] = useState(false); // State to check if slider is paused

  const settings = {
    infinite: true,
    speed: 6000, // Adjust speed for scrolling
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: !isPaused, // Control autoplay based on state
    autoplaySpeed: 8000, // Speed for autoplay
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false, // Disable default pause on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Function to pause slider
  const handlePause = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause(); // Pause slider immediately
      setIsPaused(true); // Set pause state
    }
  };

  // Function to play slider
  const handlePlay = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay(); // Resume slider immediately
      setIsPaused(false); // Reset pause state
    }
  };

  // Pause slider on mouse enter
  const handleMouseEnter = () => {
    handlePause(); // Pause slider on hover
  };

  // Resume slider on mouse leave (only if not paused by click)
  const handleMouseLeave = () => {
    if (!isPaused) {
      handlePlay(); // Resume slider
    }
  };

  // Toggle pause/play on click
  const handleClick = () => {
    if (isPaused) {
      handlePlay(); // Resume if paused
    } else {
      handlePause(); // Pause if playing
    }
  };

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

        <Slider
          {...settings}
          ref={sliderRef} // Bind slider ref to this instance
          className="service-slider"
          onMouseEnter={handleMouseEnter} // Pause on hover
          onMouseLeave={handleMouseLeave} // Resume on hover leave
          onClick={handleClick} // Toggle pause/resume on click
        >
          {/* Web Development Card */}
          <div className="service-item">
            <div className="bg-white rounded-lg shadow-md p-4 min-w-[250px] h-[350px]">
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
              <Link to="/services?tab=web-design" className="text-blue-600">
                Learn More →
              </Link>
            </div>
          </div>

          {/* Mobile App Development Card */}
          <div className="service-item">
            <div className="bg-white rounded-lg shadow-md p-6 min-w-[250px] h-[350px]">
              <div className="mx-3">
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
                <Link to="/services?tab=mobile-app" className="text-blue-600">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          {/* Cyber Security Card */}
          <div className="service-item">
            <div className="bg-white rounded-lg shadow-md p-6 min-w-[250px] h-[350px]">
              <div className="mx-3">
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
                <Link to="/services?tab=cyber-security" className="text-blue-600">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          {/* Digital Marketing Card */}
          <div className="service-item">
            <div className="bg-white rounded-lg shadow-md p-6 min-w-[250px] h-[350px]">
              <div className="mx-3">
                <img
                  src="/serviceImages/digital.png"
                  alt="Digital Marketing"
                  className="mx-auto mb-4 w-full max-w-[166px] h-[150px] object-cover"
                />
                <h3 className="text-[17px] font-semibold font-poppins mb-1 text-[#1C1C1C]">
                  Digital Marketing
                </h3>
                <p className="text-[#546E7A] mb-4 font-[400] text-[14px]">
                  Digital marketing is promoting products or services online to
                  reach and engage audiences.
                </p>
                <Link to="/services?tab=digital-marketing" className="text-blue-600">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ServiceSection;
