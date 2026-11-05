"use client";

import { useActionState, type ReactNode } from "react";
import { buttonStyles } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { submitEnquiry, type EnquiryField, type EnquiryState } from "@/lib/actions";

const initialState: EnquiryState = { status: "idle" };

const controlClass =
  "h-11 w-full border bg-white px-3 text-body text-ink placeholder:text-mist transition-colors focus:border-ink focus:outline-hidden";

const projectTypes = [
  { value: "new-ai-dc", label: "New AI Data Centre" },
  { value: "facility-upgrade", label: "Existing Facility Upgrade" },
  { value: "gpu-cluster", label: "GPU Cluster Infrastructure" },
  { value: "liquid-cooling", label: "Liquid Cooling" },
  { value: "power-electrical", label: "Power & Electrical" },
  { value: "performance-assessment", label: "Performance Assessment" },
  { value: "design-review", label: "Design Review" },
  { value: "other", label: "Other" },
] as const;

const timelines = [
  { value: "immediate", label: "Immediate (< 3 months)" },
  { value: "mid", label: "3 – 6 months" },
  { value: "extended", label: "6 – 12 months" },
  { value: "concept", label: "Concept / Exploratory" },
] as const;

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: EnquiryField;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-tiny font-bold uppercase tracking-wider text-ink">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-accent-text">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);
  const errors = state.errors ?? {};
  const values = state.values ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 py-8">
        <span className="flex h-12 w-12 items-center justify-center bg-ink text-white">
          <Icon name="check" size={24} />
        </span>
        <h3 className="font-display text-2xl font-bold tracking-tight text-ink">Enquiry received</h3>
        <p className="max-w-lg text-body leading-relaxed text-steel">{state.message}</p>
      </div>
    );
  }

  const controlProps = (id: EnquiryField) => ({
    id,
    name: id,
    "aria-invalid": errors[id] ? true : undefined,
    "aria-describedby": errors[id] ? `${id}-error` : undefined,
    className: cn(controlClass, errors[id] ? "border-danger" : "border-line"),
  });

  return (
    <form action={formAction} noValidate className="flex flex-col gap-6">
      {state.status === "error" && state.message && (
        <p role="alert" className="border-l-2 border-danger bg-danger-tint/50 px-4 py-3 text-sm text-danger-ink">
          {state.message}
        </p>
      )}

      {/* Honeypot — hidden from people and assistive tech, filled only by bots. */}
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field id="fullName" label="Full Name" required error={errors.fullName}>
          <input
            {...controlProps("fullName")}
            type="text"
            autoComplete="name"
            required
            placeholder="Dr. / Ir. / Full Name"
            defaultValue={values.fullName}
          />
        </Field>
        <Field id="company" label="Company / Organisation" required error={errors.company}>
          <input
            {...controlProps("company")}
            type="text"
            autoComplete="organization"
            required
            placeholder="Enterprise or Sovereign Entity"
            defaultValue={values.company}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field id="workEmail" label="Work Email" required error={errors.workEmail}>
          <input
            {...controlProps("workEmail")}
            type="email"
            autoComplete="email"
            required
            placeholder="engineering@domain.com"
            defaultValue={values.workEmail}
          />
        </Field>
        <Field id="phone" label="Phone Number" error={errors.phone}>
          <input
            {...controlProps("phone")}
            type="tel"
            autoComplete="tel"
            placeholder="+44 20 0000 0000"
            defaultValue={values.phone}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field id="projectType" label="Project Type" required error={errors.projectType}>
          <div className="relative">
            <select
              {...controlProps("projectType")}
              required
              defaultValue={values.projectType ?? ""}
              className={cn(controlProps("projectType").className, "appearance-none pr-10")}
            >
              <option value="" disabled>
                Select project type...
              </option>
              {projectTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <Icon
              name="chevron-down"
              size={18}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-mist"
            />
          </div>
        </Field>
        <Field id="capacity" label="Capacity (MW)" error={errors.capacity}>
          <input
            {...controlProps("capacity")}
            type="text"
            placeholder="e.g. 40MW – 120MW"
            defaultValue={values.capacity}
          />
        </Field>
      </div>

      <Field id="timeline" label="Deployment Timeline" error={errors.timeline}>
        <div className="relative">
          <select
            {...controlProps("timeline")}
            defaultValue={values.timeline ?? ""}
            className={cn(controlProps("timeline").className, "appearance-none pr-10")}
          >
            <option value="">Select timeline...</option>
            {timelines.map((timeline) => (
              <option key={timeline.value} value={timeline.value}>
                {timeline.label}
              </option>
            ))}
          </select>
          <Icon
            name="chevron-down"
            size={18}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-mist"
          />
        </div>
      </Field>

      <Field id="message" label="Message & Facility Constraints" required error={errors.message}>
        <textarea
          {...controlProps("message")}
          rows={5}
          required
          placeholder="Describe facility constraints, target PUE, cooling loop preferences, location or specific engineering requirements..."
          defaultValue={values.message}
          className={cn(controlProps("message").className, "h-auto resize-y p-3")}
        />
      </Field>

      <div className="flex flex-col gap-4 pt-2">
        <button
          type="submit"
          disabled={pending}
          className={buttonStyles("primary", "w-full sm:w-auto", "form")}
        >
          {pending ? "Sending…" : "Send Enquiry"}
          <Icon name="arrow-right" size={16} className="text-accent-bright" />
        </button>
        <p className="flex items-start gap-2 text-xs leading-5 text-steel">
          <Icon name="shield-check" size={16} className="mt-0.5 shrink-0 text-accent-text" />
          All submissions are handled under strict engineering confidentiality and NDA protocols. We do not share
          project specifications.
        </p>
      </div>
    </form>
  );
}
