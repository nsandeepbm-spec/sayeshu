import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";

export function AiInfraGpu() {
  return (
    <section className="border-b border-line bg-stone py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative order-2 min-h-90 overflow-hidden border border-line bg-night lg:order-1 lg:col-span-6 lg:min-h-125">
            <Image
              src={images.aiInfraGpuRack}
              alt="Close-up of a high-density AI GPU server rack with fibre and cooling interfaces"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <SectionHeading
              eyebrow="GPU infrastructure"
              title="Built around the requirements of accelerated computing."
              className="mb-6"
            />
            <p className="max-w-xl text-lead leading-relaxed text-steel-dark">
              We evaluate GPU server configurations, rack density, memory architecture, interconnects and infrastructure
              requirements against the intended workloads.
            </p>
            <p className="mt-5 max-w-xl text-body leading-relaxed text-steel">
              Technology assessment may include NVIDIA HGX, DGX, Blackwell and Vera Rubin platforms, as well as
              comparable accelerator technologies.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
