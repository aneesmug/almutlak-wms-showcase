import { motion } from "motion/react";
import { DotGrid } from "../DotGrid";
import { ease } from "../SlideFrame";

export function TitleSlide({ total }: { total: number }) {
  return (
    <section className="relative flex h-screen w-full snap-start snap-always flex-col items-center justify-center overflow-hidden bg-background px-6 text-center">
      <DotGrid />
      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="text-[10px] font-semibold tracking-[0.34em] text-accent sm:text-xs"
        >
          WAREHOUSE MANAGEMENT SYSTEM
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          className="mt-6 font-display text-5xl font-semibold tracking-tight text-foreground sm:text-7xl lg:text-8xl"
        >
          Almutlak <span className="text-primary">WMS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.65 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          A Unified, Bilingual Platform for Modern Warehouse Operations
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.9 }}
          className="mx-auto mt-10 h-px w-40 origin-center"
          style={{ background: "var(--gradient-accent)" }}
        />
      </div>

      <span className="absolute bottom-8 font-mono text-[10px] tracking-widest text-muted-foreground/70 sm:text-xs">
        01 / {String(total).padStart(2, "0")}
      </span>
    </section>
  );
}
