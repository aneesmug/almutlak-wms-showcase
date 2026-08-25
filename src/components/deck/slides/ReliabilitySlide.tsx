import { motion } from "motion/react";
import { Check, ShieldCheck } from "lucide-react";
import { SlideFrame, SlideTitle, ease } from "../SlideFrame";

const items = [
  "Secure configuration kept entirely outside application code.",
  "Inactive suppliers and products auto-filtered from selection lists.",
  "Parameterized queries throughout — injection-safe by design.",
  "Granular role-based permissions applied per warehouse.",
];

export function ReliabilitySlide({ index, total }: { index: number; total: number }) {
  return (
    <SlideFrame kicker="RELIABILITY & CONTROL" index={index} total={total}>
      <SlideTitle>Engineered for Data Integrity and Operational Control</SlideTitle>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
        <ul className="space-y-4">
          {items.map((text, i) => (
            <motion.li
              key={text}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.45, ease, delay: 0.25 + i * 0.28 }}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ amount: 0.4 }}
                transition={{ duration: 0.35, ease, delay: 0.45 + i * 0.28 }}
                className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15"
              >
                <Check className="size-4 text-accent" strokeWidth={2} />
              </motion.span>
              <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">{text}</span>
            </motion.li>
          ))}
        </ul>

        <div className="relative hidden items-center justify-center lg:flex">
          {[0, 1, 2].map((r) => (
            <motion.span
              key={r}
              className="absolute rounded-full border border-primary/40"
              style={{ width: 180 + r * 70, height: 180 + r * 70 }}
              animate={{ opacity: [0.5, 0.05, 0.5], scale: [0.95, 1.06, 0.95] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: r * 0.6 }}
            />
          ))}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.6, ease }}
            className="relative flex size-32 items-center justify-center rounded-full border border-border bg-card shadow-card"
          >
            <ShieldCheck className="size-14 text-primary" strokeWidth={2} />
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
}
