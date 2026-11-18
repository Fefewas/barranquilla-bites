import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

// Gives each page a short entrance as it is navigated to. The very first page
// renders immediately (so the server-rendered HTML is never hidden) and only
// later navigations animate.
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const reduced = usePrefersReducedMotion();
  const firstRun = useRef(true);

  useEffect(() => {
    firstRun.current = false;
  }, []);

  return (
    <motion.div
      key={pathname}
      initial={firstRun.current || reduced ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}