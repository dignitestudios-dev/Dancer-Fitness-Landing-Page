import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Layers, ArrowRight } from "lucide-react";
import plansData from "@/data/training_plans.json";
import { TrainingPlan, DF_LINKS } from "@/data/siteData";
import TrainingPlanCard from "@/components/TrainingPlanCard";

export function generateStaticParams() {
  const allPlans = plansData as TrainingPlan[];
  return allPlans.map((p) => ({
    id: p.id
  }));
}

export default async function TrainingPlanDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const allPlans = plansData as TrainingPlan[];
  const plan = allPlans.find((p) => p.id === id);

  if (!plan) {
    notFound();
  }

  const category = plan.categories?.[0] || "Strength";
  const related = allPlans
    .filter((p) => p.id !== plan.id && p.categories?.includes(category))
    .slice(0, 3);

  return (
    <>
      <section className="bg-ink py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Link
            href="/training-plans"
            className="inline-flex items-center gap-2 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Training Plans
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="bg-primary px-3 py-1 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
              {plan.level}
            </span>
            <span className="flex items-center gap-1.5 border border-white/20 bg-white/5 px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-white">
              <Clock className="h-3.5 w-3.5 text-primary" />
              {plan.duration}
            </span>
            <span className="flex items-center gap-1.5 border border-white/20 bg-white/5 px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-white">
              <Layers className="h-3.5 w-3.5 text-primary" />
              {plan.exercise_count} exercises
            </span>
          </div>
          <h1 className="mt-4 font-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            {plan.title}
          </h1>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div>
              <h2 className="font-heading text-xl font-extrabold uppercase tracking-tight text-foreground">
                Plan Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {plan.description || plan.summary}
              </p>
            </div>

            {plan.exercises && plan.exercises.length > 0 && (
              <div className="mt-10 border-t border-border pt-8">
                <h3 className="font-heading text-lg font-extrabold uppercase tracking-tight text-foreground">
                  Exercises Included ({plan.exercises.length})
                </h3>
                <ol className="mt-5 space-y-3">
                  {plan.exercises.map((exName, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 border border-border bg-card p-4 text-sm font-semibold text-foreground"
                    >
                      <span className="flex h-7 w-7 flex-none items-center justify-center bg-secondary font-heading text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                      <span>{exName}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          <div>
            <div className="border border-border bg-card p-8">
              <p className="eyebrow">Ready to run this in class?</p>
              <h3 className="mt-3 font-heading text-2xl font-extrabold uppercase leading-tight text-foreground">
                Get full workout videos & printouts
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Every training plan is available with companion videos, progression tips and printable cheat sheets inside the Dancer Fitness member dashboard.
              </p>
              <a
                href={DF_LINKS.membership}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-primary py-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/90"
              >
                Start membership for $1
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {plan.focus_areas && plan.focus_areas.length > 0 && (
              <div className="mt-8 border border-border bg-card p-6">
                <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Focus Areas
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {plan.focus_areas.map((fa) => (
                    <span
                      key={fa}
                      className="border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {fa}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-secondary/30 py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="font-heading text-2xl font-extrabold uppercase tracking-tight text-foreground">
              Related Training Plans
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rp) => (
                <TrainingPlanCard key={rp.id} plan={rp} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
