"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import AuthModal from "../AuthModal";
import { useOpenModal } from "@/hooks/useOpenModal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { setAuthOpen } = useOpenModal();

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-gray-800">
            Ivy<span className="text-[#5849EF] ">Club</span>
          </Link>

          <nav className="hidden md:flex gap-6 text-gray-700 text-sm">
            <Link href="/#" className="hover:text-[#5849EF] ">
              Home
            </Link>
            <Link href="/#explore" className="hover:text-[#5849EF] ">
              Explore
            </Link>
            <Link href="/#flight-status" className="hover:text-[#5849EF] ">
              Flight Status
            </Link>
            <Link href="/#reviews" className="hover:text-[#5849EF] ">
              Reviews
            </Link>
            <Link href="/#faqs" className="hover:text-[#5849EF] ">
              FAQs
            </Link>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => setAuthOpen(true)}
              className="px-5 py-2 rounded-full bg-[#5849EF]  text-white text-sm font-medium text-center hover:bg-purple-700"
            >
              Sign In
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col gap-4 p-4">
              <Link href="/" className="hover:text-[#5849EF] ">
                Home
              </Link>
              <Link href="/explore" className="hover:text-[#5849EF] ">
                Explore
              </Link>
              <Link href="/flight-status" className="hover:text-[#5849EF] ">
                Flight Status
              </Link>
              <Link href="/ratings" className="hover:text-[#5849EF] ">
                Ratings
              </Link>
              <Link href="/faqs" className="hover:text-[#5849EF] ">
                FAQs
              </Link>
              <button
                onClick={() => setAuthOpen(true)}
                className="px-5 py-2 rounded-full bg-[#5849EF]  text-white font-medium text-center hover:bg-purple-700"
              >
                Sign In
              </button>
            </nav>
          </div>
        )}
      </header>
      <AuthModal />
    </>
  );
}
