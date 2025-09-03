"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="font-bold text-xl text-gray-800">
          Ivy<span className="text-purple-600">Air</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-gray-700">
          <Link href="/" className="hover:text-purple-600">
            Home
          </Link>
          <Link href="/explore" className="hover:text-purple-600">
            Explore
          </Link>
          <Link href="/flight-status" className="hover:text-purple-600">
            Flight Status
          </Link>
          <Link href="/ratings" className="hover:text-purple-600">
            Ratings
          </Link>
          <Link href="/faqs" className="hover:text-purple-600">
            FAQs
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/signin"
            className="px-5 py-2 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700"
          >
            Sign In
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col gap-4 p-4">
            <Link href="/" className="hover:text-purple-600">
              Home
            </Link>
            <Link href="/explore" className="hover:text-purple-600">
              Explore
            </Link>
            <Link href="/flight-status" className="hover:text-purple-600">
              Flight Status
            </Link>
            <Link href="/ratings" className="hover:text-purple-600">
              Ratings
            </Link>
            <Link href="/faqs" className="hover:text-purple-600">
              FAQs
            </Link>
            <Link
              href="/signin"
              className="px-5 py-2 rounded-full bg-purple-600 text-white font-medium text-center hover:bg-purple-700"
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
