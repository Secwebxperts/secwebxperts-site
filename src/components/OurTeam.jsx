import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const teamMembers = [
  {
    name: "Hem Chandra Paira",
    title: "Director",
    description:
      "Experienced IT leader dedicated to driving innovation and excellence in technology solutions and cybersecurity.",
    image: "src/assets/teamMember/Director.jpeg", // Replace with actual image path
    linkedin: "#",
  },
  {
    name: "Sathya Sachi Paira",
    title: "CEO",
    description:
      "Leading the team, making strategic decisions, driving growth, and ensuring operational success.",
    image: "src/assets/teamMember/CEO.jpeg", // Replace with actual image path
    linkedin: "#",
  },
  {
    name: "Sabya Sachi Paira",
    title: "COO",
    description:
      "Overseeing daily operations, managing team performance, and driving company objectives.",
    image: "src/assets/teamMember/COO.jpeg", // Replace with actual image path
    linkedin: "#",
  },
];

const OurTeam = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between py-12 px-2 max-w-[1350px] m-auto bg-[linear-gradient(to_bottom,#2E6DE24D,#FFFFFF)]">
      {/* Left Section (Text) */}
      <div className="max-w-full md:max-w-xl w-full md:w-[60%] flex flex-col justify-center items-start mb-8 md:mb-0">
        <h2 className="text-customYellow text-4xl font-bold mb-4">OUR TEAM</h2>
        <p className="leading-6 py-4 text-gray-600">
          Clarity delivers components for professional SaaS websites, landing
          pages, or admin panels with Cybersecurity expertise.
        </p>
        <Link to="/team">
          <p className="text-blue-600 font-medium">
            View all members
            <span className="ml-2">→</span>
          </p>
        </Link>
      </div>

      {/* Right Section (Team Cards) */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-between items-center w-full md:w-[50%] gap-1">
        <Swiper
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // centeredSlides={true}
          spaceBetween={50} // Increase space between the cards
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
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2, // Decrease slides per view for more width
              spaceBetween: 50, // More space between cards
            },
            1280: {
              slidesPerView: 2, // Adjust to 2 slides to make them wider
              spaceBetween: 60, // Increase space between slides
            },
          }}
          modules={[Autoplay]}
          // className="mySwiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className=" rounded-lg p-4 w-full max-w-[300px] mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto rounded-full mb-1 h-10 object-cover"
                />
                <h3 className="text-lg font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-yellow-500 mb-4">{member.title}</p>
                <p className="text-gray-600 font-sans">{member.description}</p>
                <div className="flex justify-center items-center mt-2">
                  <div className="flex justify-evenly w-[100px]">
                    <a
                      href={member.linkedin}
                      className="text-blue-500 hover:text-blue-700 mx-2"
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a
                      href={member.linkedin}
                      className="text-blue-500 hover:text-blue-700 mx-2"
                    >
                      <FaTwitter size={20} />
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
