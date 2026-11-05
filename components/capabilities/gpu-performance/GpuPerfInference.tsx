import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { inferenceMetrics } from "@/lib/data/gpuPerformance";
import { images } from "@/lib/images";

export function GpuPerfInference() {
  return (
    <section className="border-b border-line bg-stone py-20 lg:py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="AI inference performance"
              title="Measure the output, not just the hardware."
              className="mb-8"
            />
            <div className="overflow-x-auto border border-line bg-white">
              <table className="w-full min-w-100 border-collapse text-left">
                <thead>
                  <tr className="border-b border-line bg-canvas-hover">
                    <th className="px-5 py-4 text-small font-semibold uppercase tracking-wider text-ink">Metric</th>
                    <th className="border-l border-line px-5 py-4 text-small font-semibold uppercase tracking-wider text-ink">
                      What it measures
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {inferenceMetrics.map((row) => (
                    <tr key={row.metric} className="transition-colors hover:bg-canvas/60">
                      <td className="px-5 py-4 font-semibold text-ink">{row.metric}</td>
                      <td className="border-l border-line px-5 py-4 text-body text-steel-dark">{row.measures}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="relative min-h-100 overflow-hidden border border-line bg-night lg:col-span-6 lg:min-h-135">
            <Image
              src={images.gpuPerfMonitoring}
              alt="Engineer reviewing AI infrastructure performance charts in a monitoring workstation"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
