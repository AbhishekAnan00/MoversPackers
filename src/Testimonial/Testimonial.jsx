// src/TestimonialCarousel.js
import React, { useState } from "react";

const testimonials = [
  {
    text: "Professionals in their expertise! They know what they are doing and what other teams want. Great with their service. Recommend.",
    name: "Andrew Bastian",
    position: "HR Manager",
    imgSrc: "https://via.placeholder.com/40",
  },
  {
    text: "Excellent service and support. They really understand our needs and deliver great results.",
    name: "Jane Doe",
    position: "Marketing Director",
    imgSrc: "https://via.placeholder.com/40",
  },
  {
    text: "Their team is highly skilled and professional. We are extremely satisfied with their work.",
    name: "John Smith",
    position: "CEO",
    imgSrc: "https://via.placeholder.com/40",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-gray-50 p-20 rounded-lg shadow-lg w-full text-center mb-8">
        <h2 className="text-gray-500 text-xs mb-4">
          WHAT LEADING PARTNERS AND SUPPORTERS ARE SAYING
        </h2>
        <p className="text-lg text-gray-900 mb-6">
          {testimonials[activeIndex].text}
        </p>
        <div className="flex flex-col items-center justify-center">
          <div className="flex">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={testimonials[activeIndex].imgSrc}
              alt={testimonials[activeIndex].name}
            />
            <div className="text-left">
              <p className="text-gray-900 font-bold">
                {testimonials[activeIndex].name}
              </p>
              <p className="text-gray-500 text-sm">
                {testimonials[activeIndex].position}
              </p>
            </div>
          </div>
          <div className="flex space-x-2 my-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-orange-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
