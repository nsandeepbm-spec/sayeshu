"use server";

/**
 * Form handlers for the public site.
 *
 * Both actions validate on the server and return a serialisable state for `useActionState`.
 * They stop short of delivery: wire `deliver()` to your email provider / CRM (Resend, SendGrid,
 * HubSpot, …) before launch. Until then submissions are only acknowledged, not stored.
 */

export type FieldErrors<T extends string> = Partial<Record<T, string>>;

export type NewsletterState = {
  status: "idle" | "success" | "error";
  message?: string;
  email?: string;
};

export type EnquiryField =
  | "fullName"
  | "company"
  | "workEmail"
  | "phone"
  | "projectType"
  | "capacity"
  | "timeline"
  | "message";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: FieldErrors<EnquiryField>;
  /** Echoed back on error so the form can keep what the user typed. */
  values?: Partial<Record<EnquiryField, string>>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function read(formData: FormData, key: string, max = 2000): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

// Placeholder for the real integration point.
async function deliver(kind: "newsletter" | "enquiry", payload: Record<string, string>): Promise<void> {
  void kind;
  void payload;
}

export async function subscribeToNewsletter(_prev: NewsletterState, formData: FormData): Promise<NewsletterState> {
  const email = read(formData, "email", 254);

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address.", email };
  }

  try {
    await deliver("newsletter", { email });
  } catch {
    return { status: "error", message: "Something went wrong. Please try again shortly.", email };
  }

  return { status: "success", message: "Thank you. You have been registered to receive our technical briefings." };
}

const PROJECT_TYPES = new Set([
  "new-ai-dc",
  "facility-upgrade",
  "gpu-cluster",
  "liquid-cooling",
  "power-electrical",
  "performance-assessment",
  "design-review",
  "other",
]);

const TIMELINES = new Set(["", "immediate", "mid", "extended", "concept"]);

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const values = {
    fullName: read(formData, "fullName", 120),
    company: read(formData, "company", 160),
    workEmail: read(formData, "workEmail", 254),
    phone: read(formData, "phone", 40),
    projectType: read(formData, "projectType", 40),
    capacity: read(formData, "capacity", 80),
    timeline: read(formData, "timeline", 40),
    message: read(formData, "message", 4000),
  } satisfies Record<EnquiryField, string>;

  // Honeypot: real users never see or fill this field.
  if (read(formData, "website", 200)) {
    return { status: "success", message: "Thank you. We will be in touch." };
  }

  const errors: FieldErrors<EnquiryField> = {};
  if (values.fullName.length < 2) errors.fullName = "Please enter your full name.";
  if (values.company.length < 2) errors.company = "Please enter your company or organisation.";
  if (!EMAIL_PATTERN.test(values.workEmail)) errors.workEmail = "Please enter a valid work email.";
  if (values.phone && !/^[+\d\s().-]{6,}$/.test(values.phone)) errors.phone = "Please enter a valid phone number.";
  if (!PROJECT_TYPES.has(values.projectType)) errors.projectType = "Please select a project type.";
  if (!TIMELINES.has(values.timeline)) errors.timeline = "Please select a timeline.";
  if (values.message.length < 10) errors.message = "Please describe your requirements (at least 10 characters).";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please correct the highlighted fields.", errors, values };
  }

  try {
    await deliver("enquiry", values);
  } catch {
    return {
      status: "error",
      message: "We could not send your enquiry. Please try again or email us directly.",
      values,
    };
  }

  return {
    status: "success",
    message: "Thank you. Your enquiry has been received and a principal engineer will respond within 24–48 business hours.",
  };
}
