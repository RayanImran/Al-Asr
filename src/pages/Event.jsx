
// "/img/background-1.jpg",
// "/img/background-2.jpg",
// "/img/background-3.jpg",
// "/img/background-4.jpg"

// pages/Event.jsx
import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout"; // Assuming you have a Footer component
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// Dummy images for the slideshow (use your own images in production)
const images = [
  "/img/background-1.jpg",
  "/img/background-2.jpg",
  "/img/background-1.jpg",
  "/img/background-4.jpg"

];

export function Event() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to go to the next image with smooth animation
  const goToNextImage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false);
    }, 500); // Adjust timing to match animation duration
  };

  // Function to go to the previous image with smooth animation
  const goToPreviousImage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500);
  };

  // Automatic image transition every 6 seconds
  useEffect(() => {
    const interval = setInterval(goToNextImage, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col items-center pt-24 px-4 sm:px-8"
        style={{ backgroundImage: "url('/img/background-4.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        {/* Slideshow Section */}
        <div className="relative z-10 max-w-3xl mx-auto mt-10 mb-6">
          <Typography variant="h2" className="text-center text-white font-bold mb-6">
            Photo Gallery
          </Typography>

          <div className="relative flex items-center justify-center">
            {/* Image with Smooth Transition Animation */}
            <img
              src={images[currentImageIndex]}
              alt="Event Slide"
              className={`w-full rounded-lg shadow-lg transition-opacity transform duration-500 ease-in-out ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            />
          </div>

          <Typography variant="small" color="white" className="text-center mt-4">
            Presidents interview with CBC
          </Typography>

          {/* Arrows below the image for all screen sizes */}
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={goToPreviousImage}
              className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 transition"
            >
              <ChevronLeftIcon className="h-8 w-8 text-white" />
            </button>
            <button
              onClick={goToNextImage}
              className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 transition"
            >
              <ChevronRightIcon className="h-8 w-8 text-white" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-4 space-x-2 overflow-x-auto">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-12 h-12 rounded-lg cursor-pointer ${
                  currentImageIndex === index ? "ring-2 ring-blue-500" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Event;
