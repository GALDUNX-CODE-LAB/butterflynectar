"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Ivy Club all about?",
    answer:
      "Ivy Club is a platform that helps you enjoy seamless travel bookings, exclusive rewards, and member-only perks.",
  },
  {
    question: "How does Ivy Club stand out from others?",
    answer:
      "Ivy Club provides instant booking, saved details, reward points, and real-time flight updates—making your trips stress-free.",
  },
  {
    question: "What is the possibility I won’t get tired?",
    answer:
      "With personalized services and smooth booking, Ivy Club ensures you save time and energy, so you don’t get overwhelmed.",
  },
  {
    question: "Is Ivy Club staying longer?",
    answer:
      "Yes! We are continuously expanding with new features and partnerships to make your travel experience even better.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-start" id="faqs">
      {/* Left Column */}
      <div>
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 font-Ruska">FAQs You Should Know!</h2>
        <p className="mt-4 text-gray-600 max-w-md text-sm">
          Get to know the most common question that is being asked by people, tourists and our customers.
        </p>

        <div className="mt-6 flex flex-row gap-4">
          <Link
            href="/join"
            className="px-6 py-3 text-sm rounded-full bg-[#5849EF] text-white font-medium hover:bg-purple-700"
          >
            Join Ivy Club
          </Link>
          <Link
            href="/guest"
            className="px-6 py-3 text-sm rounded-full bg-gray-200 text-gray-700 font-medium hover:bg-gray-300"
          >
            Sign In As Guest
          </Link>
        </div>
      </div>

      {/* Right Column (Accordion) */}
      <div className="">
        {faqs.map((item, index) => (
          <div key={index} className="border-b rounded-2xl my-2 px-2 last:border-none bg-[#ECECEC]">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full py-4 text-left font-medium text-gray-900"
            >
              {item.question}
              <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
            </button>

            {openIndex === index && <p className="pb-4 text-gray-600 text-sm">{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
