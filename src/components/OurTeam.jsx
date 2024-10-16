import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const teamMembers = [
  {
    name: "Hem Chandra Paira",
    title: "Director",
    description: "With 40 years in construction, expertise in leading teams, fostering excellence, innovation, and mentorship.",
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
    name: "Sabhya Sachi Paira",
    title: "COO",
    description: "Oversees operations, ensures efficiency, implements strategies, and drives growth to achieve company goals",
    image: "/teamMember/sabya.png", // Replace with actual image path

    linkedin: "#",
  },
];


const OurTeam = () => {
  const settings = {
    infinite: true,
    speed: 8000,
    slidesToShow: 2, // Shows two slides on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous scroll
    cssEase: "linear", // Smooth transition
    arrows: false, // Remove arrows
    pauseOnHover: true, // Stop scrolling on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Shows 2 cards on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Shows 1 card on tablet-sized screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Shows 1 card on phone screens
        },
      },
    ],
  };

  return (
    <div className="bg-[url('/bgimg/teambg.png')] bg-contain bg-no-repeat">
      <div className="flex flex-col md:flex-row justify-between py-12 px-5 sm:px-10 md:px-20 m-auto max-w-[1300px]">
        {/* Left Section (Text) */}
        <div className="max-w-full md:max-w-xl w-full md:w-[60%] flex flex-col justify-center items-start mb-8 md:mb-0 mt-[-20px] md:mt-[-60px]">
          <h2 className="text-[#FF9D00] text-[24px] sm:text-[28px] md:text-[36px] font-semibold mb-4 font-poppins">
            OUR TEAM
          </h2>
          <p className="leading-relaxed py-2 text-[#546E7A] text-[14px] sm:text-[16px] md:text-[18px] font-poppins">
            Clarity delivers components for professional SaaS websites, landing
            pages, or admin panels with Cybersecurity expertise.
          </p>
          <Link to="/full-team" className="text-[#2E6DE5] font-poppins">
            View all Member →
          </Link>
        </div>

        {/* Right Section (Team Cards) */}
        <div className="w-full md:w-[50%]">
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div
                className="rounded-lg p-4 mx-auto bg-white text-center shadow-lg max-w-[270px]"
                key={index}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full mb-4 max-w-[80px] sm:max-w-[100px] md:max-w-[150px] mx-auto object-cover"
                />
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-[#FF9D00] mb-2">{member.title}</p>
                <p className="text-gray-600 font-sans text-sm sm:text-base">
                  {member.description}
                </p>
                <div className="flex justify-center items-center mt-4">
                  <div className="flex justify-evenly w-[100px]">
                    <a href={member.linkedin} className="text-[#959595] mx-2">
                      <FaLinkedin size={20} />
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

