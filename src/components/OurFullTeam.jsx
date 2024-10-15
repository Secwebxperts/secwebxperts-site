import { FaLinkedin } from "react-icons/fa";

const TeamCard = ({ img, name, position, description, profileLink }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 text-center items-center mt-6">
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

const OurFullTeam = () => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 justify-items-center px-4 md:px-8 lg:px-16">
        <div className="items-center justify-center flex flex-col lg:flex-row">
          <TeamCard
            img={"/teamMember/hem_ch.png"}
            name={"Hem Chandra Paira"}
            description={
              "With four decades of hands-on experience in the Construction Industry, which had developed a deep expertise in managing teams which has been defined by a commitment to excellence, innovation, and mentorship, enabling teams to achieve exceptional results."
            }
            position={"Director"}
            profileLink={
              "https://www.linkedin.com/in/hem-chandra-paira-aa3526326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <TeamCard
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

          <TeamCard
            img={"/teamMember/sabya.png"}
            name={"Sabhya Sachi Paira"}
            description={
              "Oversees daily operations, ensures efficiency, implements strategies, and drives operational to support growth and company goals."
            }
            position={"COO"}
            profileLink={
              "https://www.linkedin.com/in/sabhya-sachi-paira-8229a8325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

            }
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 ">
          <TeamCard
            img={"/teamMember/Aditi-jaiswal.png"}
            name={"Aditi Jaiswal"}
            description={
              "Focuses on generating new business opportunities by identifying and qualifying leads for the sales team."
            }
            position={"Business Development Representative"}
            profileLink={"https://www.linkedin.com/in/aditi-jaiswal-5129aa15"}
          />
          {/* <TeamCard
            img={"/teamMember/sachin.png"}
            name={"Sachin Subhashrao Aghao"}
            description={
              "Focuses on generating new business opportunities by identifying and qualifying leads for the sales team."
            }
            position={"Business Development Representative"}
            profileLink={"https://www.linkedin.com/in/sachin-aghao-ba991619"}
          /> */}
          <TeamCard
            img={"/teamMember/jahan.png"}
            name={"Jahan Ara"}
            description={
              "Creates intuitive, user-friendly designs focused on usability and experience."
            }
            position={"UI/UX Designer"}
            profileLink={"https://www.linkedin.com/in/jahan-ara-7a293a214/"}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 pb-32">
          {/* <TeamCard
            img={"/teamMember/jahan.png"}
            name={"Jahan Ara"}
            description={
              "Creates intuitive, user-friendly designs focused on usability and experience."
            }
            position={"UI/UX Designer"}
            profileLink={"https://www.linkedin.com/in/jahan-ara-7a293a214/"}
          /> */}
          <TeamCard
            img={"/teamMember/pinaki.png"}
            name={"Pinaki Sasmal"}
            description={
              "Builds & maintains web applications, working with both front-end and back-end technologies."
            }
            position={"Full Stack (Jr. Developer)"}
            profileLink={
              "https://www.linkedin.com/in/pinaki-sasmal/?trk=public-profile-join-page"
            }
          />
          <TeamCard
            img={"/teamMember/sudipta.png"}
            name={"Sudipta Ghorami"}
            description={
              "Building & maintaining websites, handling both front-end and back-end tasks, & supporting the development team."
            }
            position={"Web Developer (Intern)"}
            profileLink={
              "https://www.linkedin.com/in/sudipta-ghorami-261a81292/"
            }
          />
        </div>
      </div>
    </>
  );
};

export default OurFullTeam;
