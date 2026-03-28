"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const testimonials = [
  {
    name: "Dr. Mira Lawson",
    role: "Associate Professor, Biomedical Sciences",
    quote:
      "ScholarBridge transformed my raw draft into a publishable manuscript in two weeks. The journal feedback was overwhelmingly positive."
  },
  {
    name: "Rahul Mehta",
    role: "PhD Candidate, Computer Engineering",
    quote:
      "Their admission guidance and SOP editing helped me secure offers from three universities abroad."
  },
  {
    name: "Prof. Daniel Wu",
    role: "Research Director, Materials Lab",
    quote:
      "Professional, responsive, and detail-oriented. The plagiarism and AI reduction checks were thorough."
  }
];

export function Testimonials() {
  return (
    <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-16">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
          Testimonials
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">
          Trusted by researchers worldwide
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="h-full">
            <p className="text-sm text-slate-600">“{testimonial.quote}”</p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-900">
                {testimonial.name}
              </p>
              <p className="text-xs text-slate-500">{testimonial.role}</p>
            </div>
          </Card>
        ))}
      </motion.div>
    </section>
  );
}
