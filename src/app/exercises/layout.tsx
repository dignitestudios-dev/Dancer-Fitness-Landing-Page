import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exercise Library for Dancers",
  description: "Browse dancer-specific strength, flexibility, power and balance exercises. Filter by category and level to build warm ups and conditioning blocks.",
  alternates: { canonical: "/exercises" }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
