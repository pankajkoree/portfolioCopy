import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Blogs = () => {
  return (
    <div className="flex flex-col px-6 py-4 gap-4 border-b">
      <div>
        <p className="text-2xl">Blogs</p>
      </div>
      {/* first two projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* products api blog */}
        <Link
          href="https://medium.com/@pankajkoree/products-api-how-i-built-it-what-it-does-and-why-it-matters-2efaf5f1ed0e"
          target="_blank"
        >
          <div className="border inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-blue-400 hover:shadow-green-400 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]">
            {/* Image */}
            <div className="mb-4 rounded-tl-sm rounded-tr-sm overflow-hidden bg-gradient-to-br from-blue-200 via-blue-300 to-purple-600 shadow-sm shadow-blue-400 h-48 flex items-center">
              <div className="relative w-full aspect-video">
                <Image
                  src="/products-api.png"
                  alt="productsapi"
                  fill
                  className="stretch"
                  quality={100}
                  priority
                />
              </div>
            </div>

            {/* Title with Links */}
            <div className="flex justify-between items-start mb-4 px-2">
              <h3 className="text-lg font-semibold">Products API Blog</h3>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 px-2 pb-2">
              Supercharge your front-end workflow with our plug-and-play
              e-commerce API — complete JSON data, zero backend setup.
            </p>
          </div>
        </Link>

        {/* the shoe company */}
        <Link
          href="https://medium.com/@pankajkoree/building-codeforcer-peer-site-a-comprehensive-guide-to-connecting-competitive-programmers-df9ab21a8662"
          target="_blank"
        >
          <div className="border inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-blue-400 hover:shadow-green-400 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]">
            {/* Image */}
            <div className="mb-4 rounded-tl-sm rounded-tr-sm overflow-hidden bg-gradient-to-br from-blue-200 via-blue-300 to-purple-600 shadow-sm shadow-blue-400 h-48 flex items-center">
              <div className="relative w-full aspect-video">
                <Image
                  src="/codeforcer-peersite.png"
                  alt="codeforcer-peersite"
                  fill
                  className="stretch"
                  quality={100}
                  priority
                />
              </div>
            </div>

            {/* Title with Links */}
            <div className="flex justify-between items-start mb-4 px-2">
              <h3 className="text-lg font-semibold">Codeforcer Peersite</h3>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 px-2 pb-2">
              Connecting minds, coding futures: CodeForcer makes peer
              programming happen.
            </p>
          </div>
        </Link>
      </div>

      <div className="flex justify-center mb-4">
        <Link href="/blogs">
          <Button variant="more">View more</Button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
