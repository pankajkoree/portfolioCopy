"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";

import { Pacifico } from "next/font/google";
import { Philosopher } from "next/font/google";

// components imported
import NavigationBar from "@/components/NavigationBar";
import { Toaster } from "react-hot-toast";
import Link from "next/link";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const m_plus = Philosopher({
  subsets: ["latin"],
  weight: "400",
});

const page = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      e.target.reset();
      toast.success("Message sent successfully.");
    } else {
      toast.error("Failed to send the message");
    }
  };
  return (
    <div className="relative w-full">
      <div className="relative mx-auto lg:w-[40%] flex flex-col top-1">
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

        {/* Navbar heading */}
        <h1 className="text-4xl font-bold text-center mt-20">Contact</h1>
        {/* end Navbar heading */}

        <div className="relative flex flex-col justify-center">
          <p className="text-center p-2">
            Feel free to reach out if you have any questions or would like to
            collaborate!
          </p>

          <div className="border border-gray-600 dark:border-gray-300 flex mt-8"></div>

          <div className="mt-8 flex flex-col px-6 py-4">
            <h2> Get in touch</h2>
            <p>
              Fill out the form below, and I&apos;ll respond as quickly as I
              can.
            </p>
          </div>

          {/* form */}
          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col px-6 py-4 gap-6"
          >
            <div className="flex flex-col">
              <Label htmlFor="name">Name:</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="flex flex-col">
              <Label htmlFor="email">Email:</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="flex flex-col">
              <Label htmlFor="message">Message:</Label>
              <Textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message..."
                required
              ></Textarea>
            </div>

            <div className="text-center">
              <Button variant="submit" type="submit">
                Send Message
              </Button>
            </div>
          </form>

          {/* end form */}
        </div>
      </div>
    </div>
  );
};

export default page;
