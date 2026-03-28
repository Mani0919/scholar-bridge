"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type CardProps = HTMLMotionProps<"div">;

export function Card({ className, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 200 }}
      className={cn(
        "rounded-2xl bg-white p-6 shadow-sm transition-all",
        className
      )}
      {...props}
    />
  );
}