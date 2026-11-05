"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { contactCta, navItems } from "@/lib/site";
import { Logo } from "./Logo";

const topLevelCapabilityHrefs = new Set([
  "/capabilities/ai-infrastructure",
  "/capabilities/gpu-performance",
]);

function isActive(pathname: string, href: string) {
  if (href === "/capabilities") {
    if (pathname === "/capabilities") return true;
    // Dedicated capability pages have their own top-level nav items.
    if (topLevelCapabilityHrefs.has(pathname)) return false;
    return pathname.startsWith("/capabilities/");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isExactActive(pathname: string, href: string) {
  return pathname === href;
}

export function Header() {
  const pathname = usePathname();
  const menuId = useId();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Mobile drawer is tied to the route it opened on, so navigation closes it without an effect.
  const [mobileOpenOn, setMobileOpenOn] = useState<string | null>(null);
  const [mobileCapabilitiesOpen, setMobileCapabilitiesOpen] = useState(true);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const mobileOpen = mobileOpenOn === pathname;

  useEffect(() => {
    setCapabilitiesOpen(false);
    setMobileOpenOn(null);
    setMobileCapabilitiesOpen(true);
  }, [pathname]);

  useEffect(() => {
    if (!capabilitiesOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setCapabilitiesOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCapabilitiesOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [capabilitiesOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpenOn(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas">
      <Container className="flex h-20 items-center justify-between gap-4 sm:gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:gap-10 md:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.href} ref={dropdownRef} className="relative">
                <button
                  type="button"
                  aria-expanded={capabilitiesOpen}
                  aria-haspopup="menu"
                  aria-controls={menuId}
                  onClick={(event) => {
                    event.stopPropagation();
                    setCapabilitiesOpen((value) => !value);
                  }}
                  className={cn(
                    "inline-flex items-center gap-1.5 border-b py-1 text-body font-medium tracking-nav text-ink transition-colors hover:text-accent-text",
                    isActive(pathname, item.href) || capabilitiesOpen ? "border-accent" : "border-transparent",
                  )}
                >
                  {item.label}
                  <Icon
                    name="chevron-down"
                    size={14}
                    className={cn("transition-transform duration-150", capabilitiesOpen && "rotate-180")}
                  />
                </button>

                {capabilitiesOpen && (
                  <div
                    id={menuId}
                    role="menu"
                    aria-label={item.label}
                    className="absolute left-1/2 top-full z-50 w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2 pt-3 sm:left-0 sm:translate-x-0"
                  >
                    <div className="max-h-[min(24rem,70vh)] overflow-y-auto border border-line bg-canvas py-1 shadow-[0_12px_28px_-16px_rgba(17,26,34,0.18)]">
                      {item.children.map((child) => {
                        const childActive = isExactActive(pathname, child.href);
                        return (
                          <Link
                            key={child.href}
                            role="menuitem"
                            href={child.href}
                            aria-current={childActive ? "page" : undefined}
                            onClick={() => setCapabilitiesOpen(false)}
                            className={cn(
                              "block px-4 py-3 text-small font-medium transition-colors",
                              childActive
                                ? "bg-stone text-accent-text"
                                : "text-ink hover:bg-stone hover:text-accent-text",
                            )}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isExactActive(pathname, item.href) ? "page" : undefined}
                className={cn(
                  "border-b py-1 text-body font-medium tracking-nav text-ink transition-colors hover:text-accent-text",
                  isActive(pathname, item.href) ? "border-accent" : "border-transparent",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Link href={contactCta.href} className={buttonStyles("primary", undefined, "compact")}>
              {contactCta.label}
              <Icon name="arrow-up-right" size={16} />
            </Link>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-ink text-ink transition-colors hover:bg-stone md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpenOn(mobileOpen ? null : pathname)}
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={20} />
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-canvas md:hidden">
          <Container className="py-2">
            <ul className="divide-y divide-line">
              {navItems.map((item) => {
                if (item.children) {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <div className="flex items-center gap-2">
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpenOn(null)}
                          className={cn(
                            "flex-1 py-4 text-base font-medium",
                            active ? "text-accent-text" : "text-ink",
                          )}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          aria-expanded={mobileCapabilitiesOpen}
                          aria-controls="mobile-capabilities"
                          aria-label={mobileCapabilitiesOpen ? "Hide capability pages" : "Show capability pages"}
                          onClick={() => setMobileCapabilitiesOpen((value) => !value)}
                          className="inline-flex h-11 w-11 items-center justify-center text-ink"
                        >
                          <Icon
                            name="chevron-down"
                            size={18}
                            className={cn("transition-transform duration-150", mobileCapabilitiesOpen && "rotate-180")}
                          />
                        </button>
                      </div>
                      {mobileCapabilitiesOpen && (
                        <ul id="mobile-capabilities" className="border-t border-line bg-stone/60">
                          {item.children.map((child) => {
                            const childActive = isExactActive(pathname, child.href);
                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  aria-current={childActive ? "page" : undefined}
                                  onClick={() => setMobileOpenOn(null)}
                                  className={cn(
                                    "block px-3 py-3.5 text-small font-medium",
                                    childActive ? "text-accent-text" : "text-ink",
                                  )}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                }

                const active = isExactActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMobileOpenOn(null)}
                      className={cn(
                        "flex items-center justify-between py-4 text-base font-medium text-ink",
                        active && "text-accent-text",
                      )}
                    >
                      {item.label}
                      <Icon name="arrow-right" size={16} />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="py-4 sm:hidden">
              <Link
                href={contactCta.href}
                onClick={() => setMobileOpenOn(null)}
                className={buttonStyles("primary", "w-full")}
              >
                {contactCta.label}
                <Icon name="arrow-up-right" size={16} />
              </Link>
            </div>
          </Container>
        </nav>
      )}

    </header>
  );
}
