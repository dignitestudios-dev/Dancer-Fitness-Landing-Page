import HomePageClient from "@/components/HomePageClient";
import exercisesData from "@/data/exercises.json";
import { Exercise } from "@/data/siteData";

export default function Home() {
  const exercises = exercisesData as Exercise[];
  const featuredExercises = exercises.filter((e) => e.featured).slice(0, 4);

  return <HomePageClient featuredExercises={featuredExercises} />;
}
