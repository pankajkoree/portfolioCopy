"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col px-6 py-2 border-b items-center text-gray-400">
      <div className="flex justify-center gap-1">
        <p>Design and Developed by</p>
        <Link href="https://github.com/pankajkoree" target="_blank">
          @pankajkoree
        </Link>
      </div>
      <p className="flex items-center text-sm">© 2025. All rights reserved.</p>
    </div>
  );
};

export default Footer;
