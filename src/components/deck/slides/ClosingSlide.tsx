import { motion } from "motion/react";
import { CheckCircle2, Gauge, Globe2 } from "lucide-react";
import { DotGrid } from "../DotGrid";
import { ease } from "../SlideFrame";

const pills = [
  { icon: CheckCircle2, label: "Fewer Errors" },
  { icon: Gauge, label: "Faster Operations" },
  { icon: Globe2, label: "Seamless Bilingual Access" },
];

export function ClosingSlide({ index, total }: { index: number; total: number }) {
  return (
    <section className="relative flex h-screen w-full snap-start snap-always flex-col items-center justify-center overflow-hidden bg-background px-6 text-center">
      <DotGrid calm />
      <div className="relative max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
          className="text-[10px] font-semibold tracking-[0.34em] text-accent sm:text-xs"
        >
          CLOSING
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]"
        >
          One Platform. Every Warehouse. Any Language.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.7, ease, delay: 0.35 }}
          className="mt-7 text-sm leading-relaxed text-muted-foreground sm:text-lg"
        >
          Almutlak WMS brings every warehouse operation — receiving, storage, picking, delivery, and
          reporting — into a single, secure, bilingual system built to reduce errors, save time, and
          scale with the business.
        </motion.p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {pills.map((p, i) => (
            <motion.span
              key={p.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.45, ease, delay: 0.6 + i * 0.14 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground shadow-card sm:text-sm"
            >
              <p.icon className="size-4 text-accent" strokeWidth={2} />
              {p.label}
            </motion.span>
          ))}
        </div>
      </div>

      <span className="absolute bottom-8 font-mono text-[10px] tracking-widest text-muted-foreground/70 sm:text-xs">
        {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </section>
  );
}
