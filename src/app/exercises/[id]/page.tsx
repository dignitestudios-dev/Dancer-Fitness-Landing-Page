import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ArrowRight, Check } from "lucide-react";
import exercisesData from "@/data/exercises.json";
import { Exercise, IMAGES, DF_LINKS } from "@/data/siteData";
import ExerciseCard from "@/components/ExerciseCard";

export function generateStaticParams() {
  const allExercises = exercisesData as Exercise[];
  return allExercises.map((e) => ({
    id: e.id
  }));
}

export default async function ExerciseDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const allExercises = exercisesData as Exercise[];
  const exercise = allExercises.find((e) => e.id === id);

  if (!exercise) {
    notFound();
  }

  const category = exercise.categories?.[0] || "Strength";
  const imageSrc =
    exercise.thumbnail ||
    IMAGES.categoryImages[category] ||
    IMAGES.categoryImages.Strength;

  const related = allExercises
    .filter((e) => e.id !== exercise.id && e.categories?.includes(category))
    .slice(0, 3);

  return (
    <>
      <section className="bg-ink py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Link
            href="/exercises"
            className="inline-flex items-center gap-2 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Exercise Library
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="bg-primary px-3 py-1 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
              {exercise.level}
            </span>
            {exercise.duration && (
              <span className="flex items-center gap-1.5 border border-white/20 bg-white/5 px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-white">
                <Clock className="h-3.5 w-3.5 text-primary" />
                {exercise.duration}
              </span>
            )}
          </div>
          <h1 className="mt-4 font-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            {exercise.title}
          </h1>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="overflow-hidden border border-border bg-ink">
              <Image
                src={imageSrc}
                alt={exercise.title}
                width={800}
                height={450}
                priority
                className="aspect-video w-full object-cover"
              />
            </div>

            <div className="mt-8">
              <h2 className="font-heading text-xl font-extrabold uppercase tracking-tight text-foreground">
                Overview & Purpose
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {exercise.description || exercise.focus}
              </p>
            </div>

            {exercise.cues && exercise.cues.length > 0 && (
              <div className="mt-8 border-t border-border pt-8">
                <h3 className="font-heading text-lg font-extrabold uppercase tracking-tight text-foreground">
                  Technique Cues
                </h3>
                <ul className="mt-4 space-y-3">
                  {exercise.cues.map((cue, i) => (
                    <li key={i} className="flex gap-3 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                      <span>{cue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {exercise.modifications && (
              <div className="mt-8 border-t border-border pt-8">
                <h3 className="font-heading text-lg font-extrabold uppercase tracking-tight text-foreground">
                  Modifications
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {exercise.modifications}
                </p>
              </div>
            )}
          </div>

          <div>
            <div className="border border-border bg-card p-8">
              <p className="eyebrow">Membership Benefit</p>
              <h3 className="mt-3 font-heading text-2xl font-extrabold uppercase leading-tight text-foreground">
                Unlock Full Video Library
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                A Dancer Fitness membership gives you instant access to HD exercise walkthroughs, full class training plans, routine analysis, and coaching calls.
              </p>
              <a
                href={DF_LINKS.membership}
                className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-primary py-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/90"
              >
                Join for $1
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {exercise.tags && exercise.tags.length > 0 && (
              <div className="mt-8 border border-border bg-card p-6">
                <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Target Muscles & Skills
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exercise.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {t}
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
              Related Exercises
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((ex) => (
                <ExerciseCard key={ex.id} exercise={ex} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
