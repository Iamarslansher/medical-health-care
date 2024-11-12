import React from "react";
import { Link } from "react-router-dom";
import {
  FaMedrt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="flex items-center">
            <FaMedrt className="h-8 w-8 text-blue-500 mr-2" />
            <span className="text-xl font-bold text-blue-500">MedCare</span>
          </Link>
          <p className="mt-4 text-gray-400">
            Providing comprehensive healthcare services to keep you and your
            loved ones healthy.
          </p>
          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="h-6 w-6 text-gray-400 hover:text-blue-500" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="h-6 w-6 text-gray-400 hover:text-blue-500" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-6 w-6 text-gray-400 hover:text-blue-500" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="h-6 w-6 text-gray-400 hover:text-blue-500" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-400 hover:text-blue-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="tel:+1234567890"
                className="flex items-center text-gray-400 hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +1 (123) 456-7890
              </a>
            </li>
            <li>
              <a
                href="mailto:info@medcare.com"
                className="flex items-center text-gray-400 hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@medcare.com
              </a>
            </li>
            <li>
              <a
                href="https://goo.gl/maps/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                123 Main Street, Anytown USA
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        &copy; {new Date().getFullYear()} MedCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
