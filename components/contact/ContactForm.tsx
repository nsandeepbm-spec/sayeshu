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
  { value: "new-data-centre", label: "New Data Centre" },
  { value: "ai-data-centre", label: "AI Data Centre" },
  { value: "gpu-infrastructure", label: "GPU Infrastructure" },
  { value: "facility-upgrade", label: "Existing Facility Upgrade" },
  { value: "liquid-cooling", label: "Liquid Cooling Infrastructure" },
  { value: "power-infrastructure", label: "Power Infrastructure" },
  { value: "technical-due-diligence", label: "Technical Due Diligence" },
  { value: "other", label: "Other" },
] as const;

const projectStages = [
  { value: "initial-concept", label: "Initial Concept" },
  { value: "feasibility-planning", label: "Feasibility & Planning" },
  { value: "design-engineering", label: "Design & Engineering" },
  { value: "procurement", label: "Procurement" },
  { value: "construction", label: "Construction" },
  { value: "operational", label: "Existing Operational Facility" },
] as const;

const capacities = [
  { value: "below-1mw", label: "Below 1 MW" },
  { value: "1-5mw", label: "1–5 MW" },
  { value: "5-20mw", label: "5–20 MW" },
  { value: "20-50mw", label: "20–50 MW" },
  { value: "above-50mw", label: "Above 50 MW" },
  { value: "not-defined", label: "Not yet defined" },
] as const;

const coolingOptions = [
  { value: "air", label: "Air Cooling" },
  { value: "direct-to-chip", label: "Direct-to-Chip Liquid Cooling" },
  { value: "immersion", label: "Immersion Cooling" },
  { value: "hybrid", label: "Hybrid Cooling" },
  { value: "not-decided", label: "Not yet decided" },
] as const;

const timelines = [
  { value: "immediate", label: "Immediate (< 3 months)" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "6-12-months", label: "6–12 months" },
  { value: "12-24-months", label: "12–24 months" },
  { value: "not-defined", label: "Not yet defined" },
] as const;

const serviceOptions = [
  { value: "strategy-design", label: "Data Centre Strategy & Design" },
  { value: "electrical-power", label: "Electrical & Power Engineering" },
  { value: "ai-gpu-infrastructure", label: "AI & GPU Infrastructure" },
  { value: "liquid-cooling-thermal", label: "Liquid Cooling & Thermal Engineering" },
  { value: "network-storage", label: "Network & Storage Architecture" },
  { value: "gpu-performance", label: "GPU Performance & Efficiency" },
  { value: "due-diligence", label: "Technical Due Diligence" },
  { value: "integration-commissioning", label: "Project Integration & Commissioning" },
  { value: "consultation", label: "Not sure — need consultation" },
] as const;

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="border-b border-line pb-2 text-tiny font-bold uppercase tracking-wider text-ink">{children}</h3>
  );
}

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

type ControlProps = {
  id: EnquiryField;
  name: EnquiryField;
  "aria-invalid"?: true;
  "aria-describedby"?: string;
  className: string;
};

