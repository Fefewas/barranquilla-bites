import { motion } from "framer-motion";
import type { ReactNode } from "react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

const TAGS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  figure: motion.figure,
  li: motion.li,
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  amount?: number;
  as?: keyof typeof TAGS;
};

// Fades and lifts its children into place the first time they scroll into view.
export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  y = 26,
  x = 0,
  amount = 0.2,
  as = "div",
}: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const Tag = TAGS[as];

  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}