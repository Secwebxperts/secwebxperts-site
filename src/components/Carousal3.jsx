// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./carousal3.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles

// Import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules"; // Add Autoplay module

export default function Carousal3() {
  return (
    <>
      <div className="text-center my-11 mb-18">
        <h2 className="text-[36px] font-[600] mt-[-12] text-[#FF9D00] font-poppins">
          OUR AWESOME PORTFOLIO
        </h2>
        <p className="text-[16px] font-[500] text-[#546E7A]">
          Our Journey Through Successful Solutions
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false, // Ensures autoplay continues after interaction
        }}
        modules={[EffectCoverflow, Autoplay]} // Add Autoplay module here
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/landing-portfolio/Port1.png" alt="Project 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/landing-portfolio/Port2.png" alt="Project 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/landing-portfolio/Port3.png" alt="Project 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/landing-portfolio/Port4.png" alt="Project 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/landing-portfolio/Port5.png" alt="Project 5" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
