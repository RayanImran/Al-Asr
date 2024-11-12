// pages/MediaResponse.jsx
import React from 'react';
import { Typography, Card, CardBody, CardHeader } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout"; // Assuming you have a Footer component

export default function MediaResponse() {
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col items-center pt-24 px-4 sm:px-8"
        style={{ backgroundImage: "url('/img/background-4-comp.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        <div className="relative z-10 max-w-4xl mx-auto mt-10 mb-6 text-center">
          <Typography variant="h2" className="text-white font-bold mb-6">
            Media Response
          </Typography>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Radio Interview */}
            <Card className="bg-white bg-opacity-80 shadow-lg rounded-lg">
              <CardHeader floated={false} className="relative h-56">
                <img
                  alt="Radio interview"
                  src="/img/m.png"
                  className="h-full w-full rounded-lg"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" color="blue-gray" className="font-bold mb-2">
                  Radio Interview with CBC
                </Typography>
                <Typography variant="small" color="blue-gray">
                  Interview with Mr. Abu Masood by Marcy Markusa, host of the CBC Information Radio program at 89.3 FM, 2019.
                </Typography>
              </CardBody>
            </Card>

            {/* Card 2: CBC Report */}
            <Card className="bg-white bg-opacity-80 shadow-lg rounded-lg">
              <CardHeader floated={false} className="relative h-56">
                <img
                  alt="CBC Report"
                  src="/img/m.png"
                  className="h-full w-full rounded-lg"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" color="blue-gray" className="font-bold mb-2">
                  CBC Report about 116 Club
                </Typography>
                <Typography variant="small" color="blue-gray">
                  Live long and die healthy: How a group of Winnipeggers are working to live to 116 with a focus on fun, fitness.
                </Typography>
              </CardBody>
            </Card>

            {/* Card 3: CBC Broadcast */}
            <Card className="bg-white bg-opacity-80 shadow-lg rounded-lg">
              <CardHeader floated={false} className="relative h-56">
                <img
                  alt="CBC Broadcast"
                  src="/img/m.png"
                  className="h-full w-full rounded-lg"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" color="blue-gray" className="font-bold mb-2">
                  CBC 6 PM News Broadcast
                </Typography>
                <Typography variant="small" color="blue-gray">
                  The CBC 6 PM news broadcast on Nov. 25th 2019 that featured our club.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
