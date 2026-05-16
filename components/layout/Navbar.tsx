"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GraduationCap, Menu, Phone, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/phd-services", label: "PhD Services" },
  { href: "/rd-projects", label: "R&D Projects" },
  { href: "/phd-admissions", label: "PhD Admissions" },
  { href: "/eb1a", label: "EB-1A" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl"
            : "border-b border-slate-100 bg-white/95 backdrop-blur-md"
        )}
      >
        <div className="h-[3px] w-full bg-gradient-to-r from-slate-950 via-primary-500 to-slate-950" />

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6 xl:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-slate-950 text-primary-400 shadow-md">
              <GraduationCap size={16} />
            </span>
            <span className="hidden text-[0.9rem] font-bold tracking-tight text-slate-950 lg:block">
              The Paper <span className="text-primary-600">Publications</span>
            </span>
            <span className="text-[0.9rem] font-bold tracking-tight text-slate-950 lg:hidden">
              TPP
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "whitespace-nowrap rounded-[8px] px-2.5 py-2 text-[0.78rem] font-semibold transition-colors",
                    isActive
                      ? "bg-primary-100 text-primary-800"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-1.5 lg:flex">
            <Link
              href="/abroad-admissions#application-form"
              className="whitespace-nowrap rounded-[8px] bg-primary-500 px-3 py-2 text-[0.75rem] font-semibold text-white shadow-sm transition-colors hover:bg-primary-600"
            >
              Abroad PhD Admissions
            </Link>
            <Link
              href="/apply-eb1a"
              className="inline-flex items-center gap-1 whitespace-nowrap rounded-[8px] bg-slate-950 px-3 py-2 text-[0.75rem] font-semibold text-white shadow-sm transition-colors hover:bg-slate-800"
            >
              <Sparkles size={12} />
              Apply EB-1A
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={site.phoneHref}
              aria-label="Call The Paper Publications"
              className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-slate-200 bg-white text-primary-600"
            >
              <Phone size={18} />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-slate-200 bg-slate-950 text-white"
              aria-label="Open navigation"
              aria-expanded={open}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[999] overflow-y-auto bg-white lg:hidden">
          <div className="h-[3px] w-full bg-gradient-to-r from-slate-950 via-primary-500 to-slate-950" />
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-slate-950 text-primary-400">
                <GraduationCap size={16} />
              </span>
              <span className="text-sm font-bold text-slate-950">
                The Paper <span className="text-primary-600">Publications</span>
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-slate-950 text-white"
              aria-label="Close navigation"
            >
              <X size={18} />
            </button>
          </div>

          <div className="px-5 py-6 sm:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-3">
              <p className="px-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary-600">
                Menu
              </p>

              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-[8px] border px-4 py-4 text-base font-semibold transition-colors",
                      isActive
                        ? "border-primary-200 bg-primary-50 text-primary-800"
                        : "border-slate-200 text-slate-900 hover:border-primary-200 hover:bg-primary-50"
                    )}
                  >
                    {link.label}
                    <span className="text-primary-500">/</span>
                  </Link>
                );
              })}

              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <Link
                  href="/abroad-admissions#application-form"
                  onClick={() => setOpen(false)}
                  className="rounded-[8px] bg-primary-500 px-4 py-4 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-600"
                >
                  Abroad PhD Admissions
                </Link>
                <Link
                  href="/apply-eb1a"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-[8px] bg-slate-950 px-4 py-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  <Sparkles size={14} />
                  Apply EB-1A
                </Link>
              </div>

              <a
                href={site.phoneHref}
                className="rounded-[8px] border border-slate-200 px-4 py-4 text-center text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
              >
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
