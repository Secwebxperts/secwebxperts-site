import {
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaStopwatch,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] text-black py-10 bg-[url('/Vector.jpg')]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start px-6 md:px-0">
        {/* Logo and Description */}
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <img
              src="/logo.png"
              alt="SecWebxperts"
              className="h-10 mr-3"
            />
            <h2 className="text-2xl font-bold">
              Sec <span className="text-black">Webxperts</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-72">
            Secwebxperts provides top-tier IT solutions, specializing in
            development and cyber security, ensuring comprehensive protection
            and innovation for clients.
          </p>
        </div>

        {/* Services Links */}
        <div className="mb-8 md:mb-0">
          <h3 className="font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Cyber Security</li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="mb-8 md:mb-0">
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Teams</li>
            <li>Our Services</li>
            <li>Portfolio</li>
            <li>Projects</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-8 md:mb-0">
          <div>
            <div className="flex">
              <img src="/adthe.png" className="mr-2 h-6 w-6 mt-1" />
              <h3 className="font-semibold mb-3">Customer Help Email</h3>
            </div>
            <p className="flex items-center mb-2 px-8">info@secwebxperts.com</p>
          </div>
          <div>
            <div className="flex">
              {" "}
              <img src="/call.png" className="mr-2 h-6 w-6 mt-1"/>
              <h3 className="font-semibold mb-3">Customer Help Number</h3>
            </div>
            <p className="flex items-center mb-2 px-8">+91 7001008582</p>
          </div>
          <div>
            <div className="flex">
            <img src="/action.png" className="mr-2 h-6 w-6 mt-1" />
            <h3 className="font-semibold mb-3">Office Hours</h3>
            </div>
            <p className="flex items-center mb-2 px-8">
              Mon - Fri (10am - 7pm) & Sat Half <br />
              Sunday - Closed
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t-2 border-gray-500 mt-6 pt-6">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} by Secwebxperts. All Rights
            Reserved
          </p>
          <div className="flex space-x-4">
            <FaLinkedin size={30} />
           <img src="/Vector (1).png" className="h-[28px] w-[27px"></img>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
