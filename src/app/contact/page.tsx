"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Star, ArrowRight, Check } from "lucide-react";
import { SITE_CONFIG, DF_LINKS } from "@/data/siteData";
import { YoutubeIcon } from "@/components/YoutubeIcon";

const TOPICS = [
  "Membership question",
  "Training plans for my team",
  "Routine analysis",
  "Something else"
];

const ROLES = ["Dancer", "Coach", "Studio / Team", "Other"];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Coach",
    topic: TOPICS[0],
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Simulate submission
      await new Promise((r) => setTimeout(r, 700));
      setIsSent(true);
      setFormData({
        name: "",
        email: "",
        role: "Coach",
        topic: TOPICS[0],
        message: ""
      });
    } catch {
      setError(
        "We could not send that just now. Please email us directly and we will get back to you."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-3xl font-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Questions about training your dancers? Ask away.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
            Membership, training plans, routine analysis or something specific your team is struggling with — send it over and Katie will answer personally.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-heading text-2xl font-extrabold uppercase tracking-tight text-foreground">
              Get in touch
            </h2>

            <div className="mt-6 space-y-4 text-sm">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                {SITE_CONFIG.email}
              </a>
              <a
                href={SITE_CONFIG.youtubeChannel}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <YoutubeIcon className="h-4 w-4 text-primary" />
                Dancer Fitness on YouTube
              </a>
              <a
                href={SITE_CONFIG.googleReviews}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <Star className="h-4 w-4 text-primary" />
                Read our Google reviews
              </a>
            </div>

            <div className="mt-10 border border-border bg-card p-7">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
                Already a member?
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Check your email and spam folder for your login details. If you need help finding them, email us and we will get you back in.
              </p>
              <a
                href={DF_LINKS.login}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 border border-foreground/15 px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Member login
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {isSent ? (
            <div className="border border-border bg-card p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground">
                <Check className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-extrabold uppercase leading-tight tracking-tight text-foreground">
                Message sent
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Thanks — Katie will reply to your email address directly. In the meantime, the exercise library is open to browse.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/exercises"
                  className="inline-flex items-center gap-3 bg-primary px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground"
                >
                  Browse exercises
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="inline-flex items-center border border-foreground/15 px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Send another
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-border bg-card p-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="c-name"
                    className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Your Name
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange("name")}
                    placeholder="First and last name"
                    className="mt-2 h-12 w-full border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="c-email"
                    className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange("email")}
                    placeholder="coach@studio.com"
                    className="mt-2 h-12 w-full border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="c-role"
                      className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      I am a...
                    </label>
                    <select
                      id="c-role"
                      value={formData.role}
                      onChange={handleChange("role")}
                      className="mt-2 h-12 w-full border border-border bg-background px-3 font-heading text-xs font-bold uppercase tracking-wider text-foreground outline-none focus:border-primary"
                    >
                      {ROLES.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="c-topic"
                      className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Topic
                    </label>
                    <select
                      id="c-topic"
                      value={formData.topic}
                      onChange={handleChange("topic")}
                      className="mt-2 h-12 w-full border border-border bg-background px-3 font-heading text-xs font-bold uppercase tracking-wider text-foreground outline-none focus:border-primary"
                    >
                      {TOPICS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="c-message"
                    className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="c-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange("message")}
                    placeholder="Tell Katie what your dancers are working towards, or how we can help..."
                    className="mt-2 w-full border border-border bg-background p-4 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>

                {error && <p className="text-xs text-destructive">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-3 bg-primary py-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

