import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Include autoplay CSS if needed
import { Autoplay } from "swiper/modules";
import "./Achievement.css"; // If you have any custom CSS
import CVESlideIn from "./Cve";

const Achievements = () => {
  const achievements = [
    { logo: "/achievement/frame 2.png" },
    { logo: "/achievement/frame 1.png" },
    { logo: "/achievement/frame 3.png" },
    { logo: "/achievement/frame 4.png" },
    { logo: "/achievement/frame 5.png" },
  ];

  return (
    <>
      <div className="bg-[url('/bgimg/ach.png')] bg-contain bg-no-repeat py-16 mx-auto mt-[-10px]">
        <h2 className="uppercase text-[36px] font-[600] font-poppins text-center text-customYellow mb-4">
          Some of our Achievements
        </h2>
        <p className="font-poppins text-center text-[#546E7A] mb-10 text-[16px] leading-20 tracking-wider font-[500]">
          Secwebxperts team participated in security responsible programs and{" "}
          <br /> received honors from reputed organizations.
        </p>

        {/* Swiper for sliding cards */}
        <Swiper
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={10}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2, // Show 1 slide
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3, // Show 2 slides
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4, // Show 3 slides
              spaceBetween: 20,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 4, // Show 4 slides
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {achievements.map((achievement, index) => (
            <SwiperSlide key={index}>
              <div className="items-center py-2">
                <img
                  src={achievement.logo}
                  alt={achievement.name}
                  className="h-4 object-contain mb-2"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-[url('/bgimg/binary.png')] bg-contain bg-no-repeat">
        <div className="flex flex-col lg:flex-row items-center lg:items-start bg-[url('/bgimg/achievement.png')] bg-contain bg-no-repeat lg:px-2 ">
          {/* Left Image Section */}
          <div className="lg:w-1/2 w-full ml-0">
            <img
              src="/cve.jpg"
              alt="Cyber Security"
              className="max-w-full lg:max-w-[90%] lg:max-h-[50%] object-contain"
            />
          </div>

          {/* Right Text Section */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-customYellow text-[36px] lg:text-4xl font-[600] mb-6 pt-10 px-2">
              EXPERT IN CYBER SECURITY
            </h2>
            <p className="text-[#546E7A] text-lg max-w-xl px-2 leading-8">
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
            <CVESlideIn />
            {/* <ul className="list-disc list-inside py-8 px-2 font-bold text-gray-600">
              <li>CVE-2023-2594 CVE-2023-3605</li>
              <li>CVE-2023-1024 CVE-2023-1028</li>
              <li>CVE-2022-3546 CVE-2022-3548</li>
              <li>CVE-2022-3549 CVE-2022-4281</li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
