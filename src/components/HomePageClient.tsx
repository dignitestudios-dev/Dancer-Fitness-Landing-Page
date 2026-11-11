"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import {
  IMAGES,
  HERO_STATS,
  BANNER_PILLS,
  DANCER_BULLETS,
  COACHES_STATS,
  MEMBERSHIP_BENEFITS,
  PRICING_TIERS,
  FEATURED_ON,
  DF_LINKS,
  getMembershipUrl,
  Exercise
} from "@/data/siteData";
import { FadeIn, SectionHeading } from "@/components/Animations";
import ExerciseCard from "@/components/ExerciseCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import NewsletterForm from "@/components/NewsletterForm";

// Client component wrapper for home page
export default function HomePageClient({ featuredExercises }: { featuredExercises: Exercise[] }) {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(215,0,91,0.38),transparent_58%)]" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_80%_80%,rgba(215,0,91,0.22),transparent_60%)] lg:block" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="eyebrow"
            >
              Handpicked exercises
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 font-heading text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[4.1rem]"
            >
              Designed exclusively for <span className="text-primary">dancers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
            >
              Increase your strength, endurance and flexibility with exercises built around the skills you actually perform — jumps and leaps, turns and kicks, extension and flexibility. Created by world champion dancer and personal trainer Katie Groven.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/exercises"
                className="inline-flex items-center gap-3 bg-primary px-7 py-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:gap-5 hover:shadow-[0_0_35px_rgba(215,0,91,0.45)]"
              >
                Watch exercises
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center border border-white/30 px-7 py-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-primary hover:text-primary"
              >
                Learn more
              </Link>
            </motion.div>

            <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-lg font-extrabold uppercase tracking-tight text-primary sm:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative ml-auto w-[80%] overflow-hidden border border-white/10"
            >
              <img
                src={IMAGES.heroPortrait}
                alt="Dancer training strength and extension"
                className="h-[400px] w-full object-cover sm:h-[520px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-12 left-0 w-[58%] overflow-hidden border-4 border-ink shadow-2xl"
            >
              <img
                src={IMAGES.studio}
                alt="Dancers conditioning together in the studio"
                className="h-[180px] w-full object-cover sm:h-[220px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. VALUE BANNER */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <FadeIn>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-white/70">
              Dancers are athletes
            </p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl">
              Train like one
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-9 flex flex-wrap gap-x-10 gap-y-3">
            {BANNER_PILLS.map((pill) => (
              <span
                key={pill}
                className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-white/85"
              >
                {pill}
              </span>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* 3. FOR DANCERS SECTION */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <FadeIn>
            <p className="eyebrow">For dancers</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-foreground sm:text-4xl lg:text-[2.7rem]">
              Increase your strength, endurance and flexibility
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Watch exclusive exercise videos specially designed for individuals and teams — then build your own plan from the movements that move your skills forward.
            </p>
            <ul className="mt-8 space-y-4">
              {DANCER_BULLETS.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-primary" />
                  <span className="text-sm leading-relaxed text-foreground/80 sm:text-base">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/exercises"
              className="mt-10 inline-flex items-center gap-3 bg-ink px-7 py-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:gap-5 hover:bg-primary"
            >
              Explore the library
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>

          <FadeIn delay={0.15} className="relative">
            <div className="overflow-hidden">
              <img
                src={IMAGES.categoryImages.Power}
                alt="Dancer mid-leap demonstrating power"
                className="h-[380px] w-full object-cover sm:h-[520px]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden bg-primary px-7 py-6 text-white sm:block">
              <p className="font-heading text-3xl font-extrabold leading-none">10 min</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/80">
                at the top of practice
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. FOR COACHES SECTION */}
      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <FadeIn className="order-2 lg:order-1">
            <div className="overflow-hidden border border-white/10">
              <img
                src={IMAGES.coaches}
                alt="Coach leading a group of dancers through conditioning"
                className="h-[380px] w-full object-cover sm:h-[500px]"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="order-1 lg:order-2">
            <p className="eyebrow">For coaches and teachers</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
              Streamline your coaching with hundreds of exercises
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              Stop telling your dancers to stay in relevé, explode off the floor and point their feet. Give them the strength behind the correction — with training plans for every level and every skill, ready to run at the top of practice or as a full conditioning class.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {COACHES_STATS.map((stat) => (
                <div key={stat.label} className="border-t border-white/15 pt-4">
                  <p className="font-heading text-base font-extrabold uppercase tracking-tight text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs leading-snug text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <a
              href={DF_LINKS.membership}
              className="mt-10 inline-flex items-center gap-3 bg-primary px-7 py-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:gap-5 hover:shadow-[0_0_35px_rgba(215,0,91,0.45)]"
            >
              Learn about memberships
              <ArrowRight className="h-4 w-4" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* 5. FEATURED EXERCISES SECTION */}
      {featuredExercises.length > 0 && (
        <section className="bg-secondary/40 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <SectionHeading
                eyebrow="Featured exercises"
                title="Handpicked for the skills you are chasing"
                intro="Each exercise is designed with a specific skill or goal in mind — chosen to decrease injuries and increase skill consistency."
              />
              <Link
                href="/exercises"
                className="inline-flex items-center gap-3 border border-foreground/15 px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                All exercises
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredExercises.map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. TESTIMONIALS SECTION */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What our members are saying"
            title="Trusted by coaches and teams"
            intro="Competition coaches, studio owners and dancers use Dancer Fitness every week to plan smarter training and cleaner execution."
          />
          <div className="mt-14">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* 7. MEMBERSHIP PLANS SECTION */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Inside a membership"
              title="One membership, every level of training"
              intro="Dancers reach goals faster. Coaches plan class in minutes instead of evenings."
            />
            <ul className="mt-10 space-y-4">
              {MEMBERSHIP_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-primary" />
                  <span className="text-sm leading-relaxed text-foreground/80 sm:text-base">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={DF_LINKS.membership}
              className="mt-10 inline-flex items-center gap-3 bg-primary px-7 py-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:gap-5 hover:shadow-[0_0_35px_rgba(215,0,91,0.35)]"
            >
              Compare membership options
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <FadeIn delay={0.1}>
            <div className="border border-border bg-card">
              <div className="border-b border-border px-7 py-5">
                <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
                  Membership options
                </p>
              </div>
              <ul className="divide-y divide-border">
                {PRICING_TIERS.map((tier) => (
                  <li key={tier.id}>
                    <a
                      href={getMembershipUrl(tier.id)}
                      className="group flex items-center justify-between gap-6 px-7 py-6 transition-colors hover:bg-secondary/30"
                    >
                      <div>
                        <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-foreground">
                          {tier.name}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {tier.blurb}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-display text-2xl font-extrabold text-foreground">
                          {tier.price}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="border-t border-border px-7 py-5 text-xs leading-relaxed text-muted-foreground">
                Team Pro is built for studios and competition teams, with up to 50 sub-accounts for your dancers and staff.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. FEATURED ON MARQUEE */}
      <section className="relative overflow-hidden border-y border-border bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center mb-8">
          <p className="eyebrow">Featured on</p>
        </div>

        {/* Gradient edge fades for seamless loop look */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent sm:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent sm:w-36" />

        {/* Infinite scrolling marquee track */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-12 sm:gap-16">
            {[...FEATURED_ON, ...FEATURED_ON].map((item, index) => (
              <a
                key={`${item.name}-${index}`}
                href={item.url}
                className="group flex h-20 w-44 flex-none items-center justify-center p-2 transition-transform duration-300 hover:scale-110 sm:w-52"
                title={item.name}
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-14 w-auto max-w-[160px] object-contain opacity-75 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 9. VIP NEWSLETTER SECTION */}
      <NewsletterForm />

      {/* 10. FINAL BOTTOM CTA BANNER */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(215,0,91,0.35),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">Start with ten minutes</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">
              Stronger dancers move with control. Cleaner skills score higher.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              Try a full week of Dancer Fitness for $1, then keep the library, the plans and the coaching calls for as long as your season needs them.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={DF_LINKS.trial}
                className="inline-flex items-center gap-3 bg-primary px-7 py-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:gap-5 hover:shadow-[0_0_35px_rgba(215,0,91,0.45)]"
              >
                Try it for $1
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/training-plans"
                className="inline-flex items-center border border-white/30 px-7 py-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-primary hover:text-primary"
              >
                Browse training plans
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

