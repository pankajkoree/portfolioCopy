import Image from "next/image";

const Skills = () => {
  return (
    <div className="relative flex flex-col">
      <h1 className="text-xl font-bold">Skills</h1>
      {/* frontend */}
      <div>
        {/* heading */}
        <div>
          <h1 className="text-xl font-bold">✨Frontend</h1>
          <p className="text-xl">Building responsive and modern interfaces</p>
        </div>
        {/* end heading */}
        {/* image and caption */}
        <div className="relative flex md:gap-8">
          <div className="relative flex flex-col items-center p-2">
            <Image
              src="/javascript.png"
              alt="javascript"
              width={40}
              height={40}
              className="transition-transform duration-400 ease-in-out hover:scale-125 m-2"
            />
            <p>JavaScript</p>
          </div>

          <div className="relative flex flex-col items-center p-2">
            <Image
              src="/tailwind.png"
              alt="tailwind"
              width={40}
              height={40}
              className="transition-transform duration-400 ease-in-out hover:scale-125 m-2"
            />
            <p>Tailwind</p>
          </div>
          <div className="relative flex flex-col items-center p-2">
            <Image
              src="/typescript.png"
              alt="typescript"
              width={40}
              height={40}
              className="transition-transform duration-400 ease-in-out hover:scale-125 m-2"
            />
            <p>TypeScript</p>
          </div>
          <div className="relative flex flex-col items-center p-2">
            <Image
              src="/react.png"
              alt="react"
              width={40}
              height={40}
              className="transition-transform duration-400 ease-in-out hover:scale-125 m-2"
            />
            <p>React</p>
          </div>
          <div className="relative flex flex-col items-center p-2">
            <Image
              src="/nextjs.png"
              alt="nextjs"
              width={40}
              height={40}
              className="transition-transform duration-400 ease-in-out hover:scale-125 m-2"
            />
            <p>NextJS</p>
          </div>
          {/* end image and caption */}
        </div>
      </div>
      {/* frontend */}

      {/* backend */}

      <div>
        {/* heading */}
        <div>
          <h1 className="text-xl font-bold">✨Backend</h1>
          <p className="text-xl">Creating robust server-side applications</p>
        </div>
        {/* end heading */}

        {/* images and caption */}
        <div className="relative flex md:gap-8">
          <div className="relative flex flex-col items-center p-2">
            <Image
              src="/nodejs.png"
              alt="nodejs"
              width={40}
              height={40}
              className="transition-transform duration-400 ease-in-out hover:scale-125 m-2"
            />
            <p>Node JS</p>
          </div>
          <div className="relative flex flex-col items-center p-2">
            <Image
              src="/express.png"
              alt="expressjs"
              width={40}
              height={40}
              className="transition-transform duration-400 ease-in-out hover:scale-125 m-2"
            />
            <p>Express JS</p>
          </div>
          <div className="relative flex flex-col items-center p-2">
            <Image
              src="/mongodb.png"
              alt="mongodb"
              width={40}
              height={40}
              className="transition-transform duration-400 ease-in-out hover:scale-125 m-2"
            />
            <p>MongoDB</p>
          </div>
          <div className="relative flex flex-col items-center p-2">
            <Image
              src="/mysql.png"
              alt="mysql"
              width={40}
              height={40}
              className="transition-transform duration-400 ease-in-out hover:scale-125 m-2"
            />
            <p>MySQL</p>
          </div>
        </div>
        {/* end images and caption */}
      </div>
      {/* backend */}

      {/* tools and softwares */}
      <div>
        {/* heading */}
        <div>
          <h1 className="text-xl font-bold">✨Tools & Software</h1>
          <p className="text-xl">
            Utilizing tools and software to enhance productivity
          </p>
        </div>
        {/* end heading */}
        {/* images and caption */}
        <div className="relative flex md:gap-8">
          <div className="relative flex flex-col items-center p-2">
            <Image
              src="/git.png"
              alt="git"
              width={40}
              height={40}
              className="transition-transform duration-400 ease-in-out hover:scale-125 m-2"
            />
            <p>Git</p>
          </div>
          <div className="relative flex flex-col items-center p-2">
            <Image
              src="/postman.png"
              alt="postman"
              width={40}
              height={40}
              className="transition-transform duration-400 ease-in-out hover:scale-125 m-2"
            />
            <p>Postman</p>
          </div>
          <div className="relative flex flex-col items-center p-2">
            <Image
              src="/shadcn.jpg"
              alt="shadcn"
              width={40}
              height={40}
              className="transition-transform duration-400 ease-in-out hover:scale-125 m-2"
            />
            <p>Shadcn UI</p>
          </div>
          <div className="relative flex flex-col items-center p-2">
            <Image
              src="/aceternity.png"
              alt="aceternity"
              width={40}
              height={40}
              className="transition-transform duration-400 ease-in-out hover:scale-125 m-2"
            />
            <p>Aceternity UI</p>
          </div>
          <div className="relative flex flex-col items-center p-2">
            <Image
              src="/npm.png"
              alt="npm"
              width={40}
              height={40}
              className="transition-transform duration-400 ease-in-out hover:scale-125 m-2"
            />
            <p>NPM</p>
          </div>
        </div>
        {/* end images and caption */}
      </div>
      {/* tools and softwares */}
    </div>
  );
};
export default Skills;
