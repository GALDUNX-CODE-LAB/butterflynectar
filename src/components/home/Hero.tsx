"use client";

import { useOpenModal } from "@/hooks/useOpenModal";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const { setAuthOpen } = useOpenModal();

  return (
    <>
      <section className="relative  w-full pt-24 pb-16 text-white hero  ">
        <div className="relative max-w-7xl  z-10 mx-auto px-4 py-20 ">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight font-Ruska">
            BOOK SMARTER. <br />
            FLY FASTER.
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-blue-100">
            You can begin your search right away as a guest, or sign in to Club Ivy to enjoy a faster, personalized
            booking experience.
          </p>

          <div className="mt-8 flex gap-8 font-Ruska">
            <div className="border-r-2 px-2 ">
              <p className="text-xl font-bold">4.3</p>
              <p className="text-xs">Ratings</p>
            </div>
            <div className="border-r-2 px-2 ">
              <p className="text-xl font-bold">10K+</p>
              <p className="text-xs">Happy Customers</p>
            </div>
            <div className="border-r-2 px-2 ">
              <p className="text-xl font-bold">20K+</p>
              <p className="text-xs">Bookings</p>
            </div>
          </div>

          <div className="mt-6 flex flex-row gap-4">
            <button onClick={() => setAuthOpen(true)} className="px-6 py-3 bg-[#5849EF] rounded-full font-medium">
              Sign In
            </button>
            <button className="px-6 py-3 rounded-full bg-white text-[#5849EF] font-medium hover:bg-gray-100">
              Buy a ticket
            </button>
          </div>
        </div>
      </section>

      <button className="bg-[#5849EF] z-50 px-4 text-sm cursor-pointer rounded-full p-2 fixed bottom-3 right-3 text-white flex gap-3 items-center justify-center">
        Chat with us <FaWhatsapp />
      </button>
    </>
  );
}
