import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/** Shared page gutter + max width so every section aligns to the same grid. */
export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return <Tag className={cn("mx-auto w-full max-w-360 px-6 md:px-10 lg:px-12", className)}>{children}</Tag>;
}
