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
        <Image src="/TypeScript.svg" width={60} height={60} alt="ts" />
      ),

      javascript: (
        <Image src="/JavaScript.svg" width={60} height={60} alt="JavaScript" />
      ),
      python: <Image src="/Python.svg" width={60} height={60} alt="Python" />,
      nodejs: <Image src="/Node.js.svg" width={60} height={60} alt="Node" />,
      react: <Image src="/React.svg" width={60} height={60} alt="React" />,
      angular: (
        <Image src="/Angular.svg" width={60} height={60} alt="Angular" />
      ),
      nextjs: <Image src="/Nextjs.svg" width={60} height={60} alt="Next" />,
      express: (
        <Image src="/expressjs.svg" width={60} height={60} alt="expressjs" />
      ),
      mongodb: (
        <Image src="/MongoDB.svg" width={60} height={60} alt="MongoDB" />
      ),
      postgresql: (
        <Image
          src="/PostgresSQL.svg"
          width={60}
          height={60}
          alt="PostgresSQL"
        />
      ),
      git: <Image src="/Git.svg" width={60} height={60} alt="Git" />,
      docker: <Image src="/docker.svg" width={60} height={60} alt="docker" />,
      figma: <Image src="/figma.svg" width={60} height={60} alt="figma" />,
      tailwind: (
        <Image
          src="/TailwindCSS.svg"
          width={60}
          height={60}
          alt="TailwindCSS"
        />
      ),
      aceternity: (
        <Image src="/aceternity.png" width={60} height={60} alt="aceternity" />
      ),
      bootstrap: (
        <Image src="/bootstrap.svg" width={60} height={60} alt="bootstrap" />
      ),
      mysql: <Image src="/mysql.svg" width={60} height={60} alt="mysql" />,
      npm: <Image src="/npm.svg" width={60} height={60} alt="npm" />,
      postman: (
        <Image src="/postman.svg" width={60} height={60} alt="postman" />
      ),
      render: <Image src="/render.svg" width={60} height={60} alt="render" />,
      shadcn: <Image src="/shadcn.svg" width={60} height={60} alt="shadcn" />,
      vercel: <Image src="/vercel.svg" width={60} height={60} alt="vercel" />,
      motion: <Image src="/motion.svg" width={60} height={60} alt="motion" />,
      tanstack: (
        <Image src="/tanstack.svg" width={60} height={60} alt="tanstack" />
      ),
    };
    return icons[iconName] || icons.typescript;
  };

  return (
    <div className="flex flex-col px-6 py-4 gap-4 border-b">
      <div>
        <p className="text-2xl">Tech Stacks</p>
      </div>
      <div className="bg-white dark:bg-zinc-900 rounded-sm p-8 dark:border-zinc-800 inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-5">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setHoveredTech(idx)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="w-16 h-16 overflow-hidden shadow-sm hover:shadow-md shadow-blue-400 hover:shadow-green-400 transition-all duration-200 transform hover:scale-110 cursor-pointer flex items-center justify-center dark:bg-gray-300 rounded-sm">
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
