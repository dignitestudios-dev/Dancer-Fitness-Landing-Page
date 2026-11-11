"use client";

import { useRef } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/siteData";

export default function TestimonialCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    const el = containerRef.current;
    if (el) {
      el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex w-[85%] flex-none snap-start flex-col border border-border bg-card p-7 sm:w-[420px]"
          >
            <Quote className="h-6 w-6 text-primary" />
            <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground/90">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 font-heading text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous testimonials"
          onClick={() => scroll(-1)}
          className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next testimonials"
          onClick={() => scroll(1)}
          className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

