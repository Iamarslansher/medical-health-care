import React from "react";
import { FaPhoneAlt, FaHospital, FaAmbulance } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import "../../styles/custom.css";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">
          We're here to help you 24/7
        </p>

        <div className="emergncyCard grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Emergency Contact */}
          <div className="bg-red-50 rounded-lg shadow-lg p-6 flex items-center border-l-4 border-red-500">
            <FaAmbulance className="h-12 w-12 text-red-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Emergency</h3>
              <p className="text-gray-600">Emergency: (911)</p>
              <p className="text-gray-600">Ambulance: +1 (555) 999-1111</p>
            </div>
          </div>

          {/* Main Hospital */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <FaHospital className="h-12 w-12 text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Main Hospital</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600">+1 (555) 123-4568</p>
            </div>
          </div>

          {/* Appointment Booking */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <FaPhoneAlt className="h-12 w-12 text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Appointment Booking</h3>
              <p className="text-gray-600">+1 (555) 123-4569</p>
              <p className="text-gray-600">book@medcare.com</p>
            </div>
          </div>

          {/* Email Contacts */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <IoMdMailUnread className="h-12 w-12 text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">info@medcare.com</p>
              <p className="text-gray-600">support@medcare.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <FaLocationDot className="h-12 w-12 text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-600">123 Healthcare Avenue,</p>
              <p className="text-gray-600">Medical District, NY 10001</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <FaClock className="h-12 w-12 text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Working Hours</h3>
              <p className="text-gray-600">Emergency: 24/7</p>
              <p className="text-gray-600">OPD: Mon-Sat (8:00 AM - 8:00 PM)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
