import About from "../components/About";
import Achievements from "../components/Achievement/Achievement";
import Herosection from "../components/HeroSection";
import OurTeam from "../components/OurTeam";
import Carousel from "../components/portfolioComponent/Portfolio";
import ServiceSection from "../components/Services";

const Home = () => {
  return (
    <div className="justify-center align-center">
      <Herosection />
      <About />
      <OurTeam />
      <ServiceSection />
      {/* <Carousel /> */}
      <Achievements />
    </div>
  );
};

export default Home;
