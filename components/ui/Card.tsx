"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef } from "react";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(15, 23, 42, 0.18)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "rounded-2xl border border-slate-100 bg-white p-6 shadow-soft",
        className
      )}
      {...props}
    />
  );
}
