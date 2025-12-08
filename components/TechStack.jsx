"use client";

import Image from "next/image";
import { useState } from "react";

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = [
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Python", icon: "python" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: "React", icon: "react" },
    { name: "Angular", icon: "angular" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Tanstack Query", icon: "tanstack" },
    { name: "Tailwind", icon: "tailwind" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MySQL", icon: "mysql" },
    { name: "Git", icon: "git" },
    { name: "Postman", icon: "postman" },
    { name: "NPM", icon: "npm" },
    { name: "Docker", icon: "docker" },
    { name: "Figma", icon: "figma" },
    { name: "ShadCN", icon: "shadcn" },
    { name: "Aceternity", icon: "aceternity" },
    { name: "Motion", icon: "motion" },
    { name: "Vercel", icon: "vercel" },
    { name: "Render", icon: "render" },
  ];

  const getSVGIcon = (iconName) => {
    const icons = {
      typescript: (
        <Image
          src="/typescript.svg"
          alt="ts"
          className="w-12 h-12 md:w-16 md:h-16"
          width={0}
          height={0}
          sizes="100vw"
        />
      ),

      javascript: (
        <Image
          src="/JavaScript.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="JavaScript"
        />
      ),
      python: (
        <Image
          src="/Python.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="Python"
        />
      ),
      nodejs: (
        <Image
          src="/Node.js.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="Node"
        />
      ),
      react: (
        <Image
          src="/React.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="React"
        />
      ),
      angular: (
        <Image
          src="/Angular.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="Angular"
        />
      ),
      nextjs: (
        <Image
          src="/nextjs.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="Next"
        />
      ),
      express: (
        <Image
          src="/expressjs.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="expressjs"
        />
      ),
      mongodb: (
        <Image
          src="/mongodb.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="MongoDB"
        />
      ),
      postgresql: (
        <Image
          src="/PostgresSQL.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="PostgresSQL"
        />
      ),
      git: (
        <Image
          src="/Git.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="Git"
        />
      ),
      docker: (
        <Image
          src="/Docker.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="docker"
        />
      ),
      figma: (
        <Image
          src="/Figma.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="figma"
        />
      ),
      tailwind: (
        <Image
          src="/TailwindCSS.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="TailwindCSS"
        />
      ),
      aceternity: (
        <Image
          src="/aceternity.png"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="aceternity"
        />
      ),
      bootstrap: (
        <Image
          src="/Bootstrap.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="bootstrap"
        />
      ),
      mysql: (
        <Image
          src="/MySQL.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="mysql"
        />
      ),
      npm: (
        <Image
          src="/NPM.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="npm"
        />
      ),
      postman: (
        <Image
          src="/Postman.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="postman"
        />
      ),
      render: (
        <Image
          src="/render.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="render"
        />
      ),
      shadcn: (
        <Image
          src="/shadcn.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="shadcn"
        />
      ),
      vercel: (
        <Image
          src="/Vercel.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="vercel"
        />
      ),
      motion: (
        <Image
          src="/motion.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="motion"
        />
      ),
      tanstack: (
        <Image
          src="/tanstack.svg"
          width={0}
          height={0}
          className="w-12 h-12 md:w-16 md:h-16"
          alt="tanstack"
        />
      ),
    };
    return icons[iconName] || icons.typescript;
  };

  return (
    <div className="flex flex-col px-6 py-4 gap-4 border-b">
      <div>
        <p className="text-2xl">Tech Stacks</p>
      </div>
      <div className="bg-gradient-to-r from-[#c5d6d6] via-[#9fa3a3] to-[#bdc7c7] dark:bg-gradient-to-r dark:from-[#2a2b2b] dark:via-[#2a2c2c] dark:to-[#0f0e0e] rounded-sm p-3 md:px-5 md:py-3 lg:p-8 dark:border-zinc-800 inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5 ml-4 md:ml-8 lg:ml-0">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setHoveredTech(idx)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 overflow-hidden shadow-sm hover:shadow-md shadow-blue-400 hover:shadow-green-400 transition-all duration-200 transform hover:scale-110 cursor-pointer flex items-center justify-center dark:bg-gray-300 rounded-sm">
                {getSVGIcon(tech.icon)}
              </div>
              {hoveredTech === idx && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded-sm text-xs shadow-sm z-10 text-center">
                  {tech.name}

                  {/* Arrow */}
                  <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-t-6 border-t-black dark:border-t-white" />
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
