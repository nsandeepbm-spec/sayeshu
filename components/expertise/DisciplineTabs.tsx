"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import type { Discipline } from "@/lib/data/disciplines";

type DisciplineTabsProps = {
  disciplines: readonly Discipline[];
  /** Index of the tab selected on first render. */
  initialIndex?: number;
};

export function DisciplineTabs({ disciplines, initialIndex = 0 }: DisciplineTabsProps) {
  const [active, setActive] = useState(initialIndex);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const current = disciplines[active];

  function focusTab(index: number) {
    const next = (index + disciplines.length) % disciplines.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        focusTab(active + 1);
        break;
      case "ArrowLeft":
        event.preventDefault();
        focusTab(active - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(disciplines.length - 1);
        break;
    }
  }

  return (
    <section aria-labelledby="deep-dive-title" className="w-full border-b border-line py-16 lg:py-24">
      <Container>
        <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <Eyebrow rule="after" className="mb-2">
              Technical specifications
            </Eyebrow>
            <h2
              id="deep-dive-title"
              className="font-display section-title font-bold text-ink"
            >
              Discipline Deep-Dive
            </h2>
          </div>
          <p className="max-w-md text-small leading-5 text-steel">
            Examine specific engineering scopes and authoritative deliverables across our eight practice areas.
          </p>
        </div>

        <div className="scrollbar-none mb-8 overflow-x-auto border border-line bg-stone">
          <div
            role="tablist"
            aria-label="Engineering disciplines"
            aria-orientation="horizontal"
            onKeyDown={onKeyDown}
            className="flex min-w-max items-stretch"
          >
            {disciplines.map((discipline, index) => {
              const selected = index === active;
              return (
                <button
                  key={discipline.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${discipline.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${discipline.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(index)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-3.5 text-xs font-medium uppercase tracking-wider transition-colors",
                    index < disciplines.length - 1 && "border-r border-line",
                    selected ? "bg-night font-bold text-white" : "text-steel hover:text-ink",
                  )}
                >
                  <span className={selected ? "text-accent-bright" : undefined}>{discipline.number}</span>
                  {discipline.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          tabIndex={0}
          className="border border-line bg-white p-6 sm:p-8 lg:p-12"
        >
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            <div className="flex flex-col lg:w-7/12">
              <div className="mb-2 flex items-center gap-3">
                <span className="text-sm font-bold text-accent-text">SCOPE OF ARCHITECTURE</span>
                <span aria-hidden="true" className="h-px w-6 bg-accent" />
              </div>
              <h3 className="mb-6 font-display text-2xl font-bold tracking-tight text-ink">{current.title}</h3>
              <p className="mb-8 text-body leading-relaxed text-steel">{current.description}</p>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {current.scope.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-accent" />
                    <span className="text-small text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between border border-line bg-canvas p-6 lg:w-5/12 lg:p-8">
              <div>
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-line pb-3">
                  <span className="text-tiny font-bold uppercase tracking-eyebrow text-ink">
                    Typical deliverables
                  </span>
                  <span className="text-micro uppercase text-steel">Spec // Verification</span>
                </div>
                <ul className="flex flex-col gap-4">
                  {current.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Icon name="circle-check" size={16} className="mt-0.5 shrink-0 text-accent-text" />
                      <span className="text-small text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4 text-xs text-steel">
                <span>{current.standard}</span>
                <Link href="/contact" className="font-semibold text-ink transition-colors hover:text-accent-text">
                  Consult Specialists →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
