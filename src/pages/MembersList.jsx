// pages/MembersList.jsx
import React from 'react';
import { Avatar, Typography, Card, CardBody } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout"; // Assuming you have a Footer component

export function MembersList() {
  const members = [
    {
      name: "Sadid Bin Saif",
      email: "saifsadid29.ss@gmail.com",
      phone: "431-275-1216",
    },
    {
      name: "Aryan Fida Nur",
      email: "aryanfidanur@gmail.com",
      phone: "431-788-4136",
    },
    {
      name: "Ahmed Nahian Chowdhury",
      email: "nahianchowdhury18@gmail.com",
      phone: "431-336-6338",
    },
    {
      name: "Hamza Noor Shabab",
      email: "rbarkat1208@gmail.com",
      phone: "431-990-3588",
    },
    {
      name: "Rubiat Khan Turag",
      email: "rubiat614@gmail.com",
      phone: "431-990-1830",
    },
    {
      name: "MD Ibrahim",
      email: "mdibrahim002438@gmail.com",
      phone: "204-493-0664",
    },
    {
      name: "Hamed Bin Mazaher",
      email: "hamed.ahnat@gmail.com",
      phone: "431-294-3339",
    },
    {
      name: "Abdullah Bin Joynal",
      email: "abdullahbinjoynal@gmail.com",
      phone: "204-291-5904",
    },
    {
      name: "Shawon Bhuiyan",
      email: "shawonbhuiyan368@gmail.com",
      phone: "204-698-1745",
    },
    {
      name: "Mahedi Hasan",
      email: "mahedixh@gmail.com",
      phone: "431-323-0822",
    },
    {
      name: "MD Mominul Islam Toukir",
      email: "toukirahmed74@gmail.com",
      phone: "431-986-0833",
    },
    {
      name: "MD Saiful Islam",
      email: "saifulislam.ca431@gmail.com",
      phone: "431-877-2961",
    },
  ];

  return (
    <>
      <div className="relative min-h-screen bg-[url('/img/background-4-comp.jpg')] bg-cover bg-center flex flex-col justify-center items-center pt-24 md:pt-32">
      <div className="absolute inset-0 bg-black bg-opacity-60" />
        {/* Page title */}
        <Typography variant="h1" className="text-center font-bold mb-8 text-white z-10">
          Members List
        </Typography>

        {/* Members grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
          {members.map(({ name, email, phone }, index) => (
            <Card key={index} className="shadow-lg border rounded-lg bg-white bg-opacity-80">
              <CardBody>
                <div className="flex items-center mb-4">
                  <div className="ml-4">
                    <Typography variant="h5" color="blue-gray" className="font-bold">
                      {name}
                    </Typography>
                    <Typography variant="small" color="blue-gray" className="font-medium">
                      {email}
                    </Typography>
                    <Typography variant="small" color="gray">
                      {phone}
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MembersList;
