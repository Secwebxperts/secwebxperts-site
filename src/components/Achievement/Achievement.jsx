import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Include autoplay CSS if needed
import { Autoplay } from "swiper/modules";
import "./Achievement.css"; // If you have any custom CSS

const Achievements = () => {
  const achievements = [
    { name: "Mercedes-Benz", logo: "src/assets/achievement/frame 1.png" },
    { name: "AMD", logo: "src/assets/achievement/frame 2.png" },
    { name: "Google", logo: "src/assets/achievement/frame 3.png" },
    { name: "Ionic", logo: "src/assets/achievement/frame 4.png" },
    { name: "Mercedes-Benz", logo: "src/assets/achievement/frame 5.png" },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-white py-16 mt-32 mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Some of our Achievements
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Secwebxperts team participated in security responsible programs and
          received honors from reputed organizations.
        </p>

        {/* Swiper for sliding cards */}
        <Swiper
          loop={true} // Enables continuous loop mode
          autoplay={{ delay: 1000, disableOnInteraction: false }} // Autoplay with delay
          centeredSlides={true} // Centers the active slide
          spaceBetween={30} // Default space between slides
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1, // Show 1 slide
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2, // Show 2 slides
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3, // Show 3 slides
              spaceBetween: 30,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 4, // Show 4 slides
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay]} // Use only the Autoplay module
          className="mySwiper"
        >
          {achievements.map((achievement, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                <img
                  src={achievement.logo}
                  alt={achievement.name}
                  className="h-16 object-contain mb-4"
                />
                <p className="text-lg font-semibold text-gray-700">
                  {achievement.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-gradient-to-r from-blue-900 to-white py-16 px-8 lg:px-24">
        {/* Left Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img
            src="src/assets/cve.jpg"
            alt="Cyber Security"
            className="max-w-full lg:max-w-[90%] object-contain"
          />
        </div>

        {/* Right Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-orange-500 text-3xl lg:text-4xl font-bold mb-6">
            EXPERT IN CYBER SECURITY
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl">
            Secwebxperts team holds CVEs for finding vulnerabilities in open
            source projects that are published on{" "}
            <a
              href="https://cve.mitre.org"
              target="_blank"
              className="text-blue-500 underline"
            >
              cve.mitre.org
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Achievements;
