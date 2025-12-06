'use client'

import { Pacifico } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavigationBar from "./NavigationBar";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const NavBar = () => {
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
  );
};

export default NavBar;
