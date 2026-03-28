import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef } from "react";

export function Section({ className, ...props }: ComponentPropsWithoutRef<"section">) {
  return (
    <section
      className={cn("px-6 py-16 sm:px-10 lg:px-16", className)}
      {...props}
    />
  );
}
