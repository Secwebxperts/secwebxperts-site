/* eslint-disable react/prop-types */
import { FaLinkedin } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const TeamCards = ({ img, name, position, description, profileLink }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 text-center items-center mt-6 mx-5">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src={img}
          alt={name}
          className="w-24 h-24 rounded-full border-1 border-gray-300"
        />
      </div>

      {/* Name and Title */}
      <h2 className="text-xl font-[600] font-poppins text-[#000000]">{name}</h2>
      <p className="text-[#FF9D00] font-[400] font-poppins">{position}</p>

      {/* Description */}
      <p className="mt-4 text-[#546E7A] font-poppins font-[400]">
        {description}
      </p>

      {/* LinkedIn Icon */}
      <div className="mt-4 items-center justify-center flex">
        <a
          href={profileLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};
const TeamCard = ({ img, name, position, description, profileLink }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 text-center items-center mt-6 mx-5">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src={img}
          alt={name}
          className="w-26 h-26 rounded-full border-1 border-gray-300"
        />
      </div>

      {/* Name and Title */}
      <h2 className="text-xl font-[600] font-poppins text-[#000000]">{name}</h2>
      <p className="text-[#FF9D00] font-[400] font-poppins">{position}</p>

      {/* Description */}
      <p className="mt-4 text-[#546E7A] font-poppins font-[400]">
        {description}
      </p>

      {/* LinkedIn Icon */}
      <div className="mt-4 items-center justify-center flex">
        {/* <a
          href={profileLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <FaLinkedin size={30} />
        </a> */}
      </div>
    </div>
  );
};
// Custom Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#FF9D00",
        fontSize: "24px",
        zIndex: 1,
        marginRight: "20px",
        borderRadius: "10px",
      }}
      onClick={onClick}
    >
      ▶
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#FF9D00",
        fontSize: "24px",
        zIndex: 1,
        borderRadius: "10px",
        marginLeft: "20px",
      }}
      onClick={onClick}
    >
      ◀
    </div>
  );
};

