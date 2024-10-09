import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 2, // Increase this to show more cards
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // For continuous scroll
    cssEase: "linear", // Smooth transition
    arrows: false, // Remove arrows
    pauseOnHover: false, // Keep sliding on hover
    // Add custom responsive settings if needed
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Change for medium screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Change for small screens
        },
      },
    ],
  };
  return (
    <div className="bg-[url('/bgimg/teambg.png')]  bg-contain  bg-no-repeat">
      <div className="flex flex-col md:flex-row justify-between py-12 px-20 m-auto  max-w-[1300px]">
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
        <div className="w-full md:w-[50%]">
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div
                className=" rounded-lg p-4 max-w-[270px]  mx-auto bg-white text-center shadow-lg min-h-[460px]"
                key={index}
              >
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
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
