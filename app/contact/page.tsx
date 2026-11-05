import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactSidebar } from "@/components/contact/ContactSidebar";
import { LocationsBand } from "@/components/contact/LocationsBand";
import { Container } from "@/components/ui/Container";
import { ContactHero } from "@/components/contact/ContactHero";

export const metadata: Metadata = {
  title: "Discuss a Project",
  description:
    "Tell SAYESHU about your AI data centre requirements and we will respond with the right engagement approach within 24–48 business hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <Container className="py-16 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <section
            id="enquiry"
            aria-labelledby="enquiry-title"
            className="relative border border-outline bg-white p-6 sm:p-10 lg:col-span-7 lg:p-12"
          >
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-accent" />
            <div className="mb-10 border-b border-outline pb-6">
              <div className="mb-1 flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent-text">
                  Project enquiry
                </span>
                <span className="text-xs uppercase text-steel-deep">DOC-REV // 2026.4</span>
              </div>
              <h2 id="enquiry-title" className="font-display text-feature font-bold tracking-heading-sm text-ink">
                Project enquiry
              </h2>
              <p className="mt-1 text-body leading-6 text-steel-dark">
                Share initial technical and operational parameters for the right engineering response.
              </p>
            </div>
            <ContactForm />
          </section>

          <ContactSidebar />
        </div>
      </Container>

      <LocationsBand />
    </>
  );
}
