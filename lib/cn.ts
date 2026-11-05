/** Tiny class-name joiner (keeps the dependency list empty). */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
