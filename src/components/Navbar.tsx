import React, { useState } from "react";
import { AppRoute } from "../types";

interface NavbarProps {
  currentRoute: AppRoute;
  setRoute: (route: AppRoute) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentRoute, setRoute }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", route: AppRoute.HOME },
    { name: "Courses", route: AppRoute.COURSES },
    { name: "Mock Tests", route: AppRoute.MOCK_TESTS },
    { name: "Study Material", route: AppRoute.STUDY_MATERIAL },
    { name: "About", route: AppRoute.ABOUT },
    { name: "Contact", route: AppRoute.CONTACT },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => setRoute(AppRoute.HOME)}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3">
                <img src="favicon.webp" alt="RCA" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-rca-blue leading-tight">
                  RCA EDUCATION
                </h1>
                <p className="text-[10px] text-rca-orange font-bold uppercase tracking-wider">
                  Online & Offline Coaching
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => setRoute(link.route)}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  currentRoute === link.route
                    ? "text-rca-orange"
                    : "text-gray-700 hover:text-rca-blue"
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() =>
                window.open(
                  "https://rcaeducation.akamai.net.in/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="bg-rca-blue text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl"
            >
              Student Login
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-rca-blue focus:outline-none"
            >
              <i
                className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setRoute(link.route);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                currentRoute === link.route
                  ? "bg-rca-orange/10 text-rca-orange"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <button
              onClick={() =>
                window.open(
                  "https://rcaeducation.akamai.net.in/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="w-full bg-rca-blue text-white py-3 rounded-lg font-bold"
            >
              Student Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
