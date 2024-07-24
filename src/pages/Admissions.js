import React from "react";
import { useNavigate } from "react-router-dom"; // For routing to Contact page

function Admissions() {
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  // Navigate to Contact page
  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        {/* Admissions Card */}
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">Admissions</h1>
          <p className="mb-2">
            <strong>Process:</strong> Admission forms are available for
            download. Submit the completed form along with required documents at
            the school office.
          </p>
          <p className="mb-2">
            <strong>Criteria:</strong> Admission is based on merit and
            availability of seats. Entrance tests may be conducted for certain
            grades.
          </p>
          <p className="font-semibold mb-2">Important Dates:</p>
          <ul className="list-disc list-inside mb-6">
            <li>
              Admission Form Availability: <strong>March 1st</strong>
            </li>
            <li>
              Last Date for Submission: <strong>March 31st</strong>
            </li>
            <li>
              Entrance Test: <strong>April 15th</strong>
            </li>
            <li>
              Announcement of Results: <strong>April 30th</strong>
            </li>
          </ul>

          {/* Admission Button */}
          <button
            onClick={goToContact}
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Contact Us for Admissions
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admissions;
