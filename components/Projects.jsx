import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Projects = () => {
  return (
    <div className="flex flex-col px-6 py-4 gap-4 border-b">
      <div>
        <p className="text-2xl">Projects</p>
      </div>
      {/* first two projects */}
      <div className="grid grid-cols-2 gap-6">
        {/* products api project */}
        <div className="border inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-blue-400 hover:shadow-green-400 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]">
          {/* Image */}
          <div className="mb-4 rounded-tl-sm rounded-tr-sm overflow-hidden bg-gradient-to-br from-blue-200 via-blue-300 to-purple-600 shadow-sm shadow-blue-400 h-48 flex items-center">
            <Image
              src="/productsAPI-high.jpg"
              width={400}
              height={240}
              alt="productsapi"
              quality={100}
              priority
              className="ml-16 mt-20 rotate-x-12 rotate-y-12 -rotate-z-8 shadow-lg shadow-black will-change-transform backface-hidden"
            />
          </div>

          {/* Title with Links */}
          <div className="flex justify-between items-start mb-4 px-2">
            <h3 className="text-lg font-semibold">Products API</h3>
            <div className="flex gap-2">
              <Link
                href="https://ecommerce-frontend-products.vercel.app/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h16.8" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
              </Link>
              <Link
                href="https://github.com/pankajkoree/ecommerce-frontend"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 px-2 pb-2">
            Develop, Build, and Test your front-end instantly with our dummy
            e-commerce API. Get ready-to-use JSON data for products, users,
            carts, and more — no backend setup required.
          </p>
        </div>

        {/* the shoe company */}
        <div className="border inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-blue-400 hover:shadow-green-400 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]">
          {/* Image */}
          <div className="mb-4 rounded-tl-sm rounded-tr-sm overflow-hidden bg-gradient-to-br from-blue-200 via-blue-300 to-purple-600 shadow-sm shadow-blue-400 h-48 flex items-center">
            <Image
              src="/theshoecompany.png"
              width={400}
              height={240}
              alt="productsapi"
              quality={100}
              priority
              className="ml-16 mt-20 rotate-x-12 rotate-y-12 -rotate-z-8 shadow-lg shadow-black will-change-transform backface-hidden"
            />
          </div>

          {/* Title with Links */}
          <div className="flex justify-between items-start mb-4 px-2">
            <h3 className="text-lg font-semibold">The Shoe Company</h3>
            <div className="flex gap-2">
              <Link
                href="https://theshoecompany-tailwind.netlify.app/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h16.8" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
              </Link>
              <Link
                href="https://github.com/pankajkoree/Tailwind/tree/main/02_Project"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 px-2 pb-2">
            Durable, comfortable footwear for all occasions with fast, reliable
            delivery.
          </p>
        </div>
      </div>

      {/* second two projects */}
      <div className="grid grid-cols-2 gap-6">
        {/* the hamburger */}
        <div className="border inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-blue-400 hover:shadow-green-400 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]">
          {/* Image */}
          <div className="mb-4 rounded-tl-sm rounded-tr-sm overflow-hidden bg-gradient-to-br from-blue-200 via-blue-300 to-purple-600 shadow-sm shadow-blue-400 h-48 flex items-center">
            <Image
              src="/thehamburger.png"
              width={400}
              height={240}
              alt="productsapi"
              quality={100}
              priority
              className="ml-16 mt-20 rotate-x-12 rotate-y-12 -rotate-z-8 shadow-lg shadow-black will-change-transform backface-hidden"
            />
          </div>

          {/* Title with Links */}
          <div className="flex justify-between items-start mb-4 px-2">
            <h3 className="text-lg font-semibold">The HamBurger</h3>
            <div className="flex gap-2">
              <Link
                href="https://hamburgermenuappnweb.netlify.app/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h16.8" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
              </Link>
              <Link
                href="https://github.com/pankajkoree/react/tree/main/JS/codes/48_hamburgerMenu"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 px-2 pb-2">
            Made with 100% fresh chicken patties, perfectly grilled for maximum
            flavor, and customizable with a variety of toppings.
          </p>
        </div>

        {/* currency convertor */}
        <div className="border inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-blue-400 hover:shadow-green-400 rounded-sm hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]">
          {/* Image */}
          <div className="mb-4 rounded-tl-sm rounded-tr-sm overflow-hidden bg-gradient-to-br from-blue-200 via-blue-300 to-purple-600 shadow-sm shadow-blue-400 h-48 flex items-center">
            <Image
              src="/currencyconvertor.png"
              width={400}
              height={240}
              alt="productsapi"
              quality={100}
              priority
              className="ml-16 mt-20 rotate-x-12 rotate-y-12 -rotate-z-8 shadow-lg shadow-black will-change-transform backface-hidden"
            />
          </div>

          {/* Title with Links */}
          <div className="flex justify-between items-start mb-4 px-2">
            <h3 className="text-lg font-semibold">Currency Convertor</h3>
            <div className="flex gap-2">
              <Link
                href="https://currencyconvertorreactapp.netlify.app/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h16.8" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
              </Link>
              <Link
                href="https://github.com/pankajkoree/react/tree/main/ReactJSFreshStart/04currencyConvertor"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 px-2 pb-2">
            Supports 34 global currencies, provides live exchange rates with
            accuracy, and is optimized for quick conversions.
          </p>
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <Link href="/projects">
          <Button variant="more">View more</Button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
