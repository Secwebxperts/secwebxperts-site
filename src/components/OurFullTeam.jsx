/* eslint-disable react/prop-types */
const EmployeeCard = ({ image, name, title, description, linkedin }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs mx-auto">
      <img
        src={image}
        alt={name}
        className="mx-auto rounded-full w-24 h-24 mb-4"
      />
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-yellow-500 mb-4">{title}</p>
      <p className="text-gray-600">{description}</p>
      <div className="flex justify-center mt-4">
        {linkedin && (
          <a href={linkedin} className="text-blue-500 hover:underline mx-2">
            <i className="fab fa-linkedin"></i>
          </a>
        )}
      </div>
    </div>
  );
};
const OurTeam = () => {
  const teamMembers = [
    {
      name: "Hem Chandra Paira",
      title: "Director",
      description:
        "Experienced IT leader dedicated to driving innovation and excellence in technology solutions and cybersecurity.",
      image: "teamMember/Director.jpeg", // Replace with actual image path
      linkedin: "#",
    },
    {
      name: "Sathya Sachi Paira",
      title: "CEO",
      description:
        "Leading the team, making strategic decisions, driving growth, and ensuring operational success.",
      image: "teamMember/CEO.jpeg", // Replace with actual image path
      linkedin: "#",
    },
    {
      name: "Sabhya Sachi Paira",
      title: "COO",
      description:
        "Oversees daily operations, ensures efficiency, implements strategies, and drives operational growth.",
      image: "/teamMember/COO.jpeg", // Replace with actual image path
      linkedin: "#",
    },
    {
      name: "R.K Das",
      title: "Cyber Security Analyst",
      description:
        "Protects systems by monitoring, identifying threats, & implementing security measures.",
      image: "/teamMember/rkdas.jpeg", // Replace with actual image path
      linkedin: "#",
    },
    {
      name: "Pinaki Sasmal",
      title: "Full Stack (Jr. Developer)",
      description:
        "Builds & maintains web applications, working with both front-end and back-end technologies.",
      image: "/teamMember/pinaki.jpeg", // Replace with actual image path
      linkedin: "#",
    },
    {
      name: "Ankit Das",
      title: "Mobile App Developer",
      description:
        "Builds and maintains apps for mobile devices, ensuring functionality and performance.",
      image: "src/assets/teamMember/ankitdas.jpeg", // Replace with actual image path
      linkedin: "#",
    },
    {
      name: "Narayan Das",
      title: "UI/UX & Graphic Designer",
      description:
        "Creates visual content, logos, layouts, and marketing materials, ensuring brand consistency.",
      image: "src/assets/teamMember/narayandas.jpeg", // Replace with actual image path
      linkedin: "#",
    },
    {
      name: "Jahan Ara",
      title: "UI/UX Designer",
      description:
        "Creates intuitive, user-friendly designs focused on usability and experience.",
      image: "src/assets/teamMember/jahanara.jpeg", // Replace with actual image path
      linkedin: "#",
    },
    {
      name: "Sudipta Ghorami",
      title: "Web Developer (Intern)",
      description:
        "Building & maintaining websites, handling both front-end and back-end tasks, and supporting the development team.",
      image: "src/assets/teamMember/sudiptaghorami.jpeg", // Replace with actual image path
      linkedin: "#",
    },
    {
      name: "Samiksha Manohar",
      title: "Sr Sales Representative",
      description:
        "Drives revenue by acquiring new clients, managing relationships, and meeting sales targets.",
      image: "src/assets/teamMember/samikshamanohar.jpeg", // Replace with actual image path
      linkedin: "#",
    },
    {
      name: "Suvigya Sinha",
      title: "Jr Sales Representative",
      description:
        "Generates revenue by pursuing leads, closing deals, and maintaining client relationships.",
      image: "src/assets/teamMember/suvigyasinha.jpeg", // Replace with actual image path
      linkedin: "#",
    },
  ];

  return (
    <div className="bg-white py-16 max-w-[1350px] mx-auto text-center">
      <h2 className="text-5xl font-bold text-yellow-500 mb-8">OUR TEAM</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <EmployeeCard
            key={index}
            name={member.name}
            title={member.title}
            description={member.description}
            image={member.image}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
