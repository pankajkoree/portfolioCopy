import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatIDo = () => {
  return (
    <div className="leading-relaxed px-6 py-4 line-spacing-2 md:line-spacing-4 border-b">
      I craft engaging and high-performance web applications using{" "}
      <Link href="https://nodejs.org/" target="_blank">
        {" "}
        <span className="inline-flex items-center gap-1 border-2 border-green-600 border-dashed px-1 py-0 md:py-0.5 rounded-sm">
          <Image src="/nodejs.svg" width={16} height={16} alt="nodejs" />
          Node.js
        </span>{" "}
        ,{" "}
      </Link>
      <Link href="https://nextjs.org/" target="_blank">
        <span className="inline-flex items-center gap-1 border-2 border-gray-700 dark:border-white border-dashed px-1 py-0 md:py-0.5 rounded-sm">
          <Image src="/nextjs.svg" width={16} height={16} alt="nextjs" />
          Next.js
        </span>{" "}
        ,{" "}
      </Link>
      <Link href="https://expressjs.com/" target="_blank">
        <span className="inline-flex items-center gap-1 border-2 border-[#F56127] border-dashed px-1 py-0 md:py-0.5 rounded-sm">
          <Image src="/expressjs.svg" width={16} height={16} alt="express" />
          Express.js
        </span>{" "}
        ,{" "}
      </Link>
      <Link href="https://www.typescriptlang.org/" target="_blank">
        <span className="inline-flex items-center gap-1 border-2 border-blue-300 border-dashed px-1 py-0 md:py-0.5 rounded-sm">
          <Image
            src="/typescript.svg"
            width={16}
            height={16}
            alt="typescript"
          />
          TypeScript
        </span>{" "}
      </Link>
      and{" "}
      <Link href="https://www.mongodb.com/" target="_blank">
        <span className="inline-flex items-center gap-1 border-2 border-green-500 border-dashed px-1 py-0 md:py-0.5 rounded-sm">
          <Image src="/mongodb.svg" width={16} height={16} alt="mongodb" />
          MongoDB
        </span>{" "}
      </Link>
      . With a strong emphasis on clean UI and smooth user experience.
      Passionate about{" "}
      <Link href="https://motion.dev/" target="_blank">
        <span className="inline-flex items-center gap-1 border-2 border-yellow-500 border-dashed px-1 py-0 md:py-0.5 rounded-sm align-middle mt-1">
          <Image src="/motion.svg" width={16} height={16} alt="motion" />
          Motion
        </span>
      </Link>{" "}
      and driven by a sharp eye for detail.
    </div>
  );
};

export default WhatIDo;
