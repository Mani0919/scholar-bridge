"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-glow px-6 pb-20 pt-16 sm:px-10 lg:px-16">
      <div className="absolute right-0 top-0 h-72 w-72 -translate-y-1/3 translate-x-1/4 rounded-full bg-primary-100/60 blur-3xl" />
      <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center rounded-full border border-primary-100 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
            Trusted Academic Partner
          </span>
          <h1 className="text-balance text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl">
            Your Trusted Partner for Research, Publications & Global Academic Success
          </h1>
          <p className="text-base text-slate-600 sm:text-lg">
            From thesis writing to journal submission strategy, we deliver end-to-end
            academic services with rigorous quality checks, rapid turnaround, and
            global compliance standards.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/services">Get Started</ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Contact Us
            </ButtonLink>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-slate-100 bg-white/80 p-8 shadow-card"
        >
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold text-slate-900">
                1200+ successful publications
              </p>
              <p className="text-sm text-slate-500">
                Scopus, Springer, IEEE, and top-tier international journals.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold text-slate-900">Dedicated PhD advisors</p>
              <p className="text-sm text-slate-500">
                Personalized guidance for admission strategy, SOPs, and LORs.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold text-slate-900">Zero plagiarism policy</p>
              <p className="text-sm text-slate-500">
                Multi-layer checks for originality, citation accuracy, and quality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
