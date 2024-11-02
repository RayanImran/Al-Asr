// pages/MembersList.jsx
import React from 'react';
import { Avatar, Typography, Button } from "@material-tailwind/react";
import { MapPinIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout"; // Assuming you have a Footer component

export function MembersList() {
  const members = [
    {
      name: "Emma Stones",
      email: "jenna@mail.com",
      location: "Los Angeles, California",
      role: "Solution Manager - Creative Tim Officer",
      university: "University of Computer Science",
      avatar: "/img/team-5.png",
      friends: 22,
      photos: 10,
      comments: 89,
    },
    // Add more members as needed
  ];

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/members-background.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>

      <section className="relative bg-white py-16">
        <div className="container mx-auto">
          {members.map((member, index) => (
            <div key={index} className="relative mb-6 flex w-full px-4 min-w-0 flex-col break-words bg-white shadow-lg rounded-lg mb-12">
              <div className="flex flex-col lg:flex-row justify-between p-6">
                <div className="relative flex gap-6 items-start">
                  <div className="w-40">
                    <Avatar
                      src={member.avatar}
                      alt={`Profile picture of ${member.name}`}
                      variant="circular"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <Typography variant="h4" color="blue-gray">
                      {member.name}
                    </Typography>
                    <Typography variant="paragraph" color="gray" className="!mt-0 font-normal">
                      {member.email}
                    </Typography>
                  </div>
                </div>

                <div className="mt-10 mb-10 flex lg:flex-col justify-between items-center lg:justify-end lg:mb-0 lg:px-4 flex-wrap lg:-mt-5">
                  <Button className="bg-gray-900 w-fit lg:ml-auto">Connect</Button>
                  <div className="flex justify-start py-4 pt-8 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <Typography variant="lead" color="blue-gray" className="font-bold uppercase">
                        {member.friends}
                      </Typography>
                      <Typography variant="small" className="font-normal text-blue-gray-500">
                        Friends
                      </Typography>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <Typography variant="lead" color="blue-gray" className="font-bold uppercase">
                        {member.photos}
                      </Typography>
                      <Typography variant="small" className="font-normal text-blue-gray-500">
                        Photos
                      </Typography>
                    </div>
                    <div className="p-3 text-center lg:mr-4">
                      <Typography variant="lead" color="blue-gray" className="font-bold uppercase">
                        {member.comments}
                      </Typography>
                      <Typography variant="small" className="font-normal text-blue-gray-500">
                        Comments
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>

              <div className="-mt-4 container space-y-2 px-6">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                  <Typography className="font-medium text-blue-gray-500">
                    {member.location}
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                  <Typography className="font-medium text-blue-gray-500">
                    {member.role}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default MembersList;
