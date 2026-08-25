import { motion } from "motion/react";
import { Languages, Zap, UserCheck, SlidersHorizontal } from "lucide-react";
import { Reveal, SlideFrame, SlideTitle, ease } from "../SlideFrame";

const points = [
  { icon: Languages, text: "Every page auto-renders in English or Arabic with true RTL mirroring — not just a text swap." },
  { icon: Zap, text: "A smart translation engine caches translations for instant page loads." },
  { icon: UserCheck, text: "Names and records display in the user's language while the underlying data stays consistent." },
  { icon: SlidersHorizontal, text: "An admin Translations dashboard gives full control over every term." },
];

function Mock({ rtl }: { rtl?: boolean }) {
  return (
    <div dir={rtl ? "rtl" : "ltr"} className="flex-1 rounded-2xl border border-border bg-card p-4 shadow-card">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold tracking-widest text-accent">
          {rtl ? "لوحة التحكم" : "DASHBOARD"}
        </span>
        <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
          {rtl ? "العربية" : "English"}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {(rtl ? ["الوارد", "المخزون", "الصادر"] : ["Inbound", "Stock", "Outbound"]).map((t) => (
          <div key={t} className="rounded-lg border border-border bg-background px-2 py-3">
            <p className="text-[10px] text-muted-foreground">{t}</p>
            <p className="mt-1 font-display text-sm font-semibold text-foreground">
              {rtl ? "١٢٤" : "124"}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-2">
        {[0, 1, 2].map((r) => (
          <div key={r} className="flex items-center gap-2 rounded-lg border border-border/70 px-2 py-2">
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="h-1.5 flex-1 rounded-full bg-border" />
            <span className="h-1.5 w-8 rounded-full bg-accent/50" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function BilingualSlide({ index, total }: { index: number; total: number }) {
  return (
    <SlideFrame kicker="BILINGUAL DESIGN" index={index} total={total} alt>
      <SlideTitle>Built to Speak Every User's Language — Natively</SlideTitle>

      <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
        <ul className="space-y-4">
          {points.map((p, i) => (
            <Reveal key={p.text} delay={0.15 + i * 0.13}>
              <li className="flex gap-3">
                <p.icon className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={2} />
                <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {p.text}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>

        <div className="relative flex gap-4">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="flex flex-1"
          >
            <Mock />
          </motion.div>
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.6, ease, delay: 0.55 }}
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 origin-center"
            style={{ background: "var(--gradient-accent)" }}
          />
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="flex flex-1"
          >
            <Mock rtl />
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
}
