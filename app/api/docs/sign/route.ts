import { NextResponse } from "next/server";
import { z } from "zod";
import { maybeStoreInAirtable } from "@/lib/integrations";

const schema = z.object({
  doc: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email(),
  attestation: z.boolean(),
  signature: z.string().min(2),
  date: z.string().min(1),
  company: z.string().optional().default("")
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });

  try {
    const data = schema.parse(body);
    if (data.company?.trim()) return NextResponse.json({ ok: true }); // honeypot

    await maybeStoreInAirtable({
      table: process.env.AIRTABLE_TABLE_DOCS ?? "Document Signatures",
      fields: { ...data, submittedAt: new Date().toISOString() }
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ ok: false, error: "Validation error", issues: e.issues }, { status: 400 });
    }
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
