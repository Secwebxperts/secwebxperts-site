import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Mahendra Kumar",
    image: "about/testi/testi1.png", // replace with image path or URL
    text: "SecWebXperts modernized our website, surpassing expectations and significantly boosting client engagement.",
        rating: 4,
  },
  {
    name: "John D",
    image: "about/testi/testi2.png",
    text:"SecWebXperts created a fast, user-friendly e-commerce app with seamless maintenance. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rajesh P",
    image: "about/testi/testi3.png",
    text:"SecWebXperts delivered a robust platform with optimized security. Excellent communication; planning our next project!",
    rating: 5,
  },
  {
    name: "Emily R",
    image: "about/testi/testi4.png",
    text: "SecWebXperts SaaS solution streamlined operations, saving time and money. Highly recommended IT partner!",
        rating: 5,
  },
  // Add more testimonials here
];

const About = () => {

  const settings = {
    infinite: true,
    speed: 8000,
    slidesToShow: 3, // Show 4 slides on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous scroll
    cssEase: "linear", // Smooth transition
    arrows: false, // No arrows
    pauseOnHover: false, // Keep sliding on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 2 slides on tablets
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile devices
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[url('/about/img1.png')] bg-cover bg-center bg-no-repeat min-h-[300px] mt-[40px] sm:mt-[60px] lg:mt-[80px]">
        <div className="pt-[40px] sm:pt-[60px] lg:pt-[80px] ps-[20px] sm:ps-[60px] lg:ps-[120px]">
          <h2 className="text-[#FF9D00] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-[700] font-poppins">
            ABOUT US
          </h2>
          <p className="text-[14px] sm:text-[16px] font-[500] text-[#1C1C1C] font-poppins">
            We make life better for billions of people, billions of times a day
          </p>
        </div>
      </div>

      <div className="text-center w-[100%] mx-auto leading-[30px] py-20 bg-[#F9F9F9] mt-2 mb-2">
        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-[600] text-[#FF9D00] font-poppins">
          OUR STORY
        </h2>
        <p className="text-[#546E7A] text-[16px] font-[500] p-[40px] text-center font-poppins ml-12 mr-12">
          With the goal of revolutionizing the digital world, SecWebXperts was
          founded eighteen months ago. Sathya founded the business, which first
          offered support for developing mobile and online applications. With an
          enthusiastic staff with backgrounds from Dell, IBM, Deloitte, and
          Samsung, we have grown into a reliable business partner. With a goal
          of providing creative, customized solutions worldwide, our emphasis on
          developing state-of-the-art digital solutions has propelled our growth
          into SaaS development, UI/UX design, and software development.
        </p>
      </div>
      <div  className="bg-[url('/about/img2.png')] bg-cover bg-center bg-no-repeat py-16 min-h-[400px]">
        <div className="container mx-auto px-4 max-w-[1300px]">
          <div className="flex flex-col md:flex-row justify-between items-center min-h-[400px]">
            {/* Left side content */}
            <div id="our-mission" className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="font-[600] text-[#FF9D00] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] mb-4 font-poppins">
                OUR MISSION
              </h2>
              <p className="text-[#546E7A] text-[16px] max-w-[400px] mb-8 font-poppins">
                At Secwebxperts, our mission is to provide innovative, reliable,
                and comprehensive IT solutions.
              </p>
            </div>

            {/* Right side grid with white dividing lines */}
            <div className="w-full md:w-2/5 relative">
              <div className="grid grid-cols-2 gap-6 relative">
                {/* Vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white"></div>
                {/* Horizontal line */}
                <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white"></div>

                {/* Item 1 */}
                <div className="flex items-center max-w-52 justify-around">
                  <img
                    src="/about/icons/mission1.png"
                    alt="Development Icon"
                    className="mb-4"
                  />
                  <p className="text-center text-[#546E7A] font-[700] text-[16px] font-poppins">
                    Continual Development And Innovation
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex items-center max-w-52 justify-around">
                  <img
                    src="/about/icons/mission2.png"
                    alt="Counselling Icon"
                    className="mb-4"
                  />
                  <p className="text-center text-[#546E7A] font-[700] text-[16px] font-poppins">
                    Professional Counselling
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex items-center max-w-52 justify-around">
                  <img
                    src="/about/icons/mission3.png"
                    alt="Cooperation Icon"
                    className="mb-4"
                  />
                  <p className="text-center text-[#546E7A] font-[700] text-[16px] font-poppins">
                    Customer-Oriented Cooperation
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex items-center max-w-52 justify-around">
                  <img
                    src="/about/icons/mission4.png"
                    alt="Quality Icon"
                    className="mb-4"
                  />
                  <p className="text-center text-[#546E7A] font-[700] text-[16px] font-poppins">
                    Best Quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-7 bg-[url('/about/img3.png')] bg-cover bg-center bg-no-repeat py-16 min-h-[400px]">
        <div className="container mx-auto px-4 max-w-[1300px]">
          <div className="flex flex-col md:flex-row justify-center items-center min-h-[400px]">
            {/* Left side content */}
            <div className="w-full md:w-1/2 relative">
              <div className="grid grid-cols-2 gap-6 relative">
                {/* Vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white"></div>
                {/* Horizontal line */}
                <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white"></div>

                {/* Item 1 */}
                <div className="flex items-center max-w-52 justify-around">
                  <img
                    src="/about/icons/vision1.png"
                    alt="Development Icon"
                    className="mb-4"
                  />
                  <p className="text-center text-[#546E7A] font-[700] text-[16px] font-poppins">
                    Defining and Communicating the Vision
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex items-center max-w-52 justify-around">
                  <img
                    src="/about/icons/vision2.png"
                    alt="Counselling Icon"
                    className="mb-4"
                  />
                  <p className="text-center text-[#546E7A] font-[700] text-[16px] font-poppins">
                    Strategic Thinking and Long-Term Planning
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex items-center max-w-52 justify-around">
                  <img
                    src="/about/icons/vision3.png"
                    alt="Cooperation Icon"
                    className="mb-4"
                  />
                  <p className="text-center text-[#546E7A] font-[700] text-[16px] font-poppins">
                    Decision-Making and Prioritization{" "}
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex items-center max-w-52 justify-around">
                  <img
                    src="/about/icons/vision4.png"
                    alt="Quality Icon"
                    className="mb-4"
                  />
                  <p className="text-center text-[#546E7A] font-[700] text-[16px] font-poppins">
                    Adaptation and Flexibility
                  </p>
                </div>
              </div>
            </div>

            {/* Right side content */}
            <div id="our-vission" className="w-full md:w-1/2 max-w-[400px] text-center md:text-left">
              <h2 className="font-[600] text-[#FF9D00] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] mb-4 font-poppins">
                OUR VISION
              </h2>
              <p className="text-[#546E7A] text-[16px] mb-8 font-poppins">
                At Secwebxperts, our vision is to become the top provider of
                comprehensive IT solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-[100%] mx-auto bg-[#F9F9F9]">
      <div className="testimonial-slider max-w-[1100px] mx-auto ">
        <h2 className="text-center font-[600] text-[#FF9D00] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[40px] mb-8 font-poppins">
          TESTIMONIAL
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="h-auto w-full md:max-w-[300px] lg:max-w-[350px] mb-8 mx-auto"
              // Add responsive margins for different screen sizes
              style={{ marginRight: "5px", marginLeft: "5px" }} // Small space for desktop view
            >
              <div className="border-2 border-[#007bff] rounded-lg p-4 text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto rounded-full w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] mb-4"
                />
                <h3 className="text-base sm:text-lg font-semibold">
                  {testimonial.name}
                </h3>
                <div className="flex justify-center my-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-blue-500">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </div>
    </>
  );
};

export default About;
