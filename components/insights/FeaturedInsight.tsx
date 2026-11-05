import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { featuredInsight, formatInsightDate, insightCategories } from "@/lib/data/insights";

export function FeaturedInsight() {
  const article = featuredInsight;
  const category = insightCategories.find((item) => item.id === article.category)?.label ?? "";

  return (
    <section id="articles" aria-labelledby="featured-title" className="w-full bg-canvas pt-16 lg:pt-20">
      <Container>
        <div className="mb-4 flex items-center justify-between border-b border-line pb-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-eyebrow text-ink">Featured editorial</span>
            <span aria-hidden="true" className="h-0.5 w-4 bg-accent" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-eyebrow text-mist">Vol. 04 / Issue 19</span>
        </div>

        <article className="grid grid-cols-1 border border-line bg-white lg:grid-cols-12">
          <div className="relative min-h-75 overflow-hidden bg-line lg:col-span-7 lg:min-h-115">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-between border-t border-line bg-white p-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-10">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-eyebrow text-accent-text">{category}</span>
                <span className="text-sm text-mist">
                  <time dateTime={article.date}>{formatInsightDate(article.date)}</time> · {article.readMinutes} min
                  read
                </span>
              </div>
              <h2
                id="featured-title"
                className="font-display text-feature font-bold leading-tight tracking-heading-sm text-ink lg:text-feature-lg"
              >
                {article.title}
              </h2>
              <p className="text-lead leading-relaxed text-steel-dark">{article.summary}</p>
            </div>
            <div className="mt-10 flex items-center gap-3 border-t border-line pt-6">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center bg-ink text-xs font-semibold text-white"
              >
                {article.author.initials}
              </span>
              <div className="flex flex-col">
                <span className="text-small font-semibold text-ink">{article.author.name}</span>
                <span className="text-tiny text-mist">{article.author.role}</span>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
