import { motion } from "motion/react";
import { Building2, PackageCheck, Warehouse, ListChecks, Truck, MapPin, Layers, ShieldCheck, Activity } from "lucide-react";
import { Reveal, SlideFrame, SlideTitle, ease, fadeUp } from "../SlideFrame";

const flow = [
  { label: "Supplier", icon: Building2 },
  { label: "Inbound Receiving", icon: PackageCheck },
  { label: "Storage / Inventory", icon: Warehouse },
  { label: "Picking", icon: ListChecks },
  { label: "Outbound", icon: Truck },
  { label: "Delivery", icon: MapPin },
];

const stats = [
  { icon: Layers, title: "Multi-Warehouse", body: "Manage unlimited warehouses and bin locations from one console." },
  { icon: ShieldCheck, title: "Role-Based Access", body: "Viewer, Operator and Manager scopes per warehouse." },
  { icon: Activity, title: "Real-Time Data", body: "Every movement reflected instantly across all roles." },
];

export function OverviewSlide({ index, total }: { index: number; total: number }) {
  return (
    <SlideFrame kicker="EXECUTIVE OVERVIEW" index={index} total={total} alt>
      <SlideTitle>One System Managing the Entire Warehouse Lifecycle</SlideTitle>
      <Reveal className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
        <p>
          Almutlak WMS digitizes and connects every stage of warehouse operation — creating a single,
          real-time source of truth for every role in the organization.
        </p>
      </Reveal>

      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.6, ease }}
        className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:items-center lg:gap-2"
      >
        {flow.map((step, i) => (
          <div key={step.label} className="flex flex-1 items-center gap-2">
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.45, ease, delay: 0.25 + i * 0.14 }}
              className="flex flex-1 flex-col items-center gap-2 rounded-xl border border-border bg-card px-2 py-4 text-center shadow-card"
            >
              <step.icon className="size-5 text-accent" strokeWidth={2} />
              <span className="text-[11px] font-medium leading-tight text-foreground sm:text-xs">
                {step.label}
              </span>
            </motion.div>
            {i < flow.length - 1 && (
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.3, ease, delay: 0.35 + i * 0.14 }}
                className="hidden h-px w-6 origin-left bg-primary lg:block"
              />
            )}
          </div>
        ))}
      </motion.div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.5, ease, delay: 1.05 + i * 0.13 }}
            className="rounded-2xl border border-border bg-card p-5 shadow-card"
          >
            <s.icon className="size-6 text-primary" strokeWidth={2} />
            <h3 className="mt-3 font-display text-base font-semibold text-foreground">{s.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </SlideFrame>
  );
}
