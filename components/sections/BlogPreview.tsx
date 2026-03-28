"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogs } from "@/data/blogs";
import { Card } from "@/components/ui/Card";
import { ArrowUpRight } from "lucide-react";

export function BlogPreview() {
  const latest = blogs.slice(0, 3);
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
            Insights
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">
            Latest publishing guidance
          </h2>
          <p className="max-w-2xl text-sm text-slate-600">
            Practical advice on peer review, journal targeting, and research visibility.
          </p>
        </div>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
        >
          Read all articles <ArrowUpRight size={16} />
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {latest.map((blog) => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
            <Card className="h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
                {blog.date}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {blog.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                {blog.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
                Read more <ArrowUpRight size={16} />
              </div>
            </Card>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
