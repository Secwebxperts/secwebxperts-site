import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const teamMembers = [
  {
    name: "Hem Chandra Paira",
    title: "Director",
    description:
      "Experienced IT leader dedicated to driving innovation and excellence in technology solutions and cybersecurity.",

    image: "/teamMember/hem_ch.png ", // Replace with actual image path

    linkedin: "#",
  },
  {
    name: "Sathya Sachi Paira",
    title: "CEO",
    description:
      "Leading the team, making strategic decisions, driving growth, and ensuring operational success.",
    image: "/teamMember/ceo.png", // Replace with actual image path
    linkedin: "#",
  },
  {
    name: "Sabya Sachi Paira",
    title: "COO",
    description:
      "Overseeing daily operations, managing team performance, and driving company objectives.",

    image: "/teamMember/sabya.png", // Replace with actual image path

    linkedin: "#",
  },
];

const OurTeam = () => {
  return (

    <div className="flex flex-col md:flex-row justify-between py-12 px-20 m-auto bg-[url('/bgimg/teambg.png')]  bg-contain  bg-no-repeat ">
      {/* Left Section (Text) */}
      <div className="max-w-full md:max-w-xl w-full md:w-[60%] flex flex-col justify-center items-start mb-3 md:mb-0 mt-[-60px]">
        <h2 className="text-[#FF9D00] text-[36px] font-semibold mb-2 font-poppins">
          OUR TEAM
        </h2>
        <p className="leading-2 py-2 text-[#546E7A] text-[18px] font-poppins max-w-96">

          Clarity delivers components for professional SaaS websites, landing
          pages, or admin panels with Cybersecurity expertise.
        </p>
        {/* <Link to="/team">
          <p className="text-blue-600 font-medium">
            View all members
            <span className="ml-2">→</span>
          </p>
        </Link> */}
      </div>

      {/* Right Section (Team Cards) */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-between items-center w-full md:w-[50%]">
        <Swiper
          loop={true}
          autoplay={{
            delay: 0, // Set to 0 to continuously slide
            disableOnInteraction: false,
          }}
          speed={10000} // Adjust the speed to control smoothness
          // centeredSlides={true}
          // spaceBetween={50} // Increase space between the cards
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2, // Decrease slides per view for more width
              spaceBetween: -20, // More space between cards
            },
            1280: {
              slidesPerView: 2, // Adjust to 2 slides to make them wider
              spaceBetween: -120, // Increase space between slides
            },
          }}
          modules={[Autoplay]}
          // className="mySwiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className=" rounded-lg p-4 w-[350px]  mx-auto bg-white text-center shadow-lg ">
                <img
                  src={member.image}
                  alt={member.name}
                  className=" rounded-full mb-1 max-h[50px] min-h[20px] object-cover bg-red p-5"
                />
                <h3 className="text-lg font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-yellow-500 mb-2 items-center">
                  {member.title}
                </p>
                <p className="text-gray-600 font-sans">{member.description}</p>
                <div className="flex justify-center items-center mt-2">
                  <div className="flex justify-evenly w-[100px]">
                    <a
                      href={member.linkedin}
                      className="text-blue-500 hover:text-blue-700 mx-2"
                    >
                      <FaLinkedin size={20} color="gray" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="text-blue-500 hover:text-blue-700 mx-2"
                    >
                      <FaTwitter size={20} color="gray" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>

  );
};

export default OurTeam;
