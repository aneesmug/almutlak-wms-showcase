import { motion } from "motion/react";
import {
  PackageCheck,
  Boxes,
  ClipboardList,
  ArrowLeftRight,
  TruckIcon,
  BarChart3,
} from "lucide-react";
import { SlideFrame, SlideTitle, ease } from "../SlideFrame";

const modules = [
  { icon: PackageCheck, title: "Inbound & Receiving", body: "Container intake, supplier records and line-by-line receiving." },
  { icon: Boxes, title: "Inventory & Locations", body: "Bin-level tracking with guided put-away across warehouses." },
  { icon: ClipboardList, title: "Picking & Outbound Orders", body: "Pick lists, staging areas and order fulfilment control." },
  { icon: ArrowLeftRight, title: "Warehouse Transfers", body: "Inter-warehouse stock moves with full audit trail." },
  { icon: TruckIcon, title: "Delivery & Driver Management", body: "Third-party delivery assignment and shipment tracking." },
  { icon: BarChart3, title: "Reports & Analytics", body: "Inbound, outbound and inventory reporting on demand." },
];

export function ModulesSlide({ index, total }: { index: number; total: number }) {
  return (
    <SlideFrame kicker="CORE MODULES" index={index} total={total}>
      <SlideTitle>Purpose-Built Modules for Every Function</SlideTitle>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.12 }}
            className="group rounded-2xl border border-border bg-card p-5 shadow-card transition-colors hover:border-accent/60"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.4, ease, delay: 0.32 + i * 0.12 }}
              className="flex size-11 items-center justify-center rounded-xl border border-border bg-background"
            >
              <m.icon className="size-5 text-accent" strokeWidth={2} />
            </motion.div>
            <h3 className="mt-4 font-display text-base font-semibold text-foreground sm:text-lg">
              {m.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{m.body}</p>
          </motion.div>
        ))}
      </div>
    </SlideFrame>
  );
}
