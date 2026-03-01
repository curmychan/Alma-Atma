import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  href,
  children,
  variant = "primary",
  className
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-midnight text-brandwhite hover:bg-tealslate"
      : variant === "secondary"
        ? "bg-aeroblue text-midnight hover:bg-lavendermist"
        : "bg-transparent text-midnight hover:bg-aeroblue";

  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-midnight focus-visible:ring-offset-2 focus-visible:ring-offset-brandwhite";

  if (href) {
    return (
      <Link href={href} className={cn(base, styles, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(base, styles, className)} type="button">
      {children}
    </button>
  );
}
