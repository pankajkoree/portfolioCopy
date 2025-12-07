"use client";

import React, { useEffect, useRef, useState } from "react";
import { NeatGradient } from "@firecms/neat";

export default function NeatBackground() {
  const canvasRef = useRef(null);
  const neatRef = useRef(null);
  const [theme, setTheme] = useState("light");

  // Light theme config - moved outside useEffect to avoid recreation
  const lightConfig = {
    colors: [
      { color: "#D6C9C9", enabled: true },
      { color: "#DDF3F3", enabled: true },
      { color: "#EAEADA", enabled: true },
      { color: "#DDE4E1", enabled: true },
      { color: "#D4D2E0", enabled: true },
    ],
    speed: 2.5,
    horizontalPressure: 3,
    verticalPressure: 4,
    waveFrequencyX: 2,
    waveFrequencyY: 3,
    waveAmplitude: 5,
    shadows: 1,
    highlights: 5,
    colorBrightness: 1,
    colorSaturation: 7,
    wireframe: false,
    colorBlending: 8,
    backgroundColor: "#003FFF",
    backgroundAlpha: 0,
    grainScale: 0,
    grainSparsity: 0,
    grainIntensity: 0,
    grainSpeed: 1,
    resolution: 1,
    yOffset: 0,
  };

  // Dark theme config - moved outside useEffect to avoid recreation
  const darkConfig = {
    colors: [
      { color: "#121111", enabled: true },
      { color: "#151E1E", enabled: true },
      { color: "#5C5B58", enabled: true },
      { color: "#0A140D", enabled: true },
      { color: "#181527", enabled: true },
    ],
    speed: 2.5,
    horizontalPressure: 3,
    verticalPressure: 4,
    waveFrequencyX: 2,
    waveFrequencyY: 3,
    waveAmplitude: 5,
    shadows: 1,
    highlights: 5,
    colorBrightness: 1,
    colorSaturation: 7,
    wireframe: false,
    colorBlending: 8,
    backgroundColor: "#003FFF",
    backgroundAlpha: 0,
    grainScale: 0,
    grainSparsity: 0,
    grainIntensity: 0,
    grainSpeed: 1,
    resolution: 1,
    yOffset: 0,
  };

  useEffect(() => {
    // Function to check current theme
    const checkTheme = () => {
      return document.documentElement.classList.contains("dark") ? "dark" : "light";
    };

    // Set initial theme
    setTheme(checkTheme());

    // Create a MutationObserver to watch for theme changes
    const observer = new MutationObserver(() => {
      const newTheme = checkTheme();
      if (newTheme !== theme) {
        setTheme(newTheme);
      }
    });

    // Observe the html element for class changes
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Clean up previous instance
    if (neatRef.current) {
      // Try to destroy previous instance if the library supports it
      if (neatRef.current.destroy) {
        neatRef.current.destroy();
      }
    }

    const config = theme === "dark" ? darkConfig : lightConfig;
    
    const neat = new NeatGradient({
      ref: canvasRef.current,
      ...config,
    });

    neat.speed = 6;
    neatRef.current = neat;

    // Cleanup on unmount
    return () => {
      if (neatRef.current) {
        if (neatRef.current.destroy) {
          neatRef.current.destroy();
        }
        neatRef.current = null;
      }
    };
  }, [theme]); // Re-run when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen -z-50 pointer-events-none"
    />
  );
}