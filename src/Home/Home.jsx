import React from "react";
import About from "../About/About";
import Header from "../Header/Header";
import Service from "../Service/Service";
import Process from "../Process/Process";
import FAQ from "../FAQ/FAQ";
import Testimonial from "../Testimonial/Testimonial";
import NewsPost from "../NewPost/NewPost";
import Footer from "../Footer/Footer";
import HomeImage from "../assets/Header.jpg";
const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${HomeImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Real-time tracking, advanced analytics, and automated processes
            ensure a seamless experience for our clients
          </h1>
        </div>
      </div>
      <About />
      <Service />
      <Process />
      <FAQ />
      <Testimonial />
      <NewsPost />
      <Footer />
    </div>
  );
};

export default Home;
