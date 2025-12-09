"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Calendar, Clock, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const BlogPage = () => {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Products API: How I Built It, What It Does, and Why It Matters",
      description:
        "Supercharge front-end workflow with our plug-and-play e-commerce API complete JSON data, zero backend setup.",
      readTime: "2 min read",
      date: "Dec 01, 2025",
      category: "API Development",
      image: "/products-api.png",
      url: "https://medium.com/@pankajkoree/products-api-how-i-built-it-what-it-does-and-why-it-matters-2efaf5f1ed0e",
      featured: true,
    },
    {
      id: 2,
      title: "CodeForcer PeerSite: to Competitive Programmers",
      description:
        "Building CodeForcer PeerSite: A comprehensive guide to connecting competitive programmers worldwide.",
      readTime: "5 min read",
      date: "Dec 06, 2025",
      category: "Web Development",
      image: "/codeforcer-peersite.png",
      url: "https://medium.com/@pankajkoree/building-codeforcer-peer-site-a-comprehensive-guide-to-connecting-competitive-programmers-df9ab21a8662",
      featured: true,
    },
    {
      id: 3,
      title: "Building Scalable Microservices with Node.js",
      description:
        "Learn how to design and implement scalable microservices architecture using Node.js and Docker.",
      readTime: "3 min read",
      date: "Dec 07, 2025",
      category: "Backend",
      image: "/nodejs.png",
      url: "https://medium.com/@pankajkoree/building-scalable-microservices-with-node-js-a-complete-guide-277b0c46d731",
      featured: false,
    },
    {
      id: 4,
      title: "The Future of Web Development in 2026",
      description:
        "Exploring emerging trends and technologies that will shape web development in the coming year.",
      readTime: "3 min read",
      date: "Dec 08, 2025",
      category: "Trends",
      image: "/webdev-future.png",
      url: "https://medium.com/@pankajkoree/the-future-of-web-development-in-2026-trends-that-will-redefine-the-web-d02c7d96a3d0",
      featured: true,
    },
    {
      id: 5,
      title: "Mastering Next.js 16: Server Components & Beyond",
      description:
        "Deep dive into Next.js 16 features including server components, caching strategies, and performance optimization.",
      readTime: "4 min read",
      date: "Dec 08, 2025",
      category: "Frontend",
      image: "/nextjs.png",
      url: "https://medium.com/@pankajkoree/mastering-next-js-16-server-components-beyond-39337d8ce192",
      featured: false,
    },
    {
      id: 6,
      title: "DevOps Best Practices for Modern Teams",
      description:
        "Essential DevOps practices that every development team should implement for smoother deployments.",
      readTime: "3 min read",
      date: "Dec 09, 2025",
      category: "DevOps",
      image: "/devops.png",
      url: "https://medium.com/@pankajkoree/devops-best-practices-for-modern-teams-371cef553a3c",
      featured: true,
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
                    Blogs
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Thoughts and insights on software development
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {blogs.length} articles
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
                  Featured Articles
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
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-200 rounded-sm">
                            {blog.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="px-6 py-4">
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{blog.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{blog.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {blog.title}
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                          {blog.description}
                        </p>

                        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                            Read article
                          </span>
                          <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                        </div>
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
                  All Articles
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

            {/* Call to Action */}
            <div className="mt-12 pt-4 border-gray-200 dark:border-gray-800">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Want to see more content?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                  Follow me on Medium for regular updates on web development,
                  APIs, and software engineering.
                </p>
                <Link href="https://medium.com/@pankajkoree" target="_blank">
                  <Button className="gap-2">
                    <span>Follow on Medium</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
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

export default BlogPage;
