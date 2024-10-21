import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const teamMembers = [
  {
    name: "Hem Chandra Paira",
    title: "Founder and Director",
    image: "/teamMember/hem_ch.png ", // Replace with actual image path
  },
];

const OurTeam = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const description = `Our story began in the hands-on world of construction, where I have
    learned the value of hard work, precision, and problem-solving. Day
    after day, on busy construction sites, I saw firsthand how
    technology could transform efficiency, safety, and innovation in
    industries traditionally resistant to change. Driven by this vision,
    I made a bold move, shifting from physical structures to building
    digital ones. After years in construction, I have embraced the
    future by founding our IT company, determined to harness the power
    of technology to solve complex problems in any sector. Today, our IT
    solutions help businesses scale, improve operations, and stay ahead
    in an increasingly digital world. Though we’ve moved from blueprints
    to code, the commitment to quality and innovation remains the same.`;

  // Function to show only first 20 words
  const renderShortText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "..." : "");
  };

  const settings = {
    infinite: false,
    speed: 8000,
    slidesToShow: 2, // Shows two slides on larger screens
    slidesToScroll: 1,
    autoplay: false,
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
          <h2 className="text-[#FF9D00] text-[20px] sm:text-[20px] md:text-[25px] font-semibold mb-4 font-poppins py-5">
            A Journey From Construction to Cutting-Edge IT Solutions.
          </h2>

          <p className="leading-relaxed py-2 text-[#546E7A] text-[14px] sm:text-[16px] md:text-[18px] font-poppins">
            {isReadMore ? description : renderShortText(description, 20)}
          </p>

          <button
            className="text-[#2E6DE5] font-poppins"
            onClick={toggleReadMore}
          >
            {isReadMore ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* Right Section (Team Cards) */}
        <div className="w-full md:w-[50%]">
  <Slider {...settings}>
    {teamMembers.map((member, index) => (
      <div
        className="rounded-lg p-4 mx-auto bg-white text-center shadow-lg max-w-[270px] mb-5 ml-8 mt-8 bordered-gray-500"
        style={{
          boxShadow: '0 20px 20px rgba(150, 128, 128, 1.5), 0 -20px 20px rgba(150, 128, 128, 1.5)', // Shadow on all sides with a top shadow
        }}
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
      </div>
    ))}
  </Slider>
</div>





      </div>
    </div>
  );
};

export default OurTeam;
