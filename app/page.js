"use client";

// next lib imported
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Pacifico } from "next/font/google";
import { Philosopher } from "next/font/google";

// components imported
import NavigationBar from "@/components/NavigationBar";
import { Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const m_plus = Philosopher({
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
  }, [text, isDeleting, currentIndex]);

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
      <div className="relative mx-auto lg:w-[40%] border top-1">
        {/* complete nav bar */}
        <div className="hidden sm:flex sticky top-0 z-50 lg:grid grid-cols-[25%_65%_10%] px-4 py-2 items-center">
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
                <div className="flex inset-shadow-sm inset-shadow-green-200 rounded-sm p-2 hover:bg-[#343b42]">
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
        <div className="relative flex justify-center p-4 top-4">
          <div className={`${pacifico.className} text-8xl`}>
            <h1>PK</h1>
          </div>
        </div>

        {/* name and profile picture */}
        <div className="flex items-center gap-6 p-4">
          <div>
            <Image
              src="/profile.png"
              width={160}
              height={160}
              alt="profile"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2 mt-16">
            <h2 className="text-3xl font-extrabold">Pankaj Kori</h2>
            <p className="text-md text-gray-600 dark:text-gray-400 h-[24px]">
              {text}
              <span className="animate-pulse"></span>
            </p>
          </div>
        </div>

        {/* details section */}
        <div className="flex flex-col px-6 py-4 gap-4">
          {/* designation */}
          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-code"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 8l-4 4l4 4" />
              <path d="M17 8l4 4l-4 4" />
              <path d="M14 4l-4 16" />
            </svg>
            <p>
              Fullstack developer &amp; Open source contributer at{" "}
              <span className="blur">xxxxxxxx</span>
            </p>
          </div>

          {/* founder */}
          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-bulb"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
              <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
              <path d="M9.7 17l4.6 0" />
            </svg>
            <p>
              Founder @{" "}
              <a
                href="https://www.npmjs.com/package/@pankaj.koree/pkui"
                target="_blank"
                className="hover:underline"
              >
                PKUI
              </a>
            </p>
          </div>

          {/* address and time */}
          <div className="grid grid-cols-2">
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              <p>
                <a
                  href="https://maps.app.goo.gl/aGz7UWZYAAzsxdBq7"
                  target="_blank"
                  className="hover:underline"
                >
                  Lumbini, Nepal
                </a>
              </p>
            </div>
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-clock"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 7v5l3 3" />
              </svg>
              <p>{dateTime.toLocaleString()}</p>
            </div>
          </div>

          {/* phone and email */}
          <div className="grid grid-cols-2">
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              <p>
                <a
                  href="tel:+9779806973469"
                  className="hover:underline"
                  target="_blank"
                >
                  +977-9806973469
                </a>
              </p>
            </div>
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              <p>
                <a
                  href="mailto:pankajkori2057@gmail.com"
                  className="hover:underline"
                  target="_blank"
                >
                  pankajkori2057@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* get in touch */}
        <div className="px-6 py-4 hover:cursor-pointer">
          <Link href="/get-in-touch">
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-send"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
              Get in touch
            </Button>
          </Link>
        </div>

        {/* socials */}
        <div className="flex flex-col px-6 py-4 gap-4">
          {/* x and github */}
          <div className="grid grid-cols-2 gap-4">
            {/* x */}
            <a
              href="https://x.com/iampankajkoree"
              target="_blank"
              className="hover:bg-[#ebeaea]"
            >
              <div className="grid grid-cols-[20%_70%_10%] items-center border">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </div>
                <div>
                  <p> X (formerly Twitter)</p>
                  <p>@iampankajkoree</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ transform: "rotate(45deg)" }}
                  fill="currentColor"
                >
                  <polygon points="3.293 11.293 4.707 12.707 11 6.414 11 20 13 20 13 6.414 19.293 12.707 20.707 11.293 12 2.586 3.293 11.293" />
                </svg>
              </div>
            </a>

            {/* github */}
            <a
              href="https://x.com/iampankajkoree"
              target="_blank"
              className="hover:bg-[#ebeaea]"
            >
              <div className="grid grid-cols-[20%_70%_10%] items-center border">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </div>
                <div>
                  <p> X (formerly Twitter)</p>
                  <p>@iampankajkoree</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ transform: "rotate(45deg)" }}
                  fill="currentColor"
                >
                  <polygon points="3.293 11.293 4.707 12.707 11 6.414 11 20 13 20 13 6.414 19.293 12.707 20.707 11.293 12 2.586 3.293 11.293" />
                </svg>
              </div>
            </a>
          </div>

          {/* linkedin and youtube */}
          <div className="grid grid-cols-2 gap-4">
            {/* x */}
            <a
              href="https://x.com/iampankajkoree"
              target="_blank"
              className="hover:bg-[#ebeaea]"
            >
              <div className="grid grid-cols-[20%_70%_10%] items-center border">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </div>
                <div>
                  <p> X (formerly Twitter)</p>
                  <p>@iampankajkoree</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ transform: "rotate(45deg)" }}
                  fill="currentColor"
                >
                  <polygon points="3.293 11.293 4.707 12.707 11 6.414 11 20 13 20 13 6.414 19.293 12.707 20.707 11.293 12 2.586 3.293 11.293" />
                </svg>
              </div>
            </a>

            {/* github */}
            <a
              href="https://x.com/iampankajkoree"
              target="_blank"
              className="hover:bg-[#ebeaea]"
            >
              <div className="grid grid-cols-[20%_70%_10%] items-center border">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </div>
                <div>
                  <p> X (formerly Twitter)</p>
                  <p>@iampankajkoree</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ transform: "rotate(45deg)" }}
                  fill="currentColor"
                >
                  <polygon points="3.293 11.293 4.707 12.707 11 6.414 11 20 13 20 13 6.414 19.293 12.707 20.707 11.293 12 2.586 3.293 11.293" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* with and what i do */}
        <div className="leading-relaxed p-4">
          I craft engaging and high-performance web applications using{" "}
          <span className="inline-flex items-center gap-1 border border-green-300 border-dashed px-1 py-0.5 rounded-sm bg-[#f4f5f3] dark:bg-[#33414d]">
            <Image src="/nodejs.svg" width={16} height={16} alt="nodejs" />
            Node.js
          </span>{" "}
          ,{" "}
          <span className="inline-flex items-center gap-1 border border-gray-700 dark:border-white border-dashed px-1 py-0.5 rounded-sm bg-[#f4f5f3] dark:bg-[#33414d]">
            <Image src="/nextjs.svg" width={16} height={16} alt="nextjs" />
            Next.js
          </span>{" "}
          ,{" "}
          <span className="inline-flex items-center gap-1 border border-[#F56127] border-dashed px-1 py-0.5 rounded-sm bg-[#f4f5f3] dark:bg-[#33414d]">
            <Image src="/expressjs.svg" width={16} height={16} alt="express" />
            Express.js
          </span>{" "}
          ,{" "}
          <span className="inline-flex items-center gap-1 border border-blue-300 border-dashed px-1 py-0.5 rounded-sm bg-[#f4f5f3] dark:bg-[#33414d]">
            <Image
              src="/typescript.svg"
              width={16}
              height={16}
              alt="typescript"
            />
            TypeScript
          </span>{" "}
          and{" "}
          <span className="inline-flex items-center gap-1 border border-green-300 border-dashed px-1 py-0.5 rounded-sm bg-[#f4f5f3] dark:bg-[#33414d]">
            <Image src="/mongodb.svg" width={16} height={16} alt="mongodb" />
            MongoDB
          </span>{" "}
          . With a strong emphasis on clean UI and smooth user experience.
          Passionate about{" "}
          <a
            href="https://motion.dev/"
            target="_blank"
            className="hover:underline text-blue-500"
          >
            Motion
          </a>
          , and driven by a sharp eye for detail.
        </div>
      </div>

      {/* toaster for notification */}

      <Toaster position="top-center" reverseOrder={false} />

      {/* toaster for notification */}
    </div>
  );
}
