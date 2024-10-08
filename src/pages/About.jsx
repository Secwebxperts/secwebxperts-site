import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const testimonials = [
  {
    name: "Sanjay Sharma",
    image: "about/testi/img1.png", // replace with image path or URL
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 5,
  },
  {
    name: "Ankit Pandey",
    image: "about/testi/img2.png",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since.",
    rating: 5,
  },
  {
    name: "Pawan Gupta",
    image: "about/testi/img3.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 5,
  },
  {
    name: "Pawan Gupta",
    image: "about/testi/img3.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 5,
  },
  // Add more testimonials here
];

const About = () => {
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
    <>
      <div className="bg-[url('about/img1.png')] bg-cover bg-center bg-no-repeat min-h-[300px] mt-[80px]">
        <div className="pt-[80px] ps-[120px]">
          <h2 className="text-[#FF9D00] text-[50px] font-[700]">ABOUT US</h2>
          <p className="text-[16px] font-[500] text-[#1C1C1C]">
            We make life better for billions of people, billions of times a day
          </p>
        </div>
      </div>
      <div className="text-center max-w-[1300px] mx-auto leading-[30px] py-20">
        <h2 className="text-[36px] font-[600] text-[#FF9D00]">OUR STORY</h2>
        <p className="text-[#546E7A] text-[16px] font-[500] pt-[20px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was the 1960s with the release Letraset
          sheets containing Lor Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
      <div className="bg-[url('about/img2.png')] bg-cover bg-center bg-no-repeat py-16 min-h-[400px]">
        <div className="container mx-auto px-4 max-w-[1300px]">
          <div className="flex flex-col md:flex-row justify-between items-center min-h-[400px]">
            {/* Left side content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="font-[600] text-[#FF9D00] text-[36px] mb-4">
                OUR MISSION
              </h2>
              <p className="text-[#546E7A] text-[16px] max-w-[400px] mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
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
                    src="about/icons/mission1.png"
                    alt="Development Icon"
                    className="mb-4"
                  />
                  <p className="text-center text-[#546E7A] font-[700] text-[16px]">
                    Continual Development And Innovation
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex items-center max-w-52 justify-around">
                  <img
                    src="about/icons/mission2.png"
                    alt="Counselling Icon"
                    className="mb-4"
                  />
                  <p className="text-center text-[#546E7A] font-[700] text-[16px]">
                    Professional Counselling
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex items-center max-w-52 justify-around">
                  <img
                    src="about/icons/mission3.png"
                    alt="Cooperation Icon"
                    className="mb-4"
                  />
                  <p className="text-center text-[#546E7A] font-[700] text-[16px]">
                    Customer-Oriented Cooperation
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex items-center max-w-52 justify-around">
                  <img
                    src="about/icons/mission4.png"
                    alt="Quality Icon"
                    className="mb-4"
                  />
                  <p className="text-center text-[#546E7A] font-[700] text-[16px]">
                    Best Quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 bg-[url('about/img3.png')] bg-cover bg-center bg-no-repeat py-16 min-h-[400px]">
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
                    src="about/icons/vision1.png"
                    alt="Development Icon"
                    className="mb-4"
                  />
                  <p className="text-center text-[#546E7A] font-[700] text-[16px]">
                    Defining and Communicating the Vision
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex items-center max-w-52 justify-around">
                  <img
                    src="about/icons/vision2.png"
                    alt="Counselling Icon"
                    className="mb-4"
                  />
                  <p className="text-center text-[#546E7A] font-[700] text-[16px]">
                    Strategic Thinking and Long-Term Planning
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex items-center max-w-52 justify-around">
                  <img
                    src="about/icons/vision3.png"
                    alt="Cooperation Icon"
                    className="mb-4"
                  />
                  <p className="text-center text-[#546E7A] font-[700] text-[16px]">
                    Decision-Making and Prioritization{" "}
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex items-center max-w-52 justify-around">
                  <img
                    src="about/icons/vision4.png"
                    alt="Quality Icon"
                    className="mb-4"
                  />
                  <p className="text-center text-[#546E7A] font-[700] text-[16px]">
                    Adaptation and Flexibility
                  </p>
                </div>
              </div>
            </div>

            {/* Right side content */}
            <div className="w-full md:w-1/2 max-w-[400px] text-center md:text-left">
              <h2 className="font-[600] text-[#FF9D00] text-[36px] mb-4">
                OUR VISION
              </h2>
              <p className="text-[#546E7A] text-[16px] mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-slider">
        <h2 className="text-center font-[600] text-[#FF9D00] text-[36px] mb-8">
          TESTIMONIAL
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className=" max-h-[350px] max-w-[370px]">
              <div className="border-2 border-[#007bff] rounded-lg p-6 text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto rounded-full w-[100px] h-[100px] mb-4"
                />
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <div className="flex justify-center my-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-blue-500">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default About;
