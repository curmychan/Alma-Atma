import { NextResponse } from "next/server";
import { z } from "zod";
import { mentorSchema, menteeSchema, partnerSchema, contactSchema } from "@/lib/forms";
import { maybeSendEmail, maybeStoreInAirtable } from "@/lib/integrations";

const typeSchema = z.enum(["mentor", "mentee", "partner", "contact"]);

function isSpam(honeypot?: string) {
  return Boolean(honeypot && honeypot.trim().length > 0);
}

export async function POST(req: Request, { params }: { params: { type: string } }) {
  const parsedType = typeSchema.safeParse(params.type);
  if (!parsedType.success) {
    return NextResponse.json({ ok: false, error: "Invalid form type" }, { status: 404 });
  }

  const type = parsedType.data;
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });

  try {
    if (type === "mentor") {
      const data = mentorSchema.parse(body);
      if (isSpam(data.company)) return NextResponse.json({ ok: true });
      await maybeStoreInAirtable({
        table: process.env.AIRTABLE_TABLE_MENTOR ?? "Mentor Applications",
        fields: { ...data, submittedAt: new Date().toISOString() }
      });
      await maybeSendEmail({
        to: data.email,
        subject: "We received your mentor application — Alma Atma Network",
        html: `<p>Hi ${data.firstName},</p><p>Thanks for applying to be a mentor with Alma Atma Network. We’ll review your questionnaire and follow up with next steps.</p><p>— Alma Atma Network</p>`
      });
      const notify = process.env.NOTIFY_EMAIL;
      if (notify) {
        await maybeSendEmail({
          to: notify,
          subject: "New Mentor Application",
          html: `<p>New mentor application from ${data.firstName} ${data.lastName} (${data.email}).</p>`
        });
      }
      return NextResponse.json({ ok: true });
    }

    if (type === "mentee") {
      const data = menteeSchema.parse(body);
      if (isSpam(data.company)) return NextResponse.json({ ok: true });
      await maybeStoreInAirtable({
        table: process.env.AIRTABLE_TABLE_MENTEE ?? "Mentee Applications",
        fields: { ...data, submittedAt: new Date().toISOString() }
      });
      await maybeSendEmail({
        to: data.email,
        subject: "We received your mentee application — Alma Atma Network",
        html: `<p>Hi ${data.firstName},</p><p>Thanks for applying as a mentee. We’ll review your questionnaire and follow up with next steps.</p><p>— Alma Atma Network</p>`
      });
      const notify = process.env.NOTIFY_EMAIL;
      if (notify) {
        await maybeSendEmail({
          to: notify,
          subject: "New Mentee Application",
          html: `<p>New mentee application from ${data.firstName} ${data.lastName} (${data.email}).</p>`
        });
      }
      return NextResponse.json({ ok: true });
    }

    if (type === "partner") {
      const data = partnerSchema.parse(body);
      if (isSpam(data.company)) return NextResponse.json({ ok: true });
      await maybeStoreInAirtable({
        table: process.env.AIRTABLE_TABLE_PARTNER ?? "Partner Inquiries",
        fields: { ...data, submittedAt: new Date().toISOString() }
      });
      return NextResponse.json({ ok: true });
    }

    if (type === "contact") {
      const data = contactSchema.parse(body);
      if (isSpam(data.company)) return NextResponse.json({ ok: true });
      await maybeStoreInAirtable({
        table: process.env.AIRTABLE_TABLE_CONTACT ?? "Contact Messages",
        fields: { ...data, submittedAt: new Date().toISOString() }
      });
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: false, error: "Unsupported type" }, { status: 400 });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ ok: false, error: "Validation error", issues: e.issues }, { status: 400 });
    }
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
