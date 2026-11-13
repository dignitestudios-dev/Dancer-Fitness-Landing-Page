import type { MetadataRoute } from "next";
import exercisesData from "@/data/exercises.json";
import plansData from "@/data/training_plans.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dancer-fitness.com";
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/exercises",
    "/training-plans",
    "/contact"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  const exerciseRoutes = (exercisesData as { id: string }[]).map((ex) => ({
    url: `${baseUrl}/exercises/${ex.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  const planRoutes = (plansData as { id: string }[]).map((plan) => ({
    url: `${baseUrl}/training-plans/${plan.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...exerciseRoutes, ...planRoutes];
}

