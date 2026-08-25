import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { TitleSlide } from "./slides/TitleSlide";
import { OverviewSlide } from "./slides/OverviewSlide";
import { ModulesSlide } from "./slides/ModulesSlide";
import { BilingualSlide } from "./slides/BilingualSlide";
import { ReliabilitySlide } from "./slides/ReliabilitySlide";
import { StackSlide } from "./slides/StackSlide";
import { ClosingSlide } from "./slides/ClosingSlide";

const TOTAL = 7;

const labels = [
  "Title",
  "Executive Overview",
  "Core Modules",
  "Bilingual Design",
  "Reliability & Control",
  "Tech Stack",
  "Closing",
];

export function Deck() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((i: number) => {
    const el = containerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(TOTAL - 1, i));
    el.scrollTo({ top: clamped * el.clientHeight, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      setCurrent(Math.round(el.scrollTop / el.clientHeight));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        goTo(current + 1);
      } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        goTo(current - 1);
      } else if (e.key === "Home") {
        goTo(0);
      } else if (e.key === "End") {
        goTo(TOTAL - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-background font-sans">
      <div
        ref={containerRef}
        className="h-screen w-full snap-y snap-mandatory overflow-y-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <TitleSlide total={TOTAL} />
        <OverviewSlide index={2} total={TOTAL} />
        <ModulesSlide index={3} total={TOTAL} />
        <BilingualSlide index={4} total={TOTAL} />
        <ReliabilitySlide index={5} total={TOTAL} />
        <StackSlide index={6} total={TOTAL} />
        <ClosingSlide index={7} total={TOTAL} />
      </div>

      {/* Progress dots */}
      <nav
        aria-label="Slide navigation"
        className="fixed right-3 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-3 sm:right-6"
      >
        {labels.map((label, i) => (
          <button
            key={label}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}: ${label}`}
            aria-current={current === i}
            className={`group flex items-center justify-center transition-all ${
              current === i ? "size-3" : "size-2"
            }`}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                current === i
                  ? "size-3 bg-accent shadow-[0_0_0_4px_color-mix(in_oklab,var(--accent)_20%,transparent)]"
                  : "size-2 bg-muted-foreground/40 group-hover:bg-muted-foreground"
              }`}
            />
          </button>
        ))}
        <span className="mt-1 font-mono text-[10px] text-muted-foreground">
          {current + 1}/{TOTAL}
        </span>
      </nav>

      {/* Arrow controls */}
      <div className="fixed bottom-5 right-3 z-20 flex flex-col gap-2 sm:right-6">
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          aria-label="Previous slide"
          className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent disabled:opacity-30"
        >
          <ChevronUp className="size-4" strokeWidth={2} />
        </button>
        <button
          onClick={() => goTo(current + 1)}
          disabled={current === TOTAL - 1}
          aria-label="Next slide"
          className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent disabled:opacity-30"
        >
          <ChevronDown className="size-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
