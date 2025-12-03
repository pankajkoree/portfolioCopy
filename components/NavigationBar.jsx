import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className="flex gap-4 text-xl">
      <Link href="/components">Components</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/projects">Projects</Link>
    </div>
  );
};

export default NavigationBar;