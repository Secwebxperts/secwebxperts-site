import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import OurTeam from "./components/OurTeam";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="h-auto containers">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
