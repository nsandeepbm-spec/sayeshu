import Link from "next/link";
import { cn } from "@/lib/cn";

const logoSrc = "/images/sayeshu_logo.svg";

type LogoProps = {
  className?: string;
  /** `dark` inverts the mark for night/footer backgrounds. */
  tone?: "light" | "dark";
  /** Display height in pixels; width follows the wordmark aspect ratio. */
  height?: number;
};

/** Full SAYESHU wordmark from `public/images/sayeshu_logo.svg`. */
export function Logo({ className, tone = "light", height = 36 }: LogoProps) {
  const width = Math.round(height * (863.42 / 198.39));

  return (
    <Link href="/" aria-label="SAYESHU — home" className={cn("inline-flex shrink-0 items-center", className)}>
      {/* Plain img: next/image can collapse unfilled SVGs to an invisible box. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt="SAYESHU"
        width={width}
        height={height}
        decoding="async"
        className={cn("block object-contain object-left", tone === "dark" && "brightness-0 invert")}
        style={{ width, height }}
      />
    </Link>
  );
}
