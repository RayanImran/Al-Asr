// pages/AboutUs.jsx
import React from 'react';
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout"; // Assuming you have a Footer component

export default function AboutUs() {
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col items-center pt-24 px-4 sm:px-8"
        style={{ backgroundImage: "url('/img/background-4-comp.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        <div className="relative z-10 max-w-4xl mx-auto mt-10 mb-6 text-center text-white">
          {/* Why Al-Asr Section */}
          <div className="mb-10 px-4 lg:px-0">
            <Typography variant="h3" color="white" className="font-bold mb-4 text-center lg:text-left">
              Why Al-Asr?
            </Typography>
            <Typography className="text-white text-justify leading-relaxed sm:leading-loose">
              The name of the club of Al-Asar is taken from Al-Asr, Surah 103 out of 114 Surahs in 30 verses of the Holy Book of Allah, ALL QURAN. In that surah, total verse 03, ruku 01. The club was named after Surah Al-Asar “Al-Asar Club”. “Al Asar Club” is a public welfare club. Basically, the word “Asar” means time.
            </Typography>
            <Typography className="text-white text-justify leading-relaxed sm:leading-loose mt-4">
              This Surah was revealed in the early stages of Makki. The Surah has been revealed in this short, concise, and touching sentence to present the ideals and teachings of Islam. Even if one wanted to forget that surah, one could not forget it.
            </Typography>
            <Typography className="text-white text-justify leading-relaxed sm:leading-loose mt-4">
              In that surah, there is an ocean of meanings and meanings hidden in small words and more than one complete book is needed to describe the features well. Apart from the path of real welfare and well-being of human beings, the open path of destruction and extreme calamity has been described in clear and unequivocal language in this Surah. If people think deeply about this Surah and fully understand it, then this Surah is enough for their guidance.
            </Typography>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
