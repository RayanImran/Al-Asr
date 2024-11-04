// pages/AboutUs.jsx
import React from 'react';
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout"; // Assuming you have a Footer component

export default function AboutUs() {
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col items-center pt-24 px-4 sm:px-8"
        style={{ backgroundImage: "url('/img/background-4.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        <div className="relative z-10 max-w-4xl mx-auto mt-10 mb-6 text-center text-white">
          {/* Surah Al-Asr Section */}
          <div className="mb-10 px-4 lg:px-0">
            <Typography variant="h3" color="white" className="font-bold mb-4 text-center lg:text-left">
              Surah Al-Asr - A Guiding Light
            </Typography>
            <Typography className="text-white text-justify leading-relaxed sm:leading-loose">
              Surah Al-Asr is a short yet profound chapter of the Quran that emphasizes the importance of time, faith, good deeds, and patience. The Surah highlights that by embracing these virtues, individuals can find true success and salvation. The message of Surah Al-Asr serves as a reminder for Muslims to value time and to strive for continuous improvement in faith and character.
            </Typography>
          </div>

          {/* Purpose of Website Section */}
          <div className="mb-10 px-4 lg:px-0">
            <Typography variant="h3" color="white" className="font-bold mb-4 text-center lg:text-left">
              Purpose of This Website
            </Typography>
            <Typography className="text-white text-justify leading-relaxed sm:leading-loose">
              This website is dedicated to fostering a community around the values found in Surah Al-Asr. The "Al-Asr Club" encourages members to share and inspire each other through acts of kindness, spiritual growth, and support. Our goal is to provide a platform where members can learn, connect, and work together toward a positive impact.
            </Typography>
          </div>

          {/* Join Al-Asr Club Section */}
          <div className="mb-10 px-4 lg:px-0">
            <Typography variant="h3" color="white" className="font-bold mb-4 text-center lg:text-left">
              Join the Al-Asr Club
            </Typography>
            <Typography className="text-white text-justify leading-relaxed sm:leading-loose">
              By joining the Al-Asr Club, you become part of a community that values faith, patience, and mutual support. Whether through articles, events, or shared experiences, Al-Asr Club members help each other grow and live out the teachings of this meaningful Surah.
            </Typography>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
