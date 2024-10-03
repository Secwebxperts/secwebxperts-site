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
              src="/footerLogo.png"
              alt="SecWebxperts"
              className="h-16 mr-3"
            />
          </div>
          <p className="text-[#1C1C1C] leading-relaxed max-w-72 text-[14px] font-poppins">
            Secwebxperts provides top-tier IT solutions, specializing in
            development and cyber security, ensuring comprehensive protection
            and innovation for clients.
          </p>
        </div>

        {/* Services Links */}
        <div className="mb-8 md:mb-0">
          <h3 className="font-poppins text-[22px] mb-3 font-semibold">Our Services</h3>
          <ul className="space-y-2 text-sm ">
            <li className="font-poppins text-[13px]">Web Development</li>
            <li className="font-poppins text-[13px]">Mobile App Development</li>
            <li className="font-poppins text-[13px]">Cyber Security</li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="mb-8 md:mb-0">
          <h3 className="font-semibold mb-3 text-[22px] font-poppins ">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="font-poppins text-[13px]">About Us</li>
            <li className="font-poppins text-[13px]">Our Teams</li>
            <li className="font-poppins text-[13px]">Our Services</li>
            <li className="font-poppins text-[13px]">Portfolio</li>
            <li className="font-poppins text-[13px]">Projects</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-8 md:mb-0">
          <div>
            <div className="flex">
              <img src="/adthe.png" className="mr-2 h-6 w-6 mt-1" />
              <h3 className="font-poppins mb-3 text-[#1C1C1C] text-[13px]">Customer Help Email</h3>
            </div>
            <p className="flex items-center mb-2 px-8 text-[#1C1C1C] text-[18px] font-poppins font-semibold">info@secwebxperts.com</p>
          </div>
          <div>
            <div className="flex">
              {" "}
              <img src="/call.png" className="mr-2 h-6 w-6 mt-1"/>
              <h3 className="font-poppins mb-3 text-[#1C1C1C] text-[13px]">Customer Help Number</h3>
            </div>
            <p className="flex items-center mb-2 px-8 text-[#1C1C1C] text-[18px] font-poppins font-semibold">+91 7001008582</p>
          </div>
          <div>
            <div className="flex">
            <img src="/action.png" className="mr-2 h-6 w-6 mt-1" />
            <h3 className="font-poppins mb-3 text-[#1C1C1C] text-[13px]">Office Hours</h3>
            </div>
            <p className="flex items-center mb-2 px-8 text-[#1C1C1C] text-[18px] font-poppins font-semibold">
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
