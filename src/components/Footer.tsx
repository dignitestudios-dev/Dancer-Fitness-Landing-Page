import Image from "next/image";
import { Mail, Star } from "lucide-react";
import { SITE_CONFIG, DF_LINKS, NAV_LINKS } from "@/data/siteData";
import { YoutubeIcon } from "./YoutubeIcon";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand info */}
          <div>
            <Image
              src={SITE_CONFIG.logo}
              alt="Dancer Fitness Logo"
              width={193}
              height={60}
              className="h-11 w-auto object-contain"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Handpicked exercises and skill-specific training plans designed exclusively
              for dancers — and for the coaches who train them.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                {SITE_CONFIG.email}
              </a>
              <a
                href={SITE_CONFIG.youtubeChannel}
                className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
              >
                <YoutubeIcon className="h-4 w-4 text-primary" />
                YouTube channel
              </a>
              <a
                href={SITE_CONFIG.googleReviews}
                className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
              >
                <Star className="h-4 w-4 text-primary" />
                Read our Google reviews
              </a>
            </div>
          </div>

          {/* Explore links (redirects to dancer-fitness.com) */}
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-foreground">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.dfHref}
                    className="transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={DF_LINKS.onDemand}
                  className="transition-colors hover:text-primary"
                >
                  On Demand
                </a>
              </li>
              <li>
                <a
                  href={DF_LINKS.shop}
                  className="transition-colors hover:text-primary"
                >
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Get started links (redirects to dancer-fitness.com) */}
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-foreground">
              Get started
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={DF_LINKS.membership}
                  className="transition-colors hover:text-primary"
                >
                  Membership options
                </a>
              </li>
              <li>
                <a
                  href={DF_LINKS.membership}
                  className="transition-colors hover:text-primary"
                >
                  Join Dancer Fitness
                </a>
              </li>
              <li>
                <a
                  href={DF_LINKS.login}
                  className="transition-colors hover:text-primary"
                >
                  Member login
                </a>
              </li>
              <li>
                <a
                  href={DF_LINKS.signUp}
                  className="transition-colors hover:text-primary"
                >
                  Create your account
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Dancer Fitness · Created by world champion dancer and
            personal trainer Katie Groven.
          </p>
          <p>{SITE_CONFIG.photoCredit}</p>
        </div>
      </div>
    </footer>
  );
}

