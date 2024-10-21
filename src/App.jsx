import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import OurFullTeam from "./components/OurFullTeam";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ScrollToTop from "./components/ScrollTotop";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import TawkTo from "./components/TawkTo";
import CaseStudy2 from "./pages/case-study/caseStudy2";
import CaseStudy from "./pages/case-study/caseStudy";
import TeamSlider from "./components/Fullteam";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <TawkTo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/full-team" element={<OurFullTeam />} /> */}
          <Route path="/full-team" element={<TeamSlider />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/case-study2" element={<CaseStudy2 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
