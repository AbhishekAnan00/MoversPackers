import React from "react";
import { GiPathDistance } from "react-icons/gi";
import { GiEarthAmerica } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
const Service = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-50 shadow-xl w-screen rounded-lg">
      <section className="text-left mb-8">
        <h2 className="text-gray-500 uppercase mb-2">Our Service</h2>
        <h1 className="text-4xl font-bold">
          We can help ease the burden of moving any distance
        </h1>
      </section>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="w-full md:w-1/4 h-1/4 p-4 bg-white shadow-lg rounded-lg text-left">
          <div className="mb-4 text-4xl">
            <GiPathDistance />
          </div>
          <h3 className="text-xl font-bold mb-2">Long Distance Movers</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor adipiscing tempor labore dolore magna mollis,
            purus semper tellus nullam vehicula ipsum.
          </p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full text-lg">
            +
          </button>
        </div>
        <div className="w-full md:w-1/4 p-4 my-20 bg-white shadow-lg rounded-lg text-left">
          <div className="mb-4 text-4xl">
            <GiEarthAmerica />
          </div>
          <h3 className="text-xl font-bold mb-2">International Movers</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor adipiscing tempor labore dolore magna mollis,
            purus semper tellus nullam vehicula ipsum.
          </p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full text-lg">
            +
          </button>
        </div>
        <div className="w-full md:w-1/4 h-1/4 my-12 p-4 bg-white shadow-lg rounded-lg text-left">
          <div className="mb-4 text-4xl">
            <FaMapLocationDot />
          </div>
          <h3 className="text-xl font-bold mb-2">Local Movers</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor adipiscing tempor labore dolore magna mollis,
            purus semper tellus nullam vehicula ipsum.
          </p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full text-lg">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
