"use client";

import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type Variant = "gold" | "ghost" | "panel";

export type OmButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const base =
  "inline-flex items-center justify-center gap-2 px-4 py-2 text-xs uppercase tracking-wider transition disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(202,161,90,0.6)]";

export function Button({
  className,
  type = "button",
  ...props
}: OmButtonProps) {
  return (
    <button type={type} className={cn(base, "rounded", className)} {...props} />
  );
}
