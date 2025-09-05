"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export type ExploreCategory = "Visa-Free" | "City Breaks" | "Beach" | "Budget";

export type Place = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: ExploreCategory;
  location?: string;
};

export interface ExploreProps {
  places?: Place[];
  onExplore?: (place: Place) => void;
  className?: string;
}

const DEFAULT_PLACES: Place[] = [
  {
    id: "uk-1",
    title: "UK (England)",
    description: "Unlock new experiences and memories with family and friends.",
    price: 300,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1400&auto=format&fit=crop",
    category: "City Breaks",
    location: "London",
  },
  {
    id: "disney-1",
    title: "Disney Land",
    description: "Share magical moments with family and friends at the happiest place.",
    price: 300,
    image: "https://images.unsplash.com/photo-1569937721659-c5f1d4f44fcd?q=80&w=1400&auto=format&fit=crop",
    category: "Visa-Free",
    location: "Paris",
  },
  {
    id: "cuba-1",
    title: "Cuba Beach",
    description: "Sun-kissed shores and calm waters for the perfect getaway.",
    price: 300,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
    category: "Beach",
    location: "Varadero",
  },
  {
    id: "california-1",
    title: "California Hike",
    description: "Golden cliffs, ocean breeze, and miles of scenic trails.",
    price: 300,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
    category: "Budget",
    location: "Big Sur",
  },
  {
    id: "cuba-2",
    title: "Cuba Beach",
    description: "Unwind by turquoise waters with friends and family.",
    price: 300,
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1400&auto=format&fit=crop",
    category: "Beach",
  },
  {
    id: "california-2",
    title: "California Hike",
    description: "Rugged coastlines and breathtaking views on every turn.",
    price: 300,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop",
    category: "Budget",
  },
  {
    id: "disney-2",
    title: "Disney Land",
    description: "Create memories that last a lifetime with your favorite people.",
    price: 300,
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1400&auto=format&fit=crop",
    category: "Visa-Free",
  },
  {
    id: "uk-2",
    title: "UK (England)",
    description: "Iconic architecture, rich history, vibrant neighborhoods.",
    price: 300,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop",
    category: "City Breaks",
  },
];

const FILTERS: ("All" | ExploreCategory)[] = ["All", "Visa-Free", "City Breaks", "Beach", "Budget"];

const themes: Record<ExploreCategory, { button: string; chip: string; ring: string }> = {
  "Visa-Free": {
    button: "bg-violet-600 hover:bg-violet-700",
    chip: "bg-violet-600 text-white",
    ring: "ring-violet-200",
  },
  "City Breaks": {
    button: "bg-emerald-600 hover:bg-emerald-700",
    chip: "bg-emerald-600 text-white",
    ring: "ring-emerald-200",
  },
  Beach: {
    button: "bg-rose-600 hover:bg-rose-700",
    chip: "bg-rose-600 text-white",
    ring: "ring-rose-200",
  },
  Budget: {
    button: "bg-amber-500 hover:bg-amber-600",
    chip: "bg-amber-500 text-white",
    ring: "ring-amber-200",
  },
};

export default function Explore({ places, onExplore, className = "" }: ExploreProps) {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const data = places && places.length ? places : DEFAULT_PLACES;

  const filtered = useMemo(() => {
    if (active === "All") return data;
    return data.filter((p) => p.category === active);
  }, [active, data]);

  return (
    <section className={`relative w-full ${className}`} id="explore">
      <div className="absolute -top-10 -right-10 rounded-full bg-gradient-to-tr from-violet-400/20 to-fuchsia-400/20 blur-2xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="flex flex-col gap-4 ">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-Ruska">Place to Explore</h2>
            <p className="mt-1 text-sm text-muted-foreground/80 max-w-xl">
              Discover amazing destinations at unbeatable prices and share the joy of travel with the people who matter
              most.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-3 h-8 rounded-full text-xs font-medium shadow-sm transition ${
                    isActive
                      ? f === "All"
                        ? "bg-violet-600 text-white"
                        : themes[f as ExploreCategory].chip
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </header>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((place) => (
            <article
              key={place.id}
              className={`group rounded-2xl bg-white ring-1 ring-gray-100 shadow-sm overflow-hidden hover:shadow-md transition ${
                themes[place.category].ring
              }`}
            >
              <div className="relative">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={place.image}
                    alt={place.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    priority={false}
                  />
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold leading-6 line-clamp-1">{place.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold">${place.price}</span>
                  </div>
                </div>
                <p className="mt-1 text-[11px] text-gray-600 leading-5 line-clamp-2">{place.description}</p>
                <div className="mt-3">
                  <button
                    onClick={() => onExplore?.(place)}
                    className={`w-full text-xs font-semibold px-3 py-2 rounded-lg text-white transition ${
                      themes[place.category].button
                    }`}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
