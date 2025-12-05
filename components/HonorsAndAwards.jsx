import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const HonorsAndAwards = () => {
  return (
    <div className="flex flex-col px-6 py-4 gap-4 border-b">
      <div>
        <p className="text-2xl">Awards</p>
      </div>
      {/* poster presentation */}
      <div className="grid grid-cols-[10%_80%_10%] border items-center px-2 py-1 inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]">
        <div>
          <Image src="/awards.svg" width={64} height={64} alt="awards" />
        </div>
        <div>
          <p>First place in poster presentation</p>
          <p className="text-sm text-gray-500">
            Best Paper/Poster Award | 4-5th May 2022 | Kalinga University
          </p>
        </div>

        <Link
          href="https://drive.google.com/file/d/1E6s9uuhrc-YSZ_aMsqvc-pu2LWyh8MJa/view?usp=sharing"
          target="_blank"
        >
          <div className="relative group inline-block">
            <Image src="/document.svg" width={32} height={32} alt="awards" />

            <div
              className="absolute -top-12 left-1/4 -translate-x-1/2 
               whitespace-nowrap rounded-md bg-black dark:bg-white text-white dark:text-gray-900 
               text-xs px-4 py-2 opacity-0 
               group-hover:opacity-100 transition 
               pointer-events-none shadow-lg
               after:content-[''] after:absolute after:top-full after:left-1/2 
               after:-translate-x-1/2 after:border-4 
               after:border-transparent after:border-t-black dark:after:border-t-white"
            >
              See attachment
            </div>
          </div>
        </Link>
      </div>
      {/* project presentation */}
      <div className="grid grid-cols-[10%_80%_10%] border items-center px-2 py-1 inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]">
        <div>
          <Image src="/awards.svg" width={64} height={64} alt="awards" />
        </div>
        <div>
          <p>Digital Mental Health Interventions and Wellness</p>
          <p className="text-sm text-gray-500">
            Project Presentation | 27th - 28th March 2025 | International
            Conference on Emerging Technologies for Sustainable Innovation,
            Management and Development (ICETSIMD 2025)
          </p>
        </div>

        <Link
          href="https://drive.google.com/file/d/1HhwRV5D7yyQkSlHOH0i8MLZlHMBtQ-Pa/view?usp=sharing"
          target="_blank"
        >
          <div className="relative group inline-block">
            <Image src="/document.svg" width={32} height={32} alt="awards" />

            <div
              className="absolute -top-12 left-1/4 -translate-x-1/2 
               whitespace-nowrap rounded-md bg-black dark:bg-white text-white dark:text-gray-900 
               text-xs px-4 py-2 opacity-0 
               group-hover:opacity-100 transition 
               pointer-events-none shadow-lg
               after:content-[''] after:absolute after:top-full after:left-1/2 
               after:-translate-x-1/2 after:border-4 
               after:border-transparent after:border-t-black dark:after:border-t-white"
            >
              See attachment
            </div>
          </div>
        </Link>
      </div>{" "}
      {/* iee seminar */}
      <div className="grid grid-cols-[10%_80%_10%] border items-center px-2 py-1 inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]">
        <div>
          <Image src="/awards.svg" width={64} height={64} alt="awards" />
        </div>
        <div>
          <p>IEEE Summit</p>
          <p className="text-sm text-gray-500">
            Certificate of Participation | 25th - 26th August 2023 | IEEE Women
            in Engineering (WIE) International Leadership Summit (ILS) 2023
          </p>
        </div>

        <Link
          href="https://drive.google.com/file/d/1aIfmrcdkMM4ZXiwUiQqhOTgSn0_UtqI_/view?usp=drive_link"
          target="_blank"
        >
          <div className="relative group inline-block">
            <Image src="/document.svg" width={32} height={32} alt="awards" />

            <div
              className="absolute -top-12 left-1/4 -translate-x-1/2 
               whitespace-nowrap rounded-md bg-black dark:bg-white text-white dark:text-gray-900 
               text-xs px-4 py-2 opacity-0 
               group-hover:opacity-100 transition 
               pointer-events-none shadow-lg
               after:content-[''] after:absolute after:top-full after:left-1/2 
               after:-translate-x-1/2 after:border-4 
               after:border-transparent after:border-t-black dark:after:border-t-white"
            >
              See attachment
            </div>
          </div>
        </Link>
      </div>{" "}
      <div className="flex justify-center mb-4">
        <Link href="/awards">
          <Button variant="more">View more</Button>
        </Link>
      </div>
    </div>
  );
};

export default HonorsAndAwards;