function SelectControl({
  id,
  required,
  defaultValue,
  placeholder,
  options,
  controlProps,
}: {
  id: EnquiryField;
  required?: boolean;
  defaultValue?: string;
  placeholder: string;
  options: readonly { value: string; label: string }[];
  controlProps: (id: EnquiryField) => ControlProps;
}) {
  return (
    <div className="relative">
      <select
        {...controlProps(id)}
        required={required}
        defaultValue={defaultValue ?? ""}
        className={cn(controlProps(id).className, "appearance-none pr-10")}
      >
        <option value="" disabled={required}>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Icon
        name="chevron-down"
        size={18}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-mist"
      />
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);
  const errors = state.errors ?? {};
  const values = state.values ?? {};
  const selectedServices = new Set(
    values.services
      ? values.services
          .split(", ")
          .map((service) => service.trim())
          .filter(Boolean)
      : [],
  );

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

  const controlProps = (id: EnquiryField): ControlProps => ({
    id,
    name: id,
    ...(errors[id] ? { "aria-invalid": true as const, "aria-describedby": `${id}-error` } : {}),
    className: cn(controlClass, errors[id] ? "border-danger" : "border-line"),
  });

  return (
    <form action={formAction} noValidate className="flex flex-col gap-10">
      {state.status === "error" && state.message && (
        <p role="alert" className="border-l-2 border-danger bg-danger-tint/50 px-4 py-3 text-sm text-danger-ink">
          {state.message}
        </p>
      )}

      <p className="text-small text-steel">Fields marked * are required.</p>

      {/* Honeypot — hidden from people and assistive tech, filled only by bots. */}
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset className="flex flex-col gap-6">
        <SectionTitle>A. Contact information</SectionTitle>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field id="fullName" label="Full name" required error={errors.fullName}>
            <input
              {...controlProps("fullName")}
              type="text"
              autoComplete="name"
              required
              placeholder="Full name"
              defaultValue={values.fullName}
            />
          </Field>
          <Field id="companyName" label="Company name" required error={errors.companyName}>
            <input
              {...controlProps("companyName")}
              type="text"
              autoComplete="organization"
              required
              placeholder="Company name"
              defaultValue={values.companyName}
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field id="businessEmail" label="Business email" required error={errors.businessEmail}>
            <input
              {...controlProps("businessEmail")}
              type="email"
              autoComplete="email"
              required
              placeholder="name@company.com"
              defaultValue={values.businessEmail}
            />
          </Field>
          <Field id="phone" label="Phone number" required error={errors.phone}>
            <input
              {...controlProps("phone")}
              type="tel"
              autoComplete="tel"
              required
              placeholder="+44 20 0000 0000"
              defaultValue={values.phone}
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field id="country" label="Country" required error={errors.country}>
            <input
              {...controlProps("country")}
              type="text"
              autoComplete="country-name"
              required
              placeholder="Country"
              defaultValue={values.country}
            />
          </Field>
          <Field id="jobTitle" label="Job title" error={errors.jobTitle}>
            <input
              {...controlProps("jobTitle")}
              type="text"
              autoComplete="organization-title"
              placeholder="Job title"
              defaultValue={values.jobTitle}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-6">
        <SectionTitle>B. Project information</SectionTitle>

        <Field id="projectType" label="What type of project are you planning?" required error={errors.projectType}>
          <SelectControl
            id="projectType"
            required
            defaultValue={values.projectType}
            placeholder="Select project type..."
            options={projectTypes}
            controlProps={controlProps}
          />
        </Field>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field id="projectStage" label="Current project stage" error={errors.projectStage}>
            <SelectControl
              id="projectStage"
              defaultValue={values.projectStage}
              placeholder="Select stage..."
              options={projectStages}
              controlProps={controlProps}
            />
          </Field>
          <Field id="capacity" label="Estimated IT capacity" error={errors.capacity}>
            <SelectControl
              id="capacity"
              defaultValue={values.capacity}
              placeholder="Select capacity..."
              options={capacities}
              controlProps={controlProps}
            />
          </Field>
        </div>

        <Field id="gpuPlatform" label="GPU / accelerator platform" error={errors.gpuPlatform}>
          <input
            {...controlProps("gpuPlatform")}
            type="text"
            placeholder="e.g. NVIDIA HGX / Blackwell / other"
            defaultValue={values.gpuPlatform}
          />
        </Field>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field id="coolingPreference" label="Cooling preference" error={errors.coolingPreference}>
            <SelectControl
              id="coolingPreference"
              defaultValue={values.coolingPreference}
              placeholder="Select cooling preference..."
              options={coolingOptions}
              controlProps={controlProps}
            />
          </Field>
          <Field id="timeline" label="Expected project timeline" error={errors.timeline}>
            <SelectControl
              id="timeline"
              defaultValue={values.timeline}
              placeholder="Select timeline..."
              options={timelines}
              controlProps={controlProps}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-6">
        <SectionTitle>C. Services required</SectionTitle>
        <p className="text-small text-steel">Select all that apply.</p>

        <div
          role="group"
          aria-labelledby="services-label"
          aria-describedby={errors.services ? "services-error" : undefined}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          <span id="services-label" className="sr-only">
            Services required
          </span>
          {serviceOptions.map((service) => (
            <label
              key={service.value}
              className="flex cursor-pointer items-start gap-3 border border-line bg-canvas px-3 py-3 text-small text-ink transition-colors hover:border-ink"
            >
              <input
                type="checkbox"
                name="services"
                value={service.value}
                defaultChecked={selectedServices.has(service.value)}
                aria-invalid={errors.services ? true : undefined}
                className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
              />
              <span>{service.label}</span>
            </label>
          ))}
        </div>
        {errors.services && (
          <p id="services-error" className="text-xs font-medium text-danger">
            {errors.services}
          </p>
        )}

        <Field id="message" label="Tell us about your project" required error={errors.message}>
          <textarea
            {...controlProps("message")}
            rows={5}
            required
            placeholder="Describe facility constraints, target capacity, cooling preferences, location or specific engineering requirements..."
            defaultValue={values.message}
            className={cn(controlProps("message").className, "h-auto resize-y p-3")}
          />
        </Field>
        <p className="text-xs leading-5 text-steel">
          You can optionally provide technical drawings, a project brief or equipment specifications through a secure
          document upload once we respond to your enquiry.
        </p>

        <div className="flex flex-col gap-1">
          <label className="flex cursor-pointer items-start gap-3 text-small text-ink">
            <input
              id="privacyConsent"
              name="privacyConsent"
              type="checkbox"
              value="yes"
              required
              defaultChecked={values.privacyConsent === "yes"}
              aria-invalid={errors.privacyConsent ? true : undefined}
              aria-describedby={errors.privacyConsent ? "privacyConsent-error" : undefined}
              className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
            />
            <span>
              I agree to the Privacy Policy and consent to being contacted regarding this enquiry.
              <span aria-hidden="true" className="ml-1 text-accent-text">
                *
              </span>
            </span>
          </label>
          {errors.privacyConsent && (
            <p id="privacyConsent-error" className="text-xs font-medium text-danger">
              {errors.privacyConsent}
            </p>
          )}
        </div>
      </fieldset>

      <div className="flex flex-col gap-4 pt-2">
        <button type="submit" disabled={pending} className={buttonStyles("primary", "w-full sm:w-auto", "form")}>
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
