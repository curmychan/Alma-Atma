import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { events } from "@/lib/events";
import { formatDate } from "@/lib/utils";

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug);
  if (!event) return notFound();

  return (
    <>
      <PageHeader
        eyebrow="Event"
        title={event.title}
        description={event.summary}
      />
      <Section>
        <Container className="max-w-3xl">
          <div className="flex items-center justify-between gap-4">
            <Badge>{formatDate(event.date)}</Badge>
            <span className="text-sm text-tealslate">{event.location}</span>
          </div>

          <div className="mt-8 rounded-2xl bg-brandwhite p-8 shadow-soft ring-1 ring-midnight/10">
            <h2 className="font-heading text-2xl text-midnight">Details</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-midnight/80">
              {event.details.map((d, idx) => <li key={idx}>{d}</li>)}
            </ul>
            <p className="mt-6 text-xs text-midnight/60">
              Replace these sample events with your real event content (MDX or CMS) when ready.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
