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
          <Link to={"/"} className="-m-1.5 p-1.5">
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
          <Link
            to="/"
            className={`text-[14px] font-poppins font-semibold leading-6 ${
              isActive("/") ? "text-customYellow" : "text-[#1C1C1C]"
            }`}
          >
            HOME
          </Link>
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
            to="/services"
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

          <Link
            to="/case-study"
            className="text-[14px] font-poppins  font-semibold leading-6 text-[#1C1C1C]"
          >
            CASE-STUDY
          </Link>

          {/* <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-lg font-bold leading-6 text-gray-900">
              Services
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel className="absolute -left-8 top-full mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 z-50">
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link to={"/"} className="font-bold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-lg font-bold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover> */}

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
                  to="/services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  Service
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
