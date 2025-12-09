"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Calendar, Clock, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Projects = () => {
  const blogs = [
    {
      id: 1,
      title: "Products API",
      description:
        "Develop, Build, and Test your front-end instantly with our dummy e-commerce API. Get ready-to-use JSON data for products, users,carts, and more — no backend setup required.",
      date: "November 26, 2025",
      image: "/productsAPI-high.jpg",
      url: "https://ecommerce-frontend-products.vercel.app/",
      featured: true,
    },
    {
      id: 2,
      title: "Codeforcer Peersite",
      description:
        "Developed a community for codeforce user to be able to connect with other codeforce user from their own universities, and collab with each other with interactive environment",
      date: "November 20, 2025",
      image: "/codeforce.png",
      url: "https://codeforcerpeersite-frontend.vercel.app/",
      featured: true,
    },
    {
      id: 3,
      title: "Currency Convertor",
      description:
        "Supports 34 global currencies with real-time, highly accurate exchange rates. Optimized for lightning-fast conversions to keep your workflow smooth and efficient.",
      date: "August 18, 2024",
      image: "/currencyconvertor.png",
      url: "https://currencyconvertorreactapp.netlify.app/",
      featured: true,
    },
    {
      id: 4,
      title: "Focus On Today",
      description:
        "Focus on your main task, break it into clear steps, and track your progress throughout the day. Review everything by day’s end to ensure your key task is fully completed.",
      date: "August 03, 2025",
      image: "/focusontoday.png",
      url: "https://focusontoday-tan.vercel.app/",
      featured: true,
    },
    {
      id: 5,
      title: "Movie Details Search",
      description:
        "Search movies by title, genre, or actor, complete with ratings and reviews. Designed for fast, accurate results to help you find the perfect film instantly.",
      date: "August 07, 2024",
      image: "/moviedetailssearch.png",
      url: "https://moviesearchappomdb.netlify.app/",
      featured: true,
    },
    {
      id: 6,
      title: "The Country Project",
      description:
        "Access detailed economic data, includes GDP, inflation, growth indicators. Optimized for exploring trends, comparing statistics over time.",
      date: "September 30, 2025",
      image: "/thecountryproject.png",
      url: "https://countrydetailsbypk.vercel.app/",
      featured: true,
    },
    {
      id: 7,
      title: "The Dashboard",
      description:
        "Track and manage your topics of interest in real time with instant updates and insights. All delivered through a clean, simple, and intuitive interface designed for effortless use.",
      date: "December 09, 2024",
      image: "/thedashboard.png",
      url: "https://dashboard-tesla-ui.vercel.app/dashboard",
      featured: false,
    },
    {
      id: 8,
      title: "The Hamburger",
      description:
        "Made with 100% fresh chicken patties, perfectly grilled for rich, satisfying flavor.Customize it your way with a wide variety of delicious toppings.",
      date: "July 07, 2024",
      image: "/thehamburger.png",
      url: "https://hamburgermenuappnweb.netlify.app/",
      featured: false,
    },
    {
      id: 9,
      title: "The Shoe Company",
      description:
        "Durable, comfortable footwear designed for every occasion. Enjoy fast, reliable delivery right to your door.",
      date: "July 16, 2024",
      image: "/theshoecompany.png",
      url: "https://theshoecompany-tailwind.netlify.app/",
      featured: false,
    },
    {
      id: 10,
      title: "Weather App",
      description:
        "Get real-time weather updates for any location with precise hourly and daily forecasts.Optimized for fast, easy tracking so you always stay ahead of the weather.",
      date: "August 05, 2024",
      image: "/theweatherapp.png",
      url: "https://weatherappchallengejs.netlify.app/",
      featured: false,
    },
  ];

  const featuredBlogs = blogs.filter((blog) => blog.featured);
  const otherBlogs = blogs.filter((blog) => !blog.featured);

  return (
    <div className="relative w-full">
      <div className="relative mx-auto lg:w-[40%] border">
        <NavBar />
        <div className="w-full border-b">
          {/* Header */}
          <div className="backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <ArrowLeft className="h-8 w-8" />
                  </Button>
                </Link>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Projects
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Developed products with live links and code bases
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {blogs.length} projects
                </span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="px-6 py-4">
            {/* Featured Section */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Featured Projects
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent ml-4"></div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {featuredBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href={blog.url}
                    target="_blank"
                    className="group block"
                  >
                    <div className="rounded-sm overflow-hidden transition-all duration-300 shadow-sm shadow-blue-400 hover:shadow-green-400">
                      {/* Image Container */}
                      <div className="relative h-48 bg-gradient-to-br from-blue-100 via-blue-200 to-purple-100">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="stretch transition-transform duration-300"
                          quality={100}
                        />
                      </div>

                      {/* Content */}
                      <div className="px-6 py-4">
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{blog.date}</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {blog.title}
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                          {blog.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* All Articles Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  All Projects
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent ml-4"></div>
              </div>

              <div className="space-y-6">
                {otherBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href={blog.url}
                    target="_blank"
                    className="group block"
                  >
                    <div className="border border-gray-200 dark:border-gray-800 rounded-sm p-4 transition-all duration-300 shadow-sm shadow-blue-400 hover:shadow-green-400">
                      <div className="flex gap-4">
                        {/* Image */}
                        <div className="relative w-24 h-24 flex-shrink-0 rounded-sm overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 items-center">
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            quality={100}
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div>
                              <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded mb-2">
                                {blog.category}
                              </span>
                              <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                {blog.title}
                              </h3>
                            </div>
                            <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 mt-6 flex-shrink-0 transition-colors" />
                          </div>

                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                            {blog.description}
                          </p>

                          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{blog.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
