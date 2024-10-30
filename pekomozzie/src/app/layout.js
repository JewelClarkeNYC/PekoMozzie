import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  logo: "/PekoMozzieLogo.png",
  description: "The only monster that only eats job applications",
  slogan: "It Cannot See It Cannot Think It Cannot Hear Or Feel, It Lives Only To Make Your Application Into It's Meal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-300">
        <main>{children}</main>
      </body>
    </html>
  )
}
