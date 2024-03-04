import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Cabin } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});
const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cabin",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cabin.variable}`}>
        <div className=" flex flex-col">
          <Navbar />
          <div className=" flex">
            <Sidebar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
