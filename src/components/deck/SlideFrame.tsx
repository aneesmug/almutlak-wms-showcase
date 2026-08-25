import { motion } from "motion/react";
import type { ReactNode } from "react";

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export const stagger = (delay = 0.13) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.15 } },
});

export const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.6, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type Props = {
  kicker: string;
  index: number;
  total: number;
  alt?: boolean;
  children: ReactNode;
};

export function SlideFrame({ kicker, index, total, alt = false, children }: Props) {
  return (
    <section
      className={`relative flex h-screen w-full snap-start snap-always flex-col overflow-hidden ${
        alt ? "bg-surface-alt" : "bg-background"
      }`}
    >
      <header className="flex shrink-0 items-center justify-between px-6 pt-8 sm:px-12 md:px-20 md:pt-10">
        <span className="text-[10px] font-semibold tracking-[0.28em] text-accent sm:text-xs">
          {kicker}
        </span>
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground sm:text-xs">
          {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </header>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.45 }}
        variants={stagger()}
        className="flex min-h-0 flex-1 flex-col justify-center px-6 py-6 sm:px-12 md:px-20"
      >
        {children}
      </motion.div>

      <footer className="flex shrink-0 items-center justify-between px-6 pb-6 text-[10px] tracking-widest text-muted-foreground/70 sm:px-12 md:px-20 md:pb-8 sm:text-xs">
        <span>ALMUTLAK WMS</span>
        <span className="hidden sm:inline">BILINGUAL WAREHOUSE PLATFORM</span>
      </footer>
    </section>
  );
}

export function SlideTitle({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <h2 className="max-w-4xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[3.25rem]">
        {children}
      </h2>
    </Reveal>
  );
}
