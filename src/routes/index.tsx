import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/deck/Deck";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Almutlak WMS — Bilingual Warehouse Management Platform" },
      {
        name: "description",
        content:
          "Almutlak WMS unifies receiving, storage, picking, delivery and reporting in one secure, bilingual (English/Arabic) warehouse management system.",
      },
      { property: "og:title", content: "Almutlak WMS — Bilingual Warehouse Management Platform" },
      {
        property: "og:description",
        content:
          "A unified, bilingual platform for modern warehouse operations: multi-warehouse, role-based, real-time.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <h1 className="sr-only">Almutlak WMS — A Unified, Bilingual Platform for Modern Warehouse Operations</h1>
      <Deck />
    </main>
  );
}
