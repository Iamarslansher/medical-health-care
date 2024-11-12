import React from "react";
import { Link } from "react-router-dom";
import { FaMedrt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center">
            <FaMedrt className="h-8 w-8 text-blue-500 mr-2" />
            <span className="text-xl font-bold text-blue-500">MedCare</span>
          </div>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="text-gray-600 hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutUs" className="text-gray-600 hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-600 hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <Link
                to="/doctor-appintment"
                className="text-gray-600 hover:text-blue-500"
              >
                Appointment
              </Link>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-blue-500">
                Contact
              </a>
            </li>
            <li>
              <Link
                href="/login"
                to="/login"
                className="text-blue-500 font-medium"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
