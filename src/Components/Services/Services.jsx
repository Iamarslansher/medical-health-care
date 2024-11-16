import React from "react";
import {
  FaCalendarAlt,
  FaUserMd,
  FaShieldAlt,
  FaMoneyBillAlt,
  FaAmbulance,
  FaPhoneAlt,
  FaVoicemail,
  FaHospital,
  FaHeartbeat,
  FaBaby,
} from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { PiPrescriptionFill } from "react-icons/pi";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      id="services-card"
    >
      {icon}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FaPersonCircleCheck className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Comprehensive Checkups",
      description:
        "Regular check-ups and preventive care to ensure your health and well-being.",
    },
    {
      icon: <FaCalendarAlt className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Appointment Scheduling",
      description:
        "Convenient online booking and flexible scheduling to fit your needs.",
    },
    {
      icon: <PiPrescriptionFill className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Prescription Management",
      description:
        "Expert prescription management and medication counseling for your health.",
    },
    {
      icon: <FaUserMd className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Specialist Consultations",
      description:
        "Access to a network of experienced medical specialists for comprehensive care.",
    },
    {
      icon: <FaShieldAlt className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Preventive Health Screenings",
      description:
        "Proactive screening and early detection services to maintain your well-being.",
    },
    {
      icon: <FaMoneyBillAlt className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Insurance and Billing Support",
      description:
        "Assistance with navigating insurance coverage and managing healthcare costs.",
    },
    {
      icon: <FaAmbulance className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Emergency Care Services",
      description:
        "Prompt and reliable emergency medical services for immediate care needs.",
    },
    {
      icon: <FaPhoneAlt className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Telehealth Services",
      description:
        "Virtual consultations and remote care for your convenience.",
    },
    {
      icon: <FaVoicemail className="h-12 w-12 text-blue-500 mb-4" />,
      title: "24/7 Nurse Hotline",
      description:
        "Quick access to medical advice and guidance around the clock.",
    },
    {
      icon: <FaHospital className="h-12 w-12 text-blue-500 mb-4" />,
      title: "In-Clinic Procedures",
      description:
        "Comprehensive on-site services and treatments for your healthcare needs.",
    },
    {
      icon: <FaHeartbeat className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Cardiac Care",
      description:
        "Specialized heart health services including monitoring and rehabilitation programs.",
    },
    {
      icon: <FaBaby className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Pediatric Services",
      description:
        "Comprehensive healthcare services specially designed for children and adolescents.",
    },
  ];

  return (
    <div id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
