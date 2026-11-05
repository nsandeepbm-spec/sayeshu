"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { formatInsightDate, insightCategories, insights, type InsightCategory } from "@/lib/data/insights";

type Filter = "all" | InsightCategory;

const pad = (value: number) => String(value).padStart(2, "0");

export function InsightsExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? insights : insights.filter((insight) => insight.category === filter);
  const labelFor = (id: InsightCategory) => insightCategories.find((category) => category.id === id)?.label ?? "";

  const tabs: ReadonlyArray<{ id: Filter; label: string; count: number }> = [
    { id: "all", label: "All", count: insights.length },
    ...insightCategories.map((category) => ({
      id: category.id,
      label: category.label,
      count: insights.filter((insight) => insight.category === category.id).length,
    })),
  ];

  return (
    <section aria-label="Latest insights" className="w-full bg-canvas py-12 lg:py-16">
      <Container>
        <div className="scrollbar-none mb-10 overflow-x-auto border-y border-line py-1">
          <div className="flex min-w-max items-center gap-2">
            {tabs.map((tab) => {
              const selected = tab.id === filter;
              return (
                <button
                  key={tab.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(tab.id)}
                  className={cn(
                    "flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-semibold transition-colors",
                    selected ? "border-ink text-ink" : "border-transparent text-mist hover:text-ink",
                  )}
                >
                  {tab.label}
                  <span
                    className={cn(
                      "px-1.5 text-tiny leading-5",
                      selected ? "bg-ink text-white" : "bg-line text-steel-deep",
                    )}
                  >
                    {pad(tab.count)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          Showing {visible.length} of {insights.length} articles
        </p>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((insight) => (
            <li key={insight.slug} className="flex">
              <article className="flex w-full flex-col justify-between border border-line bg-white">
                <div>
                  <div className="relative h-52 w-full overflow-hidden border-b border-line bg-line">
                    <Image
                      src={insight.image}
                      alt={insight.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-3 p-6">
                    <span className="text-xs font-semibold uppercase tracking-eyebrow text-accent-text">
                      {labelFor(insight.category)}
                    </span>
                    <h3 className="text-card-title font-bold leading-snug tracking-tight text-ink">{insight.title}</h3>
                    <span className="text-small text-mist">
                      <time dateTime={insight.date}>{formatInsightDate(insight.date)}</time> · {insight.readMinutes} min
                      read
                    </span>
                  </div>
                </div>
                <div className="mx-6 mt-4 border-t border-line/60 py-4 text-xs text-mist">{insight.topic}</div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-line pt-6 text-small text-mist">
          Showing <span className="font-semibold text-ink">{visible.length}</span> of {insights.length} engineering
          papers
        </div>
      </Container>
    </section>
  );
}
