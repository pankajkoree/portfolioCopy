import NeatBackground from "@/components/Neat-Background";
import "./globals.css";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.className} dark:bg-[#080808]`}>
        <NeatBackground />
        {children}
      </body>
    </html>
  );
}
