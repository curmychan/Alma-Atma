"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export type AccordionItem = { q: string; a: string };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div key={idx} className="rounded-2xl bg-brandwhite shadow-soft ring-1 ring-midnight/10">
            <button
              className="flex w-full items-center justify-between gap-6 p-5 text-left"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className="font-medium text-midnight">{it.q}</span>
              <span
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-full bg-aeroblue text-midnight transition",
                  isOpen && "rotate-45"
                )}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 text-sm text-midnight/80">
                {it.a}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
