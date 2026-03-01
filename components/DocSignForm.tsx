"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export function DocSignForm({ docTitle }: { docTitle: string }) {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [data, setData] = useState({
    doc: docTitle,
    name: "",
    email: "",
    attestation: false,
    signature: "",
    date: today,
    company: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const res = await fetch("/api/docs/sign", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      setStatus("success");
      setMessage("Signature received. Thank you.");
      setData((d) => ({ ...d, name: "", email: "", attestation: false, signature: "" }));
    } else {
      const j = await res.json().catch(() => ({}));
      setStatus("error");
      setMessage(j?.error ?? "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl bg-brandwhite p-6 shadow-soft ring-1 ring-midnight/10">
      <div className="text-sm text-midnight/80">
        If this document is marked as required for your application, please complete the signature below.
      </div>

      {/* honeypot */}
      <div className="hidden">
        <label>
          Company
          <input
            value={data.company}
            onChange={(e) => setData((d) => ({ ...d, company: e.target.value }))}
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-midnight">Full name</span>
        <input
          className="mt-1 w-full rounded-2xl border border-midnight/20 px-4 py-2 text-sm"
          value={data.name}
          onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
          required
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-midnight">Email</span>
        <input
          className="mt-1 w-full rounded-2xl border border-midnight/20 px-4 py-2 text-sm"
          type="email"
          value={data.email}
          onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
          required
        />
      </label>

      <label className="flex items-start gap-3 rounded-2xl bg-aeroblue/30 p-4 ring-1 ring-midnight/10">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-midnight"
          checked={data.attestation}
          onChange={(e) => setData((d) => ({ ...d, attestation: e.target.checked }))}
          required
        />
        <span className="text-sm text-midnight/80">
          I have read this document and agree to participate under these guidelines (draft placeholder until final documents are uploaded).
        </span>
      </label>

      <label className="block">
        <span className="text-sm font-medium text-midnight">Typed signature</span>
        <input
          className="mt-1 w-full rounded-2xl border border-midnight/20 px-4 py-2 text-sm"
          placeholder="Type your full name"
          value={data.signature}
          onChange={(e) => setData((d) => ({ ...d, signature: e.target.value }))}
          required
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-midnight">Date</span>
        <input
          className="mt-1 w-full rounded-2xl border border-midnight/20 px-4 py-2 text-sm"
          type="date"
          value={data.date}
          onChange={(e) => setData((d) => ({ ...d, date: e.target.value }))}
          required
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "inline-flex items-center justify-center rounded-2xl bg-midnight px-5 py-2.5 text-sm font-medium text-brandwhite transition hover:bg-tealslate",
          status === "submitting" && "opacity-70"
        )}
      >
        {status === "submitting" ? "Submitting…" : "Submit signature"}
      </button>

      {message ? (
        <p className={cn("text-sm", status === "success" ? "text-tealslate" : "text-midnight/80")}>{message}</p>
      ) : null}
    </form>
  );
}
