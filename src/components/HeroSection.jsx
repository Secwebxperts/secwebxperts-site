import { useState, useEffect } from "react";

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

  // useEffect(() => {
  //   const imageChangeInterval = setInterval(() => {
  //     setFadeClass("fade-out");

  //     setTimeout(() => {
  //       setCurrentCenterImage(
  //         (prevIndex) => (prevIndex + 1) % centerImages.length
  //       );
  //       setFadeClass("fade-in");
  //     }, 100);
  //   }, 3000);

  //   return () => clearInterval(imageChangeInterval);
  // }, [centerImages.length]);

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
          // iPhone eXpensive portrait, iPhone 6-8 portrait
          orbitRadius = 120;
        } else if (windowWidth <= 412) {
          // Pixel 2 portrait, iPhone 6-8 Plump portrait
          orbitRadius = 140;
        } else if (windowWidth <= 667) {
          // iPhone 6-8 landscape
          orbitRadius = 140;
        } else if (windowWidth <= 734 || windowWidth <= 736) {
          // iPhone eXpensive landscape, iPhone 6-8 Plump landscape
          orbitRadius = 90;
        } else if (windowWidth <= 768) {
          // Tablets
          orbitRadius = 90;
        } else {
          orbitRadius = 140;
        }

        updateOrbit(logo, index, orbitRadius, 50);
      });

      // Inner logo
      const angleInner = (Date.now() / 70) % 360;
      const windowWidth = window.innerWidth;
      let innerRadius = 300;

      if (windowWidth <= 375) {
        innerRadius = 90;
      } else if (windowWidth <= 412) {
        innerRadius = 100;
      } else if (windowWidth <= 667) {
        innerRadius = 104;
      } else if (windowWidth <= 734 || windowWidth <= 736) {
        innerRadius = 100;
      } else if (windowWidth <= 768) {
        innerRadius = 130;
      } else {
        innerRadius = 100;
      }

      const xInner = innerRadius * Math.cos((angleInner * Math.PI) / 180);
      const yInner = innerRadius * Math.sin((angleInner * Math.PI) / 180);
      innerLogo.style.transform = `translate(${yInner}px, ${xInner}px)`;
    }, 16);

    return () => clearInterval(animateLogos);
  }, []);

  return (
    // <section className="py-20  sm:py-45  md:py-40 lg:py-32 bg-gradient-to-b from-white to-purple-200 flex flex-col md:flex-row items-center justify-center">
    <section
      className="max-w-auto flex flex-col m-auto md:flex-row items-center justify-center bg-[url('/BG_color.png')] bg-cover bg-center h-[530px]"
      // style={{
      //   background:
      //     "bg-[url('/BG color.png')]",
      // }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-2  mx-auto w-[70%] py-8 mt-[70px]"
        // style={{ padding: "10px" }}
      >
        {/* Text Section */}
        <div className="mb-8 md:mb-0 text-center md:text-left mt-1">
          <h5 className=" font-poppins font-bold text-[45px] text-[#FF9D00] leading-snug md:leading-[70px]">
            Making Service <br /> Simple and Excellent
          </h5>
          <p className="text-[#1C1C1C] mt-4 font-[500] text-[16px] leading-[30px] tracking-wider max-w-[36rem]">
            Our goal is to make service simple without compromising on quality,
            offering a hassle-free experience that consistently meets your
            expectations and needs.
          </p>
          {/* <button className="mt-8 bg-black text-white py-3 px-6 rounded-full hover:bg-gray-700 transition">
            Book an Appointment
          </button> */}
        </div>

        {/* Solar Animation Section */}
        <div className="relative flex items-center justify-center mt-[20px]">
          {/* Outer and Inner Orbits */}
          <div className="absolute w-65 h-65 md:w-72 md:h-72 border-2 border-gray-300 rounded-full p-[35px]">
            {/* Outer orbit with 10px gap */}
            <div className="absolute w-[calc(100%-70px)] h-[calc(100%-70px)] border-2 border-gray-300 rounded-full flex items-center justify-center">
              {/* Inner orbit */}
              <div className="inner-orbit-logo w-14 h-14 md:w-[70px] md:h-[70px] bg-white rounded-full flex items-center justify-center">
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
                className="outer-orbit-logo absolute w-[66px] h-[66px]  transform"
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
