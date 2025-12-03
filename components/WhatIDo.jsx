import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhatIDo = () => {
  return (
    <div className="leading-relaxed p-4 line-spacing-4">
          I craft engaging and high-performance web applications using{" "}
          <Link href="https://nodejs.org/" target="_blank">
            {" "}
            <span className="inline-flex items-center gap-1 border border-green-300 border-dashed px-1 py-0.5 rounded-sm bg-[#f4f5f3] dark:bg-[#33414d]">
              <Image src="/nodejs.svg" width={16} height={16} alt="nodejs" />
              Node.js
            </span>{" "}
            ,{" "}
          </Link>
          <Link href="https://nextjs.org/" target="_blank">
            <span className="inline-flex items-center gap-1 border border-gray-700 dark:border-white border-dashed px-1 py-0.5 rounded-sm bg-[#f4f5f3] dark:bg-[#33414d]">
              <Image src="/nextjs.svg" width={16} height={16} alt="nextjs" />
              Next.js
            </span>{" "}
            ,{" "}
          </Link>
          <Link href="https://expressjs.com/" target="_blank">
            <span className="inline-flex items-center gap-1 border border-[#F56127] border-dashed px-1 py-0.5 rounded-sm bg-[#f4f5f3] dark:bg-[#33414d]">
              <Image
                src="/expressjs.svg"
                width={16}
                height={16}
                alt="express"
              />
              Express.js
            </span>{" "}
            ,{" "}
          </Link>
          <Link href="https://www.typescriptlang.org/" target="_blank">
            <span className="inline-flex items-center gap-1 border border-blue-300 border-dashed px-1 py-0.5 rounded-sm bg-[#f4f5f3] dark:bg-[#33414d]">
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
            <span className="inline-flex items-center gap-1 border border-green-300 border-dashed px-1 py-0.5 rounded-sm bg-[#f4f5f3] dark:bg-[#33414d]">
              <Image src="/mongodb.svg" width={16} height={16} alt="mongodb" />
              MongoDB
            </span>{" "}
          </Link>
          . With a strong emphasis on clean UI and smooth user experience.
          Passionate about{" "}
          <Link href="https://motion.dev/" target="_blank">
            <span className="inline-flex items-center gap-1 border border-yellow-500 border-dashed px-1 py-0.5 rounded-sm bg-[#f4f5f3] dark:bg-[#33414d] align-middle mt-1">
              <Image src="/motion.svg" width={16} height={16} alt="motion" />
              Motion
            </span>
          </Link>{" "}
          and driven by a sharp eye for detail.
        </div>
  )
}

export default WhatIDo
