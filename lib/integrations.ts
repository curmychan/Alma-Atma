type AnyRecord = Record<string, unknown>;

function env(name: string) {
  const v = process.env[name];
  return v && v.length > 0 ? v : undefined;
}

export async function maybeSendEmail(args: {
  to: string;
  subject: string;
  html: string;
}) {
  const apiKey = env("RESEND_API_KEY");
  const from = env("RESEND_FROM") ?? "Alma Atma Network <no-reply@alma-atma.org>";
  if (!apiKey) return { ok: false, skipped: true as const };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: args.to,
      subject: args.subject,
      html: args.html
    })
  });

  if (!res.ok) {
    const text = await res.text();
    return { ok: false, skipped: false as const, error: text };
  }
  return { ok: true, skipped: false as const };
}

export async function maybeStoreInAirtable(args: {
  table: string;
  fields: AnyRecord;
}) {
  const apiKey = env("AIRTABLE_API_KEY");
  const baseId = env("AIRTABLE_BASE_ID");
  if (!apiKey || !baseId) return { ok: false, skipped: true as const };

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(args.table)}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ records: [{ fields: args.fields }] })
  });

  if (!res.ok) {
    const text = await res.text();
    return { ok: false, skipped: false as const, error: text };
  }

  return { ok: true, skipped: false as const };
}
