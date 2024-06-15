import React from "react";
import headerImage from "../assets/Header.jpg";
const Process = () => {
  const processes = [
    {
      number: "01",
      title: "Before the move",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat dolor a nulla facilisis, a imperdiet est luctus.",
    },
    {
      number: "02",
      title: "During Transit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat dolor a nulla facilisis, a imperdiet est luctus.",
    },
    {
      number: "03",
      title: "From start to finish",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat dolor a nulla facilisis, a imperdiet est luctus.",
    },
    {
      number: "04",
      title: "At destination",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat dolor a nulla facilisis, a imperdiet est luctus.",
    },
  ];
  return (
    <>
      <div className="bg-orange-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">
            Some of our relocation processs you need to get moving
          </h2>
          {processes.map((process, index) => (
            <div key={index} className="flex items-center mb-8">
              <div className="text-6xl font-bold mr-6">{process.number}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold">{process.title}</h3>
                <p className="mt-2">{process.description}</p>
              </div>
              <div className="ml-auto">
                <button className="bg-white text-orange-500 rounded-full w-10 h-10 flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Real-time tracking, advanced analytics, and automated processes
            ensure a seamless experience for our clients
          </h1>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Process;
