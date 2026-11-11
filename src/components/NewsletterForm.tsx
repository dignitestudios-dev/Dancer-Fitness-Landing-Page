"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Simulate newsletter signup
      await new Promise((r) => setTimeout(r, 600));
      setIsSuccess(true);
      setName("");
      setEmail("");
    } catch {
      setErrorMessage("We could not save that just now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-primary">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-white/70">
            Be your team’s fitness expert
          </p>
          <h2 className="mt-3 font-heading text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
            Receive VIP training and nutrition tips
          </h2>
        </div>

        {isSuccess ? (
          <div className="flex items-center gap-3 border border-white/30 px-6 py-5 text-white">
            <Check className="h-5 w-5 flex-none" />
            <p className="text-sm">
              You’re on the list — Katie’s next training tip is headed your way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="h-12 flex-1 border border-white/30 bg-white px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-white"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="h-12 flex-1 border border-white/30 bg-white px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-white"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 flex-none items-center justify-center bg-ink px-7 font-heading text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-black disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? "Submitting..." : "Subscribe"}
            </button>
            {errorMessage && (
              <p className="text-xs text-white/90 mt-1">{errorMessage}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

