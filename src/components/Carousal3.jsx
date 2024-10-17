// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./carousal3.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles

// Import required modules
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules"; // Include Pagination if needed

export default function Carousal3() {
  return (
    <div className="bg-[url('/landing-portfolio/dot.png')] bg-contain bg-no-repeat" style={{ backgroundSize: '800px 400px' }}>
      <div className="text-center py-8 mb-5">
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
        slidesPerView={5} // Set to 5 to show two images on both sides and one in the center
        spaceBetween={20} // Add space between slides
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // Ensures autoplay continues after interaction
        }}
        pagination={{ clickable: true }} // Enable pagination if you want it
        modules={[EffectCoverflow, Autoplay, Pagination]} // Include pagination module
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
        <SwiperSlide>
          <img src="/landing-portfolio/Port5.png" alt="Project 5" />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
