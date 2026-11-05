"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { projectCategories, projects, type ProjectCategory } from "@/lib/data/projects";

type Filter = "all" | ProjectCategory;

const pad = (value: number) => String(value).padStart(2, "0");

export function ProjectsExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  const tabs: ReadonlyArray<{ id: Filter; label: string; count: number }> = [
    { id: "all", label: "All", count: projects.length },
    ...projectCategories.map((category) => ({
      id: category.id,
      label: category.label,
      count: projects.filter((project) => project.category === category.id).length,
    })),
  ];

  return (
    <section aria-label="Project portfolio" className="w-full bg-canvas py-16 lg:py-20">
      <Container>
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-line">
          <div className="scrollbar-none -mb-px flex max-w-full gap-1 overflow-x-auto sm:gap-2">
            {tabs.map((tab) => {
              const selected = tab.id === filter;
              return (
                <button
                  key={tab.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(tab.id)}
                  className={cn(
                    "flex shrink-0 items-center gap-2 border-b-2 px-3 py-3 text-xs font-medium uppercase tracking-caps transition-colors sm:px-4",
                    selected
                      ? "border-ink font-semibold text-ink"
                      : "border-transparent text-steel hover:text-ink",
                  )}
                >
                  {tab.label}
                  <span className="text-micro text-mist">[{pad(tab.count)}]</span>
                </button>
              );
            })}
          </div>
          <div className="hidden items-center gap-2 text-tiny uppercase tracking-widest text-mist lg:flex">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent" />
            Displaying portfolio taxonomy // SY-ENG-2026
          </div>
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          Showing {visible.length} of {projects.length} projects
        </p>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <li key={project.number} className="flex">
              <article className="group flex w-full flex-col justify-between border border-line bg-white">
                <div>
                  <div className="relative aspect-16/10 overflow-hidden border-b border-line bg-night-raised">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-102"
                    />
                    <span className="absolute left-2 top-2 border border-line bg-white px-2 py-0.75 text-micro font-bold uppercase tracking-label text-ink">
                      Project No. {project.number}
                    </span>
                  </div>
                  <div className="flex flex-col p-6">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="text-tiny font-semibold uppercase tracking-label text-accent-text">
                        {project.kicker}
                      </span>
                      <span className="border border-line bg-stone px-1.5 py-0.5 text-micro font-semibold uppercase tracking-wider text-ink">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="mb-1 text-xl font-bold tracking-heading-sm text-ink transition-colors group-hover:text-accent-text">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-body leading-normal text-steel">{project.summary}</p>
                    <ul className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag} className="border border-line bg-canvas px-2 py-0.75 text-tiny font-medium text-ink">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border-b border-accent pb-0.5 text-xs font-semibold uppercase tracking-caps text-ink transition-colors hover:text-accent-text"
                  >
                    Discuss a similar project
                    <Icon name="arrow-right" size={14} />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-small text-mist">Representative engagements shown for illustration.</p>
      </Container>
    </section>
  );
}
