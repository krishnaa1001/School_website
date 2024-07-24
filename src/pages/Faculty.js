import React, { useState, useEffect } from "react";

const facultyData = [
  {
    name: "John Doe",
    position: "Principal",
    qualification: "M.Ed",
    experience: "20 years of experience in educational administration",
  },
  {
    name: "Jane Smith",
    position: "Vice Principal",
    qualification: "M.Sc. in Physics",
    experience: "15 years of teaching experience",
  },
  {
    name: "Emily Johnson",
    position: "English Teacher",
    qualification: "M.A. in English",
    experience: "10 years of teaching experience",
  },
  {
    name: "Michael Brown",
    position: "Mathematics Teacher",
    qualification: "M.Sc. in Mathematics",
    experience: "8 years of teaching experience",
  },
  {
    name: "Sophia Davis",
    position: "Science Teacher",
    qualification: "M.Sc. in Chemistry",
    experience: "12 years of teaching experience",
  },
  {
    name: "David Wilson",
    position: "Computer Science Teacher",
    qualification: "B.Tech in Computer Science",
    experience: "5 years of teaching experience",
  },
];

function Faculty() {
  const [images, setImages] = useState([]);
  const schoolName = "Springdale Public School";
  const unsplashApiKey = "YOUR_UNSPLASH_ACCESS_KEY"; // Replace with your Unsplash Access Key

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const promises = facultyData.map((faculty) =>
          fetch(
            `https://api.unsplash.com/photos/random?query=${faculty.name}&client_id=${unsplashApiKey}`
          )
            .then((response) => response.json())
            .then((data) => data.urls.small)
        );

        const results = await Promise.all(promises);
        setImages(results);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [unsplashApiKey]);

  return (
    <div className="container mx-auto p-4">
      {/* School Name */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-700">{schoolName}</h1>
      </div>

      {/* Faculty Section */}
      <h1 className="text-3xl font-bold mb-4">Faculty</h1>

      {/* Faculty Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultyData.map((faculty, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            {/* Faculty Image */}
            {images[index] && (
              <img
                className="w-full h-48 object-cover"
                src={images[index]}
                alt={faculty.name}
              />
            )}
            {/* Faculty Details */}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{faculty.name}</h2>
              <p className="text-gray-700">{faculty.position}</p>
              <p className="text-gray-600">{faculty.qualification}</p>
              <p className="text-gray-500">{faculty.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
