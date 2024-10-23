import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Herosection = () => {
  const outerOrbitLogos = [
    {
      src: "solerIcon/Background+Shadow.png",
      alt: "IOT",
    },
    {
      src: "solerIcon/Background+Shadow1.png",
      alt: "React",
    },
    {
      src: "solerIcon/Background+Shadow3.png",
      alt: "Node",
    },
    {
      src: "solerIcon/Background+Shadow4.png",
      alt: "Angular",
    },
    {
      src: "solerIcon/Background+Shadow5.png",
      alt: "Blockchain",
    },
  ];

  const innerOrbitLogo = {
    src: "solerIcon/client.png",
    alt: "JavaScript",
  };

  const centerImages = [
    {
      src: "solerIcon/Mask group.png",
      alt: "PHP Icon",
    },
  ];

  const [currentCenterImage, setCurrentCenterImage] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const animateLogos = setInterval(() => {
      const outerLogos = document.querySelectorAll(".outer-orbit-logo");
      const innerLogo = document.querySelector(".inner-orbit-logo");

      const updateOrbit = (logo, index, orbitRadius, speed) => {
        const angle =
          ((index / outerLogos.length) * 360 + Date.now() / speed) % 360;
        const x = orbitRadius * Math.cos((angle * Math.PI) / 180);
        const y = orbitRadius * Math.sin((angle * Math.PI) / 180);
        logo.style.transform = `translate(${y}px, ${x}px)`;
      };

      outerLogos.forEach((logo, index) => {
        const windowWidth = window.innerWidth;
        let orbitRadius = 140;

        // Set specific orbit sizes based on device width
        if (windowWidth <= 375) {
          orbitRadius = 100; // Smaller for mobile
        } else if (windowWidth <= 412) {
          orbitRadius = 120;
        } else if (windowWidth <= 667) {
          orbitRadius = 130;
        } else {
          orbitRadius = 140; // Default for larger screens
        }

        updateOrbit(logo, index, orbitRadius, 50);
      });

      // Inner logo
      const angleInner = (Date.now() / 70) % 360;
      const windowWidth = window.innerWidth;
      let innerRadius = 90;

      if (windowWidth <= 375) {
        innerRadius = 100; // Smaller for mobile
      } else if (windowWidth <= 412) {
        innerRadius = 110;
      } else if (windowWidth <= 667) {
        innerRadius = 100;
      } else {
        innerRadius = 90; // Default for larger screens
      }

      const xInner = innerRadius * Math.cos((angleInner * Math.PI) / 180);
      const yInner = innerRadius * Math.sin((angleInner * Math.PI) / 180);
      innerLogo.style.transform = `translate(${yInner}px, ${xInner}px)`;
    }, 16);

    return () => clearInterval(animateLogos);
  }, []);

  return (
    <section className="bg-[url('/BG_color.png')] bg-cover bg-center h-[400px] w-full">
      <div className="flex justify-between flex-col md:flex-row items-center mx-auto max-w-[1100px] mt-[130px] px-4">
        {/* Text Section */}
        <div className="mb-8 md:mb-0 text-center md:text-left mt-1">
          <h5 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] font-poppins font-bold text-[24px] text-[#FF9D00] leading-snug md:leading-[70px]">
            Making Service <br /> Simple and Excellent
          </h5>
          <p className="text-[#1C1C1C] mt-4 font-[500] text-[16px] leading-[30px] tracking-wider max-w-[36rem]">
            Our goal is to make service simple without compromising on quality,
            offering a hassle-free experience that consistently meets your
            expectations and needs.
          </p>
          <div className="bg-[#1C1C1C] mt-8 rounded-md inline-block">
            <Link to='/contact'>
              <p className="text-[#fefefe] py-2 px-4 font-poppins">BOOK AN APPOINTMENT</p>
            </Link>
          </div>
        </div>

        {/* Solar Animation Section */}
        <div className="relative flex items-center justify-center mt-[20px] md:mr-[100px]">
          {/* Outer and Inner Orbits */}
          <div className="absolute w-[calc(100%+140px)] h-[calc(100%+140px)] md:w-[calc(100%+160px)] md:h-[calc(100%+160px)] border-2 border-gray-300 rounded-full p-[30px] flex items-center justify-center">
            {/* Outer orbit with 10px gap */}
            <div className="absolute w-[calc(100%-85px)] h-[calc(100%-85px)] border-2 border-gray-300 rounded-full flex items-center justify-center">
              {/* Inner orbit */}
              <div className="inner-orbit-logo w-90 h-90 md:w-[110px] md:h-[110px]  rounded-full flex items-center justify-center object-cover">
                <img
                  src={innerOrbitLogo.src}
                  alt={innerOrbitLogo.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="p-2 bg-white rounded-full">
            <div className="relative w-[100px] h-[100px] rounded-full bg-white shadow-lg z-10">
              <img
                src={centerImages[currentCenterImage].src}
                alt={centerImages[currentCenterImage].alt}
                className={`w-full h-full object-cover rounded-full transition-all duration-500 ease-in-out ${fadeClass}`}
              />
            </div>
          </div>

          {/* Outer Orbit Logos */}
          <div className="absolute w-full h-full flex items-center justify-center">
            {outerOrbitLogos.map((logo, index) => (
              <div
                key={index}
                className="outer-orbit-logo absolute w-[75px] h-[75px] transform"
                style={{
                  transform: `translate(-50%, -50%) rotate(${(index * 360) / outerOrbitLogos.length}deg) translateX(100px)`, // Adjust the rotation and translation to position the logos correctly
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
