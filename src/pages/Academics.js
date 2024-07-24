import React, { useState, useEffect } from "react";

function Academics() {
  const [image, setImage] = useState(null);
  const schoolName = "Springdale Public School";
  const unsplashApiKey = "SYZvarJlkPEaEiSGcL2g2cPO0fhLClrlmlEP8EJlfEw"; // Replace with your Unsplash Access Key

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=school&client_id=${unsplashApiKey}`
        );
        const data = await response.json();
        setImage(data.urls.small);
      } catch (error) {
        console.error("Error fetching the image:", error);
      }
    };

    fetchImage();
  }, [unsplashApiKey]);

  return (
    <div className="container mx-auto p-4">
      {/* School Name */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-700">{schoolName}</h1>
      </div>

      {/* Image Card */}
      {image && (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mb-8">
          <img
            className="w-full h-48 object-cover"
            src={image}
            alt="School Building"
          />
        </div>
      )}

      {/* Academics Information in Card Format */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Curriculum</h2>
          <ul className="list-disc pl-5">
            <li className="mb-1">
              <strong>Primary (Grades 1-5):</strong> English, Mathematics,
              Science, Social Studies, Art, Physical Education
            </li>
            <li className="mb-1">
              <strong>Secondary (Grades 6-10):</strong> English, Mathematics,
              Science (Physics, Chemistry, Biology), Social Studies, Computer
              Science, Physical Education, Art
            </li>
            <li className="mb-1">
              <strong>Senior Secondary (Grades 11-12):</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>
                  <strong>Science Stream:</strong> Physics, Chemistry, Biology,
                  Mathematics, Computer Science, English
                </li>
                <li>
                  <strong>Commerce Stream:</strong> Accountancy, Business
                  Studies, Economics, Mathematics, English
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Teaching Methodologies</h2>
          <p>
            We use a blend of traditional and modern teaching techniques to
            cater to different learning styles.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Educational Resources</h2>
          <p>
            Digital classrooms, interactive learning modules, and access to
            online educational platforms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Academics;
