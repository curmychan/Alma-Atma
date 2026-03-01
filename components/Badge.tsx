import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-aeroblue px-3 py-1 text-xs font-medium text-midnight",
        className
      )}
    >
      {children}
    </span>
  );
}
