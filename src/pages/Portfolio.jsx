const portfolioItems = [
  {
    id: 1,
    image: "portfolio/img1.png", // You can replace with actual image URLs
    title: "BOOKPOINT",
    description:
      "Book point is an online haven for book lovers to explore genres, share reviews, and connect with fellow readers.",
  },
  {
    id: 2,
    image: "portfolio/img2.png",
    title: "INSTANT BEAUTY",
    description:
      "Instant Beauty is a platform for quick beauty solutions and products, helping users enhance their look effortlessly.",
  },
  {
    id: 3,
    image: "portfolio/img3.png",
    title: "HEALTHY TEA",
    description:
      "Healthy Tea is an online store offering a variety of wellness teas designed to promote health and overall well-being.",
  },
  {
    id: 4,
    image: "portfolio/img4.png",
    title: "FLEXEXES",
    description:
      "Flexexes is a platform for flexible exercise solutions, offering workout plans and fitness resources for all levels.",
  },
  {
    id: 5,
    image: "portfolio/img5.png",
    title: "BYTEBUCKS",
    description:
      "Bytebucks is a platform that rewards users for engaging with technology and tech-related content.",
  },
];
const Portfolio = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-36 bg-[url('/BG_color.png')] bg-cover bg-center">
        <h1 className="text-2xl md:text-[50px] font-[700] leading-[58.59px] text-[#FF9D00] font-poppins text-center">
          Portfolio
        </h1>
        <p className="mt-4 text-[16px] text-[#1C1C1C] font-[500] text-center max-w-3xl mx-auto">
          portfolio is a well-organized collection of your best work,
          demonstrating your skills, expertise, and accomplishments to potential
          employers or clients.
        </p>
      </div>

      <div className="container py-12 max-w-[1250px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-6 h-[400px] w-[340px]"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto max-w-xs"
                />
              </div>
              <h3 className="text-[24px] font-[700] text-center mb-2 text-[#1C1C1C] ">
                {item.title}
              </h3>
              <p className="text-[#546E7A] text-center text-[14px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
