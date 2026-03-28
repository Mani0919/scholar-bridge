"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          ScholarBridge
          <span className="ml-2 inline-flex rounded-full bg-primary-100 px-2 py-0.5 text-xs text-primary-700">
            Academic
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium text-slate-600 transition-colors hover:text-primary-600",
                  isActive && "text-primary-600"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/contact" variant="outline">
            Contact Us
          </ButtonLink>
          <ButtonLink href="/services">Get Started</ButtonLink>
        </div>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-2xl border border-slate-200 p-2 text-slate-700 lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white px-6 pb-6 sm:px-10 lg:hidden">
          <div className="mt-4 flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm font-medium text-slate-600",
                    isActive && "text-primary-600"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex flex-col gap-3 pt-2">
              <ButtonLink href="/contact" variant="outline">
                Contact Us
              </ButtonLink>
              <ButtonLink href="/services">Get Started</ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
