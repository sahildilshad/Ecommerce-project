import React from "react";
import girl from "../assets/girl.jpg";
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-200 via-white-200 to-white shadow-md px-6 py-12 md:flex items-center justify-between  max-w-7xl mx-auto rounded-sm mt-24">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">Style That Defines You.</h1>
        <p className="mb-6">
        From home essentials to the latest tech — shop smarter, faster, and safer and Discover the latest fashion, gadgets, and essentials — all at unbeatable prices.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Shop Now
        </button>
      </div>
      <div className="md:w-1/2">
        <img src={girl} alt="Delivery" className="rounded-lg mt-4"  />
      </div>
    </section>
  );
};

export default Hero;
