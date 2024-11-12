import React, { useState } from "react";
import { User, Phone, Calendar, CreditCard } from "lucide-react";

const AppointmentPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      selectedDoctor,
      patientName,
      patientPhone,
      appointmentDate,
      appointmentTime,
      paymentMethod,
    });
  };

  const doctors = [
    { id: 1, name: "Dr. John Doe", specialty: "Family Medicine" },
    { id: 2, name: "Dr. Jane Smith", specialty: "Pediatrics" },
    { id: 3, name: "Dr. Michael Johnson", specialty: "Internal Medicine" },
    { id: 4, name: "Dr. Emily Brown", specialty: "Cardiology" },
    { id: 5, name: "Dr. David Lee", specialty: "Oncology" },
  ];

  const paymentMethodOptions = [
    "Credit Card",
    "Debit Card",
    "PayPal",
    "Apple Pay",
    "Google Pay",
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Schedule Appointment</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-lg font-medium mb-4">Doctor Information</h2>
          <div className="relative">
            <select
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
            >
              <option value="">Select Doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} - {doctor.specialty}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">Patient Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="patient-name"
                className="block text-sm font-medium mb-1"
              >
                Patient Name
              </label>
              <div className="relative">
                <input
                  id="patient-name"
                  type="text"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="patient-phone"
                className="block text-sm font-medium mb-1"
              >
                Patient Phone
              </label>
              <div className="relative">
                <input
                  id="patient-phone"
                  type="tel"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">Appointment Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="appointment-date"
                className="block text-sm font-medium mb-1"
              >
                Appointment Date
              </label>
              <div className="relative">
                <input
                  id="appointment-date"
                  type="date"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="appointment-time"
                className="block text-sm font-medium mb-1"
              >
                Appointment Time
              </label>
              <div className="relative">
                <input
                  id="appointment-time"
                  type="time"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
                  value={appointmentTime}
                  onChange={(e) => setAppointmentTime(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* <Clock className="h-5 w-5 text-gray-400" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">Payment Information</h2>
          <div>
            <label
              htmlFor="payment-method"
              className="block text-sm font-medium mb-1"
            >
              Payment Method
            </label>
            <div className="relative">
              <select
                id="payment-method"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">Select Payment Method</option>
                {paymentMethodOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CreditCard className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Schedule Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentPage;
