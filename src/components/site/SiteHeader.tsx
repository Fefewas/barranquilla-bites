import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/restaurants";
import { cn } from "@/lib/utils";

const linkClass = "relative text-sm text-muted-foreground transition-colors hover:text-foreground";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur transition-all duration-500",
        scrolled ? "border-border bg-background/95 shadow-sm" : "border-transparent bg-background/85",
      )}
    >
      <div className={cn("mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500 md:px-8", scrolled ? "py-3" : "py-4")}>
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl font-medium leading-none tracking-tight transition-transform duration-500 group-hover:-translate-y-0.5">
            {SITE.wordmark}
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{SITE.wordmarkSub}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.to);
            return (
              <Link key={link.to} to={link.to} className={cn(linkClass, active && "font-medium text-foreground")}>
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active-underline"
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-foreground"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-muted md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <ul className="px-5 py-2">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/60 py-3 text-sm text-foreground last:border-0"
                    activeProps={{
                      className: "block border-b border-border/60 py-3 text-sm font-medium text-foreground last:border-0",
                    }}
                    activeOptions={{ exact: link.to === "/" }}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}