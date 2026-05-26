"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { Button, GithubIcon, LinkedinIcon } from "@/components/ui";
import { cn } from "@/lib/cn";

interface NavLink {
  id: string;
  label: string;
  number: string;
}

const LINKS: NavLink[] = [
  { id: "about", label: "About", number: "01" },
  { id: "projects", label: "Projects", number: "02" },
  { id: "logbook", label: "Logbook", number: "03" },
  { id: "toolkit", label: "Toolkit", number: "04" },
  { id: "contact", label: "Contact", number: "05" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile sheet open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled
            ? "border-b border-[color:var(--hairline)] bg-bg/70 backdrop-blur-md"
            : "border-b border-transparent"
        )}
      >
        <div className="container-mc flex h-14 items-center justify-between">
          <Link
            href="/"
            className="group inline-flex text-ink transition-transform hover:scale-[1.04]"
            aria-label="Home, Emily Wei"
          >
            <span
              aria-hidden
              className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--accent)]/50 bg-bg/40 font-display text-base lowercase tracking-tight text-accent transition-colors group-hover:border-accent group-hover:bg-[color:var(--accent)]/10"
            >
              wei
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="group relative px-3 py-2 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                <span className="font-mono text-[10px] text-mute-soft">
                  {link.number}.
                </span>{" "}
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://github.com/818sushirolls"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-md p-2 text-mute transition-colors hover:bg-white/5 hover:text-ink"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-md p-2 text-mute transition-colors hover:bg-white/5 hover:text-ink"
            >
              <LinkedinIcon size={16} />
            </a>
            <Button
              as="a"
              href="/resume.pdf"
              size="sm"
              variant="secondary"
              iconLeft={<FileDown size={14} />}
            >
              Resume
            </Button>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-white/5"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg/80 backdrop-blur-md md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />
        )}
        {open && (
          <motion.div
            key="sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-0 top-14 z-50 md:hidden"
          >
            <div className="container-mc">
              <div className="glass-strong overflow-hidden rounded-lg p-2">
                <nav className="flex flex-col" aria-label="Mobile">
                  {LINKS.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-3 rounded-md px-3 py-3 text-base text-ink-soft transition-colors hover:bg-white/5 hover:text-ink"
                    >
                      <span className="font-mono text-[10px] text-mute-soft">
                        {link.number}
                      </span>
                      <span>{link.label}</span>
                    </a>
                  ))}
                </nav>
                <div className="mt-2 flex items-center justify-between gap-2 border-t border-[color:var(--hairline)] px-3 pt-3">
                  <div className="flex items-center gap-1">
                    <a
                      href="https://github.com/818sushirolls"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="rounded-md p-2 text-mute hover:bg-white/5 hover:text-ink"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="rounded-md p-2 text-mute hover:bg-white/5 hover:text-ink"
                    >
                      <LinkedinIcon size={18} />
                    </a>
                  </div>
                  <Button
                    as="a"
                    href="/resume.pdf"
                    size="sm"
                    iconLeft={<FileDown size={14} />}
                  >
                    Resume
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
