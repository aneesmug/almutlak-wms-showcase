import { motion } from "motion/react";

export function DotGrid({ calm = false }: { calm?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -inset-[20%] opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in oklab, var(--accent) 45%, transparent) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
        animate={{ x: [0, 34], y: [0, -34] }}
        transition={{
          duration: calm ? 26 : 16,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--primary) 55%, transparent), transparent 70%)",
        }}
        animate={{ opacity: calm ? [0.25, 0.4, 0.25] : [0.3, 0.6, 0.3], scale: [1, 1.08, 1] }}
        transition={{ duration: calm ? 12 : 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--background)_100%)]" />
    </div>
  );
}
