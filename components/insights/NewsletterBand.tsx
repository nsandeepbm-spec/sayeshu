"use client";

import { useActionState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { subscribeToNewsletter, type NewsletterState } from "@/lib/actions";

const initialState: NewsletterState = { status: "idle" };

export function NewsletterBand() {
  const [state, formAction, pending] = useActionState(subscribeToNewsletter, initialState);
  const succeeded = state.status === "success";

  return (
    <section aria-labelledby="newsletter-title" className="w-full border-t border-night-line bg-night py-14 text-white">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-2 lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-eyebrow text-accent-bright">
              <span aria-hidden="true" className="h-2 w-2 bg-accent" />
              Technical briefing
            </div>
            <h2
              id="newsletter-title"
              className="font-display text-feature-lg font-bold tracking-tight text-white lg:text-4xl"
            >
              Engineering insights, delivered.
            </h2>
            <p className="text-base leading-relaxed text-night-muted">
              Quarterly perspectives on AI infrastructure, thermal engineering, and power architecture.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-6">
            {succeeded ? (
              <div
                role="status"
                className="flex items-start gap-3 border border-accent bg-night-raised p-4 text-body text-accent-tint"
              >
                <Icon name="circle-check" size={20} className="mt-0.5 shrink-0 text-accent-bright" />
                {state.message}
              </div>
            ) : (
              <form action={formAction} noValidate className="flex flex-col gap-0 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Engineering email address
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  defaultValue={state.email ?? ""}
                  placeholder="Enter your engineering email..."
                  aria-invalid={state.status === "error"}
                  aria-describedby={state.status === "error" ? "newsletter-error" : undefined}
                  className="w-full border border-night-border bg-night-raised px-4 py-3.5 text-body text-white placeholder:text-white/60 focus:border-white focus:outline-hidden"
                />
                <button
                  type="submit"
                  disabled={pending}
                  className="whitespace-nowrap border border-white bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-stone disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {pending ? "Subscribing…" : "Subscribe"}
                </button>
              </form>
            )}

            {state.status === "error" && (
              <p id="newsletter-error" role="alert" className="text-small text-accent-tint">
                {state.message}
              </p>
            )}

            <div className="flex items-center justify-between gap-4 text-xs text-mist">
              <span className="flex items-center gap-1.5">
                <Icon name="shield-check" size={14} className="shrink-0 text-accent-bright" />
                Rigorous engineering analysis, strictly no marketing spam.
              </span>
              <span className="hidden sm:inline">Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
