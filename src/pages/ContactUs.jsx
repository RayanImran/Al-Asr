// pages/ContactUs.jsx
import React from 'react';
import { Typography, Button, Input, Textarea } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout"; // Assuming you have a Footer component

export default function ContactUs() {
  return (
    <>
      <section className="relative block h-[50vh] pt-16"> {/* Add pt-16 to offset the fixed navbar */}
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/contact-background.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>

      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="relative flex gap-6 items-start">
                <div className="flex flex-col mt-2">
                  <Typography variant="h3" color="blue-gray" className="font-bold">
                    Contact Us
                  </Typography>
                </div>
              </div>
            </div>
            <div className="mt-10 space-y-6">
              <Typography variant="h5" color="blue-gray" className="font-bold">
                Get in Touch
              </Typography>
              <Typography className="text-blue-gray-500">
                We'd love to hear from you! Whether you have questions, feedback, or want to learn more about the Al-Asr Club, please reach out using the form below.
              </Typography>
              <form className="space-y-4">
                <Input label="Name" type="text" color="blue" required />
                <Input label="Email" type="email" color="blue" required />
                <Textarea label="Message" color="blue" required />
                <Button color="blue" type="submit">
                  Submit
                </Button>
              </form>
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
