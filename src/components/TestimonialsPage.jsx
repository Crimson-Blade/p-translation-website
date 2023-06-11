
import React, { useState } from "react";

const TestimonialsPage = () => {
  const [activeTab, setActiveTab] = useState("doctors");

  const testimonials = {
    doctors: [
      {
        id: 1,
        name: "Dr. John Smith",
        specialty: "Cardiologist",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      // Add more doctor testimonials here
    ],
    patients: [
      {
        id: 1,
        name: "John Doe",
        condition: "Heart Disease",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      // Add more patient testimonials here
    ],
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Testimonials</h1>
      <div className="flex mb-4">
        <button
          className={`px-4 py-2 mr-2 rounded ${
            activeTab === "doctors"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabChange("doctors")}
        >
          Doctors
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "patients"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabChange("patients")}
        >
          Patients
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {testimonials[activeTab].map((testimonial) => (
          <div
            key={testimonial.id}
            className="border border-gray-300 rounded p-4 shadow-md"
          >
            <h3 className="text-lg font-bold mb-2">{testimonial.name}</h3>
            {activeTab === "doctors" ? (
              <p className="text-sm text-gray-500 mb-2">{testimonial.specialty}</p>
            ) : (
              <p className="text-sm text-gray-500 mb-2">{testimonial.condition}</p>
            )}
            <p className="text-gray-700">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
