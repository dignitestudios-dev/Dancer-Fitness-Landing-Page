import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Katie Groven & Dancer Fitness",
  description: "Meet Katie Groven, world champion dancer and personal trainer, and learn why dancers are athletes who should train like one.",
  alternates: { canonical: "/about" }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
