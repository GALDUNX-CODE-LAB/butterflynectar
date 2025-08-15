import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Hamburgernav from "@/components/HamburgerNav";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { Sidebar } from "@/components/Sidebar";
// import { AppSidebar } from "@/components/app-sidebar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flight_proj",
  description: "Creating a flight stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <div className=" block lg:hidden my-3 w-full p-5 md:p-8">
            <Hamburgernav/>
        </div>
        <div className="flex">
          <div className="hidden lg:block h-[100vh] w-[15%] transition-all duration-200">
            <Sidebar/>
          </div>
          <div className="scrollbar-none lg:h-[100vh] lg:overflow-y-auto px-5 py-3 md:p-8 lg:p-10 w-full md:w-full lg:max-w-[80%] transition-all transform ease-in-out duration-1000 delay-1200">
            {children}
          </div>
        </div>
        
      </body>
    </html>
  );
}
