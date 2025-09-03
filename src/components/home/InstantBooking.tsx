"use client";

import Image from "next/image";
import Link from "next/link";

export default function InstantBooking() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
      <div className="w-full h-64 md:h-80 relative rounded-xl overflow-hidden shadow-lg">
        <Image src="/plane2.jpg" alt="Airplane" fill className="object-cover" />
      </div>

      <div>
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 leading-tight font-Ruska capitalize">
          Instant Ticket Booking, <br />
          No Stress Involved
        </h2>
        <p className="mt-4 text-gray-600 text-base">
          With our instant ticket booking system, you can secure your flights in just a few clicks. No long forms, no
          hidden steps—just a smooth and stress-free process that gets you from searching to booking in minutes.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link
            href="/search"
            className="px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700"
          >
            Search Flight
          </Link>
          <Link href="/guest" className="px-6 py-3 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300">
            Sign In As Guest
          </Link>
        </div>
      </div>
    </section>
  );
}
