import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current location

  const isActive = (path) => location.pathname === path; // Helper to check active route

  return (
    <header className="bg-[#FFFBFD] w-full max-w-screen-xl mx-auto rounded-full shadow-sm my-1 fixed top-0 left-0 right-0 z-50 justify-between h-[76px]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-4"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Logo"
              src="/logo.png"
              className="h-14 w-auto rounded-full"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {/* Only show HOME when not on the home page */}
          {!isActive("/") && (
            <Link
              to="/"
              className={`text-[14px] font-poppins font-semibold leading-6 ${
                isActive("/") ? "text-customYellow" : "text-[#1C1C1C]"
              }`}
            >
              HOME
            </Link>
          )}
          <Link
            to="/about"
            className={`text-[14px] font-poppins font-semibold leading-6 ${
              isActive("/about") ? "text-customYellow" : "text-[#1C1C1C]"
            }`}
          >
            ABOUT
          </Link>
          <Link
            to="/full-team"
            className={`text-[14px] font-poppins font-semibold leading-6 ${
              isActive("/full-team") ? "text-customYellow" : "text-[#1C1C1C]"
            }`}
          >
            OUR TEAM
          </Link>
          <Link
            to="/services?tab=web-design"
            className={`text-[14px] font-poppins font-semibold leading-6 ${
              isActive("/services") ? "text-customYellow" : "text-[#1C1C1C]"
            }`}
          >
            SERVICES
          </Link>
          <Link
            to="/portfolio"
            className={`text-[14px] font-poppins font-semibold leading-6 ${
              isActive("/portfolio") ? "text-customYellow" : "text-[#1C1C1C]"
            }`}
          >
            PORTFOLIO
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/contact"
            className="text-lg font-bold leading-6 text-gray-900 border p-3 rounded-full border-black hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed z-50" />
        <DialogPanel className="fixed inset-y-1 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">SecWebXperts</span>
              <img alt="" src="/logo.png" className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  About
                </Link>
                <Link
                  to="/full-team"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  OurTeam
                </Link>
                <Link
                  to="/services?tab=web-design"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  Service
                </Link>
                <Link
                  to="/portfolio"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  Portfolio
                </Link>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
