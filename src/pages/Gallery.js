import React, { useEffect, useState } from "react";
import axios from "axios";

const UNSPLASH_ACCESS_KEY = "SYZvarJlkPEaEiSGcL2g2cPO0fhLClrlmlEP8EJlfEw";

function Gallery() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([
    {
      src: "https://www.example.com/path/to/video1.mp4",
      description: "Highlights from the Annual Function 2023",
    },
    {
      src: "https://www.example.com/path/to/video2.mp4",
      description: "Virtual tour of Springdale Public School",
    },
  ]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=school&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        setImages(response.data.results);
      } catch (error) {
        console.error("Error fetching images from Unsplash", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container mx-auto p-4 h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">
        Springdale Public School Gallery
      </h1>

      {/* Images Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          cultural Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.slice(0, 4).map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg max-h-64"
            >
              <img
                src={image.urls.regular}
                alt={image.alt_description}
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
              />
              <p className="absolute bottom-0 left-0 bg-black bg-opacity-75 text-white text-sm p-2">
                {image.alt_description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg max-h-64"
            >
              <video
                controls
                src={video.src}
                className="w-full h-full object-cover"
                aria-label={video.description}
              />
              <p className="absolute bottom-0 left-0 bg-black bg-opacity-75 text-white text-sm p-2">
                {video.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
