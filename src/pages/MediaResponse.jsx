// pages/MediaResponse.jsx
import React from 'react';
import { Typography, Button } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout"; // Assuming you have a Footer component

export default function MediaResponse() {
  return (
    <>
      <section className="relative block h-[50vh] pt-16"> {/* Add pt-16 to offset the fixed navbar */}
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/media-background.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>

      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="relative flex gap-6 items-start">
                <div className="flex flex-col mt-2">
                  <Typography variant="h3" color="blue-gray" className="font-bold">
                    Media Response
                  </Typography>
                </div>
              </div>
            </div>
            <div className="mt-10 space-y-6">
              <Typography variant="h5" color="blue-gray" className="font-bold">
                Understanding Media's Role
              </Typography>
              <Typography className="text-blue-gray-500">
                Media plays a crucial role in shaping public perception and influencing societal trends. In today's digital world, the ability to critically analyze media and respond thoughtfully is more important than ever. This section provides insights and discussions on how media impacts various aspects of life and what responsible media consumption entails.
              </Typography>
              <Typography variant="h5" color="blue-gray" className="font-bold">
                Engaging with Media Responsibly
              </Typography>
              <Typography className="text-blue-gray-500">
                This website offers tools and resources to help users better understand media content, promote media literacy, and encourage critical thinking. Our goal is to empower individuals to navigate the complex media landscape, make informed decisions, and contribute positively to media discourse.
              </Typography>
              <Typography variant="h5" color="blue-gray" className="font-bold">
                Join Our Media Response Community
              </Typography>
              <Typography className="text-blue-gray-500">
                By participating in our community, you can engage in meaningful discussions, share perspectives, and learn from others on how media influences society and individual viewpoints. We aim to foster a community that values thoughtful media engagement and informed dialogue.
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
