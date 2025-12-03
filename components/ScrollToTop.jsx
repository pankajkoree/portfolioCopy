"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (!homeSection) return;

      const offset = homeSection.offsetHeight;
      setShowButton(window.scrollY > offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 z-50 w-[50%] flex justify-end pointer-events-none">
      <button
        onClick={scrollToTop}
        className={cn(
          "pointer-events-auto p-3 mr-4 bg-green-600 text-white rounded-full shadow-lg transition-opacity duration-300",
          showButton ? "opacity-100" : "opacity-0"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ScrollToTop;
