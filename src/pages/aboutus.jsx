// pages/aboutus.jsx
import React from 'react';
import { Typography, Button } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout"; // Assuming you have a Footer component

export default function AboutUs() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/about-background.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>

      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="relative flex gap-6 items-start">
                <div className="flex flex-col mt-2">
                  <Typography variant="h3" color="blue-gray" className="font-bold">
                    About Us
                  </Typography>
                </div>
              </div>
            </div>
            <div className="mt-10 space-y-6">
              <Typography variant="h5" color="blue-gray" className="font-bold">
                Surah Al-Asr - A Guiding Light
              </Typography>
              <Typography className="text-blue-gray-500">
                Surah Al-Asr is a short yet profound chapter of the Quran that emphasizes the importance of time, faith, good deeds, and patience. The Surah highlights that by embracing these virtues, individuals can find true success and salvation. The message of Surah Al-Asr serves as a reminder for Muslims to value time and to strive for continuous improvement in faith and character.
              </Typography>
              <Typography variant="h5" color="blue-gray" className="font-bold">
                Purpose of This Website
              </Typography>
              <Typography className="text-blue-gray-500">
                This website is dedicated to fostering a community around the values found in Surah Al-Asr. The "Al-Asr Club" encourages members to share and inspire each other through acts of kindness, spiritual growth, and support. Our goal is to provide a platform where members can learn, connect, and work together toward a positive impact.
              </Typography>
              <Typography variant="h5" color="blue-gray" className="font-bold">
                Join the Al-Asr Club
              </Typography>
              <Typography className="text-blue-gray-500">
                By joining the Al-Asr Club, you become part of a community that values faith, patience, and mutual support. Whether through articles, events, or shared experiences, Al-Asr Club members help each other grow and live out the teachings of this meaningful Surah.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}
