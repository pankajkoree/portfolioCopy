"use client";

// next lib imported
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Pacifico } from "next/font/google";

// components imported
import NavigationBar from "@/components/NavigationBar";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
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

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // theme switcher
  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme");
    const dark = storedTheme === "dark";
    document.documentElement.classList.toggle("dark", dark);
    setIsDarkMode(dark);
  }, []);
  useEffect(() => {
    if (!isMounted) return;
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode, isMounted]);

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
  }, [text, isDeleting, currentIndex, designationItems]);

  const [dateTime, setDateTime] = useState(new Date());

  // date and time
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // sound effect for theme change
  const audioRef = useRef(null);
  useEffect(() => {
    audioRef.current = new Audio("/sound.wav");
  }, []);
  const playShutter = () => {
    setIsDarkMode((prev) => !prev);
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 1000);
  };

  if (!isMounted) {
    return (
      <div className="h-6 w-6 rounded bg-gray-300 dark:bg-gray-600 animate-pulse" />
    );
  }
  return (
    <div className="relative w-full">
      <div className="relative mx-auto lg:w-[40%] border">
        {/* complete nav bar */}
        <div className="hidden sm:flex sticky top-0 z-50 lg:grid grid-cols-[25%_65%_10%] px-4 py-2 items-center backdrop-blur-xl border-b">
          {/* logo div */}
          <div className={`${pacifico.className} text-xl`}>
            <Link href="/">
              <h1>PK</h1>
            </Link>
          </div>
          {/* nav div */}
          <div className="flex justify-end">
            <NavigationBar />
          </div>
          {/* theme div */}
          <div className="flex justify-end">
            <div onClick={playShutter} className="hover:cursor-pointer">
              {isDarkMode ? (
                <div className="flex inset-shadow-sm inset-shadow-gray-200 rounded-sm p-2 hover:bg-[#4778ad]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-brightness-up"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 8a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" />
                    <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 1 -1z" />
                    <path d="M17.693 4.893a1 1 0 0 1 1.497 1.32l-.083 .094l-1.4 1.4a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.4 -1.4z" />
                    <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2z" />
                    <path d="M16.293 16.293a1 1 0 0 1 1.32 -.083l.094 .083l1.4 1.4a1 1 0 0 1 -1.32 1.497l-.094 -.083l-1.4 -1.4a1 1 0 0 1 0 -1.414z" />
                    <path d="M12 18a1 1 0 0 1 .993 .883l.007 .117v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 1 -1z" />
                    <path d="M6.293 16.293a1 1 0 0 1 1.497 1.32l-.083 .094l-1.4 1.4a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.4 -1.4z" />
                    <path d="M6 11a1 1 0 0 1 .117 1.993l-.117 .007h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2z" />
                    <path d="M4.893 4.893a1 1 0 0 1 1.32 -.083l.094 .083l1.4 1.4a1 1 0 0 1 -1.32 1.497l-.094 -.083l-1.4 -1.4a1 1 0 0 1 0 -1.414z" />
                  </svg>
                </div>
              ) : (
                <div className="flex inset-shadow-sm inset-shadow-gray-500 rounded-sm p-2 hover:bg-[#D0E6FD]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-moon"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>

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
