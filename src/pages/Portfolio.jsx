import { useNavigate } from 'react-router-dom';

const portfolioItems = [
  {
    id: 1,
    image: "portfolio/img6.png",
    title: "HR RECRUITMENT",
    description:
      "It focuses on sourcing, screening, and hiring the right candidates to fill job roles, align with the company's needs and culture.",
    link: '/case-study',
  },
  {
    id: 2,
    image: "portfolio/img7.png",
    title: "SKIN FIRTS",
    description:
      "It emphasizes over makeup, focusing on maintaining healthy, glowing skin through proper care routines, hydration.",
    link: '', // You can leave it empty or add specific links
  },
  {
    id: 3,
    image: "portfolio/img8.png",
    title: "LOREM IPSUM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    link: '',
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-36 bg-[url('/BG_color.png')] bg-cover bg-center">
        <h1 className="text-2xl md:text-[50px] font-[700] leading-[58.59px] text-[#FF9D00] font-poppins text-center">
          Portfolio
        </h1>
        <p className="mt-4 text-[16px] text-[#1C1C1C] font-[500] text-center max-w-3xl mx-auto">
          A portfolio is a well-organized collection of your best work, demonstrating your skills, expertise, and accomplishments to potential employers or clients.
        </p>
      </div>

      <div className="container py-12 max-w-[1250px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-6 h-[400px] w-[340px] cursor-pointer"
              onClick={() => {
                if (item.link) {
                  navigate(item.link);
                }
              }}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto max-w-xs"
                />
              </div>
              <h3 className="text-[24px] font-[700] text-center mb-2 text-[#1C1C1C]">
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
