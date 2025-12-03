import Image from "next/image";
import Link from "next/link";

const HonorsAndAwards = () => {
  return (
    <div className="flex flex-col px-6 py-4 gap-4">
      {/* poster presentation */}
      <div className="grid grid-cols-[10%_80%_10%] border items-center">
        <div>
          <Image src="/awards.svg" width={64} height={64} alt="awards" />
        </div>
        <div>
          <p>First place in poster presentation</p>
        </div>

        <Link href="#" target="_blank">
          <div className="relative group inline-block">
            <Image src="/document.svg" width={32} height={32} alt="awards" />

            <div
              className="absolute -top-12 left-1/4 -translate-x-1/2 
               whitespace-nowrap rounded-md bg-black dark:bg-white text-white dark:text-gray-900 
               text-xs px-4 py-2 opacity-0 
               group-hover:opacity-100 transition 
               pointer-events-none shadow-lg
               after:content-[''] after:absolute after:top-full after:left-1/2 
               after:-translate-x-1/2 after:border-4 
               after:border-transparent after:border-t-black dark:after:border-t-white"
            >
              See attachment
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HonorsAndAwards;
