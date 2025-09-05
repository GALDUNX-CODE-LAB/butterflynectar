"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

export type ReviewItem = {
  id: string;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  text: string;
  variant?: "white" | "lime" | "red" | "indigo" | "black" | "violet";
};

export interface ReviewProps {
  overall?: number;
  reviews?: ReviewItem[];
  className?: string;
}

const DEFAULT_REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    name: "John Doe",
    avatar: "https://i.pravatar.cc/80?img=12",
    date: "10 - 10 - 2025",
    rating: 3.5,
    text: "The website makes flight booking simple and stress‑free. The search is fast, prices are clear, and I love how I can save my traveler details for future trips.",
    variant: "white",
  },
  {
    id: "r2",
    name: "Jane Doe",
    avatar: "https://i.pravatar.cc/80?img=22",
    date: "10 - 10 - 2025",
    rating: 4.5,
    text: "The website makes flight booking simple and stress‑free. The search is fast, prices are clear, and I love how I can save my traveler details for future trips.",
    variant: "lime",
  },
  {
    id: "r3",
    name: "Ahmed Ali",
    avatar: "https://i.pravatar.cc/80?img=32",
    date: "10 - 10 - 2025",
    rating: 4.2,
    text: "The website makes flight booking simple and stress‑free. The search is fast, prices are clear, and I love how I can save my traveler details for future trips.",
    variant: "red",
  },
  {
    id: "r4",
    name: "Emeka Obi",
    avatar: "https://i.pravatar.cc/80?img=28",
    date: "10 - 10 - 2025",
    rating: 3.8,
    text: "The website makes flight booking simple and stress‑free. The search is fast, prices are clear, and I love how I can save my traveler details for future trips.",
    variant: "indigo",
  },
  {
    id: "r5",
    name: "Owens O.",
    avatar: "https://i.pravatar.cc/80?img=5",
    date: "10 - 10 - 2025",
    rating: 4.9,
    text: "The website makes flight booking simple and stress‑free. The search is fast, prices are clear, and I love how I can save my traveler details for future trips.",
    variant: "black",
  },
  {
    id: "r6",
    name: "Avery Hill",
    avatar: "https://i.pravatar.cc/80?img=45",
    date: "10 - 10 - 2025",
    rating: 4.1,
    text: "The website makes flight booking simple and stress‑free. The search is fast, prices are clear, and I love how I can save my traveler details for future trips.",
    variant: "violet",
  },
];

function StarSVG(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path
        d="M12 2.5l2.94 6.06 6.69.97-4.83 4.71 1.14 6.66L12 17.98 6.06 20.9l1.14-6.66L2.37 9.53l6.69-.97L12 2.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarRating({ rating, dark }: { rating: number; dark?: boolean }) {
  const percent = Math.max(0, Math.min(100, (rating / 5) * 100));
  return (
    <div className="relative inline-flex" aria-label={`Rated ${rating} out of 5`}>
      <div className={`flex gap-1 ${dark ? "text-white/25" : "text-gray-300"}`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <StarSVG key={`b-${i}`} className="h-4 w-4" />
        ))}
      </div>
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${percent}%` }}>
        <div className="flex gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarSVG key={`f-${i}`} className="h-4 w-4" />
          ))}
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ r }: { r: ReviewItem }) {
  const variants: Record<NonNullable<ReviewItem["variant"]>, string> = {
    white: "bg-white text-gray-700 ring-1 ring-gray-200",
    lime: "bg-lime-300 text-black",
    red: "bg-rose-600 text-white",
    indigo: "bg-indigo-700 text-white",
    black: "bg-black text-white",
    violet: "bg-violet-600/60 text-white ring-1 ring-white/15",
  };
  const isDark = r.variant !== "white" && r.variant !== "lime";
  return (
    <article className={`rounded-2xl p-4 ${variants[r.variant || "white"]}`}>
      <div className="flex items-center gap-2">
        <StarRating rating={r.rating} dark={isDark} />
      </div>
      <p className={`mt-3 text-sm leading-6 ${isDark ? "text-white/90" : "text-gray-700"}`}>{r.text}</p>
      <div className="mt-4 flex items-center gap-3">
        <Image src={r.avatar} alt={r.name} width={28} height={28} className="rounded-full" />
        <div>
          <div className="text-xs font-semibold">{r.name}</div>
          <div className={`text-[10px] ${isDark ? "text-white/70" : "text-gray-500"}`}>{r.date}</div>
        </div>
      </div>
    </article>
  );
}

export default function Review({ overall = 4.8, reviews = DEFAULT_REVIEWS, className = "" }: ReviewProps) {
  return (
    <section className={`relative w-full bg-[rgb(82,63,216)]/95 text-white ${className}`} id="reviews">
      <div className="absolute -top-20 -right-24 rounded-full bg-fuchsia-400/30 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-Ruska">Travellers Rate Us</h2>
          <div className="mt-2 text-2xl sm:text-3xl font-extrabold font-Ruska">★ {overall}/5</div>
          <p className="mt-2 text-sm text-white/80 max-w-2xl mx-auto">
            Discover amazing destinations at unbeatable prices and share the joy of travel with the people who matter
            most.
          </p>
          <div className="mt-4">
            <button className="inline-flex items-center gap-2 rounded-full bg-white text-black text-xs font-semibold px-4 py-2">
              Read More Reviews <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <ReviewCard key={r.id} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
