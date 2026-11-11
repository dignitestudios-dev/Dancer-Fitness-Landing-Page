"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  IMAGES,
  WHAT_STRENGTH_UNLOCKS,
  TARGET_AREAS,
  DF_LINKS
} from "@/data/siteData";
import { FadeIn, SectionHeading } from "@/components/Animations";

export default function AboutPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(215,0,91,0.35),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <p className="eyebrow">About Dancer Fitness</p>
            <h1 className="mt-5 font-heading text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Dancers are athletes. Train like one.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Hello and welcome! I’m Katie Groven, owner and creator of dancer-fitness.com. I’ve combined 25 years of dancing, 10 years of coaching and my work as a personal trainer into one place for safe, fun and practical exercises built specifically for dancers.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
              If you stand on chairs and yell “5, 6, 7, 8!” you are my kind of people.
            </p>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="overflow-hidden border border-white/10">
              <img
                src={IMAGES.founder}
                alt="Katie Groven, founder of Dancer Fitness"
                className="h-[420px] w-full object-cover sm:h-[540px]"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Story / How it started section */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="How it started"
              title="A blueprint for the dancer's body"
              intro="I was 28, hitting my stride as a dancer and becoming a personal trainer at the same time — spending more hours learning how muscles actually function."
            />
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                My flexibility increased. My jump height and power surprised myself and my coaches. I was dancing sharper and faster because I understood how to control and manipulate my body — the best I had ever danced, at almost 30, with a blueprint instead of guesswork.
              </p>
              <p>
                That is when I decided dancers needed to know that simple, intentional strength training improves their dancing significantly — and that because most of their time is spent with their coach, the information had to be simple enough to hand over and use in class.
              </p>
              <p>
                I’ve been on the floor dancing, at the coach’s table screaming, and I’ve scoured over score sheets and cleaned dozens of routines. Because of that, there is an exercise or a training plan here for your dancers and their goals.
              </p>
            </div>
          </div>

          <FadeIn delay={0.1}>
            <div className="border border-border bg-card p-8">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
                What simple strength work unlocks
              </p>
              <ol className="mt-6 space-y-4">
                {WHAT_STRENGTH_UNLOCKS.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <span className="font-heading text-xs font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-heading text-sm font-bold uppercase tracking-tight text-foreground sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Target areas */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Every membership"
            title="Tools to improve what judges score"
            intro="Skill-specific exercises and training plans for every level of dancer, with videos, written instructions and modifications so you can lead a conditioning block with confidence."
            align="center"
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TARGET_AREAS.map((area, i) => (
              <FadeIn key={area} delay={i * 0.04}>
                <div className="border border-border bg-card px-6 py-7">
                  <p className="font-heading text-lg font-extrabold uppercase tracking-tight text-foreground">
                    {area}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Empowering dancers CTA */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-8">
          <h2 className="font-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-foreground sm:text-4xl">
            Empowering dancers to train like the athletes they truly are
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Whether it is ten minutes at the top of practice or a whole conditioning class, everything here is built to be used — by dancers and the coaches who lead them.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/exercises"
              className="inline-flex items-center gap-3 bg-primary px-7 py-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:gap-5 hover:shadow-[0_0_35px_rgba(215,0,91,0.35)]"
            >
              Explore the library
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={DF_LINKS.membership}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-foreground/15 px-7 py-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              See memberships
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

