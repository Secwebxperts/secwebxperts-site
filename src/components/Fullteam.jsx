import { useState } from "react";

const CircleHoverEffect = () => {
  const [activeImage, setActiveImage] = useState(0); //
  const teamMembers = [
    {
      src: "/teamMember/hem_ch2.png",
      name: "Hem Chandra Paira",
      position: "DIRECTOR",
    },
    {
      src: "/teamMember/sabya2.png",
      name: "Sabhya Sachi Paira",
      position: "CHIEF OPERATION OFFICER",
    },
    {
      src: "/teamMember/ceo2.png",
      name: "Sathya Sachi Paira",
      position: "CHIEF EXECUTIVE OFFICER",
    },
  ];
  const TeamCarousalData = [
    // uiux
    {
      heading: "UI/UX DESIGNER",
      title:
        "We Are Creates intuitive, user-friendly designs focused on usability and experience.",
      teamMembers: [
        {
          src: "/OurTeam2/uiux/img1.png",
          position: "Senior Designer",
        },
        {
          src: "/OurTeam2/uiux/img2.png",
        },
        {
          src: "/OurTeam2/uiux/img3.png",
        },
        {
          src: "/OurTeam2/uiux/img4.png",
        },
        {
          src: "/OurTeam2/uiux/img5.png",
        },
      ],
    },
    // web
    {
      heading: "Website Developer",
      title:
        "We Builds & maintains web applications, working with both front-end and back-end technologies.",
      teamMembers: [
        {
          src: "/OurTeam2/web/img1.png",
          position: "Senior Developer",
        },
        {
          src: "/OurTeam2/web/img2.png",
        },
        {
          src: "/OurTeam2/web/img3.png",
        },
        {
          src: "/OurTeam2/web/img4.png",
        },
        {
          src: "/OurTeam2/web/img5.png",
        },
      ],
    },
    // mobile
    {
      heading: "Mobile app Developer",
      title:
        "We developed apps for smartphones and tablets using languages like Swift, Kotlin, or cross-platform tools.",
      teamMembers: [
        {
          src: "/OurTeam2/mobile/img1.png",
          position: "Senior Developer",
        },
        {
          src: "/OurTeam2/mobile/img2.png",
        },
        {
          src: "/OurTeam2/mobile/img3.png",
        },
        {
          src: "/OurTeam2/mobile/img4.png",
        },
        {
          src: "/OurTeam2/mobile/img5.png",
        },
      ],
    },
    // sales
    {
      heading: "Business development representative",
      title:
        "We identifies and engages potential clients to generate leads and create new business opportunities.",
      teamMembers: [
        {
          src: "/OurTeam2/sales/img1.png",
          position: "Senior Designer",
        },
        {
          src: "/OurTeam2/sales/img2.png",
        },
        {
          src: "/OurTeam2/sales/img3.png",
        },
        {
          src: "/OurTeam2/sales/img4.png",
        },
        {
          src: "/OurTeam2/sales/img5.png",
        },
      ],
    },
  ];
  return (
    <>
      <div className="bg-[url('/BG_color.png')] bg-cover bg-center">
        <div className="flex flex-col md:flex-row items-center justify-between py-36 max-w-[1300px] mx-auto">
          <div className="w-4/12">
            <h2 className="text-[#FF9D00] text-[50px] font-[700]">
              Meet Our Team
            </h2>
            <p className="text-[#1C1C1C] text-[16px] font-[500]">
              Our Team is a dynamic group of professionals working in the tech
              industry. Our Philosophy is simple; hire great people and give
              them the resources and support to do their best work. We
              Collaborate closely to drive innovations and deliver quality
              solution
            </p>
          </div>

          <div className="w-7/12 flex">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`relative transition-all duration-300 ease-in-out cursor-pointer ${
                  activeImage === index ? "w-6/12" : "w-3/12"
                }`} // Adjust width based on active image
                onClick={() => setActiveImage(index)} // Set clicked image as active
              >
                <img
                  src={member.src}
                  alt={member.name}
                  className="w-full h-full"
                />

                {/* Name overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gray-200 bg-opacity-50 text-white  p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-[16px] font-[500]">
                    {member.position}
                  </p>
                  <h2 className="text-black text-[24px] font-[700]">
                    {member.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {TeamCarousalData.map((data, index) => (
        <TeamCarousal
          key={index}
          heading={data.heading}
          title={data.title}
          images={data.teamMembers}
        />
      ))}
    </>
  );
};

const TeamCarousal = ({ heading, title, images }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="bg-[url('/teamMember/bg.png')] bg-no-repeat bg-center">
      <div className="my-10 py-6">
        <div className="text-center">
          <h2 className="text-[#FF9D00] text-[36px] font-[600] font-poppins">
            {heading}
          </h2>
          <p className="text-[#546E7A] text-[20px] font-[400]">{title}</p>
        </div>
        <div className="flex justify-center items-center my-10">
          <div className="relative flex justify-center items-center">
            {/* Left Outer Circle (Smaller Circle) */}
            <div
              className={`absolute left-[-10px] transition-all duration-700 ease-in-out delay-100 ${
                hover
                  ? "opacity-100 translate-x-[-400px]"
                  : "opacity-0 translate-x-0"
              }`}
            >
              <div className="w-40 h-40 rounded-full  flex items-center justify-center overflow-hidden relative">
                {" "}
                {/* Increased size */}
                <img
                  src={images[2].src}
                  alt="Junior Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Left Main Circle (Moves from right to left) */}
            <div
              className={`absolute left-[-70px] transition-all duration-700 ease-in-out delay-150 ${
                hover
                  ? "opacity-100 translate-x-[-150px]"
                  : "opacity-0 translate-x-0"
              }`}
            >
              <div className="w-48 h-4w-48 rounded-full  flex items-center justify-center overflow-hidden relative">
                {" "}
                {/* Increased size */}
                <img
                  src={images[1].src}
                  alt="Intern Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Middle Circle (Larger size and clearer visibility) */}
            <div
              className="w-60 h-60 rounded-full  flex items-center justify-center cursor-pointer z-50 overflow-hidden relative" // Increased size here
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <img
                src={images[0].src}
                alt="Senior Developer"
                className="w-full h-full object-cover rounded-full"
              />
              {/* Gray Overlay */}
              <div
                className={`absolute inset-0 bg-gray-500 transition-opacity duration-500 ease-in-out ${
                  hover ? "opacity-30" : "opacity-0" // Reduced opacity for clearer visibility
                }`}
              />
              <span
                className={`text-[20px] font-[600] absolute bottom-[35px] text-center text-white transition-opacity duration-500 ease-in-out ${
                  hover ? "opacity-100" : "opacity-0"
                }`}
              >
                {images[0].position}
              </span>
            </div>

            {/* Right Main Circle (Moves from left to right) */}
            <div
              className={`absolute right-[-70px] transition-all duration-700 ease-in-out delay-150 ${
                hover
                  ? "opacity-100 translate-x-[150px]"
                  : "opacity-0 translate-x-0"
              }`}
            >
              <div className="w-48 h-48 rounded-full  flex items-center justify-center overflow-hidden relative">
                {" "}
                {/* Increased size */}
                <img
                  src={images[3].src}
                  alt="Junior Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Right Outer Circle (Smaller Circle) */}
            <div
              className={`absolute right-[-110px] transition-all duration-700 ease-in-out delay-100 ${
                hover
                  ? "opacity-100 translate-x-[300px]"
                  : "opacity-0 translate-x-0"
              }`}
            >
              <div className="w-40 h-40 rounded-full  flex items-center justify-center overflow-hidden relative">
                {" "}
                {/* Increased size */}
                <img
                  src={images[4].src}
                  alt="Junior Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleHoverEffect;
