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
          <motion.div key={service.slug} variants={item} className="h-full">
            <Link href={`/services/${service.slug}`} className="group relative flex h-full items-stretch outline-none">
              {/* Outer hover glow */}
              <div className="absolute inset-0 rounded-[8px] bg-gradient-to-br from-primary-200/50 via-slate-100/20 to-accent-200/50 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />
              
              <Card className="relative flex h-full w-full flex-col overflow-hidden border border-slate-200/50 bg-white/70 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary-200/60 group-hover:bg-white/95 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                {/* Abstract shape */}
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary-400/10 to-accent-400/10 transition-transform duration-700 ease-out group-hover:scale-[2.5]" />
                
                <h3 className="relative z-10 text-[1.1rem] font-bold tracking-tight text-slate-800 transition-colors duration-300 group-hover:text-primary-600">
                  {service.title}
                </h3>
                
                <p className="relative z-10 mt-3 flex-grow text-[0.88rem] leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                  {service.description}
                </p>
                
                <div className="relative z-10 mt-6 inline-flex w-fit items-center gap-2 text-[0.82rem] font-bold text-slate-400 transition-colors duration-300 group-hover:text-primary-600">
                  <span>Explore Service</span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-primary-50">
                    <ArrowUpRight size={14} className="text-slate-500 transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-primary-600" />
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
