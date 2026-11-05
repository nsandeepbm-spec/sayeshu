import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, type IconName } from "@/components/ui/Icon";
import { images } from "@/lib/images";

const capabilities: ReadonlyArray<{ icon: IconName; title: string; text: string }> = [
  {
    icon: "cpu",
    title: "GPU Platforms",
    text: "Optimised for NVIDIA Blackwell, Hopper and custom ASIC cluster topologies with matched footprint and thermal envelopes.",
  },
  {
    icon: "zap",
    title: "High-Density Power",
    text: "Modular busway systems and multi-megawatt pod distribution delivering up to 100kW+ per continuous rack bay.",
  },
  {
    icon: "droplet",
    title: "Liquid & Hybrid Cooling",
    text: "Direct-to-chip DLC, rear-door heat exchangers and immersion infrastructure engineered for extreme heat extraction.",
  },
  {
    icon: "network",
    title: "High-Performance Networking",
    text: "Low-latency InfiniBand and RoCE fabric topology planning with structured fibre routing and strict pathway bend radii.",
  },
];

export function AiReadiness() {
  return (
    <section className="w-full border-y border-night-line bg-night py-24 text-white">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="border border-night-line bg-night-raised p-3">
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={images.serverAisleBlue}
                  alt="Mission-critical server aisle in operation with blue LED lighting"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute left-4 top-4 flex items-center gap-2 border border-night-line bg-night/90 px-3 py-1.5">
                  <span aria-hidden="true" className="h-2 w-2 animate-pulse bg-accent" />
                  <span className="text-micro font-bold uppercase tracking-widest text-white">
                    Status: Mission critical operational
                  </span>
                </div>
              </div>
              <dl className="mt-3 grid grid-cols-2 gap-4 border-t border-night-line pt-3 text-tiny font-medium uppercase tracking-wide text-night-text">
                <div className="flex flex-wrap gap-x-1.5">
                  <dt>Supply temp:</dt>
                  <dd className="font-bold text-white">18.4°C</dd>
                </div>
                <div className="flex flex-wrap gap-x-1.5">
                  <dt>Rack delta T:</dt>
                  <dd className="font-bold text-white">14.2°C</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Eyebrow tone="dark">AI-Ready Infrastructure</Eyebrow>
            <h2 className="mt-3 font-display section-title font-bold text-white">
              Built for High-Density Computing.
            </h2>
            <p className="mb-8 mt-4 text-body leading-relaxed text-night-text">
              Specialised infrastructure for AI, HPC and GPU-intensive workloads with efficient power and advanced
              cooling architectures. Every subsystem is calibrated for uninterrupted continuous compute.
            </p>
            <ul className="divide-y divide-night-line border-y border-night-line">
              {capabilities.map((item) => (
                <li key={item.title} className="flex items-start gap-4 py-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-night-line bg-night-raised text-accent-bright">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <div>
                    <h3 className="text-lead font-bold tracking-tight text-white">{item.title}</h3>
                    <p className="mt-1 text-small leading-5 text-night-text">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
