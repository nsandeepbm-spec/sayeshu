"use server";

/**
 * Form handlers for the public site.
 *
 * Contact enquiries are POSTed to the Google Apps Script web app URL below.
 * Paste your deployed `/exec` link into `GOOGLE_APPS_SCRIPT_URL` when ready.
 */

/** Google Apps Script web app `/exec` URL for contact enquiries. */
const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz5lQMviPHNcRyKkjea-yNv1fWVSsKIVt_ZsQbKTv9DCJdB7LXC-dzqW43IN4qK9Hr_/exec";

export type FieldErrors<T extends string> = Partial<Record<T, string>>;

export type NewsletterState = {
  status: "idle" | "success" | "error";
  message?: string;
  email?: string;
};

export type EnquiryField =
  | "fullName"
  | "companyName"
  | "businessEmail"
  | "phone"
  | "country"
  | "jobTitle"
  | "projectType"
  | "projectStage"
  | "capacity"
  | "gpuPlatform"
  | "coolingPreference"
  | "timeline"
  | "services"
  | "message"
  | "privacyConsent";

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

function readAll(formData: FormData, key: string, max = 2000): string {
  return formData
    .getAll(key)
    .filter((value): value is string => typeof value === "string")
    .map((value) => value.trim())
    .filter(Boolean)
    .join(", ")
    .slice(0, max);
}

/** Field names posted to Google Apps Script (`e.parameter.<name>`). */
const ENQUIRY_PAYLOAD_KEYS = [
  "fullName",
  "companyName",
  "businessEmail",
  "phone",
  "country",
  "jobTitle",
  "projectType",
  "projectStage",
  "capacity",
  "gpuPlatform",
  "coolingPreference",
  "timeline",
  "services",
  "message",
  "privacyConsent",
] as const satisfies readonly EnquiryField[];

async function deliverEnquiry(payload: Record<EnquiryField, string>): Promise<void> {
  const endpoint = GOOGLE_APPS_SCRIPT_URL.trim();
  if (!endpoint) {
    throw new Error("GOOGLE_APPS_SCRIPT_URL is not configured");
  }

  const body = new URLSearchParams();
  for (const key of ENQUIRY_PAYLOAD_KEYS) {
    body.set(key, payload[key]);
  }
  body.set("timestamp", new Date().toISOString());
  body.set("source", "sayeshu-contact");

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body,
    redirect: "follow",
  });

  if (!response.ok) {
    throw new Error(`Apps Script responded with ${response.status}`);
  }

  // Apps Script often returns HTTP 200 with `{ result: "error" }` on failure.
  const text = await response.text();
  try {
    const data = JSON.parse(text) as { result?: string; error?: unknown };
    if (data.result && data.result !== "success") {
      throw new Error(`Apps Script reported failure: ${JSON.stringify(data.error ?? data)}`);
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      // Non-JSON success bodies (plain text / HTML redirects) are acceptable.
      return;
    }
    throw error;
  }
}

async function deliverNewsletter(payload: Record<string, string>): Promise<void> {
  void payload;
}

export async function subscribeToNewsletter(_prev: NewsletterState, formData: FormData): Promise<NewsletterState> {
  const email = read(formData, "email", 254);

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address.", email };
  }

  try {
    await deliverNewsletter({ email });
  } catch {
    return { status: "error", message: "Something went wrong. Please try again shortly.", email };
  }

  return { status: "success", message: "Thank you. You have been registered to receive our technical briefings." };
}

const PROJECT_TYPES = new Set([
  "new-data-centre",
  "ai-data-centre",
  "gpu-infrastructure",
  "facility-upgrade",
  "liquid-cooling",
  "power-infrastructure",
  "technical-due-diligence",
  "other",
]);

const PROJECT_STAGES = new Set([
  "",
  "initial-concept",
  "feasibility-planning",
  "design-engineering",
  "procurement",
  "construction",
  "operational",
]);

const CAPACITIES = new Set([
  "",
  "below-1mw",
  "1-5mw",
  "5-20mw",
  "20-50mw",
  "above-50mw",
  "not-defined",
]);

const COOLING = new Set([
  "",
  "air",
  "direct-to-chip",
  "immersion",
  "hybrid",
  "not-decided",
]);

const TIMELINES = new Set([
  "",
  "immediate",
  "3-6-months",
  "6-12-months",
  "12-24-months",
  "not-defined",
]);

const SERVICE_OPTIONS = new Set([
  "strategy-design",
  "electrical-power",
  "ai-gpu-infrastructure",
  "liquid-cooling-thermal",
  "network-storage",
  "gpu-performance",
  "due-diligence",
  "integration-commissioning",
  "consultation",
]);

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const values = {
    fullName: read(formData, "fullName", 120),
    companyName: read(formData, "companyName", 160),
    businessEmail: read(formData, "businessEmail", 254),
    phone: read(formData, "phone", 40),
    country: read(formData, "country", 80),
    jobTitle: read(formData, "jobTitle", 120),
    projectType: read(formData, "projectType", 40),
    projectStage: read(formData, "projectStage", 40),
    capacity: read(formData, "capacity", 40),
    gpuPlatform: read(formData, "gpuPlatform", 160),
    coolingPreference: read(formData, "coolingPreference", 40),
    timeline: read(formData, "timeline", 40),
    services: readAll(formData, "services", 500),
    message: read(formData, "message", 4000),
    privacyConsent: read(formData, "privacyConsent", 10) === "yes" ? "yes" : "",
  } satisfies Record<EnquiryField, string>;

  // Honeypot: real users never see or fill this field.
  if (read(formData, "website", 200)) {
    return { status: "success", message: "Thank you. We will be in touch." };
  }

  const errors: FieldErrors<EnquiryField> = {};
  if (values.fullName.length < 2) errors.fullName = "Please enter your full name.";
  if (values.companyName.length < 2) errors.companyName = "Please enter your company name.";
  if (!EMAIL_PATTERN.test(values.businessEmail)) errors.businessEmail = "Please enter a valid business email.";
  if (!values.phone || !/^[+\d\s().-]{6,}$/.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (values.country.length < 2) errors.country = "Please enter your country.";
  if (!PROJECT_TYPES.has(values.projectType)) errors.projectType = "Please select a project type.";
  if (!PROJECT_STAGES.has(values.projectStage)) errors.projectStage = "Please select a valid project stage.";
  if (!CAPACITIES.has(values.capacity)) errors.capacity = "Please select a valid IT capacity.";
  if (!COOLING.has(values.coolingPreference)) {
    errors.coolingPreference = "Please select a valid cooling preference.";
  }
  if (!TIMELINES.has(values.timeline)) errors.timeline = "Please select a valid timeline.";

  const selectedServices = values.services
    ? values.services.split(", ").filter((service) => SERVICE_OPTIONS.has(service))
    : [];
  values.services = selectedServices.join(", ");

  if (values.message.length < 10) errors.message = "Please tell us about your project (at least 10 characters).";
  if (values.privacyConsent !== "yes") {
    errors.privacyConsent = "Please agree to the Privacy Policy to continue.";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please correct the highlighted fields.", errors, values };
  }

  try {
    await deliverEnquiry(values);
  } catch {
    return {
      status: "error",
      message: "We could not send your enquiry. Please try again or email us directly.",
      values,
    };
  }

  return {
    status: "success",
    message:
      "Thank you. Your enquiry has been received and a principal engineer will respond within 24–48 business hours.",
  };
}
