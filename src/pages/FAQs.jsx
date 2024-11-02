// pages/FAQs.jsx
import React from 'react';
import { Typography, Button } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout"; // Assuming you have a Footer component

export default function FAQs() {
  return (
    <>
      <section className="relative block h-[50vh] pt-16"> {/* Add pt-16 to offset the fixed navbar */}
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/faqs-background.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>

      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="relative flex gap-6 items-start">
                <div className="flex flex-col mt-2">
                  <Typography variant="h3" color="blue-gray" className="font-bold">
                    Frequently Asked Questions (FAQs)
                  </Typography>
                </div>
              </div>
            </div>
            <div className="mt-10 space-y-6">
              <Typography variant="h5" color="blue-gray" className="font-bold">
                What is this website about?
              </Typography>
              <Typography className="text-blue-gray-500">
                This website serves as a platform for learning, connecting, and participating in community-driven initiatives. It provides resources, events, and a space for discussions to foster growth and support.
              </Typography>
              <Typography variant="h5" color="blue-gray" className="font-bold">
                How can I join the Al-Asr Club?
              </Typography>
              <Typography className="text-blue-gray-500">
                You can join the Al-Asr Club by signing up through the website. Membership gives you access to exclusive content, events, and the ability to contribute to community discussions.
              </Typography>
              <Typography variant="h5" color="blue-gray" className="font-bold">
                Who can participate in the events and discussions?
              </Typography>
              <Typography className="text-blue-gray-500">
                Anyone who registers on the platform can participate in the events and discussions. Our goal is to create an inclusive and supportive environment for everyone.
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
