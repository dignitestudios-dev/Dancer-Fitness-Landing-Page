"use client";

import Link from "next/link";
import { ArrowRight, Clock, Layers } from "lucide-react";
import { TrainingPlan } from "@/data/siteData";

export default function TrainingPlanCard({ plan }: { plan: TrainingPlan }) {
  return (
    <article className="group flex flex-col justify-between border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-xl sm:p-7">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="bg-primary/10 px-2.5 py-1 font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
            {plan.level}
          </span>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1 font-medium">
              <Clock className="h-3.5 w-3.5 text-primary" />
              {plan.duration}
            </span>
            <span className="flex items-center gap-1 font-medium">
              <Layers className="h-3.5 w-3.5 text-primary" />
              {plan.exercise_count} exercises
            </span>
          </div>
        </div>

        <h3 className="mt-4 font-heading text-xl font-extrabold uppercase leading-tight text-foreground transition-colors group-hover:text-primary">
          <Link href={`/training-plans/${plan.id}`}>{plan.title}</Link>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {plan.summary}
        </p>

        {plan.tags && plan.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {plan.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="border border-border bg-secondary/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-7 border-t border-border pt-4">
        <Link
          href={`/training-plans/${plan.id}`}
          className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary transition-all group-hover:gap-3"
        >
          View training plan
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}

