import Link from "next/link";
import { Button } from "./ui/button";

const Experience = () => {
  return (
    <div className="border-b">
      {/* job */}
      <div className="flex px-6 py-4">
        <p className="text-2xl">Experience</p>
      </div>
      <div className="flex px-6">
        <p className="text-xl">Job</p>
      </div>
      {/* for pc and tab */}
      <div className="hidden md:block px-6 py-4 items-center">
        <div className="grid grid-cols-[10%_60%_30%] px-4 py-2 items-center inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]">
          {/* logo */}
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="#008900"
              className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
            </svg>
          </div>

          {/* company and position */}
          <div>
            <div className="flex gap-4">
              {" "}
              <span className="blur">xxxxxxxx</span>
              <span className="flex items-center bg-green-100 dark:bg-green-950 rounded-sm px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#2af31b"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-point"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                </svg>
                <p>Working</p>
              </span>
            </div>
            <div className="text-gray-500 text-sm">
              <p>Junior Fullstack Developer</p>
            </div>
          </div>
          {/* from-to and location */}
          <div className="flex flex-col justify-self-end">
            <p>August 2025 - Present</p>
            <p className="text-gray-500 text-sm">Bangladesh (Remote)</p>
          </div>
        </div>
      </div>
      {/* for mobile only */}
      <div className="block md:hidden px-6 py-4 items-center">
        <div className="grid grid-cols-[20%_80%] px-2 py-2 inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f] text-sm gap-2">
          {/* logo */}
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="#008900"
              className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
            </svg>
          </div>

          <div>
            {/* company and position */}
            <div>
              <div className="flex gap-4">
                {" "}
                <span className="blur">xxxxxxxx</span>
                <span className="flex items-center bg-green-100 dark:bg-green-950 rounded-sm px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#2af31b"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-point"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                  </svg>
                  <p>Working</p>
                </span>
              </div>
              <div className="text-gray-500 text-sm">
                <p>Junior Fullstack Developer</p>
              </div>
            </div>
            {/* from-to and location */}
            <div className="flex flex-col">
              <p>August 2025 - Present</p>
              <p className="text-gray-500 text-sm">Bangladesh (Remote)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-6">
        <p className="text-xl">Internships</p>
      </div>
      {/* internships */}
      {/* for pc and tab */}
      <div className="hidden md:block px-6 py-4 items-center">
        <div className="grid grid-cols-[10%_60%_30%] px-4 py-2 items-center inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]">
          {/* logo */}
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="#896573"
              className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
            </svg>
          </div>
          {/* company and position */}
          <div>
            <div className="flex gap-4">
              <p>Kalinga University</p>
            </div>
            <div className="text-gray-500 text-sm">
              <p>Artificial Intelligence and Machine Learning Intern</p>
            </div>
          </div>
          {/* from-to and location */}
          <div className="flex flex-col justify-self-end">
            <p>May 2023 - July 2023</p>
            <p className="text-gray-500 text-sm">Raipur, India</p>
          </div>
        </div>
      </div>
      {/* for mobile only */}
      <div className="block md:hidden px-6 py-4 items-center">
        <div className="grid grid-cols-[20%_80%] px-2 py-2 inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f] text-sm gap-2">
          {/* logo */}
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="#896573"
              className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
            </svg>
          </div>
          <div>
            {/* company and position */}
            <div>
              <div className="flex gap-4">
                <p>Kalinga University</p>
              </div>
              <div className="text-gray-500 text-sm">
                <p>Artificial Intelligence and Machine Learning Intern</p>
              </div>
            </div>
            {/* from-to and location */}
            <div className="flex flex-col">
              <p>May 2023 - July 2023</p>
              <p className="text-gray-500 text-sm">Raipur, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* for pc and tab */}
      <div className="hidden md:block px-6 py-4 items-center">
        <div className="grid grid-cols-[10%_60%_30%] px-4 py-2 items-center inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]">
          {/* logo */}
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="#323412"
              className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
            </svg>
          </div>
          {/* company and position */}
          <div>
            <div className="flex gap-4">
              <p>Micro World Educational Hub</p>
            </div>
            <div className="text-gray-500 text-sm">
              <p>Frontend Intern</p>
            </div>
          </div>
          {/* from-to and location */}
          <div className="flex flex-col justify-self-end">
            <p>April 2019 - July 2019</p>
            <p className="text-gray-500 text-sm">Butwal, Nepal</p>
          </div>
        </div>
      </div>
      {/* for mobile only */}
      <div className="block md:hidden px-6 py-4 items-center">
        <div className="grid grid-cols-[20%_80%] px-2 py-2 inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f] text-sm gap-2">
          {/* logo */}
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="#323412"
              className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
            </svg>
          </div>
          <div>
            {/* company and position */}
            <div>
              <div className="flex gap-4">
                <p>Micro World Educational Hub</p>
              </div>
              <div className="text-gray-500 text-sm">
                <p>Frontend Intern</p>
              </div>
            </div>
            {/* from-to and location */}
            <div className="flex flex-col">
              <p>April 2019 - July 2019</p>
              <p className="text-gray-500 text-sm">Butwal, Nepal</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <Link href="/experiences">
          <Button variant="more">View more</Button>
        </Link>
      </div>
    </div>
  );
};

export default Experience;
