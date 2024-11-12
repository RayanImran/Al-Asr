// pages/ContactUs.jsx
import React from 'react';
import { Typography, Button, Input, Textarea } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout"; // Assuming you have a Footer component

export default function ContactUs() {
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col items-center pt-24 px-4 sm:px-8"
        style={{ backgroundImage: "url('/img/background-4-comp.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        <div className="relative z-10 max-w-4xl mx-auto mt-10 mb-6 text-center text-white">
          <Typography variant="h2" color="white" className="font-bold mb-4">
            Contact Us
          </Typography>
          <Typography variant="h5" color="white" className="mb-8 font-semibold">
            Get in Touch
          </Typography>
          <Typography className="text-white mb-10 leading-relaxed">
            We'd love to hear from you! Whether you have questions, feedback, or want to learn more about the Al-Asr Club, please reach out using the form below.
          </Typography>

          <form className="w-full max-w-lg mx-auto">
            <div className="mb-6">
              <Input 
                variant="outlined" 
                size="lg" 
                label="Name" 
                required 
                className="border-white bg-transparent text-white placeholder-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <Input 
                variant="outlined" 
                size="lg" 
                label="Email" 
                type="email" 
                required 
                className="border-white bg-transparent text-white placeholder-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <Textarea 
                variant="outlined" 
                size="lg" 
                label="Message" 
                rows={6} 
                required 
                className="border-white bg-transparent text-white placeholder-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <Button variant="gradient" size="lg" type="submit" fullWidth className="bg-blue-500 hover:bg-blue-600">
              Submit
            </Button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
