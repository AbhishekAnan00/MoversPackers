import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a className="flex items-center py-4 px-2">
                  <img
                    src="https://th.bing.com/th/id/OIP.80_oaeCXm2kALhjI5Wxg_gAAAA?rs=1&pid=ImgDetMain"
                    alt="Logo"
                    className="h-8 w-8 mr-2 rounded-full"
                  />
                  <span className="font-semibold text-gray-500 text-lg">
                    Movers & Packers
                  </span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Link to="/">
                  <a className="py-4 px-2 text-orange-500 border-b-4 border-orange-500 font-semibold">
                    HOME
                  </a>
                </Link>
                <Link to="/about">
                  <a className="py-4 px-2 text-gray-500 font-semibold hover:text-orange-500 transition duration-300">
                    ABOUT
                  </a>
                </Link>
                <Link to="/carrer">
                <a className="py-4 px-2 text-gray-500 font-semibold hover:text-orange-500 transition duration-300">
                  CAREER
                </a>
                </Link>
                <a className="py-4 px-2 text-gray-500 font-semibold hover:text-orange-500 transition duration-300">
                  OUR SERVICE
                </a>
                <a className="py-4 px-2 text-gray-500 font-semibold hover:text-orange-500 transition duration-300">
                  PAGE
                </a>
                <a className="py-4 px-2 text-gray-500 font-semibold hover:text-orange-500 transition duration-300">
                  BLOG
                </a>
                <a className="py-4 px-2 text-gray-500 font-semibold hover:text-orange-500 transition duration-300">
                  CONTACT
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3 ">
              <a
                href="/quote"
                className="py-2 px-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
              >
                Free Quote
              </a>
            </div>
          </div>
        </div>
      </nav>    
    </>
  );
};

export default Header;
