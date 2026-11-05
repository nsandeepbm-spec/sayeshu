import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";

export function GpuPerfFramework() {
  return (
    <section className="border-b border-line bg-canvas py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Engineering performance framework"
              title="Connect infrastructure efficiency to computing outcomes."
              className="mb-6"
            />
            <p className="max-w-xl text-lead leading-relaxed text-steel-dark">
              We assess how electrical capacity, cooling performance, GPU configuration, network architecture and
              software workload characteristics influence the useful output of an AI computing environment.
            </p>
          </div>

          <div className="relative min-h-90 overflow-hidden border border-line bg-stone lg:col-span-7 lg:min-h-125">
            <Image
              src={images.gpuPerfDiagram}
              alt="Technical diagram relating power, cooling, GPU compute, network throughput and AI inference output"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
