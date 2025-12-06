"use client";

// next lib imported
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// components imported
import { Toaster } from "react-hot-toast";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Socials from "@/components/Socials";
import GetInTouch from "@/components/GetInTouch";
import WhatIDo from "@/components/WhatIDo";
import Details from "@/components/Details";
import HonorsAndAwards from "@/components/HonorsAndAwards";
import Certifications from "@/components/Certifications";
import GitHubHeatmap from "@/components/GithubActivity";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";
import NavBar from "@/components/NavBar";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const designationItems = [
    "Fullstack Developer",
    "Open Source Contributer",
    "Design Engineer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // typewriter effect
  useEffect(() => {
    const currentText = designationItems[currentIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentText.substring(0, text.length + 1));

        if (text.length + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentText.substring(0, text.length - 1));

        if (text.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % designationItems.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex]);

  return (
    <div className="relative w-full">
      <div className="relative mx-auto lg:w-[40%] border">
        {/* complete nav bar */}
        <NavBar />

        {/* logo full */}
        <div className="relative flex justify-center px-6 py-4 top-4 border-b">
          <div className={`${pacifico.className} text-8xl`}>
            <h1>PK</h1>
          </div>
        </div>

        {/* name and profile picture */}
        <div className="flex items-center gap-6 px-6 py-4 mt-4 border-b">
          <div>
            <Image
              src="/profile.png"
              width={120}
              height={120}
              alt="profile"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <h2 className="text-3xl font-extrabold">Pankaj Kori</h2>
            <p className="text-md text-gray-500 dark:text-gray-500 h-[20px]">
              {text}
              <span className="animate-pulse"></span>
            </p>
          </div>
        </div>

        {/* details section */}
        <Details />

        {/* with and what i do */}
        <WhatIDo />

        {/* get in touch */}
        <GetInTouch />

        {/* socials */}
        <Socials />

        {/* github */}
        <GitHubHeatmap />

        {/* tech stach */}
        <TechStack />

        {/* experience */}
        <Experience />

        {/* projects */}
        <Projects />

        {/* Blogs */}
        <Blogs />

        {/* Honors and Awards */}
        <HonorsAndAwards />

        {/* Certifications */}
        <Certifications />

        {/* Footer */}
        <Footer />
      </div>

      {/* toaster for notification */}

      <Toaster position="top-center" reverseOrder={false} />

      {/* toaster for notification */}
    </div>
  );
}
