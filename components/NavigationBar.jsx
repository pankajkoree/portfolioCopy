"use client";

import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className="flex gap-6 text-lg">
      <Link
        href="/components"
        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        Components
      </Link>
      <Link
        href="/blogs"
        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        Blogs
      </Link>
      <Link
        href="/projects"
        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        Projects
      </Link>
    </div>
  );
};

export default NavigationBar;