const OurFullTeam = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the slides infinitely
    speed: 500, // Animation speed (in ms)
    slidesToShow: 4, // Show 4 slides at once (default)
    slidesToScroll: 1, // Slide one card at a time
    autoplay: false, // Disable autoplay
    arrows: true, // Enable arrows
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom prev arrow

    responsive: [
      {
        breakpoint: 1024, // Below 1024px width (large tablets, small desktops)
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Below 768px width (tablets)
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Below 480px width (mobile phones)
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
          dots: true,
          arrows: false, // Hide arrows on small screens (optional)
        },
      },
    ],
  };

  return (
    <>
      {/* Intro Section */}
      <div className="flex flex-col items-center justify-center py-36 bg-[url('/BG_color.png')] bg-cover bg-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] font-[700] leading-tight text-[#FF9D00] font-poppins text-center">
          We Bring A Wealth Of Skills And Experience
          <br /> From A Wide Range Of Backgrounds
        </h3>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-[#1C1C1C] font-[500] text-center max-w-2xl mx-auto">
          Our philosophy is simple: hire great people and give them the
          resources and support to do their best work.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1  gap-8 justify-items-center px-4 md:px-8 lg:px-16">
        {/* director */}
        <div className="items-center justify-center flex flex-col lg:flex-row">
          <TeamCards
            img={"/teamMember/hem_ch.png"}
            name={"Hem Chandra Paira"}
            description={"With 40 years in construction, expertise in leading teams, fostering excellence, innovation, and mentorship." }
            position={"Founder and Director"}
            profileLink={
              "https://www.linkedin.com/in/hem-chandra-paira-aa3526326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
          />
        </div>
        {/* ceo coo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <TeamCards
            img={"/teamMember/ceo.png"}
            name={"Sathya Sachi Paira"}
            description={
              "Leading the team, making strategic decisions, driving growth, and ensuring operational success."
            }
            position={"CEO"}
            profileLink={
              "https://www.linkedin.com/in/sathya-sachi-paira32281178/"
            }
          />

          <TeamCards
            img={"/teamMember/sabya.png"}
            name={"Sabhya Sachi Paira"}
            description={
              "Oversees daily operations, ensures efficiency, implements strategies, and drives operational to support growth and company goals."
            }
            position={"Co-Founder and COO"}
            profileLink={
              "https://www.linkedin.com/in/sabhya-sachi-paira-8229a8325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
          />
        </div>
        {/* buissness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <TeamCard
            img={"/teamMember/sales/img1.png"}
            name={"Aditi Jaiswal"}
            description={
              "Focuses on generating new business opportunities by identifying and qualifying leads for the sales team."
            }
            position={"Business Development Representative"}
            profileLink={"https://www.linkedin.com/in/aditi-jaiswal-5129aa15"}
          />

          <TeamCard
            img={"/teamMember/sales/img2.png"}
            name={"Samara roy"}
            description={
              "Focuses on generating new business opportunities by identifying and qualifying leads for the sales team."
            }
            position={"Business Development Representative"}
            profileLink={""}
          />
          <TeamCard
            img={"/teamMember/digital/img1.png"}
            name={"Jyoti kumari"}
            description={
              "Target outlines online business presence, audience, strategies, and competitive analysis."
            }
            position={"Senior Digital Marketer"}
            profileLink={""}
          />
        </div>
        {/* uixu */}

        <div className="w-[100%] mx-auto max-w-[1500px]">
          <h2 className="text-center text-[#FF9D00] font-[600] text-[36px]">

            UI/UX DESIGNER
          </h2>
          <Slider {...settings}>
            <TeamCard
              img={"/teamMember/uiux/img1.png"}
              name={"Jahan Ara"}
              
              position={"Senior UI/UX Designer"}
              
            />
            <TeamCard
              img={"/teamMember/uiux/img2.png"}
              name={"Satvik Singh"}
             
              position={"UI/UX Designer"}
              
            />
            <TeamCard
              img={"/teamMember/uiux/img3.png"}
              name={"Minha Mishra"}
             
              position={"UI/UX Designer(Intern)"}
              
            />
            <TeamCard
              img={"/teamMember/uiux/img4.png"}
              name={"Riya Agarwal"}
              
              position={"UI/UX Designer"}
              
            />
            <TeamCard
              img={"/teamMember/uiux/img5.png"}
              name={"Vinay Kumar"}
              
              position={"UI/UX Designer(Intern)"}
              
            />
            <TeamCard
              img={"/teamMember/uiux/img6.png"}
              name={"Ananya Panday"}
              
              position={"UI/UX Designer"}
              
            />
            <TeamCard
              img={"/teamMember/uiux/img7.png"}
              name={"Sweety Sharma"}
              
              position={"UI/UX Designer(Intern)"}
              
            />
            <TeamCard
              img={"/teamMember/uiux/img8.png"}
              name={"Sonu Singh"}
              
              position={"UI/UX Designer(Intern)"}
              
            />
          </Slider>
        </div>
        {/* web */}

        <div className="w-[100%] mx-auto max-w-[1500px]">
          <h2 className="text-center text-[#FF9D00] font-[600] text-[36px]">

            WEBSITE DEVELOPER
          </h2>
          <Slider {...settings}>
            <TeamCard
              img={"/teamMember/web/img1.png"}
              name={"Pinaki Sasmal"}
              
              position={"Senior FullStack Developer"}
             
            />
            <TeamCard
              img={"/teamMember/web/img2.png"}
              name={"Sudipta Ghorami"}
              
              position={"FullStack Developer(Intern)"}
              
            />
            <TeamCard
              img={"/teamMember/web/img3.png"}
              name={"Sony Kumari"}
              
              position={"Frontend Developer"}
              
            />
            <TeamCard
              img={"/teamMember/web/img4.png"}
              name={"Sumit Kumar"}
              
              position={"FullStack Develop"}
             
            />
            <TeamCard
              img={"/teamMember/web/img5.png"}
              name={"Shomit Chatterjee"}
             
              position={"Backend Developer"}
              
            />
            <TeamCard
              img={"/teamMember/web/img6.png"}
              name={"Vicky Kumar"}
              
              position={"Frontend Developer"}
              
            />
            <TeamCard
              img={"/teamMember/web/img7.png"}
              name={"Sushmita Sengupta"}
              
              position={"Backend Developer(Intern)"}
              
            />
            <TeamCard
              img={"/teamMember/web/img8.png"}
              name={"Sneha Adhikari"}
              
              position={"FullStack Developer(Intern)"}
              
            />
            <TeamCard
              img={"/teamMember/web/img9.png"}
              name={"Menka Singh"}
              
              position={"FullStack Developer"}
              
            />
          </Slider>
        </div>

        {/* app */}

        <div className="w-[100%] mx-auto max-w-[1500px]">
          <h2 className="text-center text-[#FF9D00] font-[600] text-[36px]">

            MOBILE APP DEVELOPER
          </h2>
          <Slider {...settings}>
            {/* <TeamCard
              img={"/teamMember/mobile/img1.png"}
              name={"Amit Prajapati"}
              
              position={"Mobile App Developer"}
              profileLink={
                ""
              }
            /> */}
            <TeamCard
              img={"/teamMember/mobile/img2.png"}
              name={"Vishal Kumar"}
              
              position={"Mobile App Developer"}
              profileLink={
                ""
              }
            />
            <TeamCard
              img={"/teamMember/mobile/img3.png"}
              name={"Shashi Rana"}
              
              position={"Mobile App Developer"}
              profileLink={
                ""
              }
            />
            <TeamCard
              img={"/teamMember/mobile/img4.png"}
              name={"Rohit Singh"}
              
              position={"Mobile App Developer"}
              profileLink={
                ""
              }
            />
            <TeamCard
              img={"/teamMember/mobile/img5.png"}
              name={"Arjun Singh"}
             
              position={"Senior Mobile App Developer"}
              profileLink={
                ""
              }
            />
            <TeamCard
              img={"/teamMember/mobile/img6.png"}
              name={"Dhruv Varma"}
              
              position={"Mobile App Developer"}
              profileLink={
                ""
              }
            />
            <TeamCard
              img={"/teamMember/mobile/img7.png"}
              name={"Kabir Singh"}
              
              position={"Mobile App Developer"}
              profileLink={
                ""
              }
            />
            <TeamCard
              img={"/teamMember/mobile/img8.png"}
              name={"Viraj Yadav"}
              
              position={"Mobile App Developer(Intern)"}
              profileLink={
                ""
              }
            />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default OurFullTeam;
