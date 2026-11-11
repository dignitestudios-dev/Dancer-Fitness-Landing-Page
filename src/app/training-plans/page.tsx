"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import plansData from "@/data/training_plans.json";
import { TrainingPlan, CATEGORIES, LEVELS } from "@/data/siteData";
import { SectionHeading } from "@/components/Animations";
import TrainingPlanCard from "@/components/TrainingPlanCard";

export default function TrainingPlansPage() {
  const allPlans = plansData as TrainingPlan[];
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const filtered = allPlans.filter((plan) => {
    const matchesSearch =
      !search ||
      plan.title.toLowerCase().includes(search.toLowerCase()) ||
      (plan.summary && plan.summary.toLowerCase().includes(search.toLowerCase())) ||
      (plan.description && plan.description.toLowerCase().includes(search.toLowerCase())) ||
      (plan.tags && plan.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())));

    const matchesCategory =
      !selectedCategory || (plan.categories && plan.categories.includes(selectedCategory));

    const matchesLevel = !selectedLevel || plan.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <>
      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Training plans"
            title="Ready-made sessions for every skill"
            intro="Skill-specific plans you can run at the top of practice or as a full conditioning class — with exercises grouped so nothing gets missed."
            light={true}
          />
        </div>
      </section>

      <section className="bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Filters */}
          <div className="flex flex-col gap-4 border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search plans by goal, skill or muscle group..."
                className="h-12 w-full border border-border bg-background pl-11 pr-4 text-sm text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="h-12 border border-border bg-background px-4 font-heading text-xs font-bold uppercase tracking-wider text-foreground outline-none focus:border-primary"
              >
                <option value="">All Categories</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="h-12 border border-border bg-background px-4 font-heading text-xs font-bold uppercase tracking-wider text-foreground outline-none focus:border-primary"
              >
                <option value="">All Levels</option>
                {LEVELS.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>

              {(search || selectedCategory || selectedLevel) && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("");
                    setSelectedLevel("");
                  }}
                  className="h-12 border border-border px-4 font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Showing {filtered.length} training plans
          </p>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="mt-10 border border-border bg-card px-8 py-16 text-center">
              <p className="font-heading text-lg font-bold uppercase tracking-tight text-foreground">
                No plans match that search
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Try a different search keyword or category filter.
              </p>
            </div>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((plan) => (
                <TrainingPlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

