"use client";

import { useState } from "react";

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = [
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Python", icon: "python" },
    { name: "Node.js", icon: "nodejs" },
    { name: "React", icon: "react" },
    { name: "Angular", icon: "angular" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Express", icon: "express" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Git", icon: "git" },
    { name: "Docker", icon: "docker" },
    { name: "Figma", icon: "figma" },
    { name: "Tailwind", icon: "tailwind" },
  ];

  const getSVGIcon = (iconName) => {
    const icons = {
      typescript: (
        <svg viewBox="0 0 128 128">
          <rect fill="#3178c6" x="0" y="0" width="128" height="128" rx="10" />
          <text
            x="64"
            y="80"
            fontSize="60"
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
            fontFamily="Arial"
          >
            TS
          </text>
        </svg>
      ),
      javascript: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <rect fill="#f7df1e" x="0" y="0" width="128" height="128" rx="10" />
          <text
            x="64"
            y="80"
            fontSize="60"
            fontWeight="bold"
            fill="black"
            textAnchor="middle"
            fontFamily="Arial"
          >
            JS
          </text>
        </svg>
      ),
      python: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <defs>
            <linearGradient id="pythonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#3776ab", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#ffd43b", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <rect
            fill="url(#pythonGrad)"
            x="0"
            y="0"
            width="128"
            height="128"
            rx="10"
          />
          <text
            x="64"
            y="80"
            fontSize="50"
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
            fontFamily="Arial"
          >
            Py
          </text>
        </svg>
      ),
      nodejs: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <rect fill="#68a063" x="0" y="0" width="128" height="128" rx="10" />
          <text
            x="64"
            y="80"
            fontSize="50"
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
            fontFamily="Arial"
          >
            Node
          </text>
        </svg>
      ),
      react: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <rect fill="#61dafb" x="0" y="0" width="128" height="128" rx="10" />
          <circle cx="64" cy="64" r="12" fill="#222" />
          <ellipse
            cx="64"
            cy="64"
            rx="35"
            ry="15"
            fill="none"
            stroke="#222"
            strokeWidth="3"
          />
          <ellipse
            cx="64"
            cy="64"
            rx="35"
            ry="15"
            fill="none"
            stroke="#222"
            strokeWidth="3"
            transform="rotate(60 64 64)"
          />
          <ellipse
            cx="64"
            cy="64"
            rx="35"
            ry="15"
            fill="none"
            stroke="#222"
            strokeWidth="3"
            transform="rotate(120 64 64)"
          />
        </svg>
      ),
      angular: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <rect fill="#dd0031" x="0" y="0" width="128" height="128" rx="10" />
          <polygon points="64,20 100,100 28,100" fill="white" />
        </svg>
      ),
      nextjs: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <rect fill="#000" x="0" y="0" width="128" height="128" rx="10" />
          <text
            x="64"
            y="80"
            fontSize="45"
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
            fontFamily="Arial"
          >
            Next
          </text>
        </svg>
      ),
      express: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <rect fill="#000" x="0" y="0" width="128" height="128" rx="10" />
          <text
            x="64"
            y="80"
            fontSize="50"
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
            fontFamily="Arial"
          >
            E
          </text>
        </svg>
      ),
      mongodb: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <rect fill="#13aa52" x="0" y="0" width="128" height="128" rx="10" />
          <path
            d="M 64 30 Q 75 40, 75 60 Q 75 80, 64 90 Q 53 80, 53 60 Q 53 40, 64 30"
            fill="white"
          />
        </svg>
      ),
      postgresql: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <rect fill="#336791" x="0" y="0" width="128" height="128" rx="10" />
          <text
            x="64"
            y="80"
            fontSize="50"
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
            fontFamily="Arial"
          >
            PG
          </text>
        </svg>
      ),
      git: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <rect fill="#f34f29" x="0" y="0" width="128" height="128" rx="10" />
          <text
            x="64"
            y="80"
            fontSize="60"
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
            fontFamily="Arial"
          >
            G
          </text>
        </svg>
      ),
      docker: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <rect fill="#2496ed" x="0" y="0" width="128" height="128" rx="10" />
          <text
            x="64"
            y="80"
            fontSize="50"
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
            fontFamily="Arial"
          >
            🐳
          </text>
        </svg>
      ),
      figma: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <rect fill="#f24e1e" x="0" y="0" width="128" height="128" rx="10" />
          <circle cx="64" cy="64" r="20" fill="white" />
        </svg>
      ),
      tailwind: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <rect fill="#06b6d4" x="0" y="0" width="128" height="128" rx="10" />
          <text
            x="64"
            y="80"
            fontSize="45"
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
            fontFamily="Arial"
          >
            TW
          </text>
        </svg>
      ),
    };
    return icons[iconName] || icons.typescript;
  };

  return (
    <div className="flex flex-col px-6 py-4 gap-4">
      <div>
        <p className="text-2xl">Tech Stacks</p>
      </div>
      <div className="bg-white rounded-sm shadow-lg p-8 border border-red-500">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-6">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setHoveredTech(idx)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110 cursor-pointer">
                {getSVGIcon(tech.icon)}
              </div>
              {hoveredTech === idx && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-0 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap z-10">
                  {tech.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
