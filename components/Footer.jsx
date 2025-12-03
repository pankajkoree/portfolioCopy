"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative flex flex-col">
      <div className="relative flex gap-4">
        <Link href="https://github.com/pankajkoree" target="_blank">
          <p className="hover:cursor-pointer hover:text-cyan-600">Github</p>
        </Link>

        <Link href="https://www.linkedin.com/in/pankaj-koree/" target="_blank">
          <p className="hover:cursor-pointer hover:text-cyan-600">LinkedIn</p>
        </Link>

        <Link
          href="https://www.sololearn.com/en/profile/13478902"
          target="_blank"
        >
          <p className="hover:cursor-pointer hover:text-cyan-600">Sololearn</p>
        </Link>

        <Link href="https://www.youtube.com/@pankajkori" target="_blank">
          <p className="hover:cursor-pointer hover:text-cyan-600">Youtube</p>
        </Link>
      </div>

      <div className="relative flex justify-center">
        <p>
          © 2024{" "}
          <Link
            className="underline hover:text-cyan-600"
            href="https://github.com/pankajkoree"
            target="_blank"
          >
            Pankaj Kori
          </Link>{" "}
          . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
