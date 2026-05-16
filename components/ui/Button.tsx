import Link from "next/link";
import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "outline";
};

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "outline";
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-[8px] px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2";

const variants = {
  primary:
    "bg-slate-950 text-white shadow-soft hover:bg-primary-600 hover:shadow-card hover:-translate-y-0.5",
  outline:
    "border border-slate-200 bg-white text-slate-900 hover:border-primary-500 hover:text-primary-600 hover:-translate-y-0.5"
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props} />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: LinkButtonProps) {
  return (
    <Link className={cn(baseStyles, variants[variant], className)} {...props} />
  );
}
