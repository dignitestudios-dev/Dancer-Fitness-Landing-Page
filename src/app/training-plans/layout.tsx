import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training Plans for Dancers",
  description: "Ready-made, skill-specific training plans for jumps, turns, flexibility and conditioning, built for dancers and the coaches who train them.",
  alternates: { canonical: "/training-plans" }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
