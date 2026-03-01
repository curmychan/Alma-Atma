"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Field =
  | { name: string; label: string; type: "text" | "email" | "url"; placeholder?: string; required?: boolean }
  | { name: string; label: string; type: "textarea"; placeholder?: string; required?: boolean; rows?: number }
  | { name: string; label: string; type: "checkbox"; description?: string; required?: boolean };

export function Form({
  action,
  fields,
  submitLabel
}: {
  action: string;
  fields: Field[];
  submitLabel: string;
}) {
  const initial = useMemo(() => {
    const obj: Record<string, any> = { company: "" };
    for (const f of fields) {
      if (f.type === "checkbox") obj[f.name] = false;
      else obj[f.name] = "";
    }
    return obj;
  }, [fields]);

  const [data, setData] = useState<Record<string, any>>(initial);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const res = await fetch(action, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      setStatus("success");
      setMessage("Thanks — we received your submission.");
      setData(initial);
    } else {
      const j = await res.json().catch(() => ({}));
      setStatus("error");
      setMessage(j?.error ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* honeypot */}
      <div className="hidden">
        <label>
          Company
          <input
            value={data.company ?? ""}
            onChange={(e) => setData((d) => ({ ...d, company: e.target.value }))}
          />
        </label>
      </div>

      {fields.map((f) => {
        if (f.type === "checkbox") {
          return (
            <label key={f.name} className="flex items-start gap-3 rounded-2xl bg-aeroblue/30 p-4 ring-1 ring-midnight/10">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-midnight"
                checked={Boolean(data[f.name])}
                onChange={(e) => setData((d) => ({ ...d, [f.name]: e.target.checked }))}
                required={Boolean(f.required)}
              />
              <span>
                <span className="block font-medium text-midnight">{f.label}</span>
                {f.description ? <span className="mt-1 block text-sm text-midnight/70">{f.description}</span> : null}
              </span>
            </label>
          );
        }

        const common =
          "mt-1 w-full rounded-2xl border border-midnight/20 bg-brandwhite px-4 py-2 text-sm text-midnight shadow-sm focus:border-midnight focus:outline-none focus:ring-2 focus:ring-midnight/20";

        return (
          <label key={f.name} className="block">
            <span className="text-sm font-medium text-midnight">{f.label}{f.required ? " *" : ""}</span>
            {f.type === "textarea" ? (
              <textarea
                className={common}
                rows={f.rows ?? 5}
                placeholder={f.placeholder}
                value={data[f.name] ?? ""}
                onChange={(e) => setData((d) => ({ ...d, [f.name]: e.target.value }))}
                required={Boolean(f.required)}
              />
            ) : (
              <input
                className={common}
                type={f.type}
                placeholder={f.placeholder}
                value={data[f.name] ?? ""}
                onChange={(e) => setData((d) => ({ ...d, [f.name]: e.target.value }))}
                required={Boolean(f.required)}
              />
            )}
          </label>
        );
      })}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "inline-flex items-center justify-center rounded-2xl bg-midnight px-5 py-2.5 text-sm font-medium text-brandwhite transition hover:bg-tealslate focus:outline-none focus-visible:ring-2 focus-visible:ring-midnight focus-visible:ring-offset-2",
          status === "submitting" && "opacity-70"
        )}
      >
        {status === "submitting" ? "Submitting…" : submitLabel}
      </button>

      {message ? (
        <p className={cn("text-sm", status === "success" ? "text-tealslate" : "text-midnight/80")}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
