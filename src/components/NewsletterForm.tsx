"use client";

import { ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  return (
    <section className="bg-primary">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-white/70">
            Be your team’s fitness expert
          </p>
          <h2 className="mt-3 font-heading text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
            Receive VIP training and nutrition tips
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80">
            Get exclusive conditioning drills, dance technique breakdowns, and actionable tips delivered directly to your inbox to keep your dancers performing at their peak.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:justify-end">
          <a
            href="https://dancer-fitness.com/#gform_wrapper_3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-3 bg-ink px-8 font-heading text-xs font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-black hover:gap-4 shadow-lg cursor-pointer"
          >
            <span>Subscribe for VIP Tips</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
