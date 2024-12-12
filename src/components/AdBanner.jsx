import React from 'react';
import Adgirl from "../images/Adgirl.png"

const Banner = () => {
  return (
    <div className="relative bg-gray-900 text-white min-h-[60vh] flex items-center justify-center px-6 py-12 md:px-12 ">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between md:mx-24">
        
        {/* Left Section */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Take Your Customer Service To The Next Level
          </h1>
          <button className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-700 transition duration-300 flex items-center justify-center mx-auto md:mx-0 outline-none">
            Get 14 Days Free Trial
            <span className="ml-2">→</span>
          </button>
          <p className="mt-4 text-gray-400">No credit card required</p>
        </div>

        {/* Right Section */}
        <div className="relative">
          <img
            src={Adgirl} // Replace with actual image path
            alt="Customer Service"
            className="w-80 md:w-full"
          />

          {/* Decorative Elements */}
          {/* <div className="absolute top-0 right-0 w-16 h-28 bg-yellow-500 rounded-xl flex items-center justify-center">
            <span className="text-white text-2xl">🔍</span>
          </div>
          <div className="absolute bottom-0 left-0 w-16 h-28 bg-blue-700 rounded-xl flex items-center justify-center">
            <span className="text-white text-2xl">⭐</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
