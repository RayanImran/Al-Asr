// Al-Asr/src/pages/home.jsx

import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-4.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-90" />
        </div>
        <div className="absolute top-0 h-full w-full bg-blue/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-4 font-black">
                WATCH OUT!<p>AL-ASR.</p>
              </Typography>
              <Typography variant="lead" color="white" className="opacity-90 text-lg">
                {/* Arabic text box */}
                <div className="border border-gray-300 p-4 rounded-lg mb-6 bg-opacity-10 bg-white">
                  <span className="block text-xl text-center font-bold">
                    (١) وَالْعَصْرِ <br />
                    (٢) إِنَّ الْإِنسَانَ لَفِي خُسْرٍ <br />
                    (٣) إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ
                  </span>
                </div>
                {/* English text box */}
                <div className="border border-gray-300 p-4 rounded-lg mb-6 bg-opacity-10 bg-white">
                  <p className="text-lg">
                    (1) By the (passage of) time! <br />
                    (2) Surely humanity is in (grave) loss, <br />
                    (3) except those who have faith, do good, and urge each other to the truth, and urge each other to perseverance.
                  </p>
                </div>
                {/* Urdu text box */}
                <div className="border border-gray-300 p-4 rounded-lg bg-opacity-10 bg-white">
                  <p className="text-lg">
                    (١) قسم ہے زمانے کی، <br />
                    (٢) بیشک انسان خسارے میں ہے، <br />
                    (٣) سوائے ان لوگوں کے جو ایمان لائے اور نیک عمل کرتے رہے اور ایک دوسرے کو حق کی تلقین کرتے رہے اور ایک دوسرے کو صبر کی تاکید کرتے رہے۔
                  </p>
                </div>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      {/* Sheikh Karim - Al Asr explanation video section */}
      <section className="px-4 py-10 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* First Video Card */}
          <div className="text-center w-full md:w-auto">
            <Typography variant="h3" color="blue-gray" className="font-bold mb-2">
              Mufti Menk
            </Typography>
            <Typography variant="h6" color="blue-gray" className="mb-4">
              Al Asr explanation
            </Typography>
            <iframe
              className="w-full md:w-[560px] h-[315px]"
              src="https://www.youtube.com/embed/aF-gi9kX5FQ?si=dz-4hiaglF_xcb3q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Replica Video Card */}
          <div className="text-center w-full md:w-auto">
            <Typography variant="h3" color="blue-gray" className="font-bold mb-2">
              Maulana Tariq Jameel
            </Typography>
            <Typography variant="h6" color="blue-gray" className="mb-4">
              Surah Asar (Quran) - Tarjuma Tafseer by
            </Typography>
            <iframe
              class="w-full md:w-[560px] h-[315px]"
              src="https://www.youtube.com/embed/7NZGhvvNa_I"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="bg-gray-900 text-white">
        <Footer />
      </div>

    </>
  );
}

export default Home;
