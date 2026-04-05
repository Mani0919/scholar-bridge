"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { ArrowUpRight } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 }
};

export function ServicesPreview() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
            Services
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">
            Comprehensive academic support at every stage
          </h2>
          <p className="max-w-2xl text-sm text-slate-600">
            Choose from research writing, publication support, admission consulting,
            and advanced editing services tailored to your discipline.
          </p>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
        >
          View all services <ArrowUpRight size={16} />
        </Link>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {services.slice(0, 6).map((service) => (
          <motion.div key={service.slug} variants={item}>
            <Link href={`/services/${service.slug}`}>
              <Card className="h-full border border-slate-100/80 bg-gradient-to-br from-white via-primary-50/40 to-accent-50/40">
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {service.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
                  Learn more <ArrowUpRight size={16} />
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
