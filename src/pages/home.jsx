import About from "../components/About";
import Achievements from "../components/Achievement/Achievement";
import Carousal3 from "../components/Carousal3";
import Herosection from "../components/HeroSection";
import OurTeam from "../components/OurTeam";
import ServiceSection from "../components/Services";

const Home = () => {
  return (
    <div className="justify-center align-center">
      <Herosection />
      <About />
      <OurTeam />
      <ServiceSection />
      <Carousal3 />
      <Achievements />
    </div>
  );
};

export default Home;
