import React, { useState, useEffect } from "react";

// Unsplash API access key
const ACCESS_KEY = "ReZmbgNabMzRmd1WbzZy3UJxDQXiflBakDbAy-luzoc";

function About() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetch images from Unsplash API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=school&count=3&client_id=${ACCESS_KEY}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();

        // Extract URLs from the fetched data
        const imageUrls = data.map((img) => img.urls.regular);

        setImages(imageUrls);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  // Change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="container mx-auto p-4 overflow-hidden">
      {/* School Name */}
      <h1 className="text-4xl font-extrabold text-center mb-6">
        Springdale Public School
      </h1>

      {/* Flex Container for Cards */}
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Card 1: School Details */}
        <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p>
            Founded in 1985, Springdale Public School has been dedicated to
            providing quality education and holistic development to students.
          </p>
          <p className="mt-4">
            <strong>Vision:</strong> To create a learning environment that
            fosters academic excellence, critical thinking, and ethical values.
          </p>
          <p className="mt-4">
            <strong>Mission:</strong> To empower students with the knowledge,
            skills, and values needed to thrive in a dynamic world.
          </p>
          <p className="mt-4">
            <strong>Principal's Message:</strong> At Springdale, we believe in
            nurturing the potential of every student and guiding them towards a
            successful future.
          </p>
          <p className="mt-4 font-semibold">Infrastructure and Facilities:</p>
          <ul className="list-disc list-inside">
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>
              Library with a vast collection of books and digital resources
            </li>
            <li>
              Sports facilities including a playground, gymnasium, and swimming
              pool
            </li>
          </ul>
        </div>

        {/* Card 2: School Image Slideshow */}
        <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg overflow-hidden">
          {images.length > 0 ? (
            <img
              src={images[currentImageIndex]}
              alt="School"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
              <p>Loading images...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
