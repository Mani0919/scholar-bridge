"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="rounded-[8px] bg-cta-gradient p-6 text-white shadow-card sm:p-10"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Start now
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Start Your Academic Journey Today</h2>
            <p className="mt-3 max-w-2xl text-sm text-white/80">
              Share your project scope and receive a tailored academic roadmap within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="outline" className="border-white/50 text-black hover:border-white">
              Contact Us
            </ButtonLink>
            <ButtonLink href="/phd-services" className="bg-white text-slate-900 hover:text-slate-900">
              Explore Services
            </ButtonLink>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
