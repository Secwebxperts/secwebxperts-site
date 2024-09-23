import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import OurTeam from "./components/OurTeam";
import Home from "./pages/home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="h-auto container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<OurTeam />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
