import { motion } from "motion/react";
import { Database, Server, MonitorSmartphone } from "lucide-react";
import { Reveal, SlideFrame, SlideTitle, ease } from "../SlideFrame";

const layers = [
  { icon: MonitorSmartphone, title: "Responsive Web UI", body: "DataTables & SweetAlert2 — the experience layer.", tone: "text-highlight" },
  { icon: Server, title: "PHP REST API", body: "Clean endpoints carrying all business logic.", tone: "text-accent" },
  { icon: Database, title: "MySQL", body: "Relational data foundation with parameterized access.", tone: "text-primary" },
];

export function StackSlide({ index, total }: { index: number; total: number }) {
  return (
    <SlideFrame kicker="TECH STACK" index={index} total={total} alt>
      <SlideTitle>Simple, Proven, Scalable Technology</SlideTitle>

      <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative space-y-3">
          <motion.span
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 1.4, ease, delay: 0.4 }}
            className="absolute left-6 top-0 w-px bg-gradient-to-t from-primary via-accent to-highlight"
          />
          {layers.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.55, ease, delay: 0.9 - i * 0.28 }}
              className="relative ml-0 flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                <l.icon className={`size-6 ${l.tone}`} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                  {l.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">{l.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.6}>
          <p className="border-l-2 border-accent pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            No heavy frameworks, no unnecessary complexity — a lean stack chosen for reliability and
            ease of maintenance.
          </p>
        </Reveal>
      </div>
    </SlideFrame>
  );
}
