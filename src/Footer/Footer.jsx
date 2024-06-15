import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between items-center">
          <div className="flex justify-between items-center mb-8 md:mb-0 w-full">
            <div className="flex gap-2 justify-center items-center">
            <img
              src="https://th.bing.com/th/id/OIP.80_oaeCXm2kALhjI5Wxg_gAAAA?rs=1&pid=ImgDetMain"
              alt="Movers&Packers Logo"
              className="w-16 h-16 mr-3 rounded-full"
            />
            <span className="font-semibold text-gray-500 text-xl">
                    Movers & Packers
                  </span>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold">+44(0)123 456 7275</h2>
              <p className="text-2xl text-gray-700">contact@domain.com</p>
            </div>
          </div>
          <hr className="my-20 h-[1px] bg-gray-100 w-full" />
          <div className="flex gap-40">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <p className="text-gray-700 mb-4 text-xl font-semibold">
                Experience a borneo treatment from our courteous team of moving
                and storage professionals.
              </p>
              <button className="bg-orange-500 text-white py-2 px-4 rounded shadow-lg font-semibold">
                Contact
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                <ul className="text-gray-700">
                  <li>
                    <a href="#" className="hover:underline">
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4">Service</h3>
                <ul className="text-gray-700">
                  <li>
                    <a href="#" className="hover:underline">
                      Long Distance Movers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      International Movers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Local Movers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4">Follow us</h3>
                <ul className="text-gray-700">
                  <li>
                    <a href="#" className="hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Tiktok
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          <p>
            &copy; Movers&Packers | Made with{" "}
            <span className="text-red-500">❤️</span> by AA
          </p>
          <p>
            <a href="#" className="hover:underline">
              Privacy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Back to top
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
