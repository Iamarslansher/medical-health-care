import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const imageSource =
    "https://png.pngtree.com/png-vector/20240612/ourmid/pngtree-masked-doctor-hero-in-shield-emblem-png-image_12693659.png";
  return (
    <div id="home" className="bg-blue-500 text-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row items-center">
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Comprehensive Healthcare Solutions
          </h1>
          <p className="mt-6 text-lg leading-8">
            Providing top-notch medical services to keep you and your loved ones
            healthy.MedCare is a premier healthcare provider, committed to
            offering comprehensive and personalized medical services tailored to
            the diverse needs of our community.
          </p>
          <div className="mt-10 flex justify-center sm:justify-start">
            <a
              href="#services"
              className="rounded-md bg-white px-3.5 py-2.5 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Explore Services
            </a>
          </div>
        </div>
        <div className="flex-1 mb-8 sm:mb-0">
          <img
            src={imageSource}
            alt="image"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
