import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Certifications = () => {
  return (
    <div className="flex flex-col px-6 py-4 gap-4 border-b">
      <div>
        <p className="text-2xl">Certifications</p>
      </div>
      {/* aiml internship */}
      <div className="grid grid-cols-[10%_80%_10%] border items-center px-2 py-1 inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]">
        <div>
          <Image src="/certificate.svg" width={64} height={64} alt="awards" />
        </div>
        <div>
          <p>Artificial Intelligence and Machine Learning</p>
          <p className="text-sm text-gray-500">
            Central Instrumentation Facility, Kalinga University | 23rd May 2023
            - 6th July 2023
          </p>
        </div>

        <Link
          href="https://drive.google.com/file/d/1wPdWO1HeKED38RpD9Ll8MpeEVqqtb08K/view?usp=drive_link"
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
      {/* frontend sololearn */}
      <div className="grid grid-cols-[10%_80%_10%] border items-center px-2 py-1 inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]">
        <div>
          <Image src="/certificate.svg" width={64} height={64} alt="awards" />
        </div>
        <div>
          <p>Frontend for Beginners</p>
          <p className="text-sm text-gray-500">
            Sololearn - Angular Team at Google | 02 Jan 2024
          </p>
        </div>

        <Link
          href="https://www.sololearn.com/certificates/CC-COU1CXBM"
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
      {/* freecodecamp */}
      <div className="grid grid-cols-[10%_80%_10%] border items-center px-2 py-1 inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]">
        <div>
          <Image src="/certificate.svg" width={64} height={64} alt="awards" />
        </div>
        <div>
          <p>Legacy Responsive Web Design V8</p>
          <p className="text-sm text-gray-500">FreeCodeCamp | 14th Feb 2024</p>
        </div>

        <Link
          href="https://www.freecodecamp.org/certification/pankaj_koree/responsive-web-design"
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
        <Link href="/certifications">
          <Button variant="more">View more</Button>
        </Link>
      </div>
    </div>
  );
};

export default Certifications;
