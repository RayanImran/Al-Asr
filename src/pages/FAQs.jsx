// pages/ContactUs.jsx
import React from 'react';
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout"; // Assuming you have a Footer component

export default function ContactUs() {
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col items-center pt-24 px-4 sm:px-8"
        style={{ backgroundImage: "url('/img/background-4-web.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        <div className="relative z-10 max-w-4xl mx-auto mt-10 mb-6 text-center text-white">
          {/* FAQ Section */}
          <Typography variant="h2" color="white" className="font-bold mb-10">
            Frequently Asked Questions (FAQs)
          </Typography>

          {/* Question 1 */}
          <div className="mb-8 px-4 lg:px-0">
            <Typography variant="h5" color="white" className="font-bold mb-2 text-center lg:text-left">
              What is this website about?
            </Typography>
            <Typography className="text-white text-justify leading-relaxed sm:leading-loose">
              This website serves as a platform for learning, connecting, and participating in community-driven initiatives. It provides resources, events, and a space for discussions to foster growth and support.
            </Typography>
          </div>

          {/* Question 2 */}
          <div className="mb-8 px-4 lg:px-0">
            <Typography variant="h5" color="white" className="font-bold mb-2 text-center lg:text-left">
              How can I join the Al-Asr Club?
            </Typography>
            <Typography className="text-white text-justify leading-relaxed sm:leading-loose">
              You can join the Al-Asr Club by signing up through the website. Membership gives you access to exclusive content, events, and the ability to contribute to community discussions.
            </Typography>
          </div>

          {/* Question 3 */}
          <div className="mb-8 px-4 lg:px-0">
            <Typography variant="h5" color="white" className="font-bold mb-2 text-center lg:text-left">
              Who can participate in the events and discussions?
            </Typography>
            <Typography className="text-white text-justify leading-relaxed sm:leading-loose">
              Anyone who registers on the platform can participate in the events and discussions. Our goal is to create an inclusive and supportive environment for everyone.
            </Typography>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
