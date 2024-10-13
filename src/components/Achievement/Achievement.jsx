import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CVESlideIn from "./Cve";
const Achievements = () => {
  const achievements = [
    { logo: "/achievement/frame 2.png" },
    { logo: "/achievement/frame 1.png" },
    { logo: "/achievement/frame 3.png" },
    { logo: "/achievement/frame 4.png" },
    { logo: "/achievement/frame 5.png" },
  ];
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 4, // Increase this to show more cards
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
          slidesToShow: 1, // Change for small screens
        },
      },
    ],
  };
  return (
    <div className="bg-[url('/bgimg/ach.png')] bg-contain bg-no-repeat">
      <div className=" py-16 mx-auto mt-[-10px] max-w-[1300px]">
      <h3 className="uppercase text-[24px] sm:text-[28px] md:text-[36px] font-[600] font-poppins text-center text-customYellow mb-4">
  Some of our Achievements
</h3>

        <p className="font-poppins text-center text-[#546E7A] mb-10 text-[16px] leading-20 tracking-wider font-[500]">
          Secwebxperts team participated in security responsible programs and{" "}
          <br /> received honors from reputed organizations.
        </p>

        {/* Swiper for sliding cards */}
        <Slider {...settings}>
          {achievements.map((achievement, index) => (
            <div className="items-center py-2" key={index}>
              <img
                src={achievement.logo}
                alt={achievement.name}
                className="h-[150px] w-[400px] object-contain mb-2" // Increase height and width here
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="bg-[url('/bgimg/binary.png')] bg-cover lg:bg-contain bg-no-repeat">
  <div className="flex flex-col lg:flex-row items-center lg:items-start bg-[url('/bgimg/achievement.png')] bg-cover lg:bg-contain bg-no-repeat lg:px-2 max-w-[1300px] mx-auto">
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
      <h2 className="text-customYellow text-[28px] sm:text-[32px] lg:text-4xl font-[600] mb-6 pt-10 px-2 text-center lg:text-left">
        EXPERT IN CYBER SECURITY
      </h2>
      <p className="text-[#546E7A] text-base sm:text-lg max-w-xl px-2 leading-8 text-center lg:text-left">
        Secwebxperts team holds CVEs for finding vulnerabilities in open source
        projects that are published on{" "}
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

    </div>
  );
};

export default Achievements;
