import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

// Leans towards the pointer, giving cards a physical, three-dimensional feel.
export default function TiltCard({
  children,
  className,
  max = 5,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 140, damping: 18, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 140, damping: 18, mass: 0.4 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-max, max]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [max, -max]);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={
        reduced
          ? undefined
          : { rotateX, rotateY, transformPerspective: 1200, transformStyle: "preserve-3d" }
      }
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}