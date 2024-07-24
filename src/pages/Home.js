import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/photos/random", {
        params: { query: "school", count: 3 },
        headers: {
          Authorization:
            "Client-ID ReZmbgNabMzRmd1WbzZy3UJxDQXiflBakDbAy-luzoc",
        },
      })
      .then((response) => {
        console.log("API Response:", response.data);
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images from Unsplash:", error);
        setError("Failed to load images. Please try again later.");
      });
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Change image every 2 seconds

      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [images]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {error && <p className="text-red-500">{error}</p>}
      {images.length > 0 ? (
        <div className="absolute inset-0">
          <img
            src={images[currentImageIndex].urls.full}
            alt={images[currentImageIndex].alt_description || "School Image"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
            <h1 className="text-4xl font-bold mb-4 z-10">
              Welcome to Springdale Public School
            </h1>
            <p className="text-lg z-10">
              Welcome to Springdale Public School, where we nurture young minds
              for a brighter future.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>Loading images...</p>
        </div>
      )}
    </div>
  );
}

export default Home;
