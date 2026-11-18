"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, X } from "lucide-react";
import { SITE_CONFIG, DF_LINKS, NAV_LINKS } from "@/data/siteData";

const EASE = [0.16, 1, 0.3, 1] as const;

type TawkWindow = Window & {
  Tawk_API?: { hideWidget?: () => void; showWidget?: () => void; onLoad?: () => void };
};

/** Three bars that morph into an X. */
function MenuIcon({ open }: { open: boolean }) {
  const bar = "absolute left-0 block h-0.5 w-5 bg-current";
  return (
    <span className="relative block h-5 w-5" aria-hidden>
      <motion.span
        className={`${bar} top-[3px]`}
        animate={open ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.25, ease: EASE }}
      />
      <motion.span
        className={`${bar} top-[9px]`}
        animate={open ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className={`${bar} top-[15px]`}
        animate={open ? { y: -6, rotate: -45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.25, ease: EASE }}
      />
    </span>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const close = () => setMobileMenuOpen(false);

  // Lock page scroll and allow Escape to close while the drawer is open.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileMenuOpen]);

  // The tawk.to chat bubble floats above everything and would cover the drawer's buttons,
  // so hide it while the menu is open and bring it back on close.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    let active = true;
    const w = window as TawkWindow;
    const api = (w.Tawk_API = w.Tawk_API || {});

    if (api.hideWidget) {
      api.hideWidget();
    } else {
      // Widget script hasn't loaded yet (it loads lazily): hide it as soon as it does.
      const prevOnLoad = api.onLoad;
      api.onLoad = () => {
        prevOnLoad?.();
        if (active) w.Tawk_API?.hideWidget?.();
      };
    }
    return () => {
      active = false;
      w.Tawk_API?.showWidget?.();
    };
  }, [mobileMenuOpen]);

  // Close the drawer if the viewport grows to the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <header className="sticky top-0 z-50 w-full">
        {/* Top utility bar */}
        <div className="hidden bg-ink text-white md:block">
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 text-[10px] font-semibold uppercase tracking-[0.22em] sm:px-8">
            <span className="text-white/60">
              Strength · Flexibility · Technique for dancers
            </span>
            <div className="flex items-center gap-5">
              <a href={DF_LINKS.about} className="transition-colors hover:text-primary">
                About
              </a>
              <a href={DF_LINKS.contact} className="transition-colors hover:text-primary">
                Contact
              </a>
              <a href={DF_LINKS.login} className="text-primary hover:underline">
                Member login
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation bar */}
        <div className="border-b border-border bg-background/95 backdrop-blur">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
            <Link href="/" className="flex items-center" aria-label="Dancer Fitness Home">
              <Image
                src={SITE_CONFIG.logo}
                alt="Dancer Fitness Logo"
                width={193}
                height={60}
                className="h-10 w-auto object-contain sm:h-11"
                priority
              />
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.dfHref}
                    className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={DF_LINKS.membership}
                className="hidden bg-primary px-5 py-3 font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
              >
                Start membership
              </a>

              <button
                type="button"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileMenuOpen((o) => !o)}
                className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary active:scale-95 lg:hidden"
              >
                <MenuIcon open={mobileMenuOpen} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer — rendered outside the blurred bar so `fixed` covers the whole screen */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <div className="lg:hidden">
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={close}
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                aria-hidden
              />

              <motion.aside
                key="drawer"
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Site menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 320, damping: 34, mass: 0.9 }}
                className="fixed right-0 top-0 z-50 flex h-dvh w-[min(88vw,380px)] flex-col overflow-y-auto bg-ink text-white shadow-2xl"
              >
                {/* Drawer header */}
                <div className="flex h-20 flex-none items-center justify-between border-b border-white/10 px-6">
                  <span className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-primary">
                    Menu
                  </span>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close menu"
                    className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-primary hover:text-primary active:scale-95"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Links */}
                <nav className="flex-1 px-6 py-4" aria-label="Mobile">
                  {NAV_LINKS.map((link, i) => {
                    const className =
                      "group flex items-center justify-between border-b border-white/10 py-[18px] font-heading text-lg font-extrabold uppercase tracking-[0.08em] text-white transition-colors active:text-primary";
                    const inner = (
                      <>
                        <span className="flex items-center gap-4">
                          <span className="w-5 text-[11px] font-bold tracking-widest text-primary/80">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {link.label}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                      </>
                    );
                    return (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE, delay: 0.08 + i * 0.05 }}
                      >
                        {link.external ? (
                          <a href={link.dfHref} onClick={close} className={className}>
                            {inner}
                          </a>
                        ) : (
                          <Link href={link.href} onClick={close} className={className}>
                            {inner}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.1 + NAV_LINKS.length * 0.05 }}
                  className="flex-none space-y-3 px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4"
                >
                  <a
                    href={DF_LINKS.membership}
                    onClick={close}
                    className="flex h-14 items-center justify-center gap-3 bg-primary font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-colors active:bg-accent"
                  >
                    Start membership
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={DF_LINKS.login}
                      onClick={close}
                      className="flex h-12 items-center justify-center border border-white/25 font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors active:border-primary active:text-primary"
                    >
                      Member login
                    </a>
                    <a
                      href={DF_LINKS.signUp}
                      onClick={close}
                      className="flex h-12 items-center justify-center border border-white/25 font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors active:border-primary active:text-primary"
                    >
                      Create account
                    </a>
                  </div>

                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center justify-center gap-2 pt-2 text-xs text-white/50 transition-colors hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    {SITE_CONFIG.email}
                  </a>
                </motion.div>
              </motion.aside>
            </div>
          )}
        </AnimatePresence>
      </header>
    </MotionConfig>
  );
}
