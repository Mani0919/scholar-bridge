"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, GraduationCap, Send, Sparkles, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { countries } from "@/data/countries";
import { services } from "@/data/services";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [phdAdmissionsOpen, setPhdAdmissionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [phdSubmitted, setPhdSubmitted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countrySearch, setCountrySearch] = useState("");
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const countryRef = useRef<HTMLDivElement>(null);

  const filteredCountries = countries.filter((c) =>
    c.toLowerCase().includes(countrySearch.toLowerCase())
  );

  /* close country dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
        setCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when modal is open */
  useEffect(() => {
    document.body.style.overflow = admissionsOpen || phdAdmissionsOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [admissionsOpen, phdAdmissionsOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const country = String(formData.get("country") || "");
    const additionalInfo = String(formData.get("additionalInfo") || "");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "Abroad Admissions", name, email, phone, country, additionalInfo })
      });
    } catch (error) {
      console.error(error);
    }

    setSubmitted(true);
    setTimeout(() => {
      setAdmissionsOpen(false);
      setSubmitted(false);
    }, 2200);
  };

  const handlePhdSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const researchArea = String(formData.get("researchArea") || "");
    const additionalInfo = String(formData.get("additionalInfo") || "");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "PH-D Admissions", name, email, phone, researchArea, additionalInfo })
      });
    } catch (error) {
      console.error(error);
    }

    setPhdSubmitted(true);
    setTimeout(() => {
      setPhdAdmissionsOpen(false);
      setPhdSubmitted(false);
    }, 2200);
  };

  return (
    <>
      {/* ───── Header ───── */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-white/70 shadow-[0_4px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "bg-white/50 backdrop-blur-md"
        )}
      >
        {/* thin accent bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
          {/* ── Logo ── */}
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <GraduationCap size={18} strokeWidth={2.2} />
            </span>
            <span className="text-[1.1rem] font-bold tracking-tight text-slate-900">
              The Paper{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Publications
              </span>
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              const isServices = link.href === "/services";

              if (isServices) {
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={cn(
                        "relative rounded-lg px-4 py-2 text-[0.82rem] font-medium transition-all duration-300",
                        isActive
                          ? "text-primary-600"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className="ml-1 inline-block translate-y-[1px] text-slate-400 transition-transform duration-200 group-hover:rotate-180"
                      />
                      {isActive && (
                        <span className="absolute bottom-0.5 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
                      )}
                    </Link>

                    {/* Services dropdown (desktop hover) */}
                    <div className="pointer-events-none absolute left-1/2 top-full z-40 mt-2 w-72 -translate-x-1/2 -translate-y-1 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                      <div className="rounded-2xl border border-slate-100 bg-white/95 p-2 shadow-xl backdrop-blur-md">
                        <div className="max-h-80 overflow-auto py-1">
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="block rounded-lg px-3 py-2 text-[0.82rem] text-slate-600 transition-colors duration-200 hover:bg-slate-50 hover:text-slate-900"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-4 py-2 text-[0.82rem] font-medium transition-all duration-300",
                    isActive
                      ? "text-primary-600"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
                  )}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => setPhdAdmissionsOpen(true)}
              className="relative rounded-lg px-4 py-2 text-[0.82rem] font-medium transition-all duration-300 text-slate-500 hover:bg-slate-50 hover:text-slate-900"
            >
              PH-D Admissions
            </button>
          </nav>

          {/* ── Desktop CTA Buttons ── */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="rounded-xl border border-slate-200 px-5 py-2 text-[0.82rem] font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-600 hover:shadow-sm"
            >
              Contact Us
            </Link>
            <button
              type="button"
              onClick={() => setAdmissionsOpen(true)}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-5 py-2 text-[0.82rem] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-500/25"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative flex items-center gap-1.5">
                <Sparkles size={14} />
                Aboard Admissions
              </span>
            </button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className={cn(
              "relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border text-slate-600 transition-all duration-300 lg:hidden",
              open
                ? "border-primary-200 bg-primary-50 text-primary-600"
                : "border-slate-200 bg-white hover:border-primary-200 hover:text-primary-600"
            )}
            aria-label="Toggle navigation"
          >
            <span
              className={cn(
                "transition-all duration-300",
                open ? "rotate-90 scale-110" : "rotate-0 scale-100"
              )}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </span>
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={cn(
            "overflow-hidden border-t border-slate-100/60 bg-white/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden",
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="mx-auto max-w-7xl px-5 pb-6 pt-4 sm:px-8">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => {
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
                      "rounded-xl px-4 py-3 text-[0.9rem] font-medium transition-all duration-300",
                      isActive
                        ? "bg-primary-50 text-primary-600"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                    style={{
                      transitionDelay: open ? `${i * 50}ms` : "0ms",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setPhdAdmissionsOpen(true);
                }}
                className="rounded-xl px-4 py-3 text-left text-[0.9rem] font-medium transition-all duration-300 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                style={{
                  transitionDelay: open ? `${navLinks.length * 50}ms` : "0ms",
                }}
              >
                PH-D Admissions
              </button>
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-slate-200 px-5 py-3 text-center text-[0.85rem] font-semibold text-slate-700 transition-all duration-300 hover:border-primary-300 hover:text-primary-600"
              >
                Contact Us
              </Link>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setAdmissionsOpen(true);
                }}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-5 py-3 text-[0.85rem] font-semibold text-white shadow-md transition-all duration-300 active:scale-[0.98]"
              >
                <Sparkles size={14} />
                Aboard Admissions
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ───── Admissions Modal ───── */}
      {admissionsOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/60 px-4 py-6 backdrop-blur-sm animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="admissions-title"
          onClick={() => {
            if (!submitted) setAdmissionsOpen(false);
          }}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/5 animate-in slide-in-from-bottom-4 zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* gradient header */}
            <div className="relative overflow-hidden bg-gradient-to-r from-primary-500 to-accent-500 px-6 pb-5 pt-6">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10" />
              <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-white/10" />
              <div className="relative flex items-start justify-between">
                <div>
                  <h2
                    id="admissions-title"
                    className="flex items-center gap-2 text-lg font-bold text-white"
                  >
                    <GraduationCap size={20} />
                    Aboard Admissions
                  </h2>
                  <p className="mt-1.5 text-[0.8rem] leading-relaxed text-white/80">
                    Share your details and we&apos;ll guide you through the next
                    steps.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setAdmissionsOpen(false)}
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-colors duration-200 hover:bg-white/30"
                  aria-label="Close form"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* form body */}
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 px-6 py-16">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-8 w-8"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <p className="text-lg font-semibold text-slate-900">
                  Application Submitted!
                </p>
                <p className="text-sm text-slate-500">
                  We&apos;ll reach out to you shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-5 px-6 pb-6 pt-6" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="group relative">
                  <input
                    id="admissions-name"
                    name="name"
                    type="text"
                    required
                    placeholder=" "
                    className="peer w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 pb-2.5 pt-5 text-sm text-slate-900 transition-all duration-200 focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
                  />
                  <label
                    htmlFor="admissions-name"
                    className="pointer-events-none absolute left-4 top-2 text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-[0.65rem] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary-500"
                  >
                    Full Name
                  </label>
                </div>

                {/* Email */}
                <div className="group relative">
                  <input
                    id="admissions-email"
                    name="email"
                    type="email"
                    required
                    placeholder=" "
                    className="peer w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 pb-2.5 pt-5 text-sm text-slate-900 transition-all duration-200 focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
                  />
                  <label
                    htmlFor="admissions-email"
                    className="pointer-events-none absolute left-4 top-2 text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-[0.65rem] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary-500"
                  >
                    Email Address
                  </label>
                </div>

                {/* Phone + Country in a row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="group relative">
                    <input
                      id="admissions-phone"
                      name="phone"
                      type="tel"
                      placeholder=" "
                      className="peer w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 pb-2.5 pt-5 text-sm text-slate-900 transition-all duration-200 focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
                    />
                    <label
                      htmlFor="admissions-phone"
                      className="pointer-events-none absolute left-4 top-2 text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-[0.65rem] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary-500"
                    >
                      Phone
                    </label>
                  </div>
                  <div className="group relative" ref={countryRef}>
                    {/* hidden native input for form validation */}
                    <input
                      type="hidden"
                      name="country"
                      value={selectedCountry}
                      required
                    />
                    <button
                      type="button"
                      id="admissions-country"
                      onClick={() => setCountryDropdownOpen((v) => !v)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl border bg-slate-50/50 px-4 pb-2.5 pt-5 text-left text-sm transition-all duration-200",
                        countryDropdownOpen
                          ? "border-primary-400 bg-white ring-2 ring-primary-100"
                          : "border-slate-200",
                        selectedCountry ? "text-slate-900" : "text-slate-400"
                      )}
                    >
                      <span className="truncate">
                        {selectedCountry || "Select country"}
                      </span>
                      <ChevronDown
                        size={15}
                        className={cn(
                          "flex-shrink-0 text-slate-400 transition-transform duration-200",
                          countryDropdownOpen && "rotate-180 text-primary-500"
                        )}
                      />
                    </button>
                    <span
                      className={cn(
                        "pointer-events-none absolute left-4 text-[0.65rem] font-semibold uppercase tracking-wider transition-all duration-200",
                        selectedCountry || countryDropdownOpen
                          ? "top-2 text-primary-500"
                          : "top-2 text-slate-400"
                      )}
                    >
                      Country
                    </span>

                    {/* Dropdown */}
                    {countryDropdownOpen && (
                      <div className="absolute left-0 right-0 top-full z-50 mt-1.5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg animate-in slide-in-from-bottom-4 duration-200">
                        {/* search bar */}
                        <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2.5">
                          <Search size={14} className="flex-shrink-0 text-slate-400" />
                          <input
                            type="text"
                            placeholder="Search countries..."
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                            autoFocus
                          />
                        </div>
                        {/* list */}
                        <ul className="max-h-44 overflow-y-auto overscroll-contain py-1">
                          {filteredCountries.length === 0 ? (
                            <li className="px-4 py-3 text-center text-xs text-slate-400">
                              No countries found
                            </li>
                          ) : (
                            filteredCountries.map((country) => (
                              <li key={country}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedCountry(country);
                                    setCountryDropdownOpen(false);
                                    setCountrySearch("");
                                  }}
                                  className={cn(
                                    "flex w-full items-center px-4 py-2 text-left text-sm transition-colors duration-150 hover:bg-primary-50 hover:text-primary-600",
                                    selectedCountry === country
                                      ? "bg-primary-50 font-medium text-primary-600"
                                      : "text-slate-700"
                                  )}
                                >
                                  {country}
                                </button>
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="group relative">
                  <textarea
                    id="admissions-info"
                    name="additionalInfo"
                    rows={3}
                    placeholder=" "
                    className="peer w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 pb-2.5 pt-5 text-sm text-slate-900 transition-all duration-200 focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
                  />
                  <label
                    htmlFor="admissions-info"
                    className="pointer-events-none absolute left-4 top-2 text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-[0.65rem] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary-500"
                  >
                    Additional Information
                  </label>
                </div>

                {/* Actions */}
                <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setAdmissionsOpen(false)}
                    className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition-all duration-200 hover:border-slate-300 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/25"
                  >
                    Submit Application
                    <Send
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ───── PH-D Admissions Modal ───── */}
      {phdAdmissionsOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/60 px-4 py-6 backdrop-blur-sm animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="phd-admissions-title"
          onClick={() => {
            if (!phdSubmitted) setPhdAdmissionsOpen(false);
          }}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/5 animate-in slide-in-from-bottom-4 zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* gradient header */}
            <div className="relative overflow-hidden bg-gradient-to-r from-primary-500 to-accent-500 px-6 pb-5 pt-6">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10" />
              <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-white/10" />
              <div className="relative flex items-start justify-between">
                <div>
                  <h2
                    id="phd-admissions-title"
                    className="flex items-center gap-2 text-lg font-bold text-white"
                  >
                    <GraduationCap size={20} />
                    PH-D Admissions
                  </h2>
                  <p className="mt-1.5 text-[0.8rem] leading-relaxed text-white/80">
                    Share your details and we&apos;ll guide you through the next
                    steps.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPhdAdmissionsOpen(false)}
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-colors duration-200 hover:bg-white/30"
                  aria-label="Close form"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* form body */}
            {phdSubmitted ? (
              <div className="flex flex-col items-center justify-center gap-4 px-6 py-16">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-8 w-8"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <p className="text-lg font-semibold text-slate-900">
                  Application Submitted!
                </p>
                <p className="text-sm text-slate-500">
                  We&apos;ll reach out to you shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-5 px-6 pb-6 pt-6" onSubmit={handlePhdSubmit}>
                {/* Name */}
                <div className="group relative">
                  <input
                    id="phd-name"
                    name="name"
                    type="text"
                    required
                    placeholder=" "
                    className="peer w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 pb-2.5 pt-5 text-sm text-slate-900 transition-all duration-200 focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
                  />
                  <label
                    htmlFor="phd-name"
                    className="pointer-events-none absolute left-4 top-2 text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-[0.65rem] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary-500"
                  >
                    Full Name
                  </label>
                </div>

                {/* Email */}
                <div className="group relative">
                  <input
                    id="phd-email"
                    name="email"
                    type="email"
                    required
                    placeholder=" "
                    className="peer w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 pb-2.5 pt-5 text-sm text-slate-900 transition-all duration-200 focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
                  />
                  <label
                    htmlFor="phd-email"
                    className="pointer-events-none absolute left-4 top-2 text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-[0.65rem] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary-500"
                  >
                    Email Address
                  </label>
                </div>

                {/* Phone + Research Area in a row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="group relative">
                    <input
                      id="phd-phone"
                      name="phone"
                      type="tel"
                      placeholder=" "
                      className="peer w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 pb-2.5 pt-5 text-sm text-slate-900 transition-all duration-200 focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
                    />
                    <label
                      htmlFor="phd-phone"
                      className="pointer-events-none absolute left-4 top-2 text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-[0.65rem] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary-500"
                    >
                      Phone
                    </label>
                  </div>
                  <div className="group relative">
                    <input
                      id="phd-research"
                      name="researchArea"
                      type="text"
                      placeholder=" "
                      className="peer w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 pb-2.5 pt-5 text-sm text-slate-900 transition-all duration-200 focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
                    />
                    <label
                      htmlFor="phd-research"
                      className="pointer-events-none absolute left-4 top-2 text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-[0.65rem] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary-500"
                    >
                      Research Area
                    </label>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="group relative">
                  <textarea
                    id="phd-info"
                    name="additionalInfo"
                    rows={3}
                    placeholder=" "
                    className="peer w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 pb-2.5 pt-5 text-sm text-slate-900 transition-all duration-200 focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
                  />
                  <label
                    htmlFor="phd-info"
                    className="pointer-events-none absolute left-4 top-2 text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-[0.65rem] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary-500"
                  >
                    Additional Information
                  </label>
                </div>

                {/* Actions */}
                <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setPhdAdmissionsOpen(false)}
                    className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition-all duration-200 hover:border-slate-300 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/25"
                  >
                    Submit Application
                    <Send
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
