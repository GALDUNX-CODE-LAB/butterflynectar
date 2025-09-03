"use client";

import Image from "next/image";
import { useRef } from "react";
import { Facebook, Linkedin, Youtube, Twitter, ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";

export type Platform = "facebook" | "linkedin" | "x" | "youtube";

export type FeedItem = {
  id: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  platform: Platform;
  href?: string;
};

export interface SocialMediaFeedProps {
  items?: FeedItem[];
  className?: string;
}

const DEFAULT_ITEMS: FeedItem[] = [
  {
    id: "1",
    title: "The main importance of flight attendant on a plane for passengers welfare",
    date: "APR 26, 2025",
    readTime: "20MIN",
    image: "https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=1200&auto=format&fit=crop",
    platform: "facebook",
    href: "#",
  },
  {
    id: "2",
    title: "The main importance of flight attendant on a plane for passengers welfare",
    date: "APR 26, 2025",
    readTime: "20MIN",
    image: "https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=1200&auto=format&fit=crop",
    platform: "x",
    href: "#",
  },
  {
    id: "3",
    title: "The main importance of flight attendant on a plane for passengers welfare",
    date: "APR 26, 2025",
    readTime: "20MIN",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop",
    platform: "linkedin",
    href: "#",
  },
  {
    id: "4",
    title: "The main importance of flight attendant on a plane for passengers welfare",
    date: "APR 26, 2025",
    readTime: "20MIN",
    image: "https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=1200&auto=format&fit=crop",
    platform: "youtube",
    href: "#",
  },
];

const platformTheme: Record<Platform, { label: string; chip: string; icon: any }> = {
  facebook: { label: "View on Facebook", chip: "bg-lime-300 text-black", icon: <Facebook size={14} /> },
  linkedin: { label: "View on LinkedIn", chip: "bg-indigo-500 text-white", icon: <Linkedin size={14} /> },
  x: { label: "View on X", chip: "bg-black text-white", icon: <Twitter size={14} /> },
  youtube: { label: "View on Youtube", chip: "bg-yellow-300 text-black", icon: <Youtube size={14} /> },
};

export default function SocialMediaFeed({ items, className = "" }: SocialMediaFeedProps) {
  const data = items && items.length ? items : DEFAULT_ITEMS;
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  return (
    <section
      className={`relative w-full rounded-t-3xl bg-[rgb(82,63,216)]/95 text-white overflow-hidden ${className} hide-scrollbar`}
    >
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-fuchsia-400/30 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-Ruska">Social Media Feed</h2>
            <p className="mt-1 text-sm text-white/80 max-w-2xl">
              Discover amazing destinations at unbeatable prices and share the joy of travel with the people who matter
              most.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              aria-label="Previous"
              onClick={() => scrollByCard(-1)}
              className="h-9 w-9 grid place-items-center rounded-full bg-white/15 hover:bg-white/25"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollByCard(1)}
              className="h-9 w-9 grid place-items-center rounded-full bg-white/15 hover:bg-white/25"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div
          ref={scrollerRef}
          className="mt-6 hide-scrollbar flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
        >
          {data.map((post) => {
            const t = platformTheme[post.platform];
            return (
              <article
                key={post.id}
                data-card
                className="min-w-[260px] sm:min-w-[320px] lg:min-w-[340px] snap-start bg-white/10 backdrop-blur rounded-2xl ring-1 ring-white/10 overflow-hidden"
              >
                <div className="relative">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={900}
                      height={700}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-2 left-2 flex items-center gap-3 text-[10px] font-medium text-white/90">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold leading-5 line-clamp-2 min-h-[40px]">{post.title}</h3>
                  <div className="mt-3">
                    <a
                      href={post.href || "#"}
                      className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-full ${t.chip}`}
                    >
                      {t.icon}
                      {t.label}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-4 sm:hidden flex items-center justify-center gap-3">
          <button
            aria-label="Previous"
            onClick={() => scrollByCard(-1)}
            className="h-9 w-9 grid place-items-center rounded-full bg-white/15"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollByCard(1)}
            className="h-9 w-9 grid place-items-center rounded-full bg-white/15"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
