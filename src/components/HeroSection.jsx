import { useState, useEffect } from "react";

const Herosection = () => {
  const outerOrbitLogos = [
    {
      src: "/solerIcon/Background+Shadow.png",
      alt: "IOT",
    },
    {
      src: "/solerIcon/Background+Shadow1.png",
      alt: "React",
    },
    {
      src: "/solerIcon/Background+Shadow3.png",
      alt: "Node",
    },
    {
      src: "/solerIcon/Background+Shadow4.png",
      alt: "Angular",
    },
    {
      src: "/solerIcon/Background+Shadow5.png",
      alt: "Blockchain",
    },
  ];

  const innerOrbitLogo = {
    src: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
    alt: "JavaScript",
  };

  const centerImages = [
    {
      src: "/solerIcon/Mask group.png",
      alt: "PHP Icon",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      alt: "HTML Icon",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      alt: "CSS Icon",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/919/919828.png",
      alt: "Java Icon",
    },
  ];

  const [currentCenterImage, setCurrentCenterImage] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      setFadeClass("fade-out");

      setTimeout(() => {
        setCurrentCenterImage(
          (prevIndex) => (prevIndex + 1) % centerImages.length
        );
        setFadeClass("fade-in");
      }, 100);
    }, 3000);

    return () => clearInterval(imageChangeInterval);
  }, [centerImages.length]);

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
        let orbitRadius = 192;

        // Set specific orbit sizes based on device width
        if (windowWidth <= 375) {
          // iPhone eXpensive portrait, iPhone 6-8 portrait
          orbitRadius = 140;
        } else if (windowWidth <= 412) {
          // Pixel 2 portrait, iPhone 6-8 Plump portrait
          orbitRadius = 140;
        } else if (windowWidth <= 667) {
          // iPhone 6-8 landscape
          orbitRadius = 140;
        } else if (windowWidth <= 734 || windowWidth <= 736) {
          // iPhone eXpensive landscape, iPhone 6-8 Plump landscape
          orbitRadius = 140;
        } else if (windowWidth <= 768) {
          // Tablets
          orbitRadius = 180;
        } else {
          orbitRadius = 192;
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
        innerRadius = 145;
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
      className="py-20  sm:py-45  md:py-40 lg:py-32 flex flex-col md:flex-row items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(247,237,255,1) 45%, rgba(237,233,255,1) 100%)",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-12 md:space-y-0 mx-auto w-full px-4 mt-[40px]"
        style={{ padding: "70px" }}
      >
        {/* Text Section */}
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-orange-500 leading-snug md:leading-[70px] font-poppins">
            Making Service Simple and Excellent
          </h1>
          <p className="text-gray-800 mt-4 max-w-lg font-bold leading-relaxed ">
            Our goal is to make service simple without compromising on quality,
            offering a hassle-free experience that consistently meets your
            expectations and needs.
          </p>
          <button className="mt-8 bg-black text-white py-3 px-6 rounded-full hover:bg-gray-700 transition">
            Book an Appointment
          </button>
        </div>

        {/* Solar Animation Section */}
        <div className="relative flex items-center justify-center">
          {/* Outer and Inner Orbits */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 border-2 border-gray-300 rounded-full p-[39px] md:p-[49px]">
            <div className="absolute w-52 h-52 md:w-72 md:h-72 border-2 border-gray-300 rounded-full"></div>
          </div>

          {/* Center Image */}
          <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full bg-white shadow-lg z-10">
            <img
              src={centerImages[currentCenterImage].src}
              alt={centerImages[currentCenterImage].alt}
              className={`w-full h-full object-cover rounded-full transition-all duration-500 ease-in-out ${fadeClass}`}
            />
          </div>

          {/* Outer Orbit Logos */}
          <div className="absolute w-full h-full flex items-center justify-center">
            {outerOrbitLogos.map((logo, index) => (
              <div
                key={index}
                className="outer-orbit-logo absolute w-15 h-15 md:w-15 md:h-15 transform"
                style={{ filter: `drop-shadow(0 0 28px ${logo.shadowColor})` }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Inner Orbit Logo */}
          <div className="absolute w-full h-full flex items-center justify-center">
            <div className="inner-orbit-logo absolute w-17 h-17 md:w-12 md:h-12 transform">
              <div className=" bg-white rounded-full flex justify-center items-center inner-orbit-logo absolute  w-20 h-20 md:w-15 md:h-15 transform ">
                <h3 className="text-blue-500 font-bold object-contain justify-center items-center">
                  Clients <br /> 20+
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
