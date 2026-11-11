"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG, DF_LINKS, NAV_LINKS } from "@/data/siteData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="hidden bg-ink text-white md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 text-[10px] font-semibold uppercase tracking-[0.22em] sm:px-8">
          <span className="text-white/60">
            Strength · Flexibility · Technique for dancers
          </span>
          <div className="flex items-center gap-5">
            <a
              href={DF_LINKS.about}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              About
            </a>
            <a
              href={DF_LINKS.contact}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              Contact
            </a>
            <a
              href={DF_LINKS.login}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Member login
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link href="/" className="flex items-center">
            <img
              src={SITE_CONFIG.logo}
              alt="Dancer Fitness"
              className="h-10 w-auto sm:h-11 object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.dfHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={DF_LINKS.membership}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden bg-primary px-5 py-3 font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
            >
              Start membership
            </a>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-11 w-11 items-center justify-center border border-border text-foreground lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
              {NAV_LINKS.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.dfHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-border py-4 font-heading text-sm font-bold uppercase tracking-[0.16em] text-foreground"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-border py-4 font-heading text-sm font-bold uppercase tracking-[0.16em] text-foreground"
                  >
                    {link.label}
                  </Link>
                )
              )}

              <a
                href={DF_LINKS.membership}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-5 bg-primary px-5 py-4 text-center font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground"
              >
                Start membership
              </a>

              <div className="mt-5 flex items-center justify-between py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                <a
                  href={DF_LINKS.login}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-primary"
                >
                  Member login
                </a>
                <a
                  href={DF_LINKS.signUp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-primary hover:underline"
                >
                  Create account
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

