import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dancer Fitness",
  description: "Questions about exercises, training plans or memberships? Get in touch with the Dancer Fitness team.",
  alternates: { canonical: "/contact" }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
