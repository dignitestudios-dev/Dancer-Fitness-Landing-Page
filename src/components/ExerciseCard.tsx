"use client";

import Link from "next/link";
import { Clock } from "lucide-react";
import { Exercise, IMAGES } from "@/data/siteData";

export default function ExerciseCard({ exercise }: { exercise: Exercise }) {
  const category = exercise.categories?.[0] || "Strength";
  const imageSrc =
    exercise.thumbnail ||
    IMAGES.categoryImages[category] ||
    IMAGES.categoryImages.Strength;

  return (
    <article className="group flex flex-col overflow-hidden border border-border bg-card transition-shadow duration-300 hover:shadow-xl">
      <Link
        href={`/exercises/${exercise.id}`}
        className="relative block aspect-[4/3] overflow-hidden bg-ink"
      >
        <img
          src={imageSrc}
          alt={exercise.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
        <span className="absolute left-3 top-3 bg-primary px-2 py-1 font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground">
          {exercise.level}
        </span>
        {exercise.duration ? (
          <span className="absolute right-3 top-3 flex items-center gap-1 bg-ink/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            <Clock className="h-3 w-3" />
            {exercise.duration}
          </span>
        ) : null}
        <h3 className="absolute bottom-3 left-4 right-4 font-heading text-lg font-extrabold uppercase leading-tight text-white sm:text-xl">
          {exercise.title}
        </h3>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-1.5">
          {(exercise.categories || []).map((cat) => (
            <span
              key={cat}
              className="border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
            >
              {cat}
            </span>
          ))}
        </div>
        {exercise.focus ? (
          <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {exercise.focus}
          </p>
        ) : null}
      </div>
    </article>
  );
}

